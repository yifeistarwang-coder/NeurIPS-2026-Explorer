# Language Models &amp; NLP / Natural Language Processing

语言模型与自然语言处理 / 自然语言处理

48 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## SliceWorld: A Predictive and Controllable World\-State Model for CT Report Generation

**Authors:** Yuanhe Tian; Yan Song

**ID:** 150217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jsUEiC09mt>) | [PDF](<https://openreview.net/pdf?id=jsUEiC09mt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150217>)

CT report generation \(CTRG\) requires models to summarize three\-dimensional anatomical context and pathological findings from hundreds of axial slices\. Existing methods typically learn a direct image\-to\-text mapping, providing limited mechanisms for modeling how CT evidence evolves across slices or how reports respond to controlled changes in latent lesion\-related factors\. We propose SliceWorld, a CT\-specific world\-state framework that treats an axial CT scan as an ordered sequence along the z\-axis\. SliceWorld encodes prefix CT evidence into factor\-aware latent states containing anatomy, lesion, and uncertainty components, and projects these states into world tokens used for multi\-step future\-slice feature prediction, lesion\-factor intervention, and LLM\-based report generation\. The model is first pretrained on CT slice sequences with predictive, factor\-aware, and counterfactual objectives, and is then fine\-tuned on paired CT\-report data\. Experiments on M3D\-Cap and CT\-RATE show that SliceWorld improves natural language generation metrics and clinically oriented automatic evaluation\. Further analyses demonstrate multi\-horizon future\-slice prediction, measurable factor alignment, reduced\-slice robustness, and selective lesion\-sensitive report modulation\.

## Retrieval\-Augmented Diffusion Modeling for Stochastic Discount Factor Portfolios

**Authors:** Kelvin J\.L\. Koa; XinYang Li; Ke\-Wei Huang

**ID:** 154413 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dk8yYYJtw0>) | [PDF](<https://openreview.net/pdf?id=Dk8yYYJtw0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154413>)

In this work, we study portfolio optimization under the stochastic discount factor \(SDF\) framework by learning market state representations that capture the underlying risk structures of financial data\. This is challenging due to several factors: financial markets exhibit non\-stationary dynamics with shifting regimes, multimodal inputs such as price and news data often contain stochastic noise, and existing diffusion\-based approaches, while effective for modeling stochastic dynamics, rely on assumptions such as isotropic Gaussian noise that fail to capture the state\-dependent nature of financial uncertainty\. To address these challenges, we introduce RADAR, a retrieval\-augmented diffusion framework that learns market representations by conditioning on similar historical regimes\. RADAR leverages retrieval to construct context\-dependent noise distributions, applies conditional diffusion to denoise multimodal representations, and initializes the diffusion process using empirical statistics to reflect state\-dependent uncertainty\. Experiments show that RADAR achieves state\-of\-the\-art performance on key risk\-adjusted metrics while producing economically meaningful signals on asset returns and correlations\.

## Tell Me What To Learn: Generalizing Neural Memory to be Controllable in Natural Language

**Authors:** Max Bennett; Thomas Zollo; Richard Zemel

**ID:** 155335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6NMx0IvOKP>) | [PDF](<https://openreview.net/pdf?id=6NMx0IvOKP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155335>)

Modern machine learning models are deployed in diverse, non\-stationary environments where they must continually adapt to new tasks and evolving knowledge\. Continual fine\-tuning and in\-context learning are costly and brittle, whereas neural memory methods promise lightweight updates with minimal forgetting\. However, existing neural memory models typically assume a single fixed objective and homogeneous information streams, leaving users with no control over what the model remembers or ignores over time\. To address this challenge, we propose a generalized neural memory system that performs flexible updates based on learning instructions specified in natural language\. Our approach enables adaptive agents to learn selectively from heterogeneous information sources, supporting settings—such as healthcare and customer service—where fixed\-objective memory updates are insufficient\.

## BayesRAG: Probabilistic Mutual Evidence Corroboration for Multimodal Retrieval\-Augmented Generation

**Authors:** Xuan Li; Yining Wang; Haocai Luo; Shengping Liu; Jiaen Liang; Ying Fu; Wei Huang; Jun Yu; Junnan Zhu

**ID:** 154974 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Vk5e1o3lU>) | [PDF](<https://openreview.net/pdf?id=9Vk5e1o3lU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154974>)

Retrieval\-Augmented Generation \(RAG\) has become a pivotal paradigm for Large Language Models \(LLMs\), yet current approaches struggle with visually rich documents by treating text and images as isolated retrieval targets\. Existing methods relying solely on cosine similarity often fail to capture the semantic reinforcement provided by cross\-modal alignment and layout\-induced coherence\. To address these limitations, we propose BayesRAG , a novel multimodal retrieval framework grounded in Bayesian inference and Dempster\-Shafer evidence theory\. Unlike traditional approaches that rank candidates strictly by similarity, BayesRAG models the intrinsic consistency of retrieved candidates across modalities as probabilistic evidence to refine retrieval confidence\. Specifically, our method computes the posterior association probability for combinations of multimodal retrieval results, prioritizing text\-image pairs that mutually corroborate each other in terms of both semantics and layout\. Extensive experiments demonstrate that BayesRAG significantly outperforms state\-of\-the\-art \(SOTA\) methods on challenging multimodal benchmarks\. This study establishes a new paradigm for multimodal retrieval fusion that effectively resolves the isolation of heterogeneous modalities through an evidence fusion mechanism and enhances the robustness of retrieval outcomes\. Our code is available at https://anonymous\.4open\.science/r/BayesRAG\-4C6B/\.

## SLIDERS: Systematic Reviews via Automated Evidence Synthesis and Reconciliation

**Authors:** Harshit Joshi; Priyank Shethia; Jadelynn Dao; Monica Lam

**ID:** 153403 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LbmCSLInX7>) | [PDF](<https://openreview.net/pdf?id=LbmCSLInX7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153403>)

Systematic reviews \-\- which requires comprehensive evidence collection and synthesis from large document corpora in response to targeted research questions \-\- are foundational in finance, social sciences, and other technical fields\. Manual construction of evidence tables is labor\-intensive, and recent LLM\-based assistants relying on embedding or keyword based search often fail to meet the coverage standards of systematic reviews\. We introduce SLIDERS, a novel LLM\-based methodology for systematic reviews, by automatically assembling evidence tables tailored to research questions\. In addition to extracting structured data from documents, SLIDERS can extract full\-text excerpts that serve as direct evidence or as provenance for structured data\. Core to SLIDERS is an automated evidence reconciliation agent that writes code to analyze and reconcile extracted evidence, bringing together information fragmented across documents, resolving inconsistencies across excerpts, and synthesizing overlapping findings into a coherent evidence table\. In addition, SLIDERS allows users to ask follow\-up questions in natural language to further explore the assembled evidence\. We evaluate SLIDERS on three systematic\-review\-style tasks over large document collections\. SLIDERS outperforms the best\-performing baseline across benchmarks, remains near 90\\% accuracy across 6M\-11M\-token corpora\. On two new follow\-up analysis benchmarks \\system\{\} can answer 77\.9% and 58\.3% followup questions accurately\.

## Information Parity for Code: The Scope of Transfer in Multilingual Code Models

**Authors:** Alexander Tsvetkov; Alon Kipnis

**ID:** 139705 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Vw26t3fU5>) | [PDF](<https://openreview.net/pdf?id=9Vw26t3fU5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139705>)

LLMs exhibit uneven performance across programming languages, yet benchmark gaps often reflect narrow task regimes and evaluation\-specific confounds\. This makes it hard to tell whether poor performance reflects a broader weakness with a given language, a broader difficulty on a given task, or a limitation specific to that task\-language combination\. We adapt Information Parity, a measure of relative cross\-language representational efficiency developed for natural language, to code\. We define Code Information Parity \(Code IP\) on a controlled parallel corpus of 22 algorithms across 20 languages, audited to preserve core semantics while minimizing boilerplate and excluding library shortcuts\. The results are regime\-specific: Code IP correlates strongly with multilingual benchmark performance on short\-horizon generation \($\\rho$ from $\-0\.55$ to $\-0\.81$\), remains negative though moderated on execution prediction \($\\rho=\-0\.429$\), and disappears on whole\-program synthesis \($\\rho=\+0\.105$\)\. Rather than a universal metric of multilingual coding ability, Code IP isolates a reliable cross\-language signal on short\-horizon generation and delineates where that signal no longer separates cleanly from broader task and evaluation effects\.

## ManipulationRAG: Retrieval\-Augmented Fine\-Grained Manipulation of Object Functional Parts

**Authors:** Xiaoyun Chang; ZiJun Zhang; Jie Chen; Xiaopeng Wen; Xiangbo Lin; Xiaohong Ma; yi sun

**ID:** 151554 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZllSD7e69Q>) | [PDF](<https://openreview.net/pdf?id=ZllSD7e69Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151554>)

Modeling fine\-grained human manipulation of object functional parts is essential for achieving human\-like dexterous manipulation in virtual reality and robotics\. Despite recent advances, data\-driven generation methods remain largely constrained by patterns learned from limited training data, rendering them prone to hallucinating task\-inconsistent manipulations when encountering samples beyond the training distribution\. To address this challenge, we propose ManipulationRAG, a framework that augments an internal generative model with externally retrieved, task\-relevant manipulation knowledge\. Specifically, we design a hand\-centric manipulation taxonomy and construct a structured knowledge base that organizes task descriptions, objects, manipulation types, and corresponding hand pose sequences, supported by a retrieval mechanism for accurate knowledge retrieval\. The retrieved knowledge serves as an external manipulation\-specific prior, guiding the diffusion model toward task\-consistent and physically plausible manipulation synthesis\. Extensive experiments demonstrate that our method outperforms existing methods and generalizes robustly to object manipulation beyond the original diffusion model's training domain\.

## Gradient Boosted Trees for Retrieval\-Augmented Generation

**Authors:** Huaiyu Qin; Chunyu Wei; Yueguo Chen; Yunhai Wang

**ID:** 153272 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MTrGnuhOll>) | [PDF](<https://openreview.net/pdf?id=MTrGnuhOll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153272>)

Retrieval\-augmented generation \(RAG\) divides into two camps failing in complementary ways on broad, long\-tailed questions: iterative agentic RAG re\-queries a biased distribution and drifts on prominent aspects, while structural RAG commits to a hierarchy fixed upfront and cannot admit aspects it initially missed\. We propose GBT\-RAG, which unifies the two by transposing gradient boosting into the text domain: each round is a query decomposition tree fitted to its predecessors' residual gap\. This raises two challenges mirroring the pillars of boosting\-\-\-natural\-language critiques are not quantifiable, and successive rounds drift rather than fit the residual\. We address the first with a text gradient, a structured residual in the retriever's embedding space whose support localizes missingness to specific leaves; we address the second by growing each tree only over under\-covered leaves and admitting each rewrite through a monotone\-improvement gate\. Across standard benchmarks, GBT\-RAG consistently outperforms the strongest iterative and structural baselines, with the largest gains on the long\-tailed regime that motivated the design\.

## OpticalRAG: Pixel\-Space Compression for Token\-Efficient Retrieval\-Augmented Generation

**Authors:** Senhao Liu; Yuheng Zhang; Chunyu Wei; Yueguo Chen; Xinran Zhang

**ID:** 152209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UloVevL5nW>) | [PDF](<https://openreview.net/pdf?id=UloVevL5nW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152209>)

Retrieval\-augmented generation \(RAG\) is bottlenecked by the token budget of large language models: feeding long documents into the context window is expensive, while aggressive textual compression discards fine\-grained information that is irreversibly lost in a one\-dimensional token sequence\. We argue that this bottleneck is not fundamental to information density but to the choice of compression \\emph\{modality\}\. Modern visual encoders can pack the contents of a rendered text page into roughly a hundred visual tokens with little semantic loss, opening a new compression\-fidelity tradeoff that purely textual methods cannot reach\. We present \\textbf\{OpticalRAG\}, a framework that renders documents as page images, encodes them with a frozen vision encoder, and distills the retrieved visual tokens into as few as $16$ injected tokens before passing them to the LLM\. Two ingredients make this work without expensive cross\-modal training: \(i\) \\emph\{Encoder\-Bridged Retrieval\}, which reuses the shared representation space of a pretrained vision\-language model to retrieve visual chunks from a text query, with no contrastive training; and \(ii\) \\emph\{Query\-Driven Distillation\}, a lightweight cross\-attention compressor that condenses thousands of visual tokens into a small set of query\-conditioned prefix tokens\. On LongBench\-v2, BAMBOO, and LooGLE\-v2, OpticalRAG achieves the best compression\-aware accuracy \(CAP\) on all three benchmarks while injecting only $16$ tokens, and improves the closed\-book Qwen2\.5\-7B\-Instruct backbone by $5\.17$ points on LongBench\-v2\.

## SAGE: Semantic Ambiguity Guided Capacity Expansion for Retrieval\-Augmented Generation

**Authors:** Xunlei Chen; Jinyu Guo; Yi Gong; Qirui Ye; Zhaokun Wang; Wenyi Li; Wenhong Tian

**ID:** 150303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j95jiSEi4O>) | [PDF](<https://openreview.net/pdf?id=j95jiSEi4O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150303>)

Retrieval\-Augmented Generation \(RAG\) mitigates Large Language Model \(LLM\) hallucinations by grounding generation in external knowledge\. Although structure\-augmented RAG methods improve multi\-hop reasoning, they incur high indexing costs and degrade on simple queries\. We argue that this robustness gap is driven by capacity bottlenecks in fixed\-dimensional inner\-product scoring\. As corpora grow, semantically close passages create local regions where a base scorer cannot maintain sufficient separability\.  Reorganizing documents into trees or graphs can expose or partially mitigate this issue, but it does not by itself provide a stronger local scoring function\. We propose Semantic Ambiguity Guided Capacity Expansion \(SAGE\), a lightweight RAG framework that detects such regions using document\-side Local Separability Deficit and expands capacity only where needed\. SAGE builds a two\-layer semantic index, derives atomic query views from corpus passages, and calibrates a parameter\-efficient hypernetwork to generate the local Ambiguity\-Conditioned Scorers for selected nodes\.  Extensive experiments show that SAGE improves retrieval and QA performance over dense retrievers and structure\-augmented baselines, achieving a better balance between single\-hop, multi\-hop retrieval accuracy, and robust scalability\. Anonymous Code: https://anonymous\.4open\.science/r/SAGE\-1676\.

## Deceptive Grounding: Entity Attribution Failure in Clinical Retrieval\-Augmented Generation

**Authors:** Cedric Caruzzo; Donggeun Yoo; Tae Soo Kim

**ID:** 152927 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PL3EWYRq36>) | [PDF](<https://openreview.net/pdf?id=PL3EWYRq36>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152927>)

Retrieval\-augmented generation evaluation checks whether model claims are factually grounded in retrieved documents\. It does not check whether retrieved evidence is attributed to the correct entity\.  A clinical RAG response can pass every automated check \(zero hallucinations, near\-perfect faithfulness, real citations\) while presenting drug $Y$'s clinical evidence as evidence about queried drug $X$\. We term this \*\*deceptive grounding\*\* \(DG\): a failure invisible to faithfulness, hallucination, and citation checks because every claim is sourced from a real document, about the wrong entity\.  Using a controlled factorial benchmark across 13 models, we find DG rates spanning 8\-\-87\\% at peak adversarial conditions\. Medical and biomedical fine\-tuned models reach up to 86\.7\\%; domain specialization amplifies the failure rather than mitigating it\.  A controlled ablation identifies the mechanism: removing entity\-specific clinical evidence from retrieved documents eliminates entity\-attribution failure entirely, shifting all failures to confabulation\. The two failure modes respond to the same trigger, taking different paths\.  Production measurement across 740 drug\-\-disease pairs finds 7\.8\\% overall DG in a deployed RAG system, rising to 13\.6\\% for recently approved drugs\. Entity\-attribution verification \(checking that cited evidence applies to the queried entity\) detects DG at 92\.3\\% precision and 95\.8\\% DG recall; no existing framework implements it\.

## CWAGraph: Retrieving What Was Never Explicitly Identified in Graph\-Based RAG

**Authors:** Zhitao Yin; Ruiheng Zhu; Ganlin Xu; Hongru Hou; Jiaqing Liang; Deqing Yang

**ID:** 149212 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s6xGR3aduA>) | [PDF](<https://openreview.net/pdf?id=s6xGR3aduA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149212>)

Unlike chunk\-based Retrieval\-Augmented Generation \(RAG\) methods which retrieve information only from text passages, graph\-based RAG methods improve their performance through entity\-relation graphs\.  However, existing graph\-based RAG methods typically represent graph facts under the Open World Assumption \(OWA\), where an absent edge \(relation\) means unknown rather than false\.  This principle is problematic for many closed corpora including technical manuals and regulations, where rules are generally stated through scope\-bounded statements \(such as \`\`all X, except Y\`\` or \`\`only Y\`\`\) named as \*\*local completeness statements\*\*\(LCSs\) in this paper\. LCS apply rules to every unmentioned in\-scope entity which cannot be explicitly and completely represented by the OWA graph\.  To address this problem, we propose \*\*CWAGraph\*\*, which is a graph\-based RAG framework augmented with a Closed World Assumption \(CWA\) layer representing local scope and boundaries for LCSs\. The CWA layer  identifies which entities are governed by each statement and makes the corresponding closed\-world evidence retrievable from those entities, thus enhancing the performance of question answering \(QA\) involving LCS \(called as LCS resolution in this paper\)\. To better evaluate RAG systems' performance on LCS resolution, we further introduce a new QA benchmark \*\*SetQA\*\* consisting of 493 QA instances involving LCSs across two source domains and three difficulty levels\. Our experiments on SetQA reveal that CWAGraph consistently outperforms chunk\-based and graph\-based RAG baselines\.

## ToPA: Block\-wise Toeplitz Adaptation for Expressive and Efficient Fine\-Tuning

**Authors:** Sicong Li; Qianqian Xu; Zhiyong Yang; Zitai Wang; Longtao Huang; XIAOCHUN CAO; Qingming Huang

**ID:** 152095 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VYQLuuY0tY>) | [PDF](<https://openreview.net/pdf?id=VYQLuuY0tY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152095>)

Parameter\-Efficient Fine\-Tuning \(PEFT\) has emerged as a prevalent strategy for adapting large pre\-trained models\. Among PEFT techniques, reparameterization\-based methods, particularly those that employ low\-rank or sparsity structures, have attracted significant attention\. However, these approaches often underperform full fine\-tuning\. Specifically, low\-rank methods constrain the update rank, which is misaligned with the inherently high\-rank nature of full fine\-tuning\. In contrast, sparsity\-based techniques limit the flexibility of the parameter space and compromise connectivity across weights\. To overcome these limitations, we explore the use of Toeplitz matrices, whose entries are constant along each diagonal, therefore providing a compact parameterization without imposing explicit rank or sparsity constraints\. A straightforward approach is to update weights via a product of Toeplitz matrices\. However, similar to RNNs, long multiplicative chains often lead to gradient instability\. To address this issue, we propose ToPA , a more refined version of this idea that replaces standard Toeplitz matrices with block\-wise Toeplitz, greatly increasing each factor’s capacity and shortening the chain, thereby stabilizing training and improving expressiveness\. We theoretically show that products of block\-wise Toeplitz matrices can approximate arbitrary matrices under shorter chain length, justifying the structural design of ToPA\. Furthermore, we demonstrate that ToPA offers greater expressivity than existing low\-rank and sparse parameterizations\. Empirical evaluations across 21 NLP and CV datasets, spanning 5 model architectures, consistently validate the effectiveness of ToPA\.

## MLAIRE: Multilingual Language\-Aware Information Retrieval Evaluation Protocol

**Authors:** Youngjoon Jang; Seongtae Hong; Hyeonseok Moon; Heuiseok Lim

**ID:** 139143 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQB0yUdDpp>) | [PDF](<https://openreview.net/pdf?id=iQB0yUdDpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139143>)

Multilingual Information Retrieval reflects real\-world search settings where users issue queries over mixed\-language corpora\. Existing evaluations mainly reward language\-agnostic semantic relevance, treating relevant passages equally regardless of language\. Yet retrieval utility also depends on the language of the retrieved passages: users expect results they can read and verify in the query language, and query\-\-passage language mismatch can complicate downstream grounding in Retrieval\-Augmented Generation systems\. To evaluate this aspect, we introduce \*\*MLAIRE\*\*, a \*\*M\*\*ultilingual \*\*L\*\*anguage\-\*\*A\*\*ware \*\*I\*\*nformation \*\*R\*\*etrieval \*\*E\*\*valuation protocol that disentangles cross\-lingual semantic retrieval from query\-language preference\. MLAIRE constructs controlled pools with parallel passages across languages, enabling measurement of whether retrievers find relevant passages and whether they prioritize query\-language passages when equivalent translations are available\. We further propose language\-aware metrics, including Language Preference Rate \(LPR\) and Lang\-nDCG, together with a 4\-way decomposition separating semantic and language\-preference failures\. Evaluating 31 dense, sparse, and late\-interaction retrievers, we show that standard metrics obscure distinct behaviors: semantically strong retrievers may return correct content in a non\-query language, while language\-preserving retrievers may retrieve less relevant passages\.

## Natural Language Actor\-Critic: Scalable Off\-Policy Learning in Language Space

**Authors:** Joey Hong; Kang Liu; Zhan Ling; Jiecao Chen; Sergey Levine

**ID:** 150763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fZBF1ilOob>) | [PDF](<https://openreview.net/pdf?id=fZBF1ilOob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150763>)

Large language model \(LLM\) agents\-\-\-LLMs that dynamically interact with an environment over long horizons\-\-\-have become an increasingly important area of research, enabling automation in complex tasks involving tool\-use, web browsing, and dialogue with people\.  In these settings, traditional policy gradient methods may suffer from unstable learning and poor sample\-complexity due to poor credit assignment\. Meanwhile, actor\-critic methods address long horizons by learning a critic that provides more granular feedback and enables off\-policy \(and potentially offline\) learning, but are heavily dependent on the fidelity of the critic\. In this paper, we propose \\emph\{Natural Language Actor\-Critic\} \(NLAC\), a novel actor\-critic algorithm that trains LLM policies using a generative LLM critic that produces values in natural language space\. While natural language values have been leveraged in the past to provide a more flexible and actionable training signal, our work is the first to perform general and scalable value learning without relying on in\-context aggregation of information from on\-policy rollouts\. This means our approach can be trained off\-policy without policy gradients, offering a more sample\-efficient alternative to existing methods\. We present results on a mixture of reasoning, web browsing, and tool\-use with dialogue tasks, demonstrating that NLAC shows promise in outperforming existing training approaches and offers a more scalable and stable training paradigm for LLM agents\.

## Retriever\-Free Retrieval\-Augmented Reasoning via Corpus\-Traversing MCTS

**Authors:** Chaeeun Kim; Seungone Kim

**ID:** 148700 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vi37A4okc6>) | [PDF](<https://openreview.net/pdf?id=vi37A4okc6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148700>)

Large Reasoning Models \(LRMs\) have demonstrated remarkable capabilities in multi\-step reasoning and calling search engines at appropriate steps\. However, existing retrieval\-augmented reasoning approaches rely on separate retrieval models, limiting the LRM's role in retrieval to deciding when to retrieve and how to formulate queries, even with its inherent ability to handle vast knowledge spaces\. This structural separation induces a representation bottleneck, as the retriever’s latent space often lacks the expressive granularity required to satisfy the generator’s sophisticated information needs\. To address this, we shift our perspective on retrieval from sequence\-to\-sequence matching for all corpora to locating the answer\-containing paths within the corpus, and propose a novel framework called FREESON \(Retriever\-FREE Retrieval\-Augmented ReaSONing\)\. This framework enables LRMs to directly access external knowledge by acting as both a generator and a retriever\. To achieve this, we introduce a variant of the MCTS algorithm specialized for the retrieval task, which we call CT\-MCT \(Corpus\-Traversing Monte Carlo Tree Search\)\. Through this algorithm, the LRM selectively references specific segments identified during traversal, instead of fetching a fixed top\-k set\. Experiments on five open\-domain QA benchmarks covering both single\-hop and multi\-hop questions demonstrate that FREESON achieves an average improvement of 14\.4% in EM and F1 over four multi\-step reasoning models with a separate retriever, and it also performs comparably to the strongest baseline, surpassing it by 3% on PopQA and 2WikiMultihopQA, and by 12% on the fact\-checking benchmark FEVER\.

## PEARL: Solver\-in\-the\-Loop Interactive Optimization Modeling from Natural Language

**Authors:** Hongliang Lu; Zhong Li; Yuxuan Chen; Lan Yuan; Fan Zhang; Zaiwen Wen

**ID:** 152032 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W3LmdJrHns>) | [PDF](<https://openreview.net/pdf?id=W3LmdJrHns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152032>)

Optimization modeling is the process of translating real\-world decision problems, often described in natural language, into formal mathematical formulations and executable solver code\. While recent advances in large language models have shown promise in automating this process, most existing approaches remain one\-shot: a model produces a formulation once, without executing it, conditioning on solver feedback, or iteratively revising errors\. This stands in sharp contrast to real\-world optimization modeling, which is inherently interactive and proceeds through repeated solve\-\-debug\-\-revise cycles\. We introduce PEARL, a system for interactive optimization modeling that uses Python execution and mathematical programming solvers inside this loop\. Rather than relying on a fixed repair workflow, PEARL learns when to test partial models, how to revise from solver diagnostics, and when to stop\. It operates in a multi\-turn tool\-integrated setting where intermediate execution results, feasibility signals, and solution checks are used to improve both formulations and solver code before finalization\.  Across diverse optimization benchmarks, PEARL substantially improves verified solve rates over strong one\-shot and tool\-augmented baselines; notably, our PEARL\-Qwen3\-\\textbf\{4B\} model outperforms the much larger DeepSeek\-V3\.2\-\\textbf\{685B\} in both macro\- and micro\-averaged accuracy on optimization modeling tasks\.

## ReflectMT: Internalizing Reflection for Efficient and High\-Quality Machine Translation

**Authors:** Kunquan Li; Yingxue Zhang; Zhibin Lan; Fandong Meng; Jinsong Su

**ID:** 155820 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2dn1HhrPeN>) | [PDF](<https://openreview.net/pdf?id=2dn1HhrPeN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155820>)

Recent years have witnessed growing interest in applying Large Reasoning Models \(LRMs\) to Machine Translation \(MT\)\. While most approaches adopt a "pre\-thinking" paradigm and benefit from explicit reasoning trajectories, they suffer from substantial inference cost and latency\. To address these limitations, we propose ReflectMT, a two\-stage reflection internalization framework for machine translation that employs a "post\-thinking" paradigm\. Our approach develops the model's "translate–reflect–refine" capability through reinforcement learning\. In the first stage, we cultivate the model's capacity for high\-quality reflection and refinement, thereby enhancing its semantic comprehension and task\-specific knowledge\. In the second stage, we train the model to internalize the knowledge acquired during reflection\. As a result, during inference, ReflectMT operates in a direct translation mode, producing high\-quality translations on the first attempt without any explicit reasoning steps\. Experimental results on benchmarks such as WMT24 demonstrate that our model’s first\-pass translations during inference outperform multi\-step reasoning LRMs \(e\.g\., DeepSeek\-R1\) in both automatic metrics and GPT\-based evaluation, achieving a 2\.16\-point improvement in GPT\-based translation quality evaluation while reducing token consumption by 94\.33%\.

## Auto\-Dreamer: Learning Offline Memory Consolidation for Language Agents

**Authors:** Chongrui Ye; Yuxiang Liu; Yu Wang; Haofei Yu; Yining Zhao; Ge Liu; Julian McAuley; Jiaxuan You

**ID:** 152534 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SR1n2zkaBO>) | [PDF](<https://openreview.net/pdf?id=SR1n2zkaBO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152534>)

Language agents increasingly operate over streams of related tasks, yet existing memory systems struggle to convert accumulated experience into reusable knowledge\. Retrieval\-augmented and structured memory methods record per\-session observations effectively, but often couple acquisition and consolidation into a single online process, leaving the agent without a global view across sessions to discover recurring patterns, abstract shared procedures, or prune redundant entries\. Inspired by complementary learning systems theory, we propose Auto\-Dreamer, a learned offline consolidator for language\-agent memory\. Auto\-Dreamer decouples fast per\-session memory acquisition from slow cross\-session consolidation\. Given a region of a typed memory bank, the consolidator performs bounded tool\-use to search memory, inspect candidate entries, and trace them back to raw source trajectories, synthesizing provenance\-grounded replacement memories that supersede the original region\. We train Auto\-Dreamer via GRPO, using end\-to\-end agent performance as the reward signal to learn how to consolidate memories acquired through fast online experience\.  Trained on ScienceWorld trajectories alone, Auto\-Dreamer transfers without retraining to held\-out ALFWorld and WebArena, improves task success over fixed, RL\-trained, and prompted memory baselines in both continual\-memory deployment and fixed\-bank consolidation, and does so with an active memory bank an order of magnitude smaller than competitive baselines\.

## Beyond RAG for Agent Memory: Retrieval by Decoupling and Aggregation

**Authors:** Zhanghao Hu; Qinglin Zhu; Runcong Zhao; Di Liang; Hanqi Yan; Yulan He; Lin Gui

**ID:** 150607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gtGRNOmx4m>) | [PDF](<https://openreview.net/pdf?id=gtGRNOmx4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150607>)

Standard Retrieval Augmented Generation \(RAG\) is poorly matched to agent memory\. Unlike large heterogeneous corpora, agent memory forms a bounded and coherent interaction stream in which many spans are highly correlated or near duplicates\. As a result, flat top\-$k$ similarity retrieval often returns redundant context, while summary\-centric hierarchies can blur the subtle details that distinguish one candidate from another\. We argue that agent memory should follow the principle of decoupling before aggregation: the system should first isolate reusable facts, updates, and distinguishing details from similar histories, and only then organise them for efficient retrieval\. Based on this principle, we propose xMemory, which constructs a revisable hierarchical memory structure from original messages to segments, memory components, and groups\. xMemory segments interaction history into local events, decouples each segment into memory components, aggregates related components into high\-level groups using a sparsity\-\-semantic faithfulness objective, and maintains this structure incrementally as memory evolves\. At inference time, xMemory retrieves top\-down, first selecting a compact backbone of complementary groups and components, and then expanding to segments and raw messages only when additional evidence reduces the reader's uncertainty\. Experiments on LoCoMo and PerLTQA across diverse open source and closed source LLMs show consistent gains in answer quality and inference token efficiency, supported by analyses of redundancy, evidence density, and coverage\.

## MoRe\-DVC: Motion Retrieval\-Augmented Generation for Detailed Video Captioning

**Authors:** Vipul Baghel; Ravi Hegde

**ID:** 152051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VqnfjZtmYy>) | [PDF](<https://openreview.net/pdf?id=VqnfjZtmYy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152051>)

Despite significant advances in large vision\-language models \(Video\-LLMs\) for general video understanding, accurately narrating fine\-grained, highly dynamic human activities remains a formidable challenge\. Existing approaches typically rely on global sequence embeddings or isolated part\-level retrieval, lacking the precise relational kinematic grounding required to prevent physical hallucinations\. To address this, we introduce Motion Retrieval\-Augmented Generation for Detailed Video Captioning \(MoRe\-DVC\)\. Our algorithmic novelty centers on two core contributions: an event\-boundary\-aware graph\-conditioned retrieval mechanism that captures hierarchical and chronological motion dependencies, and a symbolic physical faithfulness reward that explicitly constrains generation to grounded physical reality\. Specifically, MoRe\-DVC integrates a Pose\-Orientation Encoding Module \(POEM\) to extract symbolic descriptors, an Event Calibration and Refinement Module \(ECRM\) to dynamically adjust coarse action boundaries into an event graph, and a Graph\-Conditioned Hybrid Retriever \(GCHR\) to select relationally relevant evidence\. By coupling graph\-level retrieval with a strict symbolic reward, our framework reduces motion\-language inconsistency\. Extensive experiments demonstrate that MoRe\-DVC achieves robust outperformance across three motion\-centric datasets \(BoFiT, HumanML3D, and FineMotion\), establishing a new standard for physically faithful action narration\.

## Improving Consistency in Retrieval Augmented Systems With Group Similarity Rewards

**Authors:** Faisal Hamman; Chenyang Zhu; Anoop Kumar; Xujun Peng; Sanghamitra Dutta; Daben Liu; Alfy Samuel

**ID:** 150565 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hCpmScyCoy>) | [PDF](<https://openreview.net/pdf?id=hCpmScyCoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150565>)

Retrieval\-Augmented Generation \(RAG\) systems are increasingly deployed in high\-stakes domains where users expect outputs to be consistent across semantically equivalent queries\. However, existing systems often exhibit significant inconsistencies due to variability in both the retriever and generator, undermining trust and reliability\. In this work, we focus on information consistency —the requirement that generated outputs convey the same core content across semantically equivalent inputs\. We introduce a principled evaluation framework that decomposes RAG consistency into retriever\-level, generator\-level, and end\-to\-end components, enabling systematic identification of inconsistency sources\. To improve consistency, we propose P araphrased S et Group Relative Policy Optimization \(PS\-GRPO\), an RL approach that leverages multiple rollouts across paraphrased set to assign group similarity rewards \. We leverage PS\-GRPO to achieve Information Con sistent RAG \(Con\-RAG\), training the generator to produce consistent outputs across paraphrased queries and remain robust to retrieval\-induced variability\. Because exact reward computation over paraphrase sets is computationally expensive, we also introduce a scalable approximation method that retains effectiveness while enabling efficient, large\-scale training\. Empirical evaluations across short\-form, multi\-hop, and long\-form QA benchmarks demonstrate that Con\-RAG significantly improves both consistency and accuracy over strong baselines, even in the absence of explicit ground\-truth supervision\. Our work provides practical solutions for evaluating and building reliable RAG systems for safety\-critical deployments\.

## Failure\-Band Authorization for Filtered Retrieval

**Authors:** Rui Li; Shuang Cao

**ID:** 153631 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JxfZ6eyRMh>) | [PDF](<https://openreview.net/pdf?id=JxfZ6eyRMh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153631>)

Filtered vector search in private and on\-prem retrieval\-augmented generation \(RAG\) systems must control tail risk under fixed latency, RAM, and SSD budgets, not merely pick a fast backend\. Our measurements isolate a recurring ambiguity regime concentrated in the 5\-15% failure band, where small shifts in vector\-metadata alignment flip which familiar P1\-P4 action is safe and create 3\-6 P95 spread\. We study that regime as authorization over fixed actions rather than as generic planning\. The paper contributes a measured failure\-band stress test, an auditable authorize/veto rule over fixed P1\-P4 actions, and PACER as one concrete controller that combines recall\-floor adjustment, calibrated tail intervals, and regime\-local fallback\. The measured failure band exposes a different runtime decision boundary: when the provisional winner is separated enough to trust and when uncertainty should refuse it\. On Medium\+EntDoc, evaluated on a dual\-AMD EPYC 7543 server with 128GB RAM at matched recall in the 5\-15% failure band, PACER reduces P95 by 46%\\ and P99 by 45%\\ relative to the strongest baseline while maintaining 0\.94\-0\.98\\ Recall@20\. The gain concentrates where plan rankings are unstable and weakens when the authorization logic is stripped back, while feasibility, transfer, drift, and hierarchy\-aligned slices remain supporting diagnostics\. For recurring fixed\-budget filtered retrieval, these results show that an auditable authorize/veto layer over fixed actions can materially stabilize tail latency in the measured failure band\.

## MiniPIC: Flexible Position\-Independent Caching in &lt;100LOC

**Authors:** Nathan Ordonez; Thomas Parnell

**ID:** 151329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLPv1lSYrI>) | [PDF](<https://openreview.net/pdf?id=bLPv1lSYrI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151329>)

Retrieval\-augmented and agentic workloads repeatedly prefill recurring predictable structured inputs \(which we call 'spans'\) such as documents and code files\. Yet, prefix caching in engines such as vLLM cannot reuse their KV entries unless they share identical prefixes with another request, while Position\-Independent Caching \(PIC\) implementations within production\-grade inference servers typically either require substantial server code changes or keep KV state outside the server, incurring host\-to\-device transfer overhead\. We present Minimalistic PIC \(MiniPIC\): a minimal, flexible and fast vLLM design built from two ingredients: positional\-encoding\-free KV cache and user\-controlled cache\-reuse primitives\. MiniPIC stores unrotated K vectors in the KV cache, applies RoPE to K tiles inside attention using per\-request logical positions, and exposes three user\-facing and token\-level primitives: block\-aligned padding, \\ssep\{\}, and \\pdep\{\}, that modify hashing behavior and effective block\-level causal attention structure\. With fewer than 100 lines of core\-engine changes plus a custom attention backend, these primitives are sufficient to realize multiple PIC methods, including Block\-Attention, EPIC, and Prompt Cache, within the same running vLLM instance, while natively integrating with KV cache CPU offload implementations\. On 2WikiMultihopQA, MiniPIC with interleaved scheduling improves prefill throughput by 49\\% over baseline vLLM, reduces cached\-span time\-to\-first\-token by up to two orders of magnitude, preserves the linear prefill scaling of uncached spans, and incurs only 5\.7\\% worst\-case overhead\.

## ShiftRAG: Bypassing the Textual Bottleneck via Decoupled Learning and Continuous Soft Tokens

**Authors:** Youmin Ko; Jihong Jeong; Hyunjoon Kim

**ID:** 150524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTSuoFjBpl>) | [PDF](<https://openreview.net/pdf?id=hTSuoFjBpl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150524>)

Despite advances in retrieval\-augmented generation \(RAG\), suppressing hallucinations during complex reasoning remains a persistent challenge\. We identify that existing RAG pipelines suffer from a textual bottleneck: by passing only raw text to the generator, they discard discriminative signals of the retriever\. Furthermore, recent attempts to unify retrieval and generation within a single LLM induce severe objective conflict and exacerbate the rank collapse of decoder\-only architectures, degrading performance on both tasks\. To address these limitations, we introduce ShiftRAG, a decoupled RAG framework that operates on a single LLM backbone but isolates discriminative retrieval learning from autoregressive generation\. To bridge these decoupled modes, we project retrieval alignments into continuous soft tokens, establishing a high\-bandwidth interface that  infuses the generator with retrieval\-side signals\. Concurrently, our soft orthogonality objective mitigates rank collapse, while layer\-wise relevance dynamics preserve the fine\-grained latent space required for highly discriminative evidence separation\. Extensive  evaluations demonstrate that ShiftRAG significantly improves retrieval and question answering performance over state\-of\-the\-art baselines\. ShiftRAG preserves foundational capabilities of the backbone while maintaining a favorable efficiency\-performance trade\-off on general text encoding and generative tasks\. Our code is available\.

## From I/O to Code with Discovery Agent

**Authors:** Yihong Dong; Jiaru Qian; Haoran Zhang; Peixu Wang; Binhua Li; Zhi Jin; Yongbin Li; Ge Li; Xiaokang Yang; Xue Jiang

**ID:** 154711 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BZxrI7kEUy>) | [PDF](<https://openreview.net/pdf?id=BZxrI7kEUy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154711>)

The automatic synthesis of a program from any form of specification is regarded as a holy grail of computer science\. Fueled by LLMs, NL2Code has achieved tremendous success, yet the fundamentally more challenging task of synthesizing programs from input\-output behavior, which we refer to as IO2Code, remains largely unsolved\. Whereas NL2Code can exploit the semantic alignment between natural language and code acquired during pretraining, IO2Code requires recovering underlying principles from concrete computational behavior, navigating a vast and underspecified hypothesis space\. To address this, we propose DIO\-Agent, a discovery agent for IO2Code\. Our method frames IO2Code as an evolutionary search over discrete program space, in which an LLM serves as the mutation operator and concrete error signals from execution guide each mutation\. To prevent the search from wandering into structurally complex yet incorrect dead ends, we introduce the Transformation Priority Premise as a mutation prior that biases the LLM toward the simplest hypothesis consistent with current evidence, progressively escalating from constants to conditionals to iteration only when simpler constructs are insufficient\. To facilitate systematic study, we further construct an IO2Code benchmark spanning multiple difficulty levels\. Extensive experiments show that DIO\-Agent consistently outperforms both traditional program\-by\-example methods and evolutionary search baselines across all difficulty levels and various LLMs, while substantially surpassing test\-time scaling strategies with equivalent sampling budgets\. Our code and dataset are available at \\url\{https://anonymous\.4open\.science/r/IO2Code\}\.

## Conflict\-Suppressed RAG: A Simple Decoding\-Time Framework for Faithful Retrieval\-Augmented Generation

**Authors:** Yuanye Xu; Yuting Wang; Linyi Guo; Fu Ning

**ID:** 148415 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y0Ra4QaGgR>) | [PDF](<https://openreview.net/pdf?id=y0Ra4QaGgR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148415>)

Retrieval\-Augmented Generation \(RAG\) improves the factual accuracy of large language models \(LLMs\) by grounding responses in external evidence\. However, when retrieved context conflicts with models' internal parametric knowledge, LLMs may still generate answers that contradict the provided evidence, posing a key challenge to contextual faithfulness and the reliability of RAG systems\. Motivated by recent mechanistic findings on the distinct propagation and progressive accumulation of parametric and contextual signals in LLMs, we propose Conflict\-Suppressed RAG \(CSRAG\), a simple, training\-free, decoding\-time framework for resolving knowledge conflicts\. CSRAG biases generation toward retrieved evidence by suppressing tokens associated with parametric knowledge while boosting tokens from the context via two complementary logits processors\. Experiments on six challenging faithfulness benchmarks demonstrate that CSRAG consistently achieves state\-of\-the\-art or near state\-of\-the\-art performance across multiple backbone LLMs, while remaining fully training\-free and lightweight\.

## Short\-Context Dominance: How Much Local Context Natural Language Actually Needs?

**Authors:** Vala Vakilian; Zimeng Wang; Ankit Rawat; Christos Thrampoulidis

**ID:** 155271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6waI39kcJc>) | [PDF](<https://openreview.net/pdf?id=6waI39kcJc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155271>)

We investigate the short\-context dominance hypothesis: that for most sequences, a small local prefix suffices to predict their next tokens\. Using large language models as statistical oracles, we measure the minimum context length \(MCL\) needed to reproduce accurate full\-context predictions across datasets with sequences of varying lengths\. For sequences with 1–7k tokens from long\-context documents, we consistently find that 75–80\\% require only the last 96 tokens at most\. Given the dominance of short\-context tokens, we then ask whether it is possible to detect challenging long\-context sequences for which a short local prefix does not suffice for prediction\. We introduce a practical proxy to MCL, called Distributionally Aware MCL \(DaMCL\), that does not require knowledge of the actual next\-token and is compatible with sampling strategies beyond greedy decoding\. Our experiments validate that simple thresholding of the metric defining DaMCL achieves high performance in detecting long vs\. short context sequences\. Finally, to counter the bias that short\-context dominance induces in LLM output distributions, we develop an intuitive decoding algorithm that leverages our detector to identify and boost tokens that are long\-range\-relevant\.  Across Q\\&amp;A tasks and model architectures, we confirm that mitigating the bias improves performance\.

## FiLoRA: Focus\-and\-Ignore LoRA for Controllable Feature Reliance

**Authors:** Hyunsuk Chung; Caren Han; Seungyeon Ji; Jinwoo Kim; Eun\-Jung Holden; Kyungreem Han

**ID:** 155819 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2eluv7sJYW>) | [PDF](<https://openreview.net/pdf?id=2eluv7sJYW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155819>)

Multimodal foundation models integrate heterogeneous signals across modalities, yet it remains poorly understood how their predictions depend on specific internal feature groups and whether such reliance can be deliberately controlled\. Existing studies of shortcut and spurious behavior largely rely on post hoc analyses or feature removal, offering limited insight into whether reliance can be modulated without altering task semantics\. We introduce FiLoRA \(Focus\-and\-Ignore LoRA\), an instruction\-conditioned, parameter\-efficient adaptation framework that enables explicit control over internal feature reliance while keeping the predictive objective fixed\. FiLoRA decomposes adaptation into feature group\-aligned LoRA modules and applies instruction\-conditioned gating, allowing natural language instructions to act as computation\-level control signals rather than task redefinitions\. Across text\-image and audio\-visual benchmarks, we show that instruction\-conditioned gating induces consistent and causal shifts in internal computation, selectively amplifying or suppressing core and spurious feature groups without modifying the label space or training objective\. Further analyses demonstrate that FiLoRA yields improved robustness under spurious feature interventions, revealing a principled mechanism to regulate reliance beyond correlation\-driven learning\.

## Epitope\-Conditioned Nanobody CDR Design via Retrieval\-Augmented Protein Language Models

**Authors:** Mohammad Amaan Sayeed; Boulbaba Ben Amor

**ID:** 156094 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PwEz0ykbz>) | [PDF](<https://openreview.net/pdf?id=0PwEz0ykbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156094>)

De novo design of nanobody complementarity\-determining regions \(CDRs\) targeting user\-specified epitopes is crucial yet remains computationally challenging\. Current approaches rely on either \(i\) diffusion\-based structural sampling that requires thousands of designs per target, \(ii\) gradient\-based hallucination through frozen structure\-prediction networks, or \(iii\) all\-atom generative systems requiring 3D structural input and high computational cost\. A fundamental limitation of these methods is their dependence on high\-quality antigen structures, either experimental or computationally predicted, restricting applicability to the small fraction of therapeutic targets with available structural data\. We present EpiRAG\-PBind42 \(Epitope\-conditioned Retrieval\-Augmented Generation with PBind42\), a sequence\-only framework for epitope\-conditioned VHH/nanobody CDR generation\. Our approach builds on PBind42, a Prot42\-derived autoregressive binder generator instruction\-tuned on DIPS\-Plus protein–protein interaction pairs\. EpiRAG\-PBind42 adds three key innovations: \(1\) target\-conditioned binder generation from sequence prompts, \(2\) retrieval\-augmented latent\-space decoding using hidden\-state transition datastores derived from strict VHH/nanobody–antigen donor pairs, and \(3\) multi\-agent filtering via four specialized evaluators \(Structural, BLI, Interface, and Expression\) that assess structural confidence, sequence naturalness, developability\-adjacent liabilities, and interface energetics\. Because EpiRAG\-PBind42 operates on sequence input alone, it enables design on targets lacking high\-quality structural models, including intrinsically disordered regions, flexible multi\-domain proteins, and membrane\-bound targets inaccessible to structure\-dependent methods\. We evaluate EpiRAG\-PBind42 on five therapeutic antigen targets spanning diverse therapeutic areas: infectious disease, oncology, inflammation, and immunology\.

## idSCD: Identifying Training Datasets through Semantic Correlation Descriptors

**Authors:** Ionuț Hodoroagă; Andrada Gobeajă; Marius Leordeanu; Elena Burceanu

**ID:** 154504 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D59otSencJ>) | [PDF](<https://openreview.net/pdf?id=D59otSencJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154504>)

Can a dataset be recognized from the spurious correlations it induces during training? We argue that datasets leave dataset\-specific traces in a model’s learned semantic correlation structure: incidental regularities that are predictive within a dataset, but not causal for the underlying task, can be internalized during training\. We use this insight to study dataset\-level membership inference, moving beyond existing methods that rely on behavioral or distributional evidence such as confidence scores, losses, margins, generated samples, or query responses\. We introduce a white\-box semantic fingerprinting approach based on semantic correlation descriptors \(SCDs\), which capture the semantic correlation structure learned by a model and make it comparable across dataset mixtures\. In a controlled leave\-one\-dataset\-out diagnostic, SCDs recover dataset\-specific changes and perfectly separate matching from non\-matching dataset pairs\. We then propose a practical SCD\-based membership score that tests whether a target dataset is part of a model’s training mixture using only the model’s SCD and the target dataset’s standalone SCD, without requiring leave\-one\-dataset\-out models\. Across three diverse experimental settings, with dataset groups for natural language inference, emotion classification, and medical text classification, we test both the advantages and limitations of SCD\-based membership inference with different degrees of semantic separation and keyword support between dataset splits\. On average, the classifier $id\_\{\\mathrm\{SCD\}\}$ based on this score achieves the highest performance and the lowest std, outperforming black\-box baselines RMIA, Attack\-P, and LiRA, as well as the white\-box SIF baseline\. These results show that dataset membership can be traced through internal semantic correlations, with the largest relative gain exceeding $60$% in ROC\-AUC when dataset groups expose distinct semantic particularities\.

## A Matter of TASTE: Improving Coverage and Difficulty of Agent Benchmarks

**Authors:** Tomer Keren; Nitay Calderon; Asaf Yehudai; Yotam Perlitz; Michal Shmueli\-Scheuer; Roi Reichart

**ID:** 150438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i267XddnJt>) | [PDF](<https://openreview.net/pdf?id=i267XddnJt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150438>)

As agent capabilities advance, existing benchmarks, such as $\\tau^2$\-Bench, are becoming increasingly saturated\. Yet constructing new benchmark tasks remains complex, costly, and labor\-intensive\. Moreover, the prevailing top\-down process, in which scenarios are first written in natural language and then mapped to tool sequences, captures only a narrow subset of the tool\-use patterns agents exercise\. In this paper, we address these problems by reversing the task construction process\. We propose TASTE: Task Synthesis from Tool Sequence Evolution, an automatic method that generates challenging tasks with broader tool\-use coverage\. TASTE utilizes an Adaptive Contrastive $n$\-gram model trained on LLM\-judged validity signals\. This enables sampling valid tool sequences that cover a vast range of tool combinations\. TASTE then selects representative sequences from the pool via clustering, instantiates them into complete benchmark tasks, and refines them through iterative difficulty evolution\. Using TASTE, we construct $\\tau^c$\-Bench, a challenging extension of the three domains of $\\tau^2$\-Bench\. We evaluate $11$ agent/user LLM pairs and find that models nearly saturating $\\tau^2$\-Bench suffer severe performance drops on our tasks \(e\.g\., Gemini\-3\-Flash falls from $0\.82\-0\.94$ to $0\.28\-0\.61$\)\. Beyond increasing difficulty, our generated tasks more than double the number of unique tool combinations agents must execute\. Our results suggest high scores on existing benchmarks often reflect saturation rather than robust task\-solving ability\. By automating the generation of difficult, high\-coverage benchmarks, TASTE enables continuous, scalable evaluation of future agents\.

## FACBench: A Benchmark for Formal\-Anchor Collisions in Multilingual Mathematical Grounding

**Authors:** Piotr Kuterba; Józef Spałek

**ID:** 139472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NpetAmYjE2>) | [PDF](<https://openreview.net/pdf?id=NpetAmYjE2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139472>)

Mathematical autoformalization can fail before proof generation, when an informal concept is grounded to the wrong Lean/Mathlib object\. Multilingual terminology makes this step non\-monotonic: aliases can recover missing concepts, but under collision stress they can also pull retrieval toward nearby, non\-interchangeable anchors\. We introduce FACBench, a targeted dependency\-light benchmark and audit protocol for multilingual formal\-anchor grounding before proof generation\. FACBench combines a five\-language concept inventory with controlled collision queries, Mathlib\-graph stress tests, no\-label ablations, theorem\-like probes, and Lean\-facing anchor checks\. In controlled collision settings, naive multilingual alias union can place the expected anchor in the candidate list while ranking a nearby distractor first\. A simple rule\-based source/context guard improves top\-1 anchor accuracy over naive multilingual retrieval by about 11 percentage points on controlled collisions and 28 percentage points on a Mathlib\-graph\-mined controlled holdout\. Less scaffolded and theorem\-like probes show where this guard stops helping and point to the need for role\-aware grounding\. FACBench provides reusable collision\-focused evaluation and regression\-test scenarios for retrieval\-augmented autoformalization systems\.

## Learning Transferable Representations from Operating System Entities via Provenance Graph Distillation

**Authors:** Tristan Bilot; Xueyuan Han; Thomas Pasquier

**ID:** 151915 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WwcXnh7i6p>) | [PDF](<https://openreview.net/pdf?id=WwcXnh7i6p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151915>)

Provenance graphs capture causal interactions among operating\-system entities, underpinning modern endpoint intrusion detection\. Existing graph\-based detectors use generic text encoders trained on small datasets to embed entities solely from their labels \(e\.g\., file paths and process command lines\)\. Embeddings are thus independent of the graph, missing behavioral semantics encoded in graph neighborhoods\. However, much like a natural language that carries linguistic structures that can be learned once and transferred broadly, OS entities such as system binaries, configuration files, and common services engage in recurring types of activity with similar inter\-entity relationships across executions\. These behavioral regularities can be learned offline from provenance graphs and approximated at inference time from entity labels alone\. Based on this insight, we introduce SPIDER \(System Provenance\-Informed Distilled Entity Representations\), a text\-only entity encoder distilled from provenance graphs\. SPIDER uses a graph\-based teacher that models who an entity interacts with via graph attention and how it interacts with them through behavioral signatures\. These representations are distilled into a transformer\-based student that maps raw entity text to embeddings in a single forward pass, providing pretrained behavioral priors that downstream detectors can use for real\-time inference without requiring graph access\. With only 5\.2M parameters, SPIDER can be deployed directly on endpoints and optionally fine\-tuned for specific detection tasks\. We show that a single checkpoint improves detection performance as a drop\-in replacement for four recent intrusion detection systems across Linux, FreeBSD, Windows, and Android, surpassing both GNN\- and LLM\-based baselines\.

## Beyond Raw Context Transfer: Representation\-based Federated Retrieval\-Augmented Generation

**Authors:** Can Peng; Yu Liu; Yingyu Yang; Anjie Le; Yuyuan Liu; Qianye Yang; Alison Noble

**ID:** 150023 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lKq7IpwC03>) | [PDF](<https://openreview.net/pdf?id=lKq7IpwC03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150023>)

Retrieval\-augmented generation \(RAG\) improves the factuality of large language models \(LLMs\) and vision\-language models \(VLMs\) by grounding generation in external knowledge\. However, most existing RAG frameworks assume a centralized retrieval document pool, which is often impractical in sensitive domains such as healthcare, where data are inherently distributed and subject to strict privacy constraints\. Recent efforts on decentralized RAG primarily follow prompt\-based paradigms that exchange raw, human\-readable retrieved content, leading to substantial communication overhead and potential privacy risks\. To address these limitations, we propose Representation\-based Federated RAG \(FedRepRAG\), a decentralized RAG framework that avoids raw\-data exchange during retrieval\. FedRepRAG retrieves information from private local document stores and exchanges only compressed latent representations\. To integrate the retrieved knowledge, we introduce a lightweight collaboratively trained projector that maps retrieval embeddings into the feature space of a frozen LLM/VLM backbone\. This design makes the exchanged information interpretable only within the federated system, thereby enhancing privacy while substantially reducing communication cost\. Experiments on decentralized visual question answering \(VQA\) and question answering \(QA\) benchmarks show that FedRepRAG consistently outperforms direct inference and local retrieval baselines, while substantially reducing retrieval tokens, computational cost, and inference\-time communication overhead compared with raw\-context transfer\. Overall, FedRepRAG establishes an effective, efficient, and privacy\-preserving framework for federated RAG\.

## Overthinking as a Symptom of Knowledge Conflict: Understanding and Detecting LLM's Hallucinations in Retrieval\-Augmented Question Answering

**Authors:** Zhihua Wen; Li Hao; Zhiliang Tian; Zhizhao Liu; Yanqi Shi; YIPING SONG; Dongsheng Li

**ID:** 150716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fzpG3voiei>) | [PDF](<https://openreview.net/pdf?id=fzpG3voiei>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150716>)

Retrieval\-augmented generation \(RAG\) is increasingly used to ground Large language Models \(LLMs\) with up\-to\-date or private information, and has become a key component for knowledge\-intensive LLM systems \(e\.g\., LLM agents\)\. However, RAG with LLMs often hallucinate due to unreliable retrieved information or outdated internal knowledge, making hallucination detection crucial for reliable LLM workflows\. Recently, reasoning\-intensive LLMs that produce explicit reasoning trajectories before answering have shown promise in RAG by examining and synthesizing retrieved evidence\. Yet, they often suffer from overthinking: generating redundant or unproductive reasoning with limited performance gains\. While prior work mainly studies overthinking in closed\-book reasoning tasks that mainly rely on internal knowledge, overthinking in RAG\-based question answering \(QA\) that requires open\-book reasoning over both internal knowledge and external context remains underexplored\. Thereby, we conduct empirical studies to investigate the relationship between overthinking and hallucination in RAG\-based QA and find: \(1\) Overthinking in reasoning LLMs produces lengthy reasoning trajectories that are correlated with hallucinations; \(2\) This overthinking is often associated with knowledge conflict, where LLMs struggle to reconcile retrieved context with internal knowledge\. Based on our findings, we propose a knowledge conflict\-aware hallucination detection framework\. We train a classifier to identify the three knowledge conflict reasoning patterns, design a knowledge conflict score to measure knowledge conflict severity, and apply tailored detection strategies with different prompts for different conflict levels\. Unlike existing methods, our approach requires neither LLM parameter access nor retrieval reliability, and only needs the LLM output in a single run\. Experiments on three QA datasets and three LLMs confirm our framework's effectiveness\.

## RAGBoost: Robust Tabular Learning via Retrieval\-Augmented and Ancillary\-Guided Gradient Boosting

**Authors:** Jinlin Wang; Zhixuan Chen; Qi Ma

**ID:** 150352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=imedFDfGJM>) | [PDF](<https://openreview.net/pdf?id=imedFDfGJM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150352>)

Gradient Boosted Decision Trees \(GBDTs\) remain a leading approach for tabular learning, offering strong predictive performance, computational efficiency, and robustness to heterogeneous feature types\. Yet their standard second\-order leaf updates suffer from a node\-level statistical limitation: as trees grow deeper, sparse leaves provide increasingly unreliable gradient estimates, while global regularization cannot adapt to local uncertainty or residual structure\. We propose RAGBoost, a retrieval\-augmented and ancillary\-guided boosting framework for robust tabular learning\. RAGBoost augments standard GBDT optimization with a two\-layer node\-adaptive correction mechanism\. First, it retrieves historically observed leaves with similar gradient\-state configurations to form node\-conditional gradient priors, stabilizing variance\-dominated sparse\-leaf updates through empirical shrinkage\. Second, it uses ancillary residual correction to detect and mitigate bias\-dominated within\-leaf residual structure that remains unresolved by the main tree\. These corrections modify only leaf values, preserving the original tree structure and inference pipeline\. Empirically, RAGBoost achieves the best overall average rank across 40 heterogeneous tabular benchmarks in our evaluation, while remaining strongly competitive with recent deep tabular and tabular foundation model baselines\. On TabReD, an industrial\-scale temporal\-shift benchmark, RAGBoost outperforms XGBoost and the base TabM variant overall, suggesting improved robustness under realistic distribution drift\.

## CCDiff: Inverse Canonical Correlation Analysis for Discovering Visual Differences in Natural Language

**Authors:** Neelesh Bisht; Xingjian Li; Zihan Li; Bo Jiang; Runmin Jiang; Mostofa Rafid Uddin; Yang Liu; Min Xu

**ID:** 148652 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8mxaFucap>) | [PDF](<https://openreview.net/pdf?id=w8mxaFucap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148652>)

Set\-level visual difference discovery is increasingly important for dataset auditing and for understanding model behavior under distribution shift, yet manually inspecting thousands of images is impractical\. This motivates the emerging task of \*set difference captioning\*, i\.e\., describing concepts that are more often true for one image set than another\. Different from existing approaches which heavily rely on large language models \(LLMs\), incurring substantial computational cost in terms of time and tokens, we introduce \*\*CCDiff\*\*, a lightweight, statistically grounded, and training\-free framework for set difference captioning that significantly reduces LLM dependence during core difference discovery, achieving over \*\*$2\\times$\*\* speedup and reducing token usage to zero\. CCDiff operates in three stages: constructing a shared pool of candidate concepts from domain vocabularies or lightweight captioning models, filtering candidates to obtain set\-specific concept pools, and performing inverse canonical correlation analysis \(CCA\) across sets to identify low\-correlation directions that correspond to set differences\. Candidate concepts are then ranked using a CCDiff score that balances inverse correlation with within\-set representativeness\. We evaluate CCDiff on VisDiffBench and further validate it on additional domains including MetaShift and MIMIC\-CXR\. Across benchmarks and real\-world settings, CCDiff matches or exceeds prior LLM\-based approaches while being substantially more efficient and scalable\.

## OLA\-Place: Cross\-Modal Place Recognition without Global Descriptors

**Authors:** Tianyi Shang; Zhenyu Li

**ID:** 148515 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJJLGIE6Sb>) | [PDF](<https://openreview.net/pdf?id=xJJLGIE6Sb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148515>)

Cross\-modal place recognition aims to retrieve a target 3D location from a spatial map using a natural language description\. Most existing methods follow a global\-descriptor matching paradigm, in which the text query and each 3D scene cell are independently compressed into single vectors and compared by global similarity\. Although simple and widely adopted, this paradigm tends to discard the fine\-grained object correspondences that are essential for language\-guided localization\. In this paper, we challenge the necessity of global descriptors and propose OLA\-Place, an Object\-Level Alignment framework for cross\-modal place recognition without global descriptors\. Instead of representing a query or a scene cell as a single holistic embedding, OLA\-Place formulates place recognition as set\-to\-set semantic alignment between textual object mentions and 3D object instances\. The framework contains three key modules: ObjectSet Encoder \(OSE\), which extracts object\-level representations from both language descriptions and 3D scene cells; Object Message Encoder \(OME\), which injects intra\-set object\-context information while preserving object\-level granularity; and Masked Max Alignment \(MMA\), which computes the query\-cell matching score by aligning each textual object mention with its most similar valid 3D object\. This formulation is permutation\-invariant, naturally handles variable\-size object sets, and requires no object\-level correspondence annotations\. Extensive experiments show that object\-level alignment alone significantly outperforms global\-descriptor\-based methods, demonstrating that cross\-modal place recognition is better understood as an object\-level semantic correspondence problem rather than a global\-embedding retrieval problem\. Our code is available at: https://github\.com/Anonymous09871745/OLA\-Place\.

## Privacy\-Preserving Retrieval\-Augmented Generation with Plausible Deniability

**Authors:** Wenxuan Bao; Shan Jin; Vincent Bindschaedler; Yiwei Cai

**ID:** 150803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fHPuHnOJfR>) | [PDF](<https://openreview.net/pdf?id=fHPuHnOJfR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150803>)

We introduce \*\*PD\-RAG\*\*, a technique for retrieval\-augmented generation \(RAG\) that leverages a language model's own randomness to safeguard privacy\. The algorithm partitions documents into groups, generates a candidate answer from a randomly chosen group, and then uses a privacy test to enforce that the released answer could have been produced by multiple disjoint document groups, thereby ensuring a controllable degree of \*plausible deniability\*\. Compared to existing methods that operate at the token level and therefore incur both substantial utility loss and growing privacy budget per generated token, PD\-RAG operates at the answer level, so the privacy it offers does not loosen with output length\. We prove that PD\-RAG satisfies $\(\\varepsilon,\\delta\)$\-differential privacy\. We experimentally evaluate PD\-RAG on three QA benchmarks using three language models and find that it reduces membership inference attack advantage to near random while consistently outperforming alternative methods on all four utility metrics we used and running between $17$ and $33\{\\times\}$ faster\.

## Runtime Verification of Multiple Natural Language Criteria for Agent Governance

**Authors:** Silviu Pitis; Parand A\. Alamdari; Jessica Tang; Toryn Klassen; Sheila McIlraith

**ID:** 154715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BXJQ1dWtA8>) | [PDF](<https://openreview.net/pdf?id=BXJQ1dWtA8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154715>)

AI agents are governed by hundreds of natural language criteria\-\-\-yet existing verifiers cannot efficiently evaluate an agent's output against a large set of such criteria and report which are satisfied, violated, or inapplicable\. We introduce the VFM, a tree\-attention verifier that encodes the shared context and target text, and scores $N$ natural language criteria in parallel, returning independent per\-criterion ternary verdicts\. The VFM is pretrained on CriteriaBank, an open corpus of 357K \(context, target, criterion, verdict\) tuples spanning over 285K distinct criterion strings\. A finetuned VFM\-4B reaches 88\.3\\% accuracy on a synthetic governance benchmark, surpassing larger generative judges, and on real insurance\-compliance calls it is competitive with GPT\-5\.4 with synthetic finetuning alone\. On the DynaBench multi\-criterion benchmark, a finetuned VFM\-4B reaches $0\.85$ F1 on trace\-level failure detection versus DynaGuard\-4B's $0\.72$; the VFM additionally localizes the violated rule as its top\-1 prediction in $98\.4\\%$ of failing traces, and a top\-3 cascade to a 26B Gemma 4 chain\-of\-thought judge reaches $0\.94$ F1\. CriteriaBank pretraining improves cross\-domain transfer on four additional benchmarks, particularly in the low\-data regime\. On an H100, VFM\-4B evaluates 1000 criteria against a 4K\-token context in under 2s at $&lt;$10GB VRAM, making it suitable for runtime verification\. We will release CriteriaBank, trained checkpoints, and evaluation code\.

## Dual Dimensionality for Local and Global Attention

**Authors:** Zhiyuan Wang; Xuan Luo; Sirui Zeng; Xifeng Yan

**ID:** 151540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zujn6IDCvy>) | [PDF](<https://openreview.net/pdf?id=Zujn6IDCvy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151540>)

Decoder\-only Transformers compute attention over the KV cache of preceding tokens\. Keys \(and Values\) are typically represented with the same dimensionality, regardless of its distance from the prediction target\. In natural language, however, the next word is most strongly influenced by the immediately preceding tokens\. We hypothesize that local and distant tokens impose asymmetric demands on representational capacity: local tokens are more critical for predicting immediate outputs and thus require richer representations, whereas distant tokens primarily serve as long\-range memory, for which lower\-dimensional representations may suffice\. We formalize this idea as Distance\-Adaptive Representation \(DAR\), implemented in a controlled setting that preserves full\-dimensional representations within a local context window while assigning reduced\-dimensional representations \(e\.g\. 1/4 of the original dimensionality\)  to tokens beyond that window\. Across multiple pretraining scales \(70M to 410M parameters\), as well as continued supervised fine\-tuning on a 1B\-scale model, this approach closely matches the performance of full\-dimensional baselines\. In contrast, uniformly reducing dimensionality across all token positions leads to worse performance\. These results challenge the common assumption that key and value dimensionality should be uniform across token positions\. Our findings suggest a new direction for designing attention architectures that adaptively allocate representational capacity across the sequence, enabling further reductions in KV cache during inference\.

## Jet\-Long: Efficient Long\-Context Extension with Dynamic Bifocal RoPE

**Authors:** Haozhan Tang; Zerui Wang; Yuxian Gu; Song Han; Han Cai

**ID:** 155612 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4FFrujgPRZ>) | [PDF](<https://openreview.net/pdf?id=4FFrujgPRZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155612>)

Modern LLMs are increasingly deployed in long\-context applications such as retrieval\-augmented generation, repository\-level coding, and agentic workflows whose accumulated reasoning and tool traces routinely push the input an order of magnitude past the pretraining window, making zero\-shot context extension the dominant deployment path for open\-weight checkpoints\. Most existing zero\-shot methods fix a single rescaling factor up front, so an aggressive factor sacrifices short\-context fidelity while a conservative one breaks down at long contexts\. We propose Jet\-Long, a tuning\-free zero\-shot method that pairs a local RoPE\-faithful window with a long\-range window whose rescaling factor adapts dynamically to the current sequence length, recovering the base model exactly at short inputs while extrapolating cleanly at long ones\. An inclusion\-\-exclusion attention merge and an on\-the\-fly RoPE correction rotation make the bifocal construction essentially free at inference; fused into a single CuTe kernel, long\-context prefill reaches up to $1\.39\\times$ FA2 throughput on H100 \(approaching the Hopper\-only FA4\), and single\-batch generation incurs $\\le 4\\%$ overhead at every length\. On Qwen3\-1\.7B/4B/8B up to 128K context, Jet\-Long leads RULER by $\+4\.79$/$\+2\.18$/$\+2\.03$ pp over the strongest baseline at 1\.7B/4B/8B, achieves the best overall accuracy on HELMET\-RAG \(a benchmark identified by HELMET as the most efficient predictor of downstream long\-context performance\) and attains the lowest PG\-19 perplexity\. Jet\-Long also generalizes to hybrid attention architectures such as Jet\-Nemotron for further long\-context improvement without retraining, and remains hyperparameter\-resilient for ease of deployment\.

## LongMINT: Evaluating Memory under Multi\-Target Interference in Long\-Horizon Agent Systems

**Authors:** Hyunji Lee; Justin Chen; Joykirat Singh; Zaid Khan; Elias Stengel\-Eskin; Mohit Bansal

**ID:** 149299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rFti7C92yw>) | [PDF](<https://openreview.net/pdf?id=rFti7C92yw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149299>)

Agents in real\-world settings operate over long and evolving horizons, where information is repeatedly updated and can interfere with each other across memories, requiring accurate recall and aggregated reasoning over multiple pieces of information\. However, existing benchmarks focus on static, independent recall and fail to capture these dynamic interactions between evolving memories\. In this paper, we study how current systems perform in realistic, continuously evolving, long\-horizon settings across diverse domains and question types\. To this end, we construct an analytical benchmark, LongMINT \(Long\-Horizon Memory under INTerference\), which features \(1\) long, highly interconnected contexts with frequently updated information, \(2\) diverse coverage across multiple memory domains \(Wikipedia, code, multi\-turn dialogue, and state tracking\), enabling evaluation of domain generalization, and \(3\) diverse question types, including \(i\) single\-target recall tasks that test retrieval under interference over long contexts and \(ii\) multi\-target aggregation tasks that require counting, ordering, or reasoning across multiple relevant pieces of information\. We evaluate over six representative systems, including vanilla long\-context LLMs, retrieval\-augmented generation methods, and memory\-augmented agent frameworks\. We observe consistently low performance \(avg\. 27\.7\\% accuracy\), especially on questions that require aggregated reasoning over multiple pieces of evidence\. Fine\-grained analysis shows that performance is primarily limited by retrieval and memory construction capabilities\. Furthermore, current memory systems struggle to recall and reason over facts that are multiple steps back, and performance decreases when this lookback distance increases\. These findings highlight the need for more robust memory management systems for dynamic, long\-horizon environments across varying domains\.

## In\-Context Optimization for Retrieval\-Augmented Generation: A Gradient\-Descent Perspective

**Authors:** mingchen li; Jiatan Huang; Chuxu Zhang; Liang Zhao; Hong Yu

**ID:** 150330 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iuTd9AXKQN>) | [PDF](<https://openreview.net/pdf?id=iuTd9AXKQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150330>)

In\-context learning has recently been linked to implicit gradient descent in linear self\-attention models, suggesting that context can induce a forward\-pass update\. Retrieval\-augmented generation \(RAG\) also relies on context, but retrieved documents are usually treated as static evidence rather than signals for adaptation\. We study RAG as an in\-context optimization process\. First, we show that one linear self\-attention layer can implement one gradient\-descent step on a unified linearized RAG objective covering both projection\-based and dot\-product retrieval interfaces\. This gives an exact regime where retrieval\-augmented prediction and in\-context optimization coincide\. We use this result not as a literal model of LLM computation, but as a guide for adapting the interaction between queries and retrieved evidence\. We then test the boundary of this correspondence: it remains stable under controlled linear extensions, but becomes feature\-distribution dependent under nonlinear architectures\. Finally, we turn this view into a lightweight method for frozen RAG LLMs\. The method keeps the retriever and backbone fixed, and predicts a context\-conditioned update to a generator\-side evidence\-use interface\. Across seven QA benchmarks, two retrievers, and two frozen LLM backbones, this forward\-only update improves a shared\-interface baseline, transfers to held\-out tasks, and approaches test\-time gradient adaptation at much lower per\-query cost

## Data Auctions for Retrieval Augmented Generation

**Authors:** Minbiao Han; Seyed A Esmaeili; Michael Albert; Haifeng Xu

**ID:** 154287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EtzYBT7sG8>) | [PDF](<https://openreview.net/pdf?id=EtzYBT7sG8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154287>)

We study the problem of data selling for Retrieval Augmented Generation \(RAG\) tasks in Generative AI applications\. We model each buyer's valuation of a dataset with a natural coverage\-based valuation function that increases with the inclusion of more relevant data points that would enhance responses to anticipated queries\. Motivated by issues such as data control and prior\-free revenue maximization, we focus on the scenario where each data point can be allocated to only one buyer\. We show that the problem of welfare maximization in this setting is NP\-hard even with two bidders, but  design a polynomial\-time $\(1\-1/e\)$ approximation algorithm for any number of bidders\. Unfortunately, however, this efficient allocation algorithm fails to be incentive compatible\. The crux of our approach is   a carefully tailored  post\-processing step called data burning which retains the $\(1\-1/e\)$ approximation factor but achieves incentive compatibility\. Our thorough experiments on synthetic and real\-world image and text datasets  demonstrate the practical effectiveness of our algorithm compared to popular baseline algorithms for combinatorial auctions\.

## Automated Hypothesis Discovery for Characterizing Annotation Disagreement

**Authors:** Ankita Gupta; Alexandra Chouldechova; Alex Dow; Miro Dudik; Jean Garcia\-Gathright; Hanna Wallach; Nicholas Pangakis

**ID:** 139723 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8JQ33Ylm3k>) | [PDF](<https://openreview.net/pdf?id=8JQ33Ylm3k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139723>)

Annotation disagreement is common in multi\-annotated datasets used throughout the AI/ML lifecycle, from model training to evaluation\. However, existing training and evaluation practices often collapse annotations into \`\`ground truth'' labels that treat disagreement as noise\. In socially consequential contexts, annotation disagreement can reflect multiple valid perspectives, so it is especially important to understand when and why annotators\-\-\-be they human or automated\-\-\-disagree\. Existing disagreement analysis methods rely on manually created taxonomies of disagreement sources that are costly to produce and difficult to scale\. We introduce CHARDIS, a two\-stage automated disagreement analysis method that \(1\) generates candidate disagreement hypotheses—natural language statements describing textual features that predict disagreement—from a multi\-annotated dataset and \(2\) validates these candidates on a held\-out dataset, retaining only statistically significant predictors of disagreement and ranking them by predictive performance\. CHARDIS supports scalable, interpretable disagreement analysis across diverse annotation tasks\. On semi\-synthetic datasets, CHARDIS recovers known disagreement sources\. On four real\-world datasets, CHARDIS reproduces existing manually created taxonomies of disagreement sources and discovers new disagreement hypotheses\. In both settings, CHARDIS achieves better predictive performance than baseline methods\. Code to reproduce our experiments is available at: https://anonymous\.4open\.science/r/disagreement\-analysis\-pipeline\-6319

## Beyond Incremental Beam Search for Compositional Explanations of Neurons

**Authors:** Biagio La Rosa; Leilani Gilpin

**ID:** 152763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QYZFm5iY4H>) | [PDF](<https://openreview.net/pdf?id=QYZFm5iY4H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152763>)

Compositional explanations describe the alignment between neuron activations and concepts through logical formulas, obtained by solving a search problem over combinations of concepts\. Due to the combinatorial nature of this space, prior work relies on incremental beam search, which restricts the exploration but limits the expressiveness of explanations and may discard intermediate candidates needed to identify higher alignment\. In this paper, we propose a non\-incremental beam search framework that expands the search space while keeping the computation tractable\. Our approach introduces a non\-incremental beam expansion strategy and a functional\-equivalence\-aware beam search that leverages equivalence classes of formulas to improve both search quality and efficiency\. Experiments on natural language and vision tasks show that our method finds explanations expressing a higher alignment than the incremental formulation while maintaining comparable runtime, and leads to a significant increase in the number of optimal explanations when these can be computed\. Overall, these results show that expanding search beyond incremental formulations leads to more expressive and accurate explanations, making our method a promising replacement for standard incremental beam search\.

