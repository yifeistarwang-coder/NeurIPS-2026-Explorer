# Probabilistic Methods / Monte Carlo and Sampling Methods

概率方法 / 蒙特卡洛与采样

46 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Differentiable Cluster Discovery in Temporal Graphs

**Authors:** Hafizur Rahman; Chi\-Guhn Lee

**ID:** 156759 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1caZVb6zL7>) | [PDF](<https://openreview.net/pdf?id=1caZVb6zL7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156759>)

Existing temporal graph clustering methods suffer from poor optimization dynamics due to reliance on heuristically initialized cluster assignment distribution without considering the dynamic nature of the evolving graph\. The target cluster assignment distribution often conflicts with evolving temporal representations, leading to oscillatory gradients and unstable convergence\. Motivated by the need for differentiable and adaptive clustering in dynamic settings, we propose TGRAIL \(Temporal Graph Alignment and Index Learning\), a novel end\-to\-end framework for temporal graph clustering based on Gumbel–Softmax sampling\. TGRAIL enables discrete cluster assignments while maintaining the gradient flow\. To ensure stable training, we formulate the clustering objective as an expectation over Monte Carlo samples and show that this estimator is both unbiased and variance\-reduced\. Furthermore, we incorporate a temporal consistency loss to preserve the order of interactions across time\. Extensive experiments on six real\-world temporal graph datasets demonstrate that our approach consistently outperforms state\-of\-the\-art baselines, achieving higher clustering accuracy and robustness\. Our results validate the effectiveness of jointly optimizing temporal dynamics and discrete cluster assignments in evolving graphs\.

## Diffusion Path Samplers via Sequential Monte Carlo

**Authors:** James Matthew Young; Paula Cordero\-Encinar; Sebastian Reich; Andrew Duncan; O\. Deniz Akyildiz

**ID:** 152139 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VEHUg2tjj5>) | [PDF](<https://openreview.net/pdf?id=VEHUg2tjj5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152139>)

We develop diffusion\-based samplers for target distributions known up to a normalising constant\. To this end, we rely on the well\-known diffusion path that smoothly interpolates between a simple base distribution and the target, popularised by diffusion models\. We tackle the score estimation problem by developing an efficient sequential Monte Carlo sampler that evolves auxiliary variables from conditional distributions along the path, providing principled score and density estimates for time\-varying distributions\. To control the variance of score estimates, we further propose practical control variate schedules that incur minimal overhead\. We adapt this general framework to paths induced by the Ornstein–Uhlenbeck \(OU\) time\-reversal process, stochastic interpolants, and diffusion annealed Langevin dynamics, outlining their trade\-offs\. Finally, we provide theoretical guarantees and empirically demonstrate the effectiveness of our method on several synthetic and real\-world datasets\.

## Preconditioned Implicit Midpoint Langevin Sampling for Non\-Smooth Bayesian Imaging

**Authors:** Sichen Wang; Zhipeng Lu

**ID:** 155272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6vWdtoSoVB>) | [PDF](<https://openreview.net/pdf?id=6vWdtoSoVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155272>)

We introduce P\-IMLA, a preconditioned implicit\-midpoint Langevin sampler for high\-dimensional log\-concave targets with non\-smooth regularization\. The obstruction is that the large steps enabled by matrix preconditioning are precisely where preconditioned Euler\-\-Maruyama inflates stationary variance\. Implicit midpoint removes this surplus via a Cayley\-transform identity, making P\-IMLA Gaussian\-exact at any step size\. Beyond Gaussians, a Möbius\-monotonicity argument gives an $M$\-Wasserstein rate governed by $\\kappa\_\{\\rm eff\}$ rather than the $\\kappa\_f$ of unpreconditioned IMLA, while backward\-error analysis shows drift\-only rather than Euler\-type diffusion bias\. An $M$\-norm Moreau envelope yields a proximal non\-smooth variant with a three\-term error budget\. Controlled Gaussian and TV\-regularized imaging experiments confirm the predicted separation: the unpreconditioned IMLA degenerates as $\\kappa\_f$ grows, whereas P\-IMLA remains $\\kappa\_\{\\rm eff\}$\-governed and near variance\-exact\.

## Multi\-Marginal Couplings for Metropolis\-\-Hastings

**Authors:** Truong Buu Phan; Gergely Flamich; Ashish Khisti; Shahab Asoodeh

**ID:** 149629 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oddbDsyWXn>) | [PDF](<https://openreview.net/pdf?id=oddbDsyWXn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149629>)

Convergence diagnosis for Markov chain Monte Carlo is a matter of fundamental importance in computational statistics: it determines the resources allocated to a particular sampling problem and influences the practitioner's view of the quality of estimates obtained from a Markov chain\. Motivated by this, we contribute to the emerging class of coupling\-based convergence diagnostic algorithms\. Concretely, we study coupling multiple Metropolis\-\-Hastings chains using multi\-marginal coupling\. We introduce a natural objective for this setting and establish lower and upper bounds by drawing connections to list\-level distribution coupling and distributed pairwise\-matching problems\. This analysis ultimately leads to a shared\-randomness Poisson Monte Carlo construction for coupling multiple Markov chains\. In this process, we avoid a key dimension\-dependent bottleneck in the runtime complexity of classical Poisson Monte Carlo by developing an adaptive rule for updating the point process, yielding significant gains in high\-dimensional settings\. Experiments on grand couplings of Markov chains show that our methods improve coalescence rates across dimensions, reducing meeting times by up to 50\\% compared with existing baselines\.

## Variational Monte Carlo for Quantum Excited States via Nested Low\-Rank Approximation

**Authors:** Minchan Jeong; Jongha \(Jon\) Ryu; Se\-Young Yun; Gregory Wornell

**ID:** 152810 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QEnCFkoftS>) | [PDF](<https://openreview.net/pdf?id=QEnCFkoftS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152810>)

The electronic Schrödinger equation encodes a molecule's electronic structure and quantum properties, but solving it scales exponentially with the number of electrons\. Neural\-network variational Monte Carlo \(VMC\) has reached chemical accuracy on the ground state of small molecules; extending this success to excited states is constrained by two existing paradigms\. Penalty\-based methods are computationally scalable \($O\(K\)$ Laplacian count per step\) but require tuning the overlap\-penalty schedule against the energy gap they aim to compute\. Natural\-excited\-states VMC \(NES\-VMC\) is principled and penalty\-free but couples all $K$ states through a joint $\\det\\Psi$ ansatz that forces $O\(K^2\)$ Laplacians per step\. We resolve this trade\-off via a low\-rank approximation \(LoRA\) reparameterization of the rank\-$K$ variational objective\. The reparameterized objective admits an unbiased gradient estimator via MCMC sampling from the per\-state Born density, and a sequential nesting scheme recovers the bottom\-$K$ eigenfunctions in eigenvalue order without overlap penalties or post\-training diagonalization\. The resulting algorithm, NestedLoRA\-VMC, is penalty\-free, achieves $O\(K\)$ Laplacian count per step, and inherits a global optimality guarantee from the LoRA principle\. On the first\-row atoms \(Li through Ne\) at $K\{=\}10$, it stays within the chemical\-accuracy threshold of NES\-VMC on every atom and outperforms the penalty\-based baseline of Szabó et al\. on seven of the eight\.

## When Metropolis and Hastings Meet Bradley and Terry: Exact MCMC From Preference Voting

**Authors:** Ariel Smogorghevski; Nir Rosenfeld; Yaniv Romano

**ID:** 150747 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fhEDVqcpV8>) | [PDF](<https://openreview.net/pdf?id=fhEDVqcpV8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150747>)

conditioned on desired semantic properties is an emerging challenge in modern generative modeling\. Metropolis\-Hastings \(MH\) provides a principled route to conditional sampling, but requires access to exact pointwise target\-density evaluations, which are not available in generative settings\. Meanwhile, pairwise comparisons by humans or model \`\`judges'' are highly accessible and have proved valuable across diverse applications\. We introduce Pref\-MH, a general exact MH sampler for judge\-induced conditional distributions using only stochastic binary pairwise comparisons\. Our key observation is that the MH unnormalized density ratio matches the preference odds of BT choice models\. The central challenge is that while MH requires precise ratio computation, BT judges provide only sampled binary feedback\. To this end, we develop a valid accept/reject rule whose resulting Markov chain provably converges to the target distribution\. We further show that, for a fixed proposal kernel and budget, Pref\-MH is optimal in the Peskun\-Tierney sense among this class of exact reversible acceptance rules\. Experiments on text generation with LLM judges and image generation with VLM judges demonstrate that Pref\-MH provides a practical and flexible approach to conditional sampling from comparative feedback\.

## BridgeTwist: Twisting Schrödinger Bridges for Training\-Free Conditional Sampling

**Authors:** Mengyu Li; Qianqian Qu; Jun Liu

**ID:** 151085 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d5smsmfpBy>) | [PDF](<https://openreview.net/pdf?id=d5smsmfpBy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151085>)

Generative models are often required to serve many downstream conditional tasks\. In the training\-free setting, a pretrained unconditional model is reused as a prior and combined with a task\-specific likelihood to sample from the corresponding posterior, without retraining the generative model\. While such conditional samplers have been developed for diffusion and flow generative models, training\-free conditional sampling for Schrödinger bridge \(SB\) generative models remains unexplored, despite the growing appeal of SBs as flexible stochastic transport models between general source and target distributions\. We propose BridgeTwist, a training\-free conditional sampler for pretrained SB generative models, formulated as a tempered twisted sequential Monte Carlo scheme\. At each step, the sampler uses a closed\-form plug\-in twist surrogate, which combines the velocity and score fields exposed by SB pretraining into an explicit endpoint predictor\. Since this surrogate is less reliable near the source, we use a time\-varying temperature to temper the twist, downweighting its influence at early steps\. Telescoping importance weights then cancel all intermediate twist factors, yielding an asymptotically exact conditional sampler without any auxiliary twist network or pilot rollouts\. Empirically, BridgeTwist consistently outperforms training\-free baselines on class\-conditional sampling and inpainting on MNIST and CIFAR\-10, and on text\-to\-image generation on CelebA\-HQ\.

## Slowly Annealed Langevin Dynamics: Theory and Applications to Training\-Free Guided Generation

**Authors:** Atsushi Nitanda; Dake Bu; Yueming LYU; Tanya Veeravalli

**ID:** 155034 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8vtlOA7wij>) | [PDF](<https://openreview.net/pdf?id=8vtlOA7wij>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155034>)

We study Slowly Annealed Langevin Dynamics \(SALD\), a sampler for tracking a path of moving target distributions and approximating the terminal target through time slowdown\. We establish non\-asymptotic convergence guarantees via a KL differential inequality, showing that slowdown improves tracking through contraction of intermediate targets and the complexity of the path\. Motivated by training\-free guided generation with pretrained score\-based generative models, we further introduce Velocity\-Aware SALD \(VA\-SALD\), which explicitly incorporates the underlying marginal distributions of the pretrained model and uses slowdown to correct the additional deviation induced by guidance\. This yields a principled framework for training\-free guided generation for diffusion\-based and related generative model families, together with convergence guarantees that clarify the roles of intermediate functional inequalities and guidance bias\.

## Ensembling Language Models with Sequential Monte Carlo

**Authors:** Robin Chan; Tianyu Liu; Samuel Kiegeland; Clemente Pasti; Jacob Vigly; Timothy O&amp;amp;\#x27;Donnell; Ryan Cotterell; Tim Vieira

**ID:** 148212 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zWigIoVsHo>) | [PDF](<https://openreview.net/pdf?id=zWigIoVsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148212>)

Combining the predictions of multiple models is one of the most effective strategies in machine learning\. Thus, it is only natural to investigate the ensembling of language models \(LMs\)\. However, because LMs define distributions over strings, a proper ensemble requires aggregating predictions at the string level, which requires a computation that is generally intractable\. In this work, we cast LM ensembling as an inference problem and propose the deployment of sequential Monte Carlo \(SMC\), an appropriate approximate inference scheme\. Concretely, we introduce a unified framework for composing multiple LMs into ensemble distributions parameterized by a broad family of aggregation functions\. To sample from these distributions, we introduce an SMC algorithm that operates in a shared character space, enabling ensembles of models with mismatching vocabularies and consistent sampling in the limit\. We evaluate a range of ensembles across prompt and model combinations for various text generation tasks, finding that consensus\-seeking strategies such as the product consistently outperform probability averaging, and that better posterior approximations can yield better ensemble performance\.

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

## Tropical Boundary Complexity of Deep ReLU Networks

**Authors:** Jun Li

**ID:** 156044 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0pa5znZWZc>) | [PDF](<https://openreview.net/pdf?id=0pa5znZWZc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156044>)

We derive a recursion for the expected squared Frobenius norm of the zonotope generator matrices that govern the decision boundary of a random Gaussian deep ReLU binary classifier\. For a network of depth $L$ with weight variances $\(\\sigma\_\{l=1\.\.L\}^2\)$, the boundary complexity is $\\Gamma\_L = 8\(1\+1/\\pi\)\\prod\_\{l=1\}^\{L\} \\sigma\_l^2/2$\.  He initialization $\\sigma\_w^2 = 2$ is the unique uniform weight variance under which $\\Gamma\_L$ is preserved with depth, matching the Poole\-\-Schoenholz mean\-field critical value on a different observable\.  $\\Gamma\_L$ is identified with an observable per\-unit\-length boundary\-crossing density via Rice's formula\. The relation is supported by Monte Carlo experiments\.

## Self\-Rewarding Sequential Monte Carlo for Masked Diffusion Language Models

**Authors:** Ziwei Luo; Ziqi Jin; Lei Wang; Lidong Bing; Thomas Schön

**ID:** 150689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gFBldFk335>) | [PDF](<https://openreview.net/pdf?id=gFBldFk335>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150689>)

This work presents self\-rewarding sequential Monte Carlo \(SMC\), an inference\-time scaling algorithm enabling effective sampling of masked diffusion language models \(MDLMs\)\. Our algorithm stems from the observation that most existing MDLMs rely on a confidence\-based sampling strategy, where only tokens with the highest prediction confidence are preserved at each step\. This can restrict generation to a noise\-sensitive, greedy decoding paradigm, often limiting trajectory diversity\. We address this problem by launching multiple interacting diffusion processes in parallel, referred to as \*particles\*, for trajectory exploration\. Importantly, we introduce the trajectory\-level confidence as a self\-rewarding signal for assigning particle importance weights\. During sampling, particles are iteratively weighted and resampled to systematically steer generation towards globally confident, high\-quality samples\. Our self\-rewarding SMC is verified on various masked diffusion language models and benchmarks, achieving significant improvement without extra training or reward guidance, while effectively converting parallel inference capacity into improved sampling quality\.

## When All Paths Lead to Dead End: Deadlock\-Depth\-guided Monte Carlo Tree Search for Reentrant Blocking Hybrid Flow Shops

**Authors:** Guangqi Zhang; Xuefeng Liu; Chuyuan Wei; 世昱 李; Shaojie Tang; Jing Yuan; Jianwei Niu

**ID:** 153226 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mq6HakMjhE>) | [PDF](<https://openreview.net/pdf?id=Mq6HakMjhE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153226>)

Monte Carlo Tree Search \(MCTS\) performance degrades significantly in Reentrant Blocking Hybrid Flow Shop \(RBHFS\) scheduling, which arises in modern automated scientific laboratories\.  The interaction of blocking and reentrant constraints causes rollout simulations to consistently end in a “dense deadlock\.”  As a result, infeasible branches become indistinguishable, which undermines the exploitation capability of standard MCTS and effectively reduces it to uniform random exploration\. However, we find that deadlocks are not equally uninformative\.  We observe that the average rollout deadlock depth—the number of steps executed before failure—across different action branches shows a strong positive correlation with true feasibility probability, making it a reliable proxy for the latent likelihood that a branch contains feasible solutions\. Guided by this insight, we propose Deadlock\-Depth Guided MCTS \($D^2$\-MCTS\)\. By integrating deadlock\-depth statistics into the evaluation mechanism, $D^2$\-MCTS is able to distinguish among otherwise indistinguishable infeasible branches\. Empirical results demonstrate that $D^2$\-MCTS significantly outperforms state\-of\-the\-art baselines, demonstrating superior robustness and efficiency\.

## Exploring Starts Are Not Enough: Counterexamples and a Fix for Monte Carlo Exploring Starts

**Authors:** Octave Oliviers; Glenn Vinnicombe

**ID:** 148417 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xyHNYFTjvc>) | [PDF](<https://openreview.net/pdf?id=xyHNYFTjvc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148417>)

The asymptotic behaviour of Monte Carlo Exploring Starts \(MCES\) is a long\-standing open question in reinforcement learning, even in the tabular setting\. We investigated the convergence properties of tabular MCES by constructing examples in which the algorithm converges to suboptimal solutions\. This paper presents new counterexamples for both initial\-visit and first\-visit MCES and gives a convergence\-restoring modification for the initial\-visit case\. We show that stable suboptimal solutions may exist for initial\-visit MCES with sample\-average updates even when greedy actions are updated more often than non\-greedy actions on average\. However, by scaling learning rates inversely to update frequencies on a state\-by\-state basis, convergence to optimality is guaranteed\. Unlike previous uniformisation methods, this modification is applicable to large\-scale problems that require approximating the estimated value function\. We then extend the example to show that sample\-average first\-visit MCES may also converge to suboptimal solutions\. This largely settles a fundamental open problem and shows that exploring starts alone do not guarantee convergence to optimality\. More broadly, these results highlight that convergence depends critically on the relative size and frequency of updates applied to different actions, making the choice of learning rates and the balance between exploration and exploitation central to the analysis of MCES and the implementation of scalable Monte Carlo control methods\.

## FLAG: Flow Policy MaxEnt\-RL by Latent Augmented Guidance

**Authors:** Sungha Kim; Gawon Lee; Jusuk Lee; Jonghae Park; H\. Jin Kim; Daesol Cho

**ID:** 151542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZuIBJ5uEay>) | [PDF](<https://openreview.net/pdf?id=ZuIBJ5uEay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151542>)

Maximum entropy reinforcement learning \(MaxEnt\-RL\) enables robust exploration, yet practical implementations often restrict policies to simple Gaussians\. While recent approaches incorporate expressive generative policies via importance\-weighted supervised learning, they are prone to importance weight collapse, which limits their scalability in high\-dimensional action spaces\. Our key insight is to mitigate this limitation by localizing the sampling region, avoiding the weight degeneracy induced by importance sampling over the entire action space\. To instantiate this insight, we introduce \*\*FLAG\*\* \(\*\*F\*\*low policy with \*\*L\*\*atent\-\*\*A\*\*ugmented \*\*G\*\*uidance\)\. FLAG augments the state space with a flow latent variable and optimizes a provably consistent proxy MaxEnt\-RL objective\. We empirically demonstrate that FLAG enables expressive policy optimization with limited importance samples and scales to high\-dimensional control tasks\. Furthermore, FLAG achieves state\-of\-the\-art performance across challenging benchmarks\.

## What does a Bayes\-filtered transformer believe? A predictive Monte Carlo approach

**Authors:** Afiq Abdillah Effiezal Aswadi; Haotong Ma; Susan Wei

**ID:** 149367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZ5gMk6Gpd>) | [PDF](<https://openreview.net/pdf?id=qZ5gMk6Gpd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149367>)

A \\emph\{Bayes\-filtered transformer\} \(BFT\) is a transformer trained on sequences that are generated in two steps: first a latent task is drawn from a prior, then observations are drawn conditional on that task\. Trained under autoregressive log loss, the BFT's next\-token prediction, in the idealised limit, \\emph\{is\} the Bayesian posterior predictive distribution \(PPD\) under this generative model\. In practice the trained BFT is only an approximation of this ideal PPD, raising a natural interpretive question: what prior and posterior over the latent task has the trained BFT actually internalised? Existing work answers this question by comparing the trained BFT's predictions against the predictions of various \`\`reference'' posteriors, each standing in for a different candidate algorithm or computation the BFT might be implementing\. This prediction\-space comparison is fragile; for instance, distinct posteriors can share posterior\-mean predictions exactly\. We foreground \\emph\{predictive Monte Carlo\} \(PMC\) as a general interpretability tool for any BFT: using only next\-token generation, PMC returns an approximation to the implicit prior and posterior over the latent task, answering the interpretive question directly in latent space\. We apply PMC to three stylised task families spanning 0\-Markov and 1\-Markov exchangeability; the phenomena previously reported in these settings remain visible in latent space\.

## Finetuning with Sampling: Make SFT Generalize, Not Forget

**Authors:** Aayush Karan; Sitan Chen; Yilun Du

**ID:** 150118 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kXgdaUrvBN>) | [PDF](<https://openreview.net/pdf?id=kXgdaUrvBN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150118>)

Introducing new capabilities to frontier models has long been the goal for posttraining, which relies predominantly on supervised finetuning \(SFT\) and reinforcement learning \(RL\) to achieve this\. Prevailing wisdom dictates that on\-policy RL enables strong generalization on new tasks without losing existing capabilities, while SFT is prone to weak generalization and forgetting\. At the same time, SFT enables learning from inherently off\-policy expert data, whereas RL must rely on a model's ability to generate positive signal on a new task\. In our work, we seek to bridge the strength of on\-policy learning with the information signal of off\-policy expert traces\. To this end, we introduce a Markov chain Monte Carlo \(MCMC\) sampling algorithm that transforms off\-policy traces into more on\-policy ones given a reference model for finetuning\. Across tasks like scientific skill acquisition, mathematical reasoning, and fact learning, we demonstrate that simple SFT on these boosted off\-policy traces can generalize better and forget less than on\-policy counterparts\. More generally, our approach outlines a principled methodology for model\-specific data refinement, suggesting broader utility as a plug\-and\-play component throughout the post\-training pipeline\.

## Robust Importance Sampling for Rare Events via Constrained Gaussian Mixtures

**Authors:** Pawel Lorek; Rafal Nowak; Rafał Topolnicki; Tomasz Trzcinski; Maciej Zieba

**ID:** 149349 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qj7n3ANylE>) | [PDF](<https://openreview.net/pdf?id=qj7n3ANylE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149349>)

We study estimating rare\-event probabilities $I = \\mathbb\{P\}\(g\(\\mathbf\{X\}\) &gt; \\gamma\)$ with $\\mathbf\{X\} \\sim \\mathcal\{N\}\(\\mu, \\Sigma\)$ and general $g : \\mathbb\{R\}^d \\to \\mathbb\{R\}$\. We address this problem through importance sampling, and propose a framework that substantially improves efficiency and robustness over baselines such as crude Monte Carlo, adaptive cross\-entropy, variational\-inference\-based methods \(including forward\- and reverse\-KL approaches\), as well as Safe\-ICE, Subset Simulation, and Sequential Monte Carlo, \*drawing\* on ideas from both cross\-entropy methods for rare\-event estimation and cross\-entropy methods for optimization\. The key contribution has two parts: first, we separate the problem into \*coverage\*, to overcome the cold\-start barrier, and \*fitting\*, to refine proposals once a meaningful signal is available; second, we constrain the proposal family in a way that provably guarantees finite\-variance importance sampling, supported by a theoretical result \(since coverage alone is not sufficient \-\-\- without safeguards, importance sampling may still suffer from infinite variance\)\. Together, these ingredients yield proposals that are both expressive and stable\. Extensive experiments demonstrate significant variance reduction, strong robustness across diverse benchmarks, and favorable cost\-\-efficiency trade\-offs, with the proposed approach often outperforming these baselines, particularly in high\-dimensional and multimodal settings where competing methods frequently become unstable or fail\.

## Defining Operational Conditions for Safety\-Critical AI\-Based Systems from Data

**Authors:** Johann Maximilian Christensen; Elena Hoemann; Frank Köster; Sven Hallerbach

**ID:** 151160 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=caIKT2YrhB>) | [PDF](<https://openreview.net/pdf?id=caIKT2YrhB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151160>)

Artificial Intelligence \(AI\) has been on the rise in many domains, including numerous safety\-critical applications\. However, for complex systems in the real world, defining the underlying environmental conditions in which the AI\-based system must operate\-\-\-the Operational Design Domain \(ODD\)\-\-\-is extremely challenging\. This often results in an incomplete description of the ODD, which contrasts with the requirements of many domains for certifying AI\-based systems\. Traditionally, the ODD is created in the early stages of the development process, drawing on sophisticated expert knowledge and related standards\. This paper presents a novel Safety\-by\-Design method to a posteriori define the ODD from previously collected data using a multi\-dimensional kernel\-based representation\. This approach is validated through both Monte Carlo methods and a real\-world aviation use case for a future collision\-avoidance system\. Moreover, by defining under what conditions two ODDs are similar, the paper shows that the data\-driven ODD can produce a dataset similar to the original, hidden ODD\. Deriving the novel, Safety\-by\-Design, deterministic kernel\-based affinity representation of ODDs is fully automated via a bounded, order\-independent algorithm\. Utilizing the proposed ODD representation enables future certification of data\-driven, safety\-critical AI\-based systems\.

## Locality Sensitive Hashing for p\-Exponential Kernels with Applications to Density Estimation

**Authors:** Barak Gorodissky; Tal Wagner

**ID:** 152589 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RyF0cieapR>) | [PDF](<https://openreview.net/pdf?id=RyF0cieapR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152589>)

A kernel $k\(x,y\)$ is \*LSHable\* if there exists a locality sensitive hashing scheme $\\mathcal H$ such that $k\(x,y\)=\\Pr\_\{h\\sim\\mathcal H\}\[h\(x\)=h\(y\)\]$ for all $x,y$\. This notion plays a key role in efficient kernel methods in high dimensions\. In this work, we show that the $p$\-exponential kernel $k\(x,y\)=\\exp\(\-\\lVert x\-y \\rVert\_p\)$ is LSHable in bounded regions for all $1&lt;p\\leq2$\. Previously, this was known only for $p=1$\. Our new mosaic LSH scheme is based on a Poisson hyperplane process with hyperplanes sampled as $\\ell\_1$\-biased $p$\-stable vectors, for which we develop efficient sampling procedures\. As applications, our results yield new and efficient density estimation methods based on LSHability for those $p$\-exponential kernels\.

## MC^2: Monte Carlo Correction for Fast Elliptic PDE Solving

**Authors:** Ethan Hsu; Ivan Ge; Hong M Yam

**ID:** 151488 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aG4Bnuw2KR>) | [PDF](<https://openreview.net/pdf?id=aG4Bnuw2KR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151488>)

Partial differential equation \(PDE\) solvers underpin scientific computing, but real\-world deployment is bounded by compute\. Classical Monte Carlo solvers such as Walk\-on\-Spheres \(WoS\) are unbiased and geometry\-agnostic but are slow\. Learned solvers are fast but biased and brittle under distribution shift\. We present \\textbf\{MC$^2$\}, a hybrid WoS\-Neural Network \(WoS\-NN\) PDE solver that treats a low\-budget Monte Carlo solution as a structured estimator of the true field and learns a single\-pass neural correction to recover a high\-fidelity solution\. MC$^2$ matches the accuracy of solutions using over $1000\\times$ more Monte Carlo compute, outperforming all evaluated classical, denoising, and neural\-operator baselines\. To enable reproducible study of finite\-compute PDE solving, we additionally release \\textbf\{PDEZoo\}, the largest standardized elliptic PDE benchmark to date: 2M PDEs spanning five elliptic families and unlimited geometric compositions, with analytic ground truth and multi\-budget Monte Carlo trajectories\. Together \\textbf\{MC$^2$\} and \\textbf\{PDEZoo\} \(1\) empirically establish that finite\-sample Monte Carlo error is structured, learnable, and correctable in a single forward pass, \(2\) show that we can solve PDEs $\\sim$\\textbf\{1000x\} faster than with just WoS, and \(3\) provide the evaluation infrastructure the field has so far lacked\.

## Efficient evaluation and error pattern discovery for blackbox AI systems

**Authors:** Maxim Rabinovich; Harvineet Singh; Aman Sinha

**ID:** 149796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nH1NodvfBz>) | [PDF](<https://openreview.net/pdf?id=nH1NodvfBz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149796>)

Reliable AI evaluation is a prerequisite for measuring progress and for deployment in safety\-critical settings\. Unfortunately, even gathering frontier system outputs on a full suite of relevant benchmarks can be expensive, let alone adding expert review or running evaluation inside of an optimization loop\. Existing approaches to sample\-efficient evaluation address this concern only partially: they typically assume  abundant calibration data, pretrained error\-relevant embeddings, or a fixed benchmark\. Meanwhile, optimization loops require repeated evaluation and the ability to surface a long tail of errors; in fact, in real world settings, the long tail of errors often drives human\-in\-the\-loop iterative system improvement\. Working in the regime in which the only available information is system inputs and one or more cheap surrogate measures of system error, we derive an optimal importance sampler for error estimation and analyze its theoretical properties\.  Going further, we show how the same sampler can naturally discover and rank error patterns\. On standard benchmarks for frontier model question answering \(MMLU\-Pro\) and agentic coding \(TerminalBench 2\.0\) we show our method consistently outperforms standard Monte Carlo on estimating aggregate error, recovering failure modes and calculating their prevalence, and detecting poison agent/environment injections\.

## An Efficient Algorithm for Thresholding Monte Carlo Tree Search

**Authors:** Shoma Nameki; Atsuyoshi Nakamura; Junpei Komiyama; Koji Tabata

**ID:** 153387 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LlqiVTIyml>) | [PDF](<https://openreview.net/pdf?id=LlqiVTIyml>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153387>)

We introduce the Thresholding Monte Carlo Tree Search problem, in which, given a tree $\\mathcal\{T\}$ and a threshold $\\theta$, a player must answer whether the root node value of $\\mathcal\{T\}$ is at least $\\theta$ or not\. In the given tree, 'MAX' or 'MIN' is labeled on each internal node, and the value of a 'MAX'\-labeled \('MIN'\-labeled\) internal node is the maximum \(minimum\) of its child values\. The value of a leaf node is the mean reward of an unknown distribution, from which the player can sample rewards\. For this problem, we develop a $\\delta$\-correct sequential sampling algorithm based on the Track\-and\-Stop strategy that has asymptotically optimal sample complexity\.  We show that a ratio\-based modification of the D\-Tracking arm\-pulling strategy leads to a substantial improvement in empirical sample complexity, as well as reducing the per\-round computational cost from linear to logarithmic in the number of arms\.

## Principled Policy Optimization for LLMs via Self\-Normalized Importance Sampling

**Authors:** Huiyang Shao; Xintong Zhang; Junyi Liu

**ID:** 152868 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PnhgpXd7Ru>) | [PDF](<https://openreview.net/pdf?id=PnhgpXd7Ru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152868>)

Reinforcement Learning from Human Feedback \(RLHF\) is a key technique for aligning Large Language Models \(LLMs\) with human preferences\. While Proximal Policy Optimization \(PPO\) is the standard algorithm, its reliance on a critic network incurs significant memory and computational costs\. This has motivated the development of critic\-free alternatives such as Group Relative Policy Optimization \(GRPO\) and Group Sequence Policy Optimization \(GSPO\)\. However, these methods suffer from a critical trade\-off: they either employ theoretically unsound, high\-variance estimators \(GRPO\) or introduce systematic bias to achieve stability, causing them to optimize a perturbed objective \(GSPO\)\. In this paper, we introduce SNIB \(Self\-Normalized Importance Sampling with a Baseline\), a novel critic\-free algorithm that addresses this dilemma by offering a method that is both stable and asymptotically correct\. SNIB leverages principled self\-normalized importance sampling to achieve the stability of modern methods without sacrificing asymptotic correctness\. We provide a comprehensive theoretical analysis, proving that SNIB's gradient estimator is consistent with a finite\-sample bias that decays as $O\(1/G\)$ under self\-normalization\. Furthermore, we demonstrate its superior robustness to reward model uncertainty and show that it preserves the principled trade\-off between reward maximization and KL regularization, a property that is distorted by biased estimators\. Our work establishes a theoretically\-grounded foundation for building more stable and reliable critic\-free RLHF algorithms\.

## Resolving Time\-Frequency Ridge Crossings via Frequency\-Rate Lifting

**Authors:** Pingping Pan; You Li; Yunjian Zhang; Mu\-Jiang\-Shan Wang

**ID:** 149622 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ojSIdIqCYx>) | [PDF](<https://openreview.net/pdf?id=ojSIdIqCYx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149622>)

Ridge crossings, where two components share the same instantaneous frequency \(IF\) at a given time, are a fundamental bottleneck in multi\-component time\-frequency \(TF\) mode decomposition\. We trace this difficulty to \\emph\{insufficient representational dimensionality\} and resolve it by lifting signals into the 3\-D time\-frequency\-frequency\-rate \(TFFR\) space $\(t,f,\\dot\{f\}\)$, where crossing ridges separate because they typically differ in the instantaneous frequency rate \(IFR\)\. We formalize this via a separability proposition and confirm it empirically through Monte Carlo simulation \(crossing rate: 78\.6\\% in 2\-D $\\to$ 0\.9\\% in 3\-D\)\. Based on this principle, we propose \\textbf\{TFFR\-Net\}, a query\-based masked transformer that jointly predicts per\-ridge masks and dense IFR maps\. An IFR feedback loop injects the estimated frequency rate back into each query embedding, enabling the decoder to perform instance discrimination in TFFR space rather than the TF plane\. On a synthetic benchmark with up to six chirp components under broadband noise \(0\-\-25\\,dB SNR\), TFFR\-Net consistently reduces IF MAE by at least 5\.8\\% and Dice loss by at least 5\.4\\% relative to  competing methods\. Evaluation on real\-world signals \(bat echolocation, power\-system oscillation, earthquake vibration\) demonstrates effective generalization beyond synthetic training data\. The source code is available at \\url\{https://anonymous\.4open\.science/r/TFFR\-92D2/\}\.

## Contour Monte Carlo: Sampling via Energy Level Sets

**Authors:** Varun Jain; Hong Ge

**ID:** 155748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3FGsou50eW>) | [PDF](<https://openreview.net/pdf?id=3FGsou50eW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155748>)

Efficient sampling from complex probability distributions is an important task across Bayesian inference and certain classes of deep generative models\. Markov chain Monte Carlo \(MCMC\) remains one of the most widely used  tools for this\. However, even state\-of\-the\-art samplers, such as the NUTS implementations in Stan and Turing\.jl, can converge slowly on ill\-conditioned, heavy\-tailed, or near\-degenerate targets\. We identify that sampling error can be decomposed into two terms: mismatch in the potential energy \(PE\) marginal, and average conditional mismatch across PE level sets\. We propose \*Contour Monte Carlo \(CMC\)\*, which corrects each of these in turn: first by drawing energies $u\_i$ from the PE marginal, and then by sampling states on the corresponding level sets\. For a broad family of radial targets, including the Gaussian and Student's $t$ distributions, both stages admit closed\-form draws, so CMC is exact and requires no Markov chain\. Beyond this, for general targets, we estimate the PE marginal using umbrella sampling with MBAR, then run constrained MCMC on the sampled level sets, initialised from energy\-matched umbrella samples \(which tend to lie in regions of high conditional mass\)\. We show that this procedure essentially reduces the global sampling problem to approximating the one\-dimensional PE marginal, after which posterior draws can be generated readily on demand\. Furthermore, the level\-set chains are embarrassingly parallel, and therefore well\-suited to modern accelerator hardware\. On a suite of challenging benchmarks \-\- composed of \`posteriordb\` models, synthetic targets, and real\-world inference problems \-\- CMC converges substantially faster than HMC and NUTS baselines at a fixed computational budget\.

## Specificity\-Aware Diffusion Steering via Variance\-Reduced Sequential Monte Carlo

**Authors:** Luran Wang; Linrui Ma; Hannes Stark; Regina Barzilay

**ID:** 149673 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIBOJ76wYl>) | [PDF](<https://openreview.net/pdf?id=oIBOJ76wYl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149673>)

Inference\-time steering enables pretrained diffusion models to satisfy new constraints without full retraining\. However, specificity\-aware generation is difficult: repelling samples from a negative reference distribution can also erode the positive distribution where the two overlap\. The key challenge is to suppress negative mass while minimally distorting the positive distribution\. We address this problem by formulating specificity\-aware steering as a target\-design problem and deriving a target distribution from an overlap\-based objective\. The resulting target keeps the desired reference distribution only in regions where it is sufficiently preferred over the undesired reference distribution, giving a likelihood\-ratio interpretation of specificity\. To sample from the corresponding time\-dependent target path, we develop a Sequential Monte Carlo sampler with a variance\-minimized local proposal\. We further introduce a practical fixed\-noise optimization procedure that requires only Jacobian\-\-vector products with the desired and undesired score fields\. Experiments on synthetic mixtures, class\-contrastive generation, and text\-to\-image tasks show that the proposed method suppresses undesired regions more effectively, reduces mode shift, and improves sampling stability by decreasing the SMC weight collapse compared with negative\-guidance baselines\.

## A Revisit of Hamiltonian Monte Carlo Efficiency on Bayesian Neural Networks

**Authors:** Cuong Ngoc Nguyen; Lam Ho; Vu Dinh; Georgios Karagiannis; Cuong V\. Nguyen

**ID:** 152689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RAcqfke8WC>) | [PDF](<https://openreview.net/pdf?id=RAcqfke8WC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152689>)

Bayesian neural networks \(BNNs\) offer principled uncertainty quantification, yet sampling from their posteriors via Hamiltonian Monte Carlo \(HMC\) remains challenging\. While recent work theoretically identified the efficiency degradation of ReLU\-based networks, smooth unbounded activations \(\_e\.g\.,\_ GELU, Swish, Mish\), which are prevalent in modern architectures, were assumed to be efficient due to their smoothness\. In this work, we challenge this existing justification by deriving explicit local error formulas for the leapfrog integrator\. Our analyses reveal that, in addition to differentiability, third\-order curvatures of the potential energy also have a significant influence on HMC efficiency of BNNs inference\. Empirically, we found that even smooth unbounded activations may degrade sampling performance as severely as piecewise linear activations\. Thus, optimally tuning the step size for these networks may require a comparable empirical step size scaling as their piecewise counterparts\. This result sheds light on the implications for architectural design in Bayesian deep learning\.

## Quantitative Local Convergence of Mean\-Field Stein Variational Gradient Flow

**Authors:** Lénaïc Chizat; Maria Colombo; Roberto Colombo; Xavier Fernández\-Real

**ID:** 154065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GSBxsB28RG>) | [PDF](<https://openreview.net/pdf?id=GSBxsB28RG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154065>)

Stein Variational Gradient Descent \(SVGD\) is a deterministic interacting\-particle method for sampling from a target probability measure given access to its score function\. In the mean\-field and continuous\-time limit, it is known that the flow converges weakly toward the target, but no quantitative rate is known for the last iterate\. In this paper, we establish quantitative local  convergence in strong norms for this dynamics, when the interaction kernels is of Riesz type on the $d$\-dimensional torus\. Specifically, assuming that the initial density and the target are smooth and close in $L^2$\-norm,  we obtain explicit polynomial convergence rates in $L^2$\-norm that depend on the dimension and on the regularity parameters of the kernel, the initialization and the target\. We further show that these rates are sharp in certain regimes, and support the theory with numerical experiments\. In the edge case of kernels with a Coulomb singularity, we recover the global exponential convergence result obtained in prior work\. Our analysis is inspired by recent results on Wasserstein gradient flows of kernel mean discrepancies\.

## How Should Parallel Langevin Chains Share Noise?

**Authors:** Ryan Farell

**ID:** 151033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dTLaD3Us8h>) | [PDF](<https://openreview.net/pdf?id=dTLaD3Us8h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151033>)

Parallel Langevin samplers are usually run as $K$ independent chains and then averaged\.  Independence is convenient, but it is not required by the unadjusted Langevin algorithm \(ULA\): each chain only needs a standard Gaussian noise marginal at each step\.  We use this freedom by coupling the same\-step noises across chains\.  The coupling is simple: draw $K$ iid Gaussian noises, subtract their across\-chain mean, and rescale\.  Each chain still has the ordinary ULA law, but the noise injected into the ensemble average is exactly zero\. For quadratic targets, this removes the Langevin\-noise contribution from every equal\-weight linear summary of the ensemble mean at every finite horizon\. With deterministic or zero\-sum randomized starts, these summaries have zero total variance\.  On UCI Bayesian logistic posteriors with $K=8$, the same construction reduces ensemble\-mean trace variance to $6\\times 10^\{\-3\}$, $2\\times 10^\{\-3\}$, and $5\\times 10^\{\-4\}$ of matched iid ensembles on WDBC, Spambase, and Adult; reference MSE against a longer iid run falls by roughly $4$ to $14\\times$ after accounting for error in the finite reference run\.  The gain is scoped: zero\-sum coupling cancels linear fluctuations, while centered quadratic observables have factor $1/\(K\-1\)$ rather than iid's $1/K$, and random starts, minibatches, and nonquadratic curvature add explicit residual variance terms\.  Synthetic and real\-data experiments match the exact cancellation where it applies and the predicted behavior outside that regime\.

## Dimension\-Uniform Discretization Analysis of Preconditioned Annealed Langevin Dynamics for Multimodal Gaussian Mixtures

**Authors:** Lorenzo Baldassari; Josselin Garnier; Knut Solna; Maarten V\. de Hoop

**ID:** 153363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LvzRfDwh4K>) | [PDF](<https://openreview.net/pdf?id=LvzRfDwh4K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153363>)

Obtaining stable diffusion\-based samplers in high\- and infinite\-dimensional settings is challenging because errors can accumulate across high\-frequency coordinates and make the dynamics unstable under refinement of the finite\-dimensional approximation of the underlying function\-space problem\. Discretization is a typical source of such errors, and preconditioning with a suitable spectral decay is one way to control their accumulation\. In this paper, we study this problem for preconditioned annealed Langevin dynamics \(ALD\) applied to Gaussian mixtures\. We first show that Euler\-Maruyama \(EM\) discretization, by treating the stiff linear part of the annealed score with a forward Euler step, imposes a stability constraint coupling the preconditioner with the annealed covariance scale\. Together with the conditions ensuring dimension\-uniform control of the annealed dynamics, this constraint forces the initial smoothed law to remain uniformly close to the target across dimensions\. We then consider an exponential\-integrator scheme that integrates the stiff linear part of the annealed score exactly\. Under explicit spectral summability conditions coupling the smoothing covariance, the component covariance spectra, and the preconditioner, we prove a dimension\-uniform Kullback\-Leibler \(KL\) bound for this scheme\. This bound can be made arbitrarily small, uniformly in dimension, by allowing enough time for annealing and then refining the time mesh accordingly\. Importantly, these conditions allow regimes in which the KL divergence between the target and the initial smoothed law diverges with dimension, showing that the restrictions imposed by EM are scheme\-dependent rather than intrinsic to ALD\.

## ESS\-Flow: training\-free guidance as Bayesian inference in source space

**Authors:** Adhithyan Kalaivanan; Zheng Zhao; Jens Sjölund; Fredrik Lindsten

**ID:** 149338 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qokTHEVYpp>) | [PDF](<https://openreview.net/pdf?id=qokTHEVYpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149338>)

Guiding pretrained flow\-based generative models for conditional generation or to produce samples with desired target properties enables solving diverse tasks without retraining on paired data\. We present ESS\-Flow, a gradient\-free method that leverages the Gaussian prior of the source distribution in flow\-based models to perform Bayesian inference directly in the source space using Elliptical Slice Sampling\. ESS\-Flow only requires forward passes through the generative model and observation process, making it applicable even when gradients are unavailable, such as with non\-differentiable simulation\-based observations or quantization in the generation process\. We demonstrate its effectiveness on scientific applications including designing materials with desired target properties and predicting protein structures from sparse inter\-residue distance measurements\.

## Online Active Testing: Adaptive Importance Sampling for Unbiased Risk Estimation in Data Streams

**Authors:** Hugo Schmutz; Hachem Kadri; Thierry Artières

**ID:** 154789 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AyJOqDpoNN>) | [PDF](<https://openreview.net/pdf?id=AyJOqDpoNN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154789>)

We address the problem of evaluating machine learning models under a limited labelling budget in streaming environments, where data arrive sequentially\. This setting is particularly critical for embedded and continuously deployed systems, such as autonomous driving or computer\-aided diagnosis, where models must reliably assess their own performance online\. We focus on a constrained online setting, where labelling decisions must be made immediately, and data cannot be stored\. We introduce an \\emph\{online active testing\} \(OAT\) framework based on an adaptive importance sampling estimator that provides unbiased risk estimation for both regression and classification tasks\. While importance sampling has been extensively studied in pool\-based settings, we establish novel theoretical ground for the fully online setting, including deviation bounds and consistency guarantees\. We derive an optimal sampling strategy in order to minimise the estimator's variance, which is driven by the expected second moment of the loss\. This strategy is expressed for common loss functions, including mean squared error, mean absolute error, 0–1 loss, and log\-loss, and analysed from a statistical perspective\. We empirically demonstrate the effectiveness of OAT on synthetic benchmarks, deep learning tasks, and a real\-world application involving the evaluation of machine learning models for molecular simulations, where data are generated sequentially, and labels require expensive quantum chemistry computations, showing improved efficiency and reliable performance estimation under limited labelling budgets\. In particular, on the real\-world task, OAT requires only $\\sim$30\\% of labels to match the accuracy of a naïve uniform baseline, compared to $\\sim$23\\% for an oracle method that has access to the labels\.

## Stop the Sampler\! Classifier\-Based Adaptive Stopping for Sampling Kernels

**Authors:** Kirill Korolev; Nikita Morozov; Stepan Pavlenko; Esmeralda S Whitammer; Sergey Samsonov

**ID:** 148260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zB413mSyhL>) | [PDF](<https://openreview.net/pdf?id=zB413mSyhL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148260>)

Sampling from complex, unnormalized probability densities is a fundamental challenge in Bayesian inference and probabilistic modeling\. While Markov chain Monte Carlo \(MCMC\) methods provide asymptotic guarantees, they often suffer from slow mixing and high computational costs due to fixed or manually tuned trajectory lengths\. In this work, we propose a novel framework that treats trajectory termination as a learnable component of the sampling dynamics\. By framing MCMC within the theory of non\-acyclic Generative Flow Networks \(GFlowNets\), we train state\-dependent neural classifiers to decide when a trajectory has reached a high\-density region and should terminate\. We theoretically establish the connection between optimal classifiers and the target density via detailed balance conditions and introduce a multilevel training scheme to facilitate exploration in complex geometries\. Experimental results across various benchmark densities demonstrate that our approach significantly reduces average trajectory lengths while improving mode coverage and mixing compared to standard MCMC baselines\.

## Corrected Integrated Laplace Approximation for Bayesian Inference in Latent Gaussian Models

**Authors:** Jinlin Lai; Charles Margossian; Daniel Sheldon

**ID:** 154255 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F8uu9a7S7t>) | [PDF](<https://openreview.net/pdf?id=F8uu9a7S7t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154255>)

Latent Gaussian models \(LGMs\) are a popular class of Bayesian hierarchical models that include Gaussian processes, as well as certain spatial models and mixed\-effect models\. Efficient Bayesian inference of LGMs often requires marginalizing out the latent variables\. For LGMs with a non\-Gaussian likelihood, exact marginalization is not possible and a popular approach is to do approximate marginalization with an integrated Laplace approximation \(ILA\)\. Using ILA produces an approximate posterior which, in some settings, can differ significantly from the correct posterior, which impacts downstream applications\. We propose an importance sampling scheme to correct the error introduced by ILA\. By increasing the number of samples in importance sampling, the posterior with ILA converges to the correct posterior\. This idea is realized with various techniques, including pseudo\-marginalization, quasi\-Monte Carlo and randomized quasi\-Monte Carlo\.  We implement our methods in an automatic differentiation framework to support gradient\-based algorithms when doing inference on the hyperparameters\. For the latter, we specifically consider the use of Hamiltonian Monte Carlo\. We demonstrate the benefits of reduced error in various applied models\.

## ForceBody: Force\-Paired Parametric Body Motion with Torque Uncertainty

**Authors:** Joonwoo Kwon; Yufei Zhang; Xiaoming Liu; Zijun Cui

**ID:** 138956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u95B9zb2bH>) | [PDF](<https://openreview.net/pdf?id=u95B9zb2bH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138956>)

Forces and torques drive human motion, central to biomechanics, robotics, and physics\-aware animation, yet they are often absent from learning\-based motion pipelines for body reconstruction and generation\. Some motion datasets provide force annotations, but the paired motion sequences are incompatible with the parametric body models used in modern learning pipelines\. In addition, existing datasets typically obtain joint torques through inverse dynamics, which is inherently sensitive to the quality of the input kinematics; however, they do not quantify the reliability of these torque estimates\. We close this gap with \\textbf\{ForceBody\}, the first dataset to bring ground truth force supervision into a parametric body representation, shipped with per\-sample torque uncertainty\. ForceBody pairs the SKEL body model with ground reaction forces and inverse\-dynamics joint torques across $10\{,\}389$ motion trials \($9\.7$M frames, $27$ hours\) from $140$ subjects\. Each torque label is paired with a per\-frame, per\-joint uncertainty annotation obtained by Monte Carlo sampling through the inverse dynamics pipeline\. We benchmark six architectures \(MLP, Conv1D, LSTM, GRU, Mamba2, Transformer\) on ground reaction force and joint torque prediction from SKEL motion\. As one example use of the released uncertainty, finetuning a Transformer with per\-sample uncertainty weighting reduces the MAE of joint torque estimation by $12\\%$\.

## Wavefunction Flows: Efficient Quantum Simulation of Continuous Flow Models

**Authors:** David Layden; Ryan Sweke; Vojtech Havlicek; Anirban Chowdhury; Kirill Neklyudov

**ID:** 154358 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EB9990twi7>) | [PDF](<https://openreview.net/pdf?id=EB9990twi7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154358>)

Continuous flow models transform Gaussian noise into samples from a learned distribution that closely approximates a complex data distribution\. We present a natural mapping between these models and a Schrödinger equation, the fundamental equation of quantum mechanics, whose solution is a quantum state encoding the learned distribution\. Our main result is that this Schrödinger equation is efficiently solvable on a quantum computer, which we prove by precisely bounding the discretization error\. Therefore, given a trained flow model, the theoretical analysis we introduce implies that future quantum computers will enable a fundamentally different—and potentially more powerful—type of access to its learned distribution, which could be used to perform downstream tasks \(e\.g\., Monte Carlo estimation\) more efficiently\. More broadly, our results reveal a rare close connection between state\-of\-the\-art generative modeling techniques, such as flow matching and diffusion models, and one of the main expected capabilities of quantum computers: simulating quantum mechanics\.

## Online Finetuning Decision Transformers with Pure RL Gradients

**Authors:** Junkai Luo; Yinglun Zhu

**ID:** 150024 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lKf0a3wiQx>) | [PDF](<https://openreview.net/pdf?id=lKf0a3wiQx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150024>)

Decision Transformers \(DTs\) have emerged as a powerful framework for sequential decision making by formulating offline reinforcement learning \(RL\) as a sequence modeling problem\. However, extending DTs to online settings with pure RL gradients remains largely unexplored, as existing approaches continue to rely heavily on supervised sequence\-modeling objectives during online finetuning\. We identify hindsight return relabeling\-\-\-a standard component in online DTs\-\-\-as a critical obstacle to RL\-based finetuning: while beneficial for supervised learning, it is fundamentally incompatible with importance sampling\-based RL algorithms such as GRPO, leading to unstable training\. Building on this insight, we propose new algorithms that enable online finetuning of Decision Transformers using pure reinforcement learning gradients\. We adapt GRPO to DTs and introduce several key modifications, including sub\-trajectory optimization for improved credit assignment, sequence\-level likelihood objectives for enhanced stability and efficiency, and active sampling to encourage exploration in uncertain regions\. Through extensive experiments, we demonstrate that our methods outperform existing online DT baselines and achieve new state\-of\-the\-art performance across multiple benchmarks, highlighting the effectiveness of pure\-RL\-based online finetuning for Decision Transformers\.

## Fast Accurate Quantum Monte Carlo without Metropolis Adjustment

**Authors:** Reuben Cohn\-Gordon; Gabriel Pescia; Sumner N Hearth; Jakob Robnik; Uros Seljak; Peter Lunts

**ID:** 155794 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2qZHSkdQpV>) | [PDF](<https://openreview.net/pdf?id=2qZHSkdQpV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155794>)

In quantum systems, physical quantities of interest can often be expressed as expectation values of a probability distribution, which allows their estimation by Markov Chain Monte Carlo \(MCMC\) methods\. This approach, an instance of Quantum Monte Carlo \(QMC\), plays a central role in obtaining predictions of system properties relevant to high energy or condensed matter physics\. The use of Hamiltonian dynamics to design a Markov kernel, known as Hybrid or Hamiltonian Monte Carlo \(HMC\), is widely used in quantum applications\. In this context, it is standard to use an HMC kernel that is \`\`adjusted'' with the Metropolis\-Hastings \(MH\) criterion, so that estimates of expectations converge to their true value in the limit of infinite sample size\. However, recent work in computational statistics suggests that an \\emph\{unadjusted\} HMC kernel can be significantly more efficient, while maintaining an asymptotic bias which is small relative to the error arising from the variance of the finite sample size\. We adapt this approach to the QMC setting, focusing on a challenging and high\-dimensional \\emph\{spin\-fermion\} model of a quantum phase transition\. We find that unadjusted methods outperform adjusted HMC in terms of effective sample size per gradient call by around an order of magnitude, while retaining accurate results\.

## Geometry\-Aware Score\-Repellent Monte Carlo

**Authors:** Jie Hu; Lingyun Chen; Do\-Young Eun

**ID:** 155076 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8eegc9GbJh>) | [PDF](<https://openreview.net/pdf?id=8eegc9GbJh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155076>)

The recent breakthrough Score\-Repellent Monte Carlo \(SRMC\) method improves MCMC sampling by tilting the target density $\\pi$ in $\\mathbb\{R\}^d$ with the factor $\\exp\(\-\\alpha\\,\\theta\_n^\\top s\(x\)\)$, where the score function $s\(x\) = \\nabla\_x \\log \\pi\(x\)$, and $\\theta\_n$ is the score average from past samples\. However, a single scalar repellence strength $\\alpha\\ge0$ cannot handle both the steep and the flat directions in anisotropic energy landscapes at once\. We introduce Geometry\-Aware SRMC \(GA\-SRMC\), which generalizes the Euclidean alignment to $\\theta^\\top M s\(x\)$ for any symmetric positive\-definite matrix $M$\. A stochastic\-approximation central limit theorem under a trace constraint on $M$ identifies the trace\-normalized inverse Fisher $M\_\{\\rm opt\}\\propto S^\{\-1\}$ as the unique minimizer of the worst\-direction covariance bound, elevating the Fisher information $S=\\text\{Cov\}\_\\pi\(s,s\)$ from a proposal\-side preconditioner \(e\.g\., FisherMALA, natural gradient\) to the optimal repulsion\-side matrix, with a single online estimate $\\widehat S\_n$ serving both roles at no additional cost\. On an $8$\-target simulation spanning the condition number $\\kappa\\in\[1\.3,100\]$ and dimension $d\\in\[2,785\]$, GA\-SRMC dominates SRMC by $4\.4\\times$ on anisotropic Gaussian \($\\kappa=100$\) and $6\.8\\times$ on MNIST under the MALA baseline, by $18\\text\{ \- \}32\\\\%$ on the well\-conditioned Bayesian logistic\-regression posteriors, and by up to $\+48\\\\%$ under FisherMALA; the advantage scales monotonically with the condition number $\\kappa$\.

## Manifold Sampling via Entropy Maximization

**Authors:** Cornelius Braun; Tilman Burghoff; Marc Toussaint

**ID:** 149924 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mAVz31YJlN>) | [PDF](<https://openreview.net/pdf?id=mAVz31YJlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149924>)

Sampling from constrained distributions has a wide range of applications, including in Bayesian optimization and robotics\. Prior work establishes convergence and feasibility guarantees for constrained sampling, but assumes that the feasible set is connected\. However, in practice, the feasible set often decomposes into multiple disconnected components, which makes efficient sampling under constraints challenging\. In this paper, we propose MAnifold Sampling via Entropy Maximization \(MASEM\) for sampling on a manifold with an unknown number of disconnected components, implicitly defined by smooth equality and inequality constraints\. The presented method uses a resampling scheme to maximize the entropy of the empirical distribution based on k\-nearest neighbor density estimation\. We show that, in the mean field,  MASEM decreases the KL\-divergence between the empirical distribution and the maximum\-entropy target exponentially in the number of resampling steps\. We instantiate MASEM with multiple local samplers and demonstrate its versatility and efficiency on synthetic and robotics\-based benchmarks\. MASEM enables fast and scalable mixing across a range of constrained sampling problems, improving over alternatives by an order of magnitude in Sinkhorn distance with competitive runtime\.

## Intra\-Option Fitted Q\-Evaluation: Evaluating Hierarchical Policies from Non\-Hierarchical Data

**Authors:** Yunfu Deng; Josiah Hanna

**ID:** 149125 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=shxhGfhWBq>) | [PDF](<https://openreview.net/pdf?id=shxhGfhWBq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149125>)

Off\-policy evaluation \(OPE\) estimates the expected return of a target policy from previously collected data without additional environment interaction\. While OPE methods for flat Markovian policies are well studied, little work has addressed evaluating hierarchical policies in which a high\-level policy selects temporally extended options that generate primitive actions until a termination condition is met\. The primary existing approach applies per\-decision importance sampling at the option level, but requires option\-annotated trajectories and exhibits variance that grows with the horizon and action dimensionality\. For non\-hierarchical policies, fitted Q\-evaluation \(FQE\) typically achieves lower error than importance sampling by leveraging the classic Bellman equation for policy evaluation; however, a naive extension of FQE to hierarchical policies results in a biased policy value estimate\. In this paper, we introduce Intra\-Option Fitted Q\-Evaluation \(IO\-FQE\), which estimates a value function in the augmented state\-option space; this approach enables OPE of hierarchical policies even when we lack annotations of what option was ran in the data\. We develop two continuous\-action instantiations of IO\-FQE and show on hierarchical continuous control tasks \(AntMaze navigation and OGBench Puzzle manipulation\) that IO\-FQE eliminates the bias incurred by a naive application of FQE to hierarchical policies and substantially lowers mean squared\-error compared to option\-level importance sampling\.

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

## Smoothed Score Queries and the Complexity of Sampling

**Authors:** Jingbo Liu

**ID:** 155645 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=43ybXxWxyS>) | [PDF](<https://openreview.net/pdf?id=43ybXxWxyS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155645>)

We study the query and communication complexity of sampling from high\-dimensional Gaussian distributions using gradient information\. In the standard oracle model, exact gradients expose only matrix\-vector products with the precision matrix, leading to polynomial approximation barriers and a characteristic $\\sqrt\{\\kappa\}$ dependence on the condition number\. We show that this barrier disappears when the sampler is allowed to query \\emph\{smoothed gradients\}, namely scores of Gaussian\-convolved distributions\. For a Gaussian target with precision $\\Lambda$, a smoothed\-score query at noise level $\\tau$ gives access to the resolvent $\(\\Lambda\+\\tau^\{\-1\}I\)^\{\-1\}$\. Combining geometrically spaced noise levels with sinc\-quadrature rational approximation, we obtain a sampler with $$     q     =     O\\left\(         \\left\(\\log\\kappa\+\\log\(\\sqrt d/\\varepsilon\)\\right\)         \\log\(\\sqrt d/\\varepsilon\)     \\right\) $$ smoothed\-gradient queries for total variation error $\\varepsilon$, improving the condition\-number dependence from $\\sqrt\{\\kappa\}$ to logarithmic\. We also study finite\-bit gradient oracles\. Using coordinatewise quantization of the transformed smoothed\-gradient answers and a final dithering step, we obtain a sampling scheme whose total communicated gradient information is polylogarithmic in $\\kappa$; in particular, for fixed dimension and accuracy, the bit complexity is $O\(\\log^2\\kappa\)$\. To complement these upper bounds, we introduce a channel\-synthesis, or reverse\-Shannon, converse technique for sampling lower bounds\. This converts total\-variation simulation guarantees into communication requirements and yields an $\\Omega\(\\log\\kappa\)$ lower bound on the required gradient information\. Together, these results identify smoothed gradients as a strictly more powerful oracle for sampling and give nearly matching upper and lower bounds for its finite\-bit complexity\.

