# Social Aspects / Social Aspects

社会影响与可信人工智能 / 综合社会影响

26 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Castle\-in\-the\-Air: Probing the Foundational Visual Deficits of MLLMs via Bottom\-Up Cognitive Factors

**Authors:** Jen\-Tse Huang; Dasen Dai; Jen\-Yuan Huang; Youliang Yuan; Xiaoyuan Liu; Wenxuan Wang; Wenxiang Jiao; Pinjia He; Zhaopeng Tu; Haodong Duan

**ID:** 139489 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MxjxPW0HSQ>) | [PDF](<https://openreview.net/pdf?id=MxjxPW0HSQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139489>)

Humans develop perception through a bottom\-up hierarchy: from basic primitives and Gestalt principles to high\-level semantics\. Current Multimodal Large Language Models \(MLLMs\) are trained directly on complex downstream tasks\. Does it guarantee their performance on these foundational visual capabilities? To systematically investigate this gap, we introduce VisFactor, a benchmark that digitizes 20 vision\-centric subtests from FRCT, a well\-established cognitive psychology assessment spanning four domains of human visual cognition\. Furthermore, we design algorithms to automatically construct and validate unlimited test cases with controllable difficulty\. Using VisFactor, we evaluate 39 frontier MLLMs, including both proprietary \(e\.g\., GPT, Gemini\) and open\-source \(e\.g\., LLaMA, Qwen\) models\. The best model achieves a score of only 55\.9%\. Analysis reveals good internal consistency \(Cronbach's alpha = 0\.94\) and construct validity \(compared to existing vision benchmarks\)\. Models consistently fail on tasks such as mental rotation, spatial relation inference, and figure–ground discrimination, regardless of model size or prompting strategy\. These findings suggest that performance improvements on existing general benchmarks might represent castles in the air instead of a genuine mastery of human\-like visual cognition\.

## Working with AI: Measuring the Applicability of Generative AI to Occupations

**Authors:** Kiran Tomlinson; Sonia Jaffe; Will Wang; Scott Counts; Siddharth Suri

**ID:** 148720 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vY6x2jvMUO>) | [PDF](<https://openreview.net/pdf?id=vY6x2jvMUO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148720>)

With generative AI emerging as a general\-purpose technology, understanding its economic effects is among society’s most pressing questions\. Existing studies of AI impact have largely relied on predictions of AI capabilities or focused narrowly on individual firms\. Drawing instead on real\-world AI usage, we analyze a dataset of 200k anonymized conversations with Microsoft Bing Copilot to measure AI applicability to occupations\. We use an LLM\-based pipeline to classify the O\*NET work activities assisted or performed by AI in each conversation\. We find that the most common and successful AI\-assisted work activities involve information work\-\-\-the creation, processing, and communication of information\. At the occupation level, we find widespread AI applicability cutting across sectors, as most occupations have information work components\. Our methodology also allows us to predict which occupations are more likely to delegate tasks to AI and which are more likely to use AI to assist existing workflows\. Finally, we see an increase in occupation\-level AI applicability over our 9\-month data period, driven primarily by people using AI for more varied tasks\.

## Practical Estimation of the Bayes Optimal Fairness\-Accuracy Tradeoff with Soft Labels

**Authors:** mohit sharma; Okan Koc; Amit Jayant Deshpande; Takashi Ishida; Gang Niu; Rajiv Ratn Shah; Masashi Sugiyama

**ID:** 150128 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kTv8UGGoPJ>) | [PDF](<https://openreview.net/pdf?id=kTv8UGGoPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150128>)

There is a fundamental limit to the best prediction error of any model for a given data distribution\. In classification, the Bayes error quantifies this limit and serves as both a benchmark for trained models and a criterion to detect overfitting\. The state\-of\-the\-art Bayes error estimation techniques for binary classification use only soft labels \(positive class probabilities\) and require no input features or auxiliary training\. We extend such notions to constrained classification problems, such as fairness\. Fair classification is an important case of constrained or multi\-objective classification\. It requires a model not only to be accurate but also to yield fair outcomes \(equal or near\-equal true positive rates\) across different demographic groups \(e\.g\., race and gender\)\. This leads to an inherent fairness\-accuracy tradeoff or a Pareto frontier that is used to compare fair classifiers against each other\. The focus of our work is to estimate the fundamental limit for this fairness\-accuracy tradeoff\. We derive an explicit expression for the fair Bayes error rate \(i\.e\., best achievable error rate subject to given fairness constraints\), and construct consistent, instance\-free estimators for it using only soft labels and group information\. We provably bound the bias and the sample complexity of our estimators\. Empirically, our method produces a robust, low\-variance estimate of the optimal fairness\-accuracy trade\-off curve, even when the soft labels are noisy and derived from a classification model on hard labels\.

## Expected Harm: Rethinking Safety Evaluation of \(Mis\)Aligned LLMs

**Authors:** Yen\-Shan Chen; Zhi Rui Tam; Cheng\-Kuang Wu; Yun\-Nung \(Vivian\) Chen

**ID:** 139760 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6SIPt7cfSm>) | [PDF](<https://openreview.net/pdf?id=6SIPt7cfSm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139760>)

Current evaluations of LLM safety predominantly rely on \*severity\-based taxonomies\* to assess the harmfulness of models' responses to malicious queries\. We argue that this formulation requires re\-examination as it implicitly equates model output with realized harm while neglecting \*Execution Likelihood\*—the conditional probability  of a threat being realized by a real\-world actor given a model's response\. In this work, we introduce \*\*Expected Harm\*\*, a metric that weights the severity of a jailbreak by its execution likelihood, modeled as a function of \*execution cost\*\. Through empirical analysis of state\-of\-the\-art models, we reveal a systematic \*Inverse Risk Calibration\*: models disproportionately exhibit stronger refusal behaviors for low\-likelihood \(high\-cost\) threats while remaining vulnerable to high\-likelihood \(low\-cost\) queries\. Mechanistically, we first provide an analysis using linear probing, revealing that while refusal mechanisms linearly separate queries by severity, they do not use execution likelihood as an indicator for refusal\. Then, we use Olmo\-3's open\-source staged checkpoints to trace the root cause of miscalibration to the Supervised Fine Tuning \(SFT\) training data distribution \(82\.8\\% of safety examples at cost levels 0–1\) and show that cost representations are weak from the SFT stage onward\. Finally, we demonstrate that this miscalibration creates a vulnerability: by exploiting this property, we increase the attack success rate of existing jailbreaks by up to $2\\times$\.

## From Clips to Streams: A Unified Framework for Streaming Sign Language Translation

**Authors:** Hoang Quan Dang; Xin Shen; Yanbin Liu; Xin Yu; Ling Chen

**ID:** 155080 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8cWsEeaaN5>) | [PDF](<https://openreview.net/pdf?id=8cWsEeaaN5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155080>)

Sign Language Translation \(SLT\) research has typically focused on pre\-segmented clips, a constraint that disconnects models from the continuous reality of real\-world communication\. To bridge the gap from clips to streams, we formally define \\textbf\{Streaming SLT\}, a realistic task demanding the simultaneous discovery and translation of linguistic events from continuous, untrimmed video inputs\. To address this challenge, we propose \\textbf\{StreamSLST\}, the first end\-to\-end framework for streaming \\textbf\{S\}ign \\textbf\{L\}anguage \\textbf\{S\}egmentation and \\textbf\{T\}ranslation via Deformable Transformer architecture\. Unlike cascaded approaches that suffer from error propagation, StreamSLST employs a parallel decoding strategy to jointly optimize \\textit\{temporal segmentation\} and \\textit\{translation\} in a single pass\. To enable scalable training on long\-form videos, we incorporate a \\textit\{Sentence\-aware Sliding Window Sampler\} that crops continuous streams into trainable units\. We further design a \\textit\{Tri\-modal Visual\-Language Pretraining\} stage that aligns pose dynamics with textual semantics before joint optimization\. To support comprehensive evaluation, we conduct experiments on two real\-world streaming datasets, BOBSL and How2Sign, together with two newly constructed synthetic streaming benchmarks, \\textit\{Streaming\-CSL\-Daily\} and \\textit\{Streaming\-Phoenix\-2014T\}\. The results demonstrate that StreamSLST consistently outperforms cascaded segmentation\-then\-translation pipelines\. Interestingly, our analysis reveals that learned sentence boundaries can outperform ground\-truth boundaries for translation, suggesting that joint optimization drives localization toward semantically informative regions rather than exact temporal endpoints\. Our work establishes the first robust benchmark for continuous sign language understanding and paves the way for accessible real\-world communication interfaces\.

## MLLMEraser: Achieving Test\-Time Unlearning in Multimodal Large Language Models through Activation Steering

**Authors:** Chenlu Ding; Jiancan Wu; Leheng Sheng; Fan Zhang; Yancheng Yuan; Xiang Wang; Xiangnan He

**ID:** 155572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4bsEXh3zpY>) | [PDF](<https://openreview.net/pdf?id=4bsEXh3zpY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155572>)

Multimodal large language models \(MLLMs\) have demonstrated remarkable capabilities across vision–language tasks, yet their large\-scale deployment raises pressing concerns about memorized private data, outdated knowledge, and harmful content\. Existing unlearning approaches for MLLMs typically adapt training\-based strategies such as gradient ascent or preference optimization, but these methods are computationally expensive, irreversible, and often distort retained knowledge\. In this work, we propose MLLMEraser, an input\-aware, training\-free framework for test\-time unlearning\. Our approach leverages activation steering to enable dynamic knowledge erasure without parameter updates\. Specifically, we construct a multimodal erasure direction by contrasting adversarially perturbed, knowledge\-recall image–text pairs with knowledge\-erasure counterparts, capturing both textual and visual discrepancies\. To prevent unnecessary interference, we further design an input\-aware steering mechanism that adaptively determines when and how the erasure direction should be applied, preserving utility on retained knowledge while enforcing forgetting on designated content\. Experiments on LLaVA\-1\.5 and Qwen\-2\.5\-VL demonstrate that MLLMEraser consistently outperforms state\-of\-the\-art MLLM unlearning baselines, achieving stronger forgetting performance with lower computational cost and minimal utility degradation\.

## Enhancing LLMs with Cognitive\-Affective Personality Inference for Simulating Human Social\-Psychological Behavior

**Authors:** Zhibo Deng; Dongyuan Li; Shuwen Ge; Ziqing Zhang; Ying Zhang; Renhe Jiang

**ID:** 154613 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CHeF30DtLG>) | [PDF](<https://openreview.net/pdf?id=CHeF30DtLG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154613>)

Large language models are increasingly used to simulate human participants in social and behavioral studies, yet static persona prompting typically maps a participant profile and an experimental scenario directly to a response, entangling stable dispositions with situation\-specific interpretations\. To address this limitation, we introduce $\\textbf\{SPIN\}$, a cognitive\-affective personality system\-inspired inference pipeline for social judgment and decision alignment\. Specifically, SPIN implements this structured inference process through three zero\-shot LLM calls that compile a task\-blind participant core, elicit condition\-specific cognitive\-affective states, and read out decisions from those states, thereby reusing stable personality structure while routing each trial\-specific response through an explicit state representation\. We evaluate SPIN on two reconstructed social\-psychological study families spanning uncertainty reasoning and pluralistic ignorance, across four base LLMs\. Compared with blank, demographic, narrative, and chain\-of\-thought prompt variants, SPIN consistently delivers the strongest overall alignment performance across base LLMs and study families\. Ablations and state analyses further show that both personality compilation and structured state elicitation contribute to the gains, and that the elicited states shift interpretably across informational and normative conditions\. These results suggest that structured personality\-state inference can improve benchmark\-level behavioral alignment beyond richer persona descriptions or generic multi\-step reasoning\.

## Steer\-to\-Detect: Probing Hidden Representations for Detection of LLM\-Generated Texts

**Authors:** Luxu LIANG; Xiang Li

**ID:** 153916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hhb63IUx9g>) | [PDF](<https://openreview.net/pdf?id=Hhb63IUx9g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153916>)

The rapid advancement of large language models \(LLMs\) has made machine\-generated text increasingly difficult to distinguish from human\-written text\. While recent studies explore leveraging internal representations of language models to uncover deeper detection signals, these raw features often exhibit substantial overlap between classes, limiting their discriminative power\. To address this challenge, we propose Steer\-to\-Detect \(\\texttt\{S2D\}\), a two\-stage framework for detecting LLM\-generated text\. In the first stage, \\texttt\{S2D\} learns a steering vector that is injected into the hidden states of a frozen observer LLM, producing representations with improved class separability\. In the second stage, detection is performed via a hypothesis testing procedure based on the steered representations\.  We establish finite\-sample, high\-probability guarantees for Type I and Type II errors, providing a theoretical characterization of the procedure\. Empirically, \\texttt\{S2D\} achieves strong and consistent performance across a range of settings, including out\-of\-distribution scenarios and adversarial perturbations\.

## Teaching Large Language Models When Not to Know: Learning Temporal Critique for Ex\-Ante Reasoning

**Authors:** Chenlu Ding; Jiancan Wu; Yanchen LUO; Zheyuan \(Frank\) Liu; Yancheng Yuan; Xiang Wang

**ID:** 153002 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OhXc6BJCQS>) | [PDF](<https://openreview.net/pdf?id=OhXc6BJCQS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153002>)

Large language models \(LLMs\) often fail to reason under temporal cutoffs: when prompted to answer from the standpoint of an earlier time, they exploit knowledge that became available only later\. We study this failure through the lens of ex\-ante reasoning, where a model must rely exclusively on information knowable before a cutoff\. Through a systematic analysis of prompt\-level interventions, we find that temporal leakage is highly sensitive to cutoff formulation and instruction placement: explicit cutoff statements outperform implicit historical framings, and prefix constraints reduce leakage more effectively than suffix constraints\. These findings indicate that prompting can steer models into a temporal frame, but does not endow them with the ability to verify whether a response is temporally admissible\. We further argue that supervised fine\-tuning is insufficient, since ex\-ante correctness is not an intrinsic property of an answer, but a relation between the answer and the cutoff\. To address this gap, we propose \\textbf\{TCFT\}, a \\underline\{T\}emporal \\underline\{C\}ritique \\underline\{F\}ine\-\\underline\{T\}uning framework that trains models to acquire cutoff\-aware temporal verification\. Given a query, a cutoff, and a candidate response, TCFT teaches the model to identify post\-cutoff leakage, explain temporal boundary violations, and judge temporal admissibility\. Experiments with Qwen2\.5\-7B\-Instruct and Qwen2\.5\-14B\-Instruct show that TCFT consistently outperforms prompting and SFT baselines, reducing average leakage by 41\.89 and 37\.79 percentage points, respectively\.

## Localizing Input Uncertainty Quantification for Large Language Models via Shapley Values

**Authors:** Seongjun Lee; Suwan Yoon; Changhee Lee

**ID:** 152631 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RfKPkFbBsx>) | [PDF](<https://openreview.net/pdf?id=RfKPkFbBsx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152631>)

As large language models \(LLMs\) are increasingly integrated into high\-stakes decision\-making, the ability to reliably quantify uncertainty has become a critical requirement for safety and trust\. However, current uncertainty quantification methods primarily operate at the output level, often failing to distinguish whether uncertainty arises from the model’s lack of knowledge or from ambiguity in the user’s input\. While input\-centric uncertainty quantification has recently emerged as a promising direction, it remains relatively underexplored and typically relies on coarse, input\-level information\. Consequently, users are provided with scalar uncertainty scores that offer little actionable guidance on which parts of the input should be clarified to improve reliability\. To address this limitation, we propose Shapley\-based input uncertainty Quantification \(ShaQ\), a framework for span\-level attribution of input\-induced uncertainty\. Our approach models ambiguous spans in the input as players in a cooperative game and quantifies their contributions using Shapley values, defined via the weighted average of marginal reductions in conditional entropy obtained by clarifying each span coalition\. Unlike existing input\-level approaches, our formulation explicitly captures complex interactions among spans and provides a principled decomposition in which individual attributions sum exactly to the total input\-induced uncertainty\. We evaluate ShaQ on the AmbigQA and AmbiEnt benchmarks, where it achieves state\-of\-the\-art performance in ambiguity detection\. We further demonstrate its practical utility on a MediTOD benchmark, showing that ShaQ can precisely localize under\-specified clinical utterances, facilitating more effective human\-AI collaboration in high\-stakes settings\. Overall, our results show that ShaQ not only improves uncertainty estimation but also provides actionable insights for targeted input clarification\. Codes are available https://anonymous\.4open\.science/r/ShaQ\-0E39/README\.md\.

## JuICE: A Benchmark for Evaluating LLM\-Judge in Identifying Cultural Errors

**Authors:** Jiho Jin; Junho Myung; Juhyun Oh; Junyeong Park; Rifki A Putri; Sunipa Dev; Vinodkumar Prabhakaran; Alice Oh

**ID:** 139486 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NDur0E3dYy>) | [PDF](<https://openreview.net/pdf?id=NDur0E3dYy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139486>)

As large language models \(LLMs\) are increasingly deployed to users around the world, they are integrated into everyday tasks across diverse cultural contexts, from drafting personal communications to brainstorming creative ideas\. These tasks are inherently cultural: they require contextual appropriateness, symbolic resonance, and tacit cultural expectations that native speakers draw on instinctively, meaning that a response can be factually plausible yet unmistakably wrong to a local reader\. Existing cultural benchmarks have treated culture as a flat set of facts via fact verification or norm entailment methods, and have adopted LLM\-as\-a\-Judge without examining whether they can capture such thick cultural errors\. To address this gap, we present JuICE \(Benchmark for LLM\-Judge in Identifying Cultural Errors\), a multilingual dataset of 7,470 span\-level annotations of cultural and linguistic errors, collected from native speakers in long\-form LLM responses\. It covers 1,050 query\-response pairs from four countries \(United States, South Korea, Indonesia, and Bangladesh\), in both English and their countries' main languages\. Using JuICE, we find that even the strongest LLM\-judge achieves only an F1 of 0\.52 against human\-annotated errors, and that this gap is systematic\. LLM\-judges reliably detect surface\-level linguistic and factual mistakes but consistently miss thick cultural errors that local residents readily identify\. Our findings suggest that robust cultural evaluation must move beyond surface\-level detection toward frameworks that account for the depth and situatedness of cultural meaning\.

## Test\-Time Compute Games

**Authors:** Ander Artola Velasco; Dimitrios Rontogiannis; Stratis Tsirtsis; Manuel Rodriguez

**ID:** 151305 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bS1tznbzuA>) | [PDF](<https://openreview.net/pdf?id=bS1tznbzuA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151305>)

Test\-time compute has emerged as a promising strategy to enhance the reasoning abilities of large language models \(LLMs\)\. However, this strategy has in turn increased how much users pay cloud\-based providers offering LLM\-as\-a\-service, since providers charge users for the amount of test\-time compute they use to generate an output\. In our work, we show that the market of LLM\-as\-a\-service is socially inefficient–providers have a financial incentive to increase the amount of test\-time compute, even if this increase contributes little to the quality of the outputs\. To address this inefficiency, we introduce a reverse second\-price auction mechanism where providers bid their offered price and \(expected\) quality for the opportunity to serve a user, and users pay proportionally to the marginal value generated by the winning provider relative to the second\-highest bidder\. To illustrate and complement our theoretical results, we conduct experiments with multiple instruct models from the $\\texttt\{Llama\}$ and $\\texttt\{Qwen\}$ families, as well as reasoning models distilled from $\\texttt\{DeepSeek\-R1\}$, on benchmark datasets covering mathematics, science, and open\-ended question answering\.

## Learning to Decide with AI Assistance under Human\-Alignment

**Authors:** Nina Corvelo Benz; Eleni Straitouri; Manuel Rodriguez

**ID:** 152462 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sw8wvfZ6XQ>) | [PDF](<https://openreview.net/pdf?id=Sw8wvfZ6XQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152462>)

It is widely agreed that when AI models assist decision\-makers in high\-stakes domains, they should communicate the confidence of their predictions\. However, empirical evidence suggests that decision\-makers often struggle to determine when to trust a prediction based solely on this communicated confidence\. In this context, recent theoretical and empirical work suggests a positive correlation between the utility of AI\-assisted decision\-making and the degree of alignment between the AI confidence and the decision\-makers' confidence in their own predictions\. Crucially, these findings do not yet elucidate the extent to which this alignment influences the complexity of learning to make optimal decisions through repeated interactions\. In this paper, we address this question in the canonical case of binary predictions and binary decisions\. We first show that this problem is equivalent to a two\-armed online contextual learning problem with full feedback, and establish a lower bound of $\\Omega \( \\sqrt\{\|\\mathcal\{H\}\| \\cdot \|\\mathcal\{B\}\| \\cdot T\} \)$  on the expected regret any learner can attain, where $\\mathcal\{H\}$ and $\\mathcal\{B\}$ denote the sets of possible human and AI confidence values\. We then demonstrate that, by leveraging the alignment between AI and human confidence, a learner can attain an expected regret of $\\mathcal\{O\}\(\\sqrt\{\|\\mathcal\{H\}\| \\cdot T\\log T\}\)$ and, in the regime where $\\mathcal\{B\}$ is countable and  $\\sqrt\{\|\\mathcal\{H\}\|\} = \\mathcal\{O\}\(\\log T\)$, a non\-trivial generalization of the Dvoretzky\-Kiefer\-Wolfowitz inequality improves the regret bound to $\\mathcal\{O\}\(\\sqrt\{T\\log T\}\)$\. Taken together, these results reveal that alignment can reduce the complexity of learning to make decisions with AI assistance\. Experiments on real data from two different human subject studies where participants solve simple decision\-making tasks assisted by AI models with different degrees of alignment complement our theoretical results\.

## The Constitutional Coverage Trilemma in AI Governance

**Authors:** Natalija Mitic; Soona S O\.; Mamadou Selly Ly; Moustapha Cisse

**ID:** 149178 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sJBjJfAXJ2>) | [PDF](<https://openreview.net/pdf?id=sJBjJfAXJ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149178>)

Frontier AI systems function as \\emph\{constitutional institutions\}: each deployed model encodes an implicit ranking among safety, helpfulness, honesty, autonomy, and equity\. We ask whether the supply of frontier constitutional types covers human demand\. Combining a paraphrase\-controlled audit of $23$ frontier LLM archetypes with a pairwise\-tradeoff study of $1\{,\}649$ humans on the same instrument, we report three facts\. Demand is broad: it spans all five values, with the largest constituency under one\-third\. Supply is narrow and drifting: the $23$\-archetype hull occupies $0\.10\\%$ of the demand hull, and across six model families autonomy decreases in $5/6$, equity increases in $5/6$, and safety increases in $4/6$\. The importance of this drift is not that the frontier moves but that it moves away from a value that is already undercovered, mechanically worsening the welfare floor for the users least well served by the static menu\. The fix is sparse: a $2$\-vertex menu $\\\{e\_\{\\mathrm\{HON\}\}, e\_\{\\mathrm\{AUT\}\}\\\}$ beats the full $23$\-archetype frontier by $47$ percent on mean regret \($95$ percent\); three vertex additions cut mean regret by up to $81$ percent and worst\-group regret by up to $64$ percent\. We formalize these findings as a budgeted\-pluralism trilemma and show the binding regime is empirically realized\.

## PDHFormer: Progressive Dual\-Head Transformer for Behavioral Choice Prediction

**Authors:** Hao Zhou; Jing Chen; Yaoxin Wu; Jie Gao; Yingqian Zhang

**ID:** 155287 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6gQNL51pmW>) | [PDF](<https://openreview.net/pdf?id=6gQNL51pmW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155287>)

Many applications require joint prediction of interdependent behavioral choices, yet existing models often treat each choice independently \(e\.g\., through parallel prediction heads\), overlooking the influence of one on the other\.  In this work, we propose Progressive Dual\-Head Transformer \(PDHFormer\), a novel framework that performs two\-step prediction: the model first estimates one choice and then conditions the second on this upstream estimate through an explicit head\-to\-head pathway\. A shared encoder captures the common structure of two prediction tasks, while the dual\-head module explicitly reflects cross\-choice dependence\.  A gated residual mechanism integrated into the embedding layer and the dual\-head module further improves the training stability and the prediction performance\. Extensive experiments on real\-world urban mobility, manufacturing, and food delivery application domains demonstrate that PDHFormer consistently outperforms state\-of\-the\-art machine learning models, deep tabular models, as well as parallel\-head Transformer variants across multiple metrics\. Moreover, our ablation study confirms that both  the proposed progressive dual\-head and gated residual mechanism are key contributors to the observed gains in different prediction tasks\.

## Towards Understanding and Measuring Cognitive Atrophy in LLM Behaviour

**Authors:** Abeer Badawi; Moyosoreoluwa Olatosi; Negin Baghbanzadeh; Laleh Seyyed\-Kalantari; Frank Rudzicz; R\. Shayna Rosenbaum; Sara Pishdadian; Elham Dolatabadi

**ID:** 138990 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sBIsNxaYbj>) | [PDF](<https://openreview.net/pdf?id=sBIsNxaYbj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138990>)

Recent incidents involving LLMs used for mental\-health support reveal a critical evaluation gap: surface\-level safety scores do not capture how models behave across realistic, emotionally sensitive interactions over time\. Existing benchmarks measure knowledge, safety, or static response quality, but miss whether LLM interactions help users keep reflecting, coping, and making decisions themselves\. We formalize this missing dimension as Cognitive Atrophy, a process\-level behavioural pattern in AI\-mediated mental\-health support distinct from safety and helpfulness\. To measure it, we introduce Cognitive Atrophy Bench, a clinically grounded benchmark built from 1,576 fully human\-generated counseling conversations, 15,680 turns, and 42,230 responses from five LLMs\. Three clinical psychology experts developed a 20\-attribute schema spanning user context, response behaviour, and global risk flags; six trained clinical reviewers applied it with span\-grounded evidence, producing 5,324 reviewer judgments\. We further introduce the User\-Input Risk Index \(UIRI\), the Cognitive Atrophy Risk Index \(ARI\), and trajectory summaries\. Across five LLMs, models show a consistent moderate\-to\-high level of atrophy\-aligned behaviour across single\- and multi\-turn settings\. While models generally respond to overt safety cues, they adapt less reliably when users seek solutions or decisions\. The dominant recurring patterns are directive advice, problem\-solving, recommendation\-heavy responses, topic shifts, and forms of validation that may reinforce dependence rather than reflection\. Our work makes Cognitive Atrophy measurable and provides a foundation for auditing model behaviour in sensitive LLM conversations\. All code and data are released\.

## AI\-Mediated Communication Can Steer Collective Opinion

**Authors:** Stratis Tsirtsis; Kai Rawal; Chris Russell; Brent Mittelstadt; Sandra Wachter

**ID:** 155808 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2jvTv6EcKS>) | [PDF](<https://openreview.net/pdf?id=2jvTv6EcKS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155808>)

Generative artificial intelligence \(AI\) is increasingly integrated into the online platforms where humans exchange opinions; large language models \(LLMs\) now polish users' posts on LinkedIn and provide context for content shared on X\. While prior work has shown that AI can express biased opinions and shape individuals' opinions during human\-AI interactions, less attention has been paid to its influence on collective opinion formation when mediating human\-to\-human communication\. We address this gap via a combination of empirical and theoretical analyses\. We show empirically that LLMs from multiple popular families introduce directional biases when instructed to edit human\-written texts on contested topics, for example, nudging texts in favor of gun control and against atheism\. Building on this observation, we introduce a mathematical model of opinion dynamics in which an AI system sits between users on a social network, transforming the opinions they express and perceive\. By analytically characterizing the equilibrium of this model and performing simulations on real social network data, we show that biases introduced by AI in human\-to\-human communication can be amplified through the network and shift collective opinion in their direction\. In light of these findings, we investigate whether such biases are controllable by online platforms\. We audit the "Explain this post" feature on X and find evidence of pro\-life bias in Grok's outputs on abortion\-related content, which we trace back to specific design choices\.

## Cost Efficient Fairness Audit Under Partial Feedback

**Authors:** Nirjhar Das; mohit sharma; Praharsh Nanavati; Kirankumar Shiragur; Amit Jayant Deshpande

**ID:** 153329 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M86rt803hI>) | [PDF](<https://openreview.net/pdf?id=M86rt803hI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153329>)

We study the problem of auditing the fairness of a given classifier under partial feedback, where true labels are available only for positively classified individuals \(e\.g\., loan repayment outcomes are observed only for approved applicants\)\. We introduce a novel cost model for acquiring additional labeled data, designed to more accurately reflect real\-world costs such as credit assessment, loan processing, and potential defaults\. Our goal is to find optimal fairness audit algorithms that are more cost\-effective than random exploration and natural baselines\.  In our work, we consider two audit settings: a black\-box model with no assumptions on the data distribution, and a mixture model, where features and true labels follow a mixture of exponential family distributions\. In the black\-box setting, we propose a near\-optimal auditing algorithm and show that a natural baseline can be strictly suboptimal\. In the mixture model case, we design a novel algorithm that achieves significantly lower audit cost than the black\-box case under mild assumptions\. Our approach develops novel connections between partial feedback and learning from truncated samples\. We also extend known results on maximum\-a\-posteriori oracles for spherical Gaussian mixtures to handle exponential family mixtures, which may be of independent interest\. Moreover, our algorithms apply to popular fairness metrics including demographic parity, equal opportunity, and equalized odds\. Empirically, we demonstrate strong performance of our algorithms on real\-world fair classification datasets like Adult Income and Law School, consistently outperforming natural baselines by around 50% in terms of audit cost\.

## MT\-JailBench: A Modular Benchmark for Understanding Multi\-Turn Jailbreak Attacks

**Authors:** Xinkai Zhang; Zhipeng Wei; Huanli Gong; Jing Ting Zheng; Yuchen Zhang; Yue Dong; N\. Benjamin Erichson

**ID:** 139838 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1McUwg92V6>) | [PDF](<https://openreview.net/pdf?id=1McUwg92V6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139838>)

Multi\-turn jailbreaks exploit the ability of large language models to accumulate and act on conversational context\. Instead of stating a harmful request directly, an attacker can gradually steer the conversation toward an unsafe answer\. Recent methods demonstrate this risk, but they are usually evaluated as black\-box pipelines with different budgets, judges, retry rules, and strategy generation procedures\. As a result, it is often unclear whether reported gains reflect stronger attack mechanisms or different experimental conditions\. We introduce MT\-JailBench, a modular evaluation framework for benchmarking multi\-turn jailbreaks under fixed conditions\. MT\-JailBench implements each attack as five interacting modules: evaluation function, attack strategy, prompt generation, prompt refinement, and flow control\. This design enables fair comparison across attack methods and component\-wise analysis of what drives attack success\. Using MT\-JailBench, we find that resource budgets and evaluation functions are major confounders: controlling turns, retries, interactions, sampled strategies, and judges substantially change the ranking of attacks\. At the component level, prompt generation accounts for most performance variation, while refinement and flow control provide moderate gains\. We also find that explicit dynamic strategy generation is not always necessary; stochastic sampling from a fixed strategy can rival more elaborate diversification mechanisms\. Finally, recomposing the best components yields a strong attack configuration that outperforms its source attacks and generalizes across diverse target LLMs\. MT\-JailBench therefore provides a  modular framework for comparing multi\-turn jailbreaks, understanding the impact of components, and guiding stronger red\-teaming evaluations\.

## AI Governance Should Prioritize Control and Knowledge Boundaries Over Limiting Intelligence

**Authors:** Hendrik Luuk

**ID:** 140009 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tJJOzoeeQH>) | [PDF](<https://openreview.net/pdf?id=tJJOzoeeQH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140009>)

The rapid proliferation of autonomously acting AI agents makes the governance of agentic systems urgent\. We propose the competence circuit, summarized as IKC \+ KC \+ C, that decomposes an agent's real\-world impact into three pathways: intelligence\-mediated discovery, procedural know\-how, and direct control\. Using the canonical fast\-takeoff debate as a stress test, we formalize the conditions for intelligence\-mediated fast takeoff as a conjunction jointly sufficient for fast catastrophic supremacy, showing that most rely on rapid knowledge acquisition or control attainment rather than intelligence alone\. We operationalize epistemic intelligence as hypothesis\-selection efficiency and validate this framework via stochastic simulation on NK fitness landscapes across six scenarios spanning the conjunctive chain\. An analytic bound supported by the simulations shows that intelligence\-driven speedup is capped by the ratio of competing intelligence levels regardless of task difficulty\. The simulations also expose a fast\-takeoff dilemma: a large intelligence\-driven speedup multiplier materializes only when the hypothesis space is noisy, but the absolute timescale remains constrained by the time required for capability\-critical tests, so a large multiplier need not imply rapid progress\. Simulations also indicate that institutional chokepoints disproportionately slow down superintelligent agents when mandatory authorization delays are large relative to the negligible time these agents spend on unproductive search\. We argue that the dominant safety levers are restricting control and enforcing knowledge boundaries rather than limiting intelligence alone, and this applies to agentic systems at any capability level\. Purely digital domains weaken these bottlenecks, strengthening the case for architectures that intentionally "put physics in the loop\."

## Do Reasoning LLMs Refuse What They Infer in Long Contexts?

**Authors:** Yu Fu; Haz Sameen Shahgir; Zhipeng Wei; Huanli Gong; N\. Benjamin Erichson; Yue Dong

**ID:** 149897 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mPkcux3knp>) | [PDF](<https://openreview.net/pdf?id=mPkcux3knp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149897>)

Long\-context LLMs can infer objectives that are not stated explicitly\. This capability is useful for reasoning over documents, code, retrieved evidence, and tool traces, but it also creates a safety risk: harmful intent can be distributed across a context and become visible only after the model composes the relevant pieces\. Existing safety evaluations mostly test explicit harmful requests, and therefore miss this failure mode\. We introduce compositional reasoning attacks, a long\-context threat model in which harmful requests are decomposed into semantically incomplete fragments and embedded in long contexts\. The final query is neutral; the harmful objective emerges only if the model retrieves the fragments, composes them, and infers the implied goal\. We instantiate this setting using AdvBench requests, varying the required reasoning from Direct Retrieval to Single\-hop Aggregation, Chain Reasoning, and Multi\-hop Deductive Reasoning, and evaluate 15 frontier LLMs on contexts up to 64k tokens\. Models usually refuse harmful requests when they are directly retrievable\. However, refusal rates drop sharply when the same objectives must be reconstructed compositionally, often with larger failures in longer contexts\. Benign reconstruction and fragment\-position analyses indicate that these failures are not mainly retrieval errors: models often infer the harmful objective and then comply\. Increasing inference\-time reasoning improves refusal but remains incomplete and costly\. Our results reveal a long\-context safety gap: current models are better at refusing harmful requests they see than harmful objectives they infer\.

## The Stability of Online Algorithms in Performative Prediction

**Authors:** Gabriele Farina; Juan C Perdomo

**ID:** 151725 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YYzvip7hPZ>) | [PDF](<https://openreview.net/pdf?id=YYzvip7hPZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151725>)

The use of algorithmic predictions in decision\-making leads to a feedback loop where the models we deploy actively influence the data distributions we see, and later use to retrain on\. This dynamic was formalized by Perdomo et al\. 2020 in their work on performative prediction\. Our main result is an unconditional reduction showing that any no\-regret algorithm deployed in performative settings converges to a \(mixed\) performatively stable equilibrium: a solution in which models actively shape data distributions in ways that their own predictions look optimal in hindsight\. Prior to our work, all positive results in this area imposed strong restrictions on how models influenced distributions\. By using a martingale argument and allowing randomization, we avoid any assumption on how populations respond to predictions and sidestep recent hardness results showing that deterministic stable models are in general PPAD\-hard to compute\. Lastly, on a more conceptual note, our connection sheds light on why common algorithms, like gradient descent, are naturally stabilizing and prevent runaway feedback loops\. We hope our work enables future technical transfer of ideas between online optimization and performativity\.

## On the Meta\-Design of Allocation Problems

**Authors:** Unai Fischer Abaigar; Emily Aiken; Christoph Kern; Juan C Perdomo

**ID:** 154878 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AD2GXlx3Zd>) | [PDF](<https://openreview.net/pdf?id=AD2GXlx3Zd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154878>)

There is an extensive literature that studies how to find optimal policies in resource allocation problems, taking the underlying design parameters that define the allocation, such as what data is collected, how many people can be served, and quality of service as fixed constraints\. Yet, from a planner's perspective, these design parameters are themselves optimization variables that are just as important in determining overall welfare as selecting the optimal targeting rule for a given set of constraints\. This realization motivates a rich set of meta\-design questions exploring how planners should make principled decisions about investments in prediction, capacity constraints, and treatment quality, all of which lie upstream of classical policy optimization\. Building on initial theoretical work in this space, our paper has three main contributions\. First, we formally define the broad meta\-design space of resource allocation problems\. Second, we develop empirical tools that enable practitioners to reliably navigate it\. Third, we demonstrate the framework in two real\-world case studies on German employment services and targeted cash transfer programs in Ethiopia\.

## Watermarking Without Standards Is Not AI Governance

**Authors:** Alexander Nemecek; Yuzhou Jiang; Erman Ayday

**ID:** 140044 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c4ObiaN38X>) | [PDF](<https://openreview.net/pdf?id=c4ObiaN38X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140044>)

Watermarking has emerged as a leading technical proposal for attributing generative AI content and is increasingly cited in global governance frameworks\. This position paper argues that current implementations risk serving as symbolic compliance rather than delivering effective oversight\. We identify a growing gap between regulatory expectations and the technical limitations of existing watermarking schemes\. Through analysis of policy proposals and industry practices, we show how incentive structures disincentivize robust, auditable deployments\. To realign watermarking with governance goals, we propose a three\-layer framework encompassing technical standards, audit infrastructure, and enforcement mechanisms\. Without enforceable requirements and independent verification, watermarking will remain inadequate for accountability and ultimately undermine broader efforts in AI safety and regulation\.

## Certified but Private: Scalable Zero\-Knowledge Proofs for the Formal Verification of Neural Networks

**Authors:** Youwei Zhong; Ben Merbaum; Timos Antonopoulos; Ning Luo; CHARALAMPOS PAPAMANTHOU; Katerina Sotiraki; Ruzica Piskac

**ID:** 151824 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XhTzs21IA3>) | [PDF](<https://openreview.net/pdf?id=XhTzs21IA3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151824>)

With the increasing deployment of machine learning models, formal guarantees of the robustness and fairness of these models have become very important in safety\-critical and legal compliance settings\. However, model parameters are often commercial secrets that cannot be disclosed to auditors or end users\. To this end, we present PANDA, a scalable system that uses Zero\-Knowledge Proofs \(ZKPs\) to prove robustness and fairness properties of a model without revealing private model parameters\. PANDA is built on top of CROWN an efficient robustness certification framework that is used in many state\-of\-the\-art formal verification tools for neural networks\. The core contribution of PANDA is a novel algorithm for proving linear relaxation bounds on non\-linear activation layers, achieving simple and lightweight proofs\. Remarkably, our system can generate proofs of local robustness for neural networks with more than 2\.9M parameters in about 4 minutes, and can verify them in under 7\.5 seconds\. Prior ZKP\-based robustness systems are based on exponential\-time algorithms that cannot scale to nontrivial networks\. In contrast, PANDA scales polynomially with the number of neurons in a network, allowing us to support neural networks 3 to 4 orders of magnitude larger than prior works with significantly reduced prover overhead\.

## FairTune Market: A Fair and Trustworthy Marketplace for Fine\-Tuned LLMs via Posted\-Price &amp; Proper\-Scoring Mechanisms

**Authors:** Jiachen Shen; Xingke Yang; Hui Zhong; Aohan Li; TOMOAKI OHTSUKI; Xin Fu; Miao Pan; Zhu Han

**ID:** 151993 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WIuScfyKmS>) | [PDF](<https://openreview.net/pdf?id=WIuScfyKmS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151993>)

Personalized fine\-tuning of Large Language Models \(LLMs\) enhances user experience but incurs substantial computational costs\. Recent studies demonstrate that initializing training from style\-similar fine\-tuned models significantly reduces adaptation overhead, turning these models into reusable, tradable assets\. However, emerging model marketplaces suffer from inherent information asymmetry: providers may misrepresent model capabilities, while model buyers cannot verify utility prior to purchase, leading to adverse selection and potential market collapse\. We introduce FairTune Market to mitigate these risks\. Our framework combines a posted\-price mechanism with a truncated proper scoring rule, conditioning payments on performance under text\-generation verification\. This design incentivizes truthful reporting as an equilibrium strategy while bounding downside risk from stochastic evaluation\. Compared with strong market baselines, FairTune helps buyers find better\-matched starting checkpoints, reducing total downstream fine\-tuning cost by 72\.4\\% while recovering 96\.3\\% of the welfare of an Oracle market with perfect style information\. It also improves market health: provider misreporting drops by 96\.5\\% \(from 0\.424 to 0\.015\), and all providers remain profitable and willing to participate in the default setting\. These gains are robust across market scales, evaluation noise levels, and niche\-provider scenarios\. A semi\-real reuse experiment on sentence\-transformer embeddings from 10 text domains further shows that FairTune achieves near\-Oracle matching in a realistic style\-embedding space\.

