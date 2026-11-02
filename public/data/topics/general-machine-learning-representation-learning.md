# General Machine Learning / Representation Learning

通用机器学习 / 表征学习

212 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## From Noise to Diversity: Random Embedding Injection in LLM Reasoning

**Authors:** Heejun Kim; Seungpil Lee; Jewon Yeom; Jaewon Sok; Seonghyeon Park; Jeongjae Park; Taesup Kim; Sundong Kim

**ID:** 155787 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2tl55s2775>) | [PDF](<https://openreview.net/pdf?id=2tl55s2775>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155787>)

_Abstract unavailable from the accessible public sources._

## Beyond Downstream Scores: Controlled Diagnostics for Point\-Cloud Self\-Supervised Learning Evaluation

**Authors:** Kohsuke Ide; Ryousuke Yamada; Yue Qiu; Yoshihiro Fukuhara; Hirokatsu Kataoka; Yuki Asano; Yutaka Satoh

**ID:** 139098 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l885Aav1TV>) | [PDF](<https://openreview.net/pdf?id=l885Aav1TV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139098>)

_Abstract unavailable from the accessible public sources._

## Rethinking Incompleteness: Formalizing Protocol Divergence and Train\-Once Learning for Robust IMVC

**Authors:** HAOLU LIU; XIYUE WANG; Xuanting Xie; Liangjian Wen; Zhao Kang

**ID:** 150214 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ju9V3PfmHR>) | [PDF](<https://openreview.net/pdf?id=ju9V3PfmHR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150214>)

_Abstract unavailable from the accessible public sources._

## Revisiting Cross\-View Completion: Self\-Supervised Pre\-Training via Reconstruction Error Comparison

**Authors:** Thibaut Loiseau; Guillaume Bourmaud; Vincent Lepetit

**ID:** 149886 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mUKb5eCadx>) | [PDF](<https://openreview.net/pdf?id=mUKb5eCadx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149886>)

Self\-supervised pre\-training via cross\-view completion learns strong features for 3D vision from co\-visible regions of image pairs\. However, the reference view provides little information for reconstructing non\-co\-visible patches, implicitly yielding a monocular training signal in these regions\. We introduce \*\*Gekko\*\*, a self\-supervised pre\-training framework that turns this limitation into a useful signal\. The \*relative improvement\* of the cross\-view reconstruction error over a masked\-autoencoder error serves as a self\-supervised proxy for co\-visibility: large improvements indicate co\-visible regions, while negligible ones indicate non\-co\-visible areas\. Gekko is a network, trained from scratch, that jointly performs cross\-view completion, masked autoencoding, and per\-pixel prediction of this relative improvement, providing an additional binocular signal for \*all\* masked regions without requiring any ground\-truth 3D annotations\. Under identical architectures and training data, Gekko consistently outperforms CroCo on zero\-shot correspondence estimation, relative pose estimation, and pointmap regression\.  We further show that Gekko can be trained directly from raw videos using a simple stride\-based curriculum, eliminating the cumbersome 3D preprocessing required by prior methods while matching the performance of models trained on curated data, thereby enabling fully self\-supervised pre\-training\. Code and pre\-trained models will be released\.

## To Align or Not To Align: Check Your COMPASS Before You Train

**Authors:** Fabian Gröger; Petar Damjanović; Maria Brbic

**ID:** 149496 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pi5rLDk0WR>) | [PDF](<https://openreview.net/pdf?id=pi5rLDk0WR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149496>)

Combining two pretrained models, whether by aligning a vision encoder with a language model or by merging two fine\-tuned checkpoints, is a costly bottleneck: compatibility is typically known only after joint training\. We propose COMPASS \(COMPatibility ASsessment Score\), a theoretically grounded compatibility diagnostic that estimates whether a model pair will be compatible prior to training or merging\. Building on the observation that representational convergence is most robust at the level of local neighborhoods, COMPASS decomposes model compatibility into two cheap\-to\-compute axes: a pair\-specific ease, defined as the $k$\-NN overlap between the two encoders, and a paradigm\-level ceiling, capturing the maximum overlap their training paradigms allow\.  Together, these two axes provide a ranking of candidate model pairs and prescribe how to act on each pair: \(i\) prioritize pairs that already agree and whose paradigms are compatible, \(ii\) invest additional compute on pairs with compatible paradigms but low initial agreement, \(iii\) switch the pre\-training paradigm when it cannot support sufficient agreement, or \(iv\) deprioritize pairs that score poorly on both axes\. COMPASS is applicable to both cross\-modal alignment and task\-arithmetic merging, where the encoder pair is replaced by two fine\-tuned checkpoints\. Across $72$ cross\-modal alignment experiments, and $392$ model merges, our compatibility estimates strongly correlate with downstream success, with Pearson correlations of $0\.90$ for image\-to\-text R@1 on Flickr30k, $0\.91$ for image\-to\-text R@1 on COCO, and $0\.70$ for mean retention across $8$ image\-classification merging tasks\.

## PVFormer: Proper Velocity Transformer for Stable and Scalable Hyperbolic Representation Learning

**Authors:** Xianglong Shi; Nicu Sebe; Bernhard Schölkopf; Ziheng Chen

**ID:** 155176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7jWvuU6Lb6>) | [PDF](<https://openreview.net/pdf?id=7jWvuU6Lb6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155176>)

Hyperbolic representations have shown remarkable success on hierarchical and tree\-like data, and Transformers have become a central architecture for representation learning\. However, a principled construction of hyperbolic Transformers remains challenging because the self\-attention layer decomposes into three coupled primitives, transformation, similarity, and aggregation, that should all respect the underlying geometry\. Existing hyperbolic Transformer designs are typically built in the Poincar\\'e or Lorentz models, where bounded domains, time\-like constraints, tangent\-space detours, or projection steps make it difficult to keep the full block intrinsic and scalable\. To address this gap, we propose \\PVFormer\{\}, to the best of our knowledge, the first Transformer architecture that operates natively in proper velocity \(\\PV\) space\. The proper velocity model provides an unconstrained representation of hyperbolic geometry, and \\PVFormer\{\} exploits this structure to redesign the Transformer block in \\PV\{\} space\. On the transformation side, we use \\PV\{\} homomorphism transformations to update query and value representations\. On the similarity side, we generalize Euclidean inner\-product attention with a \\PV\{\} Busemann score inspired by Busemann\-based hyperbolic learning and a \\PV\{\} point\-to\-hyperplane key transformation\. On the aggregation side, we replace Euclidean averaging with \\PV\{\} midpoint aggregation and further derive a scalable \\PV\{\} linear attention variant for large graphs\. Extensive experiments support the effectiveness of \\PVFormer\{\} across graph, text, and vision benchmarks\. The code will be open\-sourced once accepted\.

## GeoPMR: Preserving Relational and Hierarchical Geometry in Multimodal Molecular Representation Learning

**Authors:** Lusheng Li; Menglin Yang

**ID:** 152380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TWQ5xdccxN>) | [PDF](<https://openreview.net/pdf?id=TWQ5xdccxN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152380>)

Multimodal molecular representation learning aligns heterogeneous chemical and cellular signals to predict molecular properties\. The dominant paradigm is instance\-level contrastive alignment, such as InfoNCE and VICReg, which implicitly treats every modality as a point cloud in a shared Euclidean space\. This paradigm overlooks two structural properties of molecular\-cellular data\. \\textit\{First\}, each modality, from atomic fingerprints to cell morphology to transcriptomic response, carries its own intrinsic geometry; directly pulling individual embeddings together can distort the relational structure each modality has learned to express\. \\textit\{Second\}, the modalities form a directed biological cascade, from molecular structure to conformation, gene perturbation, cellular phenotype, and transcriptomic response, whose branching grows exponentially with depth, a regime that Euclidean spaces cannot embed without distortion\. We therefore propose \\textbf\{GeoPMR\}, a pre\-training framework that addresses both properties through two complementary geometric modules: Metric\-Guided Gromov\-Wasserstein alignment \(MGW\) and a Hyperbolic Hierarchical Module \(HHM\)\. \\textbf\{MGW\} equips each modality with a learnable diagonal Riemannian metric and aligns distance matrices rather than individual embeddings via entropic optimal transport, so cross\-modal alignment preserves relational rather than merely pointwise structure\. \\textbf\{HHM\} lifts all modality latents onto the Poincaré ball and applies a probabilistic parent\-child and sibling contrastive loss along the cascade, exploiting the exponential volume growth of negatively curved space to embed the hierarchy with low distortion\. On seven molecular property prediction benchmarks spanning toxicity, bioactivity, and ADME, GeoPMR sets a new state of the art by improving the classification AUC by 1\.4\\% and regression MAE by 1\.7\\%\.

## Where to Look Matters: Rethinking Sub\-Volume Sampling in 3D Medical Self\-supervised Learning

**Authors:** Junkai Liu; Le Zhang

**ID:** 150657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gPf82LsVMO>) | [PDF](<https://openreview.net/pdf?id=gPf82LsVMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150657>)

Self\-supervised learning on 3D medical images commonly relies on random sub\-volume sampling during pretraining\. However, random cropping implicitly treats all spatial regions as equally worth observing, despite anatomical priors and spatial redundancy that make regions inherently unequal in their value for representation learning\. To this end, we first show through controlled crop\-quality manipulations that better sub\-volumes lead to better downstream transfer, revealing the observation policy as an overlooked bottleneck in 3D medical SSL\. Motivated by this finding, we revisit sub\-volume sampling as a where\-to\-look problem\. We propose VolumeProbe, a plug\-and\-play framework that replaces random cropping with an offline coarse\-to\-fine probe bank guided by anatomy\-awareness, informativeness, and diversity\. We instantiate VolumeProbe as a lightweight Lite variant using geometric and image\-statistical cues, and a diagnostic Feat variant using frozen visual features, to examine whether lightweight volume\-intrinsic priors suffice or richer semantic cues reliably provide additional value\. Extensive experiments across multiple 3D medical SSL backbones and downstream tasks demonstrate that VolumeProbe\-Lite consistently improves transfer performance over random sampling\. Mechanistic analyses further attribute these gains to more anatomically plausible and informative observations, reduced spatial redundancy, more efficient learning dynamics, and more structured representations\.

## Not All Instances Should Contribute Equally: Sparse Support Grounding via Unbalanced Transport for Heterogeneous MIL

**Authors:** Hojoon Kim; Beomgu Kang; Hyunseok Seo

**ID:** 150282 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jJwpGhP4Qj>) | [PDF](<https://openreview.net/pdf?id=jJwpGhP4Qj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150282>)

Multiple instance learning \(MIL\) learns from bag\-level labels, but a bag’s label is often supported by only a few hidden instances\. In heterogeneous bags, these useful instances are rare, diverse, and surrounded by many weak or noisy observations\. We propose Sparse Support Grounding, a MIL framework that learns instance influence directly\. The key idea is simple: an instance should not matter just because it can be matched somewhere; it should matter when the match provides reliable label evidence\. Our method forms a compact, bag\-specific evidence support, compares instances with label\-consistent supports, and uses unbalanced transport to estimate how much source mass each instance should retain\. This retained mass becomes the strength of its grounding signal, so reliable evidence shapes training more than nuisance content, while the bag classifier still uses the full bag\. Thus, transport is turned from a matching rule into a way of learning which instances should drive supervision\. Experiments on synthetic MIL, whole\-slide images, and clinical endomicroscopy show consistent gains, with the largest improvements when sparse diagnostic evidence is embedded in heterogeneous nuisance content\.

## Anchor PCA

**Authors:** Benedikt Seiter; Anya Fries; Julius von Kügelgen; Jonas Peters

**ID:** 153959 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HFtvKUB8yF>) | [PDF](<https://openreview.net/pdf?id=HFtvKUB8yF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153959>)

Principal component analysis \(PCA\) is one of the most widely used unsupervised dimension reduction techniques\. We study PCA for data from multiple related domains\. Since principal components generally differ across domains, one way to obtain a shared low\-rank embedding is to perform PCA on the pooled data\. However, this approach can focus on spurious directions that exhibit high variation in only a few domains\. To find a robust embedding that still explains most variance in unseen but similar domains, we propose instead to focus on shared directions of variation\. To this end, we introduce Anchor PCA which trades off overall explained variance with agreement between the shared and domain\-specific low\-rank embeddings\. Anchor PCA amounts to PCA on a modified target matrix and thus can be solved efficiently\. Moreover, we show that Anchor PCA recovers a maximal invariant subspace and admits a minimax reconstruction interpretation under bounded domain\-specific covariance inflations\. On simulated and real\-world gas sensor data with temporal drift, we demonstrate, respectively, that Anchor PCA recovers the maximally invariant subspace and yields embeddings that explain more variance on unseen domains than the pooling baseline and a worst\-case alternative\. Taken together, these findings establish Anchor PCA as a promising approach to robust unsupervised dimension reduction from multi\-domain data\.

## Deadline\-Constrained Dynamic Workflow Scheduling Can be Cast as a Representation Learning Problem

**Authors:** Ya Shen; Gang Chen; Hui Ma; Mengjie Zhang

**ID:** 151183 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cMnAOzk1N3>) | [PDF](<https://openreview.net/pdf?id=cMnAOzk1N3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151183>)

Deadline\-Constrained Cost\-Aware Dynamic Workflow Scheduling \(D\-CADWS\) aims to minimize virtual machine \(VM\) rental cost while maintaining high workflow deadline satisfaction in dynamic cloud environments\. The problem is challenging because the deadline impact of assigning a workflow task to a VM is not directly observable at decision time\. It depends on long\-horizon effects, including downstream task dependencies, VM queueing, and interactions among dynamically arriving workflows\. Existing methods usually fold deadline violations into a single reward or penalty term, which obscures the distinction between action safety and action cost\. In this paper, we cast D\-CADWS as a representation learning problem\. The core idea is to learn a deadline\-aware representation that can predict, before execution, whether a candidate action is risky with respect to the current task deadline, and then use it to guide cost\-efficient scheduling\. Based on this idea, we propose a representation\-centered deep reinforcement learning \(RCDRL\) method\. RCDRL constructs task\-level deadline supervision, trains a predictive deadline model to learn deadline\-aware representations, and learns a VM\-cost critic on top of this representation\. The final policy follows a safe\-first rule that rejects risky actions before minimizing VM cost\. We further propose a two\-phase training strategy to keep the learned representation aligned with the evolving policy\-induced data distribution\. Experiments on dynamic workflow scheduling benchmarks show that RCDRL achieves substantially lower VM cost than other state\-of\-the\-art heuristic and DRL baselines while maintaining strong workflow deadline success\.

## Learning to Group and Order: Cross\-Instance Self\-Supervised RL for Vision\-Centric MLLMs

**Authors:** Songming Yang; Hong\-Tao Yu; Xiu\-Shen Wei

**ID:** 153627 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JytxDG9YwJ>) | [PDF](<https://openreview.net/pdf?id=JytxDG9YwJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153627>)

Reinforcement learning \(RL\) post\-training has become an important paradigm for improving multimodal large language models \(MLLMs\), especially with automatically verifiable rewards\. For vision\-centric MLLMs, self\-supervised visual pretext tasks provide such rewards without human annotations\. However, existing self\-supervised RL methods mostly exploit within\-instance structure, such as spatial or temporal ordering within a single image or video, offering limited supervision for cross\-instance discrimination and fine\-grained comparison\. We introduce Group\-and\-Order Self\-Supervised Reinforcement Learning \(GO\-SSL\), a cross\-instance jigsaw framework for vision\-centric MLLM post\-training\. Given two visual instances, GO\-SSL mixes their local elements and trains the model to group them by instance of origin while recovering the order within each group, coupling instance\-level comparison with spatial, temporal, or geometric structure recovery\. This paired formulation turns the same unlabeled data into richer verifiable supervision through diverse pairings, shuffles, and hard\-pair curricula\. We instantiate GO\-SSL mainly on cross\-image jigsaw tasks and further extend it to 3D depth and video temporal ordering\. Across diverse benchmarks, GO\-SSL consistently improves over the base MLLM and prior baseline methods, with clear gains in fine\-grained perception and spatial understanding\. These results suggest a data\-efficient direction for self\-supervised RL in MLLMs: constructing comparative cross\-instance contexts can provide richer transferable supervision than merely scaling data volume or adding isolated pretext tasks\. Code will be released later\.

## Leveraging unlabelled data for generalizable neural population decoding

**Authors:** Ximeng Mao; Nanda H Krishna; Hee\-Woon Ryoo; Matthew G Perich; Guillaume Lajoie

**ID:** 154038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgTOMpnG1o>) | [PDF](<https://openreview.net/pdf?id=GgTOMpnG1o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154038>)

Robust and accurate neural decoders are integral to the development of neurotechnological applications such as brain\-computer interfaces and closed\-loop experiments\. Recent work has shown that tokenizing neural data at the resolution of individual spikes facilitates multi\-session pretraining and delivers state\-of\-the\-art decoding performance\. However, these spike\-based models are currently restricted to supervised learning \(SL\) regimes, limiting both pretraining and finetuning to datasets with paired behavioural labels\. To address this, we introduce MOJO \($\\textbf\{M\}$asked aut$\\textbf\{O\}$encoder\-based $\\textbf\{JO\}$int training\), a training framework designed for spike\-tokenizing models that jointly leverages self\-supervised learning \(SSL\) via masked autoencoding and SL objectives for better decoding performance and interpretability\. We evaluate MOJO on three intracortical spiking datasets—monkey motor cortex across various reaching tasks, multi\-regional mouse recordings during vision and cognitive decision making tasks—demonstrating superior performance to purely SL\-trained models\. This improvement is especially notable when training with limited labelled data, specifically in the few\-shot finetuning regime where only a small amount of labelled data is available to adapt a model to a new recording session\. The incorporation of SSL also yields more interpretable neuronal representations, improving performance on analyses such as brain region classification and spike\-statistics prediction despite the lack of explicit optimization for these tasks\. We then show that MOJO generalizes beyond spiking data using human electrocorticography \(ECoG\) during speech articulation\. We show that MOJO continues to outperform purely SL\-trained models and achieves performance comparable to neuro\-foundation models \(NFMs\) built specifically for continuous signals\. Overall, augmenting spike\-tokenizing models with SSL improves their performance in label\-impoverished settings and enables the use of unlabelled data across various tasks and species, and while generalizing to other neural modalities\. These results suggest a path towards more flexible and scalable data usage when training NFMs\.

## Embedding Foundation Model Predictions in Discrete\-Choice Models with Structural Guarantees

**Authors:** Yingshuo Wang; Xian Sun; Yanhang Li; Zhichao Fan; Zexin Zhuang

**ID:** 153155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NTGgX4PiPf>) | [PDF](<https://openreview.net/pdf?id=NTGgX4PiPf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153155>)

Tabular foundation models achieve strong accuracy on choice prediction tasks, but their predictions often violate the economic logic those tasks require: raising a price can increase predicted demand, implied willingness\-to\-pay estimates are frequently negative or implausible, and unavailable alternatives receive nonzero probability\. We propose a two\-stage adapter that takes a foundation model's predicted choice probabilities as a precomputed feature and embeds them inside a multinomial logit's utility\. In Stage 1, we fit the multinomial logit's structural coefficients by maximum likelihood with sign constraints; in Stage 2, we freeze those coefficients and fit a small neural correction operating on the foundation model's predictions\. We prove that this composition exactly preserves the multinomial logit's marginal rate of substitution, so analytically computable value\-of\-time becomes a mathematical guarantee rather than an empirical accident\. Across three datasets and two foundation models, the adapter gains 6\.4 percentage points \(pp\) of test accuracy on average over the multinomial logit and up to 12\.8 pp, maintains 100\\% cost monotonicity, and produces values of time within the published transportation\-economics range on the transportation datasets\. Performance degrades gracefully under foundation\-model context restriction, retaining at least 6 pp of accuracy gain even at 10\\% of the original foundation\-model context\.

## Submodular Clustering beyond $1\-1/e$

**Authors:** Kiarash Banihashem; Mohammadhossein Bateni; Hossein Esfandiari; Samira Goudarzi; MohammadTaghi Hajiaghayi

**ID:** 153766 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IpFLqxYStJ>) | [PDF](<https://openreview.net/pdf?id=IpFLqxYStJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153766>)

Submodular clustering provides a flexible framework for modeling coverage and     representation quality in metric spaces, capturing a broad range of     objectives arising in      machine learning,      including influence maximization, data summarization, and representation learning\.     Given a set of points $P$ in a metric space and a decreasing     service function $\\phi$, the goal is to select $k$ centers $U$ to maximize     total service $\\sum\_\{p \\in P\} \\phi\(d\(U, p\)\)$, where $d\(U, p\)$ is the     distance from $p$ to its nearest center\. While this objective is submodular     and admits a standard $1 \- 1/e$ approximation via greedy algorithms, it has     remained unclear whether and when this barrier can be surpassed\. We resolve this question by characterizing exactly which functions $\\phi$     permit approximation guarantees beyond $1\-1/e$\. We identify a natural     parameter $\\gamma\_\\phi$ capturing how rapidly $\\phi$ decreases,      and show     that, assuming $\\mathrm\{P\} \\ne \\mathrm\{NP\}$,     a better\-than $1\-1/e$ approximation ratio is achievable in polynomial time     if and only if $\\gamma\_\\phi &gt; 0$\.

## Spherical Interpolation for Backward\-Compatible Multimodal Representations

**Authors:** Simone Ricci; Niccolò Biondi; Federico Pernici

**ID:** 148719 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vYCMLEpje4>) | [PDF](<https://openreview.net/pdf?id=vYCMLEpje4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148719>)

Contrastive vision\-language models map visual and textual representations in a shared normalized embedding space, making cosine similarity the natural metric for cross\-modal retrieval\. A practical challenge arises during model upgrades: independently trained models generally produce incompatible representation spaces, so replacing a deployed model typically requires recomputing embeddings for the entire gallery, which is prohibitively expensive at scale\. Orthogonal post\-hoc alignment mitigates this problem by mapping new\-model queries into the old\-model gallery space while preserving the new learned representation\. However, because independently trained models can differ in fine\-grained representation structure, the orthogonal alignment remains approximate, leaving a residual angular discrepancy between the old\-model query and the aligned new\-model query\. We study whether spherical linear interpolation \(SLERP\) between these two normalized query representations can improve retrieval without re\-indexing the gallery\. We formalize the geometric conditions under which post\-alignment interpolation yields a query direction closer to a task\-optimal direction than either endpoint, and connect this characterization to Recall@$K$ through a local margin\-based certification result\. Experiments across multiple benchmarks and model families show that SLERP improves over orthogonal alignment alone, suggesting these conditions are broadly met in practice\.

## Rethinking Radar 3D Perception: Representation Learning from Raw Spectra

**Authors:** Miao Zhang; Mohamed Abdelsamad; Bin Yang; Sherif Abdulatif; Benedikt Loesch; Marco Altmann; Abhinav Valada; Bin Yang

**ID:** 154355 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ECmrBoImC3>) | [PDF](<https://openreview.net/pdf?id=ECmrBoImC3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154355>)

Raw radar spectra are widely viewed as significantly cluttered and noisy to support direct representation learning\. This has led to handcrafted reductions, sparse point clouds, or compact Doppler descriptors as the default preprocessing step in radar perception\. In this work, we challenge this assumption and argue that the main limitation is not the raw spectral representation itself, but rather the absence of a learning objective capable of separating the structured signal from noise\. Handcrafted reductions partially address this problem, but they impose rigid assumptions about what counts as signal, discarding weak but informative structure while retaining artifacts that match the reduction model\. Once such information is removed, supervised learning cannot recover it or question what was preserved\. We propose a principled alternative: structure is the component of the radar spectrum that remains reconstructable under localized corruption, while noise is the component that does not\. This perspective makes self\-supervised masked modeling a natural and assumption\-free learning paradigm for dense radar spectra\. We instantiate it with Leakage\-aware Spectral MAE, a masked autoencoding framework for raw radar cubes that incorporates a spectral\-leakage\-aware corruption strategy to model physically realistic energy spreading\. We also show that Doppler organization is crucial: treating Doppler as a primary spatial dimension, using an x\-y\-D representation with height encoded as features, substantially outperforms naive channel stacking and is essential for exploiting dense 4D spectra\. Without any handcrafted reductions, our approach consistently outperforms state\-of\-the\-art radar\-based detectors and point\-cloud\-based self\-supervised learning \(SSL\) counterparts\. These results establish raw radar spectra as a highly effective representation for 3D perception when paired with an appropriate pretraining objective\.

## DynaSub: Adaptive Subgrouping for Scalable Representation Learning

**Authors:** Tina Behrouzi; Sana Tonekaboni; Rahul Krishnan; Anna Goldenberg

**ID:** 149429 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q7e6qi0tQK>) | [PDF](<https://openreview.net/pdf?id=q7e6qi0tQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149429>)

Real\-world observational data often contain existing or emerging heterogeneous subpopulations that deviate from global patterns\. Without the ability to detect Out\-of\-Distribution \(OOD\) data and model underlying structure, systems risk failing to adapt to emerging patterns, leading to inaccurate or potentially harmful predictions\. We introduce DynaSub, a Dynamic Subgrouping Variational Autoencoder that couples latent representation learning with subgroup discovery\. DynaSub operates on pre\-trained foundation models or regular encoders, learning latent embeddings that define subgroup structure and are iteratively refined to enhance subgroup separability and OOD sensitivity\. It incorporates a nonparametric clustering mechanism directly in latent space, enabling the number and structure of subgroups to adapt dynamically during training\. DynaSub achieves competitive performance on near\- and far\-OOD detection across ResNet and ViT\-based foundation encoders, reducing false positive rates by up to 10\\% under covariate shift while maintaining high AUROC across multiple OOD benchmarks, and excelling in class\-OOD settings where entire classes are unseen during training\.

## DART: Zero\-Shot Dual\-Side Alignment Routing for LLM Performance\-Cost Tradeoffs

**Authors:** Yuejun Jiao; Yanxin Yang; Boyu Wang; Yonghao Yang; Hao Shen; Mingsong Chen

**ID:** 155299 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cPZndmGS6>) | [PDF](<https://openreview.net/pdf?id=6cPZndmGS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155299>)

As the ecosystem of Large Language Models \(LLMs\) rapidly expands, LLM routing has become essential for dynamically balancing performance and cost\. However, existing methods fail to simultaneously satisfy the three core criteria of an ideal router, i\.e\., high routing precision, minimal intrinsic operational overhead, and zero\-shot onboarding of new models\. These methods rely heavily on surface\-level semantics and discrete ID mappings, conflating mere semantic similarity with underlying capability requirements and thereby precluding zero\-shot, training\-free generalization\. To address these limitations, we propose DART, a novel zero\-shot routing framework grounded in dual\-side alignment to optimize LLM performance\-cost tradeoffs\. Instead of relying on direct semantic matching, we decouple the routing process into a demand\-supply alignment problem within a shared low\-rank latent capability space\. Specifically, on the supply side, DART constructs latent capability embeddings for candidate models, using an initialization mechanism to anchor newly introduced models in this latent space via metadata and family\-graph prior, without retraining\. On the demand side, a dedicated encoder explicitly distills the query's directional capability requirements and inherent difficulty into a latent demand embedding\. This decoupled representation allows routing decisions to be computed via a lightweight dot\-product operation between the demand and capability embeddings, modulated by query\-adaptive cost sensitivity, minimizing overhead\. Extensive experiments across comprehensive benchmarks demonstrate that DART achieves state\-of\-the\-art utility under diverse cost constraints, satisfying the three core criteria with exceptional robustness in cold\-start scenarios\.

## Intrinsic Information Theoretic Analysis of ReLU Nets

**Authors:** Johan Mylius\-Kroken; Elisabeth Wetzer; Ali Ramezani\-Kebrya; Robert Jenssen; Kristoffer Wickstrøm

**ID:** 155566 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4dnKZPefBt>) | [PDF](<https://openreview.net/pdf?id=4dnKZPefBt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155566>)

_Abstract unavailable from the accessible public sources._

## Provably Efficient Representation Learning for Low\-Rank CMDPs

**Authors:** Kaixuan Liu; GUOJUN XIONG; Shengpu Tang; Wanyun Si; Jian Li

**ID:** 155519 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4zzk1B7I8y>) | [PDF](<https://openreview.net/pdf?id=4zzk1B7I8y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155519>)

We study representation learning in low\-rank Constrained Markov Decision Processes \(CMDPs\), where both value and reward functions are approximated by a set of unknown representation vectors, and the transition dynamics admit a low\-rank factorization\. The objective is to maximize expected cumulative rewards while complying with constraints on the expected cumulative utility\. To achieve this, we propose \\texttt\{MFRLC\} \(Model\-Free Representation Learning for Low\-Rank CMDP\), a model\-free algorithm that uses a primal\-dual scheme to effectively balance reward regret and constraint violations\. To the best of our knowledge, \\texttt\{MFRLC\} is the first representation\-learning method for low\-rank CMDPs that combines the Least\-Squares Value Iteration with Upper Confidence Bound \(LSVI\-UCB\) and primal\-dual techniques\. \\texttt\{MFRLC\} further enhances value function estimation with bonuses for function approximation and uniquely learns the mapping from representations to value functions directly through representation learning\. We prove that \\texttt\{MFRLC\} achieves both regret and cumulative constraint violation of order $\\widetilde O\(H^3 d^2 K^\{3/4\}\|\\mathcal\{A\}\|^\{3/2\}/\\gamma\)$, making it provably sample\-efficient and highly adaptable to complex environments due to the reliance on function approximation\.

## CoANeRV: Coordinate\-Aware Token\-Space Neural Video Representation

**Authors:** Jialong Guo; Ke Liu; MENGXUAN LI; Jiajun Bu; Haishuai Wang

**ID:** 152151 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VA2hCFiIsa>) | [PDF](<https://openreview.net/pdf?id=VA2hCFiIsa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152151>)

Neural representations for videos \(NeRV\) have shown strong reconstruction fidelity by storing video\-specific information in network weights\. However, existing formulations typically require either costly per\-video optimization or video\-specific weight generation, making it difficult to scale to efficient amortized video representation\. We propose \\textbf\{CoANeRV\}, a coordinate\-aware token\-space neural video representation framework that shifts video\-specificity from decoder weights to compact latent video tokens\. Instead of optimizing or generating an instance\-specific network, CoANeRV uses a shared coordinate\-conditioned decoder to reconstruct videos by querying tokenized video content at continuous spatio\-temporal coordinates\. This formulation decouples video representation from parameter instantiation, enabling feed\-forward video encoding while retaining coordinate\-level reconstruction flexibility\. To make token\-space reconstruction effective, CoANeRV introduces a coordinate\-aware decoding architecture that aligns spatio\-temporal queries with video tokens through axis\-adaptive positional encoding and temperature\-modulated cross\-attention\. Block\-wise coordinate querying further reduces peak attention memory, making high\-resolution reconstruction practical\. Experiments on diverse video datasets show that CoANeRV consistently improves reconstruction quality over prior feed\-forward NeRV and INR baselines, reduces peak memory compared with attention\-based coordinate decoders, and provides efficient amortized encoding without per\-video optimization\. These results suggest that token\-space neural representation is a scalable alternative to conventional weight\-space NeRV formulations\. The code is available at https://anonymous\.4open\.science/r/CoANeRV\-50F7/\.

## Embedding Foundation Model Predictions in Discrete\-Choice Models with Structural Guarantees

**Authors:** Yingshuo Wang; Xian Sun; Yanhang Li; Zhichao Fan; Zexin Zhuang

**ID:** 153155\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153155

[Paper](<https://openreview.net/forum?id=NTGgX4PiPf>) | [PDF](<https://openreview.net/pdf?id=NTGgX4PiPf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153155>)

Tabular foundation models achieve strong accuracy on choice prediction tasks, but their predictions often violate the economic logic those tasks require: raising a price can increase predicted demand, implied willingness\-to\-pay estimates are frequently negative or implausible, and unavailable alternatives receive nonzero probability\. We propose a two\-stage adapter that takes a foundation model's predicted choice probabilities as a precomputed feature and embeds them inside a multinomial logit's utility\. In Stage 1, we fit the multinomial logit's structural coefficients by maximum likelihood with sign constraints; in Stage 2, we freeze those coefficients and fit a small neural correction operating on the foundation model's predictions\. We prove that this composition exactly preserves the multinomial logit's marginal rate of substitution, so analytically computable value\-of\-time becomes a mathematical guarantee rather than an empirical accident\. Across three datasets and two foundation models, the adapter gains 6\.4 percentage points \(pp\) of test accuracy on average over the multinomial logit and up to 12\.8 pp, maintains 100\\% cost monotonicity, and produces values of time within the published transportation\-economics range on the transportation datasets\. Performance degrades gracefully under foundation\-model context restriction, retaining at least 6 pp of accuracy gain even at 10\\% of the original foundation\-model context\.

## Submodular Clustering beyond $1\-1/e$

**Authors:** Kiarash Banihashem; Mohammadhossein Bateni; Hossein Esfandiari; Samira Goudarzi; MohammadTaghi Hajiaghayi

**ID:** 153766\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153766

[Paper](<https://openreview.net/forum?id=IpFLqxYStJ>) | [PDF](<https://openreview.net/pdf?id=IpFLqxYStJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153766>)

Submodular clustering provides a flexible framework for modeling coverage and     representation quality in metric spaces, capturing a broad range of     objectives arising in      machine learning,      including influence maximization, data summarization, and representation learning\.     Given a set of points $P$ in a metric space and a decreasing     service function $\\phi$, the goal is to select $k$ centers $U$ to maximize     total service $\\sum\_\{p \\in P\} \\phi\(d\(U, p\)\)$, where $d\(U, p\)$ is the     distance from $p$ to its nearest center\. While this objective is submodular     and admits a standard $1 \- 1/e$ approximation via greedy algorithms, it has     remained unclear whether and when this barrier can be surpassed\. We resolve this question by characterizing exactly which functions $\\phi$     permit approximation guarantees beyond $1\-1/e$\. We identify a natural     parameter $\\gamma\_\\phi$ capturing how rapidly $\\phi$ decreases,      and show     that, assuming $\\mathrm\{P\} \\ne \\mathrm\{NP\}$,     a better\-than $1\-1/e$ approximation ratio is achievable in polynomial time     if and only if $\\gamma\_\\phi &gt; 0$\.

## Spherical Interpolation for Backward\-Compatible Multimodal Representations

**Authors:** Simone Ricci; Niccolò Biondi; Federico Pernici

**ID:** 148719\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148719

[Paper](<https://openreview.net/forum?id=vYCMLEpje4>) | [PDF](<https://openreview.net/pdf?id=vYCMLEpje4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148719>)

Contrastive vision\-language models map visual and textual representations in a shared normalized embedding space, making cosine similarity the natural metric for cross\-modal retrieval\. A practical challenge arises during model upgrades: independently trained models generally produce incompatible representation spaces, so replacing a deployed model typically requires recomputing embeddings for the entire gallery, which is prohibitively expensive at scale\. Orthogonal post\-hoc alignment mitigates this problem by mapping new\-model queries into the old\-model gallery space while preserving the new learned representation\. However, because independently trained models can differ in fine\-grained representation structure, the orthogonal alignment remains approximate, leaving a residual angular discrepancy between the old\-model query and the aligned new\-model query\. We study whether spherical linear interpolation \(SLERP\) between these two normalized query representations can improve retrieval without re\-indexing the gallery\. We formalize the geometric conditions under which post\-alignment interpolation yields a query direction closer to a task\-optimal direction than either endpoint, and connect this characterization to Recall@$K$ through a local margin\-based certification result\. Experiments across multiple benchmarks and model families show that SLERP improves over orthogonal alignment alone, suggesting these conditions are broadly met in practice\.

## Rethinking Radar 3D Perception: Representation Learning from Raw Spectra

**Authors:** Miao Zhang; Mohamed Abdelsamad; Bin Yang; Sherif Abdulatif; Benedikt Loesch; Marco Altmann; Abhinav Valada; Bin Yang

**ID:** 154355\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154355

[Paper](<https://openreview.net/forum?id=ECmrBoImC3>) | [PDF](<https://openreview.net/pdf?id=ECmrBoImC3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154355>)

Raw radar spectra are widely viewed as significantly cluttered and noisy to support direct representation learning\. This has led to handcrafted reductions, sparse point clouds, or compact Doppler descriptors as the default preprocessing step in radar perception\. In this work, we challenge this assumption and argue that the main limitation is not the raw spectral representation itself, but rather the absence of a learning objective capable of separating the structured signal from noise\. Handcrafted reductions partially address this problem, but they impose rigid assumptions about what counts as signal, discarding weak but informative structure while retaining artifacts that match the reduction model\. Once such information is removed, supervised learning cannot recover it or question what was preserved\. We propose a principled alternative: structure is the component of the radar spectrum that remains reconstructable under localized corruption, while noise is the component that does not\. This perspective makes self\-supervised masked modeling a natural and assumption\-free learning paradigm for dense radar spectra\. We instantiate it with Leakage\-aware Spectral MAE, a masked autoencoding framework for raw radar cubes that incorporates a spectral\-leakage\-aware corruption strategy to model physically realistic energy spreading\. We also show that Doppler organization is crucial: treating Doppler as a primary spatial dimension, using an x\-y\-D representation with height encoded as features, substantially outperforms naive channel stacking and is essential for exploiting dense 4D spectra\. Without any handcrafted reductions, our approach consistently outperforms state\-of\-the\-art radar\-based detectors and point\-cloud\-based self\-supervised learning \(SSL\) counterparts\. These results establish raw radar spectra as a highly effective representation for 3D perception when paired with an appropriate pretraining objective\.

## DynaSub: Adaptive Subgrouping for Scalable Representation Learning

**Authors:** Tina Behrouzi; Sana Tonekaboni; Rahul Krishnan; Anna Goldenberg

**ID:** 149429\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149429

[Paper](<https://openreview.net/forum?id=q7e6qi0tQK>) | [PDF](<https://openreview.net/pdf?id=q7e6qi0tQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149429>)

Real\-world observational data often contain existing or emerging heterogeneous subpopulations that deviate from global patterns\. Without the ability to detect Out\-of\-Distribution \(OOD\) data and model underlying structure, systems risk failing to adapt to emerging patterns, leading to inaccurate or potentially harmful predictions\. We introduce DynaSub, a Dynamic Subgrouping Variational Autoencoder that couples latent representation learning with subgroup discovery\. DynaSub operates on pre\-trained foundation models or regular encoders, learning latent embeddings that define subgroup structure and are iteratively refined to enhance subgroup separability and OOD sensitivity\. It incorporates a nonparametric clustering mechanism directly in latent space, enabling the number and structure of subgroups to adapt dynamically during training\. DynaSub achieves competitive performance on near\- and far\-OOD detection across ResNet and ViT\-based foundation encoders, reducing false positive rates by up to 10\\% under covariate shift while maintaining high AUROC across multiple OOD benchmarks, and excelling in class\-OOD settings where entire classes are unseen during training\.

## DART: Zero\-Shot Dual\-Side Alignment Routing for LLM Performance\-Cost Tradeoffs

**Authors:** Yuejun Jiao; Yanxin Yang; Boyu Wang; Yonghao Yang; Hao Shen; Mingsong Chen

**ID:** 155299\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155299

[Paper](<https://openreview.net/forum?id=6cPZndmGS6>) | [PDF](<https://openreview.net/pdf?id=6cPZndmGS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155299>)

As the ecosystem of Large Language Models \(LLMs\) rapidly expands, LLM routing has become essential for dynamically balancing performance and cost\. However, existing methods fail to simultaneously satisfy the three core criteria of an ideal router, i\.e\., high routing precision, minimal intrinsic operational overhead, and zero\-shot onboarding of new models\. These methods rely heavily on surface\-level semantics and discrete ID mappings, conflating mere semantic similarity with underlying capability requirements and thereby precluding zero\-shot, training\-free generalization\. To address these limitations, we propose DART, a novel zero\-shot routing framework grounded in dual\-side alignment to optimize LLM performance\-cost tradeoffs\. Instead of relying on direct semantic matching, we decouple the routing process into a demand\-supply alignment problem within a shared low\-rank latent capability space\. Specifically, on the supply side, DART constructs latent capability embeddings for candidate models, using an initialization mechanism to anchor newly introduced models in this latent space via metadata and family\-graph prior, without retraining\. On the demand side, a dedicated encoder explicitly distills the query's directional capability requirements and inherent difficulty into a latent demand embedding\. This decoupled representation allows routing decisions to be computed via a lightweight dot\-product operation between the demand and capability embeddings, modulated by query\-adaptive cost sensitivity, minimizing overhead\. Extensive experiments across comprehensive benchmarks demonstrate that DART achieves state\-of\-the\-art utility under diverse cost constraints, satisfying the three core criteria with exceptional robustness in cold\-start scenarios\.

## Breaking feature collapse in self\-supervised time series encoder

**Authors:** Özgün Turgut; Daniel Rueckert

**ID:** 155178 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7iz3dma6VT>) | [PDF](<https://openreview.net/pdf?id=7iz3dma6VT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155178>)

General\-purpose time series encoders such as \\texttt\{OTIS\} and \\texttt\{MOMENT\} promise a single backbone that transfers across domains, but they do not scale and rely on manually tagged domain labels at tokenisation\. We trace both symptoms to a single pathology: under masked\-data\-modelling supervision the encoder's output patch tokens \\textit\{partially collapse\}, with mean off\-diagonal pair\-wise cosine similarity stabilising at $0\.68$ in \\texttt\{OTIS\} and the encoder's effective rank capped accordingly\. This is the natural consequence of supervising the encoder only in data space, which leaves no constraint against redundant token directions in the representation space\. We introduce \\texttt\{OTISv2\}, which suppresses the collapse by complementing the masked\-reconstruction objective with two representation\-space terms \-\-\- a self\-distillation loss against an exponential\-moving\-average teacher and a KoLeo regulariser \-\-\- and replaces \\texttt\{OTIS\}'s per\-domain variate embeddings with register tokens to remove the label dependency\. The resulting encoder pulls mean patch\-to\-patch cosine similarity from $0\.63$ to $0\.58$, scales monotonically from $7\.1\\,$M to $40\\,$M parameters where its predecessor plateaus, and dominates general\-purpose baselines on $143$ uni\- and multi\-variate datasets from the UEA and UCR archives from a single label\-free checkpoint\. We release code and pre\-trained weights upon acceptance\.

## OTIS: Learning High\-Quality Time Series Features With Tiny Encoders

**Authors:** Özgün Turgut; Philip Müller; Martin Menten; Daniel Rueckert

**ID:** 156785 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=WW206A1Tru>) | [PDF](<https://openreview.net/pdf?id=WW206A1Tru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156785>)

We introduce OTIS, an open time series encoder that yields high\-quality time series features for downstream deployment on any system, including resource\-constrained wearables and industrial sensors\. Currently, the development of powerful general\-purpose encoders relies on the scaling laws hypothesis, using large encoder sizes to memorise the heterogeneous distributions of multi\-domain training data\. However, this reliance on scale creates a barrier to real\-world utility, rendering deployment on resource\-constrained systems infeasible due to strict memory, energy, and latency constraints\. Surprisingly, we find that tailoring standard masked modelling pre\-training to time series properties yields a tiny 7\.1M encoder that matches the state\-of\-the\-art performance of 54× larger encoders across 162 tasks, while requiring 10× less memory, 43× less energy, and 37× lower latency\. To achieve this without the capacity tax, we introduce three novel components: \(1\) a domain\-aware tokeniser to resolve conflicting semantics within multi\-domain training data; \(2\) a dual masking strategy to capture spatiotemporal structures and temporal causality; and \(3\) a structure\-aware objective to decouple feature learning from modelling noise\. Consequently, OTIS produces high\-quality time series features that enable state\-of\-the art performance in discriminative tasks and even extend seamlessly to generative tasks at minimal additional cost\. To democratise access to powerful time series features on any system, we release our code and pre\-trained weights\.

## From Topology to Retrieval: Decoding Embedding Spaces with Unified Signatures

**Authors:** Florian Rottach; William Rudman; Bastian Rieck; Harrisen Scells; Carsten Eickhoff

**ID:** 155821 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2cbJBFU7At>) | [PDF](<https://openreview.net/pdf?id=2cbJBFU7At>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155821>)

Studying the shape of text embedding spaces enhances our understanding  of model behavior and how geometry affects downstream task performance\.  While a range of topological and geometric metrics have been explored,  they are typically analyzed in isolation, and the connections between  them remain largely unknown\. In this paper, we present  Unified Topological Signatures \(UTS\), a holistic framework for characterizing the  structure of embedding spaces\. We evaluate our method across a wide  range of text embedding models and retrieval datasets, finding that UTS outperform  individual metrics in downstream performance prediction\. Through several  experiments, we demonstrate that UTS are superior at characterizing  embedding spaces, can predict model\-specific properties and bias from  geometry, and reveal novel insights into representational similarity  that challenge the Platonic Representation Hypothesis\.

## Generalized Laplacian in Spectral Seriation on Manifold Data

**Authors:** Ruizi Wu; Wanjie Wang; Jinchi Lv

**ID:** 154052 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GZLpAjTrJj>) | [PDF](<https://openreview.net/pdf?id=GZLpAjTrJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154052>)

_Abstract unavailable from the accessible public sources._

## RTEB: An Overfitting\-Resistant Benchmark for Embedding Model Evaluation

**Authors:** Sahil Verma; Minghan Li; Andrew Gaut; Yujie Qian; Kaidi Cao; Zhenmei Shi; Kenneth Enevoldsen; Roman Solomatin; Isaac Chung; Tom Aarsen; Apoorva Joshi; Emilia Garcia\-Casademont; Michael Günther; Niklas Muennighoff; Yevhen Kostiuk; Fődi Zoltán; Tengyu Ma; Frank Liu

**ID:** 139103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ktfYzbgPfX>) | [PDF](<https://openreview.net/pdf?id=ktfYzbgPfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139103>)

Embedding models are central to modern information retrieval, retrieval\-augmented generation, and downstream NLP systems, yet their evaluation remains unreliable: widely used benchmarks such as BEIR and MTEB rely on fully public datasets, making them vulnerable to overfitting that inflates scores without corresponding gains in real\-world generalization\. We introduce RTEB, a retrieval\-focused embedding benchmark designed to address these limitations\. Unlike MTEB's broad multi\-task scope, RTEB is purpose\-built for retrieval \-\- the setting most critical to RAG pipelines and agentic systems\. RTEB emphasizes underrepresented yet high\-impact domains, particularly code and agentic code retrieval, and keeps a large portion of its datasets private to structurally prevent direct test\-set overfitting\. We evaluate 20 models on 48 datasets \(20 public, 28 private\) spanning six domains and four languages\. Rankings on RTEB diverge substantially from BEIR and MTEB \($\\rho = 0\.38$\), agentic code retrieval emerges as the hardest domain with the best model reaching only 0\.48 NDCG@10, and domain\-specialized models fail to outperform strong generalists on any domain\. Together, these design choices and findings position RTEB as a more reliable, discriminative, and future\-proof benchmark for embedding model evaluation\.

## Decoupling Label Shift and Surrogate Gradient Errors for Robust Federated Spiking Neural Networks

**Authors:** Zouquan Chen; Yifei Yang; Lidong Zheng; Zhiming Fang; Yuchen Zheng

**ID:** 154393 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DuuJjNysv1>) | [PDF](<https://openreview.net/pdf?id=DuuJjNysv1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154393>)

Federated Spiking Neural Networks \(FedSNNs\) provide an energy\-efficient and privacy\-preserving learning paradigm for edge intelligence\. However, their robustness under Non\-IID data is limited by a coupled failure mode: label shift distorts membrane potential distributions, drives neurons away from gradient\-sensitive regions, and further amplifies surrogate gradient errors, which destabilizes federated optimization\. To address this problem, this paper proposes Spatio\-Temporal Spiking Adaptive Thresholds \(ST\-SAT\), a framework that mitigates the coupling between label shift and surrogate gradient errors through coordinated neuron\-level adaptation and client\-\-server knowledge alignment\. At the neuron level, ST\-SAT introduces the Spatio\-Temporal Parametric Leaky Integrate\-and\-Fire \(ST\-PLIF\) neuron, which adaptively calibrates firing thresholds, membrane potentials, and decay dynamics to keep local neuronal responses within effective gradient regions\. At the collaborative interaction level, ST\-SAT adopts a Dual\-Scale Knowledge Distillation strategy that combines adaptive logit\-level distillation with feature\-level alignment of neuronal statistics, thereby reducing class distribution bias and improving knowledge consistency across heterogeneous clients\. Extensive experiments on three benchmark datasets show that ST\-SAT consistently improves both global model performance and client\-local performance, with particularly strong gains under severe label shift\. These results validate the effectiveness of the proposed framework for robust federated SNN learning\. The anonymous code link is https://anonymous\.4open\.science/r/ST\-SAT\-4771\.

## AudioSphere: Towards Self\-Supervised Spatial Audio Representation Models

**Authors:** Göksenin Yüksel; Marcel A\. J\. van Gerven; Kiki van der Heijden

**ID:** 151452 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aa8QwF7hqk>) | [PDF](<https://openreview.net/pdf?id=aa8QwF7hqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151452>)

Recent audio embedding models learn general\-purpose representations that transfer across clip\- and frame\-level tasks, yet they operate almost exclusively on single\-channel signals and are blind to spatial structure\. Spatial audio models capture that structure but rely on clip\-level supervision or contrastive objectives, yielding embeddings unsuitable for frame\-level tasks like sound event detection and localization \(SELD\)\. We argue this dichotomy is not fundamental: patch\-level spatial self\-supervision can jointly learn acoustic and spatial features at both temporal granularities\. We introduce AudioSphere, a multi\-channel masked autoencoder trained on Ambisonics recordings that reconstructs both spectral content and directional cues via a joint spatiotemporal masking strategy that masks both time\-frequency patches and intensity vectors\. AudioSphere supports frame\-level predictions while producing strong clip\-level representations via aggregation\. Alongside the model, we release RealSELD, a standardized benchmark for evaluating frozen backbones on real\-world multi\-channel SELD\. AudioSphere enables, for the first time, SELD with a frozen self\-supervised backbone, while matching or exceeding prior general\-purpose audio embedding models on the HEAR benchmark\.

## Saddle\-to\-Saddle Dynamics in Self\-Supervised Shortcut Learning

**Authors:** Juhwan Kim; yoonsoo nam; Sungyoon Lee

**ID:** 150687 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gFQwJ1LW7D>) | [PDF](<https://openreview.net/pdf?id=gFQwJ1LW7D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150687>)

_Abstract unavailable from the accessible public sources._

## TopoPrune: Robust Data Pruning via Unified Latent Space Topology

**Authors:** Arjun Roy; Prajna Malettira; Manish Nagaraj; Kaushik Roy

**ID:** 154394 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DulZFWkYOG>) | [PDF](<https://openreview.net/pdf?id=DulZFWkYOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154394>)

_Abstract unavailable from the accessible public sources._

## A Hierarchical Tokenization Framework for Voxel\-Level fMRI Representation Learning

**Authors:** Karan Singh; Yue Zhao; Mohammadhassan Abbasi; Ehsan Adeli

**ID:** 153906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hpd9Zg6RQs>) | [PDF](<https://openreview.net/pdf?id=Hpd9Zg6RQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153906>)

We introduce HBAR \(Hierarchical Brain Activity Representation\), a hierarchical tokenization framework for learning compact, multi\-scale representations of neuroimaging data\.HBAR organizes voxel\-level resting\-state fMRI into a hierarchy spanning sub\-parcel voxel groups, parcels, and large\-scale functional networks, enabling approximately 415x compression while preserving fine\-grained spatial information beyond conventional parcellation\. The framework supports fixed atlas\-based, fully learned, and softly prior\-guided hierarchies, allowing us to systematically study the role of structured priors in brain representation learning\. Evaluated on large\-scale fMRI data, HBAR substantially improves reconstruction over parcellation\-based and single\-scale tokenization baselines, while supporting downstream modeling of brain dynamics and demographic prediction tasks such as sex classification\. Across reconstruction and downstream evaluation, atlas\-guided hierarchies provide the strongest overall performance, suggesting that established functional atlases encode organizational structure that remains difficult to recover from reconstruction alone\. By combining voxel\-level fidelity, compact discrete tokens, and multiscale brain structure, HBAR offers a practical framework for representation learning in high\-dimensional neuroimaging data\.

## Exploiting Negative Multi\-Cluster Structure in Class\-Wise Embeddings for Weakly Supervised Multi\-Label Learning

**Authors:** Bo Han; Zhuoming Li; Yaxin Hou; Xiaoyu Wang; Hui LIU; Junhui Hou; Yuheng Jia

**ID:** 153676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jc0lO9zGdF>) | [PDF](<https://openreview.net/pdf?id=Jc0lO9zGdF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153676>)

Class\-wise embeddings provide an effective strategy for multi\-label learning \(MLL\) by capturing the distinct discriminative properties of each class\. However, existing methods based on class\-wise embeddings typically overlook the internal distribution of negative samples\. We uncover a pivotal phenomenon: negative instances in class\-wise spaces naturally organize into multiple semantically coherent sub\-clusters, a structure that persists across diverse modalities even under extreme label sparsity\. Leveraging this insight, we propose a Structure\-Aware Pseudo\-label mining framework for weakly supervised MLL \(SaPu\)\. The proposed framework mines positive pseudo\-labels by aggregating cluster\-level consistency across different class\-wise embeddings and identifies negative pseudo\-labels via neighborhood exclusion\. These high\-quality signals further guide class\-wise contrastive learning, establishing a self\-reinforcing loop that iteratively refines embeddings\. Extensive experiments on image, text and audio benchmarks validate that SaPu outperforms state\-of\-the\-art methods by an average of \*\*4\.46%\*\* in challenging single\-label supervision scenarios\. \*\*Code is available in the supplementary material\*\*\.

## Auditing Single\-Query Recoverability in Self\-Supervised Representations

**Authors:** Zirui Wang; Guangqiang He; PangWu; Peng Wang; Zhenfeng Li; Xianxiang Chen; Lidong Du; Zhen Fang

**ID:** 152886 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pera711ODe>) | [PDF](<https://openreview.net/pdf?id=Pera711ODe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152886>)

Modern transformation\-aware self\-supervised representations are routinely scored under protocols that grant the evaluator paired views, augmentation labels, or teacher anchors \-\-\- none of which the deployed predictor ever sees\. We audit the gap that opens once these privileges are removed and only a single query remains\. The finding is a systematic evaluation illusion: on 3DIEBench\-Honest, honest single\-query rotation errors are typically $2\{\-\}3\\times$ as large as native transformation scores, consistently across comparators and matched\-utility thresholds\. To make this gap measurable, we introduce a deployment\-honest evaluation contract specifying a one\-query test interface, matched semantic utility, a strongest\-eligible\-neighbor headline with tail summaries, and explicit privilege accounting\. Theory and experiments are in service of the contract: lower\-bound analysis grounds the contract at the interface level, while a positive control supplies a non\-vacuous upper certificate under declared privileges\. We exercise the contract on a generated law, on 3DIEBench\-Honest, and on PTB\-XL\. The operational conclusion is that native transformation\-aware success is not, on its own, a single\-query deployment certificate\.

## WaveGen: Truly End\-to\-End Waveform Generation via Internal Spectral Trajectory Learning

**Authors:** Sang\-Hoon Lee; Ha\-Yeong Choi

**ID:** 152293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9I8LBgt7t>) | [PDF](<https://openreview.net/pdf?id=U9I8LBgt7t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152293>)

This work proposes WaveGen, a fully end\-to\-end diffusion\-based text\-to\-waveform framework based on Spectral Forcing, which jointly learns an internal spectral trajectory and the target waveform trajectory within a single model, enabling direct end\-to\-end text\-to\-waveform generation\. Unlike recent TTS pipelines, WaveGen does not rely on separately trained or externally decoded intermediate representations, such as neural audio codecs, Mel\-spectrogram vocoders, or VAE\-based latent models\. In addition, WaveGen performs internal text\-speech alignment within a single model, eliminating the need for external alignment modules such as duration predictors\. To preserve a truly end\-to\-end formulation, our framework further avoids dependence on self\-supervised representations, such as BERT\-based text embeddings and Wav2Vec 2\.0\-based semantic representations, as well as semantic distillation methods for training optimization\. To achieve this, we carefully design Spectral Forcing, a model architecture with disentangled diffusion heads, and a training objective based on a multi\-scale spectral $v$\-loss\. We further validate the scalability of end\-to\-end TTS models by scaling the model size from 0\.1B to 0\.4B parameters\. With a single architecture, open\-source data, and one\-stage training without external modules, WaveGen demonstrates fully end\-to\-end waveform generation by achieving promising performance\. In particular, WaveGen achieves a WER of 1\.77, a SIM of 0\.63, and competitive MOS performance on the Seed\-en benchmark\.

## Training\-Free Entangler Selection for Quantum Neural Networks via Hilbert–Schmidt Geometry

**Authors:** WOO SEOB SIM; Yu R Park

**ID:** 149136 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=saIG4QRgnj>) | [PDF](<https://openreview.net/pdf?id=saIG4QRgnj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149136>)

_Abstract unavailable from the accessible public sources._

## Approaching Effective Merging in Model Embedding Space

**Authors:** Wei Chen; Zhenyuan Dong; Qiang Qiu

**ID:** 149693 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o8ovLEF82T>) | [PDF](<https://openreview.net/pdf?id=o8ovLEF82T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149693>)

_Abstract unavailable from the accessible public sources._

## FuncFormer: Circuit Representation Learning via the Flow of Functional Propagation

**Authors:** Yunjie Ji; Jie Wang; Zhihai Wang; Min Li; Junhua Huang; Zhihao Shi; Feng Wu; Mingxuan Yuan; Jianye Hao

**ID:** 155637 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=46NBp3fllK>) | [PDF](<https://openreview.net/pdf?id=46NBp3fllK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155637>)

_Abstract unavailable from the accessible public sources._

## Learning a Maximum Entropy Model for Visual Textures using Diffusion

**Authors:** Xinyuan Zhao; Eero Simoncelli

**ID:** 154116 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G8agvphCZJ>) | [PDF](<https://openreview.net/pdf?id=G8agvphCZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154116>)

Visual textures, defined as spatially homogeneous image regions  containing repeated elements \(e\.g\. a field of grass, the bark of a tree\), are ubiquitous in visual scenes and provide important cues for recognizing materials and objects\. Existing texture models extract essential statistics from a single texture image, and can then generate high\-quality samples that are visually similar to the original by matching these statistics\. However, their statistics are either hand\-designed or based on a network pretrained for another purpose \(e\.g\., object recognition\)\. Here, we develop the first principled method for unsupervised learning of a set of statistics that are used to constrain a maximum entropy probability model\. We leverage methods developed for generative diffusion models to derive training and sampling procedures, and compare these to the traditional method of sampling via matching the statistics\. Despite the compactness of our trained model \(512 statistics\), it generates texture images whose quality is as good or better than the current state\-of\-the\-art model \(\~177k statistics\)\. A more direct comparison of the two models, obtained by synthesizing images that are indistinguishable for one model but maximally different for the other, reveals their relative strengths and weaknesses\. Finally, we show that, unlike previous statistical texture models, a straight trajectory in the representation space of our model generates homogeneous texture samples that interpolate smoothly between the features of the two end points\.

## DAGA: Dynamic Attention\-Guided Adaptation for Self\-Supervised Vision Transformers

**Authors:** Tianjian Zhou; Jiang Jie; Yishan Li; Yifei Zhang

**ID:** 153686 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JYsS0zrDlk>) | [PDF](<https://openreview.net/pdf?id=JYsS0zrDlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153686>)

_Abstract unavailable from the accessible public sources._

## Omni\-Interactive Universal Embedder

**Authors:** Wei\-Yao Wang; Kazuya Tateishi; Shuyang Cui; christian simon; Takashi Shibuya; Shusuke Takahashi; Yuki Mitsufuji

**ID:** 155508 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=54DQalLSzW>) | [PDF](<https://openreview.net/pdf?id=54DQalLSzW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155508>)

_Abstract unavailable from the accessible public sources._

## When Integral Meets Decomposition: A Signal\-Level Self\-Supervised Feature Decompose Paradigm for Multi\-Modal Image Fusion

**Authors:** Zeyu Wang; Jiayu Wang; Haiyu Song; Haoran Duan

**ID:** 152371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZ8z0nYiR3>) | [PDF](<https://openreview.net/pdf?id=TZ8z0nYiR3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152371>)

Multimodal image fusion \(MMIF\) aims to integrate complementary information from different modalities into a high\-quality fused image and support downstream tasks\. Recently, feature decomposition has become an important paradigm by separating source images into common and modality\-specific unique features\. However, existing methods lack clear supervision because ground\-truth \(GT\) decomposition feature maps are unavailable\. They usually combine multiple image\-level metrics as losses, which are inherently incomplete and may conflict since each pixel couples attributes such as texture, edge, and contour\. To address this, we propose a 1D signal\-level self\-supervised feature decomposition paradigm\. Our core insight is to reformulate feature decomposition from unclear 2D image\-level supervision into an integral\-driven 1D signal\-level optimization problem\. This objective\-level reformulation uses the 1D signal form to compute the integral constraint\. The decomposer is optimized by the integral area between common and original signals, enabling more stable optimization with a clear optimization objective\. Our model follows a two\-stage SSL framework\. Stage I designs dual pretext tasks for integral\-driven decomposition at the signal level and structure\-preserving reconstruction at the image level\. Stage II fuses unique features and combines them with common features to reconstruct the fused image\. Experiments on representative MMIF tasks show state\-of\-the\-art\(SOTA\) performance\. Our code will publicly available\.

## MSC\-Mol: Modality\-Synergy Contrasting for Multimodal Molecular Representation Learning

**Authors:** Ziyu Fan; Enqi Dong; Yahan Li; Shuhong Liu; Zeyu Zhong; Yuanpeng Zhang; Qahtan A Aljnabi; Min Wu; Lei Deng

**ID:** 155160 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7pssHVuN6z>) | [PDF](<https://openreview.net/pdf?id=7pssHVuN6z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155160>)

Multimodal molecular representation learning plays a crucial role in drug discovery and molecular property prediction\. Existing cross\-modal alignment approaches primarily reinforce redundant information across modalities, often neglecting complementary synergistic signals critical for downstream tasks\. To address this limitation, we propose MSC\-Mol, a modality\-synergy contrastive pre\-training framework that encodes SMILES sequences, 2D molecular graphs, and 3D conformations into a unified fused representation, optimized via contrastive learning over augmented views\. By introducing challenging negatives, including single\-modality replacements and modality recombinations, MSC\-Mol encourages the model to capture fine\-grained cross\-modal correspondences beyond dominant\-modality shortcuts\. We further design probe tasks\-long\-range pharmacophore prediction, molecular property regression, and functional\-group combination classification\-to validate that MSC\-Mol preserves both modality\-specific and synergistic information\. Extensive experiments demonstrate that MSC\-Mol consistently outperforms existing 2D, 3D, and multimodal pre\-training methods on molecular property prediction, drug–target interaction\(DTI\) tasks, and probe evaluations, highlighting its effectiveness in capturing cross\-modal synergy and long\-range molecular dependencies\. The code is available at https://anonymous\.4open\.science/r/MSC\-Mol\-169D\.

## Extracting Governing Equations from Latent Dynamics via Multi\-View Contrastive Learning

**Authors:** Paolo Muratore; Mackenzie Mathis

**ID:** 155982 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1NoGYV3xUP>) | [PDF](<https://openreview.net/pdf?id=1NoGYV3xUP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155982>)

Identifying latent dynamical systems from noisy, high\-dimensional measurements is a central problem at the intersection of representation learning, system identification, and scientific discovery\. We present DYSCO, a multi\-view temporal contrastive learning algorithm that jointly recovers latent trajectories and the governing dynamics from such observations, by leveraging multiple independent noisy views of the same underlying process to disentangle signal from noise\. By parameterizing the dynamics in a structured functional basis, our framework further enables symbolic recovery of the governing equations within an affine gauge\. We offer theoretical guarantees for strong identification up to an affine indeterminacy, extending prior identifiability results to the realistic setting of noisy nonlinear observations\. Empirically, we demonstrate accurate recovery of both latent trajectories and flow fields across a diverse set of dynamical regimes \(e\.g, chaotic, oscillatory, and metastable\) under both Gaussian and Poisson observation noise, the latter being particularly relevant for neural recordings\.

## Learning Pareto Stationary Fronts via Single\-Pass Backpropagation

**Authors:** Elina Rojin Celik; Marcos M\. Raimundo; Isabel Valera

**ID:** 150498 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=heKXlAkgm2>) | [PDF](<https://openreview.net/pdf?id=heKXlAkgm2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150498>)

We propose MOSEL \(Multi\-Objective Stackelberg Efficient Learning\), a framework for a posteriori multi\-objective optimization \(MOO\) in deep neural networks that recovers a full front of Pareto stationary solutions at the computational cost of standard single\-objective training\. MOSEL reformulates the problem as a bilevel optimization problem that leverages network modularity to decouple representation learning from objective\-preference alignment\. Casting the bilevel problem as a Stackelberg game enables solving the original a posteriori MOO problem in a single forward–backward pass\.  As a result,MOSEL matches the time and memory efficiency of standard single\-objective training while enabling scalable Pareto stationary front learning\.  Empirically, MOSEL uncovers diverse and optimal Pareto frontiers in strongly conflicting settings \(e\.g\., fairness–accuracy\)\. Remarkably, even in weakly conflicting regimes such as multi\-task learning, it consistently converges to solutions closer to the utopia point, outperforming both standard single\-objective training and specialized multi\-task learning methods\.  These results highlight the broader potential of a posteriori MOO learning as a pathway to efficiently learn more diverse and robust representations, ultimately improving generalization\.

## Elastic Representations via Hyperbolic Geometry

**Authors:** Arjun Ramesh Kaushik; Rudrasis Chakraborty; Nalini Ratha; Venu Govindaraju

**ID:** 152639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RVWViB6PQ7>) | [PDF](<https://openreview.net/pdf?id=RVWViB6PQ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152639>)

Learned representations \(or embeddings\) are the foundation of modern machine learning systems, yet they are typically trained as fixed\-size embeddings, without accounting for varying downstream resource or task constraints\. Matryoshka Representation Learning \(MRL\) addresses this limitation by learning nested representations, but requires costly end\-to\-end retraining and does not support post hoc expansion, while Contrastive Sparse Representations \(CSR\) reduce training overhead via lightweight adaptors but operate at a 4x larger dimensionality\. Additionally, all prior works restrict their framework towards compression only\. In this work, we introduce \\textbf\{H\}yperbolic \\textbf\{E\}lastic \\textbf\{R\}epresentation \\textbf\{L\}earning \(HERL\), a framework for learning dimension\-adaptive embeddings \(compression and expansion\) through a lightweight adaptor without retraining the base encoder\. Our key idea is to exploit the exponential capacity of hyperbolic geometry by learning a non\-linear mapping from the encoder space to hyperbolic space\. We train a simple MLP to downsample the representations before projecting them onto a Lorentzian and learn adaptive representations that respect the Lorentzian geometry\. Our approach is model\-agnostic and effective in both supervised and unsupervised settings\. Through extensive experiments across image and text modalities, we show that HERL preserves downstream performance across a wide range of embedding sizes, exhibits smooth interpolation between dimensions, and achieves these benefits at a fraction of the computational cost\.

## VIPBench: A Human\-Aligned Benchmark for Voice Identity Perception in the Age of Voice Cloning

**Authors:** Xudong Tang; Matthew Groh

**ID:** 139249 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cHQRKyboN9>) | [PDF](<https://openreview.net/pdf?id=cHQRKyboN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139249>)

Speaker identification benchmarks evaluate how accurately a model can predict a ground\-truth speaker label for a given utterance, treating voice identity as a property of the recording's producer\. However, these benchmarks do not test whether a model aligns with human perception of voice identity\. Whether a human would hear two voices and interpret them as the same speaker or not has consequences for intellectual property rights, cybersecurity, and everyday life\. We make two contributions\. First, we introduce the Voice Identity Perception benchmark \(VIPBench\), built from the identity judgments of English\-speaking crowdworkers on stratified celebrity voice pairs\. VIPBench consists of 124,876 same/different identity judgments from 1,290 participants on 9,800 voice pairs across 100 speakers, spanning real recordings, AI voice clones generated by a state\-of\-the\-art Text\-to\-Speech \(TTS\) system, and continuously morphed voices\. Our second contribution is to define four evaluation tasks: predicting the listener same\-speaker agreement rate; binary same/different classification against the majority listener vote, evaluated for both ranking and calibration; alignment between the model's and listeners' speaker\-similarity structures; and whether a predictor fit on real speech still works on voice clones and morphs\. We report baselines for ten publicly available speech representations\. We find that the perception target re\-orders model rankings relative to metadata: supervised embeddings \(trained on metadata speaker labels\) still outperform self\-supervised models \(which learn voice structure without identity supervision\), and no model reaches the noise ceiling\. VIPBench enables systematic evaluation of speaker representations against human voice\-identity perception across real, cloned, and morphed speech, motivating speaker models trained on perceptual judgments directly\.

## Intrinsic Riemannian Cross\-covariance for Manifold\-valued Random Objects

**Authors:** Carlos Soto; Cheng Wang; Yujing Huang; Xiaoyu Chen

**ID:** 148988 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=teJdXSWBH8>) | [PDF](<https://openreview.net/pdf?id=teJdXSWBH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148988>)

Covariance estimation yields a fundamental second\-order statistic underlying representation learning, dimension reduction, and dependence modeling\. While covariance has been well understood in Euclidean spaces, it is ill\-defined for random objects residing on nonlinear Riemannian manifolds, which increasingly arise in modern machine learning applications involving shapes, symmetric positive definite \(SPD\) matrices, etc\.      This paper introduces an intrinsic Riemannian cross\-covariance for manifold\-valued random objects\. Our approach defines covariance and correlation by transporting local variations to a common tangent space via parallel transport, yielding a second\-order descriptor that is independent of arbitrary coordinate choices\. We establish that the proposed covariance inherits desirable properties of its Euclidean counterparts and characterize its asymptotic behavior\.     Numerical studies on spheres and SPD manifolds, together with real\-data experiments on heart valve shapes in Kendall's shape space, demonstrate the effectiveness and verify the properties\. Our results position Riemannian covariance as a fundamental tool for second\-order learning and analysis in non\-Euclidean representation spaces\.

## Control First, Robustness Next: Decoupled Representation Learning for Visual RL Generalization

**Authors:** heo chanyong; Hyelyn Jeong; Jongchan Park; Seungjun Oh; Yusung Kim

**ID:** 155463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5QHgjQxxKM>) | [PDF](<https://openreview.net/pdf?id=5QHgjQxxKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155463>)

Visual reinforcement learning \(RL\) is promising for real\-world problems such as autonomous driving, robotic locomotion, and manipulation, but remains highly vulnerable to visual distribution shifts between training and deployment\. Existing methods improve robustness through Q\-consistency regularization, masking, and auxiliary objectives, yet most of them follow a coupled representation learning paradigm in which control\-oriented and robustness\-oriented representation learning are jointly optimized within the same training framework\. We argue that this coupled structure can introduce harmful interference between control learning and robustness learning, degrading original\-environment control performance and limiting generalization under visual shifts\. To address this issue, we propose Separate Then Align Representations \(STAR\), which reformulates visual RL generalization as a problem of decoupled representation learning\. Specifically, we first learn a control\-relevant reference representation through online RL under weak augmentation, and then perform an offline post\-representation alignment stage that maps strongly augmented inputs back to this reference representation\. Experiments on RL\-ViGen benchmarks spanning DMControl and Robosuite show that STAR achieves strong generalization under visual distribution shifts while better preserving performance in the original environment than prior coupled approaches\. Our source codes are available in the supplementary material\.

## Uncertainty\-Aware Probabilistic Constrained Clustering from Entangled Pairwise Supervision

**Authors:** Shaojie Zhang; Ke Chen

**ID:** 154307 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EgwTOkzegp>) | [PDF](<https://openreview.net/pdf?id=EgwTOkzegp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154307>)

Pairwise constrained clustering typically relies on hard must\-link/cannot\-link labels, whereas realistic pairwise supervision may be real\-valued and entangle intrinsic ambiguity, expert judgment, and stochastic corruption\. Existing deep constrained clustering \(DCC\) methods mainly target hard, expert\-agnostic constraints, treating soft labels mostly numerically rather than semantically\. We formalize this setting as uncertainty\-aware probabilistic constrained clustering \(UPCC\), defining a canonical aleatoric target through a heterogeneous observation process and analyzing its conditional identifiability\. We introduce ProbPair, an angular pairwise objective for probabilistic relations, and build ECI\-PP, an estimator\-\-corrector\-\-integrator framework that refines imperfect supervision via belief estimation, correction, and reliability\-aware integration\. Across challenging probabilistic supervision settings, experiments on diverse benchmarks show that ECI\-PP outperforms state\-of\-the\-art DCC methods and remains robust with a shared default configuration\.

## AutoManifold: Agentic Design of Data Visualisation Algorithms via Manifold Embedding

**Authors:** Burak Susam; ruiyuan kang; Tingting Mu

**ID:** 154589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CSer8vsuhS>) | [PDF](<https://openreview.net/pdf?id=CSer8vsuhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154589>)

Manifold embedding for data visualisation is dominated by a small set of hand\-designed state\-of\-the\-art \(SOTA\) algorithms\. Their design targets are fixed at development time,  resulting in inflexible algorithmic behaviour that cannot be readily steered toward user\-specified structural priorities\. Hand\-designing  new embedding algorithms to address user  priority requires highly specialised expertise and is time consuming\. To address autonomous algorithm design tailored to  user preference, we introduce an agentic algorithm generation pipeline AutoManifold\. It  composes  new manifold embedding algorithms from a constrained vocabulary of affinity, cost, and optimisation primitives, supported by multi\-agent large\-language\-model \(LLM\) orchestration\. AutoManifold  conditions every stage of its design on user\-specified structural preservation preferences, and iteratively refines the algorithm configuration through an LLM\-guided, metric\-grounded iterative loop\. We compare the generated algorithms  against   three strongest and most frequently used SOTA \(t\-SNE, UMAP, and PaCMAP\)  on real\-world datasets spanning different difficulty regimes  under identical evaluation infrastructure\. The results demonstrate that LLM\-driven, priority\-conditioned algorithm synthesis can move beyond hyperparameter tuning, producing genuinely new  algorithms  that outperform traditional hand\-designed methods, in their ability to steer towards user\-specified properties without compromising much   inherent   structure in the original data\.

## Topology\-Aware Representation Alignment for Semi\-Supervised Vision\-Language Learning

**Authors:** Junwon You; Mihyun Jang; Sangwoo Mo; Jae\-Hun Jung

**ID:** 153660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JgmIV10Z6r>) | [PDF](<https://openreview.net/pdf?id=JgmIV10Z6r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153660>)

Vision\-language models have shown strong performance, but they often generalize poorly to specialized domains\.  While semi\-supervised vision\-language learning mitigates this limitation by leveraging a small set of labeled image\-text pairs together with abundant unlabeled images, existing methods remain fundamentally pairwise and fail to model the global structure of multimodal representation manifolds\. Existing topology\-based alignment methods rely on persistence diagram matching, which neither guarantees geometric alignment nor utilizes the image\-text pairing information central to vision\-language learning\. We propose Topology\-Aware Multimodal Representation Alignment \(ToMA\), a framework that uses persistent homology to identify topologically salient edges and aligns them across modalities through available cross\-modal correspondences\.  ToMA leverages both $H\_0$\-death edges and lightweight $H\_1$\-birth edges, allowing it to capture both connectivity and cycle structure without constructing 2\-simplices\.  Experiments show that ToMA yields stable gains, with clear improvements on remote sensing and modest but consistent benefits on fashion retrieval\. Additional analysis shows that ToMA is more stable than alternative topology\-based objectives and that lightweight $H\_1$\-birth edges provide useful higher\-order structural signals\.

## Tune\-Up Open\-Weight CLIP: Optimization Framework for Self\-Supervised Fine\-tuning of CLIP

**Authors:** Anant Mehta; Xiyuan Wei; Xingyu Chen; Tianbao Yang

**ID:** 154261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6LR7aEwxS>) | [PDF](<https://openreview.net/pdf?id=F6LR7aEwxS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154261>)

CLIP has become a cornerstone of multimodal representation learning, yet improving its performance typically requires a prohibitively costly process of training from scratch on billions of samples\. We ask a different question: \*Can we improve the performance of open\-weight CLIP models across various downstream tasks using only existing self\-supervised datasets?\* Unlike supervised fine\-tuning, which adapts a pretrained model to a single downstream task, our setting seeks to improve general performance across various tasks\.  However, as both our experiments and prior studies reveal, simply applying standard training protocols starting from an open\-weight CLIP model often fails, leading to performance degradation\.  In this paper, we introduce \*\*TuneCLIP\*\*, a self\-supervised fine\-tuning framework that overcomes the performance degradation\. TuneCLIP has two key components: \(1\) a warm\-up stage of recovering optimization statistics to reduce cold\-start bias, inspired by theoretical analysis, and \(2\) a fine\-tuning stage of optimizing a new contrastive loss to mitigate the penalization on false negative pairs\. Our extensive experiments show that TuneCLIP consistently improves performance across model architectures and scales\. Notably, it elevates leading open\-weight models like SigLIP \(ViT\-B/16\), achieving gains of up to \+2\.5% on ImageNet and related out\-of\-distribution benchmarks, and \+1\.2% on the highly competitive DataComp benchmark, setting a new strong baseline for efficient post\-pretraining adaptation\.

## Context\-Aware Generative Imputation for Robust Multimodal Learning in Missing Modality Scenarios

**Authors:** Jungwon Choi; Juho Lee

**ID:** 151257 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bk4w1XMdSu>) | [PDF](<https://openreview.net/pdf?id=bk4w1XMdSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151257>)

Multimodal models deployed in real\-world settings often suffer from missing data modalities due to acquisition costs, privacy constraints, or sensor failures, leading to severe performance degradation\. Existing approaches based on shared representations or expert routing struggle when modality\-specific information is absent\. A key challenge is that, when a modality is unobserved, the target representation is not uniquely identifiable, making naive latent prediction prone to degenerate or collapsed solutions\. We propose Cross\-modal Embedding Prediction and Alignment \(CEPA\), a framework that addresses missing modalities through task\-driven latent representation imputation rather than raw input synthesis\. CEPA employs masked representation learning with data\-driven masking patterns and a context\-conditional distribution alignment objective that stabilizes latent prediction and prevents representation collapse\. We evaluate CEPA on the MIMIC multimodal benchmark spanning EHR time\-series, chest X\-rays, and clinical notes, across three clinical prediction tasks under both controlled \(MCAR\) and naturally occurring \(MNAR\) modality absence\. CEPA consistently outperforms prior missing\-modality methods, with ablations confirming the contribution of adaptive masking and context\-conditional alignment\.

## Generate in Reconstruction Space, Match in Semantic Space: Transport Geometry for One\-Step Generation

**Authors:** Hugues Van Assel; Edward De Brouwer; Saeed Saremi; Gabriele Scalia; Aviv Regev

**ID:** 150849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=etwEuQt1jd>) | [PDF](<https://openreview.net/pdf?id=etwEuQt1jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150849>)

Generative modeling and self\-supervised representation learning \(SSL\) optimize structurally different objectives: generative training rewards distributional fidelity, while SSL rewards semantic coherence\.  Yet recent work repeatedly finds that SSL features improve generative training, though the mechanism of this synergy remains unclear\. Here, we study the benefits of SSL in generative modeling in the framework of one\-step generation where the role of representation is explicit: frozen SSL features are used to match generated samples to real data\.  We use the Sinkhorn divergence in that feature space, providing a tractable surrogate for the Wasserstein distance, the population\-level discrepancy approximated by Fr\\'echet\-style evaluation metrics \(such as FID\)\. We find that this objective becomes highly effective when computed in a semantically structured SSL feature space \(a 39$\\times$ reduction in ImageNet FID\)\.  We trace this behavior primarily to matching estimation: semantic SSL features that suppress nuisance reconstruction details induce a more compact geometry, making distribution matching more tractable\. As a consequence, the best training SSL features need not match the features used by the evaluation metric\. In particular, we show that using Inception as the feature extractor can improve FID while degrading matching stability and sample quality, revealing a form of metric hacking\. Using extensive experiments on ImageNet, we identify which SSL feature families lead to best generation performance and show that matching stability is a quantitative criterion for selecting them\.

## Contrast encodes inductive bias: separating slow noise from dynamics in predictive representation learning

**Authors:** Paarth Gulati; Ilya Nemenman

**ID:** 149353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhXEAOv8zQ>) | [PDF](<https://openreview.net/pdf?id=qhXEAOv8zQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149353>)

Self\-supervised methods that learn representations and predict dynamics fully in the latent space, such as JEPA, have been shown to confuse slowly varying noise with the dynamical signals they aim to capture\. Specifically, when noise features remain approximately constant within each trajectory, contrastive predictive objectives preferentially encode these features instead of the true latent variables governing the system\. The learned representation then becomes dominated by trajectory\-specific noise, so downstream performance degrades with noise strength and does not improve even as the number and duration of training trajectories increase\. We argue that this failure is a property of the objective itself, shared by a long line of contrastive predictive objectives that sample negatives across trajectories\. To illustrate this generality, we study the failure mode and its remedy in two settings: a standard SimCLR\-style JEPA on a synthetic moving\-dot dataset, and DySIB, a recently introduced method designed for extracting physically interpretable representations of dynamics, on movies of a rigid\-body pendulum\. When negatives are instead sampled within a single trajectory, the slow noise can no longer distinguish frames within that trajectory, removing the predictive shortcut\. Training one encoder simultaneously on many such trajectories then forces it to encode the variables relevant for the dynamics, with longer trajectories yielding better representations even for strong slow noise\. Our results point toward principles for designing contrastive predictive objectives in dynamical representation learning, especially for physical systems with noisy experimental observations\.

## Factorized Self\-Supervised Speech Tokenization

**Authors:** Benjamin Van Niekerk; Jean\-Philippe Letendre; Nicol Visser; Hugo Seuté; Herman Kamper; Mirco Ravanelli

**ID:** 149827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n0PEFDbLxC>) | [PDF](<https://openreview.net/pdf?id=n0PEFDbLxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149827>)

Speech tokenizers convert audio into discrete units, enabling language models to process and generate speech\. The goal is to learn compact, text\-like representations while preserving enough detail to reconstruct a speaker’s voice and delivery\.  We propose Facto: a factorized tokenizer that disentangles time\-varying information \(content and prosody\) from static components \(speaker identity and recording conditions\)\. We build on a recent linear factorization method for self\-supervised features, extending it to handle unseen speakers\.  Then, we cluster the factorized space and train a lightweight decoder to reconstruct audio from the resulting tokens\.  By removing the static components before clustering, our tokens are more robust to small noise perturbations\.  We validate this by testing token stability under various noise conditions\. Next, we theoretically analyze Facto's convergence and scaling properties, quantifying how the factorization improves with the number of training speakers\.  Finally, we evaluate Facto on a range of downstream tasks\. We show that greater token stability translates into improved text\-to\-speech performance and competitive results in voice conversion and spoken language modeling\.

## Environment\-Robust Representation Learning with Empirical Bayes

**Authors:** Yuli Slavutsky; Matthew Shen; Bohan Wu; David Blei

**ID:** 151010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dcFIgr2nN2>) | [PDF](<https://openreview.net/pdf?id=dcFIgr2nN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151010>)

We consider multi\-environment prediction problems\. We assume the environments change the distribution of a latent variable, while the mechanisms generating observed covariates and targets remain stable conditional on that variable\. For example, hospitals or clinical cohorts may differ in the prevalence of latent patient states, even though the relationships between those states, physiological measurements, and outcomes remain unchanged\.  Given a dataset from multiple environments, we formulate a Bayesian model for such problems and derive the corresponding variational objective\. We show that this objective decomposes into per\-environment terms and an additional cross\-environment balancing term induced by the model's structure\. We use an empirical Bayes method to set the prior and incorporate it into the objective\. Based on this objective, we develop an amortized variational algorithm for posterior approximation, and use the resulting learned latent variables to form predictions in new environments\. We study our approach through simulations and real\-world studies of astronomical source identification, microbiome\-based disease detection, and ICU sepsis prediction\. Across these settings, our method outperforms previous approaches for prediction in new environments\.

## Microstructure Descriptor Fields as Supervision for Scientific Images

**Authors:** Mohamed Wahib; Du Wu; Cong Ma; Isaac Lyngaas; Xiao Wang; Enzhi Zhang; Peng Chen; Satoshi Matsuoka

**ID:** 149911 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mHVHXzcbr7>) | [PDF](<https://openreview.net/pdf?id=mHVHXzcbr7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149911>)

Scientific images are often governed less by exact pixel fidelity than by preservation of microstructure: morphology, connectivity, anisotropy, interface complexity, phase organization, and characteristic length scales\. Yet modern image\-learning objectives, including masked image modeling and reconstruction losses, supervise models in pixel, token, or latent feature space rather than in the space of scientific observables\. We introduce MICROFIELD, a supervision framework that represents a scientific image by a field of microstructure descriptors computed over spatial regions\. A descriptor field can be induced on a uniform grid, a quadtree, an octree, a learned partition, or a hierarchy produced by a high\-resolution image model\. Rather than proposing a new masked autoencoder architecture, MICROFIELD contributes an objective\-level mechanism: it trains models to preserve local descriptors, cross\-scale descriptor transitions, and level\-wise descriptor distributions\. Because descriptor fields are defined over region systems rather than model architectures, MICROFIELD applies to uniform grids, adaptive partitions, and hierarchical models alike\. The framework is compatible with self\-supervised pretraining, supervised learning, and reconstruction; in this paper, we focus on masked self\-supervised pretraining as the primary instantiation\. MICROFIELD provides a practical path toward physics\-inspired representation learning for scientific images without requiring explicit governing equations or domain labels\.

## Diversity Curves for Graph Representation Learning

**Authors:** Katharina Limbeck; Nadja Häusermann; Martin Carrasco; Guy Wolf; Bastian Rieck

**ID:** 154536 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CrzgnsQq7F>) | [PDF](<https://openreview.net/pdf?id=CrzgnsQq7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154536>)

Graph\-level representations are crucial tools for characterising structural differences between graphs\. However, comparing graphs with different cardinalities, even when sampled from the same underlying distribution, remains challenging\. Unsupervised tasks in particular require interpretable, scalable, and reliable size\-aware graph representations\. Our work addresses these issues by tracking the structural diversity of a graph across coarsening levels\. The resulting graph embeddings, which we denote \*diversity curves\*, are interpretable by construction, efficient, and directly comparable across coarsening hierarchies\. Specifically, we track the \*spread\* of graphs, a novel isometry invariant that is inherently well\-suited for encoding the metric diversity and geometry of graphs\. We utilise edge contraction coarsening and prove that this improves expressivity, thus leading to more powerful graph\-level representations than structural descriptors alone\. Demonstrating their utility over a range of baseline methods in practice, we use \*diversity curves\* to \(i\) cluster and visualise simulated graphs across varying sizes, \(ii\) distinguish the geometry of single\-cell graphs, \(iii\) compare the structure of molecular graph datasets, and \(iv\) characterise geometric shapes\.

## How Do Language Models Compose Functions?

**Authors:** Apoorv Khandelwal; Ellie Pavlick

**ID:** 150331 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iuShT9gVLr>) | [PDF](<https://openreview.net/pdf?id=iuShT9gVLr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150331>)

While large language models \(LLMs\) appear to be increasingly capable of solving compositional tasks, it is an open question whether they do so using compositional mechanisms\. In this work, we investigate how feedforward LLMs solve two\-hop factual recall tasks, which can be expressed compositionally as $g\(f\(x\)\)$\. We first confirm that modern LLMs continue to suffer from the "compositionality gap", i\.e\. their ability to compute both $z = f\(x\)$ and $y = g\(z\)$ does not entail their ability to compute the composition $y = g\(f\(x\)\)$\. We then decode residual stream representations and identify two processing mechanisms: one which solves tasks \*compositionally\*, computing $f\(x\)$ along the way to $g\(f\(x\)\)$, and one which solves them \*directly\*, without any detectable signature of the intermediate variable $f\(x\)$\. Finally, we find that embedding space geometry is strongly related to which mechanism is employed, where the idiomatic mechanism is dominant when tasks are represented by translations from $x$ to $g\(f\(x\)\)$ in the embedding spaces\.

## Geometry\-Aware Self\-Supervised Electrophysiology Representation Learning

**Authors:** Subhrajit Dey; Ping\-Jung Lu; Visweswar Parupudi; Malhar Patel; Margaret\-Estefani Conde Paredes; Mihály Vöröslakos; Anna Maslarova; Gyorgy Buzsaki; Saurabh Vyas; Erdem Varol

**ID:** 150561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEiyAXz4A8>) | [PDF](<https://openreview.net/pdf?id=hEiyAXz4A8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150561>)

Precise localization of recording electrodes is fundamental to systems neuroscience; yet, current methods depend on labor\-intensive post\-hoc histology, which is incompatible with real\-time feedback or chronic implants\. We test the hypothesis that the electrical signals being recorded themselves carry sufficient anatomical information to localize their recording site in 3D atlas coordinates, without the need for histology\. To probe this, we introduce a self\-supervised framework that learns geometry\-aware representations of single\-channel local field potentials \(LFP\), leveraging probe channel geometry as a self\-supervisory signal\. We compare speech\-based SSL objectives \(e\.g\., masked prediction\) against geometry\-aware objectives that constrain the embedding space to mirror physical channel layout along the probe\. These representations outperform masked\-prediction baselines, and the gains compound at larger data scales\. We test downstream analysis with 3D coordinate regression and brain region classification, benchmarking three SSL backbones \(Wav2Vec 2\.0, Whisper, and Data2Vec\) against supervised baselines \(AnyNet, ViT, and classical spectral classifiers\) across datasets, laboratories, species, and probe technologies\. Our method achieves state\-of\-the\-art results in brain region classification and 3D coordinate regression from raw single\-channel LFP, outperforming all baselines, affirming our hypothesis\.

## Debiasing Random Oblique Projections for Subsampled OLS and Fast CUR in High Dimensions

**Authors:** Chengmei Niu; Sachin Garg; Michal Derezinski; Zhenyu Liao

**ID:** 149261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rdmZzxYKam>) | [PDF](<https://openreview.net/pdf?id=rdmZzxYKam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149261>)

Random sampling is a fundamental tool in modern machine learning and numerical linear algebra for reducing the computational cost of large\-scale matrix problems\. Existing analyses, however, rely primarily on subspace embedding guarantees, which do \*not\* precisely characterize the statistical bias of \*nonlinear\* random oblique projections induced by sampling, which arises ubiquitously in subsampled least squares and fast low\-rank approximation methods\. Because \(pseudo\)inversion is \*nonlinear\*, these random oblique projections can be systematically \*biased\* even when the underlying sketch is unbiased, thereby introducing hidden bias into downstream least squares and low\-rank approximation solutions\.  In this work, we develop a unified non\-asymptotic theory for random oblique projections in high dimensions\. We show that standard random sampling schemes generally induce a systematic statistical \*bias\* overlooked by classical subspace embedding\-style analyses, and we propose a principled debiasing framework to correct it\. We illustrate the power of the theory through two canonical applications\.  For subsampled least squares, we obtain sharp bias\-\-variance characterizations, reveal previously unrecognized statistical \*suboptimality\* in widely used sampling schemes, and identify when debiasing yields provable improvements\.  For fast CUR decomposition, we develop a debiased approach with improved approximation accuracy\.  Numerical experiments further validate our theoretical findings\.

## DeGlare: Self\-Supervised Specular Removal for Industrial Metallic Surfaces via Multi\-Illumination Priors

**Authors:** Bisma Amjad; Henry Wood; William Jacobs; Andrew Mills

**ID:** 153930 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HZaT8wSiXs>) | [PDF](<https://openreview.net/pdf?id=HZaT8wSiXs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153930>)

In industrial machine vision, removing specular highlights is crucial for accurate surface analysis; however, existing open research remains largely confined to natural images, limiting its efficacy on highly reflective metallic surfaces\. When used for zero\-shot inference, these methods generate artifacts, making them unreliable for specialized industrial scenes\. Since current state\-of\-the\-art methods rely on pixel\-level supervision, adapting them to novel industrial subjects is often impractical\. Such adaptation requires highlight\-free ground truths across hundreds of multi\-view scenes, necessitating hardware\-intensive cross\-polarization, which is difficult to implement at scale in uncontrolled real\-world settings\. To address these challenges, we propose DeGlare, a flexible training framework for highlight removal in specialized industrial settings\. Our approach leverages only a single\-view scene by exploiting its multi\-illumination observations together with a latent permutation strategy, enabling an encoder\-decoder–style architecture to implicitly learn diffuse–specular decomposition\. This eliminates the dependency on the burdensome manual annotation required by state\-of\-the\-art supervised methods\. We demonstrate the practical effectiveness of our approach on a real\-world industrial robotic rig data set, where DeGlare achieves promising performance under limited data and annotation constraints\.

## Inertia\-1: An Open Exploration of Wearable Motion Foundation Models

**Authors:** Zongzhe Xu; Aakarsh Anand; Sarah Jiang; Chuntung Zhuang; Zitao Shuai; Sriram Sankararaman; Yuzhe Yang

**ID:** 153477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L4whvxozBR>) | [PDF](<https://openreview.net/pdf?id=L4whvxozBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153477>)

Wearable motion sensing provides a continuous and scalable window into human behavior and health, making it a natural fit for foundation models, yet its pretraining and scaling principles remain poorly understood\. Prior work studies isolated design choices, such as sensor placement or sampling frequency, often under fixed settings and narrow downstream tasks that fail to capture real\-world sensing diversity\. We introduce Inertia\-1, a fully open exploration of wearable motion foundation models\. Using massive corpora of accelerometer data from global sources spanning more than 18\.2M hours, we build a controlled framework for studying the full lifecycle of wearable motion foundation models, covering data choices such as sensor modality, device placement, sampling rate, window length; model choices such as architectures and model size; and training choices such as pretraining objective and data scale\. Extensive evaluations across 15 datasets spanning human activity recognition, freezing\-of\-gait detection, and disease prediction reveal intriguing findings for building motion foundation models that generalize across tasks and sensing conditions\. Collectively, Inertia\-1 not only presents state\-of\-the\-art recipes for diverse downstream tasks, but also serves as a comprehensive, practical, and open cookbook for wearable motion representation learning\.

## Inertia\-1: An Open Exploration of Wearable Motion Foundation Models

**Authors:** Zongzhe Xu; Aakarsh Anand; Sarah Jiang; Chuntung Zhuang; Zitao Shuai; Sriram Sankararaman; Yuzhe Yang

**ID:** 153477\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153477

[Paper](<https://openreview.net/forum?id=L4whvxozBR>) | [PDF](<https://openreview.net/pdf?id=L4whvxozBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153477>)

Wearable motion sensing provides a continuous and scalable window into human behavior and health, making it a natural fit for foundation models, yet its pretraining and scaling principles remain poorly understood\. Prior work studies isolated design choices, such as sensor placement or sampling frequency, often under fixed settings and narrow downstream tasks that fail to capture real\-world sensing diversity\. We introduce Inertia\-1, a fully open exploration of wearable motion foundation models\. Using massive corpora of accelerometer data from global sources spanning more than 18\.2M hours, we build a controlled framework for studying the full lifecycle of wearable motion foundation models, covering data choices such as sensor modality, device placement, sampling rate, window length; model choices such as architectures and model size; and training choices such as pretraining objective and data scale\. Extensive evaluations across 15 datasets spanning human activity recognition, freezing\-of\-gait detection, and disease prediction reveal intriguing findings for building motion foundation models that generalize across tasks and sensing conditions\. Collectively, Inertia\-1 not only presents state\-of\-the\-art recipes for diverse downstream tasks, but also serves as a comprehensive, practical, and open cookbook for wearable motion representation learning\.

## GeoPMR: Preserving Relational and Hierarchical Geometry in Multimodal Molecular Representation Learning

**Authors:** Lusheng Li; Menglin Yang

**ID:** 152380\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152380

[Paper](<https://openreview.net/forum?id=TWQ5xdccxN>) | [PDF](<https://openreview.net/pdf?id=TWQ5xdccxN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152380>)

Multimodal molecular representation learning aligns heterogeneous chemical and cellular signals to predict molecular properties\. The dominant paradigm is instance\-level contrastive alignment, such as InfoNCE and VICReg, which implicitly treats every modality as a point cloud in a shared Euclidean space\. This paradigm overlooks two structural properties of molecular\-cellular data\. \\textit\{First\}, each modality, from atomic fingerprints to cell morphology to transcriptomic response, carries its own intrinsic geometry; directly pulling individual embeddings together can distort the relational structure each modality has learned to express\. \\textit\{Second\}, the modalities form a directed biological cascade, from molecular structure to conformation, gene perturbation, cellular phenotype, and transcriptomic response, whose branching grows exponentially with depth, a regime that Euclidean spaces cannot embed without distortion\. We therefore propose \\textbf\{GeoPMR\}, a pre\-training framework that addresses both properties through two complementary geometric modules: Metric\-Guided Gromov\-Wasserstein alignment \(MGW\) and a Hyperbolic Hierarchical Module \(HHM\)\. \\textbf\{MGW\} equips each modality with a learnable diagonal Riemannian metric and aligns distance matrices rather than individual embeddings via entropic optimal transport, so cross\-modal alignment preserves relational rather than merely pointwise structure\. \\textbf\{HHM\} lifts all modality latents onto the Poincaré ball and applies a probabilistic parent\-child and sibling contrastive loss along the cascade, exploiting the exponential volume growth of negatively curved space to embed the hierarchy with low distortion\. On seven molecular property prediction benchmarks spanning toxicity, bioactivity, and ADME, GeoPMR sets a new state of the art by improving the classification AUC by 1\.4\\% and regression MAE by 1\.7\\%\.

## Where to Look Matters: Rethinking Sub\-Volume Sampling in 3D Medical Self\-supervised Learning

**Authors:** Junkai Liu; Le Zhang

**ID:** 150657\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150657

[Paper](<https://openreview.net/forum?id=gPf82LsVMO>) | [PDF](<https://openreview.net/pdf?id=gPf82LsVMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150657>)

Self\-supervised learning on 3D medical images commonly relies on random sub\-volume sampling during pretraining\. However, random cropping implicitly treats all spatial regions as equally worth observing, despite anatomical priors and spatial redundancy that make regions inherently unequal in their value for representation learning\. To this end, we first show through controlled crop\-quality manipulations that better sub\-volumes lead to better downstream transfer, revealing the observation policy as an overlooked bottleneck in 3D medical SSL\. Motivated by this finding, we revisit sub\-volume sampling as a where\-to\-look problem\. We propose VolumeProbe, a plug\-and\-play framework that replaces random cropping with an offline coarse\-to\-fine probe bank guided by anatomy\-awareness, informativeness, and diversity\. We instantiate VolumeProbe as a lightweight Lite variant using geometric and image\-statistical cues, and a diagnostic Feat variant using frozen visual features, to examine whether lightweight volume\-intrinsic priors suffice or richer semantic cues reliably provide additional value\. Extensive experiments across multiple 3D medical SSL backbones and downstream tasks demonstrate that VolumeProbe\-Lite consistently improves transfer performance over random sampling\. Mechanistic analyses further attribute these gains to more anatomically plausible and informative observations, reduced spatial redundancy, more efficient learning dynamics, and more structured representations\.

## Not All Instances Should Contribute Equally: Sparse Support Grounding via Unbalanced Transport for Heterogeneous MIL

**Authors:** Hojoon Kim; Beomgu Kang; Hyunseok Seo

**ID:** 150282\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150282

[Paper](<https://openreview.net/forum?id=jJwpGhP4Qj>) | [PDF](<https://openreview.net/pdf?id=jJwpGhP4Qj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150282>)

Multiple instance learning \(MIL\) learns from bag\-level labels, but a bag’s label is often supported by only a few hidden instances\. In heterogeneous bags, these useful instances are rare, diverse, and surrounded by many weak or noisy observations\. We propose Sparse Support Grounding, a MIL framework that learns instance influence directly\. The key idea is simple: an instance should not matter just because it can be matched somewhere; it should matter when the match provides reliable label evidence\. Our method forms a compact, bag\-specific evidence support, compares instances with label\-consistent supports, and uses unbalanced transport to estimate how much source mass each instance should retain\. This retained mass becomes the strength of its grounding signal, so reliable evidence shapes training more than nuisance content, while the bag classifier still uses the full bag\. Thus, transport is turned from a matching rule into a way of learning which instances should drive supervision\. Experiments on synthetic MIL, whole\-slide images, and clinical endomicroscopy show consistent gains, with the largest improvements when sparse diagnostic evidence is embedded in heterogeneous nuisance content\.

## Anchor PCA

**Authors:** Benedikt Seiter; Anya Fries; Julius von Kügelgen; Jonas Peters

**ID:** 153959\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153959

[Paper](<https://openreview.net/forum?id=HFtvKUB8yF>) | [PDF](<https://openreview.net/pdf?id=HFtvKUB8yF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153959>)

Principal component analysis \(PCA\) is one of the most widely used unsupervised dimension reduction techniques\. We study PCA for data from multiple related domains\. Since principal components generally differ across domains, one way to obtain a shared low\-rank embedding is to perform PCA on the pooled data\. However, this approach can focus on spurious directions that exhibit high variation in only a few domains\. To find a robust embedding that still explains most variance in unseen but similar domains, we propose instead to focus on shared directions of variation\. To this end, we introduce Anchor PCA which trades off overall explained variance with agreement between the shared and domain\-specific low\-rank embeddings\. Anchor PCA amounts to PCA on a modified target matrix and thus can be solved efficiently\. Moreover, we show that Anchor PCA recovers a maximal invariant subspace and admits a minimax reconstruction interpretation under bounded domain\-specific covariance inflations\. On simulated and real\-world gas sensor data with temporal drift, we demonstrate, respectively, that Anchor PCA recovers the maximally invariant subspace and yields embeddings that explain more variance on unseen domains than the pooling baseline and a worst\-case alternative\. Taken together, these findings establish Anchor PCA as a promising approach to robust unsupervised dimension reduction from multi\-domain data\.

## GaitLingo: Self\-Supervised Gait Representation Learning with Language Priors

**Authors:** Chenye Wang; Zhengxiang Lan; Saihui Hou; Zhikang Liu; Xingqun Qi; Sirui Han; Yongzhen Huang

**ID:** 150408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iGvBtSYHHN>) | [PDF](<https://openreview.net/pdf?id=iGvBtSYHHN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150408>)

Self\-supervised gait representation learning aims to learn transferable representations that generalize to unseen scenarios\. However, existing methods rely solely on visual self\-supervision, making it difficult to assess the semantic value of individual unlabeled sequences and limiting their ability to exploit latent semantic cues\. To address this limitation, we introduce language priors into self\-supervised gait pretraining\. We construct GaitLP\-1M, a million\-scale silhouette\-based gait pretraining dataset without identity labels\. A two\-stage caption generation pipeline further produces gait descriptions from the corresponding RGB sequences\. To the best of our knowledge, GaitLP\-1M is the first million\-scale silhouette gait dataset paired with gait\-centric captions\. Building on this foundation, we propose GaitLingo, a language\-guided self\-supervised framework for gait representation learning\. Specifically, we design a Caption\-Guided Sample Weighting \(CSW\) mechanism to prioritize informative samples based on sequence\-level semantic richness and attribute rarity\. We then introduce a lightweight Temporal Adapter \(TA\) to better capture motion semantics and improve cross\-domain robustness\. Finally, we propose Soft Relation Distillation \(SRD\) to transfer caption\-derived relational structures into the visual embedding space\. Extensive experiments demonstrate that GaitLingo consistently outperforms prior self\-supervised gait pretraining methods in the zero\-shot setting across six benchmarks\. Compared with GaitSSB, it achieves Rank\-1 gains of \+12\.1% on Gait3D and \+7\.9% on GREW, as well as an average improvement of \+9\.1% across four CCPG settings\.

## Rank\-Transformed Dissimilarity Profiles for High\-Dimensional Classification

**Authors:** Xiangbo Mo; Hao Chen

**ID:** 151307 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bRnA8Byvs0>) | [PDF](<https://openreview.net/pdf?id=bRnA8Byvs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151307>)

Despite advances in representation learning, high\-dimensional classification remains challenging in low\-sample\-size regimes, where the dominant signal may vary across applications and labeled data are often limited\. We propose a dissimilarity\-profiling classification framework that represents each observation by its class\-wise dissimilarity profile,  transforming the original feature space into a low\-dimensional representation that summarizes how the observation relates to each class\. The key idea is to turn a consequence of the curse of dimensionality into signal: high\-dimensional geometry can induce systematic within\-class and between\-class dissimilarity patterns under location, scale, or other distributional changes, and these patterns are captured by the class\-wise profiles\. Building on this representation, we introduce a rank\-transformed algorithm that converts dissimilarities into class\-wise rank profiles, yielding a compact representation for classification\. The proposed method delivers competitive or improved performance relative to commonly used classifiers on two\-class, multi\-class, network, and real high\-dimensional low\-sample\-size datasets\. To provide insight into the mechanism underlying the method, we analyze a distance\-based surrogate and show that the resulting profiles encode differences in first, second, and higher\-order moments, while the rank transformation improves robustness to outliers\. Together, these results show that rank\-transformed dissimilarity profiles provide an adaptive representation for high\-dimensional classification when the signal structure is unknown\.

## LoRAcles: Self\-Supervised Weight\-Space Interpretability at Scale

**Authors:** Celeste De Schamphelaere; Jan Bauer; Neel Nanda; Euan Ong

**ID:** 154333 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EOoc3j4hW8>) | [PDF](<https://openreview.net/pdf?id=EOoc3j4hW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154333>)

Fine\-tuned LLMs can learn complex and subtle behaviors\. However, it can be difficult to ascertain what behaviors the model acquired during fine\-tuning\. We introduce LoRAcles: fine\-tuned language models that take LoRA adapter weights as input, and answer natural language questions about them\. We introduce a self\-supervised pipeline for training LoRAcles: we first train LoRAs on small sets of pre\-training documents, and then train LoRAcles on these LoRAs to answer questions about the documents\. LoRAcles generalize far beyond their training data: they are state\-of\-the\-art on AuditBench, a benchmark of models with sophisticated hidden behaviors; they can detect subtle changes in model organisms \(fine\-tunes deliberately constructed to encode a hidden behavior for auditing research\), such as subliminal learning; and they are the first tool to achieve non\-trivial performance at verbalizing semantic backdoor triggers\.  LoRAcles can also describe some learned behaviors from the weights of a full\-parameter fine\-tune\.  LoRAcles are a highly scalable method: we train LoRAcles for Qwen\-3\-14B and Llama\-3\.3\-70B, and observe that performance scales smoothly with the size of our training dataset up to 100K LoRAs, though our method may need refinement in order to scale further\.  We note, though, that LoRAcles are prone to hallucinations and currently only elicit the most salient behavioral changes, limiting their utility beyond narrow fine\-tunes\.

## Causal Representation Learning for Generalisable Recommendation

**Authors:** Yorgos Felekis; Michael O&amp;amp;\#x27;Riordan; Oriol Corcoll Andreu; Ciarán Gilligan\-Lee

**ID:** 148867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ub2HuIm8hN>) | [PDF](<https://openreview.net/pdf?id=ub2HuIm8hN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148867>)

Predictive models trained on observational data often fail to generalise to the distributions they encounter when deployed, especially when the training data is a product of the system being optimised\. Recommender systems are a canonical example: they are trained on interaction logs confounded by the deployed policy, past user behaviour, and platform filtering\. As a result, the training distribution differs substantially from the candidate distribution scored at serving time, a gap that makes offline metrics unreliable predictors of online performance\. We address the distribution shift problem with a method motivated by causal representation learning \(CRL\)\. We propose an information\-theoretic disentanglement criterion and prove that its optimum depends only on the causal components of the input\. We then derive a tractable variational lower bound that makes the criterion optimisable from finite observational data alone\. The scope of our method is narrower than that of much of the CRL literature, in that we target better generalisation under distribution shift, not full identification of all latent causal factors\. This narrower target is what makes the method practical, requiring only the existing confounded logs, applying to any standard supervised model, and adding no inference\-time cost\. Our headline evaluation is an A/B test with millions of users on a music streaming platform, applied to a production ranker for personalised playlist generation\. A CRL variant matched in capacity to the production baseline performed on par offline but delivered substantial online gains in listener engagement\. Complementary evidence on the public KuaiRand recommendation dataset and a synthetic benchmark with known causal structure shows the same pattern: offline parity with baseline, gains under distribution shift\. Across all three settings, adding our causal disentanglement objective yields meaningfully better out\-of\-distribution generalisation\.

## Emergence of a Shared Canonical Object Frame from In\-the\-Wild Videos

**Authors:** Tom Fischer; Martin Sundermeyer; Adam Kortylewski; Eddy Ilg

**ID:** 149226 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzUWi6tqwc>) | [PDF](<https://openreview.net/pdf?id=rzUWi6tqwc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149226>)

Comparing object orientations and positions across different instances requires their poses to be expressed in a shared canonical frame\.  Establishing such frames has traditionally required manual annotation, creating a scaling bottleneck that limits category and instance diversity\. We show that a shared canonical frame can instead emerge from self\-supervised training on object\-centric videos captured in the wild, using only noisy camera poses from Structure\-from\-Motion\. Our key idea is to route all training sequences through a shared geometric bottleneck: a coarse canonical mesh that carries no category\-specific detail\. By learning dense correspondences from image pixels to this mesh, and estimating per\-sequence alignments from noisy SfM geometry, a common canonical frame emerges from multi\-view consistency and the semantic priors of the feature extractor, without any canonical pose labels or category conditioning\. Trained in a self\-supervised manner on $160\{,\}000$ in\-the\-wild object videos, our method achieves competitive accuracy on category\-level pose estimation benchmarks compared to methods that rely on canonical pose supervision\.

## Constrained Graph Clustering: A Spectral Algorithm with Generalized Eigenvectors

**Authors:** Shihong Song; He Sun

**ID:** 151463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aSBc9QvaeR>) | [PDF](<https://openreview.net/pdf?id=aSBc9QvaeR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151463>)

Given a must\-link graph $G = \(V, E\_G\)$ and a cannot\-link graph $H=\(V,E\_H\)$ as input, the objective of constrained clustering is to partition   $V$ into $k$ parts while minimizing the maximum cut ratio between $G$ and $H$\. In this paper we design and analyze a variant of the spectral clustering algorithm using the $k$ smallest generalized eigenvectors as the embedding space\. We prove that our proposed  algorithm achieves an $O\(1\)$\-approximation of the optimal cut\-ratio under a natural assumption on the input graphs\. We further study the case in which  the cannot\-link constraints might not be available, and   develop an iterative  pipeline that repeatedly applies the output of  spectral clustering or constrained clustering to generate  new   constraints, thereby progressively improving cluster quality\.  We experimentally compare our proposed algorithm with the previous state\-of\-the\-art, and demonstrate the  superior  performance of our algorithms on both synthetic and real\-world datasets\.

## Binding Multiple Modalities via Multimodal Wasserstein Barycenter

**Authors:** Xiaole Tang; Jiayi Xu; Xiang Gu; Yan Yang; Jian Sun

**ID:** 149098 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=swVrjlNX4Q>) | [PDF](<https://openreview.net/pdf?id=swVrjlNX4Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149098>)

Multimodal learning beyond two modalities commonly leverages a specific modality  \(e\.g\., text\) to bind other modalities\. However, how to establish a more balanced representation space that approximates shared semantics while respecting the holistic geometry of $n$\-modal data remains challenging\. In this work, we present BaryBind, which aims to transport the specific modality towards the Wasserstein barycenter \(WB\) optimized across all modalities and introduces a volumetric alignment objective to establish a unified semantic space around the WB embedding\. Specifically, we project specific modalities to the WB, which minimizes the average Wasserstein distances to multimodal distributions and serves as the anchor for subsequent alignment\. We then construct a barycenter simplex, whose volume is taken as a similarity metric for global alignment centered at the WB\.  Extensive experiments show that BaryBind achieves competitive performance in text\-video\-audio retrieval, classification, videoQA, and cross\-modal generation tasks, along with robustness under modality absence and scalability to more than three modalities\.

## Driver Attention as Competitive Allocation: A Scene\-\-Task\-Aware Dual\-Branch Framework

**Authors:** Qianfang Wang; Bin Rao; Pengpeng Xu; Tiantian Chen

**ID:** 153047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPzgHGek3V>) | [PDF](<https://openreview.net/pdf?id=OPzgHGek3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153047>)

Driver attention prediction is crucial for interpretable driver monitoring and human\-like autonomous driving\. Existing methods typically formulate this task as a scene\-to\-heatmap regression problem, failing to reveal the underlying dynamic attention redistribution mechanism\. To address this issue, we propose a scene\-task\-aware competitive allocation framework, which decomposes driver attention as a bottom\-up visual saliency prior and a top\-down scene\-task utility representation\. An adaptive product\-of\-experts allocation rule is designed to fuse these two heterogeneous branches in a competitive manner, where scene\-task demand dynamically modulates the dependence on top\-down task utility, and driving control urgency adjusts spatial attention concentration via a learnable attention budget temperature\. To explicitly differentiate task\-critical regions from visually prominent yet task\-irrelevant distractors, we incorporate competition\-aware contrastive learning to enhance feature discrimination in the latent space\. Extensive experiments demonstrate that our method achieves strong and balanced performance, with a Kullback–Leibler divergence of 0\.98 and a normalized scanpath saliency of 4\.15 on the DR\(eye\)VE dataset, as well as a Pearson’s correlation coefficient of 0\.67 and a histogram similarity of 0\.54 on the BDD\-A dataset\. Ablation studies and diagnostic analyses further validate that our framework yields interpretable attention allocation behaviors, including urgency\-induced spatial entropy contraction and scene\-task\-demand\-guided dynamic attention reallocation\.

## Adaptive Feature Propagation for Attribute\-Missing Graph Clustering

**Authors:** Xiang Long; QIANQIAN WANG

**ID:** 153408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LZKrYTeRWx>) | [PDF](<https://openreview.net/pdf?id=LZKrYTeRWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153408>)

Attribute\-Missing Graph Clustering \(AMGC\) is a critical yet challenging task in real\-world applications, in which only a subset of nodes hold complete attributes information while others are partially missing\. Though existing feature propagation\-based methods can effectively recover missing node attributes, they commonly assume uniform contributions across all nodes, ignoring unreliable nodes that may degrade imputation quality\. Furthermore, adopting low\-pass graph filters often suffers from the over\-smoothing problem and inevitably sacrifices discriminative information\. %Besides, traditional contrastive learning pulls all the node embeddings evenly, which might conflict with the rule that intra\-cluster nodes should be closer to each other\.  To address these limitations, we propose \\underline\{\\textbf\{A\}\}daptive \\underline\{\\textbf\{F\}\}eature \\underline\{\\textbf\{P\}\}ropagation \(AFP\) for attribute\-missing graph clustering\. Specifically, we first design a reliability\-aware feature propagation mechanism that adaptively weights edges based on node importance\. Then, we introduce a multi\-scale embedding module to capture both local and global structural information\. Finally, we develop a topology\-aware contrastive loss to enhance clustering consistency\. Extensive experiments on benchmark datasets demonstrate the superiority of our method\.

## Beyond Generation: Unlocking Discriminative Representations from Diffusion Models

**Authors:** Haowen Cui; Ge Wu; Shuo Chen; Yikai Ge; Ge Gao; Xiang Li; Jun Li; Jian Yang

**ID:** 150350 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=in565dKueK>) | [PDF](<https://openreview.net/pdf?id=in565dKueK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150350>)

_Abstract unavailable from the accessible public sources._

## RAPTOR: Ridge\-Adaptive Logistic Probes

**Authors:** Ziqi Gao; Yaotian Zhu; Qingcheng Zeng; Xu Zhao; Ziqing Wang; Feng Ruan; Kaize Ding

**ID:** 152988 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OpxC93zuD0>) | [PDF](<https://openreview.net/pdf?id=OpxC93zuD0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152988>)

_Abstract unavailable from the accessible public sources._

## A World Model of Radiologist Reading for Medical Image Representation Learning

**Authors:** Yiwei Li; Zihao Wu; huaqin zhao; Yifan Zhou; Chao Cao; Dajiang Zhu; Tianming Liu; Lin Zhao

**ID:** 154476 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DJzM2q9amM>) | [PDF](<https://openreview.net/pdf?id=DJzM2q9amM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154476>)

Radiologist eye\-tracking data provide a rich record of how experts search, compare, and accumulate evidence during image reading, yet existing methods exploit this signal only partially, either as a static spatial prior or as an auxiliary prediction target decoupled from diagnosis\. We propose GazeWorld, a medical imaging world model that treats the image as the world and the radiologist's fixation sequence as a trajectory through it\. GazeWorld autoregressively predicts the latent representation of the next fixated patch from all previously visited ones, while a spatial\-completion branch covers unvisited regions\. At inference, GazeWorld generates a sequence of patch representations from the image alone without requiring real gaze data\. Frozen GazeWorld features achieve state\-of\-the\-art diagnostic accuracy across all nine supervised settings on CheXpert, RSNA Pneumonia, and SIIM\-ACR Pneumothorax, as well as the highest zero\-shot accuracy on all three benchmarks\. On the GazeSearch benchmark, a generic decoder trained on the same frozen features outperforms the purpose\-built LogitGaze\-Med by over 16\\% in ScanMatch and 22\\% in SED, despite not being explicitly trained to predict gaze\. GazeWorld demonstrates that modeling how experts read, not just what they conclude, offers a promising pretraining paradigm for medical imaging AI\.

## OHATP: Graph Anomaly Detection with Orthogonal\-Hyperspherical Augmentation and Topology Perception

**Authors:** yihang qiu; Yi Zhang; Di Xiong; Ge Gao; Shuo Chen

**ID:** 155542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4mRMtwcvXD>) | [PDF](<https://openreview.net/pdf?id=4mRMtwcvXD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155542>)

Contrastive Learning \(CL\) has been widely used for Graph Anomaly Detection \(GAD\)\. However, existing augmentation techniques in such CL frameworks usually rely on random masking or structural alterations, which obliterates the irregularities that define anomalies and leads to \*anomaly distortion\*\. Even improved methods using \*multi\-scale sampling\* usually suffer from \*blind contextual extraction\*, which risks disrupting critical topological structures or introducing irrelevant information in the learned representations, thereby hardly capturing complex anomalies\. In this paper, we propose Orthogonal\-Hyperspherical Augmentation and Topology Perception \(\*\*OHATP\*\*\), a novel method that leverages the synergies at both the \*feature\* and \*structure\* levels to mitigate anomaly distortion and \*blind sampling defects\*\. Specifically, during \*feature\-level\* augmentation, we adapt projections and noise based on node \*message\-passing\* influence to strengthen \*feature diversity\*, while utilizing projection orthogonality and hyperspherical noise constraints to preserve \*feature discriminability\*\. To complement this feature\-level augmentation, we design a \*structure\-level\* topology perception module that leverages the high\-quality representations learned from augmentation to screen abnormal dense substructures\. Extensive experiments on benchmark datasets demonstrate that OHATP substantially outperforms state\-of\-the\-art methods, achieving improvements of over 6\\% in AUROC and 29\\% in AUPRC\. Code is available at \[https://anonymous\.4open\.science/r/OHATP\-83D7\]\(https://anonymous\.4open\.science/r/OHATP\-83D7\)\.

## Clustering with Weak Distance Oracles

**Authors:** Aryan Esmailpour; Rahul Raychaudhury; Sainyam Galhotra; Stavros Sintos

**ID:** 155449 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5W2OIUKFcN>) | [PDF](<https://openreview.net/pdf?id=5W2OIUKFcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155449>)

Clustering is a fundamental task in unsupervised learning, serving as a core tool for data mining and exploratory data analysis\. Classical $k$\-clustering objectives such as $k$\-median and $k$\-means formalize this task, but typically assume access to exact pairwise distances\. This assumption is increasingly unrealistic in modern applications where distances are estimated through proxy embedding models, learned similarity functions, human feedback, or other low\-cost procedures that may be noisy\. We study $k$\-clustering in an unknown metric space where the algorithm has access only to a weak distance oracle: for each pair of objects, the oracle returns the true distance with probability of $1/2\+\\varepsilon$ , where $\\varepsilon$ is a constant, and otherwise may return an arbitrary corrupted value\.   We present randomized algorithms that, given a metric space with $n$ vertices and a parameter $k$, use only weak distance\-oracle queries to compute a set of representative centers together with a mapping from every input object to one of these centers, such that the total mapping cost is within a constant factor of the optimal $k$\-clustering cost\. Our first algorithm returns $O\(k\\cdot\\mathsf\{polylog\}\(n\)\)$ centers using $O\(n\\cdot k\\cdot \\mathsf\{polylog\}\(n\)\)$ weak\-oracle queries and runs in quasi\-polynomial time\. We also give a polynomial\-time algorithm that returns $O\(k^2\\cdot\\mathsf\{polylog\}\(n\)\)$ centers using $O\(n\\cdot k\\cdot \\mathsf\{polylog\}\(n\)\)$ weak\-oracle queries\. Preliminary experiments for $k$\-means clustering show that our approach remains close to the optimum under substantial oracle noise, while noise\-oblivious baselines degrade sharply\.

## Platonic Task Arithmetic

**Authors:** Junghwan Park; Woojin Cho

**ID:** 155058 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8mxuyjOsQd>) | [PDF](<https://openreview.net/pdf?id=8mxuyjOsQd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155058>)

When distinct pre\-trained models are specialized for the same task, they often converge to nearly equivalent functional behaviors, while the underlying parameter\-space changes share no common coordinate system\. Existing approaches that compose such changes arithmetically are therefore confined to a single model, leaving task knowledge stranded inside the network that acquired it\. Drawing on Plato's allegory of the cave, we hypothesize that these model\-specific updates are shadows cast by a shared, model\-agnostic object that governs how task specialization reshapes a model's behavior, and we refer to this object as the platonic task vector\. To make this view operational, we introduce Universal Task Descriptors, matrices whose shape is fixed independently of architecture or embedding dimension and that capture a task's functional effect in a model\-transferable form\. Universal Task Descriptors admit addition, negation, and analogy in closed form, and a lightweight realization step then transfers any composed descriptor into a chosen target model\. Experiments across a range of models and tasks indicate that this pipeline transfers and composes task knowledge across heterogeneous models\.

## Disentangled Representation Learning via Flow Matching

**Authors:** Jinjin Chi; Taoping Liu; Mengtao Yin; Ximing Li; Yongcheng Jing; Jialie Shen; Leszek Rutkowski; Dacheng Tao

**ID:** 151286 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bXNMPTOJ05>) | [PDF](<https://openreview.net/pdf?id=bXNMPTOJ05>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151286>)

Disentangled representation learning aims to capture the underlying explanatory factors of observed data, enabling a principled understanding of the data\-generating process\. Recent advances in generative modeling have introduced new paradigms for learning such representations\. However, existing diffusion\-based methods encourage factor independence via inductive biases, yet frequently lack strong semantic alignment\. In this work, we propose a flow\-matching–based framework for disentangled representation learning, which casts disentanglement as learning factor\-conditioned flows in a compact latent space\. To enforce explicit semantic alignment, we introduce a non\-overlap \(orthogonality\) regularizer that suppresses cross\-factor interference and reduces information leakage between factors\. Extensive experiments across multiple datasets demonstrate consistent improvements over representative baselines, yielding higher disentanglement scores as well as improved controllability and sample fidelity\.

## MinSteer: Minimal\-Pair Steering via Two\-Stage Cached Continuation

**Authors:** Muxuan Liu; Tatsuya Ishigaki; Yusuke Miyao; Hiroya Takamura; Ichiro Kobayashi

**ID:** 152253 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UQiPTFT8T4>) | [PDF](<https://openreview.net/pdf?id=UQiPTFT8T4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152253>)

Do behavioral styles in large language models correspond to reusable directions in residual space, or do they mainly appear after averaging many noisy contrastive examples? We introduce MinSteer, a two\-stage cached\-continuation method for estimating a contrastive residual direction \(CRD\) within one decoding trajectory\. Stage\-X generates a continuation in one style; a style\-flip suffix is then processed using Stage\-X's final KV cache; Stage\-Y continues from this inherited trajectory\. The CRD is computed from generated\-token residuals only, excluding prompt and suffix tokens from the average\. Across sentiment transfer, politeness control, and a ParaDetox\-based bidirectional diagnostic, MinSteer extracts effective steering directions from very small contrasts\. On TweetEval sentiment transfer, one MinSteer contrast outperforms a CAA baseline averaged over 50 independent pairs\. Japanese keigo CRDs transfer to English and Chinese outputs and outperform trajectory\-free TwoSeq controls\. In ParaDetox, MinSteer produces bidirectional Detoxify movement under our rewrite setup, while exposing semantic\-preservation trade\-offs\. The directions transfer across tested scenarios and languages and show clear depth dependence\. Together, these results show that cached self\-rewrite trajectories provide a cleaner signal for residual\-space behavior directions than independent\-pair averaging\.

## Elastic Representations via Hyperbolic Geometry

**Authors:** Arjun Ramesh Kaushik; Rudrasis Chakraborty; Nalini Ratha; Venu Govindaraju

**ID:** 152639\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152639

[Paper](<https://openreview.net/forum?id=RVWViB6PQ7>) | [PDF](<https://openreview.net/pdf?id=RVWViB6PQ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152639>)

Learned representations \(or embeddings\) are the foundation of modern machine learning systems, yet they are typically trained as fixed\-size embeddings, without accounting for varying downstream resource or task constraints\. Matryoshka Representation Learning \(MRL\) addresses this limitation by learning nested representations, but requires costly end\-to\-end retraining and does not support post hoc expansion, while Contrastive Sparse Representations \(CSR\) reduce training overhead via lightweight adaptors but operate at a 4x larger dimensionality\. Additionally, all prior works restrict their framework towards compression only\. In this work, we introduce \\textbf\{H\}yperbolic \\textbf\{E\}lastic \\textbf\{R\}epresentation \\textbf\{L\}earning \(HERL\), a framework for learning dimension\-adaptive embeddings \(compression and expansion\) through a lightweight adaptor without retraining the base encoder\. Our key idea is to exploit the exponential capacity of hyperbolic geometry by learning a non\-linear mapping from the encoder space to hyperbolic space\. We train a simple MLP to downsample the representations before projecting them onto a Lorentzian and learn adaptive representations that respect the Lorentzian geometry\. Our approach is model\-agnostic and effective in both supervised and unsupervised settings\. Through extensive experiments across image and text modalities, we show that HERL preserves downstream performance across a wide range of embedding sizes, exhibits smooth interpolation between dimensions, and achieves these benefits at a fraction of the computational cost\.

## VIPBench: A Human\-Aligned Benchmark for Voice Identity Perception in the Age of Voice Cloning

**Authors:** Xudong Tang; Matthew Groh

**ID:** 139249\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139249

[Paper](<https://openreview.net/forum?id=cHQRKyboN9>) | [PDF](<https://openreview.net/pdf?id=cHQRKyboN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139249>)

Speaker identification benchmarks evaluate how accurately a model can predict a ground\-truth speaker label for a given utterance, treating voice identity as a property of the recording's producer\. However, these benchmarks do not test whether a model aligns with human perception of voice identity\. Whether a human would hear two voices and interpret them as the same speaker or not has consequences for intellectual property rights, cybersecurity, and everyday life\. We make two contributions\. First, we introduce the Voice Identity Perception benchmark \(VIPBench\), built from the identity judgments of English\-speaking crowdworkers on stratified celebrity voice pairs\. VIPBench consists of 124,876 same/different identity judgments from 1,290 participants on 9,800 voice pairs across 100 speakers, spanning real recordings, AI voice clones generated by a state\-of\-the\-art Text\-to\-Speech \(TTS\) system, and continuously morphed voices\. Our second contribution is to define four evaluation tasks: predicting the listener same\-speaker agreement rate; binary same/different classification against the majority listener vote, evaluated for both ranking and calibration; alignment between the model's and listeners' speaker\-similarity structures; and whether a predictor fit on real speech still works on voice clones and morphs\. We report baselines for ten publicly available speech representations\. We find that the perception target re\-orders model rankings relative to metadata: supervised embeddings \(trained on metadata speaker labels\) still outperform self\-supervised models \(which learn voice structure without identity supervision\), and no model reaches the noise ceiling\. VIPBench enables systematic evaluation of speaker representations against human voice\-identity perception across real, cloned, and morphed speech, motivating speaker models trained on perceptual judgments directly\.

## Intrinsic Riemannian Cross\-covariance for Manifold\-valued Random Objects

**Authors:** Carlos Soto; Cheng Wang; Yujing Huang; Xiaoyu Chen

**ID:** 148988\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148988

[Paper](<https://openreview.net/forum?id=teJdXSWBH8>) | [PDF](<https://openreview.net/pdf?id=teJdXSWBH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148988>)

Covariance estimation yields a fundamental second\-order statistic underlying representation learning, dimension reduction, and dependence modeling\. While covariance has been well understood in Euclidean spaces, it is ill\-defined for random objects residing on nonlinear Riemannian manifolds, which increasingly arise in modern machine learning applications involving shapes, symmetric positive definite \(SPD\) matrices, etc\.      This paper introduces an intrinsic Riemannian cross\-covariance for manifold\-valued random objects\. Our approach defines covariance and correlation by transporting local variations to a common tangent space via parallel transport, yielding a second\-order descriptor that is independent of arbitrary coordinate choices\. We establish that the proposed covariance inherits desirable properties of its Euclidean counterparts and characterize its asymptotic behavior\.     Numerical studies on spheres and SPD manifolds, together with real\-data experiments on heart valve shapes in Kendall's shape space, demonstrate the effectiveness and verify the properties\. Our results position Riemannian covariance as a fundamental tool for second\-order learning and analysis in non\-Euclidean representation spaces\.

## NeuralFieldManifold: Reconstruction of LFP manifold with Lag Embedding

**Authors:** Kasra Fallah; Haoyu N Chen; Rudramani Singha; Eunji Kong; Gergely Turi; Attila Losonczy; Erfan Zabeh

**ID:** 155903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1yPTCbmakU>) | [PDF](<https://openreview.net/pdf?id=1yPTCbmakU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155903>)

Local field potentials \(LFPs\) are population\-level neural signals central to brain\-computer interfaces and systems neuroscience, yet unlike spike\-based population codes, their dynamics lack a principled geometric description that connects spectral structure to latent state\-space geometry\. Here we establish, analytically and empirically, that the lag\-embedded dynamics of LFP signals lie on a low\-dimensional K\-torus, where K equals the number of sustained oscillatory modes present in the signal\. Modeling LFPs as bounded autoregressive processes, we show that each oscillatory component contributes an independent circular degree of freedom, while aperiodic 1/f structure and noise contribute only geometric thickness around the manifold without altering its topology\. To apply this theory to real nonstationary recordings, we introduce DeepLagField, a physics\-informed network that jointly estimates time\-varying AR structure and effective model order, with formal guarantees that local toroidal geometry is preserved despite drifting oscillatory dynamics\.We validate the predicted toroidal geometry using persistent homology across primate visual cortex LFP, rodent hippocampal LFP, and mouse cortical EEG recordings, confirming the expected Betti number signatures across species and recording modalities\. Critically, we demonstrate that this geometric structure is not merely descriptive but carries behaviorally relevant information inaccessible to standard spectral summaries — as evidenced by torus parameters derived purely from manifold geometry outperforming multi\-band spectral features for sleep\-state decoding without any hand\-crafted frequency design\. This proof of concept points toward broad downstream utility wherever oscillatory field signals are recorded, from neural decoding and brain\-state monitoring to clinical biomarker development\. These results reframe neural oscillations not as isolated spectral features but as coordinate directions of a low\-dimensional delay manifold, opening a geometry\-first approach to neural signal analysis that is simultaneously theoretically grounded, empirically validated across species, and predictive of behaviorally relevant brain states\.

## SAFE\-Hair: Scalp\-Anchored Fields for Exportable Single\-View Hair Reconstruction

**Authors:** Yucheng Wang; Zedong Wang; Yuetong Wu; Yue Ma; Dan Xu

**ID:** 152061 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VnduOOHC03>) | [PDF](<https://openreview.net/pdf?id=VnduOOHC03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152061>)

Single\-view 3D hair reconstruction has progressed rapidly, but many methods optimize for visual plausibility rather than producing strand assets that can be directly used in grooming, editing, or simulation pipelines\. We propose SAFE\-Hair, a framework that reconstructs explicit strand grooms from a single portrait by decoding hair from persistent follicles in a canonical scalp\-UV domain\. Given a fitted template head, SAFE\-Hair projects self\-supervised image features onto the scalp, uses a conditional Rectified Flow model to generate latent scalp fields, and decodes occupancy, segment directions, length allocation, and total length at a fixed set of scalp follicles\. This representation enforces scalp\-rooted strand identities by construction and enables direct export with follicle IDs and guide\-family metadata\. We further introduce attachment, collision, and bending priors to improve geometric validity without per\-subject test\-time optimization\. To evaluate both reconstruction fidelity and asset usability, we introduce HairBench\-3D, a benchmark built from public 3D hair assets with standardized alignment, rendering, resampling, and metrics for geometry, direction consistency, invisible\-region completion, silhouette agreement, and collision\. SAFE\-Hair improves Chamfer distance from 3\.74 mm to 3\.28 mm, F\-score from 77\.9 to 81\.7, invisible\-region F\-score from 66\.1 to 69\.8, and penetration ratio from 4\.8% to 3\.9% over the strongest baseline\.

## Uncertainty\-Aware Fuzzy Graph Contrastive Learning

**Authors:** Xinlan Xu; Fei Hao; Ce Yang; Jiaxing Shang; Jinsong Chen; Jianrui Chen; Hongying Zhang; Aziz Nasridinov

**ID:** 148584 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wgmbHWOgdy>) | [PDF](<https://openreview.net/pdf?id=wgmbHWOgdy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148584>)

Graph Contrastive Learning \(GCL\) is an effective approach for learning node representations\. However, the intrinsic uncertainty of real\-world graph data introduces significant challenges, as GCL relies on crisp deterministic representations that struggle to capture such ambiguity\. To model graph uncertainty, fuzzy logic has attracted increasing attention due to its mathematical rigor\. Existing methods, however, simply inject fuzzy modeling into the contrastive framework without tailoring data augmentation to the needs of fuzzy representations, resulting in limited discriminability and suboptimal downstream performance\. To address these limitations, we propose a novel Fuzzy Graph Contrastive Learning \(FGCL\) framework for uncertainty\-aware node representation learning\. It adopts a vertex entanglement\-based augmentation strategy to generate tailored multi\-views with controlled perturbations while preserving core graph topology and semantics, mitigating semantic corruption\. We also design a Deep Weighted Fuzzy Graph Convolutional Neural Network \(DWFGCNN\) encoder, which maps crisp features to fuzzy representations via learnable membership functions, explicitly models uncertainty, and resolves the core contradiction that traditional encoders cannot balance discriminability and robustness simultaneously\. Extensive experiments on multiple datasets demonstrate that FGCL consistently outperforms baselines in node classification, community detection, and link prediction tasks, validating its effectiveness in handling uncertainty in graph representation learning\.

## RVLoss: Runoff Vote Loss for Self\-Supervised LiDAR Scene Flow Estimation

**Authors:** Shiming Wang; Liangliang Nan; Julian Kooij; Holger Caesar; Yancong Lin

**ID:** 152605 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RsacOS2C69>) | [PDF](<https://openreview.net/pdf?id=RsacOS2C69>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152605>)

LiDAR scene flow estimates point\-wise motion between two consecutive scans, referred to as the source and target\.  Leading self\-supervised methods typically minimize the Chamfer loss, the nearest neighbor distance between the flow\-compensated source and the target\.  However, nearest\-neighbor search does not enforce motion rigidity, often leading to inconsistent flows within object instances\.  Existing approaches address this issue with additional regularization terms, but flow consistency among points remains limited, especially for large objects\. We propose RVLoss, a self\-supervised loss that incorporates motion rigidity by design, through a runoff vote mechanism\.  Our key observation is that the point\-wise motion, calculated from nearest neighbor search, can often be grouped into a small set of dominant flow candidates by voting \(top\-k voting\.  Furthermore, when compensating the source by these candidates, the flow that best represents the underlying rigid motion often yields the highest consensus after a second voting \(top\-1 voting\)\. Based on this insight, we incorporate the two\-stage runoff vote into loss design and create cluster\-wise rigid flows and subsequent free\-form flows as pseudo\-labels for self\-supervised learning\.  RVLoss can be seamlessly integrated into existing feedforward architectures\.  Experiments on the Argoverse2 2026 Challenge show that models trained with RVLoss achieve state\-of\-the\-art performance among self\-supervised approaches, outperforming baseline models trained with alternative loss designs by 20\\%\. Moreover, cross\-dataset evaluations demonstrate consistent performance improvements across four additional datasets\.  Code will be released upon acceptance\.

## Beyond Eigenfunctions: Divergence Principal Functions for Representation Learning

**Authors:** Ritabrata Ray; Sahil Dharod; Burak Varıcı; Nicholas Boffi; Pradeep Ravikumar

**ID:** 153338 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4JVbTCh2k>) | [PDF](<https://openreview.net/pdf?id=M4JVbTCh2k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153338>)

Recent work has shown that contrastive representation learning can be understood as estimating a positive\-pair, PMI\-like kernel, and that spectral factorization of this kernel yields useful eigenfunction representations\. This paper asks what happens beyond squared\-error spectral geometry\. Modern representation learning objectives are rarely pure $\\ell\_2$ kernel\-approximation objectives: they use conditional KL, InfoNCE, JS/NCE, Brier, Hellinger, least\-squares ratio fitting, and other statistical discrepancies\. We show that these discrepancies do not merely provide alternative estimators of the same affinity; they induce different local geometries for the extraction of low\-rank representations\. To formalize this, we introduce divergence principal functions, a geometry\-aware generalization of eigenfunctions\. Eigenfunctions are recovered as the special case corresponding to squared\-error geometry\. For smooth discrepancies, we show that divergence principal functions locally solve a weighted spectral approximation problem, with weights given by the curvature of the divergence at the target affinity\. This provides a loss\-consistent bridge from positive\-pair learning objectives to representation geometry and clarifies when spectral/eigenfunction representations are appropriate and when they are mismatched to the training objective\.

## Hitting Time Isomorphism for Multi\-Stage Planning with Foundation Policies

**Authors:** Magnus Victor Boock; Abdullah Akgül; Mustafa Mert Çelikok; Melih Kandemir

**ID:** 152292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9JnXUgBes>) | [PDF](<https://openreview.net/pdf?id=U9JnXUgBes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152292>)

We present a new operator\-theoretic representation learning framework for offline reinforcement learning that recovers the directed temporal geometry of a controlled Markov process from hitting time observations\. While prior art often produces symmetric distances or fails to satisfy the triangle inequality, our framework learns a Hilbert\-space displacement geometry where expected hitting times are realized as linear functionals of latent displacements\. We prove that this representation exists under latent linear closure and is uniquely identifiable up to a bounded linear isomorphism\. For finite\-dimensional implementations, we show that global hitting\-time error is bounded by one\-step transition error amplified by the environment's transient spectral radius\. Furthermore, we provide finite\-sample guarantees accounting for approximation, statistical complexity, and trajectory\-label mismatch\.  Derived from this theory, we curate Isomorphic Embedding Learning \(IEL\) as a new goal\-agnostic foundation policy learning algorithm that  anchors a HILP\-style consistency objective with explicit hitting\-time regression to ensure that the learned geometry reflects actual decision\-time progress\. This asymmetric and compositional structure enables robust graph\-based multi\-stage planning for long\-horizon navigation\. Our experiments  demonstrate that IEL improves the state of the art of learning foundation policy policies from offline maze locomotion data\.

## SurgVista: Long\-Horizon Surgical World Modeling with Plausible Instrument\-Tissue Dynamics

**Authors:** Wentao Pan; WUYANG LI; Shengyuan Liu; Xinyu Liu; Hengyu Liu; Yixuan Yuan

**ID:** 151752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YK5GDKKF4q>) | [PDF](<https://openreview.net/pdf?id=YK5GDKKF4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151752>)

Scaling robot policy learning for autonomous surgery is challenging, as expert demonstrations are expensive and in vivo exploration poses substantial safety risks\. Surgical world models address this by generating realistic, action\-conditioned future frames from an initial observation, but existing methods exhibit two persistent failure modes: \*spatial interaction incoherence\*, where visible instrument contact fails to induce spatially consistent tissue deformation, and \*temporal fidelity collapse\*, where prediction errors compound across autoregressive rollouts and progressively corrupt visual quality\. We present \*\*SurgVista\*\*, a surgical world model that mitigates both failures through two training recipes\. \*Deformation Consistency Regularization\* extracts scene\-point trajectories from training videos and enforces cross\-frame coherence through latent contrastive learning, strengthening physically consistent instrument\-tissue dynamics\. \*Drift Adaptation Training\* mitigates long\-horizon drift by perturbing conditioning frames with online prediction residuals and photometric augmentations calibrated to long\-horizon drift statistics, sustaining visual fidelity over extended rollouts\. To enable rigorous evaluation, we further introduce \*\*SurgWorld\-Bench\*\*, featuring diverse procedure types, long\-range rollouts, and decoupled metrics for instrument\-motion accuracy and tissue\-response fidelity\. Extensive experiments show that SurgVista consistently outperforms state\-of\-the\-art methods across visual quality, temporal consistency, and interaction fidelity, with gains widening as the prediction horizon grows\.

## ImmuVis: Hyperconvolutional Foundation Models for Imaging Mass Cytometry

**Authors:** Dawid Uchal; Marcin Możejko; Krzysztof Gogolewski; Piotr Kupidura; Fabian Ozga; Szymon Łukasik; Jakub Giezgała; Tomasz Nocoń; Kacper Pietrzyk; Robert Pieniuta; Mateusz Sulimowicz; Michał Zmysłowski; Michał Orzyłowski; Tomasz Siłkowski; Karol Zagródka; Eike Staub; Ewa Szczurek

**ID:** 152450 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2RPhW9u1M>) | [PDF](<https://openreview.net/pdf?id=T2RPhW9u1M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152450>)

We present ImmuVis, a family of efficient foundation models for imaging mass cytometry \(IMC\), a high\-throughput multiplex imaging technology that handles molecular marker measurements as image channels and enables large\-scale spatial tissue profiling\. Unlike natural images, multiplex imaging lacks a fixed channel space, as real\-world marker sets vary across studies, violating a core assumption of standard vision backbones\. To address this, ImmuVis introduces marker\-adaptive hyperconvolutions that generate convolutional kernels from learned marker embeddings, enabling a single model to operate on arbitrary measured marker subsets without retraining\. We pretrain ImmuVis on the largest IMC dataset to date, IMC17M \(28 cohorts, 24,405 images, 265 markers, over 17M patches\), using self\-supervised masked reconstruction\. ImmuVis outperforms state\-of\-the\-art baselines and ablations in virtual staining and downstream classification tasks at substantially lower compute cost than transformer\-based alternatives, and is the sole model that provides calibrated uncertainty via a heteroscedastic likelihood objective\. These results position ImmuVis as a practical framework for real\-world IMC modeling\.

## Memory\-Driven Contrastive Embedding Enhancement for Fine\-Grained Open\-Set Semi\-Supervised Learning

**Authors:** Yinan Han; Qing\-Yuan Jiang

**ID:** 153470 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L77YwOI7fI>) | [PDF](<https://openreview.net/pdf?id=L77YwOI7fI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153470>)

_Abstract unavailable from the accessible public sources._

## Breaking Noise Shortcuts in Self\-Supervised Learning via Noise\-Aligned View Generation

**Authors:** Oankar Patil; May Dongmei Wang

**ID:** 153415 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LVFnNTcwSo>) | [PDF](<https://openreview.net/pdf?id=LVFnNTcwSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153415>)

_Abstract unavailable from the accessible public sources._

## Unpaired Canonical Correlation Analysis

**Authors:** Nir Ben\-Ari; Ronen Talmon; Uri Shaham

**ID:** 149273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rYRi7zoSZK>) | [PDF](<https://openreview.net/pdf?id=rYRi7zoSZK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149273>)

Canonical Correlation Analysis \(CCA\) is a fundamental method for multiview shared space learning\. However, its strict reliance on paired data poses a significant limitation, as such data is often difficult to obtain or entirely unavailable\. In this paper, we present Unpaired CCA \(UCCA\), a novel method that learns linear projections to maximize the correlation of the true underlying pairing without access to any paired samples during training\. We first establish theoretical results connecting the Quadratic Assignment Problem \(QAP\) to CCA\. Leveraging these theoretical insights, we derive a practical method to maximize correlation exclusively from unpaired data\. To the best of our knowledge, UCCA is the first approach to learn maximally correlated projections in a strictly unpaired setting\. We validate UCCA on real\-world multi\-modal datasets, demonstrating that it significantly outperforms recent unpaired alignment baselines in recovering the underlying true correlation\. This work fills a critical gap between traditional statistical multiview learning and the growing field of unpaired data learning\.

## Invariant Features in Language Models: Geometric Characterization and Model Attribution

**Authors:** Agnibh Dasgupta; Abdullah All Tanvir; Xin Zhong

**ID:** 152361 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TdITA4NH7Z>) | [PDF](<https://openreview.net/pdf?id=TdITA4NH7Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152361>)

Language models exhibit strong robustness to paraphrasing, suggesting that semantic information may be encoded through stable internal representations, yet the structure and origin of such invariance remain unclear\. We propose a local geometric framework in which semantically equivalent inputs occupy structured regions in latent space, with paraphrastic variation along nuisance directions and semantic identity preserved in invariant subspaces\. Building on this view, we make three contributions: \(1\) a geometric characterization of invariant latent features, \(2\) a contrastive subspace discovery method that separates semantic\-changing from semantic\-preserving variation, and \(3\) an application of invariant representations to zero\-shot model attribution\. Across models and layers, empirical results support these contributions\. Invariant structure emerges in specific depth regions, semantic displacement lies largely outside the nuisance subspace, and representation\-level interventions indicate a causal role of invariant components in model outputs\. Invariant representations also capture model\-specific geometric patterns, enabling accurate attribution\. These findings suggest that semantic invariance can be viewed as a local geometric property of latent representations, offering a principled perspective on how language models organize meaning\.

## RePercENT: Scaling Disentangled Representation Learning Beyond Two Modalities

**Authors:** Vasiliki Rizou; Pascal Frossard; Dorina Thanou

**ID:** 154626 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBBmaDH8U5>) | [PDF](<https://openreview.net/pdf?id=CBBmaDH8U5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154626>)

_Abstract unavailable from the accessible public sources._

## Atom\-level Protein Representation Learning Improves Protein Structure Prediction

**Authors:** Taewon Kim; Hyosoon Jang; Hyunjin Seo; Seonghwan Seo; Hyeongwoo Kim; Wonho Zhung; Mingyeong Shin; Woo Youn Kim; Sungsoo Ahn

**ID:** 150323 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iyl2sAzrHx>) | [PDF](<https://openreview.net/pdf?id=iyl2sAzrHx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150323>)

_Abstract unavailable from the accessible public sources._

## Understanding Graph Self\-Supervised Pre\-training under Distribution Shifts: A Scaling Law Perspective

**Authors:** Bingheng Li; Shikun Liu; Yu Song; Jay Revolinsky; Haoyu Han; Jiayuan Ding; Hua Liu; Jiliang Tang

**ID:** 151191 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cHJf1Iwn3Z>) | [PDF](<https://openreview.net/pdf?id=cHJf1Iwn3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151191>)

_Abstract unavailable from the accessible public sources._

## FusionProt: Fusing Sequence and Structural Information for Unified Protein Representation Learning

**Authors:** Dan Kalifa; Uriel Singer; Kira Radinsky

**ID:** 156761 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=imcinaOHod>) | [PDF](<https://openreview.net/pdf?id=imcinaOHod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156761>)

_Abstract unavailable from the accessible public sources._

## Closed\-Form Implicit Neural Representations

**Authors:** Woojin Cho; Junghwan Park

**ID:** 148458 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xgO3o4J75E>) | [PDF](<https://openreview.net/pdf?id=xgO3o4J75E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148458>)

_Abstract unavailable from the accessible public sources._

## ARC\-Encoder: learning compressed text representations for large language models

**Authors:** Hippolyte Pilchen; Edouard Grave; Patrick Perez

**ID:** 156755 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156755>)

_Abstract unavailable from the accessible public sources._

## The Platonic Defense: Backdoor Defense for Self\-Supervised Encoders in the Era of Large Scale Pre\-training

**Authors:** Tuo Chen; Minjing Dong; Benlei Cui; Jian liu; Jie Gui

**ID:** 154804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AprP1QZ0Te>) | [PDF](<https://openreview.net/pdf?id=AprP1QZ0Te>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154804>)

Self\-supervised learning \(SSL\) pretrained models have become a dominant paradigm for visual representation learning, but they are vulnerable to backdoor attacks\. Existing defenses struggle to defend against such attacks in a fully black\-box setting because they often require access to labels, attack patterns, or training data\. To tackle this issue, we propose a new attack\-agnostic, model\-agnostic, and modality\-agnostic black\-box test\-time defense paradigm, called \\emph\{Platonic Representation Defense\}\. It is inspired by the Platonic Representation Hypothesis, which suggests that large\-scale independently trained encoders converge toward compatible projections of the same underlying reality\. We formalize this idea as a conditional energy function defined over source representations and a set of reference representations\. The energy function is trained for detection through noise\-contrastive estimation and for representation purification through denoising score matching\. Theoretically, the energy gap between matched and mismatched samples is lower bounded by the mutual information between source and reference representations\. We demonstrate the effectiveness of our method on multiple self\-supervised encoders and more than 10 attacks\. The method can perform both representation detection and purification, and achieves substantial performance gains across multiple attacks\. Code can be found in the appendix\.

## Hypergraph Representation Learning with Hyperlink Random Effects

**Authors:** Zimeng Li; Shihao Wu; Gongjun Xu; Ji Zhu

**ID:** 148313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ylbgDqHzRL>) | [PDF](<https://openreview.net/pdf?id=ylbgDqHzRL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148313>)

Hypergraphs record multi\-way interactions among entities\. Extracting information from the combinatorial structure underlying observed multi\-way interactions is a central task in many real\-world problems\. Existing methods face several limitations\. First, many deep architectures for hypergraphs do not explicitly exploit the potential low\-rank structure, which can sacrifice parsimony and interpretability in the learned representations\. Second, many low\-rank\-based methods operate on tensor representations, which typically require hyperlinks to have uniform sizes and thus limit their applicability to general hypergraphs with non\-uniform hyperlink sizes\. Third, many methods ignore the fact that hyperlinks often arise from heterogeneous mechanisms\. For example, medical symptoms may co\-occur in the profiles of patients with very different conditions, and such heterogeneity should be incorporated into the learning process\. In this work, we develop a general framework for hypergraph representation learning using hyperlink random effects while exploiting the low\-rank structure in hypergraphs\. The proposed framework accommodates latent heterogeneity in hyperlink formation while preserving entity interaction patterns\. We establish identifiability of the model parameters and leverage an expectation\-maximization strategy for estimation\. The framework allows flexible specifications for the hyperlink random effects; in this paper, we study three choices: categorical, Gaussian mixture, and score\-based effects, and develop corresponding estimation algorithms\. Through simulation studies, we demonstrate the effectiveness of the proposed method in recovering latent structure and capturing heterogeneous interaction patterns\. Empirical studies on real\-world hypergraph datasets further illustrate the practical utility of our approach\.

## Spherical Flows for Sampling Categorical Data

**Authors:** Jannis Chemseddine; Gregor Kornhardt; Gabriele Steidl

**ID:** 148878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uVMZotQcJ7>) | [PDF](<https://openreview.net/pdf?id=uVMZotQcJ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148878>)

We study the problem of learning generative models for discrete sequences in a continuous embedding space\. Whereas prior approaches typically operate in Euclidean space or on the probability simplex, we instead work on the sphere $\\mathbb S^\{d\-1\}$\. There the von Mises\-Fisher \(vMF\) distribution induces a natural noise process and admits a closed\-form conditional score\. The conditional velocity is in general intractable\. Exploiting the radial symmetry of the vMF density we reduce the continuity equation on $\\mathbb S^\{d\-1\}$ to a scalar ODE in the cosine similarity, whose unique bounded solution determines the velocity\. The marginal velocity and marginal score on $\(\\mathbb S^\{d\-1\}\)^L$ both decompose into posterior\-weighted tangent sums that differ only by per\-token scalar weights\. This gives access to both ODE and predictor\-corrector \(PC\) sampling\. The posterior is the only learned object, trained by a cross\-entropy loss\. Experiments compare the vMF path against geodesic and Euclidean alternatives\. The combination of vMF and PC sampling significantly improves results on Sudoku and language modeling\.

## SIEVE: Overcoming Topological Obstruction in Equivariant Self\-Supervised Learning

**Authors:** Jongann Lee; Sun Woo Park; Yun Young Choi

**ID:** 150328 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iw5WbeKHOu>) | [PDF](<https://openreview.net/pdf?id=iw5WbeKHOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150328>)

We identify a theoretical incompatibility between 3D point cloud masked autoencoding and SE\(3\)\-equivariant networks\. We prove that standard masking triggers a topological collapse, effectively forcing the model to hallucinate orientation without a reference frame\. To resolve this, we introduce SIEVE \(Scalar Invariant Extraction Via Equivariance\), an SE\(3\)\-equivariant self\-supervised framework that compresses point cloud geometry into invariant scalar embeddings\. At its core is the spherical projection mask, which preserves global pose while obfuscating local semantics, sidestepping the obstruction by construction\. Experiments confirm that SIEVE circumvents the predicted collapse where constant and noise masks fail\. On downstream point cloud tasks, the resulting embeddings improve over coordinate\-based baselines and hand\-crafted geometric descriptors, with the largest gains on generalization to unseen shape categories\.

## Learning What's Real: Disentangling Signals and Measurement Artifacts in Multi\-Sensor Data, with Applications to Astrophysics

**Authors:** Pablo Mercader\-Perez; Carolina Cuesta Lazaro; Daniel Muthukrishna; Jeroen Audenaert; V Villar; David W Hogg; Marc Huertas\-Company; Bill Freeman

**ID:** 154825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AfLBTcI0f8>) | [PDF](<https://openreview.net/pdf?id=AfLBTcI0f8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154825>)

Data collected from the physical world is always a combination of multiple sources: an underlying signal from the physical process of interest and a signal from measurement\-dependent artifacts from the sensor or instrument\. This secondary signal acts as a confounding factor, limiting our ability to extract information about the underlying physics\. Moreover, it poses significant challenges for combining data in heterogeneous or multi\-instrument frameworks\. To disentangle these factors of variation, we propose a dual\-encoder architecture with a counterfactual generation objective that leverages overlapping observations\. The resulting representations explicitly separate intrinsic signals from sensor\-specific distortions and noise, and can be used for counterfactual view generation, parameter inference, and instrument\-independent similarity search\-\-\-all unconfounded by measurement artifacts\. We demonstrate the effectiveness of our approach in a multi\-instrument setting on astrophysical galaxy images from the DESI Legacy Imaging Survey \(Legacy\) and the Hyper Suprime\-Cam \(HSC\) Survey\. This framework provides a general recipe for scientific self\-supervised pretraining: construct training pairs from overlapping observations of the same physical system, treat sensor\- or modality\-specific effects as augmentations, and learn invariant representations through counterfactual generation\.

## Driver Attention as Competitive Allocation: A Scene\-\-Task\-Aware Dual\-Branch Framework

**Authors:** Qianfang Wang; Bin Rao; Pengpeng Xu; Tiantian Chen

**ID:** 153047\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153047

[Paper](<https://openreview.net/forum?id=OPzgHGek3V>) | [PDF](<https://openreview.net/pdf?id=OPzgHGek3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153047>)

Driver attention prediction is crucial for interpretable driver monitoring and human\-like autonomous driving\. Existing methods typically formulate this task as a scene\-to\-heatmap regression problem, failing to reveal the underlying dynamic attention redistribution mechanism\. To address this issue, we propose a scene\-task\-aware competitive allocation framework, which decomposes driver attention as a bottom\-up visual saliency prior and a top\-down scene\-task utility representation\. An adaptive product\-of\-experts allocation rule is designed to fuse these two heterogeneous branches in a competitive manner, where scene\-task demand dynamically modulates the dependence on top\-down task utility, and driving control urgency adjusts spatial attention concentration via a learnable attention budget temperature\. To explicitly differentiate task\-critical regions from visually prominent yet task\-irrelevant distractors, we incorporate competition\-aware contrastive learning to enhance feature discrimination in the latent space\. Extensive experiments demonstrate that our method achieves strong and balanced performance, with a Kullback–Leibler divergence of 0\.98 and a normalized scanpath saliency of 4\.15 on the DR\(eye\)VE dataset, as well as a Pearson’s correlation coefficient of 0\.67 and a histogram similarity of 0\.54 on the BDD\-A dataset\. Ablation studies and diagnostic analyses further validate that our framework yields interpretable attention allocation behaviors, including urgency\-induced spatial entropy contraction and scene\-task\-demand\-guided dynamic attention reallocation\.

## Adaptive Feature Propagation for Attribute\-Missing Graph Clustering

**Authors:** Xiang Long; QIANQIAN WANG

**ID:** 153408\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153408

[Paper](<https://openreview.net/forum?id=LZKrYTeRWx>) | [PDF](<https://openreview.net/pdf?id=LZKrYTeRWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153408>)

Attribute\-Missing Graph Clustering \(AMGC\) is a critical yet challenging task in real\-world applications, in which only a subset of nodes hold complete attributes information while others are partially missing\. Though existing feature propagation\-based methods can effectively recover missing node attributes, they commonly assume uniform contributions across all nodes, ignoring unreliable nodes that may degrade imputation quality\. Furthermore, adopting low\-pass graph filters often suffers from the over\-smoothing problem and inevitably sacrifices discriminative information\. %Besides, traditional contrastive learning pulls all the node embeddings evenly, which might conflict with the rule that intra\-cluster nodes should be closer to each other\.  To address these limitations, we propose \\underline\{\\textbf\{A\}\}daptive \\underline\{\\textbf\{F\}\}eature \\underline\{\\textbf\{P\}\}ropagation \(AFP\) for attribute\-missing graph clustering\. Specifically, we first design a reliability\-aware feature propagation mechanism that adaptively weights edges based on node importance\. Then, we introduce a multi\-scale embedding module to capture both local and global structural information\. Finally, we develop a topology\-aware contrastive loss to enhance clustering consistency\. Extensive experiments on benchmark datasets demonstrate the superiority of our method\.

## Supervised Distributional Reduction via Optimal Transport and Dependence Maximization

**Authors:** Sai\-Aakash Ramesh; Archit Sood; Andrew Corbett; Tim Dodwell

**ID:** 155699 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3bqTlAQf5B>) | [PDF](<https://openreview.net/pdf?id=3bqTlAQf5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155699>)

Learning representations that capture both intrinsic data geometry and target\-relevant structure remains a fundamental challenge, particularly in settings where data reduction must balance compression with predictive fidelity\. While distributional reduction—encompassing joint clustering and dimensionality reduction—offers a principled way to summarize data, its supervised variants remain relatively underexplored, despite the importance of retaining task\-relevant signal for downstream prediction and decision\-making\. We propose Supervised Distributional Reduction \(SDR\), an algorithm for learning target\-aware representations by combining optimal transport with explicit dependence maximization\. SDR builds on the Fused Gromov–Wasserstein \(FGW\) objective to align the relational structure of the input distribution with a set of representative points, while augmenting it with a direct dependence term that encourages the learned embeddings to capture predictive signal more explicitly\. This results in compact representations that reflect both geometric structure and supervision\. Beyond representation learning, SDR naturally induces a data\-dependent, non\-stationary geometry that can be leveraged for settings such as Gaussian Process \(GP\) modelling\. By redefining distances through target\-aware distributional alignment, SDR enables the construction of adaptive kernels that respond to local variations in both data geometry and supervision, offering an optimal transport\-based perspective on non\-stationary kernel design\.

## PRISM:Disentangling Preference Distributions for Generative Ranking

**Authors:** zhangkai wu; Kaize Shi; Xu Zhang; Zhihong Cui; Longbing Cao

**ID:** 153862 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IBAEjexlXH>) | [PDF](<https://openreview.net/pdf?id=IBAEjexlXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153862>)

Preference ranking modeling is important for selecting and adapting language\-model responses to human preferences\. Compared with deterministic ranking methods, generative preference ranking models the prompt\-response data distribution, providing richer uncertainty characterization and sample diversity for learning a more expressive ranking boundary\. Recent work improves modeling efficiency by shifting generative preference ranking from textual space to embedding space, but without explicit preference\-conditioned separation, the learned embedding distribution may still entangle preferred and rejected responses, producing ambiguous synthetic samples that weaken the ranking boundary\. To address this issue, we propose PRISM, a Preference Ranking framework through dISentangled embedding Modeling\. PRISM formulates embedding\-level generative preference ranking with a unified class\-conditional ELBO and decomposes this optimization objective to expose the encoded latent entanglement between preferred and rejected embeddings\. This derivation motivates two practical preference\-aware generation variants: PRISMMI, involving a deep class\-separation objective, and PRISMMMD, catering a probabilistic aggregate\-matching objective\. Both variants learn a preference\-disentangled embedding data distribution and synthesize data pairs that preserve ranking semantics for the generative ranking boundary\. Experiments show that PRISM improves preference ranking performance and produces useful generated embeddings for downstream response selection\. The anonymous code repository is available at:https://anonymous\.4open\.science/r/PRISM\-915C/README\.md\.

## PIS: Pose\-Interpolation Smoothness for Skinning Weight Refinement

**Authors:** Shaofeng Yin; Ting Lei; Yang Liu

**ID:** 151265 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bfpbtJ168y>) | [PDF](<https://openreview.net/pdf?id=bfpbtJ168y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151265>)

Modern automatic\-rigging predictors \(UniRig, Make\-It\-Animatable, RigNet\) place a skeleton on a 3D mesh in seconds, but the resulting skinning weights animate poorly\. Linear\-blend skinning \(LBS\) is non\-linear in pose space, so noisy weights amplify into visible candy\-wrapper artifacts\-\-\-the surface twisting and contracting at joint bends\-\-\-and volume collapse\. ARAP\-style remedies penalize these symptoms one pose at a time and cannot reach the cross\-pose curvature that produces them\. We propose \\emph\{Pose\-Interpolation Smoothness\} \(PIS\), a self\-supervised, training\-free, test\-time refiner: minimize the per\-vertex gap between the deformation at the SO\(3\) midpoint of two random poses and the linear average of the two endpoint deformations\. The midpoint is obtained by orthogonally projecting the arithmetic mean of the two rotations back onto the rotation group, sidestepping the matrix\-logarithm gradient that breaks down near identity and antipodal poses\. Because PIS only re\-tunes the weights LBS already consumes, it slots into any LBS\-based pipeline\-\-\-generative\-3D outputs, automatic\-rigging predictions, and the LBS pathways of game engines and AR/VR renderers\-\-\-without touching shaders\. On Objaverse\-LVIS Balanced\-102 \(98 valid models, 51 LVIS categories\), PIS reduces fragility \(per\-vertex deformation variance under random poses\), ARAP energy, Jacobian anisotropy, and area distortion by $35\.5$\\%, $39\.3$\\%, $19\.8$\\%, and $43\.2$\\% on average; $93\.9$\\% of models improve on all four simultaneously, Wilcoxon $p&lt;10^\{\-10\}$\. On the worst\-case slice\-\-\-the top decile of UniRig\-initialized fragility, where animation visibly tears\-\-\-PIS reduces unstable vertices by up to $10\.2\\times$\. Effective bone count and weight entropy are unchanged, and the optimization runs in $\\sim$30\~s/model on a single H200 GPU\.

## On JEPA Isotropy

**Authors:** Thomas YL Lin; Han Liu; Jerry Yao\-Chieh Hu

**ID:** 155423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5mi1bkx1o8>) | [PDF](<https://openreview.net/pdf?id=5mi1bkx1o8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155423>)

We study the empirical risk minimization \(ERM\) of linear Joint Embedding Predictive Architecture \(JEPA\) and establish its key conditions for optimality\. By casting the embedding bottleneck as a rank constraint, we formulate JEPA as a reduced\-rank regression problem\.  This induces a risk decomposition into an irreducible error and an excess\-risk bound\. Within the irreducible term, we find the rank of the optimal predictor grows with target heterogeneity and saturates at the bottleneck\. Within the excess\-risk bound, we find spectral conditioning of the whitened end\-to\-end predictor governs minimization\. Together, these conditions prescribe an isotropic regularizer\. Under this regularization, we show such JEPA isotropy subsumes canonical JEPA isotropic embedding designs and hence justifies their empirical successes via ERM\. Numerical experiments corroborate our theory\.

## GaitLingo: Self\-Supervised Gait Representation Learning with Language Priors

**Authors:** Chenye Wang; Zhengxiang Lan; Saihui Hou; Zhikang Liu; Xingqun Qi; Sirui Han; Yongzhen Huang

**ID:** 150408\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150408

[Paper](<https://openreview.net/forum?id=iGvBtSYHHN>) | [PDF](<https://openreview.net/pdf?id=iGvBtSYHHN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150408>)

Self\-supervised gait representation learning aims to learn transferable representations that generalize to unseen scenarios\. However, existing methods rely solely on visual self\-supervision, making it difficult to assess the semantic value of individual unlabeled sequences and limiting their ability to exploit latent semantic cues\. To address this limitation, we introduce language priors into self\-supervised gait pretraining\. We construct GaitLP\-1M, a million\-scale silhouette\-based gait pretraining dataset without identity labels\. A two\-stage caption generation pipeline further produces gait descriptions from the corresponding RGB sequences\. To the best of our knowledge, GaitLP\-1M is the first million\-scale silhouette gait dataset paired with gait\-centric captions\. Building on this foundation, we propose GaitLingo, a language\-guided self\-supervised framework for gait representation learning\. Specifically, we design a Caption\-Guided Sample Weighting \(CSW\) mechanism to prioritize informative samples based on sequence\-level semantic richness and attribute rarity\. We then introduce a lightweight Temporal Adapter \(TA\) to better capture motion semantics and improve cross\-domain robustness\. Finally, we propose Soft Relation Distillation \(SRD\) to transfer caption\-derived relational structures into the visual embedding space\. Extensive experiments demonstrate that GaitLingo consistently outperforms prior self\-supervised gait pretraining methods in the zero\-shot setting across six benchmarks\. Compared with GaitSSB, it achieves Rank\-1 gains of \+12\.1% on Gait3D and \+7\.9% on GREW, as well as an average improvement of \+9\.1% across four CCPG settings\.

## Rank\-Transformed Dissimilarity Profiles for High\-Dimensional Classification

**Authors:** Xiangbo Mo; Hao Chen

**ID:** 151307\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151307

[Paper](<https://openreview.net/forum?id=bRnA8Byvs0>) | [PDF](<https://openreview.net/pdf?id=bRnA8Byvs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151307>)

Despite advances in representation learning, high\-dimensional classification remains challenging in low\-sample\-size regimes, where the dominant signal may vary across applications and labeled data are often limited\. We propose a dissimilarity\-profiling classification framework that represents each observation by its class\-wise dissimilarity profile,  transforming the original feature space into a low\-dimensional representation that summarizes how the observation relates to each class\. The key idea is to turn a consequence of the curse of dimensionality into signal: high\-dimensional geometry can induce systematic within\-class and between\-class dissimilarity patterns under location, scale, or other distributional changes, and these patterns are captured by the class\-wise profiles\. Building on this representation, we introduce a rank\-transformed algorithm that converts dissimilarities into class\-wise rank profiles, yielding a compact representation for classification\. The proposed method delivers competitive or improved performance relative to commonly used classifiers on two\-class, multi\-class, network, and real high\-dimensional low\-sample\-size datasets\. To provide insight into the mechanism underlying the method, we analyze a distance\-based surrogate and show that the resulting profiles encode differences in first, second, and higher\-order moments, while the rank transformation improves robustness to outliers\. Together, these results show that rank\-transformed dissimilarity profiles provide an adaptive representation for high\-dimensional classification when the signal structure is unknown\.

## LoRAcles: Self\-Supervised Weight\-Space Interpretability at Scale

**Authors:** Celeste De Schamphelaere; Jan Bauer; Neel Nanda; Euan Ong

**ID:** 154333\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154333

[Paper](<https://openreview.net/forum?id=EOoc3j4hW8>) | [PDF](<https://openreview.net/pdf?id=EOoc3j4hW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154333>)

Fine\-tuned LLMs can learn complex and subtle behaviors\. However, it can be difficult to ascertain what behaviors the model acquired during fine\-tuning\. We introduce LoRAcles: fine\-tuned language models that take LoRA adapter weights as input, and answer natural language questions about them\. We introduce a self\-supervised pipeline for training LoRAcles: we first train LoRAs on small sets of pre\-training documents, and then train LoRAcles on these LoRAs to answer questions about the documents\. LoRAcles generalize far beyond their training data: they are state\-of\-the\-art on AuditBench, a benchmark of models with sophisticated hidden behaviors; they can detect subtle changes in model organisms \(fine\-tunes deliberately constructed to encode a hidden behavior for auditing research\), such as subliminal learning; and they are the first tool to achieve non\-trivial performance at verbalizing semantic backdoor triggers\.  LoRAcles can also describe some learned behaviors from the weights of a full\-parameter fine\-tune\.  LoRAcles are a highly scalable method: we train LoRAcles for Qwen\-3\-14B and Llama\-3\.3\-70B, and observe that performance scales smoothly with the size of our training dataset up to 100K LoRAs, though our method may need refinement in order to scale further\.  We note, though, that LoRAcles are prone to hallucinations and currently only elicit the most salient behavioral changes, limiting their utility beyond narrow fine\-tunes\.

## Causal Representation Learning for Generalisable Recommendation

**Authors:** Yorgos Felekis; Michael O&amp;amp;\#x27;Riordan; Oriol Corcoll Andreu; Ciarán Gilligan\-Lee

**ID:** 148867\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148867

[Paper](<https://openreview.net/forum?id=ub2HuIm8hN>) | [PDF](<https://openreview.net/pdf?id=ub2HuIm8hN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148867>)

Predictive models trained on observational data often fail to generalise to the distributions they encounter when deployed, especially when the training data is a product of the system being optimised\. Recommender systems are a canonical example: they are trained on interaction logs confounded by the deployed policy, past user behaviour, and platform filtering\. As a result, the training distribution differs substantially from the candidate distribution scored at serving time, a gap that makes offline metrics unreliable predictors of online performance\. We address the distribution shift problem with a method motivated by causal representation learning \(CRL\)\. We propose an information\-theoretic disentanglement criterion and prove that its optimum depends only on the causal components of the input\. We then derive a tractable variational lower bound that makes the criterion optimisable from finite observational data alone\. The scope of our method is narrower than that of much of the CRL literature, in that we target better generalisation under distribution shift, not full identification of all latent causal factors\. This narrower target is what makes the method practical, requiring only the existing confounded logs, applying to any standard supervised model, and adding no inference\-time cost\. Our headline evaluation is an A/B test with millions of users on a music streaming platform, applied to a production ranker for personalised playlist generation\. A CRL variant matched in capacity to the production baseline performed on par offline but delivered substantial online gains in listener engagement\. Complementary evidence on the public KuaiRand recommendation dataset and a synthetic benchmark with known causal structure shows the same pattern: offline parity with baseline, gains under distribution shift\. Across all three settings, adding our causal disentanglement objective yields meaningfully better out\-of\-distribution generalisation\.

## Finding Koopman Invariant Subspaces via Personalized PageRank

**Authors:** Hyukpyo Hong; Qin Li; Matthew J Colbrook; Hanbaek Lyu

**ID:** 150950 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6Buij6ykm>) | [PDF](<https://openreview.net/pdf?id=e6Buij6ykm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150950>)

_Abstract unavailable from the accessible public sources._

## MoRe: Modular Representations for Principled  Continual Representation Learning on Sequential Data

**Authors:** Jiaqi Sun; Boyang Sun; Rasmy M\. H\.; Xiangchen Song; Kun Zhang

**ID:** 149880 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mXmO7UBPWK>) | [PDF](<https://openreview.net/pdf?id=mXmO7UBPWK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149880>)

_Abstract unavailable from the accessible public sources._

## Constrained Graph Clustering: A Spectral Algorithm with Generalized Eigenvectors

**Authors:** Shihong Song; He Sun

**ID:** 151463\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151463

[Paper](<https://openreview.net/forum?id=aSBc9QvaeR>) | [PDF](<https://openreview.net/pdf?id=aSBc9QvaeR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151463>)

Given a must\-link graph $G = \(V, E\_G\)$ and a cannot\-link graph $H=\(V,E\_H\)$ as input, the objective of constrained clustering is to partition   $V$ into $k$ parts while minimizing the maximum cut ratio between $G$ and $H$\. In this paper we design and analyze a variant of the spectral clustering algorithm using the $k$ smallest generalized eigenvectors as the embedding space\. We prove that our proposed  algorithm achieves an $O\(1\)$\-approximation of the optimal cut\-ratio under a natural assumption on the input graphs\. We further study the case in which  the cannot\-link constraints might not be available, and   develop an iterative  pipeline that repeatedly applies the output of  spectral clustering or constrained clustering to generate  new   constraints, thereby progressively improving cluster quality\.  We experimentally compare our proposed algorithm with the previous state\-of\-the\-art, and demonstrate the  superior  performance of our algorithms on both synthetic and real\-world datasets\.

## Binding Multiple Modalities via Multimodal Wasserstein Barycenter

**Authors:** Xiaole Tang; Jiayi Xu; Xiang Gu; Yan Yang; Jian Sun

**ID:** 149098\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149098

[Paper](<https://openreview.net/forum?id=swVrjlNX4Q>) | [PDF](<https://openreview.net/pdf?id=swVrjlNX4Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149098>)

Multimodal learning beyond two modalities commonly leverages a specific modality  \(e\.g\., text\) to bind other modalities\. However, how to establish a more balanced representation space that approximates shared semantics while respecting the holistic geometry of $n$\-modal data remains challenging\. In this work, we present BaryBind, which aims to transport the specific modality towards the Wasserstein barycenter \(WB\) optimized across all modalities and introduces a volumetric alignment objective to establish a unified semantic space around the WB embedding\. Specifically, we project specific modalities to the WB, which minimizes the average Wasserstein distances to multimodal distributions and serves as the anchor for subsequent alignment\. We then construct a barycenter simplex, whose volume is taken as a similarity metric for global alignment centered at the WB\.  Extensive experiments show that BaryBind achieves competitive performance in text\-video\-audio retrieval, classification, videoQA, and cross\-modal generation tasks, along with robustness under modality absence and scalability to more than three modalities\.

## Learnable Spectral Activations

**Authors:** Tamir Shor; Or Litany; Alex M Bronstein

**ID:** 151899 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X6lgq8Q6sS>) | [PDF](<https://openreview.net/pdf?id=X6lgq8Q6sS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151899>)

Implicit neural representations \(INRs\) are shaped by the spectral structure induced by their input encodings and activation functions\. Existing methods improve fitting primarily by modifying which frequencies are available to the network, through coordinate encodings or periodic nonlinearities\. However, frequency access is not the only bottleneck: signals with localized or spatially varying structure require the network to efficiently compose frequencies into multi\-harmonic internal responses\. We introduce learnable spectral activations \(LSA\), which replace fixed neuron\-level nonlinearities with a residual truncated Fourier series whose harmonic amplitudes are learned during training\. LSA does not expand the asymptotic function class\. Instead, it changes the factorization of the representation: linear weights select features while activation coefficients control spectral shaping, and the two are updated by separate gradients\. Because the activation coefficients enter the loss linearly given fixed pre\-activations, spectral tuning becomes a simpler subproblem than in architectures where it is entangled with feature selection\. Empirically, this factorization concentrates more target\-signal energy in the leading eigenmodes of the neural tangent kernel, consistent with improved optimization behavior\. Across audio, image, neural radiance field, and neural acoustic field tasks, LSA also improves reconstruction quality\.

## DictLLM: Post\-training Compression of Large Language Model with Dictionary Kernels

**Authors:** Jinho Park; Se Young Chun; Mingoo Seok

**ID:** 151096 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d0p33Top6I>) | [PDF](<https://openreview.net/pdf?id=d0p33Top6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151096>)

Efficient deployment of large language models \(LLMs\) on mobile devices requires balancing performance with compute and memory constraints\. Post\-training compression is an effective approach to managing this trade\-off, while requiring much less computation than in\-training counterparts\. We propose DictLLM, a dictionary\-based compression scheme in which weight matrices within grouped layers are decomposed into a shared dictionary and layer\-specific sparse coefficients, directly obtained from a pre\-trained model without further training\. Specifically, we cast DictLLM as a four\-step post\-training optimization\. First, we obtain shared dictionaries via singular value decomposition \(SVD\) of input\-scaled weight matrices, amortizing rank across grouped layers; second, we sparsify the layer\-specific coefficients to the target compression ratio using a dictionary\-aware Hessian; and third, we refine the dictionaries given the resulting sparse coefficients\. Finally, we aggressively quantize both components using factor\-specific Hessian information: input covariance for the dictionaries and the dictionary\-aware Hessian for the coefficients\. The resulting representation reduces memory footprint by storing a single shared dictionary per layer group, along with sparse layer\-specific coefficients\. On language modeling and zero\-shot reasoning benchmarks, DictLLM consistently outperforms existing post\-training low\-rank compression methods and pushes the Pareto frontier between model size and performance\. DictLLM compresses the original LLaMA\-7B model by 5\.1x with only a 3\.4\-point increase in WikiText\-2 perplexity, achieving a 3\.6x higher compression ratio than the state\-of\-the\-art low\-rank method\.

## SS3D: End2End Self\-Supervised 3D from Web Videos

**Authors:** Marwane Hariat; Gianni Franchi; David Filliat; Antoine Manzanera

**ID:** 149077 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3RKBvndwm>) | [PDF](<https://openreview.net/pdf?id=t3RKBvndwm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149077>)

We present SS3D, a web\-scale SfM\-based self\-supervision pretraining pipeline for feed\-forward 3D estimation from monocular video\. Our model jointly predicts depth, ego\-motion, and intrinsics in a single forward pass and is trained/evaluated as a coherent end\-to\-end 3D estimator\. To stabilize joint learning, we use an intrinsics\-first two\-stage schedule and a unified single\-checkpoint evaluation protocol\. Scaling SfM self\-supervision to unconstrained web video is challenging due to weak multi\-view observability and strong corpus heterogeneity; we address these with a multi\-view signal proxy \(MVS\) used for filtering and curriculum sampling, and with expert training distilled into a single student\. Pretraining on YouTube\-8M \(\~ 100M frames after filtering\) yields strong cross\-domain zero\-shot transfer and improved fine\-tuning performance over prior self\-supervised baselines\. We release the pretrained checkpoint and code\.

## MCAS: Signal\-Processing\-Based Multi\-View Contrastive Learning for Acoustic Sensing

**Authors:** Bingzhi Wang; Jiajun Yu; Dengke Zhong; Jiaming Liu; Xiong Li; Hongbo Liu; Jie Yang

**ID:** 156122 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0FCfr7P0vM>) | [PDF](<https://openreview.net/pdf?id=0FCfr7P0vM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156122>)

_Abstract unavailable from the accessible public sources._

## Learning Informative Invariant Representations via Hierarchical Latent Decomposition

**Authors:** Hyungkwon Lee; Hyewon Ryu; Jong\-Seok Lee

**ID:** 155712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3TNn1rmVN1>) | [PDF](<https://openreview.net/pdf?id=3TNn1rmVN1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155712>)

Domain generalization aims to learn models that generalize to unseen target domains using labeled data from multiple source domains\. Many existing approaches focus on learning domain\-invariant representations, but enforcing invariance alone may fail to preserve sufficient task\-relevant information under domain shift\. We propose BLENDER, a reconstruction\-aware framework for domain generalization that employs a hierarchical latent decomposition to separate domain\-invariant and domain\-specific factors\. This structure prioritizes informativeness in the domain\-invariant representation and captures residual domain\-specific variation through conditional modeling\. We further provide a theoretical analysis establishing a bound on the reconstruction risk for unseen target domains, revealing how domain invariance and latent disentanglement contribute to generalization beyond the observed domains\. Experiments on standard domain generalization datasets demonstrate strong performance under substantial domain shifts, and qualitative analyses show that BLENDER promotes a structured allocation of information between domain\-invariant and domain\-specific latent representations\.

## Efficient Decoder Scaling Strategy for Constructive Neural Routing Solvers

**Authors:** Qing Luo; Fu Luo; Ke LI; Zhenkun Wang

**ID:** 149642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oZT5mxz9Nn>) | [PDF](<https://openreview.net/pdf?id=oZT5mxz9Nn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149642>)

Construction\-based neural routing solvers, typically composed of an encoder and a decoder, have emerged as a promising approach for solving vehicle routing problems\. While recent studies suggest that shifting parameters from the encoder to the decoder enhances performance, most works restrict the decoder size to 1–3M parameters, leaving the effects of scaling largely unexplored\. To address this gap, we conduct a systematic study comparing two distinct strategies: scaling depth versus scaling width\. We synthesize these strategies to construct a suite of 12 model configurations, spanning a parameter range from 1M to $\\sim$150M, and extensively evaluate their scaling behaviors across three critical dimensions: parameter efficiency, data efficiency, and compute efficiency\. Our empirical results reveal that parameter count is insufficient to accurately predict the model performance, highlighting the critical and distinct roles of model depth \(layer count\) and width \(embedding dimension\)\. Crucially, we demonstrate that scaling depth yields superior performance gains to scaling width\. Based on these findings, we provide and experimentally validate a set of design principles for the efficient allocation of parameters and compute resources to enhance the model performance\.

## EpicWorldModel: Exploration\-driven Planning with Latent World Models

**Authors:** Bowen Feng; Julian Ost; Zhiting Mei; Anirudha Majumdar; Felix Heide

**ID:** 150907 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eX8xQG15Hs>) | [PDF](<https://openreview.net/pdf?id=eX8xQG15Hs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150907>)

Latent world models based on Joint\-Embedding Predictive Architecture \(JEPA\) are deterministic by design\.    While successful in fully observable scenarios, this paradigm breaks down when past observations and actions lead to multiple plausible future possibilities, e\.g\., due to occlusion\. We introduce EpicWorldModel, a framework to train stochastic JEPAs for environments and tasks with inherent uncertainty under partially observability\. We jointly train the EpicWorldModel predictor with its latent representation space to directly predict multiple potential future states using a flow\-matching objective, when the goal\-relevant scene content is absent from the conditioning history\. We show that flow predictive variance approximates an upper bound on Expected Information Gain and serves as a useful exploration guidance for planning\. By incorporating this uncertainty signal into Cross\-Entropy Method \(CEM\)\-based planning, our approach balances goal\-reaching with exploration of uncertain regions where occluded or unseen goals are most likely to be located\. We demonstrate the effectiveness of EpicWorldModel through a series of latent planning experiments with the best performance among all baseline methods, showing up to $22\\%$ empirical improvement in success rate over LeWorldModel\.

## Cosine is Human: The Reproducibility Ceiling of Perceptual Similarity

**Authors:** Benjamin TenWolde; Virginia de Sa

**ID:** 139285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZQ6YtLisva>) | [PDF](<https://openreview.net/pdf?id=ZQ6YtLisva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139285>)

NIGHTS is a recent benchmark for human perceptual similarity over objects, scenes, and composition\. DreamSim, the supervised metric introduced with NIGHTS, and later supervised metrics trained on the same data report large gains over self\-supervised baselines\. The standard NIGHTS evaluation uses the unanimous\-agreement subset of a released 100,000\-triplet corpus, leaving weak\-majority and split\-vote triplets outside the headline benchmark\. We evaluate eleven perceptual similarity methods on the full released corpus, analyzing unanimous, weak\-majority, and split\-vote triplets separately\. On the 64,420 non\-tie triplets, cosine distance on a frozen self\-supervised backbone reaches 74\.1% accuracy without training, LoRA fine\-tuning reaches 77–79%, and the DreamSim ensemble reaches 80\.7%\. A split\-half reproducibility estimate from the triplet vote counts shows that majority labels reproduce only 70\.1% of the time overall, and only 33–50% on weak\-majority triplets\. The extra accuracy comes from matching the collected votes, not from showing that the metric would better match a new set of human judgments\. The evaluation target is also unstable across task formulations: NIGHTS’ 2AFC similarity labels and JND same/different labels disagree on 51–64% of shared stimuli\. Fine\-tuning changes the feature basis as well, increasing foreground\-only fragility and making DreamSim the most fragile method under rotation, color, and blur\. NIGHTS supports a narrower conclusion: cosine distance on self\-supervised features captures the stable signal currently measurable in these labels\. Additional claims of human alignment require a redesigned benchmark with more votes per triplet, axis\-specific similarity questions, per\-subject statistics, and ablation tests\.

## Binding Multiple Modalities via Multimodal Wasserstein Barycenter

**Authors:** Xiaole Tang; Jiayi Xu; Xiang Gu; Yan Yang; Jian Sun

**ID:** 149098\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149098

[Paper](<https://openreview.net/forum?id=swVrjlNX4Q>) | [PDF](<https://openreview.net/pdf?id=swVrjlNX4Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149098>)

Multimodal learning beyond two modalities commonly leverages a specific modality  \(e\.g\., text\) to bind other modalities\. However, how to establish a more balanced representation space that approximates shared semantics while respecting the holistic geometry of $n$\-modal data remains challenging\. In this work, we present BaryBind, which aims to transport the specific modality towards the Wasserstein barycenter \(WB\) optimized across all modalities and introduces a volumetric alignment objective to establish a unified semantic space around the WB embedding\. Specifically, we project specific modalities to the WB, which minimizes the average Wasserstein distances to multimodal distributions and serves as the anchor for subsequent alignment\. We then construct a barycenter simplex, whose volume is taken as a similarity metric for global alignment centered at the WB\.  Extensive experiments show that BaryBind achieves competitive performance in text\-video\-audio retrieval, classification, videoQA, and cross\-modal generation tasks, along with robustness under modality absence and scalability to more than three modalities\.

## Driver Attention as Competitive Allocation: A Scene\-\-Task\-Aware Dual\-Branch Framework

**Authors:** Qianfang Wang; Bin Rao; Pengpeng Xu; Tiantian Chen

**ID:** 153047\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153047

[Paper](<https://openreview.net/forum?id=OPzgHGek3V>) | [PDF](<https://openreview.net/pdf?id=OPzgHGek3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153047>)

Driver attention prediction is crucial for interpretable driver monitoring and human\-like autonomous driving\. Existing methods typically formulate this task as a scene\-to\-heatmap regression problem, failing to reveal the underlying dynamic attention redistribution mechanism\. To address this issue, we propose a scene\-task\-aware competitive allocation framework, which decomposes driver attention as a bottom\-up visual saliency prior and a top\-down scene\-task utility representation\. An adaptive product\-of\-experts allocation rule is designed to fuse these two heterogeneous branches in a competitive manner, where scene\-task demand dynamically modulates the dependence on top\-down task utility, and driving control urgency adjusts spatial attention concentration via a learnable attention budget temperature\. To explicitly differentiate task\-critical regions from visually prominent yet task\-irrelevant distractors, we incorporate competition\-aware contrastive learning to enhance feature discrimination in the latent space\. Extensive experiments demonstrate that our method achieves strong and balanced performance, with a Kullback–Leibler divergence of 0\.98 and a normalized scanpath saliency of 4\.15 on the DR\(eye\)VE dataset, as well as a Pearson’s correlation coefficient of 0\.67 and a histogram similarity of 0\.54 on the BDD\-A dataset\. Ablation studies and diagnostic analyses further validate that our framework yields interpretable attention allocation behaviors, including urgency\-induced spatial entropy contraction and scene\-task\-demand\-guided dynamic attention reallocation\.

## Adaptive Feature Propagation for Attribute\-Missing Graph Clustering

**Authors:** Xiang Long; QIANQIAN WANG

**ID:** 153408\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153408

[Paper](<https://openreview.net/forum?id=LZKrYTeRWx>) | [PDF](<https://openreview.net/pdf?id=LZKrYTeRWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153408>)

Attribute\-Missing Graph Clustering \(AMGC\) is a critical yet challenging task in real\-world applications, in which only a subset of nodes hold complete attributes information while others are partially missing\. Though existing feature propagation\-based methods can effectively recover missing node attributes, they commonly assume uniform contributions across all nodes, ignoring unreliable nodes that may degrade imputation quality\. Furthermore, adopting low\-pass graph filters often suffers from the over\-smoothing problem and inevitably sacrifices discriminative information\. %Besides, traditional contrastive learning pulls all the node embeddings evenly, which might conflict with the rule that intra\-cluster nodes should be closer to each other\.  To address these limitations, we propose \\underline\{\\textbf\{A\}\}daptive \\underline\{\\textbf\{F\}\}eature \\underline\{\\textbf\{P\}\}ropagation \(AFP\) for attribute\-missing graph clustering\. Specifically, we first design a reliability\-aware feature propagation mechanism that adaptively weights edges based on node importance\. Then, we introduce a multi\-scale embedding module to capture both local and global structural information\. Finally, we develop a topology\-aware contrastive loss to enhance clustering consistency\. Extensive experiments on benchmark datasets demonstrate the superiority of our method\.

## Supervised Distributional Reduction via Optimal Transport and Dependence Maximization

**Authors:** Sai\-Aakash Ramesh; Archit Sood; Andrew Corbett; Tim Dodwell

**ID:** 155699\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155699

[Paper](<https://openreview.net/forum?id=3bqTlAQf5B>) | [PDF](<https://openreview.net/pdf?id=3bqTlAQf5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155699>)

Learning representations that capture both intrinsic data geometry and target\-relevant structure remains a fundamental challenge, particularly in settings where data reduction must balance compression with predictive fidelity\. While distributional reduction—encompassing joint clustering and dimensionality reduction—offers a principled way to summarize data, its supervised variants remain relatively underexplored, despite the importance of retaining task\-relevant signal for downstream prediction and decision\-making\. We propose Supervised Distributional Reduction \(SDR\), an algorithm for learning target\-aware representations by combining optimal transport with explicit dependence maximization\. SDR builds on the Fused Gromov–Wasserstein \(FGW\) objective to align the relational structure of the input distribution with a set of representative points, while augmenting it with a direct dependence term that encourages the learned embeddings to capture predictive signal more explicitly\. This results in compact representations that reflect both geometric structure and supervision\. Beyond representation learning, SDR naturally induces a data\-dependent, non\-stationary geometry that can be leveraged for settings such as Gaussian Process \(GP\) modelling\. By redefining distances through target\-aware distributional alignment, SDR enables the construction of adaptive kernels that respond to local variations in both data geometry and supervision, offering an optimal transport\-based perspective on non\-stationary kernel design\.

## PRISM:Disentangling Preference Distributions for Generative Ranking

**Authors:** zhangkai wu; Kaize Shi; Xu Zhang; Zhihong Cui; Longbing Cao

**ID:** 153862\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153862

[Paper](<https://openreview.net/forum?id=IBAEjexlXH>) | [PDF](<https://openreview.net/pdf?id=IBAEjexlXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153862>)

Preference ranking modeling is important for selecting and adapting language\-model responses to human preferences\. Compared with deterministic ranking methods, generative preference ranking models the prompt\-response data distribution, providing richer uncertainty characterization and sample diversity for learning a more expressive ranking boundary\. Recent work improves modeling efficiency by shifting generative preference ranking from textual space to embedding space, but without explicit preference\-conditioned separation, the learned embedding distribution may still entangle preferred and rejected responses, producing ambiguous synthetic samples that weaken the ranking boundary\. To address this issue, we propose PRISM, a Preference Ranking framework through dISentangled embedding Modeling\. PRISM formulates embedding\-level generative preference ranking with a unified class\-conditional ELBO and decomposes this optimization objective to expose the encoded latent entanglement between preferred and rejected embeddings\. This derivation motivates two practical preference\-aware generation variants: PRISMMI, involving a deep class\-separation objective, and PRISMMMD, catering a probabilistic aggregate\-matching objective\. Both variants learn a preference\-disentangled embedding data distribution and synthesize data pairs that preserve ranking semantics for the generative ranking boundary\. Experiments show that PRISM improves preference ranking performance and produces useful generated embeddings for downstream response selection\. The anonymous code repository is available at:https://anonymous\.4open\.science/r/PRISM\-915C/README\.md\.

## MinSteer: Minimal\-Pair Steering via Two\-Stage Cached Continuation

**Authors:** Muxuan Liu; Tatsuya Ishigaki; Yusuke Miyao; Hiroya Takamura; Ichiro Kobayashi

**ID:** 152253\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152253

[Paper](<https://openreview.net/forum?id=UQiPTFT8T4>) | [PDF](<https://openreview.net/pdf?id=UQiPTFT8T4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152253>)

Do behavioral styles in large language models correspond to reusable directions in residual space, or do they mainly appear after averaging many noisy contrastive examples? We introduce MinSteer, a two\-stage cached\-continuation method for estimating a contrastive residual direction \(CRD\) within one decoding trajectory\. Stage\-X generates a continuation in one style; a style\-flip suffix is then processed using Stage\-X's final KV cache; Stage\-Y continues from this inherited trajectory\. The CRD is computed from generated\-token residuals only, excluding prompt and suffix tokens from the average\. Across sentiment transfer, politeness control, and a ParaDetox\-based bidirectional diagnostic, MinSteer extracts effective steering directions from very small contrasts\. On TweetEval sentiment transfer, one MinSteer contrast outperforms a CAA baseline averaged over 50 independent pairs\. Japanese keigo CRDs transfer to English and Chinese outputs and outperform trajectory\-free TwoSeq controls\. In ParaDetox, MinSteer produces bidirectional Detoxify movement under our rewrite setup, while exposing semantic\-preservation trade\-offs\. The directions transfer across tested scenarios and languages and show clear depth dependence\. Together, these results show that cached self\-rewrite trajectories provide a cleaner signal for residual\-space behavior directions than independent\-pair averaging\.

## Elastic Representations via Hyperbolic Geometry

**Authors:** Arjun Ramesh Kaushik; Rudrasis Chakraborty; Nalini Ratha; Venu Govindaraju

**ID:** 152639\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152639

[Paper](<https://openreview.net/forum?id=RVWViB6PQ7>) | [PDF](<https://openreview.net/pdf?id=RVWViB6PQ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152639>)

Learned representations \(or embeddings\) are the foundation of modern machine learning systems, yet they are typically trained as fixed\-size embeddings, without accounting for varying downstream resource or task constraints\. Matryoshka Representation Learning \(MRL\) addresses this limitation by learning nested representations, but requires costly end\-to\-end retraining and does not support post hoc expansion, while Contrastive Sparse Representations \(CSR\) reduce training overhead via lightweight adaptors but operate at a 4x larger dimensionality\. Additionally, all prior works restrict their framework towards compression only\. In this work, we introduce \\textbf\{H\}yperbolic \\textbf\{E\}lastic \\textbf\{R\}epresentation \\textbf\{L\}earning \(HERL\), a framework for learning dimension\-adaptive embeddings \(compression and expansion\) through a lightweight adaptor without retraining the base encoder\. Our key idea is to exploit the exponential capacity of hyperbolic geometry by learning a non\-linear mapping from the encoder space to hyperbolic space\. We train a simple MLP to downsample the representations before projecting them onto a Lorentzian and learn adaptive representations that respect the Lorentzian geometry\. Our approach is model\-agnostic and effective in both supervised and unsupervised settings\. Through extensive experiments across image and text modalities, we show that HERL preserves downstream performance across a wide range of embedding sizes, exhibits smooth interpolation between dimensions, and achieves these benefits at a fraction of the computational cost\.

## VIPBench: A Human\-Aligned Benchmark for Voice Identity Perception in the Age of Voice Cloning

**Authors:** Xudong Tang; Matthew Groh

**ID:** 139249\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139249

[Paper](<https://openreview.net/forum?id=cHQRKyboN9>) | [PDF](<https://openreview.net/pdf?id=cHQRKyboN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139249>)

Speaker identification benchmarks evaluate how accurately a model can predict a ground\-truth speaker label for a given utterance, treating voice identity as a property of the recording's producer\. However, these benchmarks do not test whether a model aligns with human perception of voice identity\. Whether a human would hear two voices and interpret them as the same speaker or not has consequences for intellectual property rights, cybersecurity, and everyday life\. We make two contributions\. First, we introduce the Voice Identity Perception benchmark \(VIPBench\), built from the identity judgments of English\-speaking crowdworkers on stratified celebrity voice pairs\. VIPBench consists of 124,876 same/different identity judgments from 1,290 participants on 9,800 voice pairs across 100 speakers, spanning real recordings, AI voice clones generated by a state\-of\-the\-art Text\-to\-Speech \(TTS\) system, and continuously morphed voices\. Our second contribution is to define four evaluation tasks: predicting the listener same\-speaker agreement rate; binary same/different classification against the majority listener vote, evaluated for both ranking and calibration; alignment between the model's and listeners' speaker\-similarity structures; and whether a predictor fit on real speech still works on voice clones and morphs\. We report baselines for ten publicly available speech representations\. We find that the perception target re\-orders model rankings relative to metadata: supervised embeddings \(trained on metadata speaker labels\) still outperform self\-supervised models \(which learn voice structure without identity supervision\), and no model reaches the noise ceiling\. VIPBench enables systematic evaluation of speaker representations against human voice\-identity perception across real, cloned, and morphed speech, motivating speaker models trained on perceptual judgments directly\.

## Intrinsic Riemannian Cross\-covariance for Manifold\-valued Random Objects

**Authors:** Carlos Soto; Cheng Wang; Yujing Huang; Xiaoyu Chen

**ID:** 148988\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148988

[Paper](<https://openreview.net/forum?id=teJdXSWBH8>) | [PDF](<https://openreview.net/pdf?id=teJdXSWBH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148988>)

Covariance estimation yields a fundamental second\-order statistic underlying representation learning, dimension reduction, and dependence modeling\. While covariance has been well understood in Euclidean spaces, it is ill\-defined for random objects residing on nonlinear Riemannian manifolds, which increasingly arise in modern machine learning applications involving shapes, symmetric positive definite \(SPD\) matrices, etc\.      This paper introduces an intrinsic Riemannian cross\-covariance for manifold\-valued random objects\. Our approach defines covariance and correlation by transporting local variations to a common tangent space via parallel transport, yielding a second\-order descriptor that is independent of arbitrary coordinate choices\. We establish that the proposed covariance inherits desirable properties of its Euclidean counterparts and characterize its asymptotic behavior\.     Numerical studies on spheres and SPD manifolds, together with real\-data experiments on heart valve shapes in Kendall's shape space, demonstrate the effectiveness and verify the properties\. Our results position Riemannian covariance as a fundamental tool for second\-order learning and analysis in non\-Euclidean representation spaces\.

## Rank\-Transformed Dissimilarity Profiles for High\-Dimensional Classification

**Authors:** Xiangbo Mo; Hao Chen

**ID:** 151307\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151307

[Paper](<https://openreview.net/forum?id=bRnA8Byvs0>) | [PDF](<https://openreview.net/pdf?id=bRnA8Byvs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151307>)

Despite advances in representation learning, high\-dimensional classification remains challenging in low\-sample\-size regimes, where the dominant signal may vary across applications and labeled data are often limited\. We propose a dissimilarity\-profiling classification framework that represents each observation by its class\-wise dissimilarity profile,  transforming the original feature space into a low\-dimensional representation that summarizes how the observation relates to each class\. The key idea is to turn a consequence of the curse of dimensionality into signal: high\-dimensional geometry can induce systematic within\-class and between\-class dissimilarity patterns under location, scale, or other distributional changes, and these patterns are captured by the class\-wise profiles\. Building on this representation, we introduce a rank\-transformed algorithm that converts dissimilarities into class\-wise rank profiles, yielding a compact representation for classification\. The proposed method delivers competitive or improved performance relative to commonly used classifiers on two\-class, multi\-class, network, and real high\-dimensional low\-sample\-size datasets\. To provide insight into the mechanism underlying the method, we analyze a distance\-based surrogate and show that the resulting profiles encode differences in first, second, and higher\-order moments, while the rank transformation improves robustness to outliers\. Together, these results show that rank\-transformed dissimilarity profiles provide an adaptive representation for high\-dimensional classification when the signal structure is unknown\.

## LoRAcles: Self\-Supervised Weight\-Space Interpretability at Scale

**Authors:** Celeste De Schamphelaere; Jan Bauer; Neel Nanda; Euan Ong

**ID:** 154333\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154333

[Paper](<https://openreview.net/forum?id=EOoc3j4hW8>) | [PDF](<https://openreview.net/pdf?id=EOoc3j4hW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154333>)

Fine\-tuned LLMs can learn complex and subtle behaviors\. However, it can be difficult to ascertain what behaviors the model acquired during fine\-tuning\. We introduce LoRAcles: fine\-tuned language models that take LoRA adapter weights as input, and answer natural language questions about them\. We introduce a self\-supervised pipeline for training LoRAcles: we first train LoRAs on small sets of pre\-training documents, and then train LoRAcles on these LoRAs to answer questions about the documents\. LoRAcles generalize far beyond their training data: they are state\-of\-the\-art on AuditBench, a benchmark of models with sophisticated hidden behaviors; they can detect subtle changes in model organisms \(fine\-tunes deliberately constructed to encode a hidden behavior for auditing research\), such as subliminal learning; and they are the first tool to achieve non\-trivial performance at verbalizing semantic backdoor triggers\.  LoRAcles can also describe some learned behaviors from the weights of a full\-parameter fine\-tune\.  LoRAcles are a highly scalable method: we train LoRAcles for Qwen\-3\-14B and Llama\-3\.3\-70B, and observe that performance scales smoothly with the size of our training dataset up to 100K LoRAs, though our method may need refinement in order to scale further\.  We note, though, that LoRAcles are prone to hallucinations and currently only elicit the most salient behavioral changes, limiting their utility beyond narrow fine\-tunes\.

## Causal Representation Learning for Generalisable Recommendation

**Authors:** Yorgos Felekis; Michael O&amp;amp;\#x27;Riordan; Oriol Corcoll Andreu; Ciarán Gilligan\-Lee

**ID:** 148867\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148867

[Paper](<https://openreview.net/forum?id=ub2HuIm8hN>) | [PDF](<https://openreview.net/pdf?id=ub2HuIm8hN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148867>)

Predictive models trained on observational data often fail to generalise to the distributions they encounter when deployed, especially when the training data is a product of the system being optimised\. Recommender systems are a canonical example: they are trained on interaction logs confounded by the deployed policy, past user behaviour, and platform filtering\. As a result, the training distribution differs substantially from the candidate distribution scored at serving time, a gap that makes offline metrics unreliable predictors of online performance\. We address the distribution shift problem with a method motivated by causal representation learning \(CRL\)\. We propose an information\-theoretic disentanglement criterion and prove that its optimum depends only on the causal components of the input\. We then derive a tractable variational lower bound that makes the criterion optimisable from finite observational data alone\. The scope of our method is narrower than that of much of the CRL literature, in that we target better generalisation under distribution shift, not full identification of all latent causal factors\. This narrower target is what makes the method practical, requiring only the existing confounded logs, applying to any standard supervised model, and adding no inference\-time cost\. Our headline evaluation is an A/B test with millions of users on a music streaming platform, applied to a production ranker for personalised playlist generation\. A CRL variant matched in capacity to the production baseline performed on par offline but delivered substantial online gains in listener engagement\. Complementary evidence on the public KuaiRand recommendation dataset and a synthetic benchmark with known causal structure shows the same pattern: offline parity with baseline, gains under distribution shift\. Across all three settings, adding our causal disentanglement objective yields meaningfully better out\-of\-distribution generalisation\.

## Finding Koopman Invariant Subspaces via Personalized PageRank

**Authors:** Hyukpyo Hong; Qin Li; Matthew J Colbrook; Hanbaek Lyu

**ID:** 150950\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150950

[Paper](<https://openreview.net/forum?id=e6Buij6ykm>) | [PDF](<https://openreview.net/pdf?id=e6Buij6ykm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150950>)

_Abstract unavailable from the accessible public sources._

## MoRe: Modular Representations for Principled  Continual Representation Learning on Sequential Data

**Authors:** Jiaqi Sun; Boyang Sun; Rasmy M\. H\.; Xiangchen Song; Kun Zhang

**ID:** 149880\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149880

[Paper](<https://openreview.net/forum?id=mXmO7UBPWK>) | [PDF](<https://openreview.net/pdf?id=mXmO7UBPWK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149880>)

_Abstract unavailable from the accessible public sources._

## Disentangling Homophilic and Heterophilic Patterns for Multi\-Domain Graph Foundation Models

**Authors:** Ziyan Wang; Ruiyi Fang; Jingyu Zhao; Zhimin Mei; Charles Ling; Boyu Wang

**ID:** 155780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2w0Bbk6akp>) | [PDF](<https://openreview.net/pdf?id=2w0Bbk6akp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155780>)

Graph Foundation Models \(GFMs\) have attracted growing attention for their ability to model multi\-domain graphs universally and generalize to unseen downstream tasks\. However, existing GFMs typically rely on a single domain\-invariant representation space, which inevitably blurs two fundamental connectivity patterns, \\emph\{homophily\} and \\emph\{heterophily\}, that govern how nodes relate across domains\. Additionally, hard\-partitioning the graph into disjoint subgraphs discards edges that are essential for self\-supervised pre\-training\. In this work, we introduce  $\\underline\{\\text\{HHGFM\}\}$, a $\\underline\{\\text\{H\}\}$omophilic and $\\underline\{\\text\{H\}\}$eterophilic Pattern\-Disentangled $\\underline\{\\text\{G\}\}$raph $\\underline\{\\text\{F\}\}$oundation $\\underline\{\\text\{M\}\}$odel that encodes homophily and heterophily separately while keeping the original edge structure intact\. Specifically, we propose a node\-level soft disentanglement mechanism that estimates each neighbor's homophilic and heterophilic contributions and uses them as edge weights, thereby preserving the original graph structure\. Low\-pass and high\-pass filters then serve as dual backbones to align homophilic and heterophilic patterns separately, supported by our generalization analysis\. Extensive experiments on a range of graph datasets validate the effectiveness of our method\.

## Approximation in Contrastive Representation Learning

**Authors:** Yuanfan Li; Zihan Zhang; Yiming Ying; Ding\-Xuan Zhou

**ID:** 154229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FFSgETbjWN>) | [PDF](<https://openreview.net/pdf?id=FFSgETbjWN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154229>)

Contrastive representation learning \(CRL\) is a fundamental paradigm for   learning transferable representations\.  Recent work   identifies its population target as the pointwise mutual information \(PMI\)   $     \\log\\frac\{p\(\\mathbf\{x\},\\mathbf\{y\}\)\}\{p\_\\mathcal\{X\}\(\\mathbf\{x\}\)p\_\\mathcal\{Y\}\(\\mathbf\{y\}\)\}   $   between two modalities $\\mathcal\{X\},\\mathcal\{Y\}$, where $p$ is the joint density function and   $p\_\\mathcal\{X\},p\_\\mathcal\{Y\}$ are the marginals\.  However, it remains unclear why standard inner\-product scores $f\(\\mathbf\{x\}\)^\\top g\(\\mathbf\{y\}\)$ can effectively approximate a generally nonseparable population target PMI\. In this paper, we address this question from the aspect of approximation for CRL\. By linking PMI to a compact operator, we show that $D$\-dimensional inner\-product models perform rank\-$D$ spectral approximation, with error controlled by the spectral tail\. We then study neural network realizations: in general settings, we show that deep neural network scoring functions are universally consistent, and the approximation error rates depend on the smoothness of the PMI function; under structured low\-rank data models we obtain improved rates attained by moderate\-width encoders\. Finally, we establish a fast calibration rate from contrastive excess risk to downstream retrieval error under a density\-ratio Tsybakov noise condition\.

## On the Provable Emergence of Hierarchical Concept Structure in CLIP Embeddings

**Authors:** Nghia Nguyen; Tianjiao Ding; Lachlan MacDonald; Rene Vidal

**ID:** 153853 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IFmLNK0lpW>) | [PDF](<https://openreview.net/pdf?id=IFmLNK0lpW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153853>)

Contrastive vision\-language models such as CLIP are trained to align images and text, not to represent taxonomies\. Yet empirical studies show that CLIP embeddings exhibit a hierarchical geometry aligned with the semantic hierarchy of concepts\. A theoretical characterization of why such hierarchy emerges from a non\-hierarchical objective remains open\. In this paper, we formalize this phenomenon as Hierarchical Angular Separation \(HAS\), a geometric property whereby each non\-leaf concept embedding is more similar to its descendants than to off\-branch concepts\. Empirically, we show that HAS already holds weakly in randomly initialized CLIP image embeddings, suggesting that hierarchical structure may be induced by the raw image geometry, while in text embeddings it emerges only after contrastive training\. To explain this asymmetry between text and image embeddings, we analyze an unconstrained features model in which the image embeddings are fixed and only the text embeddings are trained\. We show that when the image embeddings satisfy HAS with a positive margin, the global minimizer of the contrastive objective induces HAS in the text embeddings, thereby transferring hierarchical structure across modalities\. The key mechanism is the hierarchical co\-occurrence structure of image\-text pairs, which biases text embeddings toward root\-centered image prototypes\. For a linear contrastive loss, we derive a closed\-form solution that makes this mechanism explicit\. We extend the analysis to the InfoNCE loss and establish analogous guarantees under sufficient regularization\. Synthetic experiments validate the theory and show that HAS emerges even beyond the regimes covered by our analysis\.

## From Noise to Diversity: Random Embedding Injection in LLM Reasoning

**Authors:** Heejun Kim; Seungpil Lee; Jewon Yeom; Jaewon Sok; Seonghyeon Park; Jeongjae Park; Taesup Kim; Sundong Kim

**ID:** 155787\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155787

[Paper](<https://openreview.net/forum?id=2tl55s2775>) | [PDF](<https://openreview.net/pdf?id=2tl55s2775>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155787>)

_Abstract unavailable from the accessible public sources._

## Beyond Downstream Scores: Controlled Diagnostics for Point\-Cloud Self\-Supervised Learning Evaluation

**Authors:** Kohsuke Ide; Ryousuke Yamada; Yue Qiu; Yoshihiro Fukuhara; Hirokatsu Kataoka; Yuki Asano; Yutaka Satoh

**ID:** 139098\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139098

[Paper](<https://openreview.net/forum?id=l885Aav1TV>) | [PDF](<https://openreview.net/pdf?id=l885Aav1TV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139098>)

_Abstract unavailable from the accessible public sources._

## Rethinking Incompleteness: Formalizing Protocol Divergence and Train\-Once Learning for Robust IMVC

**Authors:** HAOLU LIU; XIYUE WANG; Xuanting Xie; Liangjian Wen; Zhao Kang

**ID:** 150214\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150214

[Paper](<https://openreview.net/forum?id=ju9V3PfmHR>) | [PDF](<https://openreview.net/pdf?id=ju9V3PfmHR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150214>)

_Abstract unavailable from the accessible public sources._

## Uncertainty\-Aware Fuzzy Graph Contrastive Learning

**Authors:** Xinlan Xu; Fei Hao; Ce Yang; Jiaxing Shang; Jinsong Chen; Jianrui Chen; Hongying Zhang; Aziz Nasridinov

**ID:** 148584\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148584

[Paper](<https://openreview.net/forum?id=wgmbHWOgdy>) | [PDF](<https://openreview.net/pdf?id=wgmbHWOgdy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148584>)

Graph Contrastive Learning \(GCL\) is an effective approach for learning node representations\. However, the intrinsic uncertainty of real\-world graph data introduces significant challenges, as GCL relies on crisp deterministic representations that struggle to capture such ambiguity\. To model graph uncertainty, fuzzy logic has attracted increasing attention due to its mathematical rigor\. Existing methods, however, simply inject fuzzy modeling into the contrastive framework without tailoring data augmentation to the needs of fuzzy representations, resulting in limited discriminability and suboptimal downstream performance\. To address these limitations, we propose a novel Fuzzy Graph Contrastive Learning \(FGCL\) framework for uncertainty\-aware node representation learning\. It adopts a vertex entanglement\-based augmentation strategy to generate tailored multi\-views with controlled perturbations while preserving core graph topology and semantics, mitigating semantic corruption\. We also design a Deep Weighted Fuzzy Graph Convolutional Neural Network \(DWFGCNN\) encoder, which maps crisp features to fuzzy representations via learnable membership functions, explicitly models uncertainty, and resolves the core contradiction that traditional encoders cannot balance discriminability and robustness simultaneously\. Extensive experiments on multiple datasets demonstrate that FGCL consistently outperforms baselines in node classification, community detection, and link prediction tasks, validating its effectiveness in handling uncertainty in graph representation learning\.

## RVLoss: Runoff Vote Loss for Self\-Supervised LiDAR Scene Flow Estimation

**Authors:** Shiming Wang; Liangliang Nan; Julian Kooij; Holger Caesar; Yancong Lin

**ID:** 152605\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152605

[Paper](<https://openreview.net/forum?id=RsacOS2C69>) | [PDF](<https://openreview.net/pdf?id=RsacOS2C69>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152605>)

LiDAR scene flow estimates point\-wise motion between two consecutive scans, referred to as the source and target\.  Leading self\-supervised methods typically minimize the Chamfer loss, the nearest neighbor distance between the flow\-compensated source and the target\.  However, nearest\-neighbor search does not enforce motion rigidity, often leading to inconsistent flows within object instances\.  Existing approaches address this issue with additional regularization terms, but flow consistency among points remains limited, especially for large objects\. We propose RVLoss, a self\-supervised loss that incorporates motion rigidity by design, through a runoff vote mechanism\.  Our key observation is that the point\-wise motion, calculated from nearest neighbor search, can often be grouped into a small set of dominant flow candidates by voting \(top\-k voting\.  Furthermore, when compensating the source by these candidates, the flow that best represents the underlying rigid motion often yields the highest consensus after a second voting \(top\-1 voting\)\. Based on this insight, we incorporate the two\-stage runoff vote into loss design and create cluster\-wise rigid flows and subsequent free\-form flows as pseudo\-labels for self\-supervised learning\.  RVLoss can be seamlessly integrated into existing feedforward architectures\.  Experiments on the Argoverse2 2026 Challenge show that models trained with RVLoss achieve state\-of\-the\-art performance among self\-supervised approaches, outperforming baseline models trained with alternative loss designs by 20\\%\. Moreover, cross\-dataset evaluations demonstrate consistent performance improvements across four additional datasets\.  Code will be released upon acceptance\.

## Beyond Eigenfunctions: Divergence Principal Functions for Representation Learning

**Authors:** Ritabrata Ray; Sahil Dharod; Burak Varıcı; Nicholas Boffi; Pradeep Ravikumar

**ID:** 153338\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153338

[Paper](<https://openreview.net/forum?id=M4JVbTCh2k>) | [PDF](<https://openreview.net/pdf?id=M4JVbTCh2k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153338>)

Recent work has shown that contrastive representation learning can be understood as estimating a positive\-pair, PMI\-like kernel, and that spectral factorization of this kernel yields useful eigenfunction representations\. This paper asks what happens beyond squared\-error spectral geometry\. Modern representation learning objectives are rarely pure $\\ell\_2$ kernel\-approximation objectives: they use conditional KL, InfoNCE, JS/NCE, Brier, Hellinger, least\-squares ratio fitting, and other statistical discrepancies\. We show that these discrepancies do not merely provide alternative estimators of the same affinity; they induce different local geometries for the extraction of low\-rank representations\. To formalize this, we introduce divergence principal functions, a geometry\-aware generalization of eigenfunctions\. Eigenfunctions are recovered as the special case corresponding to squared\-error geometry\. For smooth discrepancies, we show that divergence principal functions locally solve a weighted spectral approximation problem, with weights given by the curvature of the divergence at the target affinity\. This provides a loss\-consistent bridge from positive\-pair learning objectives to representation geometry and clarifies when spectral/eigenfunction representations are appropriate and when they are mismatched to the training objective\.

## Hitting Time Isomorphism for Multi\-Stage Planning with Foundation Policies

**Authors:** Magnus Victor Boock; Abdullah Akgül; Mustafa Mert Çelikok; Melih Kandemir

**ID:** 152292\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152292

[Paper](<https://openreview.net/forum?id=U9JnXUgBes>) | [PDF](<https://openreview.net/pdf?id=U9JnXUgBes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152292>)

We present a new operator\-theoretic representation learning framework for offline reinforcement learning that recovers the directed temporal geometry of a controlled Markov process from hitting time observations\. While prior art often produces symmetric distances or fails to satisfy the triangle inequality, our framework learns a Hilbert\-space displacement geometry where expected hitting times are realized as linear functionals of latent displacements\. We prove that this representation exists under latent linear closure and is uniquely identifiable up to a bounded linear isomorphism\. For finite\-dimensional implementations, we show that global hitting\-time error is bounded by one\-step transition error amplified by the environment's transient spectral radius\. Furthermore, we provide finite\-sample guarantees accounting for approximation, statistical complexity, and trajectory\-label mismatch\.  Derived from this theory, we curate Isomorphic Embedding Learning \(IEL\) as a new goal\-agnostic foundation policy learning algorithm that  anchors a HILP\-style consistency objective with explicit hitting\-time regression to ensure that the learned geometry reflects actual decision\-time progress\. This asymmetric and compositional structure enables robust graph\-based multi\-stage planning for long\-horizon navigation\. Our experiments  demonstrate that IEL improves the state of the art of learning foundation policy policies from offline maze locomotion data\.

## SurgVista: Long\-Horizon Surgical World Modeling with Plausible Instrument\-Tissue Dynamics

**Authors:** Wentao Pan; WUYANG LI; Shengyuan Liu; Xinyu Liu; Hengyu Liu; Yixuan Yuan

**ID:** 151752\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151752

[Paper](<https://openreview.net/forum?id=YK5GDKKF4q>) | [PDF](<https://openreview.net/pdf?id=YK5GDKKF4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151752>)

Scaling robot policy learning for autonomous surgery is challenging, as expert demonstrations are expensive and in vivo exploration poses substantial safety risks\. Surgical world models address this by generating realistic, action\-conditioned future frames from an initial observation, but existing methods exhibit two persistent failure modes: \*spatial interaction incoherence\*, where visible instrument contact fails to induce spatially consistent tissue deformation, and \*temporal fidelity collapse\*, where prediction errors compound across autoregressive rollouts and progressively corrupt visual quality\. We present \*\*SurgVista\*\*, a surgical world model that mitigates both failures through two training recipes\. \*Deformation Consistency Regularization\* extracts scene\-point trajectories from training videos and enforces cross\-frame coherence through latent contrastive learning, strengthening physically consistent instrument\-tissue dynamics\. \*Drift Adaptation Training\* mitigates long\-horizon drift by perturbing conditioning frames with online prediction residuals and photometric augmentations calibrated to long\-horizon drift statistics, sustaining visual fidelity over extended rollouts\. To enable rigorous evaluation, we further introduce \*\*SurgWorld\-Bench\*\*, featuring diverse procedure types, long\-range rollouts, and decoupled metrics for instrument\-motion accuracy and tissue\-response fidelity\. Extensive experiments show that SurgVista consistently outperforms state\-of\-the\-art methods across visual quality, temporal consistency, and interaction fidelity, with gains widening as the prediction horizon grows\.

## ImmuVis: Hyperconvolutional Foundation Models for Imaging Mass Cytometry

**Authors:** Dawid Uchal; Marcin Możejko; Krzysztof Gogolewski; Piotr Kupidura; Fabian Ozga; Szymon Łukasik; Jakub Giezgała; Tomasz Nocoń; Kacper Pietrzyk; Robert Pieniuta; Mateusz Sulimowicz; Michał Zmysłowski; Michał Orzyłowski; Tomasz Siłkowski; Karol Zagródka; Eike Staub; Ewa Szczurek

**ID:** 152450\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152450

[Paper](<https://openreview.net/forum?id=T2RPhW9u1M>) | [PDF](<https://openreview.net/pdf?id=T2RPhW9u1M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152450>)

We present ImmuVis, a family of efficient foundation models for imaging mass cytometry \(IMC\), a high\-throughput multiplex imaging technology that handles molecular marker measurements as image channels and enables large\-scale spatial tissue profiling\. Unlike natural images, multiplex imaging lacks a fixed channel space, as real\-world marker sets vary across studies, violating a core assumption of standard vision backbones\. To address this, ImmuVis introduces marker\-adaptive hyperconvolutions that generate convolutional kernels from learned marker embeddings, enabling a single model to operate on arbitrary measured marker subsets without retraining\. We pretrain ImmuVis on the largest IMC dataset to date, IMC17M \(28 cohorts, 24,405 images, 265 markers, over 17M patches\), using self\-supervised masked reconstruction\. ImmuVis outperforms state\-of\-the\-art baselines and ablations in virtual staining and downstream classification tasks at substantially lower compute cost than transformer\-based alternatives, and is the sole model that provides calibrated uncertainty via a heteroscedastic likelihood objective\. These results position ImmuVis as a practical framework for real\-world IMC modeling\.

## Memory\-Driven Contrastive Embedding Enhancement for Fine\-Grained Open\-Set Semi\-Supervised Learning

**Authors:** Yinan Han; Qing\-Yuan Jiang

**ID:** 153470\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153470

[Paper](<https://openreview.net/forum?id=L77YwOI7fI>) | [PDF](<https://openreview.net/pdf?id=L77YwOI7fI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153470>)

_Abstract unavailable from the accessible public sources._

## Breaking Noise Shortcuts in Self\-Supervised Learning via Noise\-Aligned View Generation

**Authors:** Oankar Patil; May Dongmei Wang

**ID:** 153415\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153415

[Paper](<https://openreview.net/forum?id=LVFnNTcwSo>) | [PDF](<https://openreview.net/pdf?id=LVFnNTcwSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153415>)

_Abstract unavailable from the accessible public sources._

## Context\-Aware Generative Imputation for Robust Multimodal Learning in Missing Modality Scenarios

**Authors:** Jungwon Choi; Juho Lee

**ID:** 151257\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151257

[Paper](<https://openreview.net/forum?id=bk4w1XMdSu>) | [PDF](<https://openreview.net/pdf?id=bk4w1XMdSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151257>)

Multimodal models deployed in real\-world settings often suffer from missing data modalities due to acquisition costs, privacy constraints, or sensor failures, leading to severe performance degradation\. Existing approaches based on shared representations or expert routing struggle when modality\-specific information is absent\. A key challenge is that, when a modality is unobserved, the target representation is not uniquely identifiable, making naive latent prediction prone to degenerate or collapsed solutions\. We propose Cross\-modal Embedding Prediction and Alignment \(CEPA\), a framework that addresses missing modalities through task\-driven latent representation imputation rather than raw input synthesis\. CEPA employs masked representation learning with data\-driven masking patterns and a context\-conditional distribution alignment objective that stabilizes latent prediction and prevents representation collapse\. We evaluate CEPA on the MIMIC multimodal benchmark spanning EHR time\-series, chest X\-rays, and clinical notes, across three clinical prediction tasks under both controlled \(MCAR\) and naturally occurring \(MNAR\) modality absence\. CEPA consistently outperforms prior missing\-modality methods, with ablations confirming the contribution of adaptive masking and context\-conditional alignment\.

## Generate in Reconstruction Space, Match in Semantic Space: Transport Geometry for One\-Step Generation

**Authors:** Hugues Van Assel; Edward De Brouwer; Saeed Saremi; Gabriele Scalia; Aviv Regev

**ID:** 150849\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150849

[Paper](<https://openreview.net/forum?id=etwEuQt1jd>) | [PDF](<https://openreview.net/pdf?id=etwEuQt1jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150849>)

Generative modeling and self\-supervised representation learning \(SSL\) optimize structurally different objectives: generative training rewards distributional fidelity, while SSL rewards semantic coherence\.  Yet recent work repeatedly finds that SSL features improve generative training, though the mechanism of this synergy remains unclear\. Here, we study the benefits of SSL in generative modeling in the framework of one\-step generation where the role of representation is explicit: frozen SSL features are used to match generated samples to real data\.  We use the Sinkhorn divergence in that feature space, providing a tractable surrogate for the Wasserstein distance, the population\-level discrepancy approximated by Fr\\'echet\-style evaluation metrics \(such as FID\)\. We find that this objective becomes highly effective when computed in a semantically structured SSL feature space \(a 39$\\times$ reduction in ImageNet FID\)\.  We trace this behavior primarily to matching estimation: semantic SSL features that suppress nuisance reconstruction details induce a more compact geometry, making distribution matching more tractable\. As a consequence, the best training SSL features need not match the features used by the evaluation metric\. In particular, we show that using Inception as the feature extractor can improve FID while degrading matching stability and sample quality, revealing a form of metric hacking\. Using extensive experiments on ImageNet, we identify which SSL feature families lead to best generation performance and show that matching stability is a quantitative criterion for selecting them\.

## Contrast encodes inductive bias: separating slow noise from dynamics in predictive representation learning

**Authors:** Paarth Gulati; Ilya Nemenman

**ID:** 149353\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149353

[Paper](<https://openreview.net/forum?id=qhXEAOv8zQ>) | [PDF](<https://openreview.net/pdf?id=qhXEAOv8zQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149353>)

Self\-supervised methods that learn representations and predict dynamics fully in the latent space, such as JEPA, have been shown to confuse slowly varying noise with the dynamical signals they aim to capture\. Specifically, when noise features remain approximately constant within each trajectory, contrastive predictive objectives preferentially encode these features instead of the true latent variables governing the system\. The learned representation then becomes dominated by trajectory\-specific noise, so downstream performance degrades with noise strength and does not improve even as the number and duration of training trajectories increase\. We argue that this failure is a property of the objective itself, shared by a long line of contrastive predictive objectives that sample negatives across trajectories\. To illustrate this generality, we study the failure mode and its remedy in two settings: a standard SimCLR\-style JEPA on a synthetic moving\-dot dataset, and DySIB, a recently introduced method designed for extracting physically interpretable representations of dynamics, on movies of a rigid\-body pendulum\. When negatives are instead sampled within a single trajectory, the slow noise can no longer distinguish frames within that trajectory, removing the predictive shortcut\. Training one encoder simultaneously on many such trajectories then forces it to encode the variables relevant for the dynamics, with longer trajectories yielding better representations even for strong slow noise\. Our results point toward principles for designing contrastive predictive objectives in dynamical representation learning, especially for physical systems with noisy experimental observations\.

## Factorized Self\-Supervised Speech Tokenization

**Authors:** Benjamin Van Niekerk; Jean\-Philippe Letendre; Nicol Visser; Hugo Seuté; Herman Kamper; Mirco Ravanelli

**ID:** 149827\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149827

[Paper](<https://openreview.net/forum?id=n0PEFDbLxC>) | [PDF](<https://openreview.net/pdf?id=n0PEFDbLxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149827>)

Speech tokenizers convert audio into discrete units, enabling language models to process and generate speech\. The goal is to learn compact, text\-like representations while preserving enough detail to reconstruct a speaker’s voice and delivery\.  We propose Facto: a factorized tokenizer that disentangles time\-varying information \(content and prosody\) from static components \(speaker identity and recording conditions\)\. We build on a recent linear factorization method for self\-supervised features, extending it to handle unseen speakers\.  Then, we cluster the factorized space and train a lightweight decoder to reconstruct audio from the resulting tokens\.  By removing the static components before clustering, our tokens are more robust to small noise perturbations\.  We validate this by testing token stability under various noise conditions\. Next, we theoretically analyze Facto's convergence and scaling properties, quantifying how the factorization improves with the number of training speakers\.  Finally, we evaluate Facto on a range of downstream tasks\. We show that greater token stability translates into improved text\-to\-speech performance and competitive results in voice conversion and spoken language modeling\.

## Environment\-Robust Representation Learning with Empirical Bayes

**Authors:** Yuli Slavutsky; Matthew Shen; Bohan Wu; David Blei

**ID:** 151010\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151010

[Paper](<https://openreview.net/forum?id=dcFIgr2nN2>) | [PDF](<https://openreview.net/pdf?id=dcFIgr2nN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151010>)

We consider multi\-environment prediction problems\. We assume the environments change the distribution of a latent variable, while the mechanisms generating observed covariates and targets remain stable conditional on that variable\. For example, hospitals or clinical cohorts may differ in the prevalence of latent patient states, even though the relationships between those states, physiological measurements, and outcomes remain unchanged\.  Given a dataset from multiple environments, we formulate a Bayesian model for such problems and derive the corresponding variational objective\. We show that this objective decomposes into per\-environment terms and an additional cross\-environment balancing term induced by the model's structure\. We use an empirical Bayes method to set the prior and incorporate it into the objective\. Based on this objective, we develop an amortized variational algorithm for posterior approximation, and use the resulting learned latent variables to form predictions in new environments\. We study our approach through simulations and real\-world studies of astronomical source identification, microbiome\-based disease detection, and ICU sepsis prediction\. Across these settings, our method outperforms previous approaches for prediction in new environments\.

## Microstructure Descriptor Fields as Supervision for Scientific Images

**Authors:** Mohamed Wahib; Du Wu; Cong Ma; Isaac Lyngaas; Xiao Wang; Enzhi Zhang; Peng Chen; Satoshi Matsuoka

**ID:** 149911\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149911

[Paper](<https://openreview.net/forum?id=mHVHXzcbr7>) | [PDF](<https://openreview.net/pdf?id=mHVHXzcbr7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149911>)

Scientific images are often governed less by exact pixel fidelity than by preservation of microstructure: morphology, connectivity, anisotropy, interface complexity, phase organization, and characteristic length scales\. Yet modern image\-learning objectives, including masked image modeling and reconstruction losses, supervise models in pixel, token, or latent feature space rather than in the space of scientific observables\. We introduce MICROFIELD, a supervision framework that represents a scientific image by a field of microstructure descriptors computed over spatial regions\. A descriptor field can be induced on a uniform grid, a quadtree, an octree, a learned partition, or a hierarchy produced by a high\-resolution image model\. Rather than proposing a new masked autoencoder architecture, MICROFIELD contributes an objective\-level mechanism: it trains models to preserve local descriptors, cross\-scale descriptor transitions, and level\-wise descriptor distributions\. Because descriptor fields are defined over region systems rather than model architectures, MICROFIELD applies to uniform grids, adaptive partitions, and hierarchical models alike\. The framework is compatible with self\-supervised pretraining, supervised learning, and reconstruction; in this paper, we focus on masked self\-supervised pretraining as the primary instantiation\. MICROFIELD provides a practical path toward physics\-inspired representation learning for scientific images without requiring explicit governing equations or domain labels\.

## Diversity Curves for Graph Representation Learning

**Authors:** Katharina Limbeck; Nadja Häusermann; Martin Carrasco; Guy Wolf; Bastian Rieck

**ID:** 154536\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154536

[Paper](<https://openreview.net/forum?id=CrzgnsQq7F>) | [PDF](<https://openreview.net/pdf?id=CrzgnsQq7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154536>)

Graph\-level representations are crucial tools for characterising structural differences between graphs\. However, comparing graphs with different cardinalities, even when sampled from the same underlying distribution, remains challenging\. Unsupervised tasks in particular require interpretable, scalable, and reliable size\-aware graph representations\. Our work addresses these issues by tracking the structural diversity of a graph across coarsening levels\. The resulting graph embeddings, which we denote \*diversity curves\*, are interpretable by construction, efficient, and directly comparable across coarsening hierarchies\. Specifically, we track the \*spread\* of graphs, a novel isometry invariant that is inherently well\-suited for encoding the metric diversity and geometry of graphs\. We utilise edge contraction coarsening and prove that this improves expressivity, thus leading to more powerful graph\-level representations than structural descriptors alone\. Demonstrating their utility over a range of baseline methods in practice, we use \*diversity curves\* to \(i\) cluster and visualise simulated graphs across varying sizes, \(ii\) distinguish the geometry of single\-cell graphs, \(iii\) compare the structure of molecular graph datasets, and \(iv\) characterise geometric shapes\.

## MCM\-DM: Towards Better Spatio\-Temporal Event Representation Learning via Discrete Morse Theory

**Authors:** Yuanheng Zhang; Jennifer Rozenblit; Chenguang Yang; Jaidev Goel; Yulia Gel; Yuzhou Chen

**ID:** 153274 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MT51T0yAra>) | [PDF](<https://openreview.net/pdf?id=MT51T0yAra>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153274>)

Spatio\-temporal point processes \(STPPs\)  represent a random collection of points where each point corresponds to the time and location of an event\. STPPs are widely used to describe a wide range of phenomena, from earthquakes to wildfires to crime occurrence to disease outbreaks\. Generative models have recently emerged as a new powerful paradigm for STPPs, demonstrating %due to their exceptional  highly competitive generalization capabilities and promising potential for systematic uncertainty quantification\.  However, existing generative approaches  primarily rely on unimodal numerical data, overlooking the geographic context in which events occur and failing to capture critical spatial and temporal patterns within the STPP\. To address these limitations, we propose Morse\-aware Cross\-Modality learning within Diffusion Model, or \\textbf\{MCM\-DM\}\. MCM\-DM represents a cross\-modality diffusion framework based on the discrete Morse and cobordism theories that augments STPP modeling with geographic scene understanding\. MCM\-DM consists of three key components: \(i\) a vision\-language model\-based geographic encoder that extracts semantic embeddings from satellite tiles at each event location; \(ii\) an attention\-based fusion mechanism to integrate critical structure representation with spatio\-temporal embeddings, and \(iii\) a Morse\-theoretic topological aligner which aligns latent representations of critical events with spatio\-temporal embedding space\. We demonstrate the MCM\-DM utility on 8 diverse STPP datasets from Earth sciences, epidemiology, urban mobility, and crime analytics, highlighting its cross\-domain versatility\. The code is available at\~\\url\{https://anonymous\.4open\.science/r/MCM\-DM\-CF83\}\.

## Fed\-AGA: An Anchor Graph Alignment Framework for Federated Unaligned Multi\-view Clustering

**Authors:** Yichi Zhang; bohang sun; Hao Wei; Kai Di; Zhen Yang; Gengyu Lyu

**ID:** 155141 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=82yEbCFK30>) | [PDF](<https://openreview.net/pdf?id=82yEbCFK30>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155141>)

Federated Multi\-view Clustering \(FMVC\) enables privacy\-preserving cross\-view fusion from distributed multi\-view data, where each client holds one view of samples and participates in the server's fusion without exposing raw data\.  In practice, existing FMVC methods face two key challenges: \(1\) the collected samples often show unaligned correspondence across views, especially under distributed collection; and \(2\) the gap between higher data privacy and lower computation cost remains hard to reconcile\. To address these issues, we propose an Anchor Graph Alignment Framework for Federated Unaligned Multi\-view Clustering \(\*\*Fed\-AGA\*\*\), which employs a coarse\-to\-fine alignment strategy on lightweight anchor graphs to achieve misalignment\-robust cross\-view fusion while bridging the gap between data privacy and computation cost\. Specifically, in the coarse alignment stage, we introduce an anchor\-based graph generation module to generate an anchor graph on each client and upload them to the server for category\-wise alignment by a designed topology\-aware alignment module, which distills topology components as category\-exclusive signatures to guide and achieve ideal category\-wise alignment\. In the next fine alignment and fusion stage, we design an attention\-based alignment module to encourage each sample to pay attention to highly similar samples for sample\-wise alignment, and the fine\-aligned results are contrastively fused into a cross\-view consistent anchor graph for clustering\. Extensive experiments on multiple datasets demonstrate that Fed\-AGA achieves state\-of\-the\-art performance among related methods, while theoretical analysis offers theoretical motivation for two key components\.

## SS3D: End2End Self\-Supervised 3D from Web Videos

**Authors:** Marwane Hariat; Gianni Franchi; David Filliat; Antoine Manzanera

**ID:** 149077\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149077

[Paper](<https://openreview.net/forum?id=t3RKBvndwm>) | [PDF](<https://openreview.net/pdf?id=t3RKBvndwm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149077>)

We present SS3D, a web\-scale SfM\-based self\-supervision pretraining pipeline for feed\-forward 3D estimation from monocular video\. Our model jointly predicts depth, ego\-motion, and intrinsics in a single forward pass and is trained/evaluated as a coherent end\-to\-end 3D estimator\. To stabilize joint learning, we use an intrinsics\-first two\-stage schedule and a unified single\-checkpoint evaluation protocol\. Scaling SfM self\-supervision to unconstrained web video is challenging due to weak multi\-view observability and strong corpus heterogeneity; we address these with a multi\-view signal proxy \(MVS\) used for filtering and curriculum sampling, and with expert training distilled into a single student\. Pretraining on YouTube\-8M \(\~ 100M frames after filtering\) yields strong cross\-domain zero\-shot transfer and improved fine\-tuning performance over prior self\-supervised baselines\. We release the pretrained checkpoint and code\.

## MCAS: Signal\-Processing\-Based Multi\-View Contrastive Learning for Acoustic Sensing

**Authors:** Bingzhi Wang; Jiajun Yu; Dengke Zhong; Jiaming Liu; Xiong Li; Hongbo Liu; Jie Yang

**ID:** 156122\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156122

[Paper](<https://openreview.net/forum?id=0FCfr7P0vM>) | [PDF](<https://openreview.net/pdf?id=0FCfr7P0vM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156122>)

_Abstract unavailable from the accessible public sources._

## Building Transformation Layers for Riemannian Neural Networks

**Authors:** Ziheng Chen

**ID:** 151412 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=arer1bhGjQ>) | [PDF](<https://openreview.net/pdf?id=arer1bhGjQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151412>)

Recently, deep neural networks on manifold\-valued representations have garnered significant attention across various machine learning applications\. One recent focus is the generalization of Euclidean fully connected \(FC\) and convolutional layers to non\-Euclidean geometries\. However, previous approaches typically focus on a few selected manifolds and rely on specific properties of the target manifold\. In contrast, this work proposes a framework for constructing FC and convolutional layers over computationally tractable Riemannian spaces\. This framework incorporates several previous FC layers across different geometries as special cases and is instantiated on ten representative manifolds, including three hyperbolic models, five geometries of the symmetric positive definite \(SPD\) manifold, and two Grassmannian perspectives\. Experiments on different manifolds demonstrate the effectiveness and applicability of our approach\.

## Cosine is Human: The Reproducibility Ceiling of Perceptual Similarity

**Authors:** Benjamin TenWolde; Virginia de Sa

**ID:** 139285\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139285

[Paper](<https://openreview.net/forum?id=ZQ6YtLisva>) | [PDF](<https://openreview.net/pdf?id=ZQ6YtLisva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139285>)

NIGHTS is a recent benchmark for human perceptual similarity over objects, scenes, and composition\. DreamSim, the supervised metric introduced with NIGHTS, and later supervised metrics trained on the same data report large gains over self\-supervised baselines\. The standard NIGHTS evaluation uses the unanimous\-agreement subset of a released 100,000\-triplet corpus, leaving weak\-majority and split\-vote triplets outside the headline benchmark\. We evaluate eleven perceptual similarity methods on the full released corpus, analyzing unanimous, weak\-majority, and split\-vote triplets separately\. On the 64,420 non\-tie triplets, cosine distance on a frozen self\-supervised backbone reaches 74\.1% accuracy without training, LoRA fine\-tuning reaches 77–79%, and the DreamSim ensemble reaches 80\.7%\. A split\-half reproducibility estimate from the triplet vote counts shows that majority labels reproduce only 70\.1% of the time overall, and only 33–50% on weak\-majority triplets\. The extra accuracy comes from matching the collected votes, not from showing that the metric would better match a new set of human judgments\. The evaluation target is also unstable across task formulations: NIGHTS’ 2AFC similarity labels and JND same/different labels disagree on 51–64% of shared stimuli\. Fine\-tuning changes the feature basis as well, increasing foreground\-only fragility and making DreamSim the most fragile method under rotation, color, and blur\. NIGHTS supports a narrower conclusion: cosine distance on self\-supervised features captures the stable signal currently measurable in these labels\. Additional claims of human alignment require a redesigned benchmark with more votes per triplet, axis\-specific similarity questions, per\-subject statistics, and ablation tests\.

## Emergence of a Shared Canonical Object Frame from In\-the\-Wild Videos

**Authors:** Tom Fischer; Martin Sundermeyer; Adam Kortylewski; Eddy Ilg

**ID:** 149226\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149226

[Paper](<https://openreview.net/forum?id=rzUWi6tqwc>) | [PDF](<https://openreview.net/pdf?id=rzUWi6tqwc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149226>)

Comparing object orientations and positions across different instances requires their poses to be expressed in a shared canonical frame\.  Establishing such frames has traditionally required manual annotation, creating a scaling bottleneck that limits category and instance diversity\. We show that a shared canonical frame can instead emerge from self\-supervised training on object\-centric videos captured in the wild, using only noisy camera poses from Structure\-from\-Motion\. Our key idea is to route all training sequences through a shared geometric bottleneck: a coarse canonical mesh that carries no category\-specific detail\. By learning dense correspondences from image pixels to this mesh, and estimating per\-sequence alignments from noisy SfM geometry, a common canonical frame emerges from multi\-view consistency and the semantic priors of the feature extractor, without any canonical pose labels or category conditioning\. Trained in a self\-supervised manner on $160\{,\}000$ in\-the\-wild object videos, our method achieves competitive accuracy on category\-level pose estimation benchmarks compared to methods that rely on canonical pose supervision\.

## Generalized Laplacian in Spectral Seriation on Manifold Data

**Authors:** Ruizi Wu; Wanjie Wang; Jinchi Lv

**ID:** 154052\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154052

[Paper](<https://openreview.net/forum?id=GZLpAjTrJj>) | [PDF](<https://openreview.net/pdf?id=GZLpAjTrJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154052>)

_Abstract unavailable from the accessible public sources._

## RTEB: An Overfitting\-Resistant Benchmark for Embedding Model Evaluation

**Authors:** Sahil Verma; Minghan Li; Andrew Gaut; Yujie Qian; Kaidi Cao; Zhenmei Shi; Kenneth Enevoldsen; Roman Solomatin; Isaac Chung; Tom Aarsen; Apoorva Joshi; Emilia Garcia\-Casademont; Michael Günther; Niklas Muennighoff; Yevhen Kostiuk; Fődi Zoltán; Tengyu Ma; Frank Liu

**ID:** 139103\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139103

[Paper](<https://openreview.net/forum?id=ktfYzbgPfX>) | [PDF](<https://openreview.net/pdf?id=ktfYzbgPfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139103>)

Embedding models are central to modern information retrieval, retrieval\-augmented generation, and downstream NLP systems, yet their evaluation remains unreliable: widely used benchmarks such as BEIR and MTEB rely on fully public datasets, making them vulnerable to overfitting that inflates scores without corresponding gains in real\-world generalization\. We introduce RTEB, a retrieval\-focused embedding benchmark designed to address these limitations\. Unlike MTEB's broad multi\-task scope, RTEB is purpose\-built for retrieval \-\- the setting most critical to RAG pipelines and agentic systems\. RTEB emphasizes underrepresented yet high\-impact domains, particularly code and agentic code retrieval, and keeps a large portion of its datasets private to structurally prevent direct test\-set overfitting\. We evaluate 20 models on 48 datasets \(20 public, 28 private\) spanning six domains and four languages\. Rankings on RTEB diverge substantially from BEIR and MTEB \($\\rho = 0\.38$\), agentic code retrieval emerges as the hardest domain with the best model reaching only 0\.48 NDCG@10, and domain\-specialized models fail to outperform strong generalists on any domain\. Together, these design choices and findings position RTEB as a more reliable, discriminative, and future\-proof benchmark for embedding model evaluation\.

## Decoupling Label Shift and Surrogate Gradient Errors for Robust Federated Spiking Neural Networks

**Authors:** Zouquan Chen; Yifei Yang; Lidong Zheng; Zhiming Fang; Yuchen Zheng

**ID:** 154393\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154393

[Paper](<https://openreview.net/forum?id=DuuJjNysv1>) | [PDF](<https://openreview.net/pdf?id=DuuJjNysv1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154393>)

Federated Spiking Neural Networks \(FedSNNs\) provide an energy\-efficient and privacy\-preserving learning paradigm for edge intelligence\. However, their robustness under Non\-IID data is limited by a coupled failure mode: label shift distorts membrane potential distributions, drives neurons away from gradient\-sensitive regions, and further amplifies surrogate gradient errors, which destabilizes federated optimization\. To address this problem, this paper proposes Spatio\-Temporal Spiking Adaptive Thresholds \(ST\-SAT\), a framework that mitigates the coupling between label shift and surrogate gradient errors through coordinated neuron\-level adaptation and client\-\-server knowledge alignment\. At the neuron level, ST\-SAT introduces the Spatio\-Temporal Parametric Leaky Integrate\-and\-Fire \(ST\-PLIF\) neuron, which adaptively calibrates firing thresholds, membrane potentials, and decay dynamics to keep local neuronal responses within effective gradient regions\. At the collaborative interaction level, ST\-SAT adopts a Dual\-Scale Knowledge Distillation strategy that combines adaptive logit\-level distillation with feature\-level alignment of neuronal statistics, thereby reducing class distribution bias and improving knowledge consistency across heterogeneous clients\. Extensive experiments on three benchmark datasets show that ST\-SAT consistently improves both global model performance and client\-local performance, with particularly strong gains under severe label shift\. These results validate the effectiveness of the proposed framework for robust federated SNN learning\. The anonymous code link is https://anonymous\.4open\.science/r/ST\-SAT\-4771\.

## AudioSphere: Towards Self\-Supervised Spatial Audio Representation Models

**Authors:** Göksenin Yüksel; Marcel A\. J\. van Gerven; Kiki van der Heijden

**ID:** 151452\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151452

[Paper](<https://openreview.net/forum?id=aa8QwF7hqk>) | [PDF](<https://openreview.net/pdf?id=aa8QwF7hqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151452>)

Recent audio embedding models learn general\-purpose representations that transfer across clip\- and frame\-level tasks, yet they operate almost exclusively on single\-channel signals and are blind to spatial structure\. Spatial audio models capture that structure but rely on clip\-level supervision or contrastive objectives, yielding embeddings unsuitable for frame\-level tasks like sound event detection and localization \(SELD\)\. We argue this dichotomy is not fundamental: patch\-level spatial self\-supervision can jointly learn acoustic and spatial features at both temporal granularities\. We introduce AudioSphere, a multi\-channel masked autoencoder trained on Ambisonics recordings that reconstructs both spectral content and directional cues via a joint spatiotemporal masking strategy that masks both time\-frequency patches and intensity vectors\. AudioSphere supports frame\-level predictions while producing strong clip\-level representations via aggregation\. Alongside the model, we release RealSELD, a standardized benchmark for evaluating frozen backbones on real\-world multi\-channel SELD\. AudioSphere enables, for the first time, SELD with a frozen self\-supervised backbone, while matching or exceeding prior general\-purpose audio embedding models on the HEAR benchmark\.

## Half\-Truths Break Similarity\-Based Retrieval

**Authors:** Bora Kargi; Arnas Uselis; Seong Joon Oh

**ID:** 154568 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cdi1G7I9ds>) | [PDF](<https://openreview.net/pdf?id=Cdi1G7I9ds>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154568>)

When a text description is extended with an additional detail, image\-text similarity should drop if that detail is wrong\. We show that CLIP\-style dual encoders often violate this intuition: appending a plausible but incorrect object or relation to an otherwise correct description can increase the similarity score\. We call such cases \\emph\{half\-truths\}\. On the verified COCO evaluation set, CLIP prefers the correct shorter description only 41\.0\\% of the time, and performance drops to 28\.2\\% when the added detail is a relation\. We trace this vulnerability to weak supervision on caption parts: contrastive training aligns full sentences but does not explicitly enforce that individual entities and relations are grounded\. We propose CS\-CLIP \(Component\-Supervised CLIP\), which decomposes captions into entity and relation units, constructs a minimally edited foil for each unit, and fine\-tunes the model to score the correct unit above its foil while preserving standard dual\-encoder inference\. CS\-CLIP raises half\-truth accuracy to 78\.2\\% and improves average performance on established compositional benchmarks by 5\.7 points, suggesting that reducing half\-truth errors aligns with broader gains in compositional understanding\.

## ORCA: Orthogonal Residual Consensus Alignment for Multi\-View Clustering

**Authors:** Xiaojian Ding; Xian Li; Xiaoying Zhu; Lin Zhao; Kaixiang Wang

**ID:** 151531 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZzLbU0tREZ>) | [PDF](<https://openreview.net/pdf?id=ZzLbU0tREZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151531>)

Deep multi\-view clustering often struggles with inter\-view feature redundancy and dimensionality collapse during iterative representation fusion\. To address these limitations, we propose Orthogonal Residual Consensus Alignment \(ORCA\)\. First, a Semantic Incremental Recurrent Fusion \(SIRF\) module explicitly separates shared redundancy from complementary residuals via geometric projection\. By employing an adaptive halting mechanism, SIRF autonomously maximizes information gain while avoiding structural collapse\. Second, a Consensus\-Calibrated Hierarchical Contrastive Alignment \(CCHA\) module is introduced to preserve multi\-scale semantics\. It adaptively aligns view\-level, local, and recurrent representations using the global consensus as a semantic anchor\. Consequently, ORCA learns latent representations with robust structural integrity and highly discriminative semantics\. Extensive experiments on multiple benchmarks demonstrate that ORCA consistently outperforms state\-of\-the\-art methods, with comprehensive ablations verifying its robustness\.

## Auditing Single\-Query Recoverability in Self\-Supervised Representations

**Authors:** Zirui Wang; Guangqiang He; PangWu; Peng Wang; Zhenfeng Li; Xianxiang Chen; Lidong Du; Zhen Fang

**ID:** 152886\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152886

[Paper](<https://openreview.net/forum?id=Pera711ODe>) | [PDF](<https://openreview.net/pdf?id=Pera711ODe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152886>)

Modern transformation\-aware self\-supervised representations are routinely scored under protocols that grant the evaluator paired views, augmentation labels, or teacher anchors \-\-\- none of which the deployed predictor ever sees\. We audit the gap that opens once these privileges are removed and only a single query remains\. The finding is a systematic evaluation illusion: on 3DIEBench\-Honest, honest single\-query rotation errors are typically $2\{\-\}3\\times$ as large as native transformation scores, consistently across comparators and matched\-utility thresholds\. To make this gap measurable, we introduce a deployment\-honest evaluation contract specifying a one\-query test interface, matched semantic utility, a strongest\-eligible\-neighbor headline with tail summaries, and explicit privilege accounting\. Theory and experiments are in service of the contract: lower\-bound analysis grounds the contract at the interface level, while a positive control supplies a non\-vacuous upper certificate under declared privileges\. We exercise the contract on a generated law, on 3DIEBench\-Honest, and on PTB\-XL\. The operational conclusion is that native transformation\-aware success is not, on its own, a single\-query deployment certificate\.

## WaveGen: Truly End\-to\-End Waveform Generation via Internal Spectral Trajectory Learning

**Authors:** Sang\-Hoon Lee; Ha\-Yeong Choi

**ID:** 152293\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152293

[Paper](<https://openreview.net/forum?id=U9I8LBgt7t>) | [PDF](<https://openreview.net/pdf?id=U9I8LBgt7t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152293>)

This work proposes WaveGen, a fully end\-to\-end diffusion\-based text\-to\-waveform framework based on Spectral Forcing, which jointly learns an internal spectral trajectory and the target waveform trajectory within a single model, enabling direct end\-to\-end text\-to\-waveform generation\. Unlike recent TTS pipelines, WaveGen does not rely on separately trained or externally decoded intermediate representations, such as neural audio codecs, Mel\-spectrogram vocoders, or VAE\-based latent models\. In addition, WaveGen performs internal text\-speech alignment within a single model, eliminating the need for external alignment modules such as duration predictors\. To preserve a truly end\-to\-end formulation, our framework further avoids dependence on self\-supervised representations, such as BERT\-based text embeddings and Wav2Vec 2\.0\-based semantic representations, as well as semantic distillation methods for training optimization\. To achieve this, we carefully design Spectral Forcing, a model architecture with disentangled diffusion heads, and a training objective based on a multi\-scale spectral $v$\-loss\. We further validate the scalability of end\-to\-end TTS models by scaling the model size from 0\.1B to 0\.4B parameters\. With a single architecture, open\-source data, and one\-stage training without external modules, WaveGen demonstrates fully end\-to\-end waveform generation by achieving promising performance\. In particular, WaveGen achieves a WER of 1\.77, a SIM of 0\.63, and competitive MOS performance on the Seed\-en benchmark\.

## Training\-Free Entangler Selection for Quantum Neural Networks via Hilbert–Schmidt Geometry

**Authors:** WOO SEOB SIM; Yu R Park

**ID:** 149136\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149136

[Paper](<https://openreview.net/forum?id=saIG4QRgnj>) | [PDF](<https://openreview.net/pdf?id=saIG4QRgnj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149136>)

_Abstract unavailable from the accessible public sources._

## Approaching Effective Merging in Model Embedding Space

**Authors:** Wei Chen; Zhenyuan Dong; Qiang Qiu

**ID:** 149693\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149693

[Paper](<https://openreview.net/forum?id=o8ovLEF82T>) | [PDF](<https://openreview.net/pdf?id=o8ovLEF82T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149693>)

_Abstract unavailable from the accessible public sources._

## FuncFormer: Circuit Representation Learning via the Flow of Functional Propagation

**Authors:** Yunjie Ji; Jie Wang; Zhihai Wang; Min Li; Junhua Huang; Zhihao Shi; Feng Wu; Mingxuan Yuan; Jianye Hao

**ID:** 155637\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155637

[Paper](<https://openreview.net/forum?id=46NBp3fllK>) | [PDF](<https://openreview.net/pdf?id=46NBp3fllK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155637>)

_Abstract unavailable from the accessible public sources._

## Learning a Maximum Entropy Model for Visual Textures using Diffusion

**Authors:** Xinyuan Zhao; Eero Simoncelli

**ID:** 154116\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154116

[Paper](<https://openreview.net/forum?id=G8agvphCZJ>) | [PDF](<https://openreview.net/pdf?id=G8agvphCZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154116>)

Visual textures, defined as spatially homogeneous image regions  containing repeated elements \(e\.g\. a field of grass, the bark of a tree\), are ubiquitous in visual scenes and provide important cues for recognizing materials and objects\. Existing texture models extract essential statistics from a single texture image, and can then generate high\-quality samples that are visually similar to the original by matching these statistics\. However, their statistics are either hand\-designed or based on a network pretrained for another purpose \(e\.g\., object recognition\)\. Here, we develop the first principled method for unsupervised learning of a set of statistics that are used to constrain a maximum entropy probability model\. We leverage methods developed for generative diffusion models to derive training and sampling procedures, and compare these to the traditional method of sampling via matching the statistics\. Despite the compactness of our trained model \(512 statistics\), it generates texture images whose quality is as good or better than the current state\-of\-the\-art model \(\~177k statistics\)\. A more direct comparison of the two models, obtained by synthesizing images that are indistinguishable for one model but maximally different for the other, reveals their relative strengths and weaknesses\. Finally, we show that, unlike previous statistical texture models, a straight trajectory in the representation space of our model generates homogeneous texture samples that interpolate smoothly between the features of the two end points\.

## On Reparameterizing the Score Function

**Authors:** Mohammad Hossein Amani; Leonardo Bocchieri; Maxime Peyrard; Clement Hongler; Robert West

**ID:** 151999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WGc94WFesu>) | [PDF](<https://openreview.net/pdf?id=WGc94WFesu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151999>)

Policy gradients for autoregressive sequence models differentiate each token's log\-probability while holding the conditioning history fixed\.  This discards information about how earlier decisions shape later conditional distributions, creating a credit\-assignment bottleneck when rewards are sparse\.  We introduce History\-Reparameterized \(HR\) policy gradients, which replace the frozen prefix in the score function with a differentiable reparameterized or relaxed history, allowing gradients of downstream log\-probabilities to propagate backward through the generated trajectory\. The resulting history\-pathwise term is generally biased when added directly, so we derive Optimal HR \(OHR\), a centered control\-variate estimator with a closed\-form coefficient that minimizes the trace of the gradient variance at the population level\.  The variance reduction is governed by temporal structure in the policy dynamics: random or weakly structured policies provide little benefit, while policies with learned sequential dependencies yield informative history\-pathwise corrections\. For discrete tokens, the choice of relaxation is crucial: embedding\-level relaxation yields substantial variance reduction that grows with horizon, whereas straight\-through Gumbel\-Softmax yields essentially none in our diagnostics\. We validate the method on a Gaussian linear Markov model, a sparse\-reward T\-maze with a recurrent policy, and an autoregressive Transformer model for small Traveling Salesman Problem \(TSP\) instances\.

## Learning Orthonormal Bases for Function Spaces

**Authors:** Hamidreza Kamkari; Mohammad S Nabizadeh; Justin Solomon

**ID:** 155306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZYEKF9qcC>) | [PDF](<https://openreview.net/pdf?id=6ZYEKF9qcC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155306>)

Infinite\-dimensional orthonormal basis expansions play a central role in representing and computing with function spaces due to their favorable linear algebraic properties\. However, common bases such as Fourier or wavelets are fixed and do not adapt to the structure of a given problem or dataset\. In this paper, we aim to represent these bases with neural networks and optimize them\. Our key idea is that any target infinite\-dimensional orthonormal basis can be viewed either as a point on the Lie manifold of the orthogonal group, or equivalently, as the endpoint of a continuous path on that manifold that connects a reference basis, e\.g\. Fourier, to that target\.  Paths on the Lie manifold satisfy ordinary differential equations \(ODEs\) governed by skew\-adjoint integral operators\. Using neural networks to define finite\-rank generators of such ODEs allows us to parameterize and optimize orthonormal bases in function space\. While relying on finite\-rank generators to model infinite operators might seem restrictive, we prove a universality result: even with a rank\-2 generator, the integrated solutions of the ODE are dense in the orthogonal group under the appropriate operator topology\. In other words, for any target orthonormal basis, there exists a path originating from a reference basis and driven by finite\-rank generators that gets arbitrarily close to that target basis\. We demonstrate the flexibility of our framework by transforming the Fourier basis into the principal components of a functional dataset, eigenfunctions of linear operators, or dynamic modes of energy\-preserving physical simulations\.

## DynaSub: Adaptive Subgrouping for Scalable Representation Learning

**Authors:** Tina Behrouzi; Sana Tonekaboni; Rahul Krishnan; Anna Goldenberg

**ID:** 149429\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149429

[Paper](<https://openreview.net/forum?id=q7e6qi0tQK>) | [PDF](<https://openreview.net/pdf?id=q7e6qi0tQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149429>)

Real\-world observational data often contain existing or emerging heterogeneous subpopulations that deviate from global patterns\. Without the ability to detect Out\-of\-Distribution \(OOD\) data and model underlying structure, systems risk failing to adapt to emerging patterns, leading to inaccurate or potentially harmful predictions\. We introduce DynaSub, a Dynamic Subgrouping Variational Autoencoder that couples latent representation learning with subgroup discovery\. DynaSub operates on pre\-trained foundation models or regular encoders, learning latent embeddings that define subgroup structure and are iteratively refined to enhance subgroup separability and OOD sensitivity\. It incorporates a nonparametric clustering mechanism directly in latent space, enabling the number and structure of subgroups to adapt dynamically during training\. DynaSub achieves competitive performance on near\- and far\-OOD detection across ResNet and ViT\-based foundation encoders, reducing false positive rates by up to 10\\% under covariate shift while maintaining high AUROC across multiple OOD benchmarks, and excelling in class\-OOD settings where entire classes are unseen during training\.

## DART: Zero\-Shot Dual\-Side Alignment Routing for LLM Performance\-Cost Tradeoffs

**Authors:** Yuejun Jiao; Yanxin Yang; Boyu Wang; Yonghao Yang; Hao Shen; Mingsong Chen

**ID:** 155299\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155299

[Paper](<https://openreview.net/forum?id=6cPZndmGS6>) | [PDF](<https://openreview.net/pdf?id=6cPZndmGS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155299>)

As the ecosystem of Large Language Models \(LLMs\) rapidly expands, LLM routing has become essential for dynamically balancing performance and cost\. However, existing methods fail to simultaneously satisfy the three core criteria of an ideal router, i\.e\., high routing precision, minimal intrinsic operational overhead, and zero\-shot onboarding of new models\. These methods rely heavily on surface\-level semantics and discrete ID mappings, conflating mere semantic similarity with underlying capability requirements and thereby precluding zero\-shot, training\-free generalization\. To address these limitations, we propose DART, a novel zero\-shot routing framework grounded in dual\-side alignment to optimize LLM performance\-cost tradeoffs\. Instead of relying on direct semantic matching, we decouple the routing process into a demand\-supply alignment problem within a shared low\-rank latent capability space\. Specifically, on the supply side, DART constructs latent capability embeddings for candidate models, using an initialization mechanism to anchor newly introduced models in this latent space via metadata and family\-graph prior, without retraining\. On the demand side, a dedicated encoder explicitly distills the query's directional capability requirements and inherent difficulty into a latent demand embedding\. This decoupled representation allows routing decisions to be computed via a lightweight dot\-product operation between the demand and capability embeddings, modulated by query\-adaptive cost sensitivity, minimizing overhead\. Extensive experiments across comprehensive benchmarks demonstrate that DART achieves state\-of\-the\-art utility under diverse cost constraints, satisfying the three core criteria with exceptional robustness in cold\-start scenarios\.

## Breaking feature collapse in self\-supervised time series encoder

**Authors:** Özgün Turgut; Daniel Rueckert

**ID:** 155178\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155178

[Paper](<https://openreview.net/forum?id=7iz3dma6VT>) | [PDF](<https://openreview.net/pdf?id=7iz3dma6VT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155178>)

General\-purpose time series encoders such as \\texttt\{OTIS\} and \\texttt\{MOMENT\} promise a single backbone that transfers across domains, but they do not scale and rely on manually tagged domain labels at tokenisation\. We trace both symptoms to a single pathology: under masked\-data\-modelling supervision the encoder's output patch tokens \\textit\{partially collapse\}, with mean off\-diagonal pair\-wise cosine similarity stabilising at $0\.68$ in \\texttt\{OTIS\} and the encoder's effective rank capped accordingly\. This is the natural consequence of supervising the encoder only in data space, which leaves no constraint against redundant token directions in the representation space\. We introduce \\texttt\{OTISv2\}, which suppresses the collapse by complementing the masked\-reconstruction objective with two representation\-space terms \-\-\- a self\-distillation loss against an exponential\-moving\-average teacher and a KoLeo regulariser \-\-\- and replaces \\texttt\{OTIS\}'s per\-domain variate embeddings with register tokens to remove the label dependency\. The resulting encoder pulls mean patch\-to\-patch cosine similarity from $0\.63$ to $0\.58$, scales monotonically from $7\.1\\,$M to $40\\,$M parameters where its predecessor plateaus, and dominates general\-purpose baselines on $143$ uni\- and multi\-variate datasets from the UEA and UCR archives from a single label\-free checkpoint\. We release code and pre\-trained weights upon acceptance\.

## OTIS: Learning High\-Quality Time Series Features With Tiny Encoders

**Authors:** Özgün Turgut; Philip Müller; Martin Menten; Daniel Rueckert

**ID:** 156785\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156785

[Paper](<https://openreview.net/pdf?id=WW206A1Tru>) | [PDF](<https://openreview.net/pdf?id=WW206A1Tru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156785>)

We introduce OTIS, an open time series encoder that yields high\-quality time series features for downstream deployment on any system, including resource\-constrained wearables and industrial sensors\. Currently, the development of powerful general\-purpose encoders relies on the scaling laws hypothesis, using large encoder sizes to memorise the heterogeneous distributions of multi\-domain training data\. However, this reliance on scale creates a barrier to real\-world utility, rendering deployment on resource\-constrained systems infeasible due to strict memory, energy, and latency constraints\. Surprisingly, we find that tailoring standard masked modelling pre\-training to time series properties yields a tiny 7\.1M encoder that matches the state\-of\-the\-art performance of 54× larger encoders across 162 tasks, while requiring 10× less memory, 43× less energy, and 37× lower latency\. To achieve this without the capacity tax, we introduce three novel components: \(1\) a domain\-aware tokeniser to resolve conflicting semantics within multi\-domain training data; \(2\) a dual masking strategy to capture spatiotemporal structures and temporal causality; and \(3\) a structure\-aware objective to decouple feature learning from modelling noise\. Consequently, OTIS produces high\-quality time series features that enable state\-of\-the art performance in discriminative tasks and even extend seamlessly to generative tasks at minimal additional cost\. To democratise access to powerful time series features on any system, we release our code and pre\-trained weights\.

## From Topology to Retrieval: Decoding Embedding Spaces with Unified Signatures

**Authors:** Florian Rottach; William Rudman; Bastian Rieck; Harrisen Scells; Carsten Eickhoff

**ID:** 155821\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155821

[Paper](<https://openreview.net/forum?id=2cbJBFU7At>) | [PDF](<https://openreview.net/pdf?id=2cbJBFU7At>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155821>)

Studying the shape of text embedding spaces enhances our understanding  of model behavior and how geometry affects downstream task performance\.  While a range of topological and geometric metrics have been explored,  they are typically analyzed in isolation, and the connections between  them remain largely unknown\. In this paper, we present  Unified Topological Signatures \(UTS\), a holistic framework for characterizing the  structure of embedding spaces\. We evaluate our method across a wide  range of text embedding models and retrieval datasets, finding that UTS outperform  individual metrics in downstream performance prediction\. Through several  experiments, we demonstrate that UTS are superior at characterizing  embedding spaces, can predict model\-specific properties and bias from  geometry, and reveal novel insights into representational similarity  that challenge the Platonic Representation Hypothesis\.

## Generalized Laplacian in Spectral Seriation on Manifold Data

**Authors:** Ruizi Wu; Wanjie Wang; Jinchi Lv

**ID:** 154052\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154052

[Paper](<https://openreview.net/forum?id=GZLpAjTrJj>) | [PDF](<https://openreview.net/pdf?id=GZLpAjTrJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154052>)

_Abstract unavailable from the accessible public sources._

## RTEB: An Overfitting\-Resistant Benchmark for Embedding Model Evaluation

**Authors:** Sahil Verma; Minghan Li; Andrew Gaut; Yujie Qian; Kaidi Cao; Zhenmei Shi; Kenneth Enevoldsen; Roman Solomatin; Isaac Chung; Tom Aarsen; Apoorva Joshi; Emilia Garcia\-Casademont; Michael Günther; Niklas Muennighoff; Yevhen Kostiuk; Fődi Zoltán; Tengyu Ma; Frank Liu

**ID:** 139103\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139103

[Paper](<https://openreview.net/forum?id=ktfYzbgPfX>) | [PDF](<https://openreview.net/pdf?id=ktfYzbgPfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139103>)

Embedding models are central to modern information retrieval, retrieval\-augmented generation, and downstream NLP systems, yet their evaluation remains unreliable: widely used benchmarks such as BEIR and MTEB rely on fully public datasets, making them vulnerable to overfitting that inflates scores without corresponding gains in real\-world generalization\. We introduce RTEB, a retrieval\-focused embedding benchmark designed to address these limitations\. Unlike MTEB's broad multi\-task scope, RTEB is purpose\-built for retrieval \-\- the setting most critical to RAG pipelines and agentic systems\. RTEB emphasizes underrepresented yet high\-impact domains, particularly code and agentic code retrieval, and keeps a large portion of its datasets private to structurally prevent direct test\-set overfitting\. We evaluate 20 models on 48 datasets \(20 public, 28 private\) spanning six domains and four languages\. Rankings on RTEB diverge substantially from BEIR and MTEB \($\\rho = 0\.38$\), agentic code retrieval emerges as the hardest domain with the best model reaching only 0\.48 NDCG@10, and domain\-specialized models fail to outperform strong generalists on any domain\. Together, these design choices and findings position RTEB as a more reliable, discriminative, and future\-proof benchmark for embedding model evaluation\.

## Decoupling Label Shift and Surrogate Gradient Errors for Robust Federated Spiking Neural Networks

**Authors:** Zouquan Chen; Yifei Yang; Lidong Zheng; Zhiming Fang; Yuchen Zheng

**ID:** 154393\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154393

[Paper](<https://openreview.net/forum?id=DuuJjNysv1>) | [PDF](<https://openreview.net/pdf?id=DuuJjNysv1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154393>)

Federated Spiking Neural Networks \(FedSNNs\) provide an energy\-efficient and privacy\-preserving learning paradigm for edge intelligence\. However, their robustness under Non\-IID data is limited by a coupled failure mode: label shift distorts membrane potential distributions, drives neurons away from gradient\-sensitive regions, and further amplifies surrogate gradient errors, which destabilizes federated optimization\. To address this problem, this paper proposes Spatio\-Temporal Spiking Adaptive Thresholds \(ST\-SAT\), a framework that mitigates the coupling between label shift and surrogate gradient errors through coordinated neuron\-level adaptation and client\-\-server knowledge alignment\. At the neuron level, ST\-SAT introduces the Spatio\-Temporal Parametric Leaky Integrate\-and\-Fire \(ST\-PLIF\) neuron, which adaptively calibrates firing thresholds, membrane potentials, and decay dynamics to keep local neuronal responses within effective gradient regions\. At the collaborative interaction level, ST\-SAT adopts a Dual\-Scale Knowledge Distillation strategy that combines adaptive logit\-level distillation with feature\-level alignment of neuronal statistics, thereby reducing class distribution bias and improving knowledge consistency across heterogeneous clients\. Extensive experiments on three benchmark datasets show that ST\-SAT consistently improves both global model performance and client\-local performance, with particularly strong gains under severe label shift\. These results validate the effectiveness of the proposed framework for robust federated SNN learning\. The anonymous code link is https://anonymous\.4open\.science/r/ST\-SAT\-4771\.

## AudioSphere: Towards Self\-Supervised Spatial Audio Representation Models

**Authors:** Göksenin Yüksel; Marcel A\. J\. van Gerven; Kiki van der Heijden

**ID:** 151452\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151452

[Paper](<https://openreview.net/forum?id=aa8QwF7hqk>) | [PDF](<https://openreview.net/pdf?id=aa8QwF7hqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151452>)

Recent audio embedding models learn general\-purpose representations that transfer across clip\- and frame\-level tasks, yet they operate almost exclusively on single\-channel signals and are blind to spatial structure\. Spatial audio models capture that structure but rely on clip\-level supervision or contrastive objectives, yielding embeddings unsuitable for frame\-level tasks like sound event detection and localization \(SELD\)\. We argue this dichotomy is not fundamental: patch\-level spatial self\-supervision can jointly learn acoustic and spatial features at both temporal granularities\. We introduce AudioSphere, a multi\-channel masked autoencoder trained on Ambisonics recordings that reconstructs both spectral content and directional cues via a joint spatiotemporal masking strategy that masks both time\-frequency patches and intensity vectors\. AudioSphere supports frame\-level predictions while producing strong clip\-level representations via aggregation\. Alongside the model, we release RealSELD, a standardized benchmark for evaluating frozen backbones on real\-world multi\-channel SELD\. AudioSphere enables, for the first time, SELD with a frozen self\-supervised backbone, while matching or exceeding prior general\-purpose audio embedding models on the HEAR benchmark\.

## Half\-Truths Break Similarity\-Based Retrieval

**Authors:** Bora Kargi; Arnas Uselis; Seong Joon Oh

**ID:** 154568\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154568

[Paper](<https://openreview.net/forum?id=Cdi1G7I9ds>) | [PDF](<https://openreview.net/pdf?id=Cdi1G7I9ds>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154568>)

When a text description is extended with an additional detail, image\-text similarity should drop if that detail is wrong\. We show that CLIP\-style dual encoders often violate this intuition: appending a plausible but incorrect object or relation to an otherwise correct description can increase the similarity score\. We call such cases \\emph\{half\-truths\}\. On the verified COCO evaluation set, CLIP prefers the correct shorter description only 41\.0\\% of the time, and performance drops to 28\.2\\% when the added detail is a relation\. We trace this vulnerability to weak supervision on caption parts: contrastive training aligns full sentences but does not explicitly enforce that individual entities and relations are grounded\. We propose CS\-CLIP \(Component\-Supervised CLIP\), which decomposes captions into entity and relation units, constructs a minimally edited foil for each unit, and fine\-tunes the model to score the correct unit above its foil while preserving standard dual\-encoder inference\. CS\-CLIP raises half\-truth accuracy to 78\.2\\% and improves average performance on established compositional benchmarks by 5\.7 points, suggesting that reducing half\-truth errors aligns with broader gains in compositional understanding\.

## Beyond Generation: Unlocking Discriminative Representations from Diffusion Models

**Authors:** Haowen Cui; Ge Wu; Shuo Chen; Yikai Ge; Ge Gao; Xiang Li; Jun Li; Jian Yang

**ID:** 150350\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150350

[Paper](<https://openreview.net/forum?id=in565dKueK>) | [PDF](<https://openreview.net/pdf?id=in565dKueK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150350>)

_Abstract unavailable from the accessible public sources._

## RAPTOR: Ridge\-Adaptive Logistic Probes

**Authors:** Ziqi Gao; Yaotian Zhu; Qingcheng Zeng; Xu Zhao; Ziqing Wang; Feng Ruan; Kaize Ding

**ID:** 152988\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152988

[Paper](<https://openreview.net/forum?id=OpxC93zuD0>) | [PDF](<https://openreview.net/pdf?id=OpxC93zuD0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152988>)

_Abstract unavailable from the accessible public sources._

## NOFE – Neural Operator Function Embedding

**Authors:** Lars Uebbing; Harald Lykke Joakimsen; Siyan Chen; Georgios Leontidis; Kristoffer Wickstrøm; Michael Kampffmeyer; Sébastien Lefèvre; Arnt B Salberg; Robert Jenssen

**ID:** 149024 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tQ6I4ZWHFJ>) | [PDF](<https://openreview.net/pdf?id=tQ6I4ZWHFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149024>)

_Abstract unavailable from the accessible public sources._

## Beyond the Readout: Reservoir State Statistics for Model\-Space Learning under Sparse Observations

**Authors:** Ao Chen; Yijing Lu; Pengpeng Chen

**ID:** 152483 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Skj69JdWAO>) | [PDF](<https://openreview.net/pdf?id=Skj69JdWAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152483>)

_Abstract unavailable from the accessible public sources._

## StylePlan: Style\-Conditioned Intent Planning for Zero\-Shot Coordination

**Authors:** Xiao Su; Jian Zhou

**ID:** 152367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TahqPwogCI>) | [PDF](<https://openreview.net/pdf?id=TahqPwogCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152367>)

Zero\-shot coordination requires agents to collaborate with previously unseen partners without test\-time fine\-tuning or explicit communication\. A persistent difficulty is that partner behavior contains information at multiple timescales: stable conventions such as role preference or spatial habit, and fast local intent such as the next object to collect or deliver\. Most partner\-conditioned policies compress these signals into a single latent embedding, which can blur long\-term convention with short\-term action evidence\. We propose \\textbf\{StylePlan\}, a partner modeling framework that separates slow partner style from fast partner intent and combines them through conflict\-aware arbitration\. StylePlan builds an online behavioral fingerprint, predicts short\-horizon partner intent, forms a style\-conditioned intent prior, and uses the disagreement between prior and immediate evidence to modulate a recurrent actor\-critic policy\. On the verified Overcooked V2 artifacts, StylePlan obtains the best reported average cross\-play among methods with available entries under the legacy evaluator\. We additionally provide a scan\-based JAX evaluation with unseen\-partner XP, within\-episode partner switches, unified SP/FCP reruns, and wired module ablations\. The results show that StylePlan is most reliable as an online adaptation mechanism: it improves recovery and drop under partner switches, while the current implementation still needs broader unified reruns to establish a stronger XP claim\.

