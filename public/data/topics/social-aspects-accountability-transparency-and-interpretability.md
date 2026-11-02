# Social Aspects / Accountability, Transparency and Interpretability

社会影响与可信人工智能 / 问责、透明度与可解释性

159 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Navigating by Old Maps: The Pitfalls of Static Mechanistic Localization in LLM Post\-Training

**Authors:** Hang Chen; Jiaying Zhu; Hongyang Chen; Hongxu Liu; Xinyu Yang; Wenya Wang

**ID:** 149853 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mpKLCN943S>) | [PDF](<https://openreview.net/pdf?id=mpKLCN943S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149853>)

The "Locate\-then\-Update" paradigm has become a predominant approach in the post\-training of large language models \(LLMs\), identifying critical components via mechanistic interpretability for targeted parameter updates\. However, this paradigm rests on a fundamental yet unverified assumption: can mechanisms derived from current static parameters reliably guide future dynamic parameter updates? To investigate this, we systematically track the structural evolution of Transformer circuits throughout the supervised fine\-tuning \(SFT\) process, revealing the underlying dynamics of task mechanisms\. We introduce three novel metrics—Circuit Distance, Circuit Stability, and Circuit Conflict—to analyze circuit evolution across three dimensions: neural migration, semantic stability, and cross\-task interference\. Our empirical results reveal that circuits inherently exhibit "Free Evolution" during parameter updates\. Consequently, static mechanisms extracted from current states inevitably suffer from temporal latency, making them fundamentally inadequate for guiding future states\. Moreover, by deconstructing the "illusion of effectiveness" in existing methods, this work underscores the necessity of "foresight" in mechanistic localization and proposes a predictive framework for future research\.

## Can Large Language Models Develop Gambling Addiction?

**Authors:** Seungpil Lee; Donghyeon Shin; Yunjeong Lee; Sundong Kim

**ID:** 149163 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sNiZd9EAPW>) | [PDF](<https://openreview.net/pdf?id=sNiZd9EAPW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149163>)

_Abstract unavailable from the accessible public sources._

## Mechanistic Interpretability Needs Philosophy

**Authors:** Iwan Williams; Ninell Oldenburg; Ruchira Dhar; Joshua Hatherley; Constanza Fierro; Nina Rajcic; Sandrine R Schiller; Filippos Stamatiou; Anders Søgaard

**ID:** 140011 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t48eq86yVj>) | [PDF](<https://openreview.net/pdf?id=t48eq86yVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140011>)

Mechanistic interpretability \(MI\) aims to explain how neural networks work by uncovering their underlying mechanisms\. As the field grows in influence, it is increasingly important to examine not just models themselves, but the assumptions, concepts and explanatory strategies implicit in MI research\. We argue that mechanistic interpretability needs philosophy as an ongoing partner in clarifying its concepts, refining its methods, and navigating the epistemic and ethical complexities of interpreting AI systems\. There is significant unrealised potential for progress in MI to be gained through deeper engagement with philosophers and philosophical frameworks\. Taking three open problems from the MI literature as examples, this paper illustrates the value philosophy can add to MI research, and outlines a path toward deeper interdisciplinary dialogue\.

## Can LLMs explain themselves truthfully with code?

**Authors:** Nhi Nguyen; Shauli Ravfogel; Rajesh Ranganath

**ID:** 150242 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jg5HryRQQg>) | [PDF](<https://openreview.net/pdf?id=jg5HryRQQg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150242>)

Large language models \(LLMs\) are increasingly used in high\-stakes settings where they are expected to justify their predictions, and a common approach to understanding LLM predictions is via self\-generated free\-text explanations\. However, free\-text explanations are instance\-wise and non\-executable, making it hard to evaluate their alignment with model behavior or explain dataset\-level behavior in a compact, human\-interpretability manner\. We study code as an executable alternative to free\-text, enabling automatic evaluation and dataset\-level explanation, and ask whether LLMs can \\emph\{consistently\} explain their behaviors with code\. This automatic verification enables a generation procedure that samples multiple candidate programs and selects the most consistent one\. Using three open\-source code\-capable models and eight tasks with varying levels of linguistic difficulty, we study when LLMs produce consistent code explanations\. We find that models can produce highly consistent code explanations in a subset of settings, but strong consistency is not the norm\. Consistency is substantially lower for tasks involving more complex linguistic components, where performance is often near random guessing across models\. In these harder settings, generated programs are longer but not more structurally complex, and increasingly rely on hard\-coded linguistic patterns from the input\. These findings suggest two possibilities: either LLMs are not good at producing compact explanations of their behavior, or some behaviors require dense, distributed computation that cannot be explained by compact, human\-interpretable programs\. Finally, we find that model\-internal representations do not reliably predict when code explanations will be consistent, suggesting that LLMs do not know when they can or cannot explain their own behavior with code\. Our work highlights code as a compact and verifiable alternative to free\-text explanations, while also revealing limitations in using compact, human\-understandable explanations to fully understand LLM behavior\.

## Semiparametric Efficient Tests for Interpretable Distributional Treatment Effects

**Authors:** Houssam Zenati; Arthur Gretton

**ID:** 150512 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hXlL2JXxiW>) | [PDF](<https://openreview.net/pdf?id=hXlL2JXxiW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150512>)

Distributional treatment effects can be invisible to means: a treatment may preserve average outcomes while changing tails, modes, dispersion, or rare\-event probabilities\. Kernel tests can detect discrepancies between interventional outcome laws, but global tests do not reveal where the laws differ\. We propose DR\-ME, to our knowledge the first semiparametrically efficient finite\-location test for interpretable distributional treatment effects\. DR\-ME evaluates an interventional kernel witness at learned outcome locations, returning causal\-discrepancy coordinates rather than only a global rejection\. From observational data, we derive orthogonal doubly robust kernel features whose centered oracle form is the canonical gradient of this finite witness\. For fixed locations, we characterize the local testing limit: DR\-ME is chi\-square calibrated under the null, has noncentral chi\-square local power, and uses the covariance whitening that optimizes local signal\-to\-noise for discrepancies visible through the selected coordinates\. This efficient local\-power geometry yields a principled location\-learning criterion, with sample splitting preserving post\-selection validity\. Experiments show near\-nominal type\-I error, competitive power against global doubly robust kernel tests, and interpretable learned locations that localize distributional effects in a semi\-synthetic medical\-imaging study\.

## ScopeSAE: Model\-Scope Feature Discovery with Interpretable Layer Selection

**Authors:** Qingwen Zeng; Craig Jin; Shuyu Meng; Linghan Huang; Jiayi Zhang; Chenglin Wu; Ling Chen; Huaming Chen

**ID:** 153114 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnmH2t52Uc>) | [PDF](<https://openreview.net/pdf?id=NnmH2t52Uc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153114>)

_Abstract unavailable from the accessible public sources._

## Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI

**Authors:** Gizem Karagoz; Tanir Özçelebi; Nirvana Meratnia

**ID:** 139846 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0x8H3vwcGg>) | [PDF](<https://openreview.net/pdf?id=0x8H3vwcGg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139846>)

_Abstract unavailable from the accessible public sources._

## Sanity Checks for Sparse Autoencoders: Do SAEs Beat Random Baselines?

**Authors:** Anton Korznikov; Andrey V Galichin; Alexey Dontsov; Oleg Rogov; Ivan Oseledets; Elena Tutubalina

**ID:** 139059 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nWEGPx5sz8>) | [PDF](<https://openreview.net/pdf?id=nWEGPx5sz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139059>)

Sparse Autoencoders \(SAEs\) have emerged as a promising tool for interpreting neural networks by decomposing their activations into sparse sets of human\-interpretable features\. Despite much excitement, a growing number of negative results in downstream tasks casts doubt on whether SAEs recover meaningful features\. To directly investigate this, we perform two complementary evaluations\. On a synthetic setup with known ground‑truth features, we demonstrate that three out of four state‑of‑the‑art SAE architectures recover only 7–9\\% of true features despite achieving around 71\\% explained variance, showing that strong reconstruction alone is insufficient to guarantee meaningful feature recovery\. To evaluate SAEs on real activations, we introduce three baselines that constrain SAE feature directions or their activation patterns to random values\. Through extensive experiments across multiple SAE architectures, we show that our baselines match fully\-trained SAEs in interpretability \(0\.87 vs 0\.90\), sparse probing \(0\.69 vs 0\.72\), and causal editing \(0\.73 vs 0\.72\)\. These results show that current evaluation metrics are insufficient to certify that SAEs have learned meaningful features, and we offer our baselines as a reusable protocol for future SAE evaluation\.

## Mutual Predictability Decomposition: Learning Interpretable Cross\-Set Structure via Bi\-Directional Prediction

**Authors:** Zixi Qin; Wanqing Li; Yuanhao Zhuo; Guoxin Su

**ID:** 148650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wA8X8awGkg>) | [PDF](<https://openreview.net/pdf?id=wA8X8awGkg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148650>)

Understanding relationships between variable sets is fundamental in machine learning, particularly in medical data analysis\. Existing methods typically provide only coarse shared/private partitioning of variables, limiting their ability to reveal finer\-grained predictive structures across views\. We propose Mutual Predictability Decomposition \(MPD\), a framework that decomposes the variables in each view into three subsets: mutually predictable variables that can be inferred across views, auxiliary variables that are themselves not cross\-view predictable but are necessary for predicting the mutually predictable subset, and unpredictable variables that do not contribute to cross\-view predictability\. MPD is formulated as a coupled bi\-directional prediction problem with sparse variable assignment, and optimized through a differentiable relaxation implemented using gated neural networks\. Experiments on synthetic and real\-world medical datasets demonstrate that MPD recovers interpretable cross\-view structures, improves cross\-view prediction, and provides more informative decompositions than existing relationship analysis methods\. Code will be available on GitHub upon acceptance\.

## Learning a Unified Cross\-Model Semantic Dictionary via Gated Bottleneck Sparse Autoencoders

**Authors:** Jinchi Zhu; Tie Luo

**ID:** 149262 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rcO6JNVYN5>) | [PDF](<https://openreview.net/pdf?id=rcO6JNVYN5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149262>)

Foundation models pretrained on similar data distributions tend to encode semantically aligned concepts; yet these representations remain entangled with model\-specific inductive biases, which hinders both unified interpretability and cross\-model feature reuse\. Existing approaches address this by aligning concepts across model\-specific representation spaces, but do not explicitly account for model\-specific biases, resulting in limited cross\-model reconstruction fidelity \(low $R^2$\) and poor feature transferability\. We propose the \*Gated Bottleneck Sparse Autoencoder\* \(GB\-SAE\), a framework that takes multiple—homogeneous or heterogeneous—foundation models as input and factorizes their representations into shared and private components\. GB\-SAE jointly learns a single model\-agnostic semantic dictionary and, for each model, a private residual dictionary, via a learnable gating mechanism that encourages competition between the two\. Conceptually, we cast unified multi\-model interpretability as a representation factorization problem and solve it through bottlenecked sparse dictionary learning\. Empirically, GB\-SAE achieves unified and faithful interpretability across diverse architectures, high reusability of the learned shared dictionary, and strong generalization to downstream tasks—capabilities that alignment\-based paradigms, by design, cannot fully support\.

## When Is Rank\-1 Steering Cheap? Geometry, Granularity, and Budgeted Search

**Authors:** John Robertson; Jianing Zhu; Haris Vikalo; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 148838 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umOBxhQMmJ>) | [PDF](<https://openreview.net/pdf?id=umOBxhQMmJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148838>)

Activation steering offers a lightweight way to control large language models without retraining, but its effectiveness varies sharply across concepts\. Prior work often interprets this variability as evidence that many concepts are not well captured by a single steering direction\. We argue instead that much of this variability reflects search difficulty: a useful rank\-1 intervention often exists, but finding it can be expensive\. We formalize rank\-1 steering as a budget\-constrained optimization problem over intervention layer and coefficient\. Across the concepts and model families, prompt\-boundary directional alignment predicts where effective interventions are likely to occur, enabling geometry\-guided search that reaches high utility with substantially fewer evaluations, reducing the trials needed to recover 95\\% of best\-found utility by 39\.8\\% on average across three model families\. To explain why some concepts remain expensive even under better search, we introduce concept granularity, a measure of directional heterogeneity across contrastive contexts\. Granularity distinguishes concepts whose difference vectors share a stable global direction from those where prompts agree locally within each input but the utility\-maximizing direction rotates systematically across inputs\. Higher granularity is associated with both slower convergence and lower best\-found steering performance \(Pearson $r = 0\.44$ with trials\-to\-95\\%, $p &lt; 0\.001$, and $r=\-0\.46$ with best\-found utility, $p &lt; 0\.001$\)\. These observations suggest a practical workflow rather than a single universal vector\-construction rule\. We therefore present GRACE, a Granularity\- and Representation\-Aware Concept Engineering framework that uses activation geometry to diagnose the dominant source of steering difficulty, choose the appropriate remedy, and allocate optimization effort more efficiently\. Our results shift the frame of activation steering from "when does rank\-1 fail?" to "when is rank\-1 cheap and stable?", and turn activation geometry from a descriptive tool into an actionable prior for LLM control\.

## Loyalty Capture: Reporting Relationships and Structural Sycophancy in Frontier AI Models

**Authors:** Eric So; Alex Imas

**ID:** 148352 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yWb30l4iXg>) | [PDF](<https://openreview.net/pdf?id=yWb30l4iXg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148352>)

_Abstract unavailable from the accessible public sources._

## When Is Rank\-1 Steering Cheap? Geometry, Granularity, and Budgeted Search

**Authors:** John Robertson; Jianing Zhu; Haris Vikalo; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 148838\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148838

[Paper](<https://openreview.net/forum?id=umOBxhQMmJ>) | [PDF](<https://openreview.net/pdf?id=umOBxhQMmJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148838>)

Activation steering offers a lightweight way to control large language models without retraining, but its effectiveness varies sharply across concepts\. Prior work often interprets this variability as evidence that many concepts are not well captured by a single steering direction\. We argue instead that much of this variability reflects search difficulty: a useful rank\-1 intervention often exists, but finding it can be expensive\. We formalize rank\-1 steering as a budget\-constrained optimization problem over intervention layer and coefficient\. Across the concepts and model families, prompt\-boundary directional alignment predicts where effective interventions are likely to occur, enabling geometry\-guided search that reaches high utility with substantially fewer evaluations, reducing the trials needed to recover 95\\% of best\-found utility by 39\.8\\% on average across three model families\. To explain why some concepts remain expensive even under better search, we introduce concept granularity, a measure of directional heterogeneity across contrastive contexts\. Granularity distinguishes concepts whose difference vectors share a stable global direction from those where prompts agree locally within each input but the utility\-maximizing direction rotates systematically across inputs\. Higher granularity is associated with both slower convergence and lower best\-found steering performance \(Pearson $r = 0\.44$ with trials\-to\-95\\%, $p &lt; 0\.001$, and $r=\-0\.46$ with best\-found utility, $p &lt; 0\.001$\)\. These observations suggest a practical workflow rather than a single universal vector\-construction rule\. We therefore present GRACE, a Granularity\- and Representation\-Aware Concept Engineering framework that uses activation geometry to diagnose the dominant source of steering difficulty, choose the appropriate remedy, and allocate optimization effort more efficiently\. Our results shift the frame of activation steering from "when does rank\-1 fail?" to "when is rank\-1 cheap and stable?", and turn activation geometry from a descriptive tool into an actionable prior for LLM control\.

## Mechanistic Interpretability of EEG Foundation Models via Sparse Autoencoders

**Authors:** William Lehn\-Schiøler; Magnus R Kjaer; Rahul Thapa; Magnus G Pedersen; Anton M Storgaard; Nick Williams; Andreas Brink\-Kjaer; Tue Lehn\-schiøler; Sadasivan Puthusserypady; James Zou; Lars Kai Hansen

**ID:** 150909 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eWfHTYapcq>) | [PDF](<https://openreview.net/pdf?id=eWfHTYapcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150909>)

EEG foundation models achieve state\-of\-the\-art clinical performance, yet the internal computations driving their predictions remain opaque: a barrier to clinical trust\. We apply TopK Sparse Autoencoders \(SAEs\) across three architecturally distinct EEG transformers: SleepFM, REVE, and LaBraM to extract sparse feature dictionaries from their embeddings\. By grounding these features in a clinical taxonomy \(abnormality, age, sex, and medication\), we benchmark monosemanticity and entanglement across architectures\. A single hyperparameter procedure, driven by an intrinsic dictionary health audit, transfers robustly across all three architectures\. Via concept steering, we introduce a "target vs\. off\-target" probe area metric to quantify steering selectivity and reveal three operational regimes: selectively steerable, encoded but entangled, and non\-encoded\. This framework exposes critical representational failures: "wrecking\-ball" interventions that collapse global model performance, and clinical entanglements, such as age–pathology confounding, where it is impossible to suppress one concept without corrupting the other\. Finally, a spectral decoder maps these interventions back to the amplitude spectrum, translating latent manipulations into physiologically interpretable frequency signatures, such as pathological slow\-wave suppression and $\\alpha$\-band restoration\.

## Intrinsically Interpretable Attention via Sparse Post\-Training

**Authors:** Florent Draye; Anson Lei; Hsiao\-Ru Pan; Ingmar Posner; Bernhard Schölkopf

**ID:** 152659 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RMkXEqB3sY>) | [PDF](<https://openreview.net/pdf?id=RMkXEqB3sY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152659>)

_Abstract unavailable from the accessible public sources._

## How do Small Transformer Models Learn Hard Math Tasks?

**Authors:** Eshika Saxena; Kristin E\. Lauter

**ID:** 148782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v7nparSpqA>) | [PDF](<https://openreview.net/pdf?id=v7nparSpqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148782>)

Recent works have demonstrated that transformers can be trained to recover sparse, binary cryptographic secrets in the Learning With Errors \(LWE\) problem, a foundational problem that underlies many post\-quantum cryptographic schemes\. However, as architectures have evolved to efficient encoder\-only models, the mechanism by which these models recover the cryptographic secret has become more opaque\. In this paper, we present the first layer\-wise and embedding\-level mechanistic interpretability analysis of encoder\-only transformers trained on LWE samples\. We reveal a surprising phenomenon: despite achieving near\-zero exact prediction accuracy on the training objective, the models successfully recover the secret by bypassing the standard predictive pathways\. We use dimensionality reduction, causal intervention, and linear probing and find that the secret is implicitly present in the positional embedding\. Building on this mechanistic understanding, we introduce an architectural intervention that applies $L\_1$ sparsity regularization directly to the positional embeddings\. This modification forces the model to explicitly isolate the latent secret, transforming the computationally expensive post\-hoc secret recovery process into a direct, human\-interpretable parameter inspection\. Our findings provide fundamental insights into how transformers allocate representational capacity when faced with high\-noise, structured combinatorial problems\.

## Finding Interpretable Prompt\-Specific Circuits in Language Models

**Authors:** Gabriel Franco; Lucas M Tassis; Azalea Rohr; Mark Crovella

**ID:** 154226 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FHfc57fnQe>) | [PDF](<https://openreview.net/pdf?id=FHfc57fnQe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154226>)

Understanding the internal circuits that language models use to solve tasks remains a central challenge in mechanistic interpretability\. A crucial part of finding circuits is understanding why each attention head attends where it does\. To this end, we introduce \*\*ACC\+\+\*\*, an improved circuit\-tracing method based on the principle of \*attention\-causal communication\* \(ACC\) \[1\], which identifies \*signals\*, i\.e\., contents of low dimensional subspaces that cause attention on a token pair\. ACC\+\+ extracts circuits from a \*single forward pass\*, without replacement models or patching\. Circuits identified by ACC\+\+ consist of components that are causal for the model's attention decisions, together with the low\-dimensional signals used to communicate between them\. Here, we first detail the conceptual advances that ACC\+\+ makes over previous work\. We then show that across multiple models, a substantial portion of ACC\+\+ signals are \*interpretable\*: many signals admit a short natural\-language description\. We next present a number of new insights into model behavior obtained via ACC\+\+\. First, we use ACC\+\+'s interpretable circuits to characterize the sensitivity of indirect object identification \(IOI\) circuits to prompt structure\. We find that prompt\-specific circuits form well\-defined clusters, and across clusters, heads receive systematically different signals corresponding to distinct mechanisms for identifying the IO name\. Next, in multilingual IOI, ACC\+\+ circuits show that while model \*components\* are reused across languages, \*signals\* are often language\-specific\. In a four\-language IOI case study, cross\-language circuit distances are consistent with linguistic relatedness\. Together, these results show that ACC\+\+ can shed light on a broad spectrum of model behaviors\.

## Scaling Laws for SAE Training Data

**Authors:** Nikita Koryagin; Nikita Balagansky; Daniil Gavrilov

**ID:** 148634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wGJ8YYzO5w>) | [PDF](<https://openreview.net/pdf?id=wGJ8YYzO5w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148634>)

Sparse autoencoder \(SAE\) training is often bottlenecked by activation storage\. We show that the stored activation buffer can be far smaller than the total SAE training budget: quality depends mainly on the number of \\emph\{unique\} activations, not on whether every training token is fresh\. After a short diversity\-limited regime, additional fresh activations provide little benefit; replaying the same buffer preserves both reconstruction and interpretability performance\. We capture this diversity\-\-repetition tradeoff with a data\-constrained scaling law and validate it across dictionary sizes, token budgets, Llama\-3\.1 and Qwen3 models, early/middle/late layers, BatchTopK/TopK/JumpReLU SAEs, and downstream metrics including EV, reconstruction MSE, feature absorption, automated interpretability, and sparse probing\. The resulting buffer\-sizing rule is simple: choose the smallest activation buffer that reaches the quality plateau, then use replay to spend the remaining training budget\. In our experiments, this reduces activation storage by $8\\text\{\-\-\}64\\times$ with negligible quality loss\.

## Winning the Symmetry Lottery: Learning Invariance from Data Augmentations with Transformers

**Authors:** Eduardo Santos\-Escriche; Valerie Engelmayer; Ya\-Wei Eileen Lin; Stefanie Jegelka

**ID:** 149811 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nBGsp2c8X6>) | [PDF](<https://openreview.net/pdf?id=nBGsp2c8X6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149811>)

Training transformer\-based architectures with data augmentation has become an increasingly popular approach for equivariant machine learning\. Despite its empirical success, the interplay between the transformer architecture, invariance to different symmetries, and augmentation budgets remains underexplored\. In this paper, we investigate the ability of a vanilla transformer to learn a wide range of symmetries through limited data augmentation\. We identify that it performs strongly for common angle\-preserving symmetries, while it struggles with non\-angle\-preserving ones\. Within the angle\-preserving family, we further find that base subgroups such as translation, rotation, and scale are learned more easily and accurately than compositional groups that combine them\. Motivated by this observation, we perform a structural analysis of the trained models and identify interpretable mechanisms that induce invariance to each base angle\-preserving symmetry\. These findings support what we coin winning the \*Symmetry Lottery\*: the transformer architecture is aligned with learning mechanisms invariant to symmetries that happen to be prevalent in scientific domains\.

## Mechanistic Critics for Sample\-Efficient NPU Design\-Space Exploration

**Authors:** Yicheng He; Yuqi Xue; Tianyang Wu; Jian Huang; Bin Hu

**ID:** 154999 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Jr2FEdVHP>) | [PDF](<https://openreview.net/pdf?id=9Jr2FEdVHP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154999>)

_Abstract unavailable from the accessible public sources._

## Attention Trajectories as a Diagnostic Axis for Deep Reinforcement Learning

**Authors:** Charlotte Beylier; Hannah Selder; Arthur Fleig; Simon M\. Hofmann; Nico Scherf

**ID:** 156756 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0aa9zthk7k>) | [PDF](<https://openreview.net/pdf?id=0aa9zthk7k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156756>)

_Abstract unavailable from the accessible public sources._

## Capturing In\-Context Learning Dynamics with Task Operators

**Authors:** Guangzhi Xiong; Zhenghao He; Bohan Liu; Sanchit Sinha; Wenqian Ye; Aidong Zhang

**ID:** 149094 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sx3XAheEWd>) | [PDF](<https://openreview.net/pdf?id=sx3XAheEWd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149094>)

In\-context learning \(ICL\) enables language models to perform new tasks from demonstrations without weight updates\. However, every ICL inference requires processing the full set of examples, resulting in inefficient deployments, and how ICL works mechanistically is not fully understood\. Prior work compresses ICL into fixed activation vectors extracted from specific layers or positions, but these input\-independent interventions fail on complex tasks where the output depends on fine\-grained interactions with the input\. By analyzing the ICL forward pass, we show that each attention head's output is an affine transformation of its context\-masked counterpart, and that the parameters of this transformation are empirically stable across samples for a given task\. Building on this, we introduce Task Operator \(TO\), which replays this transformation as an analytically derived update to the attention output projection\. Across lexical, algorithmic, and reasoning tasks, TO achieves the best overall performance among prior methods and substantially narrows the gap between zero\-shot inference and ICL\. We further show that the extracted knowledge concentrates in a task\-specific sparse circuit across layers and positions, and that averaging operators from disjoint demonstration batches enables effective many\-shot scaling without expanding the context window\.

## A Theory of Spatial Continuous Attractors in Hopfield Energy Landscapes

**Authors:** Chong Li; Xiangyang Xue; Jianfeng Feng; Taiping Zeng

**ID:** 155828 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2aMmeCVNCj>) | [PDF](<https://openreview.net/pdf?id=2aMmeCVNCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155828>)

Spatial cognition requires stable neural manifolds of orientation and location that track self\-motion and sensory cues\.     Continuous attractors provide a natural dynamical principle, but learning such mechanisms that form and control manifolds with theoretical guarantees remains difficult\.   We propose Spatial Energy Attractor Learning \(SEAL\), a theory of neurodynamics learning for spatial cognition, where continuous spatial representations arise as learned low\-energy manifolds in Hopfield energy landscapes through population\-level Fourier energy learning\.   For head\-direction and grid\-cell systems, Fourier energy landscapes yield ring and torus attractors with learned normal attraction and input\-driven tangent transport\.    We prove that Fourier construction is a special case of a general Hopfield\-compatible energy extension whose autonomous dynamics preserve energy descent and whose expressive energy families approximate target attractor energies and restoring fields\.    Experiments on HD and grid\-cell populations show that the learned energies restore perturbed states to ring and torus manifolds, stabilize velocity\-driven moving bumps across multiple input regimes, and induce continuous\-attractor interactive structures with local excitation and surround inhibition\.   Together, these results provide a stable, learnable, and biologically interpretable energy\-based account of continuous spatial representation\.

## The parameters in weight\-sparse transformers are interpretable

**Authors:** Arnau Marin\-Llobet; Stefan Heimersheim

**ID:** 150805 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGxBOgrNrv>) | [PDF](<https://openreview.net/pdf?id=fGxBOgrNrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150805>)

Understanding what individual components of a neural network do is a central goal of mechanistic interpretability, and a valuable tool for auditing or editing trained models\. The dominant approach picks a behavior and reverse\-engineers the circuit that implements it\. This gives a local picture, since we learn what a weight does in service of one task on one distribution, but not what it does in general\. We therefore ask the reverse question\. Can we pick any single nonzero parameter in a trained transformer and say what it does, without first choosing a behavior? Until recently, this was out of reach, because the weight basis of a standard transformer is not aligned with the computations the network performs \(Elhage, et al\. 2022\)\. However, weight\-sparse transformers \(Gao et al\. 2025\) offer an alternative path forward\. By training most weights to zero, the surviving weights align more cleanly with computation, which opens the door to per\-weight interpretation\. In this work, we introduce an automated LLM\-pipeline that produces a short, human\-readable account of when a given weight matters, verifies the account on held\-out data, and applies it at scale to compare two weight\-sparse transformers against two dense controls\. Empirically, we find that a significant percentage of nonzero weights \(17\-35%\) on sparse transformers are interpretable, compared to 5\-9% on the equivalent dense model and Pythia\-70m\. Together these results suggest that sparse training produces transformers whose individual weights are interpretable to a degree not achievable in conventional transformers, providing a potential starting point for per\-weight interpretation of larger models

## Multistage Defer Trees for Hybrid Interpretability: If at First You Can't Succeed, Tree Again

**Authors:** Zakk Heile; Hayden McTavish; Margo Seltzer; Cynthia Rudin

**ID:** 151253 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bl5HDT7AO1>) | [PDF](<https://openreview.net/pdf?id=bl5HDT7AO1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151253>)

Recent work has shown that well\-optimized individual decision trees can match complex black box models in some settings, primarily in noisy domains\. For the remaining settings, however, complex ensembled compositions of trees often achieve higher accuracy at the cost of interpretability, leaving practitioners with difficult modeling decisions along an accuracy\-interpretability tradeoff\. Ideally, we would like to classify as much of the data as possible with one or a small number of trees, achieving interpretability for most samples while maintaining state\-of\-the\-art accuracy\. We introduce Multistage Defer Trees: a sequence of sparse decision trees that each make predictions for most samples, while deferring a small proportion to the next tree in the sequence or, ultimately, to a black box\. We demonstrate that we can train this model class to match the performance of complex tree\-based ensembles while routing most samples through only one or a small number of sparse decision trees\. We discuss a range of techniques for training these models while maintaining simplicity\. Our method expands the accuracy\-\-interpretability frontier in settings where single\-tree methods remain insufficient, demonstrating that even when complex models are necessary, they need not be fully opaque\.

## Interpretable Multiway\-Split Trees

**Authors:** Bo Chi; Yulin Zhang; Chudi Zhong; Cynthia Rudin

**ID:** 155490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5CCv49ib3F>) | [PDF](<https://openreview.net/pdf?id=5CCv49ib3F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155490>)

Decision tree optimization is fundamental to interpretable machine learning, yet most tree learning algorithms are restricted to binary splits\. This restriction can produce unnecessarily deep trees when the underlying decision logic is naturally multi\-valued\. Multiway\-split trees address this, but finding sparse yet accurate ones is more challenging, as the number of possible partitions at each node grows combinatorially with the number of feature bins\. We introduce SPLINTER \(SParse Lookahead for Interpretable N\-way Trees by Eliminative Ranking\), a dynamic programming and branch\-and\-bound\-based framework that combines efficient candidate generation with pruning bounds to find sparse, accurate multiway\-split trees\. Our empirical results show that our methods produce trees that achieve higher accuracy at a greater decision sparsity \(shorter path lengths\) than greedy multiway and near\-optimal binary\-split tree baselines, while remaining practical to train\. We further extend the framework to approximate the Rashomon set of near\-optimal multiway\-split trees, allowing users to inspect multiple sparse and accurate alternatives\.

## Compressing Collections of Trees with Decision Equivalence

**Authors:** Hayden McTavish; Jon Donnelly; Margo Seltzer; Cynthia Rudin

**ID:** 150720 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fwHieiqwl7>) | [PDF](<https://openreview.net/pdf?id=fwHieiqwl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150720>)

Decision trees with binary leaves are fundamental building blocks in classical machine learning\. While individual trees can be used as strong interpretable classifiers, they frequently serve as members of large collections instead: primarily as components of powerful ensembles, but also as one of the few model classes for which the entire set of near\-optimal models \(the Rashomon set\) can be analyzed\. Both types of collections are often more complex than necessary, because there are many decision tree representations for the same decision boundary, imposing unnecessary computational costs in ensembles and complicating theoretical work on Rashomon sets\. We propose methods to reduce collections of trees to a subset representing each unique decision boundary in the collection, with each tree in its sparsest equivalent form\. In so doing, we improve the scalability of removing provably redundant classifiers in a Rashomon set\. We also compress many shallow Adaboost ensembles by &gt;15\\% of their total number of leaves, while exactly preserving the models' decisions and probability estimates on any possible observation\. These methods allow practitioners to run more efficient computations over compressed collections of trees, and remove arbitrary complexity when analyzing and understanding them\.

## Layerwise Progressive Freezing: A Training Scaffold for Depth\-Scalable Binary Networks

**Authors:** Evan G Smith; Bashima Islam

**ID:** 150400 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJdFhf3jyg>) | [PDF](<https://openreview.net/pdf?id=iJdFhf3jyg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150400>)

Training binary neural networks \(BNNs\) from scratch is dominated by the straight\-through estimator \(STE\), whose forward/backward mismatch produces severe accuracy degradation as networks deepen\. We study an orthogonal axis: when and where binarization is enforced during training\. We introduce StoMPP \(Stochastic Masked Partial Progressive Binarization\), which gradually replaces clipped weights and activations with their hard binary counterparts layer by layer from input to output, using stochastic partial masks with soft refresh\. StoMPP delivers two complementary benefits\. As a standalone training rule, it provides a fully STE\-free procedure that improves over vanilla STE with gains that grow with depth \(ResNet\-50 BNN: \+18\.0/\+13\.5/\+3\.8 on CIFAR\-10/100/ImageNet\), and the pattern holds across ResNet\-18/34/50, MobileNetV2, and BERT fine\-tuning\. Composed with surrogate gradients by applying STE only to frozen entries, it reaches \+27\.1/\+19\.8/\+17\.7 over vanilla STE on the same setting\. Underlying both regimes is a single mechanistic finding: progression order is decisive\. Forward layerwise progression prevents depth collapse, reverse progression collapses to near\-chance, and binary\-weight networks \(without binary activations\) are insensitive to order\. We trace this asymmetry to activation\-induced gradient blockades: a committed binary activation severs gradient flow upstream, and ordering controls when these blockades form\. To isolate the progression's contribution from any benefit conferred by STE, we conduct all ablations in the STE\-free regime; the resulting characterization \(schedule, refresh, ordering, dynamics\) thus reflects the progression itself rather than its interaction with surrogate gradients\.

## The Geometric Wall: Manifold Structure Predicts Layerwise Sparse Autoencoder Scaling Laws

**Authors:** Eslam Zaher; Maciej Trzaskowski; Quan Nguyen; Fred Roosta

**ID:** 155185 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7eqIUZyAMz>) | [PDF](<https://openreview.net/pdf?id=7eqIUZyAMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155185>)

Sparse autoencoders \(SAEs\) operationalise the linear representation hypothesis: they reconstruct model activations as sparse linear combinations of interpretable dictionary atoms, on the implicit assumption that activation space is well approximated by a globally linear structure\. Their reconstruction error varies sharply across layers in ways that existing scaling laws, fitted at single layers, do not explain\. We argue that this variation is the empirical trace of a geometric mismatch: where the activation manifold is curved and its intrinsic dimension varies across layers, no sparse linear dictionary can match it uniformly, and the SAE's width\-sparsity scaling becomes a layer\-dependent function of manifold structure rather than a single universal law\. We conduct the first cross\-layer SAE scaling study, fitting and regressing on 844 residual\-stream Gemma Scope SAE checkpoints across 68 layers of Gemma 2 2B and 9B\. Stage 1 fits a per\-layer scaling\-law surface; Stage 2 regresses the fitted parameters and the derived per\-layer width exponents on four layerwise geometric summaries\. We find that manifold geometry predicts the per\-layer width exponent in both models, and that the same regression coefficients learnt on one model predict the other model's per\-layer exponents under cross\-model transfer, indicating a transferable geometric law\. At the showcase layers where richer width grids permit identification of the asymptotic floor, we find that the fitted floor tracks the layerwise geometric ordering: higher curvature and intrinsic dimension correspond to higher floor, consistent with the irreducible second\-order residual that any sparse linear approximation of a curved manifold must leave behind\. SAEs thus encounter not a finite\-resource ceiling but a geometry\-dependent wall, set by the manifold they are trying to reconstruct\.

## Comparing Explanations is not Enough,Explain the Change: New Standards are Needed to Explain Behavioral Shifts in Large Language Models

**Authors:** Martino Ciaperoni; Marzio Di Vece; Roberto Pellungrini; Luca Pappalardo; Fosca Giannotti; Francesco Giannini

**ID:** 139995 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y0jWumzUxx>) | [PDF](<https://openreview.net/pdf?id=y0jWumzUxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139995>)

Large\-scale foundation models exhibit \*behavioral shifts\* when subjected to interventions such as scaling, fine\-tuning, reinforcement learning with human feedback, or in\-context learning\. Current explainability methods are structurally ill\-suited to explain these shifts, because either they treat models as static objects, as traditional eXplainable AI \($XAI$\) approaches do, or merely compare independent explanations across different checkpoints of a model\. As a result, these approaches fail to explain the functional transition between two model instances in which a certain behavior has shifted following an intervention\. This gap creates significant governance risks across jurisdictions including the EU AI Act, US state legislation, and Chinese AI regulations, which require documenting causal chains for substantial system modifications\.  This position paper argues that explaining behavioral shifts in large language models requires a principled approach that treats the shift itself as the primary object of explanation: namely, one that explains how and why an intervention transforms a reference model into an updated model with different behavior\. To support this claim, we introduce \*Comparative\* $XAI$ \($XAI\_\{\\Delta\}$\), a novel $XAI$ paradigm aimed at explaining the difference between two model checkpoints where a behavior has shifted, together with a set of desiderata specifying what $XAI\_\{\\Delta\}$ explainers and explanations must satisfy, including comparability, validity, actionability, and monitoring, with the goal of grounding model auditing in explicit, measurable requirements\. Finally, we provide preliminary evidence suggesting the need for $XAI\_\{\\Delta\}$ in practice through some illustrative experiments, compiling the resulting findings into a transition report directly usable for governance and incident documentation\.

## User Embeddings are Superpositions of Interpretable Behavioral Modes

**Authors:** Jonathan Kozaczuk; Zheng Dong; Noyan Evirgen; Keivan Majidi; Eddie K Ng; Chris Porter; Qi Zhao; Jia Geng; Changmao Li; Brandon Feng

**ID:** 155845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2T4hO6DOUD>) | [PDF](<https://openreview.net/pdf?id=2T4hO6DOUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155845>)

User embeddings are central components of modern recommendation, personalization, and behavioral modeling systems\. Though these embeddings can compactly encode rich behavioral information, they are inherently dense and opaque, limiting interpretability\. To address this gap, we show that user embeddings can be understood as sparse superpositions of interpretable behavioral modes\. This structure is directly predicted by generative models of user behavior for linear embeddings and extends approximately to transformer representations by the superposition hypothesis\. Superimposed modes can naturally be recovered by sparse dictionary learning methods, and recovered modes can be automatically named and queried in natural language\. On synthetic data with known ground\-truth modes, sparse autoencoders \(SAEs\) outperform classical sparse baselines on mode recovery and produce more monosemantic latents, even when the number of modes exceeds the embedding dimension\. Applied to both classical \(SVD on open e\-commerce\) and transformer\-based \(SASRec/BERT4Rec on MovieLens 1M\) user embeddings, the recovered SAE dictionaries are near\-orthogonal, and their natural\-language labels enable zero\-shot audience retrieval over embeddings never trained on text\. At matched sparsity, SAE decompositions produce more behaviorally distinct features than classical sparse baselines, with retrieval accuracy comparable to both classical sparse methods and text\-embedding baselines and more diverse audience characterizations\. The framework is post\-hoc and model\-agnostic, requiring no modification to the upstream embedding system\.

## Generalized Priority\-Aware Shapley Value

**Authors:** Kiljae Lee; Ziqi Liu; Weijing Tang; Yuan Zhang

**ID:** 152117 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VPwZ5z3kGM>) | [PDF](<https://openreview.net/pdf?id=VPwZ5z3kGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152117>)

Shapley value and its priority\-aware extensions are widely used for valuation in machine learning, but existing methods require pairwise priority to be binary and acyclic, a restriction spectacularly violated in real\-data examples such as aggregated human preferences and multi\-criterion comparisons\. We introduce the generalized priority\-aware Shapley value \(GPASV\), a random order value defined on arbitrary directed weighted priority graphs, in which pairwise edges penalize rather than forbid order violations\. GPASV covers a range of classical models as boundary cases\. We establish GPASV through an axiomatic characterization, develop the associated computational methods, and introduce a priority sweeping diagnostic extending PASV's\. We apply GPASV to LLM ensemble valuation on the cyclic Chatbot Arena preference graph, illustrating that priority\-aware valuation is not a one\-button operation: different balances of pairwise graph priority versus individual soft priority produce substantively different valuations of the same data\.

## Mechanistic Insights into LoRA: Layer Sparsity for Adaptive Fine\-Tuning via Path Patching

**Authors:** Fei Zuo; Yizhou Huang; Kezhi Wang

**ID:** 154446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DUiOU1Wsi4>) | [PDF](<https://openreview.net/pdf?id=DUiOU1Wsi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154446>)

Low\-Rank Adaptation \(LoRA\) has emerged as the dominant paradigm for parameter\-efficient fine\-tuning of large language models\. However, existing methods uniformly apply adaptation across all transformer layers, overlooking the heterogeneous contributions of different components\. In this work, we conduct a systematic mechanistic interpretability analysis to understand how LoRA affects model internals\. We observe that LoRA's adaptation effect is highly non\-uniform, with significant component\-wise and layer\-wise sparsity\. Most critically, we find that important layers are highly task\-dependent, with limited overlap across tasks\. Motivated by these insights, we propose Adaptive\-LoRA, a calibration\-driven method that automatically identifies task\-specific layers via path patching, enabling efficient layer selection without exhaustive search\. Extensive experiments on Qwen2\.5\-1\.5B across 11 diverse reasoning tasks demonstrate that  Adaptive\-LoRA outperforms full\-layer LoRA while using only 30\\% of layers, achieving 3\.5$\\times$ parameter efficiency improvement\. This work bridges mechanistic interpretability and practical efficiency, providing both fundamental insights and a principled approach for adaptive fine\-tuning\.

## Efficient bias mitigation in T2I diffusion models using Concept Graphs

**Authors:** Mansi \-; Avinash Kori; Francesco Leofante

**ID:** 148742 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vOSMBUB46a>) | [PDF](<https://openreview.net/pdf?id=vOSMBUB46a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148742>)

Text\-to\-Image diffusion models often propagate harmful bias inherited from the training data\. Existing bias mitigation techniques either intervene only at the text encoder or provide inference\-time guidance, often leading to generations that collapse into semantically incoherent outputs\. To address these limitations, we introduce CO\-ALIGN \(Concept Ontology Alignment\), a novel bias mitigation approach based on concept\-graph alignment which operates on the model's internal concept ontology\. By aligning concepts within the text encoder and denoiser, CO\-ALIGN achieves significant bias reduction while preserving generative integrity\. We demonstrate the effectiveness of concept graph alignment in three paradigms\- text\-encoders, denoisers, and joint text\-denoiser ontology alignment\. CO\-ALIGN outperforms outperforms the state of the art, improving fairness by 30\\%, $\\Delta FID=11\.4$ in image quality, 2\.8\\% in image fidelity, all while reducing semantically incoherent outputs by 88\\%\. Beyond bias mitigation, we show that CO\-ALIGN benefits other downstream tasks as well\. In particular, our experiments demonstrate that better\-aligned internal ontologies enhance concept unlearning robustness across multiple unlearning techniques\.

## ScopeSAE: Model\-Scope Feature Discovery with Interpretable Layer Selection

**Authors:** Qingwen Zeng; Craig Jin; Shuyu Meng; Linghan Huang; Jiayi Zhang; Chenglin Wu; Ling Chen; Huaming Chen

**ID:** 153114\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153114

[Paper](<https://openreview.net/forum?id=NnmH2t52Uc>) | [PDF](<https://openreview.net/pdf?id=NnmH2t52Uc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153114>)

_Abstract unavailable from the accessible public sources._

## Unpacking the Evaluators: How Configuration Shapes the Evaluation of Alignment in Explainable AI

**Authors:** Gizem Karagoz; Tanir Özçelebi; Nirvana Meratnia

**ID:** 139846\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139846

[Paper](<https://openreview.net/forum?id=0x8H3vwcGg>) | [PDF](<https://openreview.net/pdf?id=0x8H3vwcGg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139846>)

_Abstract unavailable from the accessible public sources._

## Sanity Checks for Sparse Autoencoders: Do SAEs Beat Random Baselines?

**Authors:** Anton Korznikov; Andrey V Galichin; Alexey Dontsov; Oleg Rogov; Ivan Oseledets; Elena Tutubalina

**ID:** 139059\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139059

[Paper](<https://openreview.net/forum?id=nWEGPx5sz8>) | [PDF](<https://openreview.net/pdf?id=nWEGPx5sz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139059>)

Sparse Autoencoders \(SAEs\) have emerged as a promising tool for interpreting neural networks by decomposing their activations into sparse sets of human\-interpretable features\. Despite much excitement, a growing number of negative results in downstream tasks casts doubt on whether SAEs recover meaningful features\. To directly investigate this, we perform two complementary evaluations\. On a synthetic setup with known ground‑truth features, we demonstrate that three out of four state‑of‑the‑art SAE architectures recover only 7–9\\% of true features despite achieving around 71\\% explained variance, showing that strong reconstruction alone is insufficient to guarantee meaningful feature recovery\. To evaluate SAEs on real activations, we introduce three baselines that constrain SAE feature directions or their activation patterns to random values\. Through extensive experiments across multiple SAE architectures, we show that our baselines match fully\-trained SAEs in interpretability \(0\.87 vs 0\.90\), sparse probing \(0\.69 vs 0\.72\), and causal editing \(0\.73 vs 0\.72\)\. These results show that current evaluation metrics are insufficient to certify that SAEs have learned meaningful features, and we offer our baselines as a reusable protocol for future SAE evaluation\.

## Inferring Computational Structure from Neural Recordings with Gain\-Modulated Linear Dynamical Systems

**Authors:** Yiteng Zhang; Zixiong Wang; Zhengze Wang; Ke Chen; Xingyu Li; Bin Min

**ID:** 153994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H0jkombMst>) | [PDF](<https://openreview.net/pdf?id=H0jkombMst>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153994>)

Latent dynamical models can accurately fit neural population activity, yet accurate activity fitting alone does not guarantee mechanistic validity\. Using synthetic benchmarks, we show that even well\-fitted low\-rank RNNs can yield misleading circuit interpretations when the prescribed activation function deviates from the ground\-truth one\. To address this limitation, we introduce gain\-modulated linear dynamical systems \(gmLDS\), which decompose latent dynamics into a state\-dependent, unit\-wise gain and a static low\-rank connectivity matrix, allowing the model to adapt to diverse nonlinear responses without assuming a fixed activation function\. Across multiple synthetic benchmarks, gmLDS accurately recovers the local effective connectivity of the underlying model, thereby reconstructing the linearized dynamics along neural trajectories\. Applied to neural recordings from perceptual and context\-dependent decision\-making tasks, gmLDS yields interpretable hypotheses about dynamical structure, including attractor structure in perceptual decision\-making and context\-dependent selection mechanisms\. Together, these results support gmLDS as an effective approach for inferring computational structure from neural recordings\.

## Local–Global Sparse Autoencoders for Multiscale Interpretability in Vision Models

**Authors:** Itay Benou; Tammy Riklin Raviv

**ID:** 151172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cS2IkMjMnL>) | [PDF](<https://openreview.net/pdf?id=cS2IkMjMnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151172>)

Visual understanding is inherently hierarchical as high\-level semantic concepts are composed of fine\-grained, spatially localized components\. Yet existing interpretability methods typically operate at a single scale, either local or global, leaving a critical gap in understanding the compositional structure between them\. Recovering this structure without supervision is particularly challenging, as the correspondence between local and global concepts is latent, varies across samples, and may appear only through inconsistent or partial patterns\. To address this challenge, we introduce Local\-Global Sparse Autoencoders \(LG\-SAE\), an unsupervised framework for multiscale interpretability in vision models\. The core innovation of LG\-SAE is a learned compositional bridge  that explicitly captures the relationships between local and global concepts\. By jointly decomposing patch\-level and image\-level embeddings, LG\-SAE induces a sparse interpretable graph that reveals how each high\-level semantic concept is supported by a small set of spatially grounded components\. Building on this representation, we present a unified framework for discovering local\-global concept relationships, constructing multiscale Concept Bottleneck Models, spatially aware concept naming, and model steering through localized concept edits\. Extensive evaluations show that LG\-SAE: \(i\) captures meaningful cross\-scale feature relations; \(ii\) enables high\-quality spatial grounding without compromising downstream accuracy; and \(iii\) provides interpretable model explanations, further validated by a user study\.

## Learning Interpretable Switching Dynamics in Shared Neural\-Behavioral Latent Space

**Authors:** Yongxu Zhang; Josue Ortega Caro; Rachel L Oren; Michael J Higley; Jessica Cardin; Anne Churchland; Shreya Saxena

**ID:** 151607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZI46yRLHVp>) | [PDF](<https://openreview.net/pdf?id=ZI46yRLHVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151607>)

Modern recording technologies enable simultaneous measurement of high\-dimensional neural activity and rich behavioral variables, creating both an opportunity and a modeling challenge: identifying the shared latent structure that mediates the brain\-behavior relationship and the underlying dynamics through which it evolves across behavioral states\. Existing approaches focus on different parts of this challenge: shared representation learning methods identify neural\-behavioral subspaces but typically do not model dynamical structure, while dynamical models capture temporal variation and discrete state transitions in neural activity, but do not explicitly disentangle shared neural\-behavioral structure from modality\-specific variability\. We introduce Switching Shared Latent Dynamics \(SSLD\), a unified framework that learns a latent representation shared between neural activity and behavior and endows this shared space with nonlinear switching recurrent dynamics to reflect the hypothesis that behaviorally relevant neural representations exhibit structured dynamical changes across behavioral states\. Complementary private latent variables capture modality\-specific variability, providing a window into neural activity that does not directly interact with behavior\. We evaluate SSLD on a simulated dataset and four diverse experimental datasets spanning species, brain regions, and recording modalities: monkey motor and premotor cortex during reaching, somatosensory cortex during a bump task, widefield calcium imaging across mouse dorsal cortex during \(a\) self\-initiated decision\-making and \(b\) spontaneous movements\. Across all four datasets, SSLD accurately reconstructs neural and behavioral signals, recovers discrete states in the dynamics that align with experimentally defined behavioral epochs, and isolates behaviorally\-relevant neural information in the shared latent while preserving private neural variability\. Ablations confirm that shared representation learning, behavioral supervision, and switching dynamics each contribute to performance\. SSLD offers an interpretable approach to modeling shared neural\-behavioral dynamics that complements ongoing efforts toward foundation models for neuroscience\.

## What Does a Sparse Autoencoder Feature Do? A Weight\-Based Account

**Authors:** Yiting Liu; Zhihong Deng

**ID:** 149772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nQXn6YRf2P>) | [PDF](<https://openreview.net/pdf?id=nQXn6YRf2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149772>)

Sparse autoencoders \(SAEs\) have emerged as a powerful technique for decomposing language model representations into interpretable features\. Current interpretation pipelines infer feature semantics from activation patterns, implicitly assuming every feature has a semantic explanation while overlooking the computational roles features inherit from the SAE training objective\. We introduce a weight\-based interpretation framework that requires no activation data and grounds claims causally through targeted feature\-ablation interventions\. Across Gemma\-2 and Llama\-3\.1, three depth\-dependent signatures show that SAE features inherit the base model's geometry: semantic features form a U\-shape under tied embeddings but bifurcate when untied, attention participation peaks mid\-layer, and the two roles couple oppositely for input\- vs\. output\-oriented features\. This weight\-based view supplies the causal half missing from activation\-based interpretability\.

## Projected Neural Additive Models as Universal Approximators

**Authors:** Nhon N Phan; Qiang Du; John D Clayton; WaiChing Sun

**ID:** 155364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6AZvfOFUIP>) | [PDF](<https://openreview.net/pdf?id=6AZvfOFUIP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155364>)

Neural additive models \(NAMs\) offer interpretability but lack expressivity due to their rigid additive structure, whereas multi\-layer perceptrons \(MLPs\) achieve universal approximation at the cost of transparency\. We establish the first theoretical foundation for projected neural additive models \(PNAMs\), which augment NAMs with a learnable linear transformation $\\boldsymbol\{T\}$ to capture cross\-variable interactions\. While standard NAMs cannot approximate even the simplest interaction term $\\chi\_1 \\chi\_2$ because their cross\-derivatives are identically zero, we prove that PNAMs are universal approximators and characterize the minimum number of projections required for exact polynomial representation\. Furthermore, we derive an approximation rate of $\\mathcal\{O\}\(M^\{\-s / \(N \- 1\)\}\)$ for $\\mathcal\{C\}^s$ functions \(i\.e\., functions with $s$ continuous derivatives\), where $M$ denotes the number of projections and $N$ the input dimension; this rate is known to be optimal for ridge function approximation\. To recover interpretability from the projected inputs, we introduce structured sparsity regularizers and post\-hoc symbolic regression techniques that enable global input ranking, parameter pruning, and the conversion of learned bases into compact analytical expressions\. Experiments on knot theory invariants, MNIST, and phase field fracture mechanics demonstrate that PNAMs match or surpass MLPs in accuracy while discovering salient features and yielding symbolic models with orders of magnitude fewer parameters\.

## From Post\-Hoc to Ante\-Hoc: Consistently Explainable Semi\-Supervised Time Series Classification

**Authors:** Viet\-Hung Tran; Zichi Zhang; Ngoc Phu Doan; Xuan Hoang Nguyen; Phi Hung Nguyen; Yimeng An; Peixin Li; Huynh Thi Khanh Chi; Hans Vandierendonck; Ira Assent; Thai Son Mai

**ID:** 154078 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GMZeOQcKOW>) | [PDF](<https://openreview.net/pdf?id=GMZeOQcKOW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154078>)

Semi\-Supervised Time Series Classification \(SS\-TSC\) with Deep Neural Networks \(DNNs\) achieves strong accuracy by leveraging unlabeled data, yet the resulting models remain black boxes that offer no insight into which features drive each prediction\. Existing post\-hoc explanation methods for TSC can identify important features but provide no guarantee that the model genuinely relies on them, while ante\-hoc approaches impose architectural constraints that limit flexibility in existing model usages\. Neither setting explore the semi\-supervised regime, where limited labels can affect explainability\. We propose \\textbf\{Sensory Gating\}, the first SS\-TSC framework that simultaneously bridges post\-hoc attribution and ante\-hoc explanation through a four\-stage pipeline: \(i\) a base classifier is trained with our proposed Forecasting Joint\-Embedding Predictive Architecture \(F\-JEPA\) auxiliary objective;  \(ii\) post\-hoc attribution maps are converted into per\-instance binary masks via greedy selection of sufficient features;  \(iii\) a lightweight \\textbf\{Sensory Gate\} amortizes these masks through Binary Cross Entropy \(BCE\) supervision with data\-driven threshold calibration; and \(iv\) a knowledge distillation stage to provide an explainable SS\-TSC student model that operates on gated \(masked\) input, while consistently reproduces the original black box teacher \(F\-JEPA\)'s predictions\. We validate our framework on eight datasets across four label ratios with five seeds per configuration\. F\-JEPA achieves better performance compared to recent state\-of\-the\-art \(SOTA\) semi\-supervised TSC methods, while the sensory gate reduces the fraction of features the classifier requires to 20\-\-45\\% with competitive accuracy\. On MIT\-BIH, where ground\-truth saliency annotations are available, the gate's selected features align with domain\-relevant regions while classification performance remains competitive with the ungated baseline at 10\-\-20\\% kept ratio\.

## When Attribution Patching Lies: Diagnosis and a Second\-Order Correction

**Authors:** Luyang Zhang; Jialu Wang

**ID:** 154919 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9z06SMMtXu>) | [PDF](<https://openreview.net/pdf?id=9z06SMMtXu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154919>)

A central goal of mechanistic interpretability is to identify which internal components causally drive a language model's behavior\. Because these importance estimates serve as the evidence for identifying circuits, systematic errors can lead to the misidentification of the underlying mechanisms\. While activation patching provides a gold\-standard causal metric, its computational cost is prohibitive at scale\. Practitioners instead rely on attribution patching, a gradient\-based, first\-order approximation whose reliability remains poorly understood\. In this work, we characterize the source of this unreliability, demonstrating that the dominant error stems from the non\-linearities in the downstream network rather than local curvature at the patched component\. This insight yields three practical tools: \(i\) a reliability score to detect untrustworthy estimates, \(ii\) error bounds quantifying potential attribution mis\-specifications, and \(iii\) a Hessian\-vector\-product \(HVP\) correction that eliminates the leading\-order error with only one additional backward pass\. In evaluations across five model families \(124M–9B parameters\) and both random\-token and naturalistic \(name\-swap\) perturbations, HVP is the only second\-order correction feasible at larger scale, where standard baselines like Integrated Gradients become computationally prohibitive\. In comparative experiments, a multi\-step HVP variant matches or exceeds the accuracy of Integrated Gradients at significantly lower compute, outperforming prior second\-order baselines\. These improvements lead to higher\-fidelity circuit recovery on standard benchmarks and support a \_Screen\-Flag\-Fix\_ workflow that targets computational effort only toward the components flagged as unreliable\.

## Attributions All the Way Down? The Metagame of Interpretability

**Authors:** Hubert Baniecki; Przemyslaw Prem Biecek; Fabian Fumagalli

**ID:** 148384 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yHeBdE6C4F>) | [PDF](<https://openreview.net/pdf?id=yHeBdE6C4F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148384>)

We introduce the metagame, a conceptual framework for quantifying second\-order interaction effects of model explanations\. For any first\-order attribution $\\phi\(f\)$ explaining a model $f$, we measure the directional influence of feature $j$ on the attribution of feature $i$, denoted as meta\-attribution $\\varphi\_\{j \\to i\}\(f\)$, by treating the attribution method itself as a cooperative game and computing its Shapley value\. Theoretically, we prove that attributions hierarchically decompose into meta\-attributions, and establish these as directional extensions of existing interaction indices\. Empirically, we demonstrate that the metagame delivers insights across diverse interpretability applications: \(i\) quantifying token interactions in instruction\-tuned language models, \(ii\) explaining cross\-modal similarity in vision\-language encoders, and \(iii\) interpreting text\-to\-image concepts in multimodal diffusion transformers\.

## Proxy\-Based Approximation of Shapley and Banzhaf Interactions

**Authors:** Santo Thies; Hubert Baniecki; R\. Teal Witter; Eyke Hüllermeier; Maximilian Muschalik; Fabian Fumagalli

**ID:** 153973 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H7HFOu71Yi>) | [PDF](<https://openreview.net/pdf?id=H7HFOu71Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153973>)

Shapley and Banzhaf interactions capture the complex dynamics inherent in modern machine learning applications\. However, current estimators for these higher\-order interactions trade off between speed and accuracy\. To overcome this limitation, we introduce ProxySHAP\. ProxySHAP reconciles the high sample efficiency of tree\-based proxy models with a principled path to consistency via residual correction\. On a theoretical level, we derive a polynomial\-time generalization of interventional TreeSHAP to compute exact interaction indices for tree ensembles, successfully bypassing exponential tree\-depth dependencies in prior methods\. Furthermore, we formally analyze the residual adjustment strategy, characterizing the specific conditions under which Maximum Sample Reuse \(MSR\) corrects proxy bias without its variance scaling exponentially with interaction size\. Extensive benchmarking demonstrates that ProxySHAP sets a new state\-of\-the\-art standard for approximation quality, including in large\-scale applications with thousands of features\. By achieving the lowest error in both small\- and large\-budget regimes, ProxySHAP significantly outperforms the prior best estimators ProxySPEX and KernelSHAP\-IQ, while also delivering superior performance on downstream explainability tasks\.

## Coherent Routing in Decision Trees: Phase\-Interference Learning for Interpretable Tabular Prediction

**Authors:** David Li; Angela Li

**ID:** 155857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2OLBsM6UWI>) | [PDF](<https://openreview.net/pdf?id=2OLBsM6UWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155857>)

We introduce Phase\-Interference Decision Trees \(PIDT\), a differentiable routing model for tabular prediction in which each node propagates a bounded complex state rather than only a scalar routing probability\. The main model uses two\-state norm\-preserving branch maps: a gate controls how much amplitude is sent to the left and right children, while learned unitary maps rotate the latent state before subsequent splits\. This formulation contains ordinary soft decision trees as the phase\-free scalar case, and two\-state routing creates explicit score\-level cross terms among latent\-state trajectories\. We give a self\-contained PIDT definition with exact mass conservation, prove scalar phase cancellation, establish a scoped containment relation with soft trees, derive an algebraic interference decomposition, give a companion construction for shared two\-state parity routing, and derive a fixed\-architecture empirical Rademacher upper bound for bounded two\-state PIDT scores\. We evaluate PIDT on a ten\-dataset OpenML suite of low\-class\-count tabular tasks under matched differentiable\-tree controls\. Across ten seeds per dataset, the main summaries track accuracy as context and report small descriptive NLL and Brier deltas relative to the scalar PIDT\-1S, phase\-frozen PFB, and SDT controls\. The empirical study is framed as a mechanism\-level study for compact differentiable trees, not as a broad tabular\-performance claim\.

## Provable Explanations for Any\-Order Neural Additive Models

**Authors:** Idan Refaeli; Shahaf Bassan; Yizhak Y\. Elboher; Guy Katz

**ID:** 150538 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hOaJ6pyv0j>) | [PDF](<https://openreview.net/pdf?id=hOaJ6pyv0j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150538>)

Post\-hoc explanation methods for neural networks are often heuristic and lack provable guarantees\. A common alternative to such methods that was studied in recent years is to compute a \*cardinally minimal\* subset of input features that is \*provably sufficient\* to determine the model's prediction\. For general neural networks, however, finding such explanations is computationally intractable\. In contrast, recent work showed that this problem becomes more tractable for a particular family of neural networks, namely neural additive models \(NAMs\), though standard NAMs are highly restrictive because they exclude feature interactions altogether\. In this work, we study the computation of provably minimal and sufficient explanations for neural networks with restricted \*feature interactions\*, bridging the gap between fully general neural networks and purely additive models\. We first prove that even with constant\-order interactions, the problem is $\\Sigma\_2^P$\-hard, implying that worst\-case exponential complexity is unavoidable\. We then identify two provably tractable settings: one based on sparsity in the interaction structure and another based on a stronger interaction\-aware notion of sufficiency\. Under either one of these settings, we develop algorithms that compute provable explanations for neural networks with any\-order interactions while retaining much of the computational efficiency of additive models\. Empirically, we show that these explanations are significantly smaller and faster to obtain than those produced by standard algorithms, while being derived from models that achieve much higher accuracy than standard NAMs\. Overall, our results help expand the class of neural networks that admit efficient provable explanations, while clarifying the fundamental role of feature interactions in shaping their complexity\.

## The Commit\-Abstain Circuit: Why Language Models Hallucinate Instead of Abstaining

**Authors:** Vy Nguyen; Ziqi Xu; Jeffrey Chan; Estrid He; Feng Xia; Renqiang Luo; Erik Cambria; Xiuzhen Zhang

**ID:** 155556 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4gAoZ2eJTM>) | [PDF](<https://openreview.net/pdf?id=4gAoZ2eJTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155556>)

_Abstract unavailable from the accessible public sources._

## Do Latent\-CoT Models Think Step\-by\-Step? A Mechanistic Study on Sequential Reasoning Tasks

**Authors:** Jia Liang; Liangming Pan

**ID:** 153454 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LAS8pm4WJ6>) | [PDF](<https://openreview.net/pdf?id=LAS8pm4WJ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153454>)

_Abstract unavailable from the accessible public sources._

## AdKnob: Ad Intensity Control and Labeling for LLM\-Native Advertising

**Authors:** Woo Jae Kim; Seongho Keum; Joonsung Jeon; Suhyeon Ha; Sooel Son; Sung\-eui Yoon

**ID:** 150097 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kilXcw3jhS>) | [PDF](<https://openreview.net/pdf?id=kilXcw3jhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150097>)

_Abstract unavailable from the accessible public sources._

## NeuroFaith: Evaluating Mechanistic Faithfulness of LLM Free Text Self\-Explanation at the Concept Level

**Authors:** Milan Bhan; Jean\-Noël Vittaut; Nicolas CHESNEAU; Sarath Chandar; Marie\-Jeanne Lesot

**ID:** 156026 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=13UKdODUdP>) | [PDF](<https://openreview.net/pdf?id=13UKdODUdP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156026>)

_Abstract unavailable from the accessible public sources._

## The Commit\-Abstain Circuit: Why Language Models Hallucinate Instead of Abstaining

**Authors:** Vy Nguyen; Ziqi Xu; Jeffrey Chan; Estrid He; Feng Xia; Renqiang Luo; Erik Cambria; Xiuzhen Zhang

**ID:** 155556\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155556

[Paper](<https://openreview.net/forum?id=4gAoZ2eJTM>) | [PDF](<https://openreview.net/pdf?id=4gAoZ2eJTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155556>)

_Abstract unavailable from the accessible public sources._

## Do Latent\-CoT Models Think Step\-by\-Step? A Mechanistic Study on Sequential Reasoning Tasks

**Authors:** Jia Liang; Liangming Pan

**ID:** 153454\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153454

[Paper](<https://openreview.net/forum?id=LAS8pm4WJ6>) | [PDF](<https://openreview.net/pdf?id=LAS8pm4WJ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153454>)

_Abstract unavailable from the accessible public sources._

## Position: The Road to Generalizable Neuro\-Symbolic Learning Should be Paved with Foundation Models

**Authors:** Adam Stein; Aaditya Naik; Neelay Velingker; Mayur Naik; Eric Wong

**ID:** 140111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7TUyXMSfhp>) | [PDF](<https://openreview.net/pdf?id=7TUyXMSfhp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140111>)

Neuro\-symbolic learning was proposed to address challenges with training neural networks for complex reasoning tasks with the added benefits of interpretability, reliability, and efficiency\. Neuro\-symbolic learning methods traditionally train neural models in conjunction with symbolic programs, but they face significant challenges that limit them to simplistic problems\. On the other hand, purely\-neural foundation models now reach state\-of\-the\-art performance through prompting rather than training, but they are often unreliable and lack interpretability\. Supplementing foundation models with symbolic programs, which we call neuro\-symbolic prompting, provides a way to use these models for complex reasoning tasks\. Doing so raises the question: What role does specialized model training as part of neuro\-symbolic learning have in the age of foundation models? To explore this question, we highlight three pitfalls of traditional neuro\-symbolic learning with respect to the compute, data, and programs leading to generalization problems\. This position paper argues that foundation models enable generalizable neuro\-symbolic solutions, offering a path towards achieving the original goals of neuro\-symbolic learning without the downsides of training from scratch\.

## A Theory of Spatial Continuous Attractors in Hopfield Energy Landscapes

**Authors:** Chong Li; Xiangyang Xue; Jianfeng Feng; Taiping Zeng

**ID:** 155828\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155828

[Paper](<https://openreview.net/forum?id=2aMmeCVNCj>) | [PDF](<https://openreview.net/pdf?id=2aMmeCVNCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155828>)

Spatial cognition requires stable neural manifolds of orientation and location that track self\-motion and sensory cues\.     Continuous attractors provide a natural dynamical principle, but learning such mechanisms that form and control manifolds with theoretical guarantees remains difficult\.   We propose Spatial Energy Attractor Learning \(SEAL\), a theory of neurodynamics learning for spatial cognition, where continuous spatial representations arise as learned low\-energy manifolds in Hopfield energy landscapes through population\-level Fourier energy learning\.   For head\-direction and grid\-cell systems, Fourier energy landscapes yield ring and torus attractors with learned normal attraction and input\-driven tangent transport\.    We prove that Fourier construction is a special case of a general Hopfield\-compatible energy extension whose autonomous dynamics preserve energy descent and whose expressive energy families approximate target attractor energies and restoring fields\.    Experiments on HD and grid\-cell populations show that the learned energies restore perturbed states to ring and torus manifolds, stabilize velocity\-driven moving bumps across multiple input regimes, and induce continuous\-attractor interactive structures with local excitation and surround inhibition\.   Together, these results provide a stable, learnable, and biologically interpretable energy\-based account of continuous spatial representation\.

## A Theory of Spatial Continuous Attractors in Hopfield Energy Landscapes

**Authors:** Chong Li; Xiangyang Xue; Jianfeng Feng; Taiping Zeng

**ID:** 155828\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155828

[Paper](<https://openreview.net/forum?id=2aMmeCVNCj>) | [PDF](<https://openreview.net/pdf?id=2aMmeCVNCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155828>)

Spatial cognition requires stable neural manifolds of orientation and location that track self\-motion and sensory cues\.     Continuous attractors provide a natural dynamical principle, but learning such mechanisms that form and control manifolds with theoretical guarantees remains difficult\.   We propose Spatial Energy Attractor Learning \(SEAL\), a theory of neurodynamics learning for spatial cognition, where continuous spatial representations arise as learned low\-energy manifolds in Hopfield energy landscapes through population\-level Fourier energy learning\.   For head\-direction and grid\-cell systems, Fourier energy landscapes yield ring and torus attractors with learned normal attraction and input\-driven tangent transport\.    We prove that Fourier construction is a special case of a general Hopfield\-compatible energy extension whose autonomous dynamics preserve energy descent and whose expressive energy families approximate target attractor energies and restoring fields\.    Experiments on HD and grid\-cell populations show that the learned energies restore perturbed states to ring and torus manifolds, stabilize velocity\-driven moving bumps across multiple input regimes, and induce continuous\-attractor interactive structures with local excitation and surround inhibition\.   Together, these results provide a stable, learnable, and biologically interpretable energy\-based account of continuous spatial representation\.

## A Composite Activation Function for Learning Stable Binary Representations

**Authors:** Seokhun Park; Choeun Kim; Kwanho Lee; Sehyun Park; Insung Kong; Yongdai Kim

**ID:** 148660 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w5Om6MXAow>) | [PDF](<https://openreview.net/pdf?id=w5Om6MXAow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148660>)

Activation functions play a central role in neural networks by shaping internal representations\.  Recently, learning binary activation representations has attracted significant attention due to their advantages in computational and memory efficiency, as well as interpretability\.  However, training neural networks with Heaviside activations remains challenging, as their non\-differentiability obstructs standard gradient\-based optimization\. In this paper, we propose Heavy\-Tailed Activation Function \(HTAF\), a smooth approximation to the Heaviside function that enables stable training with gradient\-based optimization\.  We construct HTAF as a sigmoid–hyperbolic tangent composite function and theoretically show that it maintains a large gradient mass around zero inputs while exhibiting slower gradient decay in the tail regions\. We show that Spiking Neural Networks, Binary Neural Networks and Deep Heaviside neural Networks can be trained stably using HTAF with gradient\-based optimization\. Finally, we introduce Implicit Concept Bottleneck Models \(ICBM\), an interpretable image model that leverages HTAF to induce discrete feature representations\. Extensive experiments across various architectures and image datasets demonstrate that ICBM enables stable discretization while achieving prediction performance comparable to or better than standard models\.

## A Reproduction Study of Weight\-Based Mechanistic Interpretability in Bilinear MLPs

**Authors:** Itay Erlich; May Ben Zion; Jacob Shashoua

**ID:** 157024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6k7qRdz7rD>) | [PDF](<https://openreview.net/pdf?id=6k7qRdz7rD>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Mechanistic interpretability typically explains a trained network by analyzing its activations, at the cost of training auxiliary models such as sparse autoencoders \(SAEs\)\. Pearce et al\. \(2025\) pursue an alternative: bilinear MLPs, whose omission of element\-wise nonlinearities makes each layer an exact quadratic form, so interpretable features can be read directly from the weights via eigendecomposition of the layer's interaction tensor\. We present a systematic reproduction of that work\. The vision claims reproduce fully: regularization induces low\-rank, visually interpretable eigenstructure, and our ablations sharpen the original account by identifying weight decay, rather than noise augmentation, as the dominant cause\. The language claims reproduce only partially: we confirm the qualitative discovery of sentiment\-negation circuits, but the reported prevalence of low\-rank feature interactions holds for only one of three publicly released models \(a second becomes consistent once rarely\-active dictionary features are excluded\)\. We identify two candidate factors that the original paper leaves unreported – SAE training duration and the underlying model's training compute – and a third that is structural: the public unavailability of matching SAE artifacts, which makes part of the original configuration impossible to replicate exactly\. Beyond reproduction, we test whether weight\-based features are genuinely structural rather than dataset\-specific: regularized bilinear MLPs transfer across handwritten\-digit datasets and recognize geometrically similar letters, and we introduce Quadratic Form Similarity, a weight\-space metric that separates structurally similar from dissimilar class pairs where eigenvector cosine similarity cannot\. Finally, we show on MNIST\-scale models that the low\-rank structure the original paper discovers post\-hoc can instead be enforced during training via Canonical Polyadic \(CP\) decomposition: at matched full training, CP models match dense accuracy and effective rank, and a bridge experiment connecting the two extensions shows their decision surfaces substantially coincide with the dense ones – enforced and discovered structure converge\. Our results are consistent with weight\-based interpretability as a viable paradigm, while demonstrating that its reproducibility hinges on artifact availability and training\-compute details that interpretability research rarely reports\.

## Opening Up a New Layer: A Deeper Look into "Interpreting CLIP with Hierarchical Sparse Autoencoders"

**Authors:** Nora Kahleogullari; Adrianna Romanowski; Mathan Sundarrajan

**ID:** 157018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l0qZkSk2aH>) | [PDF](<https://openreview.net/pdf?id=l0qZkSk2aH>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Sparse Autoencoders \(SAEs\) have become essential for decomposing model activations into interpretable concepts\. However, despite their effectiveness, SAEs lack a natural ordering of features, making it difficult to prioritize important concepts under compute constraints\. The Matryoshka Sparse Autoencoder \(MSAE\) was introduced as a means of learning nested subspaces, theoretically forcing high\-level features into earlier dimensions to enable adaptive granularity\. In this paper, we reproduce and analyze the MSAE framework\. The reproduction of the study suffers from certain challenges, but the main claims still hold\. Furthermore, this study extends on the original paper by implementing feature absorption as a metric, reducing computational cost and emissions with a method inspired by the Sandwich Rule, and deeply analyzing MSAE's ability to learn hierarchical information\.

## Revisiting RegressionMSR: A Reproducibility Study

**Authors:** Neev Mistry

**ID:** 157012 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AzOk6sdMRZ>) | [PDF](<https://openreview.net/pdf?id=AzOk6sdMRZ>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Regression\-adjusted Monte Carlo estimators for Shapley values and probabilistic values combine surrogate modeling with maximum\-sample\-reuse estimation to reduce the cost of feature\-attribution computation\. We present a reproducibility study of RegressionMSR in the interventional feature\-attribution setting, focusing on artifact fidelity, practical algorithmic choices, and empirical robustness\. We first identify implementation\-level differences between the estimator displayed in the paper and the released artifact: the code computes separated conditional means over coalitions containing and excluding each feature, rather than the displayed all\-row signed residual average, and it is also not guaranteed to use a probability mass in its residual denominator\. We characterize these conventions algebraically and verify their predicted targets with synthetic diagnostics\. On real data, the stored denominator strongly attenuates the residual correction: correcting both conventions changes LinearMSR little but reduces TreeMSR error by more than half in the tested Shapley settings\. We then test the authors' practical single\-surrogate simplification, finding that it substantially reduces runtime while maintaining and often slightly improving accuracy\. Next, we qualitatively reproduce the headline Shapley benchmark among the original comparison methods, where TreeMSR remains the lowest\-error estimator on average; however, OddSHAP performs best in our modern benchmark extension, and rank\-stability metrics provide a complementary ordering\. Finally, we extend the original Gaussian\-noise experiment to Laplacian and coalition\-size\-dependent heteroskedastic noise, finding that TreeMSR's low\-noise advantage persists across other low\-noise regimes\. Overall, our results support RegressionMSR's empirical value while clarifying implementation details needed for reproducible use\.

## FrED: External Data Influence Estimation via Domain Knowledge Graph Grounding

**Authors:** Theodoros Aivalis; Iraklis A Klampanos; Antonis Troumpoukis; Joemon M Jose

**ID:** 153357 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LzYzD8LNiK>) | [PDF](<https://openreview.net/pdf?id=LzYzD8LNiK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153357>)

The rapid deployment of generative AI has amplified the critical need for Training Data Attribution to ensure transparency and accountability\. However, current parametric approaches require computationally prohibitive access to model weights, while similarity\-based methods ignore deep structural context\. We propose a novel probabilistic framework that operates entirely in a black\-box setting\. Our method fuses continuous feature similarities with discrete, domain\-specific Knowledge Graphs \(KGs\)\. This approach ensures the attribution is grounded in structural reality, explicitly rewarding highly specific historical samples while preventing generic background data from dominating the results\. We evaluate our framework across two distinct domains where linking outputs to data and domain context is inherently complex: abstract artistic image synthesis and high\-dimensional physical weather forecasting\. Extensive benchmarking demonstrates the robust efficacy of our approach\. In the artistic domain, it achieves a strong Linear Datamodeling Score that exceeds standard black\-box similarity baselines, while closing much of the gap to gradient\-based estimators\. We additionally present a cross domain feasibility case study in environmental forecasting, where we use domain KGs to retrieve physically consistent historical analogs for regional flood forecasts, improving geographic localisation over a latent\-only baseline\. Operating entirely without internal model access, our approach provides an efficient, interpretable mechanism for post\-hoc influence analysis and domain\-grounded retrieval\.

## Parasite Features: Causal Abstraction Through Spurious Pathways

**Authors:** Denis Sutter; Qing Yao; Sasha Boguraev; Julian Minder; Antonio Di Maio; Thomas Hofmann; Kyle Mahowald; Tiago Pimentel

**ID:** 149518 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pXYWXZE3QV>) | [PDF](<https://openreview.net/pdf?id=pXYWXZE3QV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149518>)

Causal Abstraction can be used to define a notion of equivalence between a neural network and an algorithm, thus serving as a powerful framework for mechanistic interpretability\. In this paper, however, we show the existence of a class of spurious features which straightforwardly pass such equivalence tests\. Suppose there are two directions in a model's representation space where: \(i\) one discriminates the input based on some specific feature, and \(ii\) the other steers the model towards a certain output\. Causal Abstraction techniques can create a pathway leveraging these unrelated directions to simulate their combined behavior in the model, which thus spuriously appears to implement a certain feature\. In such cases, we say the method discovered a parasite feature\. Experimentally, we show that Distributed Alignment Search\-\-\-a Causal Abstraction\-based method\-\-\-finds parasite features using linear alignment maps in two tasks: syntactic agreement and two\-digit addition\. Our paper highlights an important consideration for Causal Abstraction and contributes to the ongoing debate about best practices for mechanistic interpretability\.

## Diffusion\-Time Concept Manifolds: Sparse Autoencoder Groups for Interpreting Denoising Language Models

**Authors:** Pawan Kumar

**ID:** 154152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FrP1gSPL04>) | [PDF](<https://openreview.net/pdf?id=FrP1gSPL04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154152>)

Diffusion language models generate text through iterative denoising, but current interpretability tools mostly analyze static hidden states and do not explain how concept information evolves across denoising time\. We introduce DynaManifold\-SAE, a method for discovering sparse autoencoder feature groups whose activations form time\-dependent concept manifolds in masked and diffusion language models\. The method builds sparse latent codes across mask ratios, constructs candidate feature groups, and evaluates them with held\-out coordinate prediction, geodesic consistency, persistence across time, and causal interventions\. Across BERT and LLaDA, DynaManifold\-SAE reliably identifies sparse sentiment geometry that is stable across seeds and stronger than individual\-feature, PCA, random\-group, and graph\-structured baselines\. The discovered groups transfer from controlled templates to natural SST\-2 examples, indicating that they capture semantic structure rather than template artifacts\. We further show that these groups explain a denoising\-specific mechanism: they predict token reveal order and confidence growth during LLaDA unmasking, and targeted interventions alter reveal confidence and token recovery more than matched controls\. These results suggest that sparse feature manifolds provide a practical bridge between static representation geometry and the dynamics of diffusion language generation\.

## Transferring Visual Explainability from Self\-Explaining to Prediction\-Only Vision Transformers via Task Arithmetic

**Authors:** Yuya Yoshikawa; Ryotaro Shimizu; Takahiro Kawashima; Yuki Saito

**ID:** 153562 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KSFfnJEsF3>) | [PDF](<https://openreview.net/pdf?id=KSFfnJEsF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153562>)

In image classification scenarios where both prediction and explanation efficiency are required, self\-explaining models that perform both tasks in a single inference are effective\. However, for users who already have prediction\-only models, training a new self\-explaining model from scratch imposes significant costs in terms of both labeling and computation\. This study proposes a method to transfer the visual explanation capability of self\-explaining Vision Transformer \(ViT\) models learned in a source domain to prediction\-only VLM\-based ViT models in a target domain via task arithmetic, without target\-side explanation supervision\. The proposed method endows explanation capability by adding an \\emph\{explainability vector\} induced by explanation supervision in the source domain based on task arithmetic framework\. Experiments on ten diverse target datasets show that a single explainability vector learned on ImageNet\-1k augmented with patch\-level explanation supervision transfers consistently, improving explanation quality while largely preserving classification accuracy\. Beyond the transfer itself, we further investigate whether transfer success can be anticipated \\emph\{a priori\} from model\-internal features alone \(without target\-side explanation supervision\), and find that a small set of such features carries non\-trivial signal about the transfer outcome\.

## ProDG: Prototypes for Data\-Free Generative Post\-Hoc Explainability

**Authors:** Piotr Borycki; Magdalena Trędowicz; Jacek Tabor; Łukasz Struski; Przemysław Spurek

**ID:** 148874 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uX1D8oZXkw>) | [PDF](<https://openreview.net/pdf?id=uX1D8oZXkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148874>)

Ante\-hoc interpretability methods based on prototypes provide highly accurate explanations by utilizing the intuitive "this looks like that" reasoning paradigm\. On the other hand, post\-hoc models can explain predictions for a single image without relying on an underlying dataset or requiring costly neural network retraining\. Recent approaches successfully solve the retraining problem for prototype\-based networks\. However, they still face a fundamental limitation: they require access to a subset of data \(e\.g\., a test or validation set\) to search for and extract the visual prototypes\. In this paper, we address this issue and introduce ProDG: Data\-Free Generative Prototypes for Post\-Hoc Explainability, a novel framework that leverages generative models to synthesize pure, high\-fidelity prototypes directly from the frozen model's weights, completely eliminating the dependency on any external data\. By establishing this new frontier in Data\-Free XAI, DGP unlocks robust visual interpretability for privacy\-sensitive domains, where original data is strictly restricted or fundamentally inaccessible\.

## The Algorithm Is Not the Behavior: Learned Priors Override Look\-Ahead in a Chess\-Playing Neural Network

**Authors:** Elias Sandmann; Sebastian Lapuschkin; Wojciech Samek

**ID:** 152268 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ULhusDnCQy>) | [PDF](<https://openreview.net/pdf?id=ULhusDnCQy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152268>)

_Abstract unavailable from the accessible public sources._

## ORCAID: Oblique Rule\-Based Continuous\-Action Interpretation for Deep RL Policies

**Authors:** Ignacio D\. Lopez\-Miguel; Ezio Bartocci; Thomas Eiter; Martin Tappler

**ID:** 148887 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uSYUHzQCCR>) | [PDF](<https://openreview.net/pdf?id=uSYUHzQCCR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148887>)

_Abstract unavailable from the accessible public sources._

## To Call or Not to Call: Diagnosing Intrinsic Over\-Calling Bias in LLM Agents

**Authors:** Wei Shi; Ziheng Peng; Sihang Li; Xiting Wang; Xiang Wang; Mengnan Du; Na Zou

**ID:** 151332 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bKHBOZlhBr>) | [PDF](<https://openreview.net/pdf?id=bKHBOZlhBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151332>)

_Abstract unavailable from the accessible public sources._

## Task Vector Geometry Underlies Dual Modes of Task Inference in Transformers

**Authors:** Hao Yan; Haolin Yang; Yiqiao Zhong

**ID:** 152712 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QvgaAPuT4e>) | [PDF](<https://openreview.net/pdf?id=QvgaAPuT4e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152712>)

_Abstract unavailable from the accessible public sources._

## Within\-Model vs Between\-Prompt Variability in Large Language Models for Creative Tasks

**Authors:** Jennifer Haase; Jana Gonnermann\-Müller; Paul H\. P\. Hanel; Nicolas Leins; Thomas Kosch; Jan Mendling; Sebastian Pokutta

**ID:** 151087 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d535njwZHX>) | [PDF](<https://openreview.net/pdf?id=d535njwZHX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151087>)

_Abstract unavailable from the accessible public sources._

## Learning in Policy Transparency Games: Wedge Structure and Adaptive Certification

**Authors:** Nguyen T Uyen; Khanh N Quoc; Duc H Nguyen; Ngoc Mai Vu; Phan Quoc Hung Mai; MINH LUONG DOAN; Trang Le Vu Quynh; Trang Pham; Nhung Duong; Tuan Do

**ID:** 152748 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qcd3vQCm5h>) | [PDF](<https://openreview.net/pdf?id=Qcd3vQCm5h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152748>)

_Abstract unavailable from the accessible public sources._

## ChronosAlign: A Large\-Scale, Updatable Benchmark for Decomposing Temporal Alignment in LLMs

**Authors:** Sanjay Govindan; Maurice Pagnucco; Yang Song

**ID:** 139317 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xq8uri8T9Z>) | [PDF](<https://openreview.net/pdf?id=Xq8uri8T9Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139317>)

_Abstract unavailable from the accessible public sources._

## quanda: An Interpretability Toolkit for Training Data Attribution Evaluation

**Authors:** Dilyara Bareeva; Galip Ümit Yolcu; Anna Hedström; Niklas Schmolenski; Thomas Wiegand; Wojciech Samek; Sebastian Lapuschkin

**ID:** 139350 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V3wscK9rvx>) | [PDF](<https://openreview.net/pdf?id=V3wscK9rvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139350>)

_Abstract unavailable from the accessible public sources._

## Designing Kernel Surrogate Models for Multimodal Attribution

**Authors:** Ziniu Zhang; Zhenshuo Zhang; Jianglin Lu; Ruoxuan Xiong; Yun Fu; Hongyang Zhang

**ID:** 154581 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWGFOa2GfB>) | [PDF](<https://openreview.net/pdf?id=CWGFOa2GfB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154581>)

_Abstract unavailable from the accessible public sources._

## Matryoshka Transcoders and Hierarchy Misalignment: When SAE Absorption Protection Does Not Transfer

**Authors:** Quoc Dat Ngo; Hung Nguyen

**ID:** 153497 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kx6IJ8I6C8>) | [PDF](<https://openreview.net/pdf?id=Kx6IJ8I6C8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153497>)

Sparse autoencoders decompose activations into sparse, interpretable features and have become a central tool for mechanistic interpretability\. Transcoders extend this approach from representation reconstruction to computation prediction by mapping MLP inputs to MLP outputs, making them attractive for circuit\-level analysis\. We ask whether a prominent sparse\-autoencoder reliability fix, Matryoshka nested\-prefix training, transfers to this two\-hook setting\. In sparse autoencoders, Matryoshka training improves absorption behavior by encouraging broad features to appear in early dictionary prefixes\. In transcoders, we find that this protection does not transfer automatically\. Across Gemma\-2\-2B MLP transcoders trained under a matched recipe, Matryoshka models form genuine prefix hierarchies, with reconstruction improving as later groups are added, but they do not inherit the absorption advantage observed for sparse autoencoders\. BatchTopK achieves lower full absorption, lower FVU, and higher first\-letter F1@1 in the canonical 16k comparison\. Bridge controls recover the expected Matryoshka advantage when the cross\-space map is removed, showing that the failure is specific to predicting MLP outputs from MLP inputs\. We identify the mechanism as hierarchy misalignment\. Prefix losses reward covariance with the reconstruction target, so early transcoder groups prioritize target\-predictive output geometry rather than broad source\-space semantic parents\. These results show that hierarchical sparse\-dictionary objectives do not preserve interpretability properties by default\. For dictionaries that map between activation spaces, the key question is not whether a hierarchy forms, but what geometry that hierarchy is trained to organize\.

## Where Reusable Computation Becomes Detectable: Solution\-Frame Path Triage for Modular\-Arithmetic Grokking

**Authors:** Ruian Lei; Ruoxi Jiang; Marley M Vellasco; M\. Tanveer; Zenglin Xu

**ID:** 149239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtabRRmgxe>) | [PDF](<https://openreview.net/pdf?id=rtabRRmgxe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149239>)

Mechanistic studies of grokking often begin after an endpoint circuit has been identified\. We study the preceding retrospective triage problem: given a solved final checkpoint and a long saved trajectory, which path and window should be inspected first? We propose solution\-frame path triage\. The final checkpoint fixes a solution frame; earlier checkpoints are then scored path by path\. The Geometric Coherence Score \(GCS\) measures coherence in this procedure: it asks whether neighboring inputs in the final frame undergo similar local Jacobian transformations through the attention, MLP, or full block measurement maps\. Centered Kernel Alignment \(CKA\) and $L\_2$ distance to the final path state provide the complementary proximity scores\. Across 104 modular arithmetic Transformer runs, GCS reveals a repeatable path schedule that simple norm and dimensionality summaries miss: attention coherence rises near grokking and often turns over, while MLP maps diversify and later reconverge\. After selection, held\-out checks show that the resulting windows are enriched for accuracy and algebraic changes, align with Fourier progress on modular addition, and identify attention\-to\-MLP interface states with high replacement cost\. The method returns a short list of path/window hypotheses for endpoint analysis\. It is retrospective by design: the final checkpoint is part of the procedure\.

## A Sparse Low\-Rank Biclique Decomposition for Graphs

**Authors:** Antoine Vialle; Sergei Gerasimov; Aref Einizade; Antonio Ortega; Fragkiskos Malliaros; Jhony H\. Giraldo

**ID:** 152969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P0bxYJIY84>) | [PDF](<https://openreview.net/pdf?id=P0bxYJIY84>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152969>)

Low\-rank plus sparse decompositions, such as robust PCA, typically model the low\-rank component as dense and the sparse component as corruption\. This viewpoint is poorly suited to graph adjacency matrices, where sparsity is structural and dense low\-rank factors destroy the combinatorial and computational properties of the graph\. We propose signed biclique decomposition \(SBD\), a sparse low\-rank decomposition for integer\-weighted graphs that represents the structured component as a sum of sparse signed binary rank\-one factors, together with a sparse signed residual\. The resulting representation remains discrete, interpretable, sparse, and compatible with standard linear algebra\. We formulate fixed\-rank and greedy SBD objectives and derive a gain\-based greedy algorithm with theoretical guarantees\. Empirically, SBD recovers block structure in noisy graphs, while its factorized representation enables efficient sparse matrix\-matrix multiplication \(SpMM\)\. On real graphs with strong shared\-neighborhood structure, SBD achieves compression factors above $10$ and SpMM speedups up to $6\\times$ over cuSPARSE, suggesting a practical alternative to dense low\-rank decompositions for graphs\.

## Coherent Routing in Decision Trees: Phase\-Interference Learning for Interpretable Tabular Prediction

**Authors:** David Li; Angela Li

**ID:** 155857\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155857

[Paper](<https://openreview.net/forum?id=2OLBsM6UWI>) | [PDF](<https://openreview.net/pdf?id=2OLBsM6UWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155857>)

We introduce Phase\-Interference Decision Trees \(PIDT\), a differentiable routing model for tabular prediction in which each node propagates a bounded complex state rather than only a scalar routing probability\. The main model uses two\-state norm\-preserving branch maps: a gate controls how much amplitude is sent to the left and right children, while learned unitary maps rotate the latent state before subsequent splits\. This formulation contains ordinary soft decision trees as the phase\-free scalar case, and two\-state routing creates explicit score\-level cross terms among latent\-state trajectories\. We give a self\-contained PIDT definition with exact mass conservation, prove scalar phase cancellation, establish a scoped containment relation with soft trees, derive an algebraic interference decomposition, give a companion construction for shared two\-state parity routing, and derive a fixed\-architecture empirical Rademacher upper bound for bounded two\-state PIDT scores\. We evaluate PIDT on a ten\-dataset OpenML suite of low\-class\-count tabular tasks under matched differentiable\-tree controls\. Across ten seeds per dataset, the main summaries track accuracy as context and report small descriptive NLL and Brier deltas relative to the scalar PIDT\-1S, phase\-frozen PFB, and SDT controls\. The empirical study is framed as a mechanism\-level study for compact differentiable trees, not as a broad tabular\-performance claim\.

## Provable Explanations for Any\-Order Neural Additive Models

**Authors:** Idan Refaeli; Shahaf Bassan; Yizhak Y\. Elboher; Guy Katz

**ID:** 150538\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150538

[Paper](<https://openreview.net/forum?id=hOaJ6pyv0j>) | [PDF](<https://openreview.net/pdf?id=hOaJ6pyv0j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150538>)

Post\-hoc explanation methods for neural networks are often heuristic and lack provable guarantees\. A common alternative to such methods that was studied in recent years is to compute a \*cardinally minimal\* subset of input features that is \*provably sufficient\* to determine the model's prediction\. For general neural networks, however, finding such explanations is computationally intractable\. In contrast, recent work showed that this problem becomes more tractable for a particular family of neural networks, namely neural additive models \(NAMs\), though standard NAMs are highly restrictive because they exclude feature interactions altogether\. In this work, we study the computation of provably minimal and sufficient explanations for neural networks with restricted \*feature interactions\*, bridging the gap between fully general neural networks and purely additive models\. We first prove that even with constant\-order interactions, the problem is $\\Sigma\_2^P$\-hard, implying that worst\-case exponential complexity is unavoidable\. We then identify two provably tractable settings: one based on sparsity in the interaction structure and another based on a stronger interaction\-aware notion of sufficiency\. Under either one of these settings, we develop algorithms that compute provable explanations for neural networks with any\-order interactions while retaining much of the computational efficiency of additive models\. Empirically, we show that these explanations are significantly smaller and faster to obtain than those produced by standard algorithms, while being derived from models that achieve much higher accuracy than standard NAMs\. Overall, our results help expand the class of neural networks that admit efficient provable explanations, while clarifying the fundamental role of feature interactions in shaping their complexity\.

## SkillOrchestra: Learning to Route Agents via Skill Transfer

**Authors:** Jiayu Wang; Yifei Ming; Zixuan Ke; Shafiq Joty; Aws Albarghouthi; Frederic Sala

**ID:** 155493 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5B5fOqwuhG>) | [PDF](<https://openreview.net/pdf?id=5B5fOqwuhG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155493>)

Compound AI systems promise capabilities beyond those of individual models, yet their success depends critically on effective orchestration\. Existing routing approaches face two limitations: \(1\) input\-level routers make coarse query\-level decisions that ignore evolving task requirements; \(2\) RL\-trained orchestrators are expensive to adapt and often suffer from routing collapse, repeatedly invoking one option in multi\-turn scenarios\. We introduce SkillOrchestra, a framework for skill\-aware orchestration\. Instead of directly learning a routing policy end\-to\-end, SkillOrchestra learns fine\-grained skills from execution experience and models agent\-specific competence and cost under those skills\. At deployment, the orchestrator infers the skill demands of the current interaction and selects agents that best satisfy them under an explicit performance\-cost trade\-off\. Extensive experiments across ten benchmarks demonstrate that SkillOrchestra outperforms SoTA RL\-based orchestrators by up to 27\.5% with 700x and 300x learning cost reduction compared to Router\-R1 and ToolOrchestra, respectively\. These results show that explicit skill modeling enables scalable, interpretable, and sample\-efficient orchestration, offering a principled alternative to data\-intensive RL\-based approaches\.

## $SE\(2\)$\-Aware Conditional Distribution Transport for Vehicle Trajectory Generation

**Authors:** Di Wen; Zhaocheng He; Shuhui Wang

**ID:** 153739 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J6cwAmCr02>) | [PDF](<https://openreview.net/pdf?id=J6cwAmCr02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153739>)

Vehicle trajectory generation is critical for autonomous driving simulation\.  However, current generative models face two coupled limitations:  \(i\) imbalanced trajectory distributions bias them toward frequent motions, such as straight driving or stationary states, while weakening their ability to synthesize rare but safety critical motions, such as turning\.  \(ii\) Euclidean intermediate spaces provide limited geometric inductive bias for modeling vehicle pose evolution\.  Together, these limitations lead to mode biased generation and physically less coherent trajectories\. To address this issue, we propose SEA, an \\underline\{\\textbf\{SE\}\}\(2\)\-\\underline\{\\textbf\{A\}\}ware vehicle trajectory generation method that realizes the conditional transport path through planar rigid body poses\.  At the \\textbf\{data distribution\} level, SEA learns vehicle trajectory distributions from traffic data to capture individual motion characteristics\. At the \\textbf\{physical\-space\} level, motivated by the geometry dependence of \{\\bf optimal transport\} interpolation, SEA realizes intermediate transport states through an $SE\(2\)$\-consistent construction, thereby preserving geometric interpretability and physical coherence during generation\. Extensive experiments on large scale real world datasets show that our method outperforms state of the art approaches by generating more realistic, diverse and dynamically consistent trajectories\.

## Rep2Text: Decoding Full Text from a Single LLM Token Representation

**Authors:** Haiyan Zhao; Zirui He; Yiming Tang; Fan Yang; Ali Payani; Dianbo Liu; Mengnan Du

**ID:** 153066 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OET7WYchkH>) | [PDF](<https://openreview.net/pdf?id=OET7WYchkH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153066>)

Large language models \(LLMs\) have achieved remarkable progress across diverse tasks, yet their internal mechanisms remain largely opaque\. In this work, we investigate a fundamental question: to what extent can the original input text be recovered from a single last\-token representation in an LLM? To this end, we propose Rep2Text, a novel framework for decoding text from last\-token representations\. Rep2Text employs a trainable adapter that maps a target model’s last\-token representation into the token embedding space of a decoding language model, which then autoregressively reconstructs the input text\. Experiments across various model combinations \(Llama\-3\.1\-8B, Gemma\-7B, Mistral\-7B\-v0\.1, Llama\-3\.2\-3B, etc\.\) show that, on average, roughly half of the tokens in 16\-token sequences can be recovered from this compressed representation while preserving strong semantic coherence\. Further analysis reveals a clear information bottleneck effect: as sequence length increases, token\-level recovery declines, while semantic information remains relatively well preserved\. We also find that scaling effects are less pronounced in inversion tasks\. Finally, our framework demonstrates robust generalization to out\-of\-distribution clinical data\.

## Position: We Need Greater Transparency to Maintain Research Pipeline Reliability Despite GenAI

**Authors:** Hillmer Chona; Sourav Panda; Frank Ritter; Jonathan Dodge

**ID:** 140080 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LOuXOaoYvI>) | [PDF](<https://openreview.net/pdf?id=LOuXOaoYvI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140080>)

This position paper argues that the research community must act to maintain research pipeline reliability despite increasing threats from GenAI\. We start in the pre\-GenAI era by highlighting some of the prominent critiques of the research pipeline, consisting of: \(a\) Authoring, \(b\) Reviewing, and \(c\) Evaluating researchers based on bibliometrics\. Then, we discuss some of the effects GenAI has had on each research pipeline component based on the best available data, limited though it may be\. Importantly, due to opaqueness of the submission pipeline, it is difficult to measure both the impact of GenAI and the efficacy of interventions, which leads us to call for greater transparency\. Last, we conclude by offering three alternative views and ten paths forward that may mitigate some of the issues we highlight by keeping human researchers as the primary driver of science

## Inferring Computational Structure from Neural Recordings with Gain\-Modulated Linear Dynamical Systems

**Authors:** Yiteng Zhang; Zixiong Wang; Zhengze Wang; Ke Chen; Xingyu Li; Bin Min

**ID:** 153994\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153994

[Paper](<https://openreview.net/forum?id=H0jkombMst>) | [PDF](<https://openreview.net/pdf?id=H0jkombMst>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153994>)

Latent dynamical models can accurately fit neural population activity, yet accurate activity fitting alone does not guarantee mechanistic validity\. Using synthetic benchmarks, we show that even well\-fitted low\-rank RNNs can yield misleading circuit interpretations when the prescribed activation function deviates from the ground\-truth one\. To address this limitation, we introduce gain\-modulated linear dynamical systems \(gmLDS\), which decompose latent dynamics into a state\-dependent, unit\-wise gain and a static low\-rank connectivity matrix, allowing the model to adapt to diverse nonlinear responses without assuming a fixed activation function\. Across multiple synthetic benchmarks, gmLDS accurately recovers the local effective connectivity of the underlying model, thereby reconstructing the linearized dynamics along neural trajectories\. Applied to neural recordings from perceptual and context\-dependent decision\-making tasks, gmLDS yields interpretable hypotheses about dynamical structure, including attractor structure in perceptual decision\-making and context\-dependent selection mechanisms\. Together, these results support gmLDS as an effective approach for inferring computational structure from neural recordings\.

## Local–Global Sparse Autoencoders for Multiscale Interpretability in Vision Models

**Authors:** Itay Benou; Tammy Riklin Raviv

**ID:** 151172\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151172

[Paper](<https://openreview.net/forum?id=cS2IkMjMnL>) | [PDF](<https://openreview.net/pdf?id=cS2IkMjMnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151172>)

Visual understanding is inherently hierarchical as high\-level semantic concepts are composed of fine\-grained, spatially localized components\. Yet existing interpretability methods typically operate at a single scale, either local or global, leaving a critical gap in understanding the compositional structure between them\. Recovering this structure without supervision is particularly challenging, as the correspondence between local and global concepts is latent, varies across samples, and may appear only through inconsistent or partial patterns\. To address this challenge, we introduce Local\-Global Sparse Autoencoders \(LG\-SAE\), an unsupervised framework for multiscale interpretability in vision models\. The core innovation of LG\-SAE is a learned compositional bridge  that explicitly captures the relationships between local and global concepts\. By jointly decomposing patch\-level and image\-level embeddings, LG\-SAE induces a sparse interpretable graph that reveals how each high\-level semantic concept is supported by a small set of spatially grounded components\. Building on this representation, we present a unified framework for discovering local\-global concept relationships, constructing multiscale Concept Bottleneck Models, spatially aware concept naming, and model steering through localized concept edits\. Extensive evaluations show that LG\-SAE: \(i\) captures meaningful cross\-scale feature relations; \(ii\) enables high\-quality spatial grounding without compromising downstream accuracy; and \(iii\) provides interpretable model explanations, further validated by a user study\.

## Learning Interpretable Switching Dynamics in Shared Neural\-Behavioral Latent Space

**Authors:** Yongxu Zhang; Josue Ortega Caro; Rachel L Oren; Michael J Higley; Jessica Cardin; Anne Churchland; Shreya Saxena

**ID:** 151607\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151607

[Paper](<https://openreview.net/forum?id=ZI46yRLHVp>) | [PDF](<https://openreview.net/pdf?id=ZI46yRLHVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151607>)

Modern recording technologies enable simultaneous measurement of high\-dimensional neural activity and rich behavioral variables, creating both an opportunity and a modeling challenge: identifying the shared latent structure that mediates the brain\-behavior relationship and the underlying dynamics through which it evolves across behavioral states\. Existing approaches focus on different parts of this challenge: shared representation learning methods identify neural\-behavioral subspaces but typically do not model dynamical structure, while dynamical models capture temporal variation and discrete state transitions in neural activity, but do not explicitly disentangle shared neural\-behavioral structure from modality\-specific variability\. We introduce Switching Shared Latent Dynamics \(SSLD\), a unified framework that learns a latent representation shared between neural activity and behavior and endows this shared space with nonlinear switching recurrent dynamics to reflect the hypothesis that behaviorally relevant neural representations exhibit structured dynamical changes across behavioral states\. Complementary private latent variables capture modality\-specific variability, providing a window into neural activity that does not directly interact with behavior\. We evaluate SSLD on a simulated dataset and four diverse experimental datasets spanning species, brain regions, and recording modalities: monkey motor and premotor cortex during reaching, somatosensory cortex during a bump task, widefield calcium imaging across mouse dorsal cortex during \(a\) self\-initiated decision\-making and \(b\) spontaneous movements\. Across all four datasets, SSLD accurately reconstructs neural and behavioral signals, recovers discrete states in the dynamics that align with experimentally defined behavioral epochs, and isolates behaviorally\-relevant neural information in the shared latent while preserving private neural variability\. Ablations confirm that shared representation learning, behavioral supervision, and switching dynamics each contribute to performance\. SSLD offers an interpretable approach to modeling shared neural\-behavioral dynamics that complements ongoing efforts toward foundation models for neuroscience\.

## What Does a Sparse Autoencoder Feature Do? A Weight\-Based Account

**Authors:** Yiting Liu; Zhihong Deng

**ID:** 149772\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149772

[Paper](<https://openreview.net/forum?id=nQXn6YRf2P>) | [PDF](<https://openreview.net/pdf?id=nQXn6YRf2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149772>)

Sparse autoencoders \(SAEs\) have emerged as a powerful technique for decomposing language model representations into interpretable features\. Current interpretation pipelines infer feature semantics from activation patterns, implicitly assuming every feature has a semantic explanation while overlooking the computational roles features inherit from the SAE training objective\. We introduce a weight\-based interpretation framework that requires no activation data and grounds claims causally through targeted feature\-ablation interventions\. Across Gemma\-2 and Llama\-3\.1, three depth\-dependent signatures show that SAE features inherit the base model's geometry: semantic features form a U\-shape under tied embeddings but bifurcate when untied, attention participation peaks mid\-layer, and the two roles couple oppositely for input\- vs\. output\-oriented features\. This weight\-based view supplies the causal half missing from activation\-based interpretability\.

## How Do Agentic LLMs Decide to Call Tools? A Scaffold Default Controlled by Suppression

**Authors:** XIJIE GONG; Tingxu Han; Jiahao Zhang; Yuxin Cao; Ziqi Ding; Hanqi Yan; Youcheng Sun; Lijie Hu

**ID:** 148769 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vBXDOH5EqA>) | [PDF](<https://openreview.net/pdf?id=vBXDOH5EqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148769>)

_Abstract unavailable from the accessible public sources._

## Position\-aware eXplanation: A Model\-Agnostic Framework for Positional Attributions

**Authors:** Chaehyeon Kim; Gary Weissman; Eric Wong

**ID:** 155520 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4zYGP89YC6>) | [PDF](<https://openreview.net/pdf?id=4zYGP89YC6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155520>)

_Abstract unavailable from the accessible public sources._

## When Attribution Patching Lies: Diagnosis and a Second\-Order Correction

**Authors:** Luyang Zhang; Jialu Wang

**ID:** 154919\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154919

[Paper](<https://openreview.net/forum?id=9z06SMMtXu>) | [PDF](<https://openreview.net/pdf?id=9z06SMMtXu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154919>)

A central goal of mechanistic interpretability is to identify which internal components causally drive a language model's behavior\. Because these importance estimates serve as the evidence for identifying circuits, systematic errors can lead to the misidentification of the underlying mechanisms\. While activation patching provides a gold\-standard causal metric, its computational cost is prohibitive at scale\. Practitioners instead rely on attribution patching, a gradient\-based, first\-order approximation whose reliability remains poorly understood\. In this work, we characterize the source of this unreliability, demonstrating that the dominant error stems from the non\-linearities in the downstream network rather than local curvature at the patched component\. This insight yields three practical tools: \(i\) a reliability score to detect untrustworthy estimates, \(ii\) error bounds quantifying potential attribution mis\-specifications, and \(iii\) a Hessian\-vector\-product \(HVP\) correction that eliminates the leading\-order error with only one additional backward pass\. In evaluations across five model families \(124M–9B parameters\) and both random\-token and naturalistic \(name\-swap\) perturbations, HVP is the only second\-order correction feasible at larger scale, where standard baselines like Integrated Gradients become computationally prohibitive\. In comparative experiments, a multi\-step HVP variant matches or exceeds the accuracy of Integrated Gradients at significantly lower compute, outperforming prior second\-order baselines\. These improvements lead to higher\-fidelity circuit recovery on standard benchmarks and support a \_Screen\-Flag\-Fix\_ workflow that targets computational effort only toward the components flagged as unreliable\.

## Attributions All the Way Down? The Metagame of Interpretability

**Authors:** Hubert Baniecki; Przemyslaw Prem Biecek; Fabian Fumagalli

**ID:** 148384\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148384

[Paper](<https://openreview.net/forum?id=yHeBdE6C4F>) | [PDF](<https://openreview.net/pdf?id=yHeBdE6C4F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148384>)

We introduce the metagame, a conceptual framework for quantifying second\-order interaction effects of model explanations\. For any first\-order attribution $\\phi\(f\)$ explaining a model $f$, we measure the directional influence of feature $j$ on the attribution of feature $i$, denoted as meta\-attribution $\\varphi\_\{j \\to i\}\(f\)$, by treating the attribution method itself as a cooperative game and computing its Shapley value\. Theoretically, we prove that attributions hierarchically decompose into meta\-attributions, and establish these as directional extensions of existing interaction indices\. Empirically, we demonstrate that the metagame delivers insights across diverse interpretability applications: \(i\) quantifying token interactions in instruction\-tuned language models, \(ii\) explaining cross\-modal similarity in vision\-language encoders, and \(iii\) interpreting text\-to\-image concepts in multimodal diffusion transformers\.

## Proxy\-Based Approximation of Shapley and Banzhaf Interactions

**Authors:** Santo Thies; Hubert Baniecki; R\. Teal Witter; Eyke Hüllermeier; Maximilian Muschalik; Fabian Fumagalli

**ID:** 153973\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153973

[Paper](<https://openreview.net/forum?id=H7HFOu71Yi>) | [PDF](<https://openreview.net/pdf?id=H7HFOu71Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153973>)

Shapley and Banzhaf interactions capture the complex dynamics inherent in modern machine learning applications\. However, current estimators for these higher\-order interactions trade off between speed and accuracy\. To overcome this limitation, we introduce ProxySHAP\. ProxySHAP reconciles the high sample efficiency of tree\-based proxy models with a principled path to consistency via residual correction\. On a theoretical level, we derive a polynomial\-time generalization of interventional TreeSHAP to compute exact interaction indices for tree ensembles, successfully bypassing exponential tree\-depth dependencies in prior methods\. Furthermore, we formally analyze the residual adjustment strategy, characterizing the specific conditions under which Maximum Sample Reuse \(MSR\) corrects proxy bias without its variance scaling exponentially with interaction size\. Extensive benchmarking demonstrates that ProxySHAP sets a new state\-of\-the\-art standard for approximation quality, including in large\-scale applications with thousands of features\. By achieving the lowest error in both small\- and large\-budget regimes, ProxySHAP significantly outperforms the prior best estimators ProxySPEX and KernelSHAP\-IQ, while also delivering superior performance on downstream explainability tasks\.

## The Curse of Multiple Mediators: Hidden Interaction Effects in Activation Patching

**Authors:** Sankaran Vaidyanathan; David Arbour; Aaron Mueller; Scott Niekum; David Jensen

**ID:** 154497 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DA12jH1hET>) | [PDF](<https://openreview.net/pdf?id=DA12jH1hET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154497>)

Activation patching is the primary tool in mechanistic interpretability\. It attributes causal responsibility for a model behavior to each of its individual components by estimating its \_natural indirect effect \(NIE\)\_\. Re\-deriving the activation patching estimand from causal mediation analysis, we find that the NIE does not solely capture the causal effect through the specific component\. It also contains \_interaction effects \(INT\)\_ that measure how much the component's causal effect itself depends on the state of other components in the model\. A natural response may be to try to eliminate INT by adjusting the estimator or unit of analysis, but each of these potential remedies has predictable failure modes\. We demonstrate these failure modes in the GPT\-2 IOI circuit; components whose causal importance is conditional on the state of other components are either invisible or artificially inflated, and INT variance explains the previously documented instability of faithfulness scores\. We prove that INT scales with the distance between clean and patched component activations, is negligible when the model is locally affine, and decomposes combinatorially into pairwise and higher\-order group interactions\. Despite its inevitability, INT is not a nuisance to be eliminated, but rather a diagnostic for interpretability studies\. Its individual and group\-level magnitude and sign signal when causal conclusions are prompt\-dependent, and when greedy NIE\-based component ranking will miss mechanisms only discoverable through combinatorial search\.

## Interpretable Machine Learning Evaluates Differential Therapy Effects in Parkinsonian Gait

**Authors:** Artur Chudzik; Henryk Josiński; Andrzej Przybyszewski

**ID:** 150075 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kujHXHRX7K>) | [PDF](<https://openreview.net/pdf?id=kujHXHRX7K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150075>)

Parkinson's disease therapy is usually adjusted based on extensive clinical examinations, but the effects of medication and deep brain stimulation \(DBS\) on gait dynamics remain difficult to quantify precisely\. We use interpretable probabilistic machine learning to measure therapy\-related gait changes in a repeated\-measures motion\-capture dataset comprising 376 walking trials from 19 patients with Parkinson's disease\. Patients were recorded under four therapy conditions: medication off/stimulation off, medication off/stimulation on, medication on/stimulation off, and medication on/stimulation on\. They performed natural and fast walking, and a study neurologist scored motor severity using UPDRS\-III\. From 1\.0 s sliding windows of foot\-marker motion, we compute short\-window largest Lyapunov exponent \(LLE\)\-derived local divergence features that capture local changes in gait trajectory dynamics\. We summarize these features as two LLE\-derived digital biomarkers: left\-right asymmetry and left\-right coupling\. Bayesian hierarchical regression then estimates medication, stimulation, and task effects while accounting for repeated measurements within the same patients and patient\-specific baseline differences\. The main result is that during natural walking, LLE asymmetry decreased under combined therapy with a large paired effect size \($d\_z=\-0\.83$\)\. Coupling features changed with therapy in a complementary way, especially for stimulation\-related changes in bilateral coordination\. These findings suggest that short\-window LLE asymmetry tracks therapy\-related reduction of lateralized gait dysregulation, while LLE coupling tracks treatment\-dependent reorganization of left\-right coordination\. By modeling novel LLE\-derived biomarkers across controlled medication and DBS states, we show that the two therapies are expressed through distinct gait\-dynamics signatures, supporting interpretable nonlinear gait biomarkers for objective therapy\-response assessment\.

## Amortized Linear\-time Exact Shapley Value for Product\-Kernel Methods

**Authors:** Majid Mohammadi; Siu Lun \(Alan\) Chau; Krikamol Muandet

**ID:** 149276 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rWupQhgBV4>) | [PDF](<https://openreview.net/pdf?id=rWupQhgBV4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149276>)

_Abstract unavailable from the accessible public sources._

## Agentic\-imodels: Evolving agentic interpretability tools via autoresearch

**Authors:** Chandan Singh; Yan Shuo Tan; Weijia Xu; Zelalem Gero; Weiwei Yang; Michel Galley; Jianfeng Gao

**ID:** 154318 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EY6O5VNNlV>) | [PDF](<https://openreview.net/pdf?id=EY6O5VNNlV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154318>)

_Abstract unavailable from the accessible public sources._

## Metaphor Is Not All Attention Needs

**Authors:** Olga Sorokoletova; Francesco Giarrusso; Giacomo De Luca; Piercosma Bisconti Lucidi; Matteo Prandi; Federico Pierucci; Marcello Galisai; Vincenzo Suriani; Daniele Nardi

**ID:** 153558 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KV6QfeD53p>) | [PDF](<https://openreview.net/pdf?id=KV6QfeD53p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153558>)

_Abstract unavailable from the accessible public sources._

## Rep2Text: Decoding Full Text from a Single LLM Token Representation

**Authors:** Haiyan Zhao; Zirui He; Yiming Tang; Fan Yang; Ali Payani; Dianbo Liu; Mengnan Du

**ID:** 153066\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153066

[Paper](<https://openreview.net/forum?id=OET7WYchkH>) | [PDF](<https://openreview.net/pdf?id=OET7WYchkH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153066>)

Large language models \(LLMs\) have achieved remarkable progress across diverse tasks, yet their internal mechanisms remain largely opaque\. In this work, we investigate a fundamental question: to what extent can the original input text be recovered from a single last\-token representation in an LLM? To this end, we propose Rep2Text, a novel framework for decoding text from last\-token representations\. Rep2Text employs a trainable adapter that maps a target model’s last\-token representation into the token embedding space of a decoding language model, which then autoregressively reconstructs the input text\. Experiments across various model combinations \(Llama\-3\.1\-8B, Gemma\-7B, Mistral\-7B\-v0\.1, Llama\-3\.2\-3B, etc\.\) show that, on average, roughly half of the tokens in 16\-token sequences can be recovered from this compressed representation while preserving strong semantic coherence\. Further analysis reveals a clear information bottleneck effect: as sequence length increases, token\-level recovery declines, while semantic information remains relatively well preserved\. We also find that scaling effects are less pronounced in inversion tasks\. Finally, our framework demonstrates robust generalization to out\-of\-distribution clinical data\.

## Probing for Representation Manifolds in Superposition

**Authors:** Alexander Modell

**ID:** 151114 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=csOfiTnHi8>) | [PDF](<https://openreview.net/pdf?id=csOfiTnHi8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151114>)

This paper introduces the Manifold Probe, a supervised method for discovering representation manifolds in superposition\. The method generalizes linear regression probes by learning the space of features of a concept that can be linearly predicted from the representations, and then learning the directions used to encode them\. We demonstrate the probe on representations of time and space in Llama 2\-7b, finding manifolds which linearly represent an interpretable set of features in each case\. In the case of time, we show that by steering along the manifold, we can influence the model's completions about the years in which famous songs, movies and books were released, providing evidence that the Manifold Probe can discover manifolds which are causally involved in the model's behaviour\.

## TreePII: Efficient Computation of Higher\-Order Probabilistic Interaction Indices in Tree Ensembles

**Authors:** Junho Choi; Jaesik Choi

**ID:** 153976 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H6uLXEZRGE>) | [PDF](<https://openreview.net/pdf?id=H6uLXEZRGE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153976>)

While higher\-order interaction indices offer deep insights into the synergies and redundancies within tree ensembles, their exact computation is hindered by combinatorial bottlenecks\. Recent advancements efficiently compute symmetric interactions, but struggle to scale for asymmetric Probabilistic Interaction Indices \(PIIs\), which are crucial for advanced tasks such as incorporating feature hierarchy structures\. To bridge this gap, we introduce TreePII, a novel algorithm that computes exact, any\-order PIIs by integrating the partial derivatives of multilinear extension using interpolatory quadrature\. TreePII effectively bypasses traditional computational hurdles, demonstrating both theoretical and empirical improvements over existing baselines and opening new avenues for scalable analysis of tree ensembles\.

## Conclusions from Circuit Extraction Depend on the Level of Description: A Controlled Comparison

**Authors:** yang sheng; Jie Fu

**ID:** 155212 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7RfZ1ThE5z>) | [PDF](<https://openreview.net/pdf?id=7RfZ1ThE5z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155212>)

Circuit extraction identifies model components that preserve a target behavior under ablation, yet it remains unclear which parts of the reported circuit—components, edges, or coarser summaries—remain stable across reasonable extraction choices\. We study this question in a Lean\-style, rule\-generated tactic\-prediction benchmark spanning atomic and compositional proof tasks\. The proof\-state rules and task structure are fixed by construction, and dense and weight\-sparse variants of one transformer architecture are compared\. In this controlled setting, we compare three ways to describe a circuit: a compact prediction\-preserving circuit, a broader graph that keeps read, write, and routing components around that circuit, and a pruning graph whose size is set by a target post\-ablation loss budget\. We vary model sparsity, whether the query and key sides of attention are represented together or separately, the post\-ablation loss budget for the pruning graph, and which supervised checkpoint initializes reinforcement learning \(RL\)\. When the same extraction method is used, dense and weight\-sparse checkpoints overlap far more in the set of attention heads identified than in exact component\-to\-component edge lists\. This head\-level overlap is well above a random top\-$k$ baseline; the exact\-edge overlap is not consistently so\. Tracking query and key sides separately, and varying the loss budget across the tested range, preserves the ordering of the RL initialization conditions when each graph is summarized by how many components it selects\. Among these RL conditions, the largest gains on compositional tasks are accompanied by the largest fraction of compositional\-task circuit nodes that lie outside the matched atomic\-task circuits\. These findings show that, even in this controlled setting, behavior preservation under ablation does not determine a unique circuit\-level conclusion: the conclusion depends on which graph is reported, how it is extracted, and at which level of description the comparison is made\.

## Reproducibility study of "Bilinear MLPs enable weight\-based mechanistic interpretability"

**Authors:** Hamid Reza Ahmadi; Mihnea Andrei Bârsan; Jan Jelínek; Robert\-Stefan Sofroni

**ID:** 157016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bnx3hf3mWp>) | [PDF](<https://openreview.net/pdf?id=Bnx3hf3mWp>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

This paper presents a reproducibility study of "Bilinear MLPs enable weight\-based mechanistic interpretability" by Pearce et al\. \(2024\), which proposes that bilinear architectures possess intrinsic interpretability properties accessible via eigenvalue decomposition\. We verify the core empirical image classification claims\. Our results confirm the findings for image classification: bilinear layers consistently exhibit an interpretable low\-rank structure where the leading eigenvectors capture the majority of task\-relevant information, allowing for significant truncation without performance loss\. Furthermore, we validate that these eigenstructures are stable across random initializations and varying model sizes\. Additionally, we explore extensions to the original work, demonstrating that adversarial training \(specifically PGD\) enhances the interpretability of eigenvector features on MNIST\. Finally, we explored generalization on more complex RGB datasets, such as CIFAR\-10 and CIFAR\-100, which have generated eigenvectors with uninterpretable structures\. All our code is publicly available at: https://anonymous\.4open\.science/r/reproduced\-mech\-inter\-image\-class

## Verified\-Source Authority Is Not Generic Sycophancy: Cue\-Family Decomposition of LLM Compliance

**Authors:** Abhinav Rajeev Kumar; Paras Chopra

**ID:** 150614 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gpiTlXxy4C>) | [PDF](<https://openreview.net/pdf?id=gpiTlXxy4C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150614>)

_Abstract unavailable from the accessible public sources._

## Beyond the Grid: Continuous Dictionary Pursuit for Interpretable Signal Decomposition

**Authors:** Nick Janssen; Melanie Schaller; Bodo Rosenhahn

**ID:** 151808 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XrVRVRXvqa>) | [PDF](<https://openreview.net/pdf?id=XrVRVRXvqa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151808>)

_Abstract unavailable from the accessible public sources._

## What Comes Next and Why: Interpretable Next\-Event Prediction with Neuro\-Symbolic Rules

**Authors:** Tim Nico Bauerschmidt; Isabel Valera; Jilles Vreeken

**ID:** 155030 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8zAngnuSAi>) | [PDF](<https://openreview.net/pdf?id=8zAngnuSAi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155030>)

_Abstract unavailable from the accessible public sources._

## Measuring Cross\-Modal Synergy: A Benchmark for VLM Explainability

**Authors:** Joël Roman Ky; Salah GHAMIZI; Maxime Cordy

**ID:** 139418 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rt2AbMM2YF>) | [PDF](<https://openreview.net/pdf?id=Rt2AbMM2YF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139418>)

_Abstract unavailable from the accessible public sources._

## Auditing is not Evaluating: LLM Audit Requires Dynamic, Contextual, Budget\-aware and Reliable Evidence

**Authors:** Cléa Chataigner; Pablo Piantanida; Golnoosh Farnadi

**ID:** 140075 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oruatg6X7C>) | [PDF](<https://openreview.net/pdf?id=Oruatg6X7C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140075>)

_Abstract unavailable from the accessible public sources._

## Learning interpretable Schur forms of recurrent weight matrices

**Authors:** Alexander Lanine; Liana Akobian; N Alex Cayco Gajic

**ID:** 155071 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8gcHRPsjr5>) | [PDF](<https://openreview.net/pdf?id=8gcHRPsjr5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155071>)

Recurrent neural networks are widely used in neuroscience and machine learning, but their weight matrices often appear dense and unstructured, defying clean interpretation\. The Schur decomposition expresses any recurrent weight matrix in quasi\-triangular form, allowing network dynamics to be interpreted as a latent circuit of "functionally feedforward" interactions between orthogonal modes\. However, its application for interpreting recurrent weight matrices has been limited due to its well\-known combinatorial non\-uniqueness\. We introduce SchurMO \(Schur Manifold Optimization\), a method for discovering structured Schur forms via Riemannian gradient descent on the manifold of orthogonal similarity transformations, enabling recovery of target motifs\. Compared to a greedy baseline, SchurMO more reliably and more efficiently recovers ground\-truth latent motifs \(chain\-like, banded, and modular structure\) from noisy weight matrices\. Applying SchurMO to nonlinear recurrent networks enables recovery of latent chain\-like structure, providing a link between connectivity and the underlying dynamics of sequence production\. Our results highlight SchurMO as a scalable, computationally efficient approach to discovering latent structure in the Schur forms of recurrent weights\.

## PE\-SHAP: Causally Interpretable Path\-Wise Shapley Explanations

**Authors:** Maksym Buleshnyi; Joshua Loftus; Sakina Hansen

**ID:** 155303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6afj7vl5xr>) | [PDF](<https://openreview.net/pdf?id=6afj7vl5xr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155303>)

Shapley value\-based explanations are widely used to attribute model predictions, but standard variants capture associative rather than causal relationships\. Recent causally informed Shapley methods add a path\-wise decomposition, but suffer from two key limitations: they assign zero attribution to chain\-mediated paths, and their per\-path values do not align with classical mediation estimands\.  We propose PE\-SHAP, a Shapley\-inspired path\-wise decomposition built on the portion\-eliminated effect\. Per\-mediator values sum to the total mediated effect at every sample, aggregate to the Natural Indirect Effect at the population level, and match the Path\-Specific Effect under additive separability\. These are properties prior Shapley\-based path\-wise methods do not provide\. We validate PE\-SHAP analytically and through Monte\-Carlo experiments on synthetic SCMs with known path effects, and demonstrate it on real\-world fairness case studies using the German Credit and COMPAS datasets\.

## Measuring What Matters: Synthetic Benchmarks for Concept Bottleneck Models

**Authors:** Julian Skirzynski; Harry Cheon; Shreyas Kadekodi; Meredith Stewart; Berk Ustun

**ID:** 138890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yX9HoznzlL>) | [PDF](<https://openreview.net/pdf?id=yX9HoznzlL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138890>)

Concept bottleneck models predict outcomes from high\-level concepts detected in inputs\. Although concepts provide a simple way to reap benefits from interpretability, very few datasets include concept labels\. This limits researchers' ability to determine which problems are suitable for these models, isolate the factors that drive their performance or lead to failures, or uncover which algorithms perform well\. In this paper, we develop synthetic benchmarks for concept\-bottleneck models, focusing on their two main use cases: decision support, in which models assist humans in making better decisions, and automation, in which models handle routine tasks without supervision\. Our benchmarks can generate labeled datasets while controlling for properties that affect performance, including data modality, concept choice, annotation quality, and completeness\. We demonstrate how the benchmarks can be used to evaluate representative classes of concept bottleneck models\. Our demonstrations show how the benchmarks can diagnose failure modes and guide follow\-up testing\.

## Inside the Loop: A Mechanistic Study of Weight\-Tied Transformers on Depth\-Bound Algorithmic Tasks

**Authors:** Magnus Sesodia; Philip Torr; Christian Schroeder de Witt

**ID:** 150577 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8PkVhb8VI>) | [PDF](<https://openreview.net/pdf?id=h8PkVhb8VI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150577>)

Solving algorithmic tasks that involve many sequential steps typically requires scaling up transformer depth or chain\-of\-thought length, incurring unfavorable parameter and inference\-compute costs, respectively, as tasks deepen\. Looped transformers promise to recover that depth at a fraction of the cost by reusing a single block across iterations, but it remains unclear how the loop actually performs its computation, or whether it merely simulates a deeper untied stack\. We test this on \\emph\{directed permutation traversal\} \(\\dePo\), a synthetic task in the physics\-of\-LMs lineage in which solving an $H$\-hop query requires following $H$ pointers along a fixed permutation of $N\{=\}16$ entities, with $H$ up to $15$\. We demonstrate that, above a minimum effective depth, a $3\.2$\\,M\-parameter looped transformer trained with hop length sampled uniformly per batch traverses all $15$ hops across all seeds, while a $25\.8$\\,M\-parameter fixed\-depth baseline at the same effective depth fails to exceed three hops; weight tying, not effective depth, predicts capability\. In the same models, linear probes on the residual stream uncover a clean \\emph\{staircase\}: at iteration $k$ the stream linearly decodes hop $k$, with slope exactly one hop per iteration, and each hop stays decodable for roughly two further iterations before being overwritten\. The model's own logit lens, applied through the trained final layers, traces the same one\-hop\-per\-iteration ordering at lower amplitude\. Taken together, our results recast looped transformers as iterative program learners: weight tying forces the optimizer to discover a single per\-iteration update rule, and that rule corresponds to one algorithmic step of the underlying task\. Code is available at \\url\{https://anonymous\.4open\.science/r/insidetheloop\-3ED0\}\.

## When Attribution Patching Lies: Diagnosis and a Second\-Order Correction

**Authors:** Luyang Zhang; Jialu Wang

**ID:** 154919\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154919

[Paper](<https://openreview.net/forum?id=9z06SMMtXu>) | [PDF](<https://openreview.net/pdf?id=9z06SMMtXu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154919>)

A central goal of mechanistic interpretability is to identify which internal components causally drive a language model's behavior\. Because these importance estimates serve as the evidence for identifying circuits, systematic errors can lead to the misidentification of the underlying mechanisms\. While activation patching provides a gold\-standard causal metric, its computational cost is prohibitive at scale\. Practitioners instead rely on attribution patching, a gradient\-based, first\-order approximation whose reliability remains poorly understood\. In this work, we characterize the source of this unreliability, demonstrating that the dominant error stems from the non\-linearities in the downstream network rather than local curvature at the patched component\. This insight yields three practical tools: \(i\) a reliability score to detect untrustworthy estimates, \(ii\) error bounds quantifying potential attribution mis\-specifications, and \(iii\) a Hessian\-vector\-product \(HVP\) correction that eliminates the leading\-order error with only one additional backward pass\. In evaluations across five model families \(124M–9B parameters\) and both random\-token and naturalistic \(name\-swap\) perturbations, HVP is the only second\-order correction feasible at larger scale, where standard baselines like Integrated Gradients become computationally prohibitive\. In comparative experiments, a multi\-step HVP variant matches or exceeds the accuracy of Integrated Gradients at significantly lower compute, outperforming prior second\-order baselines\. These improvements lead to higher\-fidelity circuit recovery on standard benchmarks and support a \_Screen\-Flag\-Fix\_ workflow that targets computational effort only toward the components flagged as unreliable\.

## Attributions All the Way Down? The Metagame of Interpretability

**Authors:** Hubert Baniecki; Przemyslaw Prem Biecek; Fabian Fumagalli

**ID:** 148384\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148384

[Paper](<https://openreview.net/forum?id=yHeBdE6C4F>) | [PDF](<https://openreview.net/pdf?id=yHeBdE6C4F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148384>)

We introduce the metagame, a conceptual framework for quantifying second\-order interaction effects of model explanations\. For any first\-order attribution $\\phi\(f\)$ explaining a model $f$, we measure the directional influence of feature $j$ on the attribution of feature $i$, denoted as meta\-attribution $\\varphi\_\{j \\to i\}\(f\)$, by treating the attribution method itself as a cooperative game and computing its Shapley value\. Theoretically, we prove that attributions hierarchically decompose into meta\-attributions, and establish these as directional extensions of existing interaction indices\. Empirically, we demonstrate that the metagame delivers insights across diverse interpretability applications: \(i\) quantifying token interactions in instruction\-tuned language models, \(ii\) explaining cross\-modal similarity in vision\-language encoders, and \(iii\) interpreting text\-to\-image concepts in multimodal diffusion transformers\.

## Proxy\-Based Approximation of Shapley and Banzhaf Interactions

**Authors:** Santo Thies; Hubert Baniecki; R\. Teal Witter; Eyke Hüllermeier; Maximilian Muschalik; Fabian Fumagalli

**ID:** 153973\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153973

[Paper](<https://openreview.net/forum?id=H7HFOu71Yi>) | [PDF](<https://openreview.net/pdf?id=H7HFOu71Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153973>)

Shapley and Banzhaf interactions capture the complex dynamics inherent in modern machine learning applications\. However, current estimators for these higher\-order interactions trade off between speed and accuracy\. To overcome this limitation, we introduce ProxySHAP\. ProxySHAP reconciles the high sample efficiency of tree\-based proxy models with a principled path to consistency via residual correction\. On a theoretical level, we derive a polynomial\-time generalization of interventional TreeSHAP to compute exact interaction indices for tree ensembles, successfully bypassing exponential tree\-depth dependencies in prior methods\. Furthermore, we formally analyze the residual adjustment strategy, characterizing the specific conditions under which Maximum Sample Reuse \(MSR\) corrects proxy bias without its variance scaling exponentially with interaction size\. Extensive benchmarking demonstrates that ProxySHAP sets a new state\-of\-the\-art standard for approximation quality, including in large\-scale applications with thousands of features\. By achieving the lowest error in both small\- and large\-budget regimes, ProxySHAP significantly outperforms the prior best estimators ProxySPEX and KernelSHAP\-IQ, while also delivering superior performance on downstream explainability tasks\.

## Coherent Routing in Decision Trees: Phase\-Interference Learning for Interpretable Tabular Prediction

**Authors:** David Li; Angela Li

**ID:** 155857\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155857

[Paper](<https://openreview.net/forum?id=2OLBsM6UWI>) | [PDF](<https://openreview.net/pdf?id=2OLBsM6UWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155857>)

We introduce Phase\-Interference Decision Trees \(PIDT\), a differentiable routing model for tabular prediction in which each node propagates a bounded complex state rather than only a scalar routing probability\. The main model uses two\-state norm\-preserving branch maps: a gate controls how much amplitude is sent to the left and right children, while learned unitary maps rotate the latent state before subsequent splits\. This formulation contains ordinary soft decision trees as the phase\-free scalar case, and two\-state routing creates explicit score\-level cross terms among latent\-state trajectories\. We give a self\-contained PIDT definition with exact mass conservation, prove scalar phase cancellation, establish a scoped containment relation with soft trees, derive an algebraic interference decomposition, give a companion construction for shared two\-state parity routing, and derive a fixed\-architecture empirical Rademacher upper bound for bounded two\-state PIDT scores\. We evaluate PIDT on a ten\-dataset OpenML suite of low\-class\-count tabular tasks under matched differentiable\-tree controls\. Across ten seeds per dataset, the main summaries track accuracy as context and report small descriptive NLL and Brier deltas relative to the scalar PIDT\-1S, phase\-frozen PFB, and SDT controls\. The empirical study is framed as a mechanism\-level study for compact differentiable trees, not as a broad tabular\-performance claim\.

## Provable Explanations for Any\-Order Neural Additive Models

**Authors:** Idan Refaeli; Shahaf Bassan; Yizhak Y\. Elboher; Guy Katz

**ID:** 150538\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150538

[Paper](<https://openreview.net/forum?id=hOaJ6pyv0j>) | [PDF](<https://openreview.net/pdf?id=hOaJ6pyv0j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150538>)

Post\-hoc explanation methods for neural networks are often heuristic and lack provable guarantees\. A common alternative to such methods that was studied in recent years is to compute a \*cardinally minimal\* subset of input features that is \*provably sufficient\* to determine the model's prediction\. For general neural networks, however, finding such explanations is computationally intractable\. In contrast, recent work showed that this problem becomes more tractable for a particular family of neural networks, namely neural additive models \(NAMs\), though standard NAMs are highly restrictive because they exclude feature interactions altogether\. In this work, we study the computation of provably minimal and sufficient explanations for neural networks with restricted \*feature interactions\*, bridging the gap between fully general neural networks and purely additive models\. We first prove that even with constant\-order interactions, the problem is $\\Sigma\_2^P$\-hard, implying that worst\-case exponential complexity is unavoidable\. We then identify two provably tractable settings: one based on sparsity in the interaction structure and another based on a stronger interaction\-aware notion of sufficiency\. Under either one of these settings, we develop algorithms that compute provable explanations for neural networks with any\-order interactions while retaining much of the computational efficiency of additive models\. Empirically, we show that these explanations are significantly smaller and faster to obtain than those produced by standard algorithms, while being derived from models that achieve much higher accuracy than standard NAMs\. Overall, our results help expand the class of neural networks that admit efficient provable explanations, while clarifying the fundamental role of feature interactions in shaping their complexity\.

## SkillOrchestra: Learning to Route Agents via Skill Transfer

**Authors:** Jiayu Wang; Yifei Ming; Zixuan Ke; Shafiq Joty; Aws Albarghouthi; Frederic Sala

**ID:** 155493\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155493

[Paper](<https://openreview.net/forum?id=5B5fOqwuhG>) | [PDF](<https://openreview.net/pdf?id=5B5fOqwuhG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155493>)

Compound AI systems promise capabilities beyond those of individual models, yet their success depends critically on effective orchestration\. Existing routing approaches face two limitations: \(1\) input\-level routers make coarse query\-level decisions that ignore evolving task requirements; \(2\) RL\-trained orchestrators are expensive to adapt and often suffer from routing collapse, repeatedly invoking one option in multi\-turn scenarios\. We introduce SkillOrchestra, a framework for skill\-aware orchestration\. Instead of directly learning a routing policy end\-to\-end, SkillOrchestra learns fine\-grained skills from execution experience and models agent\-specific competence and cost under those skills\. At deployment, the orchestrator infers the skill demands of the current interaction and selects agents that best satisfy them under an explicit performance\-cost trade\-off\. Extensive experiments across ten benchmarks demonstrate that SkillOrchestra outperforms SoTA RL\-based orchestrators by up to 27\.5% with 700x and 300x learning cost reduction compared to Router\-R1 and ToolOrchestra, respectively\. These results show that explicit skill modeling enables scalable, interpretable, and sample\-efficient orchestration, offering a principled alternative to data\-intensive RL\-based approaches\.

## A Theory of Spatial Continuous Attractors in Hopfield Energy Landscapes

**Authors:** Chong Li; Xiangyang Xue; Jianfeng Feng; Taiping Zeng

**ID:** 155828\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155828

[Paper](<https://openreview.net/forum?id=2aMmeCVNCj>) | [PDF](<https://openreview.net/pdf?id=2aMmeCVNCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155828>)

Spatial cognition requires stable neural manifolds of orientation and location that track self\-motion and sensory cues\.     Continuous attractors provide a natural dynamical principle, but learning such mechanisms that form and control manifolds with theoretical guarantees remains difficult\.   We propose Spatial Energy Attractor Learning \(SEAL\), a theory of neurodynamics learning for spatial cognition, where continuous spatial representations arise as learned low\-energy manifolds in Hopfield energy landscapes through population\-level Fourier energy learning\.   For head\-direction and grid\-cell systems, Fourier energy landscapes yield ring and torus attractors with learned normal attraction and input\-driven tangent transport\.    We prove that Fourier construction is a special case of a general Hopfield\-compatible energy extension whose autonomous dynamics preserve energy descent and whose expressive energy families approximate target attractor energies and restoring fields\.    Experiments on HD and grid\-cell populations show that the learned energies restore perturbed states to ring and torus manifolds, stabilize velocity\-driven moving bumps across multiple input regimes, and induce continuous\-attractor interactive structures with local excitation and surround inhibition\.   Together, these results provide a stable, learnable, and biologically interpretable energy\-based account of continuous spatial representation\.

## Learning Interpretable Switching Dynamics in Shared Neural\-Behavioral Latent Space

**Authors:** Yongxu Zhang; Josue Ortega Caro; Rachel L Oren; Michael J Higley; Jessica Cardin; Anne Churchland; Shreya Saxena

**ID:** 151607\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151607

[Paper](<https://openreview.net/forum?id=ZI46yRLHVp>) | [PDF](<https://openreview.net/pdf?id=ZI46yRLHVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151607>)

Modern recording technologies enable simultaneous measurement of high\-dimensional neural activity and rich behavioral variables, creating both an opportunity and a modeling challenge: identifying the shared latent structure that mediates the brain\-behavior relationship and the underlying dynamics through which it evolves across behavioral states\. Existing approaches focus on different parts of this challenge: shared representation learning methods identify neural\-behavioral subspaces but typically do not model dynamical structure, while dynamical models capture temporal variation and discrete state transitions in neural activity, but do not explicitly disentangle shared neural\-behavioral structure from modality\-specific variability\. We introduce Switching Shared Latent Dynamics \(SSLD\), a unified framework that learns a latent representation shared between neural activity and behavior and endows this shared space with nonlinear switching recurrent dynamics to reflect the hypothesis that behaviorally relevant neural representations exhibit structured dynamical changes across behavioral states\. Complementary private latent variables capture modality\-specific variability, providing a window into neural activity that does not directly interact with behavior\. We evaluate SSLD on a simulated dataset and four diverse experimental datasets spanning species, brain regions, and recording modalities: monkey motor and premotor cortex during reaching, somatosensory cortex during a bump task, widefield calcium imaging across mouse dorsal cortex during \(a\) self\-initiated decision\-making and \(b\) spontaneous movements\. Across all four datasets, SSLD accurately reconstructs neural and behavioral signals, recovers discrete states in the dynamics that align with experimentally defined behavioral epochs, and isolates behaviorally\-relevant neural information in the shared latent while preserving private neural variability\. Ablations confirm that shared representation learning, behavioral supervision, and switching dynamics each contribute to performance\. SSLD offers an interpretable approach to modeling shared neural\-behavioral dynamics that complements ongoing efforts toward foundation models for neuroscience\.

## What Does a Sparse Autoencoder Feature Do? A Weight\-Based Account

**Authors:** Yiting Liu; Zhihong Deng

**ID:** 149772\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149772

[Paper](<https://openreview.net/forum?id=nQXn6YRf2P>) | [PDF](<https://openreview.net/pdf?id=nQXn6YRf2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149772>)

Sparse autoencoders \(SAEs\) have emerged as a powerful technique for decomposing language model representations into interpretable features\. Current interpretation pipelines infer feature semantics from activation patterns, implicitly assuming every feature has a semantic explanation while overlooking the computational roles features inherit from the SAE training objective\. We introduce a weight\-based interpretation framework that requires no activation data and grounds claims causally through targeted feature\-ablation interventions\. Across Gemma\-2 and Llama\-3\.1, three depth\-dependent signatures show that SAE features inherit the base model's geometry: semantic features form a U\-shape under tied embeddings but bifurcate when untied, attention participation peaks mid\-layer, and the two roles couple oppositely for input\- vs\. output\-oriented features\. This weight\-based view supplies the causal half missing from activation\-based interpretability\.

## How Do Agentic LLMs Decide to Call Tools? A Scaffold Default Controlled by Suppression

**Authors:** XIJIE GONG; Tingxu Han; Jiahao Zhang; Yuxin Cao; Ziqi Ding; Hanqi Yan; Youcheng Sun; Lijie Hu

**ID:** 148769\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148769

[Paper](<https://openreview.net/forum?id=vBXDOH5EqA>) | [PDF](<https://openreview.net/pdf?id=vBXDOH5EqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148769>)

_Abstract unavailable from the accessible public sources._

## Position\-aware eXplanation: A Model\-Agnostic Framework for Positional Attributions

**Authors:** Chaehyeon Kim; Gary Weissman; Eric Wong

**ID:** 155520\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155520

[Paper](<https://openreview.net/forum?id=4zYGP89YC6>) | [PDF](<https://openreview.net/pdf?id=4zYGP89YC6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155520>)

_Abstract unavailable from the accessible public sources._

## Isotropic Activation Functions Enable Deindividuated Neurons and Adaptive Topologies

**Authors:** George Bird

**ID:** 154076 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GNcZkqvGqw>) | [PDF](<https://openreview.net/pdf?id=GNcZkqvGqw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154076>)

Introduced is a methodology for adapting the topology of dense neural networks, enabled by isotropic activation functions\. Achieved through prescribed reparameterisation symmetries and singular\-value decomposition of affine maps, this diagonalises layers into one\-to\-one, ordered connections\. This makes it simpler to assess the impact of individual connections on the function\. Low\-impact neurons can be removed \(neurodegeneration\), and a thresholded buffer of largely inactive 'scaffold' neurons is maintained \(neurogenesis\)\. These symmetry\-led diagonalisation and structural changes are function\-invariant, demonstrated to be computationally identical during neurogenesis, arbitrarily well approximated during neurodegeneration, and enable asymptotic 50% parameter sparsification of dense networks with identically preserved function\. Thus, real\-time restructuring of the architecture in response to task demands, task appending, removal or changes is shown\. The approach is conceptually centred on primitive symmetry\-prescriptions, through which isotropic functions are derived that feature explicit basis independence and a loss in the individuation of neurons implicit in typical elementwise functional forms\. Hence, this allows freedom in the basis to which layers are decomposed and interpreted as individual artificial neurons, directly enabling this adaptive topology approach\. Additionally, a new tunable model parameter, the 'intrinsic length', is introduced to improve this analytical invariance, alongside a generalised isotropic\-perceptron architecture that enables parallel precomputation of all matrix\-vector products and displays a nested functional class\. Diagonalisation is suggested to offer new possibilities for interpretability and monitoring of isotropic networks\.

## Navigating by Old Maps: The Pitfalls of Static Mechanistic Localization in LLM Post\-Training

**Authors:** Hang Chen; Jiaying Zhu; Hongyang Chen; Hongxu Liu; Xinyu Yang; Wenya Wang

**ID:** 149853\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149853

[Paper](<https://openreview.net/forum?id=mpKLCN943S>) | [PDF](<https://openreview.net/pdf?id=mpKLCN943S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149853>)

The "Locate\-then\-Update" paradigm has become a predominant approach in the post\-training of large language models \(LLMs\), identifying critical components via mechanistic interpretability for targeted parameter updates\. However, this paradigm rests on a fundamental yet unverified assumption: can mechanisms derived from current static parameters reliably guide future dynamic parameter updates? To investigate this, we systematically track the structural evolution of Transformer circuits throughout the supervised fine\-tuning \(SFT\) process, revealing the underlying dynamics of task mechanisms\. We introduce three novel metrics—Circuit Distance, Circuit Stability, and Circuit Conflict—to analyze circuit evolution across three dimensions: neural migration, semantic stability, and cross\-task interference\. Our empirical results reveal that circuits inherently exhibit "Free Evolution" during parameter updates\. Consequently, static mechanisms extracted from current states inevitably suffer from temporal latency, making them fundamentally inadequate for guiding future states\. Moreover, by deconstructing the "illusion of effectiveness" in existing methods, this work underscores the necessity of "foresight" in mechanistic localization and proposes a predictive framework for future research\.

## Can Large Language Models Develop Gambling Addiction?

**Authors:** Seungpil Lee; Donghyeon Shin; Yunjeong Lee; Sundong Kim

**ID:** 149163\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149163

[Paper](<https://openreview.net/forum?id=sNiZd9EAPW>) | [PDF](<https://openreview.net/pdf?id=sNiZd9EAPW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149163>)

_Abstract unavailable from the accessible public sources._

## A Composite Activation Function for Learning Stable Binary Representations

**Authors:** Seokhun Park; Choeun Kim; Kwanho Lee; Sehyun Park; Insung Kong; Yongdai Kim

**ID:** 148660\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148660

[Paper](<https://openreview.net/forum?id=w5Om6MXAow>) | [PDF](<https://openreview.net/pdf?id=w5Om6MXAow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148660>)

Activation functions play a central role in neural networks by shaping internal representations\.  Recently, learning binary activation representations has attracted significant attention due to their advantages in computational and memory efficiency, as well as interpretability\.  However, training neural networks with Heaviside activations remains challenging, as their non\-differentiability obstructs standard gradient\-based optimization\. In this paper, we propose Heavy\-Tailed Activation Function \(HTAF\), a smooth approximation to the Heaviside function that enables stable training with gradient\-based optimization\.  We construct HTAF as a sigmoid–hyperbolic tangent composite function and theoretically show that it maintains a large gradient mass around zero inputs while exhibiting slower gradient decay in the tail regions\. We show that Spiking Neural Networks, Binary Neural Networks and Deep Heaviside neural Networks can be trained stably using HTAF with gradient\-based optimization\. Finally, we introduce Implicit Concept Bottleneck Models \(ICBM\), an interpretable image model that leverages HTAF to induce discrete feature representations\. Extensive experiments across various architectures and image datasets demonstrate that ICBM enables stable discretization while achieving prediction performance comparable to or better than standard models\.

## A Reproduction Study of Weight\-Based Mechanistic Interpretability in Bilinear MLPs

**Authors:** Itay Erlich; May Ben Zion; Jacob Shashoua

**ID:** 157024\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 157024

[Paper](<https://openreview.net/forum?id=6k7qRdz7rD>) | [PDF](<https://openreview.net/pdf?id=6k7qRdz7rD>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Mechanistic interpretability typically explains a trained network by analyzing its activations, at the cost of training auxiliary models such as sparse autoencoders \(SAEs\)\. Pearce et al\. \(2025\) pursue an alternative: bilinear MLPs, whose omission of element\-wise nonlinearities makes each layer an exact quadratic form, so interpretable features can be read directly from the weights via eigendecomposition of the layer's interaction tensor\. We present a systematic reproduction of that work\. The vision claims reproduce fully: regularization induces low\-rank, visually interpretable eigenstructure, and our ablations sharpen the original account by identifying weight decay, rather than noise augmentation, as the dominant cause\. The language claims reproduce only partially: we confirm the qualitative discovery of sentiment\-negation circuits, but the reported prevalence of low\-rank feature interactions holds for only one of three publicly released models \(a second becomes consistent once rarely\-active dictionary features are excluded\)\. We identify two candidate factors that the original paper leaves unreported – SAE training duration and the underlying model's training compute – and a third that is structural: the public unavailability of matching SAE artifacts, which makes part of the original configuration impossible to replicate exactly\. Beyond reproduction, we test whether weight\-based features are genuinely structural rather than dataset\-specific: regularized bilinear MLPs transfer across handwritten\-digit datasets and recognize geometrically similar letters, and we introduce Quadratic Form Similarity, a weight\-space metric that separates structurally similar from dissimilar class pairs where eigenvector cosine similarity cannot\. Finally, we show on MNIST\-scale models that the low\-rank structure the original paper discovers post\-hoc can instead be enforced during training via Canonical Polyadic \(CP\) decomposition: at matched full training, CP models match dense accuracy and effective rank, and a bridge experiment connecting the two extensions shows their decision surfaces substantially coincide with the dense ones – enforced and discovered structure converge\. Our results are consistent with weight\-based interpretability as a viable paradigm, while demonstrating that its reproducibility hinges on artifact availability and training\-compute details that interpretability research rarely reports\.

## Opening Up a New Layer: A Deeper Look into "Interpreting CLIP with Hierarchical Sparse Autoencoders"

**Authors:** Nora Kahleogullari; Adrianna Romanowski; Mathan Sundarrajan

**ID:** 157018\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 157018

[Paper](<https://openreview.net/forum?id=l0qZkSk2aH>) | [PDF](<https://openreview.net/pdf?id=l0qZkSk2aH>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Sparse Autoencoders \(SAEs\) have become essential for decomposing model activations into interpretable concepts\. However, despite their effectiveness, SAEs lack a natural ordering of features, making it difficult to prioritize important concepts under compute constraints\. The Matryoshka Sparse Autoencoder \(MSAE\) was introduced as a means of learning nested subspaces, theoretically forcing high\-level features into earlier dimensions to enable adaptive granularity\. In this paper, we reproduce and analyze the MSAE framework\. The reproduction of the study suffers from certain challenges, but the main claims still hold\. Furthermore, this study extends on the original paper by implementing feature absorption as a metric, reducing computational cost and emissions with a method inspired by the Sandwich Rule, and deeply analyzing MSAE's ability to learn hierarchical information\.

## Revisiting RegressionMSR: A Reproducibility Study

**Authors:** Neev Mistry

**ID:** 157012\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 157012

[Paper](<https://openreview.net/forum?id=AzOk6sdMRZ>) | [PDF](<https://openreview.net/pdf?id=AzOk6sdMRZ>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Regression\-adjusted Monte Carlo estimators for Shapley values and probabilistic values combine surrogate modeling with maximum\-sample\-reuse estimation to reduce the cost of feature\-attribution computation\. We present a reproducibility study of RegressionMSR in the interventional feature\-attribution setting, focusing on artifact fidelity, practical algorithmic choices, and empirical robustness\. We first identify implementation\-level differences between the estimator displayed in the paper and the released artifact: the code computes separated conditional means over coalitions containing and excluding each feature, rather than the displayed all\-row signed residual average, and it is also not guaranteed to use a probability mass in its residual denominator\. We characterize these conventions algebraically and verify their predicted targets with synthetic diagnostics\. On real data, the stored denominator strongly attenuates the residual correction: correcting both conventions changes LinearMSR little but reduces TreeMSR error by more than half in the tested Shapley settings\. We then test the authors' practical single\-surrogate simplification, finding that it substantially reduces runtime while maintaining and often slightly improving accuracy\. Next, we qualitatively reproduce the headline Shapley benchmark among the original comparison methods, where TreeMSR remains the lowest\-error estimator on average; however, OddSHAP performs best in our modern benchmark extension, and rank\-stability metrics provide a complementary ordering\. Finally, we extend the original Gaussian\-noise experiment to Laplacian and coalition\-size\-dependent heteroskedastic noise, finding that TreeMSR's low\-noise advantage persists across other low\-noise regimes\. Overall, our results support RegressionMSR's empirical value while clarifying implementation details needed for reproducible use\.

## FrED: External Data Influence Estimation via Domain Knowledge Graph Grounding

**Authors:** Theodoros Aivalis; Iraklis A Klampanos; Antonis Troumpoukis; Joemon M Jose

**ID:** 153357\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153357

[Paper](<https://openreview.net/forum?id=LzYzD8LNiK>) | [PDF](<https://openreview.net/pdf?id=LzYzD8LNiK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153357>)

The rapid deployment of generative AI has amplified the critical need for Training Data Attribution to ensure transparency and accountability\. However, current parametric approaches require computationally prohibitive access to model weights, while similarity\-based methods ignore deep structural context\. We propose a novel probabilistic framework that operates entirely in a black\-box setting\. Our method fuses continuous feature similarities with discrete, domain\-specific Knowledge Graphs \(KGs\)\. This approach ensures the attribution is grounded in structural reality, explicitly rewarding highly specific historical samples while preventing generic background data from dominating the results\. We evaluate our framework across two distinct domains where linking outputs to data and domain context is inherently complex: abstract artistic image synthesis and high\-dimensional physical weather forecasting\. Extensive benchmarking demonstrates the robust efficacy of our approach\. In the artistic domain, it achieves a strong Linear Datamodeling Score that exceeds standard black\-box similarity baselines, while closing much of the gap to gradient\-based estimators\. We additionally present a cross domain feasibility case study in environmental forecasting, where we use domain KGs to retrieve physically consistent historical analogs for regional flood forecasts, improving geographic localisation over a latent\-only baseline\. Operating entirely without internal model access, our approach provides an efficient, interpretable mechanism for post\-hoc influence analysis and domain\-grounded retrieval\.

## Parasite Features: Causal Abstraction Through Spurious Pathways

**Authors:** Denis Sutter; Qing Yao; Sasha Boguraev; Julian Minder; Antonio Di Maio; Thomas Hofmann; Kyle Mahowald; Tiago Pimentel

**ID:** 149518\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149518

[Paper](<https://openreview.net/forum?id=pXYWXZE3QV>) | [PDF](<https://openreview.net/pdf?id=pXYWXZE3QV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149518>)

Causal Abstraction can be used to define a notion of equivalence between a neural network and an algorithm, thus serving as a powerful framework for mechanistic interpretability\. In this paper, however, we show the existence of a class of spurious features which straightforwardly pass such equivalence tests\. Suppose there are two directions in a model's representation space where: \(i\) one discriminates the input based on some specific feature, and \(ii\) the other steers the model towards a certain output\. Causal Abstraction techniques can create a pathway leveraging these unrelated directions to simulate their combined behavior in the model, which thus spuriously appears to implement a certain feature\. In such cases, we say the method discovered a parasite feature\. Experimentally, we show that Distributed Alignment Search\-\-\-a Causal Abstraction\-based method\-\-\-finds parasite features using linear alignment maps in two tasks: syntactic agreement and two\-digit addition\. Our paper highlights an important consideration for Causal Abstraction and contributes to the ongoing debate about best practices for mechanistic interpretability\.

## Comparing Explanations is not Enough,Explain the Change: New Standards are Needed to Explain Behavioral Shifts in Large Language Models

**Authors:** Martino Ciaperoni; Marzio Di Vece; Roberto Pellungrini; Luca Pappalardo; Fosca Giannotti; Francesco Giannini

**ID:** 139995\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139995

[Paper](<https://openreview.net/forum?id=y0jWumzUxx>) | [PDF](<https://openreview.net/pdf?id=y0jWumzUxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139995>)

Large\-scale foundation models exhibit \*behavioral shifts\* when subjected to interventions such as scaling, fine\-tuning, reinforcement learning with human feedback, or in\-context learning\. Current explainability methods are structurally ill\-suited to explain these shifts, because either they treat models as static objects, as traditional eXplainable AI \($XAI$\) approaches do, or merely compare independent explanations across different checkpoints of a model\. As a result, these approaches fail to explain the functional transition between two model instances in which a certain behavior has shifted following an intervention\. This gap creates significant governance risks across jurisdictions including the EU AI Act, US state legislation, and Chinese AI regulations, which require documenting causal chains for substantial system modifications\.  This position paper argues that explaining behavioral shifts in large language models requires a principled approach that treats the shift itself as the primary object of explanation: namely, one that explains how and why an intervention transforms a reference model into an updated model with different behavior\. To support this claim, we introduce \*Comparative\* $XAI$ \($XAI\_\{\\Delta\}$\), a novel $XAI$ paradigm aimed at explaining the difference between two model checkpoints where a behavior has shifted, together with a set of desiderata specifying what $XAI\_\{\\Delta\}$ explainers and explanations must satisfy, including comparability, validity, actionability, and monitoring, with the goal of grounding model auditing in explicit, measurable requirements\. Finally, we provide preliminary evidence suggesting the need for $XAI\_\{\\Delta\}$ in practice through some illustrative experiments, compiling the resulting findings into a transition report directly usable for governance and incident documentation\.

## User Embeddings are Superpositions of Interpretable Behavioral Modes

**Authors:** Jonathan Kozaczuk; Zheng Dong; Noyan Evirgen; Keivan Majidi; Eddie K Ng; Chris Porter; Qi Zhao; Jia Geng; Changmao Li; Brandon Feng

**ID:** 155845\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155845

[Paper](<https://openreview.net/forum?id=2T4hO6DOUD>) | [PDF](<https://openreview.net/pdf?id=2T4hO6DOUD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155845>)

User embeddings are central components of modern recommendation, personalization, and behavioral modeling systems\. Though these embeddings can compactly encode rich behavioral information, they are inherently dense and opaque, limiting interpretability\. To address this gap, we show that user embeddings can be understood as sparse superpositions of interpretable behavioral modes\. This structure is directly predicted by generative models of user behavior for linear embeddings and extends approximately to transformer representations by the superposition hypothesis\. Superimposed modes can naturally be recovered by sparse dictionary learning methods, and recovered modes can be automatically named and queried in natural language\. On synthetic data with known ground\-truth modes, sparse autoencoders \(SAEs\) outperform classical sparse baselines on mode recovery and produce more monosemantic latents, even when the number of modes exceeds the embedding dimension\. Applied to both classical \(SVD on open e\-commerce\) and transformer\-based \(SASRec/BERT4Rec on MovieLens 1M\) user embeddings, the recovered SAE dictionaries are near\-orthogonal, and their natural\-language labels enable zero\-shot audience retrieval over embeddings never trained on text\. At matched sparsity, SAE decompositions produce more behaviorally distinct features than classical sparse baselines, with retrieval accuracy comparable to both classical sparse methods and text\-embedding baselines and more diverse audience characterizations\. The framework is post\-hoc and model\-agnostic, requiring no modification to the upstream embedding system\.

## Generalized Priority\-Aware Shapley Value

**Authors:** Kiljae Lee; Ziqi Liu; Weijing Tang; Yuan Zhang

**ID:** 152117\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152117

[Paper](<https://openreview.net/forum?id=VPwZ5z3kGM>) | [PDF](<https://openreview.net/pdf?id=VPwZ5z3kGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152117>)

Shapley value and its priority\-aware extensions are widely used for valuation in machine learning, but existing methods require pairwise priority to be binary and acyclic, a restriction spectacularly violated in real\-data examples such as aggregated human preferences and multi\-criterion comparisons\. We introduce the generalized priority\-aware Shapley value \(GPASV\), a random order value defined on arbitrary directed weighted priority graphs, in which pairwise edges penalize rather than forbid order violations\. GPASV covers a range of classical models as boundary cases\. We establish GPASV through an axiomatic characterization, develop the associated computational methods, and introduce a priority sweeping diagnostic extending PASV's\. We apply GPASV to LLM ensemble valuation on the cyclic Chatbot Arena preference graph, illustrating that priority\-aware valuation is not a one\-button operation: different balances of pairwise graph priority versus individual soft priority produce substantively different valuations of the same data\.

## Mechanistic Insights into LoRA: Layer Sparsity for Adaptive Fine\-Tuning via Path Patching

**Authors:** Fei Zuo; Yizhou Huang; Kezhi Wang

**ID:** 154446\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154446

[Paper](<https://openreview.net/forum?id=DUiOU1Wsi4>) | [PDF](<https://openreview.net/pdf?id=DUiOU1Wsi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154446>)

Low\-Rank Adaptation \(LoRA\) has emerged as the dominant paradigm for parameter\-efficient fine\-tuning of large language models\. However, existing methods uniformly apply adaptation across all transformer layers, overlooking the heterogeneous contributions of different components\. In this work, we conduct a systematic mechanistic interpretability analysis to understand how LoRA affects model internals\. We observe that LoRA's adaptation effect is highly non\-uniform, with significant component\-wise and layer\-wise sparsity\. Most critically, we find that important layers are highly task\-dependent, with limited overlap across tasks\. Motivated by these insights, we propose Adaptive\-LoRA, a calibration\-driven method that automatically identifies task\-specific layers via path patching, enabling efficient layer selection without exhaustive search\. Extensive experiments on Qwen2\.5\-1\.5B across 11 diverse reasoning tasks demonstrate that  Adaptive\-LoRA outperforms full\-layer LoRA while using only 30\\% of layers, achieving 3\.5$\\times$ parameter efficiency improvement\. This work bridges mechanistic interpretability and practical efficiency, providing both fundamental insights and a principled approach for adaptive fine\-tuning\.

## Efficient bias mitigation in T2I diffusion models using Concept Graphs

**Authors:** Mansi \-; Avinash Kori; Francesco Leofante

**ID:** 148742\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148742

[Paper](<https://openreview.net/forum?id=vOSMBUB46a>) | [PDF](<https://openreview.net/pdf?id=vOSMBUB46a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148742>)

Text\-to\-Image diffusion models often propagate harmful bias inherited from the training data\. Existing bias mitigation techniques either intervene only at the text encoder or provide inference\-time guidance, often leading to generations that collapse into semantically incoherent outputs\. To address these limitations, we introduce CO\-ALIGN \(Concept Ontology Alignment\), a novel bias mitigation approach based on concept\-graph alignment which operates on the model's internal concept ontology\. By aligning concepts within the text encoder and denoiser, CO\-ALIGN achieves significant bias reduction while preserving generative integrity\. We demonstrate the effectiveness of concept graph alignment in three paradigms\- text\-encoders, denoisers, and joint text\-denoiser ontology alignment\. CO\-ALIGN outperforms outperforms the state of the art, improving fairness by 30\\%, $\\Delta FID=11\.4$ in image quality, 2\.8\\% in image fidelity, all while reducing semantically incoherent outputs by 88\\%\. Beyond bias mitigation, we show that CO\-ALIGN benefits other downstream tasks as well\. In particular, our experiments demonstrate that better\-aligned internal ontologies enhance concept unlearning robustness across multiple unlearning techniques\.

## Decentralized AI Governance Must Decouple Policy Processing from Capability Enforcement

**Authors:** Hasan Kassem; Christoforos Anagnostopoulos; Alejandro Aristizabal; Spyridon Bakas; Orion G Banks; Omar Benjelloun; Tian Cai; Sergen Cansiz; Davide Chicco; Patrick Foley; Showkot Hossain; Taeho Jung; Peter Kairouz; Yanchen liu; Marco Lorenzi; Peter Mattson; Ann K Novakowski; Michael O&amp;amp;\#x27;Connor; Holger Roth; Adrish Sannyasi; Charalampos Savvaidis; Micah Sheller; David Solooki; Dimitris Stripelis; Renato Umeton; Marc Vesin; Ray Wang; Wenbin Zhang; Mic Bowman; Alexandros Karargyris

**ID:** 140032 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h7aiv9G7qm>) | [PDF](<https://openreview.net/pdf?id=h7aiv9G7qm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140032>)

In this position paper, we argue that successful decentralized AI needs trustworthy, adaptive, and portable governance at scale\. The ML community must adopt an architecture that cleanly separates \\emph\{policy processing\} \(the evaluation of evidence against governance requirements\) from \\emph\{capability enforcement\} \(the gating of access to protected digital assets\)\. We argue that the prevailing approach, in which each organization manages bespoke policy logic, custom\-built for its infrastructure, produces fragmentation that undermines interoperability, transparency, and auditability of federated systems\. Drawing on a survey of governance mechanisms in federated learning and data collaboration frameworks and on a concrete reference architecture built around community\-driven policy objects, we argue that this decoupling is technically feasible and architecturally necessary and supports a broad class of decentralized AI governance settings\. We further suggest that the AI community should invest in open, standardized policy abstractions rather than proliferate siloed governance solutions\. We address counterarguments concerning the costs of standardization and the feasibility of universal policy languages\.

## The Confusion is Real: GRAPHIC – A Network Science Approach to Confusion Matrices in Deep Learning

**Authors:** Johanna S\. Fröhlich; Bastian Heinlein; Jan Claar; Hans Rosenberger; Vasileios Belagiannis; Ralf R Müller

**ID:** 156795 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UP9bx1WJwR>) | [PDF](<https://openreview.net/pdf?id=UP9bx1WJwR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156795>)

Explainable artificial intelligence has emerged as a promising field of research to address reliability concerns in artificial intelligence\. Despite significant progress in explainable artificial intelligence, few methods provide a systematic way to visualize and understand how classes are confused and how their relationships evolve as training progresses\. In this work, we present GRAPHIC, an architecture\-agnostic approach that analyzes neural networks on a class level\. It leverages confusion matrices derived from intermediate layers using linear classifiers\. We interpret these as adjacency matrices of directed graphs, allowing tools from network science to visualize and quantify learning dynamics across training epochs and intermediate layers\. GRAPHIC provides insights into linear class separability, dataset issues, and architectural behavior, revealing, for example, similarities between flatfish and man and labeling ambiguities validated in a human study\. In summary, by uncovering real confusions, GRAPHIC offers new perspectives on how neural networks learn\. The code is available at https://github\.com/Johanna\-S\-Froehlich/GRAPHIC\.

## Extracting Search Trees from LLM Reasoning Traces Reveals Myopic Planning

**Authors:** Sixing Chen; Ji\-An Li; Saner Cakir; Sinan Akcali; Kayla Lee; Marcelo G Mattar

**ID:** 154324 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EWoL9QIbhS>) | [PDF](<https://openreview.net/pdf?id=EWoL9QIbhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154324>)

Large language models \(LLMs\), especially reasoning models, generate extended chain\-of\-thought \(CoT\) reasoning that often contains explicit deliberation over future outcomes\. Yet whether this deliberation constitutes genuine planning, how it is structured, and what aspects of it drive performance remain poorly understood\. In this work, we introduce a new method to characterize LLM planning by extracting and quantifying search trees from reasoning traces during four\-in\-a\-row gameplay\. By fitting computational cognitive models on the extracted search trees, we characterize how plans are structured and how they influence move decisions\. We find that LLMs' search is shallower than humans', and that performance is predicted by search breadth rather than depth\. Most strikingly, although LLMs expand deep nodes in their traces, their move choices are best explained by a myopic model that ignores those nodes entirely\. A causal intervention study in which we selectively prune CoT paragraphs further suggests that move selection is driven predominantly by shallow rather than deep search\. These patterns contrast with human planning, where performance is driven primarily by deep search\. Together, our findings reveal a key difference between LLM and human planning: while human expertise is driven by deeper search, LLMs do not act on deep lookahead\. This dissociation offers targeted guidance for aligning LLM and human planning\. More broadly, our framework provides a generalizable approach for interpreting the structure of LLM planning across strategic domains\.

## Amortized Linear\-time Exact Shapley Value for Product\-Kernel Methods

**Authors:** Majid Mohammadi; Siu Lun \(Alan\) Chau; Krikamol Muandet

**ID:** 149276\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149276

[Paper](<https://openreview.net/forum?id=rWupQhgBV4>) | [PDF](<https://openreview.net/pdf?id=rWupQhgBV4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149276>)

_Abstract unavailable from the accessible public sources._

## Agentic\-imodels: Evolving agentic interpretability tools via autoresearch

**Authors:** Chandan Singh; Yan Shuo Tan; Weijia Xu; Zelalem Gero; Weiwei Yang; Michel Galley; Jianfeng Gao

**ID:** 154318\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154318

[Paper](<https://openreview.net/forum?id=EY6O5VNNlV>) | [PDF](<https://openreview.net/pdf?id=EY6O5VNNlV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154318>)

_Abstract unavailable from the accessible public sources._

## Metaphor Is Not All Attention Needs

**Authors:** Olga Sorokoletova; Francesco Giarrusso; Giacomo De Luca; Piercosma Bisconti Lucidi; Matteo Prandi; Federico Pierucci; Marcello Galisai; Vincenzo Suriani; Daniele Nardi

**ID:** 153558\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153558

[Paper](<https://openreview.net/forum?id=KV6QfeD53p>) | [PDF](<https://openreview.net/pdf?id=KV6QfeD53p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153558>)

_Abstract unavailable from the accessible public sources._

## Idempotency Exposes Consistency Problems in Sparse Autoencoders

**Authors:** Lennart Stöpler; Nikolai Bolik; Artur Andrzejak

**ID:** 155537 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4rnCZcVRKZ>) | [PDF](<https://openreview.net/pdf?id=4rnCZcVRKZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155537>)

The Linear Representation Hypothesis \(LRH\) posits that Transformer activations decompose into sparse linear combinations of interpretable directions, with Sparse Autoencoders \(SAEs\) serving as the predominant method for recovering such decompositions\. We propose that idempotency \-\- the requirement that re\-encoding an SAE's output reproduces the same latent representation \-\- is a desirable property for any faithful dictionary learning method, and demonstrate empirically that most SAEs deviate very far from this ideal\. We identify two underlying failure modes: exploding representation norms and unstable active feature sets\. Further analysis reveals that even individual SAE latents cannot be reliably reconstructed under re\-encoding, and that SAE outputs exhibit significant sensitivity to input scaling\. We show that idempotency can be improved via an auxiliary loss term and demonstrate its potential to improve SAE interpretability\.

## Learning interpretable Schur forms of recurrent weight matrices

**Authors:** Alexander Lanine; Liana Akobian; N Alex Cayco Gajic

**ID:** 155071\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155071

[Paper](<https://openreview.net/forum?id=8gcHRPsjr5>) | [PDF](<https://openreview.net/pdf?id=8gcHRPsjr5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155071>)

Recurrent neural networks are widely used in neuroscience and machine learning, but their weight matrices often appear dense and unstructured, defying clean interpretation\. The Schur decomposition expresses any recurrent weight matrix in quasi\-triangular form, allowing network dynamics to be interpreted as a latent circuit of "functionally feedforward" interactions between orthogonal modes\. However, its application for interpreting recurrent weight matrices has been limited due to its well\-known combinatorial non\-uniqueness\. We introduce SchurMO \(Schur Manifold Optimization\), a method for discovering structured Schur forms via Riemannian gradient descent on the manifold of orthogonal similarity transformations, enabling recovery of target motifs\. Compared to a greedy baseline, SchurMO more reliably and more efficiently recovers ground\-truth latent motifs \(chain\-like, banded, and modular structure\) from noisy weight matrices\. Applying SchurMO to nonlinear recurrent networks enables recovery of latent chain\-like structure, providing a link between connectivity and the underlying dynamics of sequence production\. Our results highlight SchurMO as a scalable, computationally efficient approach to discovering latent structure in the Schur forms of recurrent weights\.

## PE\-SHAP: Causally Interpretable Path\-Wise Shapley Explanations

**Authors:** Maksym Buleshnyi; Joshua Loftus; Sakina Hansen

**ID:** 155303\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155303

[Paper](<https://openreview.net/forum?id=6afj7vl5xr>) | [PDF](<https://openreview.net/pdf?id=6afj7vl5xr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155303>)

Shapley value\-based explanations are widely used to attribute model predictions, but standard variants capture associative rather than causal relationships\. Recent causally informed Shapley methods add a path\-wise decomposition, but suffer from two key limitations: they assign zero attribution to chain\-mediated paths, and their per\-path values do not align with classical mediation estimands\.  We propose PE\-SHAP, a Shapley\-inspired path\-wise decomposition built on the portion\-eliminated effect\. Per\-mediator values sum to the total mediated effect at every sample, aggregate to the Natural Indirect Effect at the population level, and match the Path\-Specific Effect under additive separability\. These are properties prior Shapley\-based path\-wise methods do not provide\. We validate PE\-SHAP analytically and through Monte\-Carlo experiments on synthetic SCMs with known path effects, and demonstrate it on real\-world fairness case studies using the German Credit and COMPAS datasets\.

## Measuring What Matters: Synthetic Benchmarks for Concept Bottleneck Models

**Authors:** Julian Skirzynski; Harry Cheon; Shreyas Kadekodi; Meredith Stewart; Berk Ustun

**ID:** 138890\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138890

[Paper](<https://openreview.net/forum?id=yX9HoznzlL>) | [PDF](<https://openreview.net/pdf?id=yX9HoznzlL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138890>)

Concept bottleneck models predict outcomes from high\-level concepts detected in inputs\. Although concepts provide a simple way to reap benefits from interpretability, very few datasets include concept labels\. This limits researchers' ability to determine which problems are suitable for these models, isolate the factors that drive their performance or lead to failures, or uncover which algorithms perform well\. In this paper, we develop synthetic benchmarks for concept\-bottleneck models, focusing on their two main use cases: decision support, in which models assist humans in making better decisions, and automation, in which models handle routine tasks without supervision\. Our benchmarks can generate labeled datasets while controlling for properties that affect performance, including data modality, concept choice, annotation quality, and completeness\. We demonstrate how the benchmarks can be used to evaluate representative classes of concept bottleneck models\. Our demonstrations show how the benchmarks can diagnose failure modes and guide follow\-up testing\.

## Inside the Loop: A Mechanistic Study of Weight\-Tied Transformers on Depth\-Bound Algorithmic Tasks

**Authors:** Magnus Sesodia; Philip Torr; Christian Schroeder de Witt

**ID:** 150577\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150577

[Paper](<https://openreview.net/forum?id=h8PkVhb8VI>) | [PDF](<https://openreview.net/pdf?id=h8PkVhb8VI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150577>)

Solving algorithmic tasks that involve many sequential steps typically requires scaling up transformer depth or chain\-of\-thought length, incurring unfavorable parameter and inference\-compute costs, respectively, as tasks deepen\. Looped transformers promise to recover that depth at a fraction of the cost by reusing a single block across iterations, but it remains unclear how the loop actually performs its computation, or whether it merely simulates a deeper untied stack\. We test this on \\emph\{directed permutation traversal\} \(\\dePo\), a synthetic task in the physics\-of\-LMs lineage in which solving an $H$\-hop query requires following $H$ pointers along a fixed permutation of $N\{=\}16$ entities, with $H$ up to $15$\. We demonstrate that, above a minimum effective depth, a $3\.2$\\,M\-parameter looped transformer trained with hop length sampled uniformly per batch traverses all $15$ hops across all seeds, while a $25\.8$\\,M\-parameter fixed\-depth baseline at the same effective depth fails to exceed three hops; weight tying, not effective depth, predicts capability\. In the same models, linear probes on the residual stream uncover a clean \\emph\{staircase\}: at iteration $k$ the stream linearly decodes hop $k$, with slope exactly one hop per iteration, and each hop stays decodable for roughly two further iterations before being overwritten\. The model's own logit lens, applied through the trained final layers, traces the same one\-hop\-per\-iteration ordering at lower amplitude\. Taken together, our results recast looped transformers as iterative program learners: weight tying forces the optimizer to discover a single per\-iteration update rule, and that rule corresponds to one algorithmic step of the underlying task\. Code is available at \\url\{https://anonymous\.4open\.science/r/insidetheloop\-3ED0\}\.

## Projected Neural Additive Models as Universal Approximators

**Authors:** Nhon N Phan; Qiang Du; John D Clayton; WaiChing Sun

**ID:** 155364\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155364

[Paper](<https://openreview.net/forum?id=6AZvfOFUIP>) | [PDF](<https://openreview.net/pdf?id=6AZvfOFUIP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155364>)

Neural additive models \(NAMs\) offer interpretability but lack expressivity due to their rigid additive structure, whereas multi\-layer perceptrons \(MLPs\) achieve universal approximation at the cost of transparency\. We establish the first theoretical foundation for projected neural additive models \(PNAMs\), which augment NAMs with a learnable linear transformation $\\boldsymbol\{T\}$ to capture cross\-variable interactions\. While standard NAMs cannot approximate even the simplest interaction term $\\chi\_1 \\chi\_2$ because their cross\-derivatives are identically zero, we prove that PNAMs are universal approximators and characterize the minimum number of projections required for exact polynomial representation\. Furthermore, we derive an approximation rate of $\\mathcal\{O\}\(M^\{\-s / \(N \- 1\)\}\)$ for $\\mathcal\{C\}^s$ functions \(i\.e\., functions with $s$ continuous derivatives\), where $M$ denotes the number of projections and $N$ the input dimension; this rate is known to be optimal for ridge function approximation\. To recover interpretability from the projected inputs, we introduce structured sparsity regularizers and post\-hoc symbolic regression techniques that enable global input ranking, parameter pruning, and the conversion of learned bases into compact analytical expressions\. Experiments on knot theory invariants, MNIST, and phase field fracture mechanics demonstrate that PNAMs match or surpass MLPs in accuracy while discovering salient features and yielding symbolic models with orders of magnitude fewer parameters\.

## Interpretability\-by\-Design with Accurate Locally Additive Models and Conditional Feature Effects

**Authors:** Vasileios Gkolemis; Loukas Kavouras; Dimitrios Kyriakopoulos; Konstantinos Tsopelas; Dimitrios Rontogiannis; Giuseppe Casalicchio; Theodore Dalamagas; Christos Diou

**ID:** 150129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kTrJguvQVX>) | [PDF](<https://openreview.net/pdf?id=kTrJguvQVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150129>)

Generalized additive models \(GAMs\) offer interpretability through independent univariate feature effects but underfit when interactions are present in data\. GA$^2$Ms add selected pairwise interactions which improves accuracy, but sacrifices interpretability and limits model auditing\. We propose \\emph\{Conditionally Additive Local Models\} \(CALMs\), a new model class, that balances the interpretability of GAMs with the accuracy of GA$^2$Ms\. CALMs allow multiple univariate shape functions per feature, each active in different regions of the input space\. These regions are defined independently for each feature as simple logical conditions \(thresholds\) on the features it interacts with\. As a result, effects remain locally additive while varying across subregions to capture interactions\. We further propose a principled distillation\-based training pipeline that identifies homogeneous regions with limited interactions and fits interpretable shape functions via region\-aware backfitting\. Experiments on diverse classification and regression tasks show that CALMs consistently outperform GAMs and achieve accuracy broadly comparable to GA$^2$Ms, while preserving the univariate auditability that GA$^2$Ms forfeit\. Overall, CALMs offer a favorable trade\-off between predictive accuracy and interpretability\.

## Intrinsically Interpretable Attention via Sparse Post\-Training

**Authors:** Florent Draye; Anson Lei; Hsiao\-Ru Pan; Ingmar Posner; Bernhard Schölkopf

**ID:** 152659\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152659

[Paper](<https://openreview.net/forum?id=RMkXEqB3sY>) | [PDF](<https://openreview.net/pdf?id=RMkXEqB3sY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152659>)

_Abstract unavailable from the accessible public sources._

## How do Small Transformer Models Learn Hard Math Tasks?

**Authors:** Eshika Saxena; Kristin E\. Lauter

**ID:** 148782\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148782

[Paper](<https://openreview.net/forum?id=v7nparSpqA>) | [PDF](<https://openreview.net/pdf?id=v7nparSpqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148782>)

Recent works have demonstrated that transformers can be trained to recover sparse, binary cryptographic secrets in the Learning With Errors \(LWE\) problem, a foundational problem that underlies many post\-quantum cryptographic schemes\. However, as architectures have evolved to efficient encoder\-only models, the mechanism by which these models recover the cryptographic secret has become more opaque\. In this paper, we present the first layer\-wise and embedding\-level mechanistic interpretability analysis of encoder\-only transformers trained on LWE samples\. We reveal a surprising phenomenon: despite achieving near\-zero exact prediction accuracy on the training objective, the models successfully recover the secret by bypassing the standard predictive pathways\. We use dimensionality reduction, causal intervention, and linear probing and find that the secret is implicitly present in the positional embedding\. Building on this mechanistic understanding, we introduce an architectural intervention that applies $L\_1$ sparsity regularization directly to the positional embeddings\. This modification forces the model to explicitly isolate the latent secret, transforming the computationally expensive post\-hoc secret recovery process into a direct, human\-interpretable parameter inspection\. Our findings provide fundamental insights into how transformers allocate representational capacity when faced with high\-noise, structured combinatorial problems\.

## Finding Interpretable Prompt\-Specific Circuits in Language Models

**Authors:** Gabriel Franco; Lucas M Tassis; Azalea Rohr; Mark Crovella

**ID:** 154226\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154226

[Paper](<https://openreview.net/forum?id=FHfc57fnQe>) | [PDF](<https://openreview.net/pdf?id=FHfc57fnQe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154226>)

Understanding the internal circuits that language models use to solve tasks remains a central challenge in mechanistic interpretability\. A crucial part of finding circuits is understanding why each attention head attends where it does\. To this end, we introduce \*\*ACC\+\+\*\*, an improved circuit\-tracing method based on the principle of \*attention\-causal communication\* \(ACC\) \[1\], which identifies \*signals\*, i\.e\., contents of low dimensional subspaces that cause attention on a token pair\. ACC\+\+ extracts circuits from a \*single forward pass\*, without replacement models or patching\. Circuits identified by ACC\+\+ consist of components that are causal for the model's attention decisions, together with the low\-dimensional signals used to communicate between them\. Here, we first detail the conceptual advances that ACC\+\+ makes over previous work\. We then show that across multiple models, a substantial portion of ACC\+\+ signals are \*interpretable\*: many signals admit a short natural\-language description\. We next present a number of new insights into model behavior obtained via ACC\+\+\. First, we use ACC\+\+'s interpretable circuits to characterize the sensitivity of indirect object identification \(IOI\) circuits to prompt structure\. We find that prompt\-specific circuits form well\-defined clusters, and across clusters, heads receive systematically different signals corresponding to distinct mechanisms for identifying the IO name\. Next, in multilingual IOI, ACC\+\+ circuits show that while model \*components\* are reused across languages, \*signals\* are often language\-specific\. In a four\-language IOI case study, cross\-language circuit distances are consistent with linguistic relatedness\. Together, these results show that ACC\+\+ can shed light on a broad spectrum of model behaviors\.

## Scaling Laws for SAE Training Data

**Authors:** Nikita Koryagin; Nikita Balagansky; Daniil Gavrilov

**ID:** 148634\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148634

[Paper](<https://openreview.net/forum?id=wGJ8YYzO5w>) | [PDF](<https://openreview.net/pdf?id=wGJ8YYzO5w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148634>)

Sparse autoencoder \(SAE\) training is often bottlenecked by activation storage\. We show that the stored activation buffer can be far smaller than the total SAE training budget: quality depends mainly on the number of \\emph\{unique\} activations, not on whether every training token is fresh\. After a short diversity\-limited regime, additional fresh activations provide little benefit; replaying the same buffer preserves both reconstruction and interpretability performance\. We capture this diversity\-\-repetition tradeoff with a data\-constrained scaling law and validate it across dictionary sizes, token budgets, Llama\-3\.1 and Qwen3 models, early/middle/late layers, BatchTopK/TopK/JumpReLU SAEs, and downstream metrics including EV, reconstruction MSE, feature absorption, automated interpretability, and sparse probing\. The resulting buffer\-sizing rule is simple: choose the smallest activation buffer that reaches the quality plateau, then use replay to spend the remaining training budget\. In our experiments, this reduces activation storage by $8\\text\{\-\-\}64\\times$ with negligible quality loss\.

## Winning the Symmetry Lottery: Learning Invariance from Data Augmentations with Transformers

**Authors:** Eduardo Santos\-Escriche; Valerie Engelmayer; Ya\-Wei Eileen Lin; Stefanie Jegelka

**ID:** 149811\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149811

[Paper](<https://openreview.net/forum?id=nBGsp2c8X6>) | [PDF](<https://openreview.net/pdf?id=nBGsp2c8X6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149811>)

Training transformer\-based architectures with data augmentation has become an increasingly popular approach for equivariant machine learning\. Despite its empirical success, the interplay between the transformer architecture, invariance to different symmetries, and augmentation budgets remains underexplored\. In this paper, we investigate the ability of a vanilla transformer to learn a wide range of symmetries through limited data augmentation\. We identify that it performs strongly for common angle\-preserving symmetries, while it struggles with non\-angle\-preserving ones\. Within the angle\-preserving family, we further find that base subgroups such as translation, rotation, and scale are learned more easily and accurately than compositional groups that combine them\. Motivated by this observation, we perform a structural analysis of the trained models and identify interpretable mechanisms that induce invariance to each base angle\-preserving symmetry\. These findings support what we coin winning the \*Symmetry Lottery\*: the transformer architecture is aligned with learning mechanisms invariant to symmetries that happen to be prevalent in scientific domains\.

## Interpretability\-by\-Design with Accurate Locally Additive Models and Conditional Feature Effects

**Authors:** Vasileios Gkolemis; Loukas Kavouras; Dimitrios Kyriakopoulos; Konstantinos Tsopelas; Dimitrios Rontogiannis; Giuseppe Casalicchio; Theodore Dalamagas; Christos Diou

**ID:** 150129\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150129

[Paper](<https://openreview.net/forum?id=kTrJguvQVX>) | [PDF](<https://openreview.net/pdf?id=kTrJguvQVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150129>)

Generalized additive models \(GAMs\) offer interpretability through independent univariate feature effects but underfit when interactions are present in data\. GA$^2$Ms add selected pairwise interactions which improves accuracy, but sacrifices interpretability and limits model auditing\. We propose \\emph\{Conditionally Additive Local Models\} \(CALMs\), a new model class, that balances the interpretability of GAMs with the accuracy of GA$^2$Ms\. CALMs allow multiple univariate shape functions per feature, each active in different regions of the input space\. These regions are defined independently for each feature as simple logical conditions \(thresholds\) on the features it interacts with\. As a result, effects remain locally additive while varying across subregions to capture interactions\. We further propose a principled distillation\-based training pipeline that identifies homogeneous regions with limited interactions and fits interpretable shape functions via region\-aware backfitting\. Experiments on diverse classification and regression tasks show that CALMs consistently outperform GAMs and achieve accuracy broadly comparable to GA$^2$Ms, while preserving the univariate auditability that GA$^2$Ms forfeit\. Overall, CALMs offer a favorable trade\-off between predictive accuracy and interpretability\.

## AdKnob: Ad Intensity Control and Labeling for LLM\-Native Advertising

**Authors:** Woo Jae Kim; Seongho Keum; Joonsung Jeon; Suhyeon Ha; Sooel Son; Sung\-eui Yoon

**ID:** 150097\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150097

[Paper](<https://openreview.net/forum?id=kilXcw3jhS>) | [PDF](<https://openreview.net/pdf?id=kilXcw3jhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150097>)

_Abstract unavailable from the accessible public sources._

## Explanation of Dynamic Physical Field Predictions using WassersteinGrad: Application to Autoregressive Weather Forecasting

**Authors:** Younes Essafouri; Laure Raynaud; Luciano DROZDA; Laurent Risser

**ID:** 151943 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wfi1c6oq52>) | [PDF](<https://openreview.net/pdf?id=Wfi1c6oq52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151943>)

_Abstract unavailable from the accessible public sources._

## What Arranges Features in Activation Space?  Non\-Classical Predictive Geometry in Next\-Token Predictors

**Authors:** Adam Shai; Thomas J Elliott; Paul Riechers

**ID:** 148855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ufZDbHJ06x>) | [PDF](<https://openreview.net/pdf?id=ufZDbHJ06x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148855>)

Mechanistic interpretability often studies the local features and circuits that implement model computations\. What principles govern the arrangement of these features and circuits into geometric structures in activation space? To make this tractable, we study how the computational class of the training\-data generator constrains the geometry of predictive states\.  We show that while the data distribution determines which features are required for prediction, a predictor realizes those features as beliefs about its current latent state, and the generator class determines the geometry of those beliefs\. Using this theoretical insight, we design synthetic datasets whose minimal predictive representations fall into different model classes, and test which geometry neural networks learn\. In particular, we train transformers, LSTMs, GRUs, and vanilla RNNs on datasets whose predictive geometries are known analytically: a classical HMM process, a quantum\-realizable process with no finite\-state HMM realization, and a generalized\-probabilistic process with no finite\-dimensional quantum realization\. Across architectures, a single affine map from activations decodes the corresponding predictive representation in each case:  HMM beliefs in a latent simplex, Bloch\-vector quantum states, or a finite\-dimensional generalized predictive vector\.  These representations emerge during training and fit the compact non\-classical geometry far better than finite\-order classical Markov baselines\. These results suggest that understanding predictive representations requires asking not only which features a network represents, but what geometry organizes those features\.

