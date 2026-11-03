# Theory / Game Theory

理论 / 博弈论

37 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Algorithms for Linear Equations with Min and Max Operators Under \(Absolutely\) Halting Condition

**Authors:** Krishnendu Chatterjee; Ruichen Luo; Raimundo Saona; Jakub Svoboda

**ID:** 155929 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1jUqq6Mfzi>) | [PDF](<https://openreview.net/pdf?id=1jUqq6Mfzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155929>)

We consider linear equations with min and max operators\~\(LEMMs\) that contain many subproblems ranging from optimization, learning, to games\. Recently, Chatterjee et al\. \[2025\] gave a systematic study of the complexity of different subclasses\. Three key subclasses\-\-\(I\) halting branching process, \(II\) absolutely halting LEMMs, and \(III\) halting LEMMs\-\-are proved to be in UP $\\cap$ coUP while generalizing stochastic games \(SSGs\)\.    In this work, we study the classic algorithms of Policy Iteration \(PI\) and Value Iteration \(VI\) for these general subclasses\.       First, we simplify the problem hierarchy by showing the equivalence between halting branching process and SSGs\.    Then, we show that while PI diverges for absolutely halting LEMMs due to the loss of monotonicity, VI remains convergent, a result we establish via diagonal rescaling\.    Finally, we show that neither PI nor VI converges for general halting LEMMs and, to this end, propose variants of simple policy iteration that ensure convergence across all subclasses\.

## Where Should Society Draw the Line? A Social Choice Approach to Collective Consent

**Authors:** Chris Dong; Sonja Kraiczy; Rohit Prashanth Vasishta; Markus Brill; Wesley H Holliday; Niclas Boehmer

**ID:** 148371 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yN7Ut6Ttu7>) | [PDF](<https://openreview.net/pdf?id=yN7Ut6Ttu7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148371>)

Society constantly has to determine the boundaries of what it deems acceptable, from legislative decisions to the guardrails governing autonomous systems\. We initiate the axiomatic study of \_collective consent\_: given individuals' attitudes toward options, which options should receive societal consent? We organize our analysis around three principles: sufficient support, minority protection, and dominance by decisively better options\. Each captures a distinct reason for withholding societal consent from an option\. For each principle, we develop a corresponding solution concept that transparently implements the principle and is canonical in a mathematically precise sense\. For example, for minority protection, the resulting concept is a consent\-adapted version of Moulin's Proportional Veto Core\.  Balancing multiple principles simultaneously is more challenging\. To address this, we develop a game\-theoretic characterization of our veto core that naturally gives rise to a family of related concepts\. From this family, we identify the \_Approval\-Weighted Veto Core\_ as particularly desirable\. By making minorities' blocking power depend on the approval support of the options being challenged, it smoothly interpolates between proportional minority protection and majority support\. Experiments on five datasets spanning \_high\-stakes\_ decision\-making \(such as political elections, ethical AI evaluations, and moral decision\-making\)  show that solution concepts violating a principle in theory also violate it empirically\.

## Efficient Computation and Best\-Response Dynamics in Anonymous Two\-Action Games with Linear Utilities

**Authors:** Michail Fasoulakis; Evangelos Markakis; Ioannis Panageas; Christodoulos Santorinaios; Jingming Yan

**ID:** 150711 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g3h8amDXNB>) | [PDF](<https://openreview.net/pdf?id=g3h8amDXNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150711>)

The computational complexity of anonymous games has been a central theme in algorithmic game theory, with foundational contributions by Daskalakis and Papadimitriou \[2015\], Goldberg and Turchetta \[2017\], and Cheng et al\. \[2017\] establishing that the landscape of equilibrium computation admits a PTAS\. In this paper, we investigate the class of $n$\-player anonymous games with linear utilities and two actions\. While finding an equilibrium in anonymous games is PPAD\-hard for arbitrary utility functions—even with a constant number of actions \[Chen et al\., 2015\]—we show that this linear structure allows for significant algorithmic improvements\. Exploiting the fact that payoffs depend solely on the first moment of the players’ strategy distribution, we provide the first algorithm for computing exact Nash equilibria that runs in time polynomial in the number of players $n$\. We achieve this by establishing a novel combinatorial characterization of the Nash equilibria\. Finally, we establish a novel connection between Nash equilibria in these games and non\-convex non\-concave min\-max optimization\. Despite the technical challenges posed by this structural property, we design a sequential best\-response dynamic that provably converges to an $\\epsilon$\-Nash equilibrium in $\\mathcal\{O\}\(\\frac\{1\}\{\\epsilon\}\)$ steps\.

## The End Justifies the Mean: Linear Ranking Rules for Proportional Sequential Decisions

**Authors:** Carmel Baharav; Niclas Boehmer; Bailey Flanigan; Maximilian T\. Wittmann

**ID:** 154572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CZxlob1klw>) | [PDF](<https://openreview.net/pdf?id=CZxlob1klw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154572>)

AI alignment and participatory design motivate a new democratic design problem: how to collectively choose a \_decision rule to use repeatedly\_\. We study this problem for \_linear ranking rules\_, which repeatedly rank items $x\_j$ within batches $X=\(x\_1,\\dots,x\_m\)\\in\(\\mathbb\{R\}^d\)^m$, where each item's ranking is dictated by its score $\\langle \\theta^\{\\ast\},x\_j\\rangle$ according to a fixed scoring vector $\\theta^\{\\ast\}$\. Given voters' preferred scoring vectors $\\theta^\{\(1\)\},\\dots,\\theta^\{\(n\)\}$ and their population fractions $\\alpha^\{\(1\)\},\\dots,\\alpha^\{\(n\)\}$, we ask how to choose a collective vector $\\theta^\{\\ast\}$ satisfying \_individual proportionality \(IP\)\_: every voter type $i$ should agree with the resulting rankings to an $\\alpha^\{\(i\)\}$\-proportional degree, either on average over time \(\_long\-run IP\_\) or even within each batch \(\_per\-batch IP\_\)\.  The default rule, the arithmetic mean of the $\\theta^\{\(i\)\}$, has been shown to be severely majoritarian; more generally, it is not clear that \_any\_ fixed linear rule can balance many voters' disparate opinions\. Our main result is that, surprisingly, there \_is\_ a simple rule that does satisfy long\-run IP: the \_angular mean\_, the spherical analog of the arithmetic mean\. We then show that exact per\-batch IP is impossible for fixed linear rules, but that the gap between per\-batch and long\-run IP shrinks quickly with batch size\. Experiments on three real\-world preference datasets show that all rules perform similarly when voters' preferences are homogeneous, while the angular mean substantially improves proportionality in high\-disagreement regimes\.

## Provably Efficient Regularized Online RLHF with Generalized Bilinear Preferences

**Authors:** Junghyun Lee; Minju Hong; Kwang\-Sung Jun; Chulhee Yun; Se\-Young Yun

**ID:** 151212 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c90ZvP0bAX>) | [PDF](<https://openreview.net/pdf?id=c90ZvP0bAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151212>)

We consider the problem of \*regularized\* best\-response max\-regret minimization in online RLHF under general preferences and bandit feedback\. While various regularizers are utilized to robustify alignment, known polylogarithmic regret guarantees remain heavily specific to KL\. To investigate whether such fast rates extend beyond KL, we adopt the \*Generalized Bilinear Preference Model \(GBPM\)\*—capturing intransitive preferences over $d$\-dimensional item\-wise features via a rank\-$2r$ skew\-symmetric matrix—to isolate the impact of generic regularization\. Crucially, under GBPM, we prove that the dual gap of any greedy policy is bounded by the \*squared\* estimation error, derived using \*only\* strong convexity and skew\-symmetry\. Under a feature coverage assumption, we establish polylogarithmic $\\tilde\{\\mathcal\{O\}\}\(\\eta d^4 \(\\log T\)^2 \\wedge d^2 \\sqrt\{T\}\)$ regret with Greedy Sampling and $\\mathrm\{poly\}\(d\)$\-free $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{\\eta r T\} \\wedge r^\{1/3\} T^\{2/3\}\)$ regret with Explore\-Then\-Commit, where $\\eta^\{\-1\}$ is the regularization coefficient and $T$ is the time horizon\. This demonstrates that \`\`fast'' regrets are \*not\* KL\-specific, but rather a fundamental consequence of generic strongly convex geometry\.

## Optimizing the Envy Cycle Elimination Algorithm

**Authors:** Karen Frilya Celine; Warut Suksompong

**ID:** 151155 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ccTy9vC7FY>) | [PDF](<https://openreview.net/pdf?id=ccTy9vC7FY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151155>)

In the fair allocation of indivisible goods, a widely used notion of fairness is envy\-freeness up to one good \(EF1\)\. A classical way to compute an EF1 allocation is the envy cycle elimination \(ECE\) algorithm, which iteratively assigns a good to an unenvied agent and, after each assignment, resolves any resulting envy cycle\. Although the ECE algorithm always produces an EF1 allocation, it leaves considerable freedom in choosing both the next good to allocate and the agent to receive it\. We investigate natural heuristics that exploit this flexibility to improve welfare guarantees\. For example, we show that if the heuristic jointly selects the good and the receiving agent maximizing the utility, the worst\-case utilitarian welfare loss is significantly lower than that of the vanilla algorithm\. By contrast, restricting the heuristic to select only one of these two dimensions does not yield comparable improvements\. We also complement our theoretical results with empirical average\-case analysis\.

## GoT: A Game\-Theoretic Approach to the Game of Twenty Questions

**Authors:** Langyuan Cui; Chun Kai Ling; Hwee Tou Ng

**ID:** 150838 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=evwl9c0pUM>) | [PDF](<https://openreview.net/pdf?id=evwl9c0pUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150838>)

The \*Game of Twenty Questions\* is a classical problem where a questioner must identify a hidden item by asking binary questions\. Although simple in form, the game is strategically challenging, especially when the questions are expressed in natural language\. It is also a useful abstraction for realistic information\-seeking tasks, such as medical diagnosis and troubleshooting\. Existing approaches often rely on simplifying assumptions that degrade \*worst\-case\* performance\. This is an issue with serious implications in high\-stakes applications\. In this work, we introduce \*Strategic Language Search\* \(SLS\), an adversarial counterpart of Twenty Questions, and formalize it and its variants as two\-player zero\-sum extensive\-form games\. We then propose \*Game of Thought\* \(GoT\), a framework that applies game\-theoretic techniques to approximate a Nash equilibrium \(NE\) strategy for the restricted variant of the game\. Empirical results demonstrate that our approach consistently improves worst\-case performance compared to \(1\) direct prompting\-based methods and \(2\) heuristic\-guided search methods across all tested settings\.

## LLM Active Alignment: A Nash Equilibrium Perspective

**Authors:** Tonghan Wang; Yuqi Pan; Xinyi Yang; Xinrui Song; Yanchen Jiang; Milind Tambe; David Parkes

**ID:** 149530 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pSeiZnioUY>) | [PDF](<https://openreview.net/pdf?id=pSeiZnioUY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149530>)

We develop a game\-theoretic framework for predicting and steering the behavior of populations of large language models \(LLMs\) through Nash equilibrium \(NE\) analysis\. To avoid the intractability of equilibrium computation in open\-ended text spaces, we model each agent’s action as a mixture over human subpopulations\. Agents choose actively and strategically which groups to align with, yielding an interpretable and behaviorally substantive policy class\. We derive closed\-form NE characterizations, adopting standard concave\-utility assumptions to enable analytical system\-level predictions and give explicit, actionable guidance for shifting alignment targets toward socially desirable outcomes\. The method functions as an active alignment layer on top of existing alignment pipelines such as RLHF\. In a social\-media setting, we show that a population of LLMs, especially reasoning\-based models, may exhibit political exclusion—pathologies where some subpopulations are ignored by all LLM agents—which can be avoided by our method, illustrating the promise of applying the method to regulate multi\-agent LLM dynamics across domains\.

## Polynomial\-Time Algorithm for Thiele Voting Rules with Voter Interval Preferences

**Authors:** Pasin Manurangsi; Krzysztof Sornat

**ID:** 148977 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tk5UFZich8>) | [PDF](<https://openreview.net/pdf?id=tk5UFZich8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148977>)

We present a polynomial\-time algorithm for computing an optimal committee of size $k$ under any given Thiele voting rule for elections on the Voter Interval domain \(i\.e\., when voters can be ordered so that each candidate is approved by a consecutive voters\)\. Our result extends to the Generalized Thiele rule, in which each voter has an individual weight \(scoring\) sequence\. This resolves a 10\-year\-old open problem that was originally posed for Proportional Approval Voting and later extended to every Thiele rule \(Elkind and Lackner, IJCAI 2015; Peters, AAAI 2018\)\.  Our main technical ingredient is a new structural result\-\-\-a concavity theorem for families of intervals\. It shows that, given two solutions of different sizes, one can construct a solution of any intermediate size whose score is at least the corresponding linear interpolation of the two scores\. As a consequence, on Voter Interval profiles, the optimal total Thiele score is a concave function of the committee size\. We exploit this concavity within an optimization framework based on a Lagrangian relaxation of a natural integer linear program formulation, obtained by moving the cardinality constraint into the objective\. On Voter Interval profiles, the resulting constraint matrix is totally unimodular, so it can be solved in polynomial time\.  Our main algorithm and its proof were obtained via human\-\-AI collaboration\. In particular, a slightly simplified version of the main structural theorem used by the algorithm was obtained in a single call to Gemini Deep Think\.

## Network Intervention by Polling Strategic Agents

**Authors:** Chenyu Zhang; Rohit Parasnis; Saurabh Amin

**ID:** 150378 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iWDHGOWE4l>) | [PDF](<https://openreview.net/pdf?id=iWDHGOWE4l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150378>)

A planner in a network of strategic agents faces three entangled challenges: the optimum depends on agents' private information, queried agents may misreport to steer the outcome, and exact computation does not scale\. We study these challenges in multi\-activity network games with heterogeneous private technologies, in which the planner sets non\-discriminatory prices\. We show that the optimal prices admit a centrality\-based decomposition of the welfare kernel: each agent's contribution scales with its squared centrality in a network reweighted by agents' preferences across activities\. This decomposition motivates \`Poll\`, a polling algorithm in which the planner samples one agent per round, walks briefly through the agent's neighborhood, and updates the price from a local report\. From the same decomposition flow three forms of efficiency: computationally, \`Poll\` uses significantly fewer operations than exact computation and other distributed methods; statistically, its query complexity scales with topology and preference heterogeneity rather than with population size; and economically, it converges to welfare\-maximizing prices while inducing truthful reports and detecting adversarial deviations\.

## Tapes Together Strong: The Co\-evolution of Computation and Cooperation

**Authors:** Kunal Jha; Francesco Cicala; Blaise Aguera y Arcas; Blake Richards; Natasha Jaques; Max Kleiman\-Weiner; Eyvind Niklasson

**ID:** 150644 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gW1LynFzKT>) | [PDF](<https://openreview.net/pdf?id=gW1LynFzKT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150644>)

How does cooperation evolve in complex agentic systems? Prior work in evolutionary game theory studies why individuals are incentivized to cooperate by isolating social interactions from the physical costs required to execute them, while artificial life models traditionally study the environments that lead to replication without considering the strategic decisions behind the evolved mechanisms\. In contrast, we introduce \*\*Autopoietic Game Theory\*\*, a computational model where social interactions, replication mechanisms, and their associated computational costs are endogenous and simultaneously co\-evolving\. We study these dynamics using a computational substrate of randomly initialized programs in Z80 machine code, showing empirically and theoretically that embedding a social dilemma directly into the physics of computation can favor the emergence of self\-replicating, cooperative strategies\. When resources are scarce, our analysis shows that \*defection can become self\-limiting even in well\-mixed populations\*: parasitic stealing destroys shared energy, slows execution, and can prevent reliable replication\. Empirically, evolved programs suppress stealing across several Z80 environments, while spatial assortment further supports structural complexity and task performance\. We further show that the framework can incorporate exogenous pressures, such as math tasks structured as sequential social dilemmas, when rewards are tied to computation budgets\. These results suggest that coupling an agent's capacity for computation to its available energy transforms cooperation into a dominant scaffolding for building complex, sustainable, and self\-organizing systems\.

## Mechanism Design for AI Overviews: Creator Incentives and Long\-Term Profit

**Authors:** Yihang Wu; Jiajun Tang; Jinfei Liu; Haifeng Xu; Fan Yao

**ID:** 150806 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGrnzpKFrN>) | [PDF](<https://openreview.net/pdf?id=fGrnzpKFrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150806>)

The integration of AI Overviews into search engines enhances user experience but diverts traffic from content creators, potentially discouraging high\-quality content creation and causing user attrition that undermines long\-term search engine profit\. To address this issue, we propose a game\-theoretic model of creator competition with costly effort, characterize equilibrium behavior, and design two incentive mechanisms: a \\emph\{citation mechanism\} that references sources within an AI Overview, and a \\emph\{compensation mechanism\} that offers monetary rewards to creators\. For both cases, we provide structural insights for profit\-maximizing mechanisms\. Evaluations parameterized by real click data show that although AI Overviews harm long\-term search engine profit, interventions based on our proposed mechanisms can increase long\-term profit across a range of realistic scenarios, pointing toward a more sustainable trajectory for AI\-enhanced search ecosystems\.

## Incremental Multiple Oracle

**Authors:** Carlos Martin; Tuomas Sandholm

**ID:** 155693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3eGkK2Bn1c>) | [PDF](<https://openreview.net/pdf?id=3eGkK2Bn1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155693>)

We present a framework for computing approximate mixed\-strategy Nash equilibria of continuous\-action games\. It is a modification of the multiple oracle algorithm, which extends the double oracle algorithm to multiple players and continuous action spaces\. Unlike prior methods, it maintains fixed\-cardinality pure strategy sets for each player\. Thus, unlike prior methods, only a constant amount of memory is necessary\. Furthermore, it does not require exact metagame solving on each iteration, which can be computationally expensive for large metagames\. Moreover, it does not require global best\-response computation on each iteration, which can be computationally expensive or even intractable for high\-dimensional action spaces and general games\. Our method incrementally reduces the exploitability of the strategy profile in the finite metagame, pushing it toward Nash equilibrium\. Simultaneously, it incrementally improves the pure strategies that best respond to this strategy profile in the full game\. We evaluate our method on various continuous\-action games, showing that it obtains approximate mixed\-strategy Nash equilibria with low exploitability\.

## Agentic AI Design Should be Mediated to Promote Social Welfare

**Authors:** Omer Madmon; Moshe Tennenholtz

**ID:** 139999 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xDzlRnXKL4>) | [PDF](<https://openreview.net/pdf?id=xDzlRnXKL4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139999>)

The rise of generative AI and autonomous agents is creating ecosystems in which stakeholders strategically choose which agents to deploy on their behalf\. These design choices\-\-such as model backbone, prompting strategy, tool access, and fine\-tuning pipeline\-\-are often strategically interdependent, as the performance of a deployed agent depends on the agents chosen by others\. This position paper argues that this agent design stage should itself be a target for mediation\. This perspective shifts attention from mediating only the \\emph\{downstream\} interaction among deployed agents to mediating the \\emph\{upstream\} stakeholder game that determines which agents enter that interaction in the first place\. We formalize this agent design stage as a \\emph\{meta\-game\}, show how its equilibria can be collectively harmful, and discuss how various forms of mediation can realign incentives toward socially beneficial outcomes\. We demonstrate these mediation approaches using both stylized examples and a real\-world case study constructed from empirical LLM\-agent interaction data\. We outline concrete research directions for developing mediators that steer agentic design choices toward socially desirable outcomes\.

## Extending Myerson's Optimal Auctions to Correlated Bidders via Neural Network Interpolation

**Authors:** Mingyu Guo; Jiayuan Liu; Vincent Conitzer

**ID:** 151268 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=beJTn29hNA>) | [PDF](<https://openreview.net/pdf?id=beJTn29hNA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151268>)

We aim to design revenue\-maximizing single\-item auctions that are deterministic, strategy\-proof, and ex post individually rational \-\-\- the quintessential fundamental model for optimal mechanism design\. While Myerson's seminal work solved this model for independent bidders, straightforward extensions to correlated settings often result in non\-monotonic, and therefore non\-strategy\-proof allocations\. Critically, optimal allocation design for correlated bidders is NP\-hard to approximate, rendering theoretical optimality guarantees in this domain computationally intractable\.  We establish a new standard of empirical rigor for this theoretically hard model by proposing an empirical pipeline\. We synthesize neural interpolation of Myerson's greedy allocation based on marginal profits \(the correlated variant of virtual valuation\), formal neural verification to enforce exact strategy\-proofness, and a constructive repair procedure\.  Empirically, our method is highly effective, consistently achieves near\-optimal revenue across a wide range of distributions, including synthetic, adversarial, and real\-world \(consumer, financial, and industrial\) datasets\.  Compared to existing manual and neural baselines, our approach shows substantial improvement, often reducing the revenue gap by an order of magnitude\. Our study is also the first to introduce \(unattainable\) greedy revenue as a rigorous upper bound for empirical benchmarking, providing a definitive quantitative performance measure where true optima remain theoretically elusive\.  We demonstrate the generality of our approach by extending it to multi\-unit auctions with unit demand and integrating our verification techniques into RegretNet to achieve exact strategy\-proofness\.

## Opponent Modeling in Incomplete\-Information Continuous Colonel Blotto

**Authors:** Yuanyuan Zhang; Gang Xiao; Feng Ye; Lingtao Xue; Zhipeng Du

**ID:** 153312 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MFTBJfrkL4>) | [PDF](<https://openreview.net/pdf?id=MFTBJfrkL4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153312>)

We study which reduced opponent states preserve the interim decision problem of a realized type in incomplete\-information continuous Colonel Blotto\. For any continuous observable summary of the opponent posterior, we prove an exact ambiguity identity: the worst\-case payoff gap over posterior laws with the same state equals twice the sup\-norm distance of the payoff slice from the closed observable\-additive span\. Thus a state is payoff\-exact if and only if every payoff slice lies in that span\. Specializing to exact\-budget Blotto, we characterize first\-order battlefield marginals: they are exact precisely for coordinate\-additive opponent slices\. The two\-battlefield case is degenerate, whereas from three battlefields onward first\-order marginals can discard payoff\-relevant dependence; more generally, exact\-budget allocation games exhibit a strict $r$\-order marginal hierarchy\. The same characterization separates estimation from representation: exact states admit vanishing statistical error, while non\-exact states impose a sample\-independent ambiguity floor for state\-restricted learners\. Finally, exact and efficiently learnable first\-order states do not eliminate equilibrium complexity: approximate Bayesian Nash equilibrium remains PPAD\-hard in a strict diagonal regularized Blotto subclass\.

## Payoff\-Aware Prediction of Population Game Dynamics

**Authors:** Kang Wang; Xiao Wang; Bo Li; Renzhe Xu

**ID:** 151122 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cphFgh3BN0>) | [PDF](<https://openreview.net/pdf?id=cphFgh3BN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151122>)

Population game dynamics describe how aggregate behavior evolves in response to payoff signals\. In many applications, the payoff function may change, and the goal is to predict the population trajectory induced by a new payoff design before trajectory data under that design are available\. We study this problem as payoff\-aware prediction of population game dynamics \. Standard dynamics learning methods fit the motion observed under training payoffs, but do not separate the payoff\-dependent incentive from the payoff\-independent response structure needed for prediction under new payoffs\. Building on the existing framework of Riemannian game dynamics, we propose PA\-RmD, a payoff\-aware learning method that keeps payoff information explicit and learns the payoff\-independent response structure from data\. Theoretically, we show that the learned model preserves fixed\-payoff Nash equilibria and derive finite\-time one\-step prediction bounds under shared\-response and payoff\-coverage conditions\. Empirically, we evaluate PA\-RmD on synthetic zero\-sum and potential games, as well as a YouTube Trending multi\-country dataset, showing that our method performs well under changing payoff designs\.

## On Nash Equilibria in Participatory Budgeting with Donations and Beyond

**Authors:** GRZEGORZ LISOWSKI; Georgios Papasotiropoulos; Grzegorz Pierczyński; Krzysztof Rogowski

**ID:** 150836 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ewuKNwHRFd>) | [PDF](<https://openreview.net/pdf?id=ewuKNwHRFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150836>)

This work proposes a framework for public decision processes with a monetary component, where voters can pledge donations to support preferred projects and influence the allocation of public funds\. It captures a range of real\-world scenarios, including participatory budgeting, blockchain\-based funding platforms, charitable programs, and crowdfunding campaigns\. Through both theoretical and experimental evaluation, our study addresses questions concerning the existence, structure, number, computation, and quality of Nash equilibria\.

## Domination\-Avoiding Learning Agents Cannot Collude

**Authors:** Noam Nisan; Emmanuel Zerah

**ID:** 152226 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uctwef4V4U>) | [PDF](<https://openreview.net/pdf?id=Uctwef4V4U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152226>)

An influential paper of Calvano et al\. empirically demonstrated that Q\-learning agents spontaneously collude when placed as sellers that compete on prices in a natural market model\.  More recent results of Fish et al\. empirically demonstrated that similar collusion happens with commercial LLMs\. We formally prove that such collusion can also happen with external\-regret\-minimizing agents\. We identify a very general class of agents, which we term Domination\-Avoiding agents, that provably do not collude in such markets\. This class contains all Mean\-Based agents and all internal\-regret\-minimizing agents, as well as others such as Multiplicative\-Weight agents with variable learning rate and contextual variants thereof\. More generally we show that, in any game, this class of agents is guaranteed to jointly learn to almost never play strategies that are eliminated by repeated elimination of purely dominated strategies\.

## Online Learning of Group\-Stable Coalition Structures

**Authors:** Saar Cohen; Michael Wooldridge

**ID:** 153773 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ilrh0L7gOZ>) | [PDF](<https://openreview.net/pdf?id=Ilrh0L7gOZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153773>)

Coalition formation concerns partitioning agents into disjoint coalitions based on their preferences for one another\. In \*online learning\* of coalition structures, agents' \*true\* preferences may be initially unknown\. Thus, coalitions are repeatedly formed based on preferences learned \*online\* from iterative feedback derived from interactions in those coalitions\. This work introduces a new \*group stability\* approach to online learning in coalition formation, relying only on \*partial\* \*noisy\* feedback observed \*after\* agents interact\. We analyze the system in terms of common \*group stability\* notions, where no group of agents benefits by simultaneously joining other coalitions or forming a new one\. Our goal is to learn coalition structures that are robust to such group deviations, while simultaneously determining whether stable outcomes exist under the underlying \(unknown\) preferences\. To this end, we analyze algorithms through two complementary metrics: \(1\) the error in predicting whether a stable partition exists, and \(2\) a regret notion that quantifies violations of group stability over time\. We propose an algorithm that combines optimistic and pessimistic estimates to both explore potentially stable partitions and certify stability when supported by the observed feedback\. We show that when a stable partition exists, our algorithm obtains sublinear error and regret despite relying only on partial noisy feedback, while in the non\-existence case, it incurs only a constant number of mistakes\. Experiments on synthetic instances validate our findings\.

## Selling Information While Being an Interested Party

**Authors:** Francesco Bacchiocchi; Matteo Castiglioni; Alberto Marchesi; Giulia Romano; Nicola Gatti

**ID:** 150628 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gfMatx9TgN>) | [PDF](<https://openreview.net/pdf?id=gfMatx9TgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150628>)

We study the algorithmic problem faced by an information holder \(seller\) who wants to optimally sell information to a budged\-constrained decision maker \(buyer\)\. The utilities of both agents depend on a random state of nature that is revealed to the seller, but unknown to the buyer\. Differently from previous works, we consider the case in which the seller is an interested party, as the decision taken by the buyer also influences seller's utility\. The seller's goal is to \(partially\) sell their information about the state of nature to the buyer, so as to concurrently maximize revenue and induce the buyer to take a desirable decision\. We study settings in which buyer's budget and utilities are determined by a random buyer's type unknown to the seller\. First, we propose a polynomial\-time algorithm for computing an optimal seller's protocol, which proposes a menu of information\-revelation policies to the buyer, who acquires one of them by paying its corresponding price\. Then, we switch the attention to the case in which the seller can only employ a single information\-revelation policy, rather than proposing a menu\. In such a setting, we completely characterize the computational complexity of the seller's algorithmic problem\.

## Toward Optimal Regret in Robust Pricing: Decoupling Corruption and Time

**Authors:** Kalana K Kalupahana; Francesco Emanuele Stradi; Matteo Castiglioni; Alberto Marchesi

**ID:** 151410 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=asVAA3b3e2>) | [PDF](<https://openreview.net/pdf?id=asVAA3b3e2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151410>)

We design the first regret guarantees for robust dynamic pricing which decouples the dependence on the corruption $C$ and the time horizon $T$\. In dynamic pricing, a seller with unlimited supply of a good interacts with a stream of buyers over $T$ rounds, with the goal of maximizing revenue\. At each round $t$, the seller posts a price $p\_t$, and the buyer purchases the good only if their unknown valuation $v^\\star$ exceeds this price\. The seller observes only the binary feedback $\\mathbb\{I\}\[p\_t \\leq v^\\star\]$, indicating whether a sale occurred\. In the robust pricing setting, a malicious adversary is allowed to corrupt this feedback in at most $C$ rounds\.  Even if the learner knows the corruption $C$, the best known regret bound is $\\mathcal\{O\}\(C\\log\\log T\)$ by Gupta et al\. \[2025\]\. They left as an open problem to "decouple'' the dependence on $C$ and $T$\. In this work, we resolve this open problem\. In particular, we develop a robust variant of binary search that achieves regret $\\mathcal\{O\}\(C\+\\log T\)$ when the corruption $C$ is known and $\\mathcal\{O\}\(C\+\\log^2 T\)$ when the corruption is unknown\.

## Learning Acceptable Lotteries via Queries: Minimizing Aggregated Violation Distances

**Authors:** Paul W Goldberg; Nicholas Teh

**ID:** 155546 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kauy5rN2S>) | [PDF](<https://openreview.net/pdf?id=4kauy5rN2S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155546>)

Randomization is often used to compromise among fixed policies, classifiers, or interventions, but affected stakeholders may be unable or unwilling to report utilities over all alternatives\. We study a weaker feedback model in which, for each proposed lottery, each stakeholder reports only whether it is acceptable\. Unlike prior work focused on finding a unanimously acceptable lottery when one exists, we allow unanimity to be impossible and seek lotteries that minimize aggregate acceptability violations\. We model each stakeholder's acceptable lotteries by an unknown linear threshold rule over the lottery simplex, and the learner may only ask accept/reject queries\. Since binary labels do not reveal utility shortfalls, and such shortfalls are not comparable across stakeholders, we measure violation geometrically: the Euclidean distance, within the affine hull of the simplex, to the stakeholder's normalized acceptance hyperplane\. These distances are aggregated using the power mean\. Our results characterize exactly which boundary information can be learned from these queries\. A deterministic algorithm uses $\\mathcal\{O\}\(nm\\log\(m/\\varepsilon\)\)$ queries to recover the normalized boundary whenever violation distances are identifiable from query answers\. Otherwise, queries determine the acceptable face but not the rate at which violation grows away from it; this ambiguity is unavoidable\. When no ambiguity arises, the aggregate violation objective can be optimized exactly\. When it does, we optimize a convex worst\-case upper bound objective based on distance to the learned acceptable set and prove an additive loss bound of $\\sqrt\{2\}\(\|B\|/n\)^\{1/p\}$\. We also prove structural properties of optimal lotteries, including a support\-size bound of $n\+1$, and give a limited\-budget algorithm with additive\-$\\alpha$ guarantees\. Synthetic experiments illustrate the resulting breadth\-depth tradeoff and the effect of the power\-mean parameter $p$ on violation distribution\.

## Simultaneous Gradient Learning in First\-Price Auctions

**Authors:** Janik Bürgermeister; Julius Durmann; Martin Bichler; Mete Ş Ahunbay; Bary Pradelski; Marco Scarsini

**ID:** 155850 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2QNM4WgPvD>) | [PDF](<https://openreview.net/pdf?id=2QNM4WgPvD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155850>)

We study equilibrium learning in discretized Bayesian games, focusing on first\-price auctions as a testbed for gradient\-based learning dynamics under private information\. While the symmetric independent private values model admits a unique Bayesian correlated equilibrium \(BCE\) in the continuous limit, standard convergence guarantees for gradient\-based learners do not apply: classical no\-regret theory predicts convergence only to Bayesian coarse correlated equilibria \(BCCE\), which can remain large and far from the competitive equilibrium even under fine discretizations\. To bridge this gap, we introduce the notion of Bayesian semicoarse correlated equilibrium \(BSCCE\), an equilibrium concept that refines BCCE by restricting deviations to probability\-preserving transformations consistent with projected gradient dynamics\. We provide a linear programming characterization of BSCCE with polynomially many variables and constraints and establish the inclusion hierarchy $BCE \\subseteq BSCCE \\subseteq BCCE$\. Our main finding is that the BSCCE set contracts in many cases as the discretization of the Bayesian game is refined\. Even with priors for which BCCE fails to concentrate, the diameter of the BSCCE polytope shrinks toward zero, indicating convergence to the unique continuous\-game Bayes\-Nash equilibrium\. These results provide a principled explanation for the observed robustness of gradient\-based learning in discretized Bayesian games, showing that these dynamics select a smaller equilibrium set than standard no\-regret theory predicts\.

## Approximate Envy\-Free Allocations up to any k Goods

**Authors:** Aris Filos\-Ratsikas; Georgios Kalantzis; Fangxiao Wang

**ID:** 148884 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uTA7e7Me8B>) | [PDF](<https://openreview.net/pdf?id=uTA7e7Me8B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148884>)

We study the problem of finding approximate envy\-free allocations up to any $k$ goods \($\\alpha$\-EFkX\), when agents have additive values over goods in a bundle\. As our main result, we show that for any $k&gt;2$, $\\frac\{k\+1\}\{k\+2\}$\-EFkX allocations exist for any number of agents, and can be computed in polynomial time, via an appropriate generalization of the 3PA algorithm of \(Amanatidis et al\., 2024\)\. An immediate corollary of this result is that $3/4$\-EF2X allocations exist for any number of agents; in contrast, $2/3$\-EFX allocations are only known to exist for up to 7 agents\. We improve this latter result by devising an algorithm that achieves $2/3$\-EFX for 8 agents\. We also consider EFkX graph orientations; we prove that such orientations do not always exist, and that deciding their existence is NP\-complete, thereby generalizing the corresponding result of \(Christodoulou et al\., 2023\) for $k=1$\.

## Profit Maximization in Bilateral Trade against a Smooth Adversary

**Authors:** Simone Di Gregorio; Paul Duetting; Federico Fusco; Chris Schwiegelshohn

**ID:** 153260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MaghUZLEQt>) | [PDF](<https://openreview.net/pdf?id=MaghUZLEQt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153260>)

Bilateral trade models the task of intermediating between two strategic agents, a seller and a buyer, who wish to trade a good\.  We study this problem from the perspective of a profit\-maximizing broker within an online learning framework, where the agents' valuations are generated by a smooth adversary\.   We devise a learning algorithm that guarantees a $\\tilde\{O\}\(\\sqrt\{T\}\)$ regret bound, which is tight in the time horizon $T$ up to poly\-logarithmic factors\. This matches the minimax rate for the stochastic i\.i\.d\. case, and is also well separated from the adversarial setting, where sublinear\-regret is unattainable\. By extending the strong regret guarantees from the i\.i\.d\. case to the smooth adversary, we significantly broaden the scope of settings where such fast rate is achievable, while closing an important gap in the regret landscape of this fundamental economic problem\.   To overcome the challenges posed by this adversary, we leverage a continuity property of smooth instances and combines this with a hierarchical net\-construction of the broker's action space, which is analyzed via algorithmic chaining\. We showcase the applicability of these techniques by deriving a similarly tight $\\tilde\{O\}\(\\sqrt\{T\}\)$ regret bound for a related mechanism design model: the joint ads problem\.

## Learning\-Augmented Coordination Mechanisms

**Authors:** George Christodoulou; Vasilis Christoforidis; Alkmini Sgouritsa; Ioannis Vlachos

**ID:** 151549 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zofbd8bF8e>) | [PDF](<https://openreview.net/pdf?id=Zofbd8bF8e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151549>)

The inefficiency of decentralized resource allocation, a core challenge in Algorithmic Game Theory, is classically measured by the Price of Anarchy \(PoA\) and the  Price of Stability \(PoS\)\. The most widely studied and foundational class of these models are  atomic and non\-atomic congestion games, for which a robust theory quantifying the inefficiency of equilibria is well\-established\. To mitigate the effects of this selfish behavior, we employ  Coordination Mechanisms, which modify resource costs to incentivize socially improved equilibrium outcomes\. In their standard form, Coordination Mechanisms have been limited by a pessimistic, worst\-case view; it is assumed that the demand is  unknown and  adversarially chosen\. Consequently, positive results remain sparse, applying mainly to specialized network topologies like parallel links\. We address this limitation by studying the design and analysis of  learning\-augmented coordination mechanisms, where the mechanism is endowed with a potentially inaccurate  prediction of the demand $\\bar\{r\}$\. We study general  atomic and non\-atomic congestion   games with polynomial latency functions of degree $d$\. Our main positive result is a learning\-augmented coordination mechanism tuned by a confidence parameter $\\beta$ which achieves a "best of both worlds" type of result: it     achieves approximately optimal performance for an accurate     prediction without sacrificing the worst\-case guarantee of a good     equilibrium \(PoS\)\. We further establish bounds on a stronger     robustness measure, the PoA\-Robustness \(worst equilibrium     performance under cost modification\)\. The mechanism's construction     relies on transforming approximate equilibria of the original game     into exact equilibria of the modified game using a carefully     defined  approximate potential function\. We complement our positive results by providing  impossibility   results\.  We first show that a stronger notion of consistency, requiring that all equilibria have optimal social cost for an accurate prediction, fails to guarantee bounded robustness\. We also show a strong  error tolerance limit: any mechanism achieving optimal consistency in non\-atomic games suffers a sharp, discontinuous performance that collapses to the original PoA value under even infinitesimally small prediction errors, highlighting the limits of efficiency guarantees in non\-atomic congestion games\.

## Learning to Price with Persuasion

**Authors:** Maria\-Florina Balcan; Tejas Pagare; Karan Singh

**ID:** 154117 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G8VwOAxmJ2>) | [PDF](<https://openreview.net/pdf?id=G8VwOAxmJ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154117>)

Motivated by modern marketplaces, where the platform or the seller routinely gathers detailed user profiles, we study a novel learning theoretic model that simultaneously involves information and mechanism design\. Specifically, we consider the economic setting recently introduced by Bergemann et al, where in addition to the menu of quality\-price pairs, the seller offers information on the value of the match between product quality and buyer's taste via a signaling scheme\. We relax the assumption that the seller knows the buyers' belief about the distribution of tastes and study the sample requirements of designing a revenue maximizing scheme\. We consider both the batch setting where we have access to data from a set of i\.i\.d\. buyers and an online demand query model where we observe the buyers behaviors to seller's schemes\. Despite the apparent non\-convexity of the problem, we also give the first FPTAS to compute a scheme that maximizes the revenue within an arbitrarily small additive loss, which was unknown even in the previous result of Bergemann et al\. Overall, this brings a new learning perspective in asymmetric economic settings where buyers and sellers know different types of information\.

## Speakeasy: Auditing Cheap Signals in Peer Prediction

**Authors:** Fang\-Yi Yu; Yuang Zhang

**ID:** 155068 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8ifaGzJ84c>) | [PDF](<https://openreview.net/pdf?id=8ifaGzJ84c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155068>)

How can we elicit truthful information from strategic agents?  Traditional peer prediction mechanisms incentivize truthful reporting by rewarding agreement between agents' reports, but break down when agents can submit cheap but correlated signals\-\-\-such as outputs from different LLMs\.  We introduce the Speakeasy mechanism, a framework for peer prediction when the principal can also sample these cheap signals\. The mechanism augments any peer prediction rule with an audit strategy that penalizes reports for matching the principal's samples\.  We give a polynomial\-time algorithm for the optimal audit strategy, so that truthful reporting is a strict Bayes\-\-Nash equilibrium and yields the highest welfare against agents choosing between reporting truthfully and copying a single cheap signal\.  We extend the guarantee to more complex misreport strategies that mix multiple cheap signals, showing that Speakeasy preserves the truthfulness of the base mechanism\.  We empirically test the Speakeasy mechanism against classical peer prediction mechanisms on a peer\-review dataset of ICLR submissions, with reviews from human reviewers and several LLMs\. Several classical mechanisms fail to make truthful reporting a Bayes\-\-Nash equilibrium once LLMs are available, while Speakeasy restores it for all of them\.

## Context Binding and Reusable Leakage in Threshold Decryption

**Authors:** Tingyi Lin; Ruoran Lai; Shawn Yu; Huanxi Zhang

**ID:** 153871 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I8M8PZy2XG>) | [PDF](<https://openreview.net/pdf?id=I8M8PZy2XG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153871>)

Threshold decryption is increasingly used to hide economically sensitive data until a public release time\. The main strategic risk is not merely premature decryption of one ciphertext, but leakage of a coalition\-generated decoder that may remain useful across many future contexts\. We formalize a repeated leakage game for arbitrary monotone access structures with transferable utility, one\-time public accountability exposure, and an abstract reachability correspondence that records which future contexts become compromised after a first leak\. Our main theorem gives an exact characterization: honest non\-leakage is coalition safe if and only if, for every authorized coalition S, its exposure κ\(S\) dominates the maximum discounted leakage value over the contexts reachable from a single first leak by S\. Two important consequences follow\. In fully reusable schemes, the exact deterrence threshold equals the coalition’s continuation leakage value, yielding horizon amplification\. In context\-isolating schemes, including context dependent threshold decryption, the reachable set collapses to the current context, so the threshold drops to the one\-shot value\. We also prove a sharp separation: for a T\-round family with unit per\-round leakage value, reusable leakage requires Θ\(T\) total exposure, whereas context isolation requires only Θ\(1\)\. Additional corollaries give a geometric threshold under bounded reuse multiplicity, exact equal\-stake formulas for t\-out\-of\-n committees, a direct encrypted\-mempool instantiation, and a converse lower bound showing that without a bound on reuse multiplicity no uniform O\(1\) exposure can suffice\. The contribution is theorem\-driven and deliberately orthogonal to post\- decryption ordering or proposer\-builder\-separation equilibrium analyses

## Leakage Thresholds for Sandwich Equilibria Under Partial Information

**Authors:** Tingyi Lin; Ruoran Lai; Jiazhuo Li

**ID:** 148297 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yuiJS0iLhX>) | [PDF](<https://openreview.net/pdf?id=yuiJS0iLhX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148297>)

We study a partially observed extensive\-form trading game around a constant product market maker with one hidden order, public trade direction, and an interval valued signal for the hidden order size\. Agents compete in an execution\-rights auction to submit robustly admissible sandwich bundles, meaning bundles that remain valid for every hidden order size consistent with the public signal\. We give a closed\-form admissibility frontier, show that the maximal admissible front\-run is simultaneously optimal for pointwise, expected, and worst\-case profit, and derive an explicit worst\-case profit formula\. This yields an exact distribution\-free leakage threshold for profitable sandwiching in the presence of fixed execution cost\. We then show that, with at least two symmetric traders, every pure\-strategy perfect Bayesian equilibrium of the execution\-rights auction implements the optimal robust bundle and transfers all positive continuation rent to the auctioneer\. Perfect hiding of any positive lower bound eliminates universally profitable robust sandwiching in our model, although post\-trade arbitrage may remain\. The results isolate an exact threshold phenomenon for strategic trading under partial observability\.

## Impacts of Aggregation on Model Diversity and Consumer Utility

**Authors:** Kate Donahue; Manish Raghavan

**ID:** 149015 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tTHBShRcR3>) | [PDF](<https://openreview.net/pdf?id=tTHBShRcR3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149015>)

Consider a marketplace of AI tools, each with slightly different strengths and weaknesses\. By picking the right model for the task at hand, a user can do better than simply using the same model for everything\. Routers operate under a similar principle, where sophisticated model selection can increase overall performance\. However, aggregation is often noisy, reflecting imperfect user choices or routing decisions\. This leads to two main questions: first, what does a "healthy marketplace" of models look like for maximizing consumer utility? Secondly, how can we incentivize producers to create such models? We show that winrate, a standard benchmark in LLM evaluation, can incentivize model creators to homogenize for both types of model changes, reducing consumer welfare\. We propose a new mechanism, weighted winrate, which rewards models for answers that are higher quality, and show that it provably improves incentives for producers to specialize and increases consumer welfare\. We conclude by exploring the impact of our theoretical results in empirical benchmark datasets and discussing implications for benchmark design\.

## When and Why is Optimistic Multiplicative Weights Slow? The Geometry of Energy Dissipation

**Authors:** John Lazarsfeld; Anas Barakat; Georgios Piliouras; Antonios Varvitsiotis; Andre Wibisono

**ID:** 148698 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=viX8W7JqTf>) | [PDF](<https://openreview.net/pdf?id=viX8W7JqTf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148698>)

This paper studies the convergence of the Optimistic Multiplicative Weights Update algorithm \(OMWU\) in two\-player zero\-sum games\. Recent works have identified instances on which the last\-iterate of OMWU can converge arbitrarily slowly, but understanding when and why this slow convergence occurs has remained open\. In this work, we develop a new analysis framework that gives sharp, quantitative explanations for this behavior\. Our analysis is based on viewing the algorithm's dual iterates as an \*optimistic skew\-gradient descent\* with respect to an energy function\. We prove over the dual iterates that energy is dissipative, and by establishing tight bounds on the magnitude of dissipation, our analysis quantifies the geometric bottlenecks that arise when the corresponding primal iterates are close to the simplex boundary\. This further translates into a new linear last\-iterate convergence rate in KL divergence on games with a unique and interior Nash equilibrium\. Compared to prior work, this new rate contains a much sharper dependence on game\-specific constants, and we prove this dependence is optimal\. Moreover, these geometric insights further translate into new separations on \*uniform\* convergence rates for OMWU\. On the one hand, we prove \*constant lower bounds\* on the uniform \*best\-iterate\* convergence rate in KL divergence and Total Variation distance from Nash\. On the other hand, we establish for the $2\\times 2$ setting a new $\\widetilde O\(T^\{\-1/2\}\)$  best\-iterate rate in duality gap, improving substantially over prior work\. Together, this shows in general that uniform convergence rate guarantees do not transfer across different measures of distance to Nash\.

## Online Learning in Stabilized Linear Dynamical Games with Adversarial Disturbances

**Authors:** Anas Barakat; John Lazarsfeld; Georgios Piliouras; Antonios Varvitsiotis

**ID:** 150975 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ds0HbzOzSs>) | [PDF](<https://openreview.net/pdf?id=ds0HbzOzSs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150975>)

We study online learning in linear dynamical games where multiple strategic agents act on a shared state evolving according to a linear dynamical system subject to adversarial disturbances\. This setting lies beyond both single\-agent nonstochastic online control and classical linear\-quadratic games, which typically focus on quadratic objectives and noiseless or stochastic dynamics\. Each agent seeks to minimize its own sequence of convex losses under full\-state observability\. Following the stabilizing\-baseline paradigm in nonstochastic online control, we assume access to linear controllers that stabilize the noiseless system and focus on online adaptation by learning disturbance\-action corrections\. This extends adversarial online control to strategic multi\-agent shared\-state systems, where each agent's actions shape the state trajectory and hence the realized losses of all learners\. Under state\-only and aggregate\-input feedback models, we analyze agents running online gradient descent with memory to update their own disturbance\-action policies\. We prove per\-agent regret bounds that are sublinear and near\-optimal in the time horizon, and show how their dependence on the number of agents varies with the feedback available to each learner\. In the common\-interest case, where all agents have identical cost functions, we show that the induced online problem forms a time\-varying potential game and derive equilibrium\-tracking guarantees\. Together, these results provide a theoretical framework for adversarial online learning in stabilized linear dynamical games, connecting online control with learning in games\.

## Computational Dynamic Mechanism Design

**Authors:** Sadie Zhao; Amy Greenwald; Yanchen Jiang; Denizalp Goktas; Yiling Chen

**ID:** 153891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HyFDGQQC6q>) | [PDF](<https://openreview.net/pdf?id=HyFDGQQC6q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153891>)

Dynamic mechanism design provides a principled framework for coordinating self\-interested agents whose private information evolves over time, but history dependence and dynamic incentive constraints make general analytical solutions difficult\. Using a dynamic revelation principle, we formulate optimal dynamic mechanism design as a bilevel optimization problem over parameterized direct mechanisms: the principal optimizes the mechanism, while agent\-side unilateral deviation problems verify incentive compatibility\. We model each agent’s problem as a parameterized POMDP, and use stochastic natural policy gradient to solve these POMDPs with finite\-sample error bounds\. These policies serve as oracle outputs for the principal’s problem, yielding first\-order optimization procedures with convergence guarantees that approximate stationary solutions under bounded oracle error\. This formulation separates two representation choices: principal\-side history compression and agent\-side sufficient statistics\. Experiments in dynamic bandit and budget\-constrained auctions show that the framework can recover known benchmarks and learn approximately incentive\-compatible mechanisms beyond analytical settings\. Furthermore, they reveal how representations affect optimization\.

## Learning\-Augmented Mechanism Design for Facility Location under $L\_p$\-Norm Social Costs

**Authors:** Hau Chan; Jianan Lin; Chenhao Wang

**ID:** 149389 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qPSvrFGIoy>) | [PDF](<https://openreview.net/pdf?id=qPSvrFGIoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149389>)

We consider learning\-augmented mechanism design for facility location in the standard setting of locating a single facility on the line\. Leveraging the given \(imperfect\) prediction on the optimal facility location, our goal is to design strategyproof \(SP\) mechanisms that truthfully elicit agent location preferences and determine facility locations that approximately minimize the $L\_p$\-norm social cost for $p \\in \(1, \+\\infty\)$, achieving high \\emph\{consistency\} \(i\.e\., approximation ratios when the prediction is correct\) and \\emph\{robustness\} \(i\.e\., approximation ratios when the prediction is incorrect\)\. For deterministic SP mechanisms, we propose a family of generalized median mechanisms parameterized by a fraction \\\(t \\in \(0,1\)\\\) of phantom points placed at the predicted location \\\(\\pi\\\)\. We show that this mechanism achieves $\\big\(1\+\\big\(\\frac\{1\-t\}\{1\+t\}\\big\)^\{\\frac\{1\}\{p\-1\}\}\\big\)^\{\\frac\{p\-1\}\{p\}\}$\-consistency and $\\big\(1\+\\big\(\\frac\{1\+t\}\{1\-t\}\\big\)^\{\\frac\{1\}\{p\-1\}\}\\big\)^\{\\frac\{p\-1\}\{p\}\}$\-robustness and that no deterministic SP mechanism with the same consistency can obtain a better robustness\. For randomized SP mechanisms, we analyze the upper bounds for several special cases, including \(1\) two\-agent and \(2\) the squared cost settings, and provide a lower bound on consistency\-robustness tradeoffs\.

## The Power of Menus in Dynamic Pricing: Near Optimal Regret and Equivalence Results

**Authors:** Shiliang Zuo

**ID:** 153069 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ODZuxVC0Wo>) | [PDF](<https://openreview.net/pdf?id=ODZuxVC0Wo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153069>)

We study dynamic pricing where a seller repeatedly interacts with a strategic, non\-myopic buyer who has a fixed private valuation and discounts future utility\. Prior work focused exclusively on posted\-price mechanisms, where the seller gives a take\-it\-or\-leave\-it offer\. For our first result, we show that menu mechanisms consisting of allocation\-payment achieve $O\(T\_\\gamma \\log T\_\\gamma\)$ regret, where $T\_\\gamma$ is the buyer's effective discounted time horizon\. We also establish a $\\Omega\(T\_\\gamma\)$ lower bound, demonstrating the bound is tight up to $\\log$ factors\. Considering the geometric discounting buyer with a constant discount factor, our bound is $O\(1\)$, while prior bounds using posted\-price mechanisms incur an unavoidable $\\Omega\(\\log\\log T\)$ factor in regret\. Our second contribution is more conceptual in nature\. The problem of dynamic pricing sits at the intersection of two paradigms: learning with strategic agents in computer science / machine learning and revelation\-principle\-based mechanism design in economics, yet their relationship has remained unclear\. We establish a fundamental equivalence: indirect learning\-based mechanisms and direct revelation mechanisms achieve identical optimal regret\. The adaptive, data\-driven algorithms of online learning and explicit type elicitation are two languages towards solving the same problem\.

