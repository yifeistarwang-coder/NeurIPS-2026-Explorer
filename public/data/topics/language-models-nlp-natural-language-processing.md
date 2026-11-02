# Language Models &amp; NLP / Natural Language Processing

语言模型与自然语言处理 / 自然语言处理

40 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

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

## ShiftRAG: Bypassing the Textual Bottleneck via Decoupled Learning and Continuous Soft Tokens

**Authors:** Youmin Ko; Jihong Jeong; Hyunjoon Kim

**ID:** 150524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTSuoFjBpl>) | [PDF](<https://openreview.net/pdf?id=hTSuoFjBpl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150524>)

Despite advances in retrieval\-augmented generation \(RAG\), suppressing hallucinations during complex reasoning remains a persistent challenge\. We identify that existing RAG pipelines suffer from a textual bottleneck: by passing only raw text to the generator, they discard discriminative signals of the retriever\. Furthermore, recent attempts to unify retrieval and generation within a single LLM induce severe objective conflict and exacerbate the rank collapse of decoder\-only architectures, degrading performance on both tasks\. To address these limitations, we introduce ShiftRAG, a decoupled RAG framework that operates on a single LLM backbone but isolates discriminative retrieval learning from autoregressive generation\. To bridge these decoupled modes, we project retrieval alignments into continuous soft tokens, establishing a high\-bandwidth interface that  infuses the generator with retrieval\-side signals\. Concurrently, our soft orthogonality objective mitigates rank collapse, while layer\-wise relevance dynamics preserve the fine\-grained latent space required for highly discriminative evidence separation\. Extensive  evaluations demonstrate that ShiftRAG significantly improves retrieval and question answering performance over state\-of\-the\-art baselines\. ShiftRAG preserves foundational capabilities of the backbone while maintaining a favorable efficiency\-performance trade\-off on general text encoding and generative tasks\. Our code is available\.

## MiniPIC: Flexible Position\-Independent Caching in &lt;100LOC

**Authors:** Nathan Ordonez; Thomas Parnell

**ID:** 151329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLPv1lSYrI>) | [PDF](<https://openreview.net/pdf?id=bLPv1lSYrI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151329>)

Retrieval\-augmented and agentic workloads repeatedly prefill recurring predictable structured inputs \(which we call 'spans'\) such as documents and code files\. Yet, prefix caching in engines such as vLLM cannot reuse their KV entries unless they share identical prefixes with another request, while Position\-Independent Caching \(PIC\) implementations within production\-grade inference servers typically either require substantial server code changes or keep KV state outside the server, incurring host\-to\-device transfer overhead\. We present Minimalistic PIC \(MiniPIC\): a minimal, flexible and fast vLLM design built from two ingredients: positional\-encoding\-free KV cache and user\-controlled cache\-reuse primitives\. MiniPIC stores unrotated K vectors in the KV cache, applies RoPE to K tiles inside attention using per\-request logical positions, and exposes three user\-facing and token\-level primitives: block\-aligned padding, \\ssep\{\}, and \\pdep\{\}, that modify hashing behavior and effective block\-level causal attention structure\. With fewer than 100 lines of core\-engine changes plus a custom attention backend, these primitives are sufficient to realize multiple PIC methods, including Block\-Attention, EPIC, and Prompt Cache, within the same running vLLM instance, while natively integrating with KV cache CPU offload implementations\. On 2WikiMultihopQA, MiniPIC with interleaved scheduling improves prefill throughput by 49\\% over baseline vLLM, reduces cached\-span time\-to\-first\-token by up to two orders of magnitude, preserves the linear prefill scaling of uncached spans, and incurs only 5\.7\\% worst\-case overhead\.

## Retrieval\-Augmented Diffusion Modeling for Stochastic Discount Factor Portfolios

**Authors:** Kelvin J\.L\. Koa; XinYang Li; Ke\-Wei Huang

**ID:** 154413 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dk8yYYJtw0>) | [PDF](<https://openreview.net/pdf?id=Dk8yYYJtw0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154413>)

_Abstract unavailable from the accessible public sources._

## Tell Me What To Learn: Generalizing Neural Memory to be Controllable in Natural Language

**Authors:** Max Bennett; Thomas Zollo; Richard Zemel

**ID:** 155335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6NMx0IvOKP>) | [PDF](<https://openreview.net/pdf?id=6NMx0IvOKP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155335>)

Modern machine learning models are deployed in diverse, non\-stationary environments where they must continually adapt to new tasks and evolving knowledge\. Continual fine\-tuning and in\-context learning are costly and brittle, whereas neural memory methods promise lightweight updates with minimal forgetting\. However, existing neural memory models typically assume a single fixed objective and homogeneous information streams, leaving users with no control over what the model remembers or ignores over time\. To address this challenge, we propose a generalized neural memory system that performs flexible updates based on learning instructions specified in natural language\. Our approach enables adaptive agents to learn selectively from heterogeneous information sources, supporting settings—such as healthcare and customer service—where fixed\-objective memory updates are insufficient\.

## Beyond Incremental Beam Search for Compositional Explanations of Neurons

**Authors:** Biagio La Rosa; Leilani Gilpin

**ID:** 152763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QYZFm5iY4H>) | [PDF](<https://openreview.net/pdf?id=QYZFm5iY4H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152763>)

Compositional explanations describe the alignment between neuron activations and concepts through logical formulas, obtained by solving a search problem over combinations of concepts\. Due to the combinatorial nature of this space, prior work relies on incremental beam search, which restricts the exploration but limits the expressiveness of explanations and may discard intermediate candidates needed to identify higher alignment\. In this paper, we propose a non\-incremental beam search framework that expands the search space while keeping the computation tractable\. Our approach introduces a non\-incremental beam expansion strategy and a functional\-equivalence\-aware beam search that leverages equivalence classes of formulas to improve both search quality and efficiency\. Experiments on natural language and vision tasks show that our method finds explanations expressing a higher alignment than the incremental formulation while maintaining comparable runtime, and leads to a significant increase in the number of optimal explanations when these can be computed\. Overall, these results show that expanding search beyond incremental formulations leads to more expressive and accurate explanations, making our method a promising replacement for standard incremental beam search\.

## MLAIRE: Multilingual Language\-Aware Information Retrieval Evaluation Protocol

**Authors:** Youngjoon Jang; Seongtae Hong; Hyeonseok Moon; Heuiseok Lim

**ID:** 139143 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQB0yUdDpp>) | [PDF](<https://openreview.net/pdf?id=iQB0yUdDpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139143>)

Multilingual Information Retrieval reflects real\-world search settings where users issue queries over mixed\-language corpora\. Existing evaluations mainly reward language\-agnostic semantic relevance, treating relevant passages equally regardless of language\. Yet retrieval utility also depends on the language of the retrieved passages: users expect results they can read and verify in the query language, and query\-\-passage language mismatch can complicate downstream grounding in Retrieval\-Augmented Generation systems\. To evaluate this aspect, we introduce \*\*MLAIRE\*\*, a \*\*M\*\*ultilingual \*\*L\*\*anguage\-\*\*A\*\*ware \*\*I\*\*nformation \*\*R\*\*etrieval \*\*E\*\*valuation protocol that disentangles cross\-lingual semantic retrieval from query\-language preference\. MLAIRE constructs controlled pools with parallel passages across languages, enabling measurement of whether retrievers find relevant passages and whether they prioritize query\-language passages when equivalent translations are available\. We further propose language\-aware metrics, including Language Preference Rate \(LPR\) and Lang\-nDCG, together with a 4\-way decomposition separating semantic and language\-preference failures\. Evaluating 31 dense, sparse, and late\-interaction retrievers, we show that standard metrics obscure distinct behaviors: semantically strong retrievers may return correct content in a non\-query language, while language\-preserving retrievers may retrieve less relevant passages\.

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

## SAGE: Semantic Ambiguity Guided Capacity Expansion for Retrieval\-Augmented Generation

**Authors:** Xunlei Chen; Jinyu Guo; Yi Gong; Qirui Ye; Zhaokun Wang; Wenyi Li; Wenhong Tian

**ID:** 150303\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150303

[Paper](<https://openreview.net/forum?id=j95jiSEi4O>) | [PDF](<https://openreview.net/pdf?id=j95jiSEi4O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150303>)

Retrieval\-Augmented Generation \(RAG\) mitigates Large Language Model \(LLM\) hallucinations by grounding generation in external knowledge\. Although structure\-augmented RAG methods improve multi\-hop reasoning, they incur high indexing costs and degrade on simple queries\. We argue that this robustness gap is driven by capacity bottlenecks in fixed\-dimensional inner\-product scoring\. As corpora grow, semantically close passages create local regions where a base scorer cannot maintain sufficient separability\.  Reorganizing documents into trees or graphs can expose or partially mitigate this issue, but it does not by itself provide a stronger local scoring function\. We propose Semantic Ambiguity Guided Capacity Expansion \(SAGE\), a lightweight RAG framework that detects such regions using document\-side Local Separability Deficit and expands capacity only where needed\. SAGE builds a two\-layer semantic index, derives atomic query views from corpus passages, and calibrates a parameter\-efficient hypernetwork to generate the local Ambiguity\-Conditioned Scorers for selected nodes\.  Extensive experiments show that SAGE improves retrieval and QA performance over dense retrievers and structure\-augmented baselines, achieving a better balance between single\-hop, multi\-hop retrieval accuracy, and robust scalability\. Anonymous Code: https://anonymous\.4open\.science/r/SAGE\-1676\.

## Deceptive Grounding: Entity Attribution Failure in Clinical Retrieval\-Augmented Generation

**Authors:** Cedric Caruzzo; Donggeun Yoo; Tae Soo Kim

**ID:** 152927\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152927

[Paper](<https://openreview.net/forum?id=PL3EWYRq36>) | [PDF](<https://openreview.net/pdf?id=PL3EWYRq36>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152927>)

Retrieval\-augmented generation evaluation checks whether model claims are factually grounded in retrieved documents\. It does not check whether retrieved evidence is attributed to the correct entity\.  A clinical RAG response can pass every automated check \(zero hallucinations, near\-perfect faithfulness, real citations\) while presenting drug $Y$'s clinical evidence as evidence about queried drug $X$\. We term this \*\*deceptive grounding\*\* \(DG\): a failure invisible to faithfulness, hallucination, and citation checks because every claim is sourced from a real document, about the wrong entity\.  Using a controlled factorial benchmark across 13 models, we find DG rates spanning 8\-\-87\\% at peak adversarial conditions\. Medical and biomedical fine\-tuned models reach up to 86\.7\\%; domain specialization amplifies the failure rather than mitigating it\.  A controlled ablation identifies the mechanism: removing entity\-specific clinical evidence from retrieved documents eliminates entity\-attribution failure entirely, shifting all failures to confabulation\. The two failure modes respond to the same trigger, taking different paths\.  Production measurement across 740 drug\-\-disease pairs finds 7\.8\\% overall DG in a deployed RAG system, rising to 13\.6\\% for recently approved drugs\. Entity\-attribution verification \(checking that cited evidence applies to the queried entity\) detects DG at 92\.3\\% precision and 95\.8\\% DG recall; no existing framework implements it\.

## LongMINT: Evaluating Memory under Multi\-Target Interference in Long\-Horizon Agent Systems

**Authors:** Hyunji Lee; Justin Chen; Joykirat Singh; Zaid Khan; Elias Stengel\-Eskin; Mohit Bansal

**ID:** 149299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rFti7C92yw>) | [PDF](<https://openreview.net/pdf?id=rFti7C92yw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149299>)

Agents in real\-world settings operate over long and evolving horizons, where information is repeatedly updated and can interfere with each other across memories, requiring accurate recall and aggregated reasoning over multiple pieces of information\. However, existing benchmarks focus on static, independent recall and fail to capture these dynamic interactions between evolving memories\. In this paper, we study how current systems perform in realistic, continuously evolving, long\-horizon settings across diverse domains and question types\. To this end, we construct an analytical benchmark, LongMINT \(Long\-Horizon Memory under INTerference\), which features \(1\) long, highly interconnected contexts with frequently updated information, \(2\) diverse coverage across multiple memory domains \(Wikipedia, code, multi\-turn dialogue, and state tracking\), enabling evaluation of domain generalization, and \(3\) diverse question types, including \(i\) single\-target recall tasks that test retrieval under interference over long contexts and \(ii\) multi\-target aggregation tasks that require counting, ordering, or reasoning across multiple relevant pieces of information\. We evaluate over six representative systems, including vanilla long\-context LLMs, retrieval\-augmented generation methods, and memory\-augmented agent frameworks\. We observe consistently low performance \(avg\. 27\.7\\% accuracy\), especially on questions that require aggregated reasoning over multiple pieces of evidence\. Fine\-grained analysis shows that performance is primarily limited by retrieval and memory construction capabilities\. Furthermore, current memory systems struggle to recall and reason over facts that are multiple steps back, and performance decreases when this lookback distance increases\. These findings highlight the need for more robust memory management systems for dynamic, long\-horizon environments across varying domains\.

## FACBench: A Benchmark for Formal\-Anchor Collisions in Multilingual Mathematical Grounding

**Authors:** Piotr Kuterba; Józef Spałek

**ID:** 139472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NpetAmYjE2>) | [PDF](<https://openreview.net/pdf?id=NpetAmYjE2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139472>)

Mathematical autoformalization can fail before proof generation, when an informal concept is grounded to the wrong Lean/Mathlib object\. Multilingual terminology makes this step non\-monotonic: aliases can recover missing concepts, but under collision stress they can also pull retrieval toward nearby, non\-interchangeable anchors\. We introduce FACBench, a targeted dependency\-light benchmark and audit protocol for multilingual formal\-anchor grounding before proof generation\. FACBench combines a five\-language concept inventory with controlled collision queries, Mathlib\-graph stress tests, no\-label ablations, theorem\-like probes, and Lean\-facing anchor checks\. In controlled collision settings, naive multilingual alias union can place the expected anchor in the candidate list while ranking a nearby distractor first\. A simple rule\-based source/context guard improves top\-1 anchor accuracy over naive multilingual retrieval by about 11 percentage points on controlled collisions and 28 percentage points on a Mathlib\-graph\-mined controlled holdout\. Less scaffolded and theorem\-like probes show where this guard stops helping and point to the need for role\-aware grounding\. FACBench provides reusable collision\-focused evaluation and regression\-test scenarios for retrieval\-augmented autoformalization systems\.

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

## MLAIRE: Multilingual Language\-Aware Information Retrieval Evaluation Protocol

**Authors:** Youngjoon Jang; Seongtae Hong; Hyeonseok Moon; Heuiseok Lim

**ID:** 139143\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139143

[Paper](<https://openreview.net/forum?id=iQB0yUdDpp>) | [PDF](<https://openreview.net/pdf?id=iQB0yUdDpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139143>)

Multilingual Information Retrieval reflects real\-world search settings where users issue queries over mixed\-language corpora\. Existing evaluations mainly reward language\-agnostic semantic relevance, treating relevant passages equally regardless of language\. Yet retrieval utility also depends on the language of the retrieved passages: users expect results they can read and verify in the query language, and query\-\-passage language mismatch can complicate downstream grounding in Retrieval\-Augmented Generation systems\. To evaluate this aspect, we introduce \*\*MLAIRE\*\*, a \*\*M\*\*ultilingual \*\*L\*\*anguage\-\*\*A\*\*ware \*\*I\*\*nformation \*\*R\*\*etrieval \*\*E\*\*valuation protocol that disentangles cross\-lingual semantic retrieval from query\-language preference\. MLAIRE constructs controlled pools with parallel passages across languages, enabling measurement of whether retrievers find relevant passages and whether they prioritize query\-language passages when equivalent translations are available\. We further propose language\-aware metrics, including Language Preference Rate \(LPR\) and Lang\-nDCG, together with a 4\-way decomposition separating semantic and language\-preference failures\. Evaluating 31 dense, sparse, and late\-interaction retrievers, we show that standard metrics obscure distinct behaviors: semantically strong retrievers may return correct content in a non\-query language, while language\-preserving retrievers may retrieve less relevant passages\.

## Privacy\-Preserving Retrieval\-Augmented Generation with Plausible Deniability

**Authors:** Wenxuan Bao; Shan Jin; Vincent Bindschaedler; Yiwei Cai

**ID:** 150803\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150803

[Paper](<https://openreview.net/forum?id=fHPuHnOJfR>) | [PDF](<https://openreview.net/pdf?id=fHPuHnOJfR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150803>)

We introduce \*\*PD\-RAG\*\*, a technique for retrieval\-augmented generation \(RAG\) that leverages a language model's own randomness to safeguard privacy\. The algorithm partitions documents into groups, generates a candidate answer from a randomly chosen group, and then uses a privacy test to enforce that the released answer could have been produced by multiple disjoint document groups, thereby ensuring a controllable degree of \*plausible deniability\*\. Compared to existing methods that operate at the token level and therefore incur both substantial utility loss and growing privacy budget per generated token, PD\-RAG operates at the answer level, so the privacy it offers does not loosen with output length\. We prove that PD\-RAG satisfies $\(\\varepsilon,\\delta\)$\-differential privacy\. We experimentally evaluate PD\-RAG on three QA benchmarks using three language models and find that it reduces membership inference attack advantage to near random while consistently outperforming alternative methods on all four utility metrics we used and running between $17$ and $33\{\\times\}$ faster\.

## Runtime Verification of Multiple Natural Language Criteria for Agent Governance

**Authors:** Silviu Pitis; Parand A\. Alamdari; Jessica Tang; Toryn Klassen; Sheila McIlraith

**ID:** 154715\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154715

[Paper](<https://openreview.net/forum?id=BXJQ1dWtA8>) | [PDF](<https://openreview.net/pdf?id=BXJQ1dWtA8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154715>)

AI agents are governed by hundreds of natural language criteria\-\-\-yet existing verifiers cannot efficiently evaluate an agent's output against a large set of such criteria and report which are satisfied, violated, or inapplicable\. We introduce the VFM, a tree\-attention verifier that encodes the shared context and target text, and scores $N$ natural language criteria in parallel, returning independent per\-criterion ternary verdicts\. The VFM is pretrained on CriteriaBank, an open corpus of 357K \(context, target, criterion, verdict\) tuples spanning over 285K distinct criterion strings\. A finetuned VFM\-4B reaches 88\.3\\% accuracy on a synthetic governance benchmark, surpassing larger generative judges, and on real insurance\-compliance calls it is competitive with GPT\-5\.4 with synthetic finetuning alone\. On the DynaBench multi\-criterion benchmark, a finetuned VFM\-4B reaches $0\.85$ F1 on trace\-level failure detection versus DynaGuard\-4B's $0\.72$; the VFM additionally localizes the violated rule as its top\-1 prediction in $98\.4\\%$ of failing traces, and a top\-3 cascade to a 26B Gemma 4 chain\-of\-thought judge reaches $0\.94$ F1\. CriteriaBank pretraining improves cross\-domain transfer on four additional benchmarks, particularly in the low\-data regime\. On an H100, VFM\-4B evaluates 1000 criteria against a 4K\-token context in under 2s at $&lt;$10GB VRAM, making it suitable for runtime verification\. We will release CriteriaBank, trained checkpoints, and evaluation code\.

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

**ID:** 152032 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W3LmdJrHns>) | [PDF](<https://openreview.net/pdf?id=W3LmdJrHns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152032>)

_Abstract unavailable from the accessible public sources._

## Overthinking as a Symptom of Knowledge Conflict: Understanding and Detecting LLM's Hallucinations in Retrieval\-Augmented Question Answering

**Authors:** Zhihua Wen; Li Hao; Zhiliang Tian; Zhizhao Liu; Yanqi Shi; YIPING SONG; Dongsheng Li

**ID:** 150716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fzpG3voiei>) | [PDF](<https://openreview.net/pdf?id=fzpG3voiei>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150716>)

Retrieval\-augmented generation \(RAG\) is increasingly used to ground Large language Models \(LLMs\) with up\-to\-date or private information, and has become a key component for knowledge\-intensive LLM systems \(e\.g\., LLM agents\)\. However, RAG with LLMs often hallucinate due to unreliable retrieved information or outdated internal knowledge, making hallucination detection crucial for reliable LLM workflows\. Recently, reasoning\-intensive LLMs that produce explicit reasoning trajectories before answering have shown promise in RAG by examining and synthesizing retrieved evidence\. Yet, they often suffer from overthinking: generating redundant or unproductive reasoning with limited performance gains\. While prior work mainly studies overthinking in closed\-book reasoning tasks that mainly rely on internal knowledge, overthinking in RAG\-based question answering \(QA\) that requires open\-book reasoning over both internal knowledge and external context remains underexplored\. Thereby, we conduct empirical studies to investigate the relationship between overthinking and hallucination in RAG\-based QA and find: \(1\) Overthinking in reasoning LLMs produces lengthy reasoning trajectories that are correlated with hallucinations; \(2\) This overthinking is often associated with knowledge conflict, where LLMs struggle to reconcile retrieved context with internal knowledge\. Based on our findings, we propose a knowledge conflict\-aware hallucination detection framework\. We train a classifier to identify the three knowledge conflict reasoning patterns, design a knowledge conflict score to measure knowledge conflict severity, and apply tailored detection strategies with different prompts for different conflict levels\. Unlike existing methods, our approach requires neither LLM parameter access nor retrieval reliability, and only needs the LLM output in a single run\. Experiments on three QA datasets and three LLMs confirm our framework's effectiveness\.

## Auto\-Dreamer: Learning Offline Memory Consolidation for Language Agents

**Authors:** Chongrui Ye; Yuxiang Liu; Yu Wang; Haofei Yu; Yining Zhao; Ge Liu; Julian McAuley; Jiaxuan You

**ID:** 152534\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152534

[Paper](<https://openreview.net/forum?id=SR1n2zkaBO>) | [PDF](<https://openreview.net/pdf?id=SR1n2zkaBO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152534>)

Language agents increasingly operate over streams of related tasks, yet existing memory systems struggle to convert accumulated experience into reusable knowledge\. Retrieval\-augmented and structured memory methods record per\-session observations effectively, but often couple acquisition and consolidation into a single online process, leaving the agent without a global view across sessions to discover recurring patterns, abstract shared procedures, or prune redundant entries\. Inspired by complementary learning systems theory, we propose Auto\-Dreamer, a learned offline consolidator for language\-agent memory\. Auto\-Dreamer decouples fast per\-session memory acquisition from slow cross\-session consolidation\. Given a region of a typed memory bank, the consolidator performs bounded tool\-use to search memory, inspect candidate entries, and trace them back to raw source trajectories, synthesizing provenance\-grounded replacement memories that supersede the original region\. We train Auto\-Dreamer via GRPO, using end\-to\-end agent performance as the reward signal to learn how to consolidate memories acquired through fast online experience\.  Trained on ScienceWorld trajectories alone, Auto\-Dreamer transfers without retraining to held\-out ALFWorld and WebArena, improves task success over fixed, RL\-trained, and prompted memory baselines in both continual\-memory deployment and fixed\-bank consolidation, and does so with an active memory bank an order of magnitude smaller than competitive baselines\.

## LongMINT: Evaluating Memory under Multi\-Target Interference in Long\-Horizon Agent Systems

**Authors:** Hyunji Lee; Justin Chen; Joykirat Singh; Zaid Khan; Elias Stengel\-Eskin; Mohit Bansal

**ID:** 149299\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149299

[Paper](<https://openreview.net/forum?id=rFti7C92yw>) | [PDF](<https://openreview.net/pdf?id=rFti7C92yw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149299>)

Agents in real\-world settings operate over long and evolving horizons, where information is repeatedly updated and can interfere with each other across memories, requiring accurate recall and aggregated reasoning over multiple pieces of information\. However, existing benchmarks focus on static, independent recall and fail to capture these dynamic interactions between evolving memories\. In this paper, we study how current systems perform in realistic, continuously evolving, long\-horizon settings across diverse domains and question types\. To this end, we construct an analytical benchmark, LongMINT \(Long\-Horizon Memory under INTerference\), which features \(1\) long, highly interconnected contexts with frequently updated information, \(2\) diverse coverage across multiple memory domains \(Wikipedia, code, multi\-turn dialogue, and state tracking\), enabling evaluation of domain generalization, and \(3\) diverse question types, including \(i\) single\-target recall tasks that test retrieval under interference over long contexts and \(ii\) multi\-target aggregation tasks that require counting, ordering, or reasoning across multiple relevant pieces of information\. We evaluate over six representative systems, including vanilla long\-context LLMs, retrieval\-augmented generation methods, and memory\-augmented agent frameworks\. We observe consistently low performance \(avg\. 27\.7\\% accuracy\), especially on questions that require aggregated reasoning over multiple pieces of evidence\. Fine\-grained analysis shows that performance is primarily limited by retrieval and memory construction capabilities\. Furthermore, current memory systems struggle to recall and reason over facts that are multiple steps back, and performance decreases when this lookback distance increases\. These findings highlight the need for more robust memory management systems for dynamic, long\-horizon environments across varying domains\.

## In\-Context Optimization for Retrieval\-Augmented Generation: A Gradient\-Descent Perspective

**Authors:** mingchen li; Jiatan Huang; Chuxu Zhang; Liang Zhao; Hong Yu

**ID:** 150330 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iuTd9AXKQN>) | [PDF](<https://openreview.net/pdf?id=iuTd9AXKQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150330>)

_Abstract unavailable from the accessible public sources._

## ReflectMT: Internalizing Reflection for Efficient and High\-Quality Machine Translation

**Authors:** Kunquan Li; Yingxue Zhang; Zhibin Lan; Fandong Meng; Jinsong Su

**ID:** 155820\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155820

[Paper](<https://openreview.net/forum?id=2dn1HhrPeN>) | [PDF](<https://openreview.net/pdf?id=2dn1HhrPeN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155820>)

Recent years have witnessed growing interest in applying Large Reasoning Models \(LRMs\) to Machine Translation \(MT\)\. While most approaches adopt a "pre\-thinking" paradigm and benefit from explicit reasoning trajectories, they suffer from substantial inference cost and latency\. To address these limitations, we propose ReflectMT, a two\-stage reflection internalization framework for machine translation that employs a "post\-thinking" paradigm\. Our approach develops the model's "translate–reflect–refine" capability through reinforcement learning\. In the first stage, we cultivate the model's capacity for high\-quality reflection and refinement, thereby enhancing its semantic comprehension and task\-specific knowledge\. In the second stage, we train the model to internalize the knowledge acquired during reflection\. As a result, during inference, ReflectMT operates in a direct translation mode, producing high\-quality translations on the first attempt without any explicit reasoning steps\. Experimental results on benchmarks such as WMT24 demonstrate that our model’s first\-pass translations during inference outperform multi\-step reasoning LRMs \(e\.g\., DeepSeek\-R1\) in both automatic metrics and GPT\-based evaluation, achieving a 2\.16\-point improvement in GPT\-based translation quality evaluation while reducing token consumption by 94\.33%\.

## Data Auctions for Retrieval Augmented Generation

**Authors:** Minbiao Han; Seyed A Esmaeili; Michael Albert; Haifeng Xu

**ID:** 154287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EtzYBT7sG8>) | [PDF](<https://openreview.net/pdf?id=EtzYBT7sG8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154287>)

We study the problem of data selling for Retrieval Augmented Generation \(RAG\) tasks in Generative AI applications\. We model each buyer's valuation of a dataset with a natural coverage\-based valuation function that increases with the inclusion of more relevant data points that would enhance responses to anticipated queries\. Motivated by issues such as data control and prior\-free revenue maximization, we focus on the scenario where each data point can be allocated to only one buyer\. We show that the problem of welfare maximization in this setting is NP\-hard even with two bidders, but  design a polynomial\-time $\(1\-1/e\)$ approximation algorithm for any number of bidders\. Unfortunately, however, this efficient allocation algorithm fails to be incentive compatible\. The crux of our approach is   a carefully tailored  post\-processing step called data burning which retains the $\(1\-1/e\)$ approximation factor but achieves incentive compatibility\. Our thorough experiments on synthetic and real\-world image and text datasets  demonstrate the practical effectiveness of our algorithm compared to popular baseline algorithms for combinatorial auctions\.

## Beyond RAG for Agent Memory: Retrieval by Decoupling and Aggregation

**Authors:** Zhanghao Hu; Qinglin Zhu; Runcong Zhao; Di Liang; Hanqi Yan; Yulan He; Lin Gui

**ID:** 150607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gtGRNOmx4m>) | [PDF](<https://openreview.net/pdf?id=gtGRNOmx4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150607>)

Standard Retrieval Augmented Generation \(RAG\) is poorly matched to agent memory\. Unlike large heterogeneous corpora, agent memory forms a bounded and coherent interaction stream in which many spans are highly correlated or near duplicates\. As a result, flat top\-$k$ similarity retrieval often returns redundant context, while summary\-centric hierarchies can blur the subtle details that distinguish one candidate from another\. We argue that agent memory should follow the principle of decoupling before aggregation: the system should first isolate reusable facts, updates, and distinguishing details from similar histories, and only then organise them for efficient retrieval\. Based on this principle, we propose xMemory, which constructs a revisable hierarchical memory structure from original messages to segments, memory components, and groups\. xMemory segments interaction history into local events, decouples each segment into memory components, aggregates related components into high\-level groups using a sparsity\-\-semantic faithfulness objective, and maintains this structure incrementally as memory evolves\. At inference time, xMemory retrieves top\-down, first selecting a compact backbone of complementary groups and components, and then expanding to segments and raw messages only when additional evidence reduces the reader's uncertainty\. Experiments on LoCoMo and PerLTQA across diverse open source and closed source LLMs show consistent gains in answer quality and inference token efficiency, supported by analyses of redundancy, evidence density, and coverage\.

## Auto\-Dreamer: Learning Offline Memory Consolidation for Language Agents

**Authors:** Chongrui Ye; Yuxiang Liu; Yu Wang; Haofei Yu; Yining Zhao; Ge Liu; Julian McAuley; Jiaxuan You

**ID:** 152534\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152534

[Paper](<https://openreview.net/forum?id=SR1n2zkaBO>) | [PDF](<https://openreview.net/pdf?id=SR1n2zkaBO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152534>)

Language agents increasingly operate over streams of related tasks, yet existing memory systems struggle to convert accumulated experience into reusable knowledge\. Retrieval\-augmented and structured memory methods record per\-session observations effectively, but often couple acquisition and consolidation into a single online process, leaving the agent without a global view across sessions to discover recurring patterns, abstract shared procedures, or prune redundant entries\. Inspired by complementary learning systems theory, we propose Auto\-Dreamer, a learned offline consolidator for language\-agent memory\. Auto\-Dreamer decouples fast per\-session memory acquisition from slow cross\-session consolidation\. Given a region of a typed memory bank, the consolidator performs bounded tool\-use to search memory, inspect candidate entries, and trace them back to raw source trajectories, synthesizing provenance\-grounded replacement memories that supersede the original region\. We train Auto\-Dreamer via GRPO, using end\-to\-end agent performance as the reward signal to learn how to consolidate memories acquired through fast online experience\.  Trained on ScienceWorld trajectories alone, Auto\-Dreamer transfers without retraining to held\-out ALFWorld and WebArena, improves task success over fixed, RL\-trained, and prompted memory baselines in both continual\-memory deployment and fixed\-bank consolidation, and does so with an active memory bank an order of magnitude smaller than competitive baselines\.

## MLAIRE: Multilingual Language\-Aware Information Retrieval Evaluation Protocol

**Authors:** Youngjoon Jang; Seongtae Hong; Hyeonseok Moon; Heuiseok Lim

**ID:** 139143\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139143

[Paper](<https://openreview.net/forum?id=iQB0yUdDpp>) | [PDF](<https://openreview.net/pdf?id=iQB0yUdDpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139143>)

Multilingual Information Retrieval reflects real\-world search settings where users issue queries over mixed\-language corpora\. Existing evaluations mainly reward language\-agnostic semantic relevance, treating relevant passages equally regardless of language\. Yet retrieval utility also depends on the language of the retrieved passages: users expect results they can read and verify in the query language, and query\-\-passage language mismatch can complicate downstream grounding in Retrieval\-Augmented Generation systems\. To evaluate this aspect, we introduce \*\*MLAIRE\*\*, a \*\*M\*\*ultilingual \*\*L\*\*anguage\-\*\*A\*\*ware \*\*I\*\*nformation \*\*R\*\*etrieval \*\*E\*\*valuation protocol that disentangles cross\-lingual semantic retrieval from query\-language preference\. MLAIRE constructs controlled pools with parallel passages across languages, enabling measurement of whether retrievers find relevant passages and whether they prioritize query\-language passages when equivalent translations are available\. We further propose language\-aware metrics, including Language Preference Rate \(LPR\) and Lang\-nDCG, together with a 4\-way decomposition separating semantic and language\-preference failures\. Evaluating 31 dense, sparse, and late\-interaction retrievers, we show that standard metrics obscure distinct behaviors: semantically strong retrievers may return correct content in a non\-query language, while language\-preserving retrievers may retrieve less relevant passages\.

## Privacy\-Preserving Retrieval\-Augmented Generation with Plausible Deniability

**Authors:** Wenxuan Bao; Shan Jin; Vincent Bindschaedler; Yiwei Cai

**ID:** 150803\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150803

[Paper](<https://openreview.net/forum?id=fHPuHnOJfR>) | [PDF](<https://openreview.net/pdf?id=fHPuHnOJfR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150803>)

We introduce \*\*PD\-RAG\*\*, a technique for retrieval\-augmented generation \(RAG\) that leverages a language model's own randomness to safeguard privacy\. The algorithm partitions documents into groups, generates a candidate answer from a randomly chosen group, and then uses a privacy test to enforce that the released answer could have been produced by multiple disjoint document groups, thereby ensuring a controllable degree of \*plausible deniability\*\. Compared to existing methods that operate at the token level and therefore incur both substantial utility loss and growing privacy budget per generated token, PD\-RAG operates at the answer level, so the privacy it offers does not loosen with output length\. We prove that PD\-RAG satisfies $\(\\varepsilon,\\delta\)$\-differential privacy\. We experimentally evaluate PD\-RAG on three QA benchmarks using three language models and find that it reduces membership inference attack advantage to near random while consistently outperforming alternative methods on all four utility metrics we used and running between $17$ and $33\{\\times\}$ faster\.

## LongMINT: Evaluating Memory under Multi\-Target Interference in Long\-Horizon Agent Systems

**Authors:** Hyunji Lee; Justin Chen; Joykirat Singh; Zaid Khan; Elias Stengel\-Eskin; Mohit Bansal

**ID:** 149299\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149299

[Paper](<https://openreview.net/forum?id=rFti7C92yw>) | [PDF](<https://openreview.net/pdf?id=rFti7C92yw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149299>)

Agents in real\-world settings operate over long and evolving horizons, where information is repeatedly updated and can interfere with each other across memories, requiring accurate recall and aggregated reasoning over multiple pieces of information\. However, existing benchmarks focus on static, independent recall and fail to capture these dynamic interactions between evolving memories\. In this paper, we study how current systems perform in realistic, continuously evolving, long\-horizon settings across diverse domains and question types\. To this end, we construct an analytical benchmark, LongMINT \(Long\-Horizon Memory under INTerference\), which features \(1\) long, highly interconnected contexts with frequently updated information, \(2\) diverse coverage across multiple memory domains \(Wikipedia, code, multi\-turn dialogue, and state tracking\), enabling evaluation of domain generalization, and \(3\) diverse question types, including \(i\) single\-target recall tasks that test retrieval under interference over long contexts and \(ii\) multi\-target aggregation tasks that require counting, ordering, or reasoning across multiple relevant pieces of information\. We evaluate over six representative systems, including vanilla long\-context LLMs, retrieval\-augmented generation methods, and memory\-augmented agent frameworks\. We observe consistently low performance \(avg\. 27\.7\\% accuracy\), especially on questions that require aggregated reasoning over multiple pieces of evidence\. Fine\-grained analysis shows that performance is primarily limited by retrieval and memory construction capabilities\. Furthermore, current memory systems struggle to recall and reason over facts that are multiple steps back, and performance decreases when this lookback distance increases\. These findings highlight the need for more robust memory management systems for dynamic, long\-horizon environments across varying domains\.

## In\-Context Optimization for Retrieval\-Augmented Generation: A Gradient\-Descent Perspective

**Authors:** mingchen li; Jiatan Huang; Chuxu Zhang; Liang Zhao; Hong Yu

**ID:** 150330\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150330

[Paper](<https://openreview.net/forum?id=iuTd9AXKQN>) | [PDF](<https://openreview.net/pdf?id=iuTd9AXKQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150330>)

_Abstract unavailable from the accessible public sources._

## Natural Language Actor\-Critic: Scalable Off\-Policy Learning in Language Space

**Authors:** Joey Hong; Kang Liu; Zhan Ling; Jiecao Chen; Sergey Levine

**ID:** 150763\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150763

[Paper](<https://openreview.net/forum?id=fZBF1ilOob>) | [PDF](<https://openreview.net/pdf?id=fZBF1ilOob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150763>)

Large language model \(LLM\) agents\-\-\-LLMs that dynamically interact with an environment over long horizons\-\-\-have become an increasingly important area of research, enabling automation in complex tasks involving tool\-use, web browsing, and dialogue with people\.  In these settings, traditional policy gradient methods may suffer from unstable learning and poor sample\-complexity due to poor credit assignment\. Meanwhile, actor\-critic methods address long horizons by learning a critic that provides more granular feedback and enables off\-policy \(and potentially offline\) learning, but are heavily dependent on the fidelity of the critic\. In this paper, we propose \\emph\{Natural Language Actor\-Critic\} \(NLAC\), a novel actor\-critic algorithm that trains LLM policies using a generative LLM critic that produces values in natural language space\. While natural language values have been leveraged in the past to provide a more flexible and actionable training signal, our work is the first to perform general and scalable value learning without relying on in\-context aggregation of information from on\-policy rollouts\. This means our approach can be trained off\-policy without policy gradients, offering a more sample\-efficient alternative to existing methods\. We present results on a mixture of reasoning, web browsing, and tool\-use with dialogue tasks, demonstrating that NLAC shows promise in outperforming existing training approaches and offers a more scalable and stable training paradigm for LLM agents\.

## A Matter of TASTE: Improving Coverage and Difficulty of Agent Benchmarks

**Authors:** Tomer Keren; Nitay Calderon; Asaf Yehudai; Yotam Perlitz; Michal Shmueli\-Scheuer; Roi Reichart

**ID:** 150438\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150438

[Paper](<https://openreview.net/forum?id=i267XddnJt>) | [PDF](<https://openreview.net/pdf?id=i267XddnJt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150438>)

As agent capabilities advance, existing benchmarks, such as $\\tau^2$\-Bench, are becoming increasingly saturated\. Yet constructing new benchmark tasks remains complex, costly, and labor\-intensive\. Moreover, the prevailing top\-down process, in which scenarios are first written in natural language and then mapped to tool sequences, captures only a narrow subset of the tool\-use patterns agents exercise\. In this paper, we address these problems by reversing the task construction process\. We propose TASTE: Task Synthesis from Tool Sequence Evolution, an automatic method that generates challenging tasks with broader tool\-use coverage\. TASTE utilizes an Adaptive Contrastive $n$\-gram model trained on LLM\-judged validity signals\. This enables sampling valid tool sequences that cover a vast range of tool combinations\. TASTE then selects representative sequences from the pool via clustering, instantiates them into complete benchmark tasks, and refines them through iterative difficulty evolution\. Using TASTE, we construct $\\tau^c$\-Bench, a challenging extension of the three domains of $\\tau^2$\-Bench\. We evaluate $11$ agent/user LLM pairs and find that models nearly saturating $\\tau^2$\-Bench suffer severe performance drops on our tasks \(e\.g\., Gemini\-3\-Flash falls from $0\.82\-0\.94$ to $0\.28\-0\.61$\)\. Beyond increasing difficulty, our generated tasks more than double the number of unique tool combinations agents must execute\. Our results suggest high scores on existing benchmarks often reflect saturation rather than robust task\-solving ability\. By automating the generation of difficult, high\-coverage benchmarks, TASTE enables continuous, scalable evaluation of future agents\.

## MiniPIC: Flexible Position\-Independent Caching in &lt;100LOC

**Authors:** Nathan Ordonez; Thomas Parnell

**ID:** 151329\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151329

[Paper](<https://openreview.net/forum?id=bLPv1lSYrI>) | [PDF](<https://openreview.net/pdf?id=bLPv1lSYrI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151329>)

Retrieval\-augmented and agentic workloads repeatedly prefill recurring predictable structured inputs \(which we call 'spans'\) such as documents and code files\. Yet, prefix caching in engines such as vLLM cannot reuse their KV entries unless they share identical prefixes with another request, while Position\-Independent Caching \(PIC\) implementations within production\-grade inference servers typically either require substantial server code changes or keep KV state outside the server, incurring host\-to\-device transfer overhead\. We present Minimalistic PIC \(MiniPIC\): a minimal, flexible and fast vLLM design built from two ingredients: positional\-encoding\-free KV cache and user\-controlled cache\-reuse primitives\. MiniPIC stores unrotated K vectors in the KV cache, applies RoPE to K tiles inside attention using per\-request logical positions, and exposes three user\-facing and token\-level primitives: block\-aligned padding, \\ssep\{\}, and \\pdep\{\}, that modify hashing behavior and effective block\-level causal attention structure\. With fewer than 100 lines of core\-engine changes plus a custom attention backend, these primitives are sufficient to realize multiple PIC methods, including Block\-Attention, EPIC, and Prompt Cache, within the same running vLLM instance, while natively integrating with KV cache CPU offload implementations\. On 2WikiMultihopQA, MiniPIC with interleaved scheduling improves prefill throughput by 49\\% over baseline vLLM, reduces cached\-span time\-to\-first\-token by up to two orders of magnitude, preserves the linear prefill scaling of uncached spans, and incurs only 5\.7\\% worst\-case overhead\.

## MiniPIC: Flexible Position\-Independent Caching in &lt;100LOC

**Authors:** Nathan Ordonez; Thomas Parnell

**ID:** 151329\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151329

[Paper](<https://openreview.net/forum?id=bLPv1lSYrI>) | [PDF](<https://openreview.net/pdf?id=bLPv1lSYrI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151329>)

Retrieval\-augmented and agentic workloads repeatedly prefill recurring predictable structured inputs \(which we call 'spans'\) such as documents and code files\. Yet, prefix caching in engines such as vLLM cannot reuse their KV entries unless they share identical prefixes with another request, while Position\-Independent Caching \(PIC\) implementations within production\-grade inference servers typically either require substantial server code changes or keep KV state outside the server, incurring host\-to\-device transfer overhead\. We present Minimalistic PIC \(MiniPIC\): a minimal, flexible and fast vLLM design built from two ingredients: positional\-encoding\-free KV cache and user\-controlled cache\-reuse primitives\. MiniPIC stores unrotated K vectors in the KV cache, applies RoPE to K tiles inside attention using per\-request logical positions, and exposes three user\-facing and token\-level primitives: block\-aligned padding, \\ssep\{\}, and \\pdep\{\}, that modify hashing behavior and effective block\-level causal attention structure\. With fewer than 100 lines of core\-engine changes plus a custom attention backend, these primitives are sufficient to realize multiple PIC methods, including Block\-Attention, EPIC, and Prompt Cache, within the same running vLLM instance, while natively integrating with KV cache CPU offload implementations\. On 2WikiMultihopQA, MiniPIC with interleaved scheduling improves prefill throughput by 49\\% over baseline vLLM, reduces cached\-span time\-to\-first\-token by up to two orders of magnitude, preserves the linear prefill scaling of uncached spans, and incurs only 5\.7\\% worst\-case overhead\.

