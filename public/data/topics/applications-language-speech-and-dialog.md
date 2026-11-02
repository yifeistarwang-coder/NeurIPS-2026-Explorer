# Applications / Language, Speech and Dialog

应用 / 语言、语音与对话

196 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Mitigating Knowledge Conflicts in Retrieval\-Augmented Generation via Inference\-Time Representation Editing

**Authors:** Dahyun Jung; Jaehyung Seo; Heuiseok Lim

**ID:** 148202 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zbapcKkECb>) | [PDF](<https://openreview.net/pdf?id=zbapcKkECb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148202>)

Retrieval\-Augmented Generation \(RAG\) has been widely adopted to enable Large Language Models \(LLMs\) to ground their responses in external knowledge sources\. Nonetheless, recent studies show that conflicts between the retrieved external knowledge and the model’s parametric knowledge can lead to hallucinatory outputs, and this problem is exacerbated when the retrieved documents contain noise\. In this work, we propose Conflict\-Aware Representation Editing \(CARE\), an inference\-time representation editing method for improving LLM robustness under noisy knowledge conflict settings\. CARE learns a latent editing direction from intermediate representations associated with correct and incorrect generations, and uses this direction to mitigate conflict\-associated activation patterns during inference\. We evaluate CARE across Question Answering \(QA\) benchmarks and LLMs, showing improvements over retrieval\-based and conflict\-mitigation baselines, especially under noisy retrieval conditions\.

## Remember Your Trace: Memory\-Guided Long\-Horizon Agentic Framework for Consistent and Hierarchical Repository\-Level Code Documentation

**Authors:** Suyoung Bae; Jaehoon Lee; Changkyu Choi; YunSeok Choi; Jee\-Hyong Lee

**ID:** 154827 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ae5q87uyOE>) | [PDF](<https://openreview.net/pdf?id=Ae5q87uyOE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154827>)

_Abstract unavailable from the accessible public sources._

## Efficient Streaming Audio\-Visual Target Speaker Extraction for Real\-World Acoustic Scenes

**Authors:** Wendi Sang; Kai Li; Yifan Li; Jianqiang Huang; Xiaolin Hu

**ID:** 149515 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pYHqkfI3QP>) | [PDF](<https://openreview.net/pdf?id=pYHqkfI3QP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149515>)

_Abstract unavailable from the accessible public sources._

## Predictive–Generative Drift Decomposition for Speech Enhancement and Separation

**Authors:** Julius Richter; Yoshiki Masuyama; Christoph Boeddeker; Takahiro Edo; Gordon Wichern; Jonathan Le Roux

**ID:** 148915 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDy9sLEeWb>) | [PDF](<https://openreview.net/pdf?id=uDy9sLEeWb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148915>)

We propose a plug\-and\-play framework for speech enhancement and separation that augments predictive methods with a generative speech prior\. Our approach, termed Stochastic Interpolant Prior for Speech \(SIPS\), builds on stochastic interpolants and leverages their flexibility to bridge predictive and generative modeling\. Specifically, we decompose the interpolation dynamics into a task\-specific drift and a stochastic denoising component, allowing a predictive estimate to be integrated directly into the generative sampling process\. This results in a mathematically grounded framework for combining strong pretrained predictors with the expressive power of generative models\. To this end, we train a score model using only clean speech, yielding a degradation\-agnostic prior that can be reused across tasks\. During inference, the predictor provides a deterministic drift that steers the sampling process toward a task\-consistent estimate, while the score model preserves perceptual naturalness\. Unlike prior hybrid approaches, which typically rely on architecture\-specific conditioning and are tied to particular predictors or degradation settings, SIPS provides a unified framework that generalizes across predictors and additive degradation tasks\. We demonstrate its effectiveness for both speech enhancement and speech separation using recent predictors such as SEMamba and FlexIO\. The proposed method consistently improves perceptual quality, achieving gains up \+1\.0 NISQA for speech separation\.

## WavFlow: Flowing Through Waveforms for Audio Generation

**Authors:** Feiyan Zhou; Luyuan Wang; Shoufa Chen; Zhe Wang; Zhiheng Liu; Yuren Cong; Xiaohui Zhang; Fanny Yang; Belinda Zeng

**ID:** 152430 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAxLVhUYlj>) | [PDF](<https://openreview.net/pdf?id=TAxLVhUYlj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152430>)

Modern audio generation predominantly relies on latent\-space compression, introducing additional complexity and potential information loss\. In this work, we challenge this paradigm with WavFlow, a framework that generates high\-fidelity audio directly in raw waveform space without intermediate representations\. To overcome the inherent difficulties of modeling high\-dimensional and low\-energy signals, we reshape audio into 2D token grids through waveform patchify and introduce amplitude lifting to align signal scales, enabling stable optimization via direct x\-prediction in flow matching\. To capture complex semantic alignment and temporal synchronization, we leverage an automated data pipeline to curate 5M high\-quality video\-text\-audio triplets, allowing the model to learn fine\-grained acoustic patterns from scratch\. Experimental results show that WavFlow achieves state\-of\-the\-art results on the video\-to\-audio benchmark VGGSound \(FD\_PaSST 55\.82, IS\_PANNs 17\.40, DeSync 0\.44\) and the text\-to\-audio benchmark AudioCaps \(FD\_PANNs 10\.63\), outperforming established latent\-based methods\. Our work demonstrates that such intermediate compression is not a prerequisite for high\-quality synthesis, offering a simpler and more scalable alternative for multimodal audio generation\.

## Geometric Alignment without Functional Equivalence: A Layer\-wise Analysis of the Speech\-Text Modality Gap

**Authors:** Ming\-Hao Hsu; Xiaohai Tian; Jun Zhang; Lu Lu; Yuxuan Wang; Zhizheng Wu

**ID:** 153576 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KNuSWirJEG>) | [PDF](<https://openreview.net/pdf?id=KNuSWirJEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153576>)

_Abstract unavailable from the accessible public sources._

## Hearing is Believing? Evaluating and Analyzing Audio Language Model Sycophancy with SYAUDIO

**Authors:** Junchi Yao; Lokranjan Lakshmikanthan; Annie Zhao; Danielle Zhao; Shu Yang; Zikang Ding; Di Wang; Lijie Hu

**ID:** 148254 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGOpgI7plw>) | [PDF](<https://openreview.net/pdf?id=zGOpgI7plw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148254>)

_Abstract unavailable from the accessible public sources._

## Rethinking Entropy Allocation in LLM\-based ASR: Understanding the Dynamics between Speech Encoders and Large Language Models

**Authors:** Yuan Xie; Jiaqi Song; Xianliang Wang; Ming Lei; Jie Gao

**ID:** 154756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BBvPhHF8Mj>) | [PDF](<https://openreview.net/pdf?id=BBvPhHF8Mj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154756>)

Integrating large language models \(LLMs\) into automatic speech recognition \(ASR\) has become a dominant paradigm\. Although recent LLM\-based ASR models have shown promising performance on public benchmarks, it remains challenging to balance recognition quality with latency and overhead, while hallucinations further limit real\-world deployment\. In this study, we revisit LLM\-based ASR from an entropy allocation perspective and introduce three encoder\-side diagnostics to characterize how training paradigms shape uncertainty reduction across the speech encoder\-LLM interface\. To remedy entropy\-allocation inefficiencies in prevailing approaches, we propose a capability\-boundary\-aware multi\-stage training strategy that targets parameter efficiency and robustness to hallucinations\. Specifically, we redesign the pretraining strategy to alleviate the speech\-text modality gap, and further introduce an iterative asynchronous SFT stage between alignment and joint SFT to preserve functional decoupling and constrain encoder representation drift\. Experiments on various benchmarks show that our method achieves competitive performance against state\-of\-the\-art models using only 2\.3B parameters, while also effectively mitigating hallucinations through our decoupling\-oriented design\.

## Actionable Hallucination Detection: Translating Latent Uncertainty into Agentic Critique

**Authors:** Sanidhya Vijayvargiya; Rahul Lokesh

**ID:** 155358 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6CdA8QbHL5>) | [PDF](<https://openreview.net/pdf?id=6CdA8QbHL5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155358>)

Large Language Models \(LLMs\) deployed as AI agents frequently exhibit a task\-completion bias, executing hallucinated, undesired actions to force a resolution rather than expressing uncertainty\. Existing detection methods fail to provide actionable, real\-time correction as they either do not localize the hallucinations or incur prohibitive inference latency\. We introduce the Latent Critic, a lightweight low\-rank adapter \(LoRA\) that operates concurrently with a frozen base LLM's generation to actively restructure the transformer's residual stream\-\-\-amplifying epistemic uncertainty signals and translating them into localized, natural language feedback within a single sequence\. By refining the base model's native uncertainty signals, this manipulation of the latent space enables highly reliable, granular detection without the overhead of secondary inference loops\. Mechanistic analysis via activation patching and layer\-wise probing shows that this rank\-invariant behavior restructures pre\-existing uncertainty geometry into a linearly separable representation\. Using tool\-calling as an instantiation of granular hallucinations, we validate the detection and downstream improvements enabled by the Latent Critic architecture across Qwen and Llama\-based models\. Demonstrating superior real\-time efficacy, our approach significantly outperforms equivalent\-scale external detectors and internal probes in isolating hallucinations \(0\.870 vs\. 0\.695 F1\), achieving &gt;80% accuracy in localization \(e\.g\., ungrounded: date\)\. When deployed in a closed\-loop ReAct environment, the Critic acts as a zero\-latency guardrail, intercepting hallucinations before execution to prevent undesired actions while simultaneously enabling efficient agent self\-correction\.

## Task Success Is Not Enough: Side\-effect\-Aware Evaluation of Tool\-Using Language Model Agents

**Authors:** Jiaju Huang; Shaobin Chen; Xinglong Liang; Xinyu Ma; Hao YANG; Yue Sun; Wei Ke; Tao Tan

**ID:** 138911 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJdBs3VVTg>) | [PDF](<https://openreview.net/pdf?id=xJdBs3VVTg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138911>)

Tool\-using language model agents are usually evaluated by whether they finish the user's task\. That metric misses a common failure: an agent can complete the requested work while also taking an unauthorized side\-effecting action, such as writing to the wrong object, expanding the scope of the request, or contacting an unintended recipient\. We call this failure mode collateral damage \(CD\)\. We introduce SABench \(Side\-effect\-Aware Benchmark\), a benchmark of 201 email, calendar, and ticket tasks\. Each task crosses one of four state structures \(independent, dependent, externally reachable, cross\-tool\) with one of four trap families \(ambiguity, mis\-targeting, cascade harm, overreach\), and each task has a deterministic trace\-based oracle for both goal satisfaction and authorization compliance\. Across 2,211 model\-task pairs from 11 frontier LLMs spanning major commercial and open model families, 15\.2% of all runs incur CD, with risk concentrated in ambiguity tasks \(38\.8% violation rate\) while non\-ambiguous traps average 8\.4% CD\. Among goal\-satisfied runs, 12\.8% still produce unauthorized writes\. Cross\-tool and dependent states have about twice the CD rate of independent states\. CD rates vary by 4\.7x across models at comparable goal rates, which suggests that task success alone is a poor proxy for safe tool use\. The SABench task corpus is released at https://huggingface\.co/datasets/anon\-sabench\-2026/sabench; the traces, oracle, code, and analysis pipeline are released at https://anonymous\.4open\.science/r/sabench\-artifact\.

## Adaptive Compression and Targeted Perturbation: A Unified Framework for Generalized Audio Deepfake Detection

**Authors:** Jianqiao Cui; haoxian zhu; Yanghao Zhang; Hanbiao Meng

**ID:** 151194 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cFddukqYcW>) | [PDF](<https://openreview.net/pdf?id=cFddukqYcW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151194>)

Existing audio deepfake detection \(ADD\) methods frequently struggle with limited generalization, as fixed bottleneck architectures fail to adapt to the heterogeneous information densities inherent in diverse spoofing artifacts\. Moreover, standard augmentation often incurs a pathological robustness\-accuracy trade\-off\. In this paper, we propose a unified ADD framework to address these challenges\. Our approach integrates: \(1\) an Adaptive Audio Feature Integration \(AAFI\) module that dynamically selects optimal latent dimensions via a compression pool and a stochastic exploration mechanism, ensuring flexible representations across multi\-type dynamic attacks; and \(2\) a Mel\-Band Adversarial Perturbation \(Mel\-BAP\) strategy that applies targeted regularization in the mel\-spectrogram domain to encourage the learning of invariant decision boundaries\.   Extensive evaluations on benchmarks including ADD 2022, FakeOrReal, and In\-the\-Wild demonstrate that our Whisper\-small based model achieves a state\-of\-the\-art average Equal Error Rate \(EER\) of 1\.51\\%\. Compared to existing SOTA models such as the 3\-billion\-parameter Resemble\-Detect\-3B\-Omni, our framework reduces parameter count by up to 91\.6\\% while improving average EER by 60\.7\\%\. Notably, the model exhibits exceptional zero\-shot transferability, achieving 3\.91\-\-5\.65\\% EER on unseen languages and maintaining high resilience against real\-world acoustic distortions\. This work provides a scalable and efficient “plug\-in” solution for enhancing trust and security in the audio Web ecosystem\.

## TrajWiki: Source\-Grounded Memory Trajectories for Long\-Horizon Dialogue Agents

**Authors:** Jingyu Sun; Yuyang Xue; Mingyang Li; Zhengtao Yao; Jiachen Li; Yang Cui; Wenhao Cai; Haozhe Liu; Fangying Wang; Magdalene K Montgomery; Syed M Baker; Hongpeng Zhou

**ID:** 155885 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=26nRwIZFcb>) | [PDF](<https://openreview.net/pdf?id=26nRwIZFcb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155885>)

_Abstract unavailable from the accessible public sources._

## AVENUE: Audio\-Video Editing Understanding and Evaluation

**Authors:** Hayeon Kim; Yoojin Jang; Jaejun Yoo

**ID:** 138887 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yhjWPeN5lp>) | [PDF](<https://openreview.net/pdf?id=yhjWPeN5lp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138887>)

_Abstract unavailable from the accessible public sources._

## SMASH: Probing Speech Recognition Robustness via Semantically Targeted Bit Flips

**Authors:** Zafaryab Haider; Md Hafizur Rahman; Aysegul Bumin; Prabuddha Chakraborty

**ID:** 150005 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lUIe5d85AP>) | [PDF](<https://openreview.net/pdf?id=lUIe5d85AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150005>)

Automatic speech recognition \(ASR\) systems are usually judged by aggregate transcript accuracy, but real failures often hinge on meaning: for example, a wrong dose, address, account number, or date can matter more than many harmless word errors\. We introduce SMASH, a framework for finding targeted semantic failures caused by sparse INT8 weight\-bit perturbations, a dominant model data type for ASR edge devices, in quantized sequence\-to\-sequence ASR models\. Given an audio input and a meaning\-critical span,SMASH searches for small weight changes that replace the intended meaning while keeping the transcript readable, plausible, and close to the original output\. Each accepted fault is a certificate that a specific semantic substitution is reachable under a bounded perturbation budget\. Empirical study focuses on numeric and scalar substitutions across three ASR backbones: Whisper\-small\.en \(WS\), Whisper\-large\-v3 \(WLv3\), and SeamlessM4T\-v2\-large \(S\-M4T\); and three corpora: an LLM\-assisted controlled corpus \(LACC\), MultiMed, and LibriSpeech\. On LACC at a 20\-bit budget \($B$\), SMASH\-hybrid accepts numeric substitutions on 24/45 WS targets, 19/44 WLv3 targets, and 5/34 S\-M4T targets; reachability is lower on real\-speech datasets\. In matched LACC budget sweeps tested up to $B=40$, WS reaches its ceiling already at $B=20$, while WLv3 and S\-M4T continue to gain accepted targeted substitutions through $B=40$\. Human validation supports the gate\-based labels: on a 105\-item shared validation set, independent human\-majority labels and a four\-judge large\- language\-model ensemble agree on the composite clean\_success label, with $\\kappa=1\.00$\. The faults are sparse: the pooled median is three INT8 bit flips, with medians of two flips on WS, eleven on WLv3, and twelve on S\-M4T\. Entity and negation pivots are evaluated as secondary evidence in the appendix\. SMASH shifts ASR robustness evaluation from "how much did the transcript change?'' to "which meanings can be changed, how plausibly, and with how few bit flips?''

## UniPrefill: Universal Long\-Context Prefill Acceleration via Block\-wise Dynamic Sparsification

**Authors:** Qihang Fan; Huaibo Huang; zhiyingwu; Bingning Wang; Ran He

**ID:** 152106 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VU9bHYAvdH>) | [PDF](<https://openreview.net/pdf?id=VU9bHYAvdH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152106>)

As large language models \(LLMs\) continue to advance rapidly, they are becoming increasingly capable while simultaneously demanding ever\-longer context lengths\. To improve the inference efficiency of long\-context processing, several novel low\-complexity hybrid architectures have recently been proposed, effectively alleviating the computational burden of long\-context inference\. However, existing research on long\-context prefill acceleration remains predominantly focused on sparse attention mechanisms, which achieve their maximum speedup only on full\-attention models\. When transferred to emerging architectures — such as linear/full attention hybrids or sliding window/full attention hybrids — these prefill acceleration approaches suffer significant performance degradation\. Furthermore, such methods are generally incompatible with continuous batching, making them difficult to integrate into modern inference engines such as vLLM\. To this end, we propose UniPrefill, a prefill acceleration framework applicable to virtually any model architecture, which directly accelerates the model's computation at the token level\. We further implement UniPrefill as a continuous batching operator and extend vLLM's scheduling strategy to natively support prefill\-decode co\-processing for UniPrefill, enabling its seamless integration into vLLM\. UniPrefill achieves up to 2\.1x speedup in Time\-To\-First\-Token \(TTFT\), with the acceleration becoming increasingly pronounced as the number of concurrent requests grows\.

## SpreadsheetBench 2: Evaluating Agents on End\-to\-End Business Spreadsheet Workflows

**Authors:** Jian Zhu; Yuzheng Zhang; Zeyao Ma; Bohan Zhang; Armin Schoepf; Daniel Woloch; Peter Wang; Guangyu Robert Yang; Samuel Jacob; Siddharth Nagisetty; Abhiram Chundru; Jean Lin; Spencer Mateega; Jing Zhang

**ID:** 139155 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hpl1s8KD4Z>) | [PDF](<https://openreview.net/pdf?id=hpl1s8KD4Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139155>)

_Abstract unavailable from the accessible public sources._

## Recon: Reconstruction\-Guided Reasoning Synthesis for User Modeling

**Authors:** Alan Zhu; Mihran Miroyan; Carolyn Wang; Andrew Zhou; Lisa Dunlap; Narges Norouzi; Joseph Gonzalez

**ID:** 152680 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RDVTaTGEKI>) | [PDF](<https://openreview.net/pdf?id=RDVTaTGEKI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152680>)

_Abstract unavailable from the accessible public sources._

## LatentRAG: Latent Reasoning and Retrieval for Efficient Agentic RAG

**Authors:** Yijia Zheng; Marcel Worring

**ID:** 153688 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JWv9VTeebX>) | [PDF](<https://openreview.net/pdf?id=JWv9VTeebX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153688>)

Single\-step retrieval\-augmented generation \(RAG\) provides an efficient way to incorporate external information for simple question answering tasks but struggles with complex questions\. Agentic RAG extends this paradigm by replacing single\-step retrieval with a multi\-step process, in which the large language model \(LLM\) acts as a search agent that generates intermediate thoughts and subqueries to iteratively interact with the retrieval system\. This iterative process incurs substantial latency due to the autoregressive generation of lengthy thoughts and subqueries\. To address this limitation, we propose LatentRAG, a novel framework that shifts both reasoning and retrieval from discrete language space to continuous latent space\. Unlike existing explicit methods that generate natural language thoughts or subqueries token\-by\-token, LatentRAG produces latent tokens for thoughts and subqueries directly from the hidden states in a single forward pass\. We align LLMs with dense retrieval models in the latent space, enabling retrieval over latent subquery tokens and supporting end\-to\-end joint optimization\. To improve transparency and encourage semantically meaningful latent representations, we incorporate a parallel latent decoding mechanism that translates latent tokens back into natural language\. Extensive experiments on seven benchmark datasets show that LatentRAG achieves performance comparable to explicit agentic RAG methods while reducing inference latency by approximately 90%, substantially narrowing the latency gap with traditional single\-step RAG\.

## EsoLang\-Bench: Evaluating Large Language Models via Esoteric Programming Languages

**Authors:** Aman Sharma; Paras Chopra

**ID:** 139789 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4eE8q4LYIm>) | [PDF](<https://openreview.net/pdf?id=4eE8q4LYIm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139789>)

Large language models achieve near\-ceiling performance on code generation benchmarks, yet most of the programming languages used by popular benchmarks such as SWE\-bench and HumanEval \(e\.g\. Python, JavaScript\) are squarely in\-distribution\. They appear at scale in pre\-training corpora and are heavily reinforced during post\-training\. To study LLM performance on unfamiliar programming languages, we introduce EsoLang\-Bench, a benchmark using five esoteric programming languages \(Brainfuck, Befunge\-98, Whitespace, Unlambda, and Shakespeare\)\. All five of our chosen esoteric languages are Turing Complete, so the same algorithmic problems that are solvable in Python or JavaScript are in principle solvable in each of them\. Yet, they are unfamiliar to LLMs which makes them a good proxy for evaluating out\-of\-distribution performance\. The unfamiliarity of esoteric languages comprises of: \(i\) the hard\-by\-design primitives comprising the language; \(ii\) substantially less representation in pre\-training corpora \(340× to over 60,000× fewer public GitHub repositories than Python\); \(iii\) negligible deployment value, which makes targeted inclusion in post\-training data economically irrational\. We evaluate five frontier models across five prompting strategies and find a dramatic capability gap\. The same 80 problems expressed in Python or JavaScript reach 100% accuracy on top frontier models, while the equivalent esoteric versions score only 0–11%\. Few\-shot learning and self\-reflection also fail to close this gap\. EsoLang\-Bench therefore provides a contamination\-resistant testbed for measuring how well frontier models generalise algorithmic problem\-solving to programming languages outside their training distribution\.

## Adaptive Compression and Targeted Perturbation: A Unified Framework for Generalized Audio Deepfake Detection

**Authors:** Jianqiao Cui; haoxian zhu; Yanghao Zhang; Hanbiao Meng

**ID:** 151194\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151194

[Paper](<https://openreview.net/forum?id=cFddukqYcW>) | [PDF](<https://openreview.net/pdf?id=cFddukqYcW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151194>)

Existing audio deepfake detection \(ADD\) methods frequently struggle with limited generalization, as fixed bottleneck architectures fail to adapt to the heterogeneous information densities inherent in diverse spoofing artifacts\. Moreover, standard augmentation often incurs a pathological robustness\-accuracy trade\-off\. In this paper, we propose a unified ADD framework to address these challenges\. Our approach integrates: \(1\) an Adaptive Audio Feature Integration \(AAFI\) module that dynamically selects optimal latent dimensions via a compression pool and a stochastic exploration mechanism, ensuring flexible representations across multi\-type dynamic attacks; and \(2\) a Mel\-Band Adversarial Perturbation \(Mel\-BAP\) strategy that applies targeted regularization in the mel\-spectrogram domain to encourage the learning of invariant decision boundaries\.   Extensive evaluations on benchmarks including ADD 2022, FakeOrReal, and In\-the\-Wild demonstrate that our Whisper\-small based model achieves a state\-of\-the\-art average Equal Error Rate \(EER\) of 1\.51\\%\. Compared to existing SOTA models such as the 3\-billion\-parameter Resemble\-Detect\-3B\-Omni, our framework reduces parameter count by up to 91\.6\\% while improving average EER by 60\.7\\%\. Notably, the model exhibits exceptional zero\-shot transferability, achieving 3\.91\-\-5\.65\\% EER on unseen languages and maintaining high resilience against real\-world acoustic distortions\. This work provides a scalable and efficient “plug\-in” solution for enhancing trust and security in the audio Web ecosystem\.

## TrajWiki: Source\-Grounded Memory Trajectories for Long\-Horizon Dialogue Agents

**Authors:** Jingyu Sun; Yuyang Xue; Mingyang Li; Zhengtao Yao; Jiachen Li; Yang Cui; Wenhao Cai; Haozhe Liu; Fangying Wang; Magdalene K Montgomery; Syed M Baker; Hongpeng Zhou

**ID:** 155885\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155885

[Paper](<https://openreview.net/forum?id=26nRwIZFcb>) | [PDF](<https://openreview.net/pdf?id=26nRwIZFcb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155885>)

_Abstract unavailable from the accessible public sources._

## Enhancing Speech Large Language Models through Reinforced Behavior Alignment

**Authors:** Yansong Liu; Yuan Liu

**ID:** 154532 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CtJ6YRQRlm>) | [PDF](<https://openreview.net/pdf?id=CtJ6YRQRlm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154532>)

Speech large language models \(SpeechLMs\) can process spoken requests, yet still lag behind text\-prompted large language models \(LLMs\) on instruction following and reasoning\. We argue that this gap is not only an ASR or representation problem: the same semantic instruction can induce different response policies when spoken with different speakers, accents, noise conditions, prosody, or disfluencies\. We propose Verifiable Invariant Reinforced Behavior Alignment \(VIRBA\), a reinforcement\-learning framework for aligning SpeechLM behavior across acoustic realizations of the same semantic intent\. VIRBA builds multi\-view spoken instruction groups, scores sampled responses with semantic preference, rule\-verifiable correctness, cross\-acoustic invariance, and adaptive reasoning rewards, and optimizes the model with Cross\-Acoustic Group Relative Policy Optimization \(CA\-GRPO\)\. The resulting objective moves SpeechLM alignment beyond teacher imitation toward robust reasoning policies that remain stable across realistic spoken realizations\. Experiments with recent SpeechLM baselines, disfluency robustness, spoken QA, audio reasoning, and speech\-to\-text translation show the largest gains on reasoning\-heavy and acoustically perturbed spoken prompts\.

## Advancing Affordance\-Grounded Creative Tool Use in Large Multimodal Models

**Authors:** Cheng Qian; Hyeonjeong Ha; Jiayu Liu; Jeonghwan Kim; Emre Can Acikgoz; Bingxuan Li; Kunlun Zhu; Jiateng Liu; Aditi Tiwari; Zhenhailong Wang; Xiusi Chen; Heng Ji

**ID:** 153231 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mo5RsO1diV>) | [PDF](<https://openreview.net/pdf?id=Mo5RsO1diV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153231>)

Large multimodal models \(LMMs\) have advanced rapidly in perception and reasoning, yet it remains unclear whether they can discover visually grounded, physically feasible solutions in open\-ended environments\. We first introduce \*\*MM\-CreativityBench\*\*, a benchmark for affordance\-grounded creative tool use, where models must inspect scenes, entities, and parts to identify non\-obvious object uses grounded in visual evidence\. Our evaluation shows that current LMMs often fail to sustain grounded exploration: they overlook relevant entities, under\-examine critical parts, or hallucinate unsupported attributes\. To address these failures, we propose \*\*affordance\-grounded alignment\*\*, framing creative tool use as a preference learning problem\. Using Direct Preference Optimization and supervision from an affordance knowledge base, we train models to favor visually grounded attribute–affordance reasoning over hallucinated alternatives while improving exploration efficiency\. Our results yield consistent gains in correct entity and part selection, and reduce hallucination and grounding errors\. These findings position grounded creativity as a core capability for future multimodal agents: the ability to adapt to unfamiliar environments and solve problems beyond memorized patterns or surface\-level plausibility, moving closer to real human\-like intelligence\.

## Differentiable Bit\-Widths: Co\-optimizing Pruning and Quantization via SVD for Ultra\-Efficient LLM Compression

**Authors:** Hankyul Kang; Jongbin Ryu

**ID:** 148406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y5tDLoawiV>) | [PDF](<https://openreview.net/pdf?id=y5tDLoawiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148406>)

SVD\-based pruning and quantization have recently emerged as a promising strategy for the ultra\-efficient compression of large language models\. In these methods, compression is performed in two stages: components are first truncated, and the remaining ones are subsequently quantized\. Although this decoupled pipeline benefits from both pruning and quantization, it requires separate optimization for each stage and fails to fully exploit their balance, which can lead to suboptimal performance under aggressive compression\. To address this limitation, we propose a new LLM compression method that co\-optimizes pruning and quantization in a unified framework\. Our key idea is a differentiable method for learning component\-wise bit\-widths, allowing less important components to be assigned 0\-bit precision and pruned away\. Notably, our method performs favorably against two\-stage baselines, even when subjected to extreme quantization settings \($1\.61$ bits\) designed for ultra\-efficiency\. The code will be publicly released upon acceptance\.

## Proactive Instance Navigation with Comparative Judgment for Ambiguous User Queries

**Authors:** Junhyuk Kwon; Seungjoon Lee; Hyejin Park; Kyle Min; Jungseul Ok

**ID:** 153423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LR1XtBSs7q>) | [PDF](<https://openreview.net/pdf?id=LR1XtBSs7q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153423>)

Natural\-language instance navigation becomes challenging when the initial user request does not uniquely specify the target instance\.  A practical agent should reduce the user's burden by actively asking only the information needed to distinguish the intended target from similar distractors, rather than requiring a detailed description upfront\.  Existing approaches often fall short of this goal: they may stop at the first plausible candidate before sufficiently exploring alternatives, or, even after collecting multiple candidates, ask about the target's attributes derived from individual candidates rather than questions selected to distinguish candidates in the pool\. As a result, despite the dialogue, the agent may still fail to distinguish the target from distractors, leading to premature decisions and lengthy user responses\. We propose Proactive Instance Navigation with Comparative Judgment \(ProCompNav\), a two\-stage framework that first constructs a candidate pool and then identifies the target through comparative judgment\.  At each round, ProCompNav extracts an attribute\-value pair that splits the current pool, asks a binary yes/no question, and prunes all inconsistent candidates at once\. This reframes disambiguation from open\-ended target description to pool\-level discriminative questioning, where each question is chosen to narrow the candidate set\.  On CoIN\-Bench, ProCompNav improves Success Rate over interactive baselines with the same minimal input and non\-interactive baselines with detailed descriptions, while substantially reducing Response Length\.  ProCompNav also achieves state\-of\-the\-art Success Rate on TextNav, suggesting that comparative judgment is broadly useful for instance\-level navigation among similar distractors\.

## AudioGS: High\-Fidelity Neural Audio Compression via Continuous Gaussian Splatting

**Authors:** Ron Aluf; Alon Canfi; Eliya Nachmani

**ID:** 149852 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mpOLhvRzOy>) | [PDF](<https://openreview.net/pdf?id=mpOLhvRzOy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149852>)

Neural audio codecs compress waveforms into compact discrete tokens that underpin speech language models, real\-time communication, and large\-scale audio storage\. Almost every dominant design, including residual vector quantization, finite scalar quantization, and single\-codebook variants, follows the VQ\-VAE template by partitioning the encoder latent through a learned codebook or a fixed scalar grid\. We ask whether this partition is necessary\. We introduce GS\-Codec, a neural speech codec whose bottleneck is a parametric signal decomposition rather than a quantizer\. We adapt Gaussian splatting from 3D scene reconstruction to one\-dimensional latents\. An inner optimization loop fits each encoder segment as a weighted sum of 1D Gaussian primitives\. The decoder then reconstructs the waveform from the rendered sum\. To avoid the cost of this iterative inner loop at inference time, we additionally train a lightweight GS Predictor Net that regresses the primitive parameters in a single forward pass\. The encoder and decoder are trained end\-to\-end through the inner loop, with no quantizer anywhere in the training pipeline: the bottleneck is the decomposition itself, and scalar quantization is applied only post\-training to the fitted parameters\. Rather than relying on discrete codebook stages for bitrate control, our representation exposes a smooth rate\-quality tradeoff: a single trained checkpoint supports continuous post\-training bitrate control by varying the number of primitives and the per\-parameter bit depth, with no retraining required\. GS\-Codec outperforms well\-established open\-source codecs such as EnCodec and DAC on speaker similarity \(SIM\), intelligibility \(STOI\), and perceptual quality \(UTMOS\) at comparable bitrates, while achieving comparable semantic performance\.

## Clustering\-Free End\-to\-End Spoof Diarization with Encoder\-Decoder Attractors

**Authors:** Bongsu Jung; Donghee Kim; Wooil Kim

**ID:** 150333 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=itLroDUg0G>) | [PDF](<https://openreview.net/pdf?id=itLroDUg0G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150333>)

Spoof diarization aims to jointly localize spoofed regions and determine which spoofing method generated each segment within a partially spoofed utterance\. Existing approaches rely on modular pipelines that separate localization and clustering, introducing training\-\-inference mismatch and requiring oracle knowledge of the number of spoofing classes at inference time\. We propose \\textbf\{E2E\-SD\}, the first \\emph\{clustering\-free\} end\-to\-end framework for spoof diarization, which reformulates the task as variable\-cardinality temporal set prediction\. E2E\-SD jointly learns localization and class assignment using encoder\-decoder attractors with Hungarian\-matched training, eliminating the need for post\-hoc clustering and oracle class counts\. Our framework dynamically generates class\-specific attractors through an LSTM decoder and estimates the number of active spoofing classes via attractor existence probabilities, requiring no external class\-count information at any stage\. On the PartialSpoof benchmark, E2E\-SD achieves a $\\JER$ of 15\.76\\%, a 41\.6\\% relative improvement over the previous best result \(26\.99\\%\), while operating fully oracle\-free with 88\.7\\% class\-count estimation accuracy\. The largest gain is observed on unknown attacks, where $\\JER$ drops from 49\.02\\% to 21\.00\\% \(57\.1\\% relative improvement\), demonstrating that end\-to\-end optimization with dynamic attractors enables more attack\-agnostic generalization than modular clustering pipelines\.

## She Performs Your Voice: A Unified Speech and Dance Motion Model

**Authors:** Lurui Wang; yongkang cheng; Can Xu

**ID:** 152650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RPt1Yd4luK>) | [PDF](<https://openreview.net/pdf?id=RPt1Yd4luK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152650>)

Expressive performers resonate with audiences because they transform sound into motion: rhythm invites steps, prosody evokes gestures, and energy shapes the flow of the body\. However, existing audio\-driven character systems often reduce audio to a task\-specific condition, separately optimizing for co\-speech gestures or music\-driven dance\. This fragmented view overlooks audio as the shared perceptual driver of performance, making it difficult to generate coherent full\-body motion across speaking, dancing, and their intermediate states\. We present VOXPERFORMER, a unified audio\-to\-motion framework that moves toward a generalized performance foundation model\. Our key insight is that audio is not merely an external condition, but the hidden soul of performance style, governing how motion emerges, evolves, and transitions\. To realize this, VOXPERFORMER introduces a structured motion prior to organize the full\-body performance space, audio\-to\-prior distillation to transform sound into latent motion cues, a memory\-augmented prior to resolve audio\-motion ambiguity, and a decoupled diffusion generator with implicit transition matching for efficient and coherent synthesis\. Experiments on BEAT2 and FineDance show that VOXPERFORMER remains competitive on speech\-driven gesture generation while substantially improving hand\-aware music\-driven dance generation\. User studies further show that participants prefer VOXPERFORMER, indicating stronger audio\-motion correspondence and more natural perceptual resonance\.

## Decoupling Conversational Dynamics in Full\-Duplex Spoken Models through Reinforcement Learning

**Authors:** Yuxin Li; Donghang Wu; Guan\-Ting Lin; Hung\-yi Lee; Chengwei Qin; CHEN CHEN; Zhehuai Chen

**ID:** 151800 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xv1Cz6907L>) | [PDF](<https://openreview.net/pdf?id=Xv1Cz6907L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151800>)

Recent full\-duplex spoken dialogue models have demonstrated compelling progress toward human\-like interaction, enabling agents to respond with low latency, produce backchannels, and handle user barge\-ins\. Yet these improvements in conversational dynamics often come with weaker reasoning and instruction\-following abilities, revealing a potential tension between interactive dynamics and intelligence capability\. In this paper, we argue that such an \*\*intelligence\-\-dynamics\*\* trade\-off is not fundamental: conversational dynamics can instead be learned as a separate real\-time decision policy from human dialogue data\. To this end, we propose DuplexPO, a reinforcement learning \(RL\) framework that decouples when to speak from what to say\. It preserves the semantic response capability of an instruction\-tuned assistant, while optimizing its temporal interaction behavior over selected high\-impact windows from long human conversations\. To quantitatively optimize these dynamics, we formulate the Factorized Conversational Dynamics Reward \(FCDR\) to enable fine\-grained temporal credit assignment for turn initiation, backchanneling, yielding, and regularized participation\. The policy is then optimized with a GRPO\-style objective\. Experiments show that DuplexPO substantially improves full\-duplex behaviors, including timely backchannels, smooth turn\-taking, and barge\-in handling, while maintaining strong reasoning and instruction\-following performance\. Moreover, improvements in dynamics\-oriented metrics are reflected in better user experience, suggesting that optimizing conversational timing as a standalone objective can promote more natural full\-duplex interaction\.

## Geometric Alignment without Functional Equivalence: A Layer\-wise Analysis of the Speech\-Text Modality Gap

**Authors:** Ming\-Hao Hsu; Xiaohai Tian; Jun Zhang; Lu Lu; Yuxuan Wang; Zhizheng Wu

**ID:** 153576\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153576

[Paper](<https://openreview.net/forum?id=KNuSWirJEG>) | [PDF](<https://openreview.net/pdf?id=KNuSWirJEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153576>)

_Abstract unavailable from the accessible public sources._

## Hearing is Believing? Evaluating and Analyzing Audio Language Model Sycophancy with SYAUDIO

**Authors:** Junchi Yao; Lokranjan Lakshmikanthan; Annie Zhao; Danielle Zhao; Shu Yang; Zikang Ding; Di Wang; Lijie Hu

**ID:** 148254\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148254

[Paper](<https://openreview.net/forum?id=zGOpgI7plw>) | [PDF](<https://openreview.net/pdf?id=zGOpgI7plw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148254>)

_Abstract unavailable from the accessible public sources._

## Rethinking Entropy Allocation in LLM\-based ASR: Understanding the Dynamics between Speech Encoders and Large Language Models

**Authors:** Yuan Xie; Jiaqi Song; Xianliang Wang; Ming Lei; Jie Gao

**ID:** 154756\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154756

[Paper](<https://openreview.net/forum?id=BBvPhHF8Mj>) | [PDF](<https://openreview.net/pdf?id=BBvPhHF8Mj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154756>)

Integrating large language models \(LLMs\) into automatic speech recognition \(ASR\) has become a dominant paradigm\. Although recent LLM\-based ASR models have shown promising performance on public benchmarks, it remains challenging to balance recognition quality with latency and overhead, while hallucinations further limit real\-world deployment\. In this study, we revisit LLM\-based ASR from an entropy allocation perspective and introduce three encoder\-side diagnostics to characterize how training paradigms shape uncertainty reduction across the speech encoder\-LLM interface\. To remedy entropy\-allocation inefficiencies in prevailing approaches, we propose a capability\-boundary\-aware multi\-stage training strategy that targets parameter efficiency and robustness to hallucinations\. Specifically, we redesign the pretraining strategy to alleviate the speech\-text modality gap, and further introduce an iterative asynchronous SFT stage between alignment and joint SFT to preserve functional decoupling and constrain encoder representation drift\. Experiments on various benchmarks show that our method achieves competitive performance against state\-of\-the\-art models using only 2\.3B parameters, while also effectively mitigating hallucinations through our decoupling\-oriented design\.

## Actionable Hallucination Detection: Translating Latent Uncertainty into Agentic Critique

**Authors:** Sanidhya Vijayvargiya; Rahul Lokesh

**ID:** 155358\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155358

[Paper](<https://openreview.net/forum?id=6CdA8QbHL5>) | [PDF](<https://openreview.net/pdf?id=6CdA8QbHL5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155358>)

Large Language Models \(LLMs\) deployed as AI agents frequently exhibit a task\-completion bias, executing hallucinated, undesired actions to force a resolution rather than expressing uncertainty\. Existing detection methods fail to provide actionable, real\-time correction as they either do not localize the hallucinations or incur prohibitive inference latency\. We introduce the Latent Critic, a lightweight low\-rank adapter \(LoRA\) that operates concurrently with a frozen base LLM's generation to actively restructure the transformer's residual stream\-\-\-amplifying epistemic uncertainty signals and translating them into localized, natural language feedback within a single sequence\. By refining the base model's native uncertainty signals, this manipulation of the latent space enables highly reliable, granular detection without the overhead of secondary inference loops\. Mechanistic analysis via activation patching and layer\-wise probing shows that this rank\-invariant behavior restructures pre\-existing uncertainty geometry into a linearly separable representation\. Using tool\-calling as an instantiation of granular hallucinations, we validate the detection and downstream improvements enabled by the Latent Critic architecture across Qwen and Llama\-based models\. Demonstrating superior real\-time efficacy, our approach significantly outperforms equivalent\-scale external detectors and internal probes in isolating hallucinations \(0\.870 vs\. 0\.695 F1\), achieving &gt;80% accuracy in localization \(e\.g\., ungrounded: date\)\. When deployed in a closed\-loop ReAct environment, the Critic acts as a zero\-latency guardrail, intercepting hallucinations before execution to prevent undesired actions while simultaneously enabling efficient agent self\-correction\.

## Task Success Is Not Enough: Side\-effect\-Aware Evaluation of Tool\-Using Language Model Agents

**Authors:** Jiaju Huang; Shaobin Chen; Xinglong Liang; Xinyu Ma; Hao YANG; Yue Sun; Wei Ke; Tao Tan

**ID:** 138911\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138911

[Paper](<https://openreview.net/forum?id=xJdBs3VVTg>) | [PDF](<https://openreview.net/pdf?id=xJdBs3VVTg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138911>)

Tool\-using language model agents are usually evaluated by whether they finish the user's task\. That metric misses a common failure: an agent can complete the requested work while also taking an unauthorized side\-effecting action, such as writing to the wrong object, expanding the scope of the request, or contacting an unintended recipient\. We call this failure mode collateral damage \(CD\)\. We introduce SABench \(Side\-effect\-Aware Benchmark\), a benchmark of 201 email, calendar, and ticket tasks\. Each task crosses one of four state structures \(independent, dependent, externally reachable, cross\-tool\) with one of four trap families \(ambiguity, mis\-targeting, cascade harm, overreach\), and each task has a deterministic trace\-based oracle for both goal satisfaction and authorization compliance\. Across 2,211 model\-task pairs from 11 frontier LLMs spanning major commercial and open model families, 15\.2% of all runs incur CD, with risk concentrated in ambiguity tasks \(38\.8% violation rate\) while non\-ambiguous traps average 8\.4% CD\. Among goal\-satisfied runs, 12\.8% still produce unauthorized writes\. Cross\-tool and dependent states have about twice the CD rate of independent states\. CD rates vary by 4\.7x across models at comparable goal rates, which suggests that task success alone is a poor proxy for safe tool use\. The SABench task corpus is released at https://huggingface\.co/datasets/anon\-sabench\-2026/sabench; the traces, oracle, code, and analysis pipeline are released at https://anonymous\.4open\.science/r/sabench\-artifact\.

## Long\-Horizon Agency Belongs in the Harness, Not the Context Window Only

**Authors:** Yi Han; YUANYUAN XU; jusheng zhang; Wenhao Wang

**ID:** 139997 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xSWlOTsbou>) | [PDF](<https://openreview.net/pdf?id=xSWlOTsbou>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139997>)

Long\-horizon agency requires an AI system to preserve task state across hours or days of work, many tool calls, and repeated context resets\. A common response is to scale a single resource: the model’s context window, together with inference\-time reasoning\. We argue that this response conflates long horizon with long context\. Durable long\-horizon state should not live only in the prompt; it should be externalized into the harness, the non\-model infrastructure that manages tools, files, plans, checkpoints, sub\-agents, permissions, and recovery\. Publicly documented long\-running agent systems already rely on such structures, including progress files, plan files, git history, rollback checkpoints, scratchpads, sub\-agent decomposition, and browser\-state checkpoints\. We support this position with three lines of argument\. First, memory\-hierarchy history shows that pressure to scale one working resource repeatedly gave way to externally managed hierarchical state\. Second, we identify five structural mismatches between long\-context scaling and long\-horizon agency: degraded effective context, lossy compaction, a single trust region, no transactional semantics, and no working\-set decomposition\. Third, we map long\-horizon requirements to what context scaling provides and what harness\-managed state must supply\. We conclude by proposing eight harness state\-management patterns and arguing that harness state should become a first\-class research object for long\-horizon agency\.

## How Fine\-Tuning Objectives Shape Layer\-Wise Information in LLM Hallucination Detection

**Authors:** Kaiyang Wan; Forrest Bao; Amin Ahmad; Yuxia Wang

**ID:** 152063 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vlr7fHQiNH>) | [PDF](<https://openreview.net/pdf?id=Vlr7fHQiNH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152063>)

Under matched conditions, classifier\-head fine\-tuning \(\\textsc\{cls\}\) paradigm consistently outperforms the LLM\-as\-Judge sequence\-to\-sequence \(\\textsc\{s2s\}\) on binary hallucination detection\. We trace this gap to the representations induced by the two objectives\. Static analysis shows that \\textsc\{cls\} learns a task\-specific discriminative direction, pushing hidden states into a clear two\-cluster geometry with stronger class separation and linearly decodable label information\. By contrast, \\textsc\{s2s\} relies on the pretrained language\-modeling head to make decisions\. This minimizes the pressure to reorganize representations, leaving the hidden states much closer to the pretrained backbone\. Our analysis also reveals that the \\textsc\{cls\} signal saturates before the final layer, after which upper layers form a plateau of statistically interchangeable and largely redundant representations\. However, endpoint redundancy alone does not show whether these layers are dispensable during training\. Further training\-dynamics analysis reveals 1\) a lower pretrained substrate, 2\) a narrow upper\-middle \\textbf\{InfoWindow\} where task information emerges, and 3\) a later\-synchronizing upper plateau that mirrors this signal\. This mechanism motivates us to remove layers above the InfoWindow\. By truncating roughly 31\\% of the network, we obtain early\-exit models that match or exceed full\-model performance on Qwen3\-4B and 8B\. The same depth\-fractional prescription transfers to Llama\-3\.2\-3B and Mistral\-7B\-v0\.3\. We hope this helps guide efficient task\-specific LLM design\.

## Dialect ASR based on Multi\-View Pseudo\-Parallel Augmentation and Noise\-Robust Contrastive Learning

**Authors:** Jianing Zhou; Ziheng Zeng; Hongyu Gong; Suma Bhat

**ID:** 155164 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7oIszAz46V>) | [PDF](<https://openreview.net/pdf?id=7oIszAz46V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155164>)

Recent advancements in Automatic Speech Recognition \(ASR\) have significantly improved performance for high\-resource languages, yet ASR systems still struggle with low\-resource languages and dialects due to the scarcity of annotated training data\. To address this challenge, we propose a novel framework that enhances the utilization of limited data through a two\-pronged approach: \(1\) a novel data augmentation technique based on a multi\-view pseudo\-parallel strategy, and \(2\) a robust multi\-level contrastive learning framework capable of jointly leveraging semantic and dialect\-specific attributes to improve model effectiveness under noisy conditions\. Our approach effectively generalizes across dialectal variations when dialect data are non\-parallel, allowing acquisition of shared linguistic structures and dialectal distinctions\. Furthermore, our method could be simply transferred to scenarios where dialect data are parallel\. We validate our method by adapting the Whisper\-large model for Swiss German, Chinese and Arabic dialect ASR tasks, demonstrating substantial performance gains\. Specifically, our framework achieves up to a 48\.59% reduction in WER and 23\.16% reduction in CER under non\-parallel conditions, outperforming state\-of\-the\-art baselines\. These results highlight the robustness and adaptability of our approach for low\-resource dialectal ASR\. The data and codes will be public available upon acceptance\.

## Semantic Motion Anchors: Bridging Motion and Meaning in Co\-Speech Gestures

**Authors:** Varsha Suresh; Mohammad Mahdi Abootorabi; Mohamed Salman; M\. Hamza Mughal; Christian Theobalt; Ashwin Ram; Jürgen Steimle; Vera Demberg

**ID:** 154665 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BwJGCsV7Vl>) | [PDF](<https://openreview.net/pdf?id=BwJGCsV7Vl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154665>)

Learning a shared representation between spoken text and gesture is central to co\-speech gesture retrieval, synthesis, and understanding, but remains challenging for semantically meaningful gestures whose communicative intent is not captured by motion alone\. Direct contrastive alignment between transcripts and continuous motion embeddings often overemphasizes low\-level kinematics and misses the symbolic content of semantic gestures\. We propose \\emph\{semantic motion anchors\}, natural\-language abstractions of gesture motion capturing physical form and communicative intent\. Our method discretizes 3D gestures into body\-hand motion primitives, verbalizes them into structured descriptions, and grounds them in the transcript to provide auxiliary contrastive supervision\. On BEAT2, our method improves text\-to\-gesture R@1 by 8\.2\\% over a direct text\-motion baseline and outperforms prior retrieval approaches on text to gesture and gesture to text retrieval directions\. Beyond aggregate retrieval metrics, semantic motion anchor supervision helps retrieve gestures that are semantically meaningful for the spoken query, rather than defaulting to generic motion patterns\. A downstream retrieval\-augmented gesture generation study showed that users significantly preferred gestures retrieved by our approach over a retrieval\-augmented generation baseline, demonstrating that semantically grounded retrieval translates to gestures that better convey communicative intent in downstream generation\.

## Controllable User Simulation

**Authors:** Guy Tennenholtz; Ofer Meshi; Amir Globerson; Uri Shalit; Jihwan Jeong; Craig Boutilier

**ID:** 148816 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uus8MMsekx>) | [PDF](<https://openreview.net/pdf?id=uus8MMsekx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148816>)

Using offline datasets to evaluate conversational agents often fails to cover rare scenarios or to support testing new policies\. This has motivated the use of \\emph\{controllable user simulators\} for targeted, counterfactual evaluation, typically implemented by prompting or fine\-tuning large language models\. In this work, we formalize controllable simulation as a causal inference problem\. By bridging natural language evaluation with off\-policy evaluation methodology, we show that the standard practice of training simulators via supervised fine\-tuning on post\-hoc trajectory labels yields a structurally biased model\. Specifically, these labels are inextricably coupled to the data\-generating behavior policy, injecting a \\emph\{look\-ahead bias\} that breaks causal consistency\. Furthermore, we prove that under policy shift this failure causes the variance of evaluation metrics to explode geometrically, a phenomenon we term \\emph\{controllability collapse\}\. To restore causal consistency, we establish theoretical conditions for accurate simulation and propose practical training mitigations: \\textit\{a priori\} controls, step\-wise dynamic controls, and direct policy\-conditioned learning\. Empirical evaluation confirms that while standard global controls distort conversational distributions and collapse behavioral diversity, our causally grounded simulators eliminate look\-ahead bias, preserve natural variance, and exhibit robust zero\-shot generalization to unseen agent behaviors\.

## Asymmetric Phase Coding Audio Watermarking

**Authors:** Guang Yang; Fengchen Liu; Amir Ghasemian; Zhong Wang; Ninareh Mehrabi; Homa Hosseinmardi

**ID:** 149813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nAf6IJ9PSz>) | [PDF](<https://openreview.net/pdf?id=nAf6IJ9PSz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149813>)

The proliferation of deepfake audio challenges voice\-based authentication systems; passive forensic detectors are sensitive to evolving generative models and to real\-world channel distortions\. We propose Asymmetric Phase Coding \(APC\), a training\-free cryptographic signing layer for audio, designed as a compact and auditable provenance primitive that can stand alone or be stacked with learned watermarks\. APC combines Ed25519 digital signatures \(EdDSA, FIPS 186\-5; 64\-byte signatures\) with Reed–Solomon error correction, pseudo\-random STFT phase\-bin selection, and a redundant quantization\-index\-modulation \(QIM\) code on log\-magnitude differences of adjacent bin pairs, yielding a compact, non\-repudiable, blind\-extractable watermark\. We evaluate APC on 1,000 LibriSpeech test\-clean clips \(10 s each, 44\.1 kHz\) under eight attack configurations – identity, 10% end\-cropping, 20% end\-cropping, 8 kHz low\-pass, 16 kHz round\-trip resampling, FLAC re\-encoding, MP3 at 128 kbps, and OGG\-Vorbis at 128 kbps – and achieve cryptographic verification rates between 97\.5% and 98\.3% on every condition at mean PESQ=3\.02 and tens\-of\-milliseconds CPU latency\. We explicitly compare APC against recent neural baselines \(AudioSeal, WavMark, SilentCipher\), detail the threat model \(forgery resistance vs\. erasure\), characterize the dataset, define all metrics, quantify an adaptive white\-box erasure attack, and release code, keys, and metadata for reproducibility\.

## Reconstructing the Vocal Tract with Differentiable Acoustic Simulation

**Authors:** Eric Chen; Jin Woo Lee; Vincent Sitzmann

**ID:** 151084 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d61YXzFcB9>) | [PDF](<https://openreview.net/pdf?id=d61YXzFcB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151084>)

The human vocal tract, the cavity consisting of one's throat, mouth, lips opening, etc\., filters one's voice to create the sounds we know as speech\. In this paper, we present a differentiable and GPU parallelizable acoustic simulator that synthesizes speech by propagating sound along an acoustic tube representation of the vocal tract, and via its gradients, solves the inverse problem: reconstructing the geometry of their vocal tract solely from the sound it produces\. Although learning the inverse mapping between geometry and sound is notoriously non\-convex, we discover that gradient descent succeeds with three technical contributions: \(1\) we design a frequency domain formulation of the vocal tract's fluid dynamics that is 70x more GPU parallelizable than finite differences in time, \(2\) we integrate a differentiable model for turbulence to synthesize consonants, and \(3\) similar to prior work in implicit neural representations \(INRs\) and neural radiance fields \(NeRFs\), we find that parameterizing the geometry with a neural network accelerates convergence and escapes local minima that trap discrete representations\.   Because the simulator is differentiable, it is readily integrated with other deep learning pipelines to enable novel speech and medical imaging applications\. Our model can be used for instance, in singing instruction or language learning, where a visualization of one's vocal tract can help people understand how their vocal tract maps to different speech sounds\. To enable these tasks, \(1\) we demonstrate self\-supervised autoencoding of vocal tract shapes across 11 languages, and \(2\) we couple our simulator with a generative model of MRI images to reconstruct one's moving vocal tract from only their speech, no paired data required\.

## Reconsidering Positional Supervision in Masked Diffusion Language Model Training

**Authors:** Mengyu Ye; Keito Kudo; Ryosuke Takahashi; Jun Suzuki

**ID:** 152472 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SoXwBAJ8w9>) | [PDF](<https://openreview.net/pdf?id=SoXwBAJ8w9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152472>)

Masked diffusion language models \(MDLMs\) generate text by unmasking tokens in parallel and have recently emerged as alternatives to autoregressive language models\.  They can be viewed as parallel decoders trained with a position\-wise cross\-entropy \(CE\) loss, the same setup as non\-autoregressive translation \(NAT\)\.  In NAT, CE\-trained parallel decoders have been argued to be sensitive to small positional shifts, since CE penalizes them harshly\. We ask whether CE\-trained MDLMs are similarly sensitive to such shifts under iterative decoding\. To probe this, we apply a controlled intervention that introduces them during decoding\. On LLaDA\-8B\-Instruct with Arena\-Hard, displacing as little as 1\\% of generated tokens by one position substantially reduces win rates against the unintervened model, showing that MDLMs are sensitive to such small shifts under iterative parallel decoding\.  Motivated by this, we adapt connectionist temporal classification \(CTC\), an alignment\-flexible objective known to mitigate it there, to MDLM supervised fine\-tuning\.  By relaxing the strict position\-wise match that CE imposes, CTC gives the loss room to absorb small positional shifts; concretely, we modified CTC objective to use a special \\ token that absorbs positional uncertainty between target tokens and output positions, and a updated collapse map that preserves target surface forms\. Across four open\-ended generation benchmarks, the resulting model consistently improves over both the original model and a matched cross\-entropy\-trained baseline, with statistically significant gains on all four\. These results identify training\-side alignment flexibility as a useful design dimension for MDLM SFT, complementary to the inference\-time approaches explored in prior work\.

## From History to State: Constant\-Context Skill Learning for LLM Agents

**Authors:** Haoyang Xie; Xinyuan Wang; Yancheng Wang; Puda Zhao; Feng Ju

**ID:** 154254 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F9AmFBisYk>) | [PDF](<https://openreview.net/pdf?id=F9AmFBisYk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154254>)

Large language model \(LLM\) agents are increasingly used to operate browsers, files, code and tools, making personal assistants a natural deployment target\. Yet personal agents face a privacy\-cost\-capability tension: cloud models execute multi\-step workflows well but expose sensitive intermediate context to external APIs, while local models preserve privacy but remain less reliable\. Both settings also pay repeatedly for long skill prompts and growing histories\. We propose constant\-context skill learning, a context\-to\-weights framework for recurring agent workflows: reusable procedures are learned in lightweight task\-family modules, while inference conditions only on the current observation and a compact state block\. A deterministic tracker renders this state block from task progress and supplies aligned subgoal rewards, so each module can be trained with step\-level SFT and refined through online RL\. Across ALFWorld, WebShop, and SciWorld, our agents achieve strong performance across Qwen3\-4B, Qwen3\-8B and Llama\-3\.1\-8B\. With Qwen3\-8B, SFT\+RL reaches 89\.6\\% unseen success on ALFWorld, 76\.8\\% success on WebShop, and 66\.4\\% unseen success on SciWorld\. They match or exceed strong published agent\-training results while reducing prompt tokens per turn by 2\-7$\\times$ relative to controlled ReAct prompting baselines, showing that procedural context can be moved from prompts into weights\.

## WorldSpeech: A Multilingual Speech Corpus from Around the World

**Authors:** Antonis Asonitis; Luca Lanzendörfer; Frédéric Berdoz; Roger Wattenhofer

**ID:** 139336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBzZjghqhE>) | [PDF](<https://openreview.net/pdf?id=WBzZjghqhE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139336>)

Automatic speech recognition \(ASR\) performs well for high\-resource languages with abundant paired audio\-transcript data, but its accuracy degrades sharply for most languages due to limited publicly available aligned data\. To this end, we introduce WorldSpeech, a 24kHz multilingual speech corpus comprising 65k hours of aligned audio\-transcript data across 76 languages, collected from diverse public sources including parliamentary proceedings, international broadcasts, and public\-domain audiobooks\. For 37 languages, WorldSpeech provides more than 200 hours of aligned speech, with 28 exceeding 500 hours and 24 surpassing 1k hours\. Fine\-tuning existing ASR models on WorldSpeech results in an average relative Word\-Error\-Rate reduction of 63\.5% across 11 typologically diverse languages\.

## NorSA: Accelerating LLM Decoding via Normalized Sparse Activation

**Authors:** Tianteng Gu; Bo Xiao; Ke Zeng; Shuai Shi; Wangyou Zhang; Chenda Li; Yanmin Qian

**ID:** 154390 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DvzLG9N5Dx>) | [PDF](<https://openreview.net/pdf?id=DvzLG9N5Dx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154390>)

Sparse activation accelerates Large Language Model \(LLM\) decoding by removing redundant computations and memory access, but existing methods often assume hidden\-state dimensions are independent and identically distributed \(i\.i\.d\.\)\. We replace this i\.i\.d\. perspective with a covariance\-aware view by analyzing contextual dependencies across tokens and inter\-dimensional correlations within hidden states\. We introduce Normalized Sparse Activation \(NorSA\), a training\-free framework that combines dynamic thresholding with decorrelating rotation\. Across the LLaMA, Mistral, and Qwen families, NorSA consistently improves perplexity and downstream accuracy over prior training\-free baselines, especially in high\-sparsity regimes\. On LLaMA3\-8B at 50\\% sparsity, it stays within 0\.44 perplexity points of the dense model while achieving a 1\.32$\\times$ end\-to\-end decoding speedup\.

## Accelerating Diffusion Language Models via Structured Suffix Modeling

**Authors:** Zifeng Cheng; Keda Li; Zhiwei Jiang; Cong Wang; Fei Shen; Qing Gu

**ID:** 152485 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SkQxO613nL>) | [PDF](<https://openreview.net/pdf?id=SkQxO613nL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152485>)

_Abstract unavailable from the accessible public sources._

## SAME: Stability\-Aware Embedding Extraction in Mixture\-of\-Experts Language Models

**Authors:** Shufan Yang; Zifeng Cheng; Zhiwei Jiang; Hao Wang; Miao Xue; Changhui Sun; Cong Wang; Ao Zhou; Qing Gu

**ID:** 152895 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcLcfDARfL>) | [PDF](<https://openreview.net/pdf?id=PcLcfDARfL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152895>)

_Abstract unavailable from the accessible public sources._

## Mind the Gap: Dataset and Fine\-grained Evaluation for Inline Audio Descriptions

**Authors:** Subhashini Venugopalan; Yingwen Tan; Taylor Roper; Jimmy Tobin; Anton Kast; Alicia Martin; Sam Sepah; Amy Pavel

**ID:** 139386 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ta6qlgEwjY>) | [PDF](<https://openreview.net/pdf?id=Ta6qlgEwjY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139386>)

_Abstract unavailable from the accessible public sources._

## Alignment Collapse Under KV Cache Quantization: Diagnosis and Mitigation

**Authors:** Bruce C Xu; Adarsh Kumarappan; Mu Zhou

**ID:** 150322 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iyno3PkrLm>) | [PDF](<https://openreview.net/pdf?id=iyno3PkrLm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150322>)

_Abstract unavailable from the accessible public sources._

## CS\-Dialogue: A 104\-Hour Dataset of Spontaneous Mandarin\-English Code\-Switching Dialogues for Speech Recognition

**Authors:** Jiaming Zhou; Yujie Guo; Shiwan Zhao; Haoqin Sun; Hui Wang; Jiabei He; Aobo Kong; Shiyao Wang; Yong Qin

**ID:** 139416 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S7MdGXCTY0>) | [PDF](<https://openreview.net/pdf?id=S7MdGXCTY0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139416>)

_Abstract unavailable from the accessible public sources._

## GOLD PANNING: Strategic Context Shuffling for Needle\-in\-Haystack Reasoning

**Authors:** Adam Byerly; Daniel Khashabi

**ID:** 155209 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7SfVNZjeY8>) | [PDF](<https://openreview.net/pdf?id=7SfVNZjeY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155209>)

Large language models \(LLMs\) exhibit pronounced position bias in long\-context retrieval, systematically prioritizing information location over relevance\. Existing mitigations modify positional encodings or attention internals, but in the common output\-only deployment setting these are inapplicable\. We introduce GOLD PANNING, a Bayesian framework for inference\-time active search that \(i\) reorders documents to concentrate high\-belief items in highly diagnostic positions \(signal anchoring\) and \(ii\) updates relevance beliefs from model outputs\. Unlike active learning, which prioritizes uncertainty reduction, GOLD PANNING exploits anchoring\-\-\-once flagged, keep it in sight\-\-\-to preserve weak cues\. A greedy assignment derived from the model's diagnosticity profile provably identifies a target among $N$ documents with high probability in $O\(\\log N\)$ rounds\. Across open\-weight and closed\-source models on multi\-document QA, GOLD PANNING matches Permutation Self\-Consistency's $F\_1$ with $30$\-\-$65\\%$ fewer queries and remains effective under calibration mismatch, indicating that coarse positional ordering alone drives the gains\. These results show that inherent model biases need not be failures, but can serve as exploitable signals\.

## Minimally Invasive Steering of Language Models

**Authors:** Taha Entesari; Jingyu \(Jack\) Zhang; Daniel Khashabi; Mahyar Fazlyab

**ID:** 153525 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kg5V7xioBy>) | [PDF](<https://openreview.net/pdf?id=Kg5V7xioBy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153525>)

Test\-time alignment aims to adapt large language models \(LLMs\) to runtime objectives without updating their parameters\. This is especially useful when the reward signal is user\-specific, time\-varying, or available only through a black\-box evaluator\.  We propose a minimally invasive pre\-logit steering method that optimizes additive interventions to the hidden states of a frozen LLM in order to improve reward while preserving the base model's behavior\. Rather than penalizing the Euclidean norm of the steering vector, we derive an effort penalty from the local KL geometry of the induced token distribution\. Specifically, we show that the per\-token KL divergence between the steered and reference policies admits a second\-order expansion given by a Fisher\-quadratic form in the steering vector\. This regularizer has an analytic gradient computable through matrix\-vector products with the frozen language\-model head, making it as inexpensive as a standard quadratic penalty while retaining a principled KL interpretation\.  We further decompose the sequence\-level KL gradient into an analytic Fisher component and a trajectory\-dependent score\-function component, and introduce a hierarchy of Fisher surrogates with provable first\-order equivalence in the small\-steering regime\. The resulting algorithm provides a training\-free, reward\-driven test\-time alignment procedure that improves reward while controlling deviation from the base policy\.

## Continuous Audio Thinking for Large Audio Language Models

**Authors:** Gyojin Han; DongJae Lee; Changho Choi; Jongsuk Kim; Junmo Kim

**ID:** 148651 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wA25uq7UK6>) | [PDF](<https://openreview.net/pdf?id=wA25uq7UK6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148651>)

_Abstract unavailable from the accessible public sources._

## SitCom: Scaling Egocentric Multi\-Party Spoken Dialogue for Situated Communication Assistance

**Authors:** Heeseung Yun; Sehun Lee; Sang Hoon Woo; Yoonji Nam; Sung\-Feng Huang; Chao\-Han H Yang; Gunhee Kim

**ID:** 155992 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1KuO44r5uN>) | [PDF](<https://openreview.net/pdf?id=1KuO44r5uN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155992>)

Multi\-party spoken communication pervades daily life, yet even attentive participants routinely lose track of who said what, miss a turn, or struggle to recall something said minutes earlier\. As always\-on wearables become commonplace, an assistant that listens alongside the user could ease this everyday friction\. We introduce \\textit\{Situated Communication Assistance\}: on\-demand support for users immersed in ongoing multi\-party conversations, grounded in the same egocentric acoustic scenes they perceive\. We argue this capability rests on three abilities: producing a Rich Situated Transcription \(RST\) of \\textit\{who\} said \\textit\{what\}, \\textit\{when\}, and \\textit\{where\}; comprehending the conversation holistically; and answering user queries while the conversation is unfolding\. To address the persistent data deficit in this regime, we build \\textbf\{SitCom\}, a multi\-party spoken dialogue corpus more than an order of magnitude larger than the largest prior multi\-party corpus, pairing 15\.8k hours of synthesized data with 144 hours of real recordings standardized under a unified RST schema\. The synthesis pipeline generates group\-structured scripts with persona\-grounded speech and behaviors, and renders them in 3D scenes through a directional simulator with head\-and\-torso radiation\. Using this corpus, we curate \\textbf\{SitCom\-Bench\}, a fully human\-validated question answering benchmark of 4\.3k items spanning seven comprehension and four in\-the\-moment query subtypes\. Experiments show that combining synthetic and real data is necessary to close the sim\-to\-real gap, and that in\-the\-moment querying remains hard even for frontier models, pointing to it as an open challenge distinct from post\-hoc comprehension\.

## Distilling Sequential Computation in Transformer Language Models

**Authors:** Zixuan Lan; Jessica Yang; Yanhong Li; Karen Livescu; Jiawei Zhou

**ID:** 150342 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iqGrRkvjJU>) | [PDF](<https://openreview.net/pdf?id=iqGrRkvjJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150342>)

Transformer language models process sequences token by token in an autoregressive manner, making growing contexts increasingly expensive\. Yet many adjacent token spans are highly predictable or frequently occur as stable units, suggesting that their representations may be compressible\. We introduce a method for distilling sequential computation by replacing spans of input tokens with collapsed representations, computed on the fly by a lightweight merge module\. This module generates a single surrogate embedding from a sequence of static token embeddings that captures the functional role of the multiple tokens, allowing pretrained models to operate on compressed inputs without architectural changes or re\-training\. We apply this approach during inference to compress both prompts and intermediate decoding steps, using a rollback mechanism to substitute stored multi\-token KV cache entries with their single\-step surrogates\. Experiments across diverse models show that the merge module can be used to reduce effective sequence length by up to 40\\% with minimal accuracy degradation across language\-modeling evaluations and downstream tasks, including question answering, summarization, commonsense reasoning, and long\-form mathematical reasoning\. Additional lightweight adaptation of the merge module further improves the accuracy\-compression trade\-off in selected settings\. These results demonstrate that sequential token computation in Transformers can be effectively approximated through condensed surrogate representations that preserve the original behavior without model updating\.

## MILES: Modular Instruction Memory with Learnable Selection for Self\-Improving LLM Reasoning

**Authors:** Ruilin Tong; Dong Gong

**ID:** 155027 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=94TqZuHU8A>) | [PDF](<https://openreview.net/pdf?id=94TqZuHU8A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155027>)

Large language models \(LLMs\) increasingly improve their reasoning at test time via additional computation, yet most procedures treat each problem in isolation\. When problems arrive sequentially, accumulating reusable experience across them can further improve performance\. Existing memory\-based methods either store whole\-solution templates that generalize poorly to novel problems or use heuristic step\-level selection that is not optimized for final\-answer correctness\. Learning selection policies requires large\-scale training data and fixed action spaces\. We propose MILES \(Modular Instruction Memory with LEarnable Selection for self\-improving LLM reasoning\), a framework that dynamically expands step\-wise memory and applies correctness\-optimized memory composition under realistic test\-time constraints\. MILES maintains modular memory units consisting of asymmetric pairs of sub\-goal embeddings and sub\-instructions, each associated with a learnable selection head\. This memory structure enables a coarse\-to\-fine retrieval mechanism: The coarse level enables memory expansion and collects supervision for training selection heads from confident samples, while the fine stage applies learned selection heads to rerank coarse\-level candidates and guide reasoning for uncertain samples\. MILES consistently matches or outperforms prior methods while achieving superior accuracy–efficiency tradeoffs\. Extensive experiments demonstrate its effectiveness, robustness, and transferability\.

## Scaling Point\-in\-Time Language Models: Economic Evaluation of Embeddings

**Authors:** Bryan Kelly; Semyon Malamud; Johannes Schwab; Teng A Xu

**ID:** 139251 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c7yKlceZYq>) | [PDF](<https://openreview.net/pdf?id=c7yKlceZYq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139251>)

Large language models trained on unrestricted internet corpora inevitably embed information from the future, introducing lookahead bias that compromises the validity of backtests and causal inference in finance and the social sciences\. Point\-in\-time language models—trained exclusively on text available up to each calendar date—eliminate this leakage by construction, but existing efforts typically produce models that lag substantially behind their unconstrained counterparts\. We show that this performance gap can be narrowed through scale\. Training decoder\-only transformers with up to 4 billion parameters on 1 trillion chronologically filtered tokens from FineWeb, we construct a sequence of yearly model checkpoints spanning 2013–2024\. Across a range of common\-sense reasoning and language understanding benchmarks, our models approach the performance of leading open\-weight models of comparable size \(such as Gemma\-3\-4B and LLaMA\-7B\) trained on temporally unrestricted data, although a performance gap remains on several tasks\. Finally, in a strict out\-of\-sample economic evaluation task, portfolios built from point\-in\-time embeddings achieve robust positive Sharpe ratios and perform close to full\-sample counterparts that violate temporal validity, indicating that chronologically consistent language models can extract economically meaningful signals without relying on look\-ahead bias\. We release the complete pipeline—including dataset construction, training infrastructure, and evaluation code—to enable reproducible point\-in\-time language modeling and to support research applications that require strict temporal validity\. Code is available publicly on GitHub \(https://github\.com/DjoFE2021/Point\-In\-Time\-LLM\) and model checkpoints as well as training datasets can be accessed on Hugging Face \(https://huggingface\.co/datasets/Diamegs\)\.

## Hearing the Unspoken: Simulator\-Induced Asymmetric\-View Policy Optimization for Proactive Task\-Oriented Dialogue

**Authors:** Hongbin Zhang; Ning Gao; Yuqin Dai; Ruiyuan Wu; Jinpeng Wang; Rena Gao; Bingdong Tan; Shuzheng Gao; Chaozheng Wang

**ID:** 153222 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MsVDpPS4yS>) | [PDF](<https://openreview.net/pdf?id=MsVDpPS4yS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153222>)

Proactive task\-oriented dialogue \(TOD\), such as outbound sales, demands a persuasive agent that actively probes the user's concerns and steers the conversation toward acceptance within a bounded number of turns\. Yet post\-trained LLMs are inherently conservative, and reward\-shaping RL \(e\.g\., GRPO\) struggles since it only re\-weights what an already passive policy samples\. We show that conditioning on the user's latent concerns unlocks proactive capability that no amount of sampling can undermine, establishing these concerns as a pivotal training\-time signal\. To operationalize this finding, we build the \\textbf\{Cognitive User Simulator\}, which models each user as a stratified persona comprising observable external traits and hidden internal concerns\. The simulator produces faithful and diverse interactions, while emitting per\-turn state dynamics that track persuasion progress\. We then introduce \\textbf\{Simulator\-Induced Asymmetric\-View Policy Optimization\}, which converts the modeled concerns and the simulation state transition into complementary training objectives: \(1\) \\emph\{Asymmetric On\-Policy Self\-Distillation\} that transfers concern\-aware behavior from a privileged view of the same policy into its deployable, conversation\-only view; and \(2\) \\emph\{State\-Transition Policy Refinement\} where the final decision provides trajectory\-level advantage while synchronous state transitions refine turn\-level credit direction\. Across two real\-world food\-delivery benchmarks \(\\emph\{merchant\} and \\emph\{courier\} outbound recruitment\), our method matches or surpasses leading proprietary LLMs, outperforms strong RL baselines, and generalizes across various LLM\-based user simulators\.

## Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory

**Authors:** Jingwei Sun; Jianing Zhu; Jiangchao Yao; Tongliang Liu; Bo Han

**ID:** 150576 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h9Je8c91Qi>) | [PDF](<https://openreview.net/pdf?id=h9Je8c91Qi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150576>)

To enable reliable long\-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history\. Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning\. Nevertheless, such fact\-centric designs inevitably discard fine\-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts\. Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles\. To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments anchored by source identifiers for storage fidelity, extracted atomic facts for efficient memory retrieval, synthesized profiles that aggregate dispersed facts into holistic semantic understanding for deep reasoning\. We further adopt TextGrad\-based prompt optimization, which iteratively refines extraction and profiling prompts via response quality feedback, achieving lifelong evolution without any parameter updating\. Extensive experiments on LoCoMo and PerLTQA across multiple LLM backbones demonstrate that TriMem consistently outperforms strong memory baselines\.

## MemArena: An Ego\-Centric Benchmark for On\-Device Agentic Personal Memory Assistants at Scale

**Authors:** Jiadong Zhang; Xiaosong Ma

**ID:** 139685 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ae9Cmj7ofy>) | [PDF](<https://openreview.net/pdf?id=Ae9Cmj7ofy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139685>)

Edge\-deployed personal memory assistants must handle private interpersonal conversations on\-device with open\-weight models\. Yet, existing memory benchmarks often under\-test the combination of activity\-dense interaction, ego\-centric perspective, and coherent multi\-session worlds\. MemArena fills these gaps with a single\-world conversational benchmark built with its MASim agent simulator, for $50$ agents over $15$ days \($10\.3$M dialog\-text tokens, $24\.1$K text\-only ego\-observed tokens/agent/day\)\. With the interaction history, it co\-generates ground truth over six recall, reasoning, and trustworthiness evaluation dimensions\. We evaluate five open\-weight readers with Vanilla context, BM25\-RAG, Oracle retrieval, Memobase, and MemSearch as memory backends\. Three results stand out: \(1\) Memory\-backend choice matters more for content accuracy: At Qwen3\-0\.6B, Memobase $\\to$ MemSearch gains $\+32\.5/\+19\.2$ pp, exceeding MemSearch reader scaling \($\+10\.6/\+6\.8$ pp\)\. \(2\) Permission\-aware access fails universally: with Oracle leaking heavily and other backends too timid to disclose\. \(3\) Search latency bites only at very small reader: on a Spark GB10 edge node, memory\-search adds a moderate and fixed $87$/$7$/$48$ ms \(BM25\-RAG/Memobase/MemSearch\) that composes a small part of TTFT for most reader\-backend combinations\. We release code, the MASim simulator, and the MemArena\-L benchmark at https://anonymous\.4open\.science/r/MemArena\-NeurIPS2026\-anon\-3E9D

## Sandboxed Coding Agents are Competitive Omni\-modal Task Solvers

**Authors:** Dongping Chen; Xuanao Huang; Zhihan Hu; Qingyuan Shi; Dianqi Li; Tianyi Zhou

**ID:** 148209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYMvOwt5bN>) | [PDF](<https://openreview.net/pdf?id=zYMvOwt5bN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148209>)

As multimodal LLMs increasingly emphasize video and audio, a common assumption is that solving such tasks calls for native omnimodal models\. We show that this is not always necessary: coding agents equipped with only text\+vision and a sandboxed tool\-using interface can perform competitively with, and in several settings outperform, SOTA native omnimodal models and predefined multimodal agent scaffolds across multiple audio\-video benchmarks\. Our trajectory analysis suggests that their advantage comes from coding agents writing code and orchestrating tools to retrieve relevant content from transcripts, frames, and other non\-textual modality signals from raw inputs\. This effectively converts omnimodal tasks into evidence retrieval and information processing problems, avoiding the inefficiency of ingesting entire videos or audio streams into context\. To characterize remaining limitations, we propose a failure taxonomy and a process\-level analysis of tool\-use traces, and find that simple skill injection, including human\-written skills and self\-distilled skills from execution logs, can substantially improve performance over the no\-skill baseline\. To examine whether such capability can be elicited in open\-source models, we further introduce Code\-X, a complete training recipe with the OmniCoding trajectory dataset and verifiable reward, providing an exploratory baseline on Qwen\-3\.5\-9B and Qwen\-3\.6\-27B\. Finally, given the maturity of many\-modality understanding, we argue that the more meaningful frontier lies in many\-modality processing, and introduce TerminalBench\-O, the first process\-level benchmark designed for coding agents on real\-world omnimodal processing tasks\. Together, our findings open new directions for omnimodal content processing and evaluation\.

## Beyond Correctness: Robustness\-Driven Evolutionary Self\-Training for Large Language Models

**Authors:** Wei Guo; Hongyao Tang; Yi Ma; Jinyi Liu; Pengyi Li; Jing Liang; Yifu Yuan; YAN ZHENG; Jianye Hao

**ID:** 151953 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WZIsP7IaVI>) | [PDF](<https://openreview.net/pdf?id=WZIsP7IaVI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151953>)

_Abstract unavailable from the accessible public sources._

## Universal Byte\-Level Encoding: UTF\-8/UTF\-16 Routing to Reduce Cross\-Script Token\-Budget Disparities

**Authors:** Hyunsik Kim; Youngmoon Jung

**ID:** 152902 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PYtjaNdYaM>) | [PDF](<https://openreview.net/pdf?id=PYtjaNdYaM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152902>)

_Abstract unavailable from the accessible public sources._

## Benchmarking Vietnamese Legal Knowledge of Large Language Models

**Authors:** Dong Nguyen Tien; Minh\-Anh Nguyen; Thanh D Hoang; Nguyen T Ngoc; Quang M Xuan; Phan P Hai; Nguyen T Anh; Binh Vu; Dung Le

**ID:** 139241 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=clrKAP4Tdj>) | [PDF](<https://openreview.net/pdf?id=clrKAP4Tdj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139241>)

_Abstract unavailable from the accessible public sources._

## EntropyCache: Decoded Token Entropy Guided KV Caching for Diffusion Language Models

**Authors:** Minsoo Cheong; Donghyun Son; Woosang Lim; Sungjoo Yoo

**ID:** 152767 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QX9lXOB8FY>) | [PDF](<https://openreview.net/pdf?id=QX9lXOB8FY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152767>)

_Abstract unavailable from the accessible public sources._

## Latent Abstraction for Retrieval\-Augmented Generation

**Authors:** Thi Ha Lan Nguyen; Minh\-Anh Nguyen; Dung Le

**ID:** 155353 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6Gb0gkrUgv>) | [PDF](<https://openreview.net/pdf?id=6Gb0gkrUgv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155353>)

_Abstract unavailable from the accessible public sources._

## POISE: Instance\-Specific Prompt Tuning under Latent Mixture Target Distributions

**Authors:** wenhao zheng; shuai xu; Lixing Chen; Xiu Su; Shichao Kan; Xiaoting Lyu; Zhe Qu

**ID:** 154048 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GbrExqa8nQ>) | [PDF](<https://openreview.net/pdf?id=GbrExqa8nQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154048>)

_Abstract unavailable from the accessible public sources._

## RVCBench: Benchmarking Robustness of Voice Cloning Across Modern Audio Generation Models

**Authors:** Ruinan Jin; Xinting Liao; Hanlin Yu; Deval Pandya; Xiaoxiao Li

**ID:** 139667 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ByGhl9qdO1>) | [PDF](<https://openreview.net/pdf?id=ByGhl9qdO1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139667>)

_Abstract unavailable from the accessible public sources._

## ALTER: An Allen's Algebra\-Based Evaluation Framework for Temporal Reasoning of LLMs

**Authors:** Hongkai Zhou; Yanhui Li

**ID:** 139265 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ay0UXDsniW>) | [PDF](<https://openreview.net/pdf?id=ay0UXDsniW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139265>)

_Abstract unavailable from the accessible public sources._

## ForecastCompass: Guiding Agentic Forecasting with Adaptive Factor Memory

**Authors:** Yurui Chang; Yongkang Du; Yuanpu Cao; Jinghui Chen; Lu Lin

**ID:** 153936 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HSZMPfq6tX>) | [PDF](<https://openreview.net/pdf?id=HSZMPfq6tX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153936>)

_Abstract unavailable from the accessible public sources._

## Seeing Speech: Learning Visible Articulatory Dynamics for Speech\-Driven 3D Facial Animation

**Authors:** Hyung Kyu Kim; Byungchan Hwang; HAKGU KIM

**ID:** 148378 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLMGoDkvCM>) | [PDF](<https://openreview.net/pdf?id=yLMGoDkvCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148378>)

_Abstract unavailable from the accessible public sources._

## Beyond Correctness: Robustness\-Driven Evolutionary Self\-Training for Large Language Models

**Authors:** Wei Guo; Hongyao Tang; Yi Ma; Jinyi Liu; Pengyi Li; Jing Liang; Yifu Yuan; YAN ZHENG; Jianye Hao

**ID:** 151953\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151953

[Paper](<https://openreview.net/forum?id=WZIsP7IaVI>) | [PDF](<https://openreview.net/pdf?id=WZIsP7IaVI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151953>)

_Abstract unavailable from the accessible public sources._

## Universal Byte\-Level Encoding: UTF\-8/UTF\-16 Routing to Reduce Cross\-Script Token\-Budget Disparities

**Authors:** Hyunsik Kim; Youngmoon Jung

**ID:** 152902\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152902

[Paper](<https://openreview.net/forum?id=PYtjaNdYaM>) | [PDF](<https://openreview.net/pdf?id=PYtjaNdYaM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152902>)

_Abstract unavailable from the accessible public sources._

## Benchmarking Vietnamese Legal Knowledge of Large Language Models

**Authors:** Dong Nguyen Tien; Minh\-Anh Nguyen; Thanh D Hoang; Nguyen T Ngoc; Quang M Xuan; Phan P Hai; Nguyen T Anh; Binh Vu; Dung Le

**ID:** 139241\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139241

[Paper](<https://openreview.net/forum?id=clrKAP4Tdj>) | [PDF](<https://openreview.net/pdf?id=clrKAP4Tdj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139241>)

_Abstract unavailable from the accessible public sources._

## EntropyCache: Decoded Token Entropy Guided KV Caching for Diffusion Language Models

**Authors:** Minsoo Cheong; Donghyun Son; Woosang Lim; Sungjoo Yoo

**ID:** 152767\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152767

[Paper](<https://openreview.net/forum?id=QX9lXOB8FY>) | [PDF](<https://openreview.net/pdf?id=QX9lXOB8FY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152767>)

_Abstract unavailable from the accessible public sources._

## Latent Abstraction for Retrieval\-Augmented Generation

**Authors:** Thi Ha Lan Nguyen; Minh\-Anh Nguyen; Dung Le

**ID:** 155353\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155353

[Paper](<https://openreview.net/forum?id=6Gb0gkrUgv>) | [PDF](<https://openreview.net/pdf?id=6Gb0gkrUgv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155353>)

_Abstract unavailable from the accessible public sources._

## POISE: Instance\-Specific Prompt Tuning under Latent Mixture Target Distributions

**Authors:** wenhao zheng; shuai xu; Lixing Chen; Xiu Su; Shichao Kan; Xiaoting Lyu; Zhe Qu

**ID:** 154048\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154048

[Paper](<https://openreview.net/forum?id=GbrExqa8nQ>) | [PDF](<https://openreview.net/pdf?id=GbrExqa8nQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154048>)

_Abstract unavailable from the accessible public sources._

## RVCBench: Benchmarking Robustness of Voice Cloning Across Modern Audio Generation Models

**Authors:** Ruinan Jin; Xinting Liao; Hanlin Yu; Deval Pandya; Xiaoxiao Li

**ID:** 139667\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139667

[Paper](<https://openreview.net/forum?id=ByGhl9qdO1>) | [PDF](<https://openreview.net/pdf?id=ByGhl9qdO1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139667>)

_Abstract unavailable from the accessible public sources._

## ALTER: An Allen's Algebra\-Based Evaluation Framework for Temporal Reasoning of LLMs

**Authors:** Hongkai Zhou; Yanhui Li

**ID:** 139265\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139265

[Paper](<https://openreview.net/forum?id=ay0UXDsniW>) | [PDF](<https://openreview.net/pdf?id=ay0UXDsniW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139265>)

_Abstract unavailable from the accessible public sources._

## Position: Telic Errors Make VLMs Unreliable Annotators in Sensitive Contexts

**Authors:** Kokil Jaidka; Insyirah Mujtahid; Chebrolu Niranjan; Sahajpreet Singh

**ID:** 140068 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RLRpTy0ryW>) | [PDF](<https://openreview.net/pdf?id=RLRpTy0ryW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140068>)

VLMs now annotate sensitive content at scale, be it hate\-speech memes, conflict imagery, politically charged symbols; yet, standard pipelines measure only whether a model can identify what an image depicts, not what it means to the community it concerns\. We name this failure mode a telic error: the model produces a surface\-accurate, perceptually complete annotation \(telic: what\-it\-depicts\) while erasing the relic meaning, i\.e\., the symbolic, cultural, or political significance that makes the content consequential\. We evaluate six open\-weight VLMs on a two\-task diagnostic designed to locate the failure precisely: Task 1 \(forward annotation\) shows that prepending the model's own image description does not improve accuracy \(\-2\.0pp\), ruling out description\-generation failure; Task 2 \(label\-supplied explanation\) shows the same models achieve 95\-100% relic identification accuracy when given the correct label and asked to explain it, ruling out knowledge absence\. The 35\-percentage\-point gap between the two tasks is the empirical signature of a protocol artefact: models possess the cultural knowledge required for accurate annotation, but standard binary formats never ask them to deploy it\. We argue that measuring only telic accuracy is not a neutral technical choice; it is a choice about whose meanings count, and that the dual\-axis evaluation framework, five\-type error taxonomy, and two\-task diagnostic introduced here are the instrumentation needed to make that choice visible\.

## DELTA\-TTS: Adapting Autoregressive Model into a Diffusion Language Model for Text\-to\-Speech

**Authors:** Junwon Moon; Yejin Lee; Seungbeom Kim; Hoseong Ahn; Sewoong Park; Heeseung Kim; Kyuhong Shim

**ID:** 151215 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c4cM3P84zM>) | [PDF](<https://openreview.net/pdf?id=c4cM3P84zM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151215>)

Autoregressive \(AR\) text\-to\-speech \(TTS\) models generate speech tokens one at a time, and inference latency therefore scales linearly with output length\. Discrete diffusion language models \(dLLMs\) have recently emerged as a parallel alternative that produces tokens via iterative unmasking\.  Recent work has converted pretrained AR language models into dLLMs in text generation, but this paradigm has not been extended to speech synthesis\. In addition, existing conversion methods require full fine\-tuning and large\-scale training data\. This leaves the question of whether such conversion can be done with substantially less compute and data largely open\. We introduce DELTA\-TTS, a lightweight conversion that turns a pretrained AR TTS backbone into a dLLM\. The AR weights are kept frozen; all adaptation is routed through LoRA and a per\-block speech\-aware convolution\. The convolution injects local acoustic context into the bidirectional attention, supplying the short\-range continuity between adjacent  speech tokens\. With only $585$ hours of LibriTTS as adaptation data, DELTA\-TTS achieves a state\-of\-the\-art WER of $\\textbf\{1\.75\}\\%$ on Seed\-TTS test\-en and decodes $\\textbf\{3\.3\}\\times$ faster on the token\-generation stage than the CosyVoice3 AR backbone it is converted from\. This shows that lightweight AR\-to\-dLLM conversion provides a practical, data\- and compute\-efficient route to non\-autoregressive TTS\.

## Introspection Tools Help LLMs Understand and Control Themselves

**Authors:** Xiao Liu; Junsol Kim; Shiyang Lai; Jacy Anthis; Siyang Wu; Chenhao Tan; James Evans

**ID:** 140093 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgN3oK68Eu>) | [PDF](<https://openreview.net/pdf?id=GgN3oK68Eu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140093>)

Large language models \(LLMs\) exhibit increasingly strong reasoning capabilities, yet they remain limited in their ability to understand, explain, or regulate their own states and behavior\. While interpretability methods have advanced our ability to expose and manipulate their internal mechanisms, they are designed for human analysts rather than for models themselves\. In this position paper, we argue for equipping LLMs with tools that expose measurable internal signals \(e\.g\., token probabilities and internal activations\) and enable self\-regulation\. We refer to these as introspection tools, drawing inspiration from humans' access to their mental and physical states, which allow for effective mental and bodily control in diverse real\-world contexts\. We present the design space for introspection tools, and two proof\-of\-concept examples illustrating how such tools are feasible and can support uncertainty quantification and misinformation mitigation\. Beyond manually designed tools, we highlight open research questions around the automatic development, refinement, and organization of introspection tools\. Together, these directions move toward LLMs that are more self\-aware and reliable\.

## PitchBench: Measuring Pitch Hearing in Audio\-Language Models

**Authors:** Milan Liessens Dujardin; Song\-Ze Yu; Craver C Thomas\-Smith; David Chan; Karina Nguyen

**ID:** 139226 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dlSvqHjTE4>) | [PDF](<https://openreview.net/pdf?id=dlSvqHjTE4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139226>)

Audio\-language models \(ALMs\) are increasingly used in real\-world applications that require understanding music, from music tutoring and transcription to captioning, recommendation systems, and music production\. More broadly, they are becoming an important component of multimodal AI systems that must reason from sensory input rather than text alone\. This makes reliable musical perception a critical prerequisite: if a model cannot accurately hear the structure of sound, it cannot be trusted to reason about, teach, transcribe, or act on audio in the real world\. Yet existing benchmarks rarely assess one of the most fundamental musical abilities underlying such perception: pitch hearing\. Current evaluations tend to probe pitch hearing only indirectly, through higher\-level tasks and often in multiple\-choice formats, leaving open how reliably ALMs identify fine\-grained pitch across instruments, acoustic conditions, and response formats\.  We introduce PitchBench, an evaluation suite that systematically measures pitch hearing in ALMs\. PitchBench comprises 28 experiments spanning absolute and relative pitch perception within sequences and chords, while varying loudness, note duration, sound source, time stretching, background noise, and other acoustic conditions\. Tasks range from identifying individual pitches in isolation to tracking a melodic line within a four\-part musical texture\. Evaluating frontier ALMs, we find that pitch hearing remains highly unreliable: models perform consistently poorly across settings, with accuracy varying sharply by sound source, note duration, and notation format\. Current ALMs do not yet possess stable pitch perception, even for controlled synthetic and instrumental stimuli\. Alongside the benchmark, we release PitchBench as a Python package containing the evaluation data and data generation tools to support future work on pitch\-aware audio\-language modeling\.

## Progressive Layer\-wise Supervision: Deep\-to\-Shallow Supervision Annealing for Efficient and Robust Speech Deepfake Detection

**Authors:** Hoan My Tran; Xin Wang; Xuechen Liu

**ID:** 150091 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kmOSYc5cfb>) | [PDF](<https://openreview.net/pdf?id=kmOSYc5cfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150091>)

Speech foundation models pretrained via self\-supervised learning provide powerful representations for deepfake detection, yet we find that standard fine\-tuning exploits only the deepest transformer layers — leaving the majority of the network's capacity discriminatively inert\. Layer\-wise probing of \\textit\{XLS\-R\-128\} reveals that the top two\-thirds of the transformer stack contribute negligibly to anti\-spoofing performance after standard fine\-tuning, a phenomenon we term shallow\-layer dormancy\. We connect this observation to the representational redundancy of pretrained transformers: adjacent layers encode highly similar information, and fine\-tuning without explicit intermediate supervision reinforces rather than breaks this redundancy\. To address this, we propose Progressive Layer\-wise Supervision \(PLS\), a training framework that attaches a shared linear classifier to every transformer layer and schedules layer\-wise loss contributions via an exponentially annealed power weighting\. Early training concentrates supervision on deep layers to preserve the pretrained representational hierarchy; later training progressively redistributes supervision to shallower layers, converting dormant earlier representations into discriminative ones\. Competitive detection \($\\leq9\.25\\%$ average EER\) is achievable on \\emph\{XLS\-R\-128\} at layer 7, which reduces the parameter count from 315M to 101M and exemplifies an early exit mechanism\. Experiments across twelve benchmarks spanning in\-domain, and out\-of\-domain deepfake scenarios show PLS achieves a new state\-of\-the\-art with 239M parameters, outperforming prior methods with larger and more complex architectures\.

## SAFE\-FEC: Semantically Constrained Adversarial Frontier Evolution for Factual Error Correction

**Authors:** Lei Zhu; Xiaobao Wang; Jianbiao Yang; Chenyang Wang; Longbiao Wang; Jianwu Dang

**ID:** 148784 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v5PEa9m3Q5>) | [PDF](<https://openreview.net/pdf?id=v5PEa9m3Q5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148784>)

The difficulty of factual error correction \(FEC\) is not only how to repair false claims, but how to construct errors that meaningfully test repair\. Existing FEC data construction methods often follow a static corruption view: they mask spans in false claims or inject errors into supported claims, but do not explicitly target the boundary of what current evidence\-based correctors can repair\. We introduce the notion of a \\emph\{repair frontier\}: factual errors that are evidence\-grounded, close enough to the source claim to admit a clear correction, and resistant to current correctors\. We propose \\textsc\{SAFE\-FEC\}, a semantically constrained adversarial frontier\-evolution framework for constructing such examples\. Starting from evidence\-supported claims, SAFE\-FEC generates mutations from multiple factual\-error perspectives, refines them through cross\-perspective critique, selects or composes stronger candidates, filters semantic drift, and accepts only candidates that survive repeated corrector\-in\-the\-loop repair attempts\. This turns FEC data construction from one\-shot error injection into correction\-aware frontier search\. Experiments on FECData, HoVer, and FEVEROUS show that SAFE\-FEC consistently lowers correction performance for both LLM\-based and FEC\-specific correctors, especially in multi\-hop and structured\-evidence settings\. Quality evaluation and ablations further suggest that these failures arise from plausible, semantically anchored, evidence\-grounded errors rather than invalid hard negatives\.

## Shift\-Aware Identity\-Guided Latent Refinement for Referring Audio–Visual Segmentation

**Authors:** Kun Li; Sami S Brandt; Michael Yang

**ID:** 154662 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=By7ekEoJ2D>) | [PDF](<https://openreview.net/pdf?id=By7ekEoJ2D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154662>)

_Abstract unavailable from the accessible public sources._

## Native Audio\-Visual Alignment for Generation

**Authors:** Longbin Ji; Guan Wang; xuan wei; Chenye Yang; Zhenyu Zhang; Shuohuan Wang; YU SUN; Jingzhou HE

**ID:** 148987 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=teLwLWInBc>) | [PDF](<https://openreview.net/pdf?id=teLwLWInBc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148987>)

Joint audio\-video generation aims to synthesize temporally synchronized and semantically coherent visual and acoustic content\. Existing open\-source methods mainly follow either dual\-tower designs, which generate audio and video in separate streams and rely on posterior alignment, or fully unified tri\-modal designs, which mix textual context, audio, and video in a single shared space\. These paradigms may either weaken fine\-grained audio\-video co\-evolution or couple semantic conditioning with low\-level synchronization\. We propose NAVA, a Native Audio\-Visual Alignment framework that formulates generation as context\-conditioned native audio\-visual alignment\. NAVA first establishes audio\-video correspondence in a dedicated alignment space and then applies context as external conditioning to guide the aligned representation\. We instantiate this formulation with an Align\-then\-Fuse MMDiT architecture, which progressively bridges modality\-aware alignment and unified audio\-video denoising\. To support controllable speech generation, we further introduce Timbre\-in\-Context Conditioning, which binds reference timbre cues to corresponding speech spans through the context pathway\. Experiments on Verse\-Bench and the Seed\-TTS benchmark demonstrate that NAVA achieves superior audio\-visual synchronization and video quality, competitive audio quality, and substantially improved reference\-timbre controllability with only 6\.2B parameters\.

## ASTOR: Multi\-Task Code Reinforcement Learning via Utility\-Driven Coordination

**Authors:** Yujia Chen; Yang Ye; Xiao Chu; Yuchi Ma; Cuiyun Gao

**ID:** 154519 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CzqAXCaI97>) | [PDF](<https://openreview.net/pdf?id=CzqAXCaI97>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154519>)

Reinforcement learning \(RL\) with verifiable rewards has proven effective at post\-training LLMs for coding, yet deploying separate task\-specific specialists incurs costs that scale with the number of tasks, motivating a unified multi\-task RL \(MTRL\) approach\. However, existing MTRL methods treat all coding tasks uniformly, relying on fixed data curricula under a shared optimization strategy, ultimately limiting the effectiveness of multi\-task training\. To address these limitations, we propose \\textbf\{\{\\tool\}\}, a multi\-t\\textbf\{AS\}k code reinforcement learning framework via u\\textbf\{T\}ility\-driven co\\textbf\{OR\}dination\. Centered on \\textit\{task utility\}, a signal capturing each task's learning potential and cross\-task synergy, \{\\tool\} comprises two coupled modules: \\textit\{1\) \\moduleone\} module hierarchically allocates training budget and prioritizes informative prompts, steering training toward the most valuable data; and \\textit\{2\) \\moduletwo\} module dynamically scales per\-task KL regularization, matching update constraints to each task's current training state\.  Experiments on two widely\-used LLMs across four representative coding tasks demonstrate that \{\\tool\} consistently improves a single model across all tasks, outperforming the best task\-specific specialist by 9\.0\\%\-\-9\.5\\% and surpassing the strongest MTRL baseline by 7\.5\\%\-\-12\.8\\%\.

## ASTOR: Multi\-Task Code Reinforcement Learning via Utility\-Driven Coordination

**Authors:** Yujia Chen; Yang Ye; Xiao Chu; Yuchi Ma; Cuiyun Gao

**ID:** 154519\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154519

[Paper](<https://openreview.net/forum?id=CzqAXCaI97>) | [PDF](<https://openreview.net/pdf?id=CzqAXCaI97>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154519>)

Reinforcement learning \(RL\) with verifiable rewards has proven effective at post\-training LLMs for coding, yet deploying separate task\-specific specialists incurs costs that scale with the number of tasks, motivating a unified multi\-task RL \(MTRL\) approach\. However, existing MTRL methods treat all coding tasks uniformly, relying on fixed data curricula under a shared optimization strategy, ultimately limiting the effectiveness of multi\-task training\. To address these limitations, we propose \\textbf\{\{\\tool\}\}, a multi\-t\\textbf\{AS\}k code reinforcement learning framework via u\\textbf\{T\}ility\-driven co\\textbf\{OR\}dination\. Centered on \\textit\{task utility\}, a signal capturing each task's learning potential and cross\-task synergy, \{\\tool\} comprises two coupled modules: \\textit\{1\) \\moduleone\} module hierarchically allocates training budget and prioritizes informative prompts, steering training toward the most valuable data; and \\textit\{2\) \\moduletwo\} module dynamically scales per\-task KL regularization, matching update constraints to each task's current training state\.  Experiments on two widely\-used LLMs across four representative coding tasks demonstrate that \{\\tool\} consistently improves a single model across all tasks, outperforming the best task\-specific specialist by 9\.0\\%\-\-9\.5\\% and surpassing the strongest MTRL baseline by 7\.5\\%\-\-12\.8\\%\.

## Enhancing Speech Large Language Models through Reinforced Behavior Alignment

**Authors:** Yansong Liu; Yuan Liu

**ID:** 154532\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154532

[Paper](<https://openreview.net/forum?id=CtJ6YRQRlm>) | [PDF](<https://openreview.net/pdf?id=CtJ6YRQRlm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154532>)

Speech large language models \(SpeechLMs\) can process spoken requests, yet still lag behind text\-prompted large language models \(LLMs\) on instruction following and reasoning\. We argue that this gap is not only an ASR or representation problem: the same semantic instruction can induce different response policies when spoken with different speakers, accents, noise conditions, prosody, or disfluencies\. We propose Verifiable Invariant Reinforced Behavior Alignment \(VIRBA\), a reinforcement\-learning framework for aligning SpeechLM behavior across acoustic realizations of the same semantic intent\. VIRBA builds multi\-view spoken instruction groups, scores sampled responses with semantic preference, rule\-verifiable correctness, cross\-acoustic invariance, and adaptive reasoning rewards, and optimizes the model with Cross\-Acoustic Group Relative Policy Optimization \(CA\-GRPO\)\. The resulting objective moves SpeechLM alignment beyond teacher imitation toward robust reasoning policies that remain stable across realistic spoken realizations\. Experiments with recent SpeechLM baselines, disfluency robustness, spoken QA, audio reasoning, and speech\-to\-text translation show the largest gains on reasoning\-heavy and acoustically perturbed spoken prompts\.

## Bayesian Test\-Time Inference of Task\-Aligned Similarity from Weak Interactive Feedback

**Authors:** Weida Liang; Kenji Kawaguchi

**ID:** 152715 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QtmggfhlQ9>) | [PDF](<https://openreview.net/pdf?id=QtmggfhlQ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152715>)

Large language model systems repeatedly make test\-time decisions by comparing similarity\. They retrieve exemplars, rerank candidates, and choose revisions\. But similarity is not unique: a candidate can be close lexically, semantically, structurally, or stylistically, while only one of these axes may matter for the current instance\. We propose BASIS\~\(Bayesian Axis Selection via Interactive Signals\), a training\-free Bayesian framework that treats weak feedback as evidence about this latent task\-aligned axis\. BASIS maintains a posterior over candidate targets and similarity axes\. It updates this posterior from scalar scores, pairwise preferences, or verifier outputs, and then chooses future probes by expected information gain\. In a finite noisy similarity model, we show that fixed\-axis and fixed\-mixture rules can remain suboptimal under axis shift\. Across concept recovery, reasoning exemplar selection, response refinement, and adversarial distractors, BASIS consistently outperforms stronger rerankers, static mixtures, and compute\-matched best\-of\-$N$ search under the same candidate pools and feedback budgets\. The average gains are moderate because all methods share the same backbone, candidate pools, and feedback signals\. Under axis shift, however, the gap widens substantially, showing that latent\-axis inference is not fully replaced by better scoring or more search alone\.

## Frontier Coding Agents Use Metaprogramming to Adapt to Unfamiliar Programming Languages

**Authors:** Aman Sharma; Sushrut Thorat; Paras Chopra

**ID:** 152963 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P4Ev2InDix>) | [PDF](<https://openreview.net/pdf?id=P4Ev2InDix>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152963>)

LLM\-based coding agents are usually evaluated in familiar software settings: mainstream languages, common libraries, and public repositories\. These benchmarks remain important, but they can hide how agents behave when the language itself is unfamiliar\. We evaluate six contemporary coding agents on four esoteric programming languages using a sequential setup with file editing, local execution, and hidden\-test grading\. Our protocol exposes capability differences between these agents that mainstream coding and agentic benchmarks such as SWE\-Bench Verified and Terminal\-Bench 2\.0 compress into much narrower bands\. We observe that the strongest agents, Claude Opus 4\.6 and GPT\-5\.4 xhigh, often avoid writing the target language directly\. On Brainfuck and Befunge\-98, they write Python programs that generate target\-language code and debug those generators locally\. Forbidding this metaprogramming strategy causes large performance drops\. Text guidance distilled from this strategy does not materially improve weaker agents\. In contrast, Opus\-derived Python helper code for building generators, with no solved benchmark programs or hidden\-test answers, sharply improves Sonnet 4\.6 and GPT\-5\.4 mini on the same problems, while Haiku 4\.5 remains low\. More interpreter calls and output tokens improve stronger agents but leave weaker agents near their original performance, indicating that these resources amplify useful strategies rather than create them\. Together, these results show that strong coding agents adapt to unfamiliar languages by using tools, feedback, and workspace state to build a working model of the target language\. Metaprogramming is the clearest case, but the broader gap is constructing and debugging a strategy that works under the target language's rules\.

## When Reasoning Meets Its Laws

**Authors:** Junyu Zhang; Yifan Sun; Tianang Leng; Jingyan Shen; Liu Ziyin; Paul Liang; Huan Zhang

**ID:** 155285 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ha7HGdygP>) | [PDF](<https://openreview.net/pdf?id=6ha7HGdygP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155285>)

Despite the superior performance of Large Reasoning Models \(LRMs\), their reasoning behaviors are often counterintuitive, \*e\.g\.\*, excessive reasoning on simple questions or insufficient reasoning on complex ones, leading to suboptimal reasoning capabilities\. This paper presents the Laws of Reasoning \(LoRe\), a unified framework that formalizes intrinsic reasoning patterns in ideal LRMs\. We first propose \*compute law\* with the hypothesis that the reasoning compute should scale linearly with question complexity\. Beyond compute, we extend LoRe with a supplementary \*accuracy law\*, positing exponential decay of accuracy with increasing complexity\. Since the complexity is difficult to quantify in practice, we approximate these hypotheses via two tractable properties, \*monotonicity\* and \*compositionality\*\. We therefore introduce LoRe\-Bench, a benchmark that systematically measures these properties for large reasoning models\. Evaluation shows that most reasoning models exhibit reasonable monotonicity but lack compositionality\. In response, we develop an effective finetuning approach that enforces compute\-law compositionality\. Extensive empirical studies demonstrate that better compliance with compute laws yields consistently improved reasoning performance on multiple benchmarks, and uncovers synergistic gains across properties and laws\.

## Speech Tokenizers are Vulnerable:  Transferable Semantic Attack and Robust Tokenizer

**Authors:** Zhisheng Zhang; Yifan Mi; Yixuan Zhou; Haiyun Li; dongfu song; Shengbo Cai; Ziang Xu; Jie Hao; Zhiyong Wu

**ID:** 149645 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oVx8Urehhw>) | [PDF](<https://openreview.net/pdf?id=oVx8Urehhw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149645>)

_Abstract unavailable from the accessible public sources._

## WordEval: Evaluating Word\-Native Operation Fidelity in Document Editing

**Authors:** Jinyoung Park; Yupan Huang; Shimin Zhang; Jiayu Ding; Yilin Jia; Yuzhong Zhao; Tengchao Lv; Wenshan Wu; Shaohan Huang; Nan Yang; Xiangyang Zhou; Dongdong Zhang; Li Dong; Lei Cui; Sun Mao; Xun Wang; Tao Ge; Huitian Jiao; Si\-Qing Chen; Changick Kim; Furu Wei

**ID:** 139228 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dfw3UZyY85>) | [PDF](<https://openreview.net/pdf?id=dfw3UZyY85>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139228>)

_Abstract unavailable from the accessible public sources._

## Progress\-Aware Distillation for Mitigating Stagnation in Small Language Model Agents

**Authors:** Yuanpu Cao; Saket Sathe; Hanyu Wang; Ziyi Yin; Fenglong Ma; Jinghui Chen

**ID:** 149176 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sJMXfTlER4>) | [PDF](<https://openreview.net/pdf?id=sJMXfTlER4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149176>)

While LLM\-based agent systems have demonstrated remarkable proficiency in reasoning and solving complex real\-world tasks, they also come with substantial token consumption and inference latency, limiting their practical deployment\. To enhance the efficiency of agent systems, recent efforts have focused on transferring agentic capabilities from large\-scale models to small language models \(SLMs\) via supervised fine\-tuning\-based distillation\. Nevertheless, as interaction trajectories grow longer, involving extended reasoning\-action chains and extensive environmental feedback, distilled student agents tend to experience progress stagnation: becoming trapped in unproductive loops characterized by persistent failed strategies and difficulty making meaningful progress\. Our systematic analysis shows that this phenomenon consistently occurs across diverse SLMs and task domains\. To address this issue, we propose Progress\-Aware Distillation \(ProD\), which explicitly detects and penalizes stagnation in student\-generated trajectories\. ProD encodes the stagnation gap between student and teacher into an adaptive margin for dynamically penalizing possible stagnation\. By iteratively applying this procedure, ProD enables student agents to progressively approximate teacher behavior\. Extensive experiments involving 8 SLMs, ranging from 0\.6B to 8B parameters, on both in\-domain and out\-of\-domain benchmarks, demonstrate that ProD substantially mitigates progress stagnation while enhancing both the success rates and task\-completion efficiency of distilled SLM agents\.

## Confidence\-Calibrated Inference Expansion for Evaluator\-Guided Test\-Time Reasoning

**Authors:** Weida Liang; Kenji Kawaguchi

**ID:** 155179 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7idt098hbk>) | [PDF](<https://openreview.net/pdf?id=7idt098hbk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155179>)

Evaluator\-guided reasoning systems face a local control problem: given a current answer and evaluator evidence, should the system trust, fallback, or buy more inference? We formulate this as a compute\-aware three\-action controller over \*trust\*, \*fallback\*, and \*expand\*, where each action is scored by predicted eventual success minus explicit compute cost\. The central quantity is \*action\-specific confidence\*: the success probability induced by trusting now, falling back now, or expanding once and continuing\. We show that local action selection is stable when confidence error is smaller than the compute\-adjusted action gap, and that regret accumulates only along the realized expansion path\. Guided by this analysis, we learn one confidence head per action, calibrate the heads on held\-out data, and penalize locally uncertain actions\. Across verifier\-guided width expansion on MATH and AIME25 and judge\-guided revision expansion on a deterministic\-answer General Reasoning benchmark, calibrated control improves the utility\-\-compute frontier relative to strong fixed and adaptive baselines\. The same pattern persists under policy\-induced expansion targets, same\-feature budget routers, fallback removal, stronger learned controllers trained on the same features, and moderate evaluator mismatch after refitting and recalibration\. When compute is free, high\-budget policies can remain competitive; the gain here is compute\-efficient allocation, not a uniformly stronger reasoner\.

## Learning Visual Speech Representations via Cross\-Modal Distillation and Joint Face\-Lip Modeling

**Authors:** Jingxuan Zhang; Genshun Wan; Jia Pan; Jianqing Gao; Yumei Zhang; Lichen Zhang

**ID:** 149522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pVrKNRkHe2>) | [PDF](<https://openreview.net/pdf?id=pVrKNRkHe2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149522>)

Lipreading remains challenging due to the inherent ambiguity of visual speech cues and their sensitivity to head pose and video resolution\. In this work, we propose FLARE, a framework for robust visual speech representation learning via cross\-modal distillation and joint face\-lip modeling\. FLARE leverages semantically rich Whisper representations as the acoustic teacher signal, converting them into discrete distillation targets through a random\-projection quantizer and pretraining the model with a masked prediction objective\. To capture complementary visual information, FLARE employs a dual\-stream architecture that jointly processes lip region\-of\-interest \(ROI\) and full\-face inputs, where the lip stream captures fine\-grained articulatory motion and the face stream encodes broader facial dynamics\. During pretraining, auxiliary audio input is incorporated to facilitate cross\-modal alignment, and modality dropout is applied to encourage robust visual\-only representations\. For downstream lipreading, FLARE serves as a visual encoder coupled with either a lightweight Transformer decoder or an LLM\-based decoder\. Evaluated on LRS2, LRS3, and the out\-of\-domain WildVSR benchmark, FLARE achieves state\-of\-the\-art word error rates of 11\.7%, 13\.2%, and 34\.3%, respectively\. A progressive design study confirms the contribution of each major component\. Further analyses demonstrate that joint face\-lip modeling improves robustness under degraded video resolution and large head pose variation, while yielding more phoneme\-discriminative visual representations\. Code and pretrained models are available at https://anonymous\.4open\.science/r/FLARE\-522C\.

## RL\-Guided Temporal Localization for Dual\-Channel Retrieval in Long\-Horizon Agent Memory

**Authors:** Dabin Sheng; Zhe Wu; Jinming Zhao; Junliang Xing; Yuanchun Shi

**ID:** 152090 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VaEouLMkHw>) | [PDF](<https://openreview.net/pdf?id=VaEouLMkHw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152090>)

Time\-aware retrieval is crucial for long\-horizon LLM agents to effectively leverage ever\-growing long\-term memory\. Existing methods focus on lexical or semantic similarity, leading to target memories being crowded out by temporally mismatched yet semantically similar candidates\. Even time\-aware approaches inject temporal cues only during memory organization or answer generation, overlooking temporal constraints at the retrieval stage, where candidate selection occurs—the root cause of the displacement\. Inspired by the temporal contiguity effect in human episodic memory, we propose TIDER \(Temporal Interval\-driven Dual\-channel Evidence Retrieval\), a time\-aware agentic retrieval framework\. Central to TIDER is a reinforcement learning \(RL\)\-trained temporal interval locator that infers the temporal windows in which the evidence lies\. RL optimizes window localization as a discrete, non\-differentiable retrieval decision, using composite rewards to convert sparse answer supervision into fine\-grained retrieval feedback\. These temporal windows first define the temporal retrieval channel; the retrieved candidates are then merged with results from the semantic channel and reranked by proximity to the windows\. This temporal grounding enables TIDER to retrieve temporally aligned evidence that would otherwise be drowned out by the volume of semantically similar yet temporally mismatched memories\. With a lightweight 1\.7B locator, TIDER achieves state\-of\-the\-art accuracy on both long\-horizon memory benchmarks—61\.52% on LifeBench \(\+8\.82%\) and 78\.96% on LoCoMo \(\+3\.66%\), which indicates that temporal cues are crucial for pinpointing target evidence amid a vast pool of semantically similar historical events in long\-term daily\-life memory\.

## Composition\-RL: Compose Your Verifiable Prompts for Reinforcement Learning of Large Language Models

**Authors:** Xin Xu; Clive Bai; Kai Yang; Tianhao Chen; Yuchen Cai; Yangkun Chen; Weijie Liu; Hao CHEN; Yang Wang; Saiyong Yang; Can Yang

**ID:** 148886 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uSnERGG6v9>) | [PDF](<https://openreview.net/pdf?id=uSnERGG6v9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148886>)

Large\-scale verifiable prompts underpin the success of Reinforcement Learning with Verifiable Rewards \(RLVR\), but they contain many uninformative examples and are costly to expand further\. Recent studies focus on better exploiting limited training data by prioritizing hard prompts whose rollout pass rate is 0\. However, easy prompts with a pass rate of 1 also become increasingly prevalent as training progresses, thereby reducing the effective data size\. To mitigate this, we propose Composition\-RL, a simple yet useful approach for better utilizing limited verifiable prompts targeting pass\-rate\-1 prompts\. More specifically, Composition\-RL automatically composes multiple problems into a new verifiable question and uses these compositional prompts for RL training\. Extensive experiments across model sizes from 4B to 30B show that Composition\-RL consistently improves reasoning capability over RL trained on the original dataset\. Performance can be further boosted with a curriculum variant of Composition\-RL that gradually increases compositional depth over training\. Additionally, Composition\-RL enables more effective cross\-domain RL by composing prompts drawn from different domains\. All our codes, compositional datasets, and models will be released to facilitate future research\.

## WavNAF: Learning Wave Propagation Priors for Neural Acoustic Fields

**Authors:** Taeho Kim; Hyunjun Kim; MinKyu Lee; SuBeen Lee; Inkyu An; Jae\-Pil Heo

**ID:** 150632 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ge6kZTflBU>) | [PDF](<https://openreview.net/pdf?id=ge6kZTflBU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150632>)

_Abstract unavailable from the accessible public sources._

## Breaking Adversarial Transferability in Fine\-Tuned Speech Recognition

**Authors:** Mojtaba Nafez; Aref Mousavi; Mohammad E Mahdavi; Mobina Poulaei; Kiarash K Feriz; Mohammad Hossein Rohban

**ID:** 153915 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hk5S6s2xN9>) | [PDF](<https://openreview.net/pdf?id=Hk5S6s2xN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153915>)

_Abstract unavailable from the accessible public sources._

## Pruning and Distilling Mixture\-of\-Experts into Dense Language Models

**Authors:** Junhyuck Kim; Jihun Yun; Haechan Kim; Gyeongman Kim; Joonghyun Bae; Jaewoong Cho

**ID:** 150472 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hmvlyb1yQu>) | [PDF](<https://openreview.net/pdf?id=hmvlyb1yQu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150472>)

_Abstract unavailable from the accessible public sources._

## Planning Persuasion, Not Utterances: Profile\-Conditioned Open\-Loop Search for Dialogue Strategy

**Authors:** Zhiming Lin; Kai Zhao; Yuliang Gai; Chengzhen Yu; Ruibo Duan; Yihao Zhong; Xuan Zhang

**ID:** 153963 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HCOhbXzn7c>) | [PDF](<https://openreview.net/pdf?id=HCOhbXzn7c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153963>)

_Abstract unavailable from the accessible public sources._

## PAAC: Privacy\-Aware Agentic Device\-Cloud Collaboration

**Authors:** Liangqi Yuan; Wenzhi Fang; Shiqiang Wang; Christopher Brinton

**ID:** 149491 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pkgQ4KB4Se>) | [PDF](<https://openreview.net/pdf?id=pkgQ4KB4Se>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149491>)

_Abstract unavailable from the accessible public sources._

## C3: Long\-Horizon Character Consistency via Causal\-Continuous State Dynamics and Memory Rewriting

**Authors:** Minghao Chen

**ID:** 151786 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y0keyhhQHc>) | [PDF](<https://openreview.net/pdf?id=Y0keyhhQHc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151786>)

_Abstract unavailable from the accessible public sources._

## Knowing What is Missing: Efficient Conversational Memory via Explicit Evidence\-Gap Tracking

**Authors:** Xingbo Du; Loka Li; Duzhen Zhang; Leonard Song; Le Song

**ID:** 149691 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o9MB6dPOa4>) | [PDF](<https://openreview.net/pdf?id=o9MB6dPOa4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149691>)

_Abstract unavailable from the accessible public sources._

## MemSkill: Learning and Evolving Memory Skills for Self\-Evolving Agents

**Authors:** Haozhen Zhang; Quanyu Long; Jianzhu Bao; Tao Feng; Weizhi Zhang; Haodong Yue; Wenya Wang

**ID:** 155719 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3R1dZaZmxU>) | [PDF](<https://openreview.net/pdf?id=3R1dZaZmxU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155719>)

_Abstract unavailable from the accessible public sources._

## AudioCALM: Continuous Autoregressive Language Modeling for Universal Audio Generation

**Authors:** Huadai Liu; Kaicheng Luo; Wen Wang; Qian Chen; Bin Ma; Xiangang Li; Wei Xue

**ID:** 149240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rta7h4O2eL>) | [PDF](<https://openreview.net/pdf?id=rta7h4O2eL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149240>)

Unifying speech, sound, and music generation in one model is hindered by tradeoffs between fidelity, end\-to\-end training, in\-context conditioning, and variable\-length synthesis that no current paradigm fully resolves\. To address this challenge, we present \*\*AudioCALM\*\*, a universal audio generation framework that extends autoregressive \(AR\) next\-token prediction from discrete tokens to continuous audio latents: a thin flow\-matching head replaces the softmax to predict rectified\-flow velocities at each position, and a block\-causal AR\-Flow attention pattern produces arbitrary\-length output\. Joint training of multiple audio generation tasks faces an asymmetric text\-\-audio mismatch: speech transcripts align to specific time spans and demand \\textit\{tight, time\-aligned\} attention, whereas sound and music captions describe only overall semantics and rely on diffuse, holistic attention; mixing the two disproportionately degrades sound and music generation\. We address this asymmetry at two levels: a \\textbf\{data reformulation\} strategy that unifies all three tasks under a single description\-style conditioning interface, and a novel architecture Asymmetric Mixture\-of\-Modality\-Experts \(A\-MoME\), which adds a dedicated residual expert for speech while sound and music share the backbone, incurring no inference overhead on non\-speech inputs\. Experimental results demonstrate that AudioCALM matches modality\-specific state\-of\-the\-art and outperforms prior unified baselines on speech, sound, and music generation benchmarks\.

## StateTree: Enhancing Long\-term Dialogue Reasoning via Reinforcement Learning

**Authors:** Naen Xu; Wanqing Cui; Yibo Hu; Shixin Hong; Hengyu An; Meiguang Jin; Junfeng Ma; Tianyu Du

**ID:** 151920 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wtmbj6bI9C>) | [PDF](<https://openreview.net/pdf?id=Wtmbj6bI9C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151920>)

Large language models deployed as personalized assistants must reason over long, evolving interaction histories\. However, in long\-term dialogue reasoning, relevant evidence is scattered across sessions, preferences may be revised over time, and standard long\-context training fails to address these challenges under data scarcity and prohibitive computational costs\. We propose StateTree, a data\-driven RL pseudo\-task that constructs a challenging auxiliary task from scarce dialogues with verifiable ground truth\. StateTree augments multi\-session dialogues with a tree\-structured path\-tracing task: key\-value records are embedded across sessions to form a binary tree\. Solving the task requires the model to traverse from root to leaf by retrieving records across sessions and comparing timestamps to resolve branches, then recover the hidden target question among distractor leaves\. We apply curriculum RL training progressively increasing tree depth and introduce a compositional variant whose edges carry step\-level reasoning fragments, training the model to compose partial cues into coherent queries\. Trained on 10K\-token contexts, StateTree generalizes to 128K tokens without full\-length RL costs and exhibits capabilities including cross\-session retrieval, temporal reasoning, knowledge update, and compositional multi\-hop reasoning\. StateTree outperforms both SFT and RL\-based baselines while preserving short\-context general reasoning\. StateTree\-7B achieves gains up to \+23\.60% on LongMemEval \(128k\), and StateTree\-14B reaches 59\.00% accuracy on LongMemEval, surpassing QwenLong\-L1\-32B \(45\.20%\)\.

## Defense\-as\-Skill: Evolving Runtime Guard Skill for Skill\-Augmented Agents

**Authors:** Xiaofang Yang; Ziqi Miao; Dianbo Sui; Jing Shao; Lijun Li

**ID:** 152017 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W8hQZI7IzO>) | [PDF](<https://openreview.net/pdf?id=W8hQZI7IzO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152017>)

Skill\-augmented agents load reusable skills as persistent runtime context, improving task performance but also giving malicious skills a durable channel for steering future actions\. Such skills may leak secrets, corrupt code, bypass approvals, or stage data for exfiltration only after a concrete user task and workspace state make the unsafe action appear useful\. This makes pre\-install vetting insufficient and calls for runtime, task\-conditioned protection\. We propose Defense\-as\-Skill, a defense paradigm that implements the runtime guard itself as an installable, inspectable, and editable skill\. Our guard, SkillSonar, runs alongside untrusted task skills and checks sensitive actions against the user's task boundary, routing each action to an allow, replan, or confirmation decision without modifying the underlying agent runtime\. To study this setting, we construct SCOPE\-R, a task\-conditioned dataset covering 6 risk families and 21 sub\-categories, with 206 attack\-confirmed malicious instances and 43 benign tasks\. We then improve SkillSonar on the SCOPE\-R training subset using runtime guard\-skill evolution, a Monte\-Carlo Tree Search procedure that evolves the on\-disk guard skill from feedback on the rollouts\. On held\-out SCOPE\-R test splits across Claude Code and OpenClaw backends, SkillSonar reduces attack success while preserving benign utility, maintaining modest token overhead, and transferring to OOD attack families\. These results show that runtime guards can be skill\-native, transparent, and evolvable policy artifacts for skill\-augmented agents\.

## RVR: Retrieve\-Verify\-Retrieve for Comprehensive Question Answering

**Authors:** Deniz Qian; Hung\-Ting Chen; Eunsol Choi

**ID:** 154429 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DfGZJUo1mT>) | [PDF](<https://openreview.net/pdf?id=DfGZJUo1mT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154429>)

Comprehensively retrieving diverse documents is crucial to address queries that admit a wide range of valid answers\. We introduce retrieve\-verify\-retrieve \(RVR\), a multi\-round retrieval framework designed to maximize answer coverage\. Initially, a retriever takes the original query and returns a candidate document set, followed by a verifier that identifies a high\-quality subset\. For subsequent rounds, the query is augmented with previously verified documents to uncover answers that are not yet covered in previous rounds\. RVR is effective even with off\-the\-shelf retrievers, and fine\-tuning retrievers for our inference procedure brings further gains\. Our method outperforms baselines, including agentic search approaches, achieving at least 10\\% relative and 3\\% absolute gain in complete recall percentage on a multi\-answer retrieval dataset \(QAMPARI\)\. We also see consistent gains on two out\-of\-domain datasets \(QUEST and WebQuestionsSP\) across different base retrievers\. Our work presents a promising iterative approach for comprehensive answer recall leveraging a verifier and adapting retrievers to a new inference scenario\.

## MILES: Modular Instruction Memory with Learnable Selection for Self\-Improving LLM Reasoning

**Authors:** Ruilin Tong; Dong Gong

**ID:** 155027\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155027

[Paper](<https://openreview.net/forum?id=94TqZuHU8A>) | [PDF](<https://openreview.net/pdf?id=94TqZuHU8A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155027>)

Large language models \(LLMs\) increasingly improve their reasoning at test time via additional computation, yet most procedures treat each problem in isolation\. When problems arrive sequentially, accumulating reusable experience across them can further improve performance\. Existing memory\-based methods either store whole\-solution templates that generalize poorly to novel problems or use heuristic step\-level selection that is not optimized for final\-answer correctness\. Learning selection policies requires large\-scale training data and fixed action spaces\. We propose MILES \(Modular Instruction Memory with LEarnable Selection for self\-improving LLM reasoning\), a framework that dynamically expands step\-wise memory and applies correctness\-optimized memory composition under realistic test\-time constraints\. MILES maintains modular memory units consisting of asymmetric pairs of sub\-goal embeddings and sub\-instructions, each associated with a learnable selection head\. This memory structure enables a coarse\-to\-fine retrieval mechanism: The coarse level enables memory expansion and collects supervision for training selection heads from confident samples, while the fine stage applies learned selection heads to rerank coarse\-level candidates and guide reasoning for uncertain samples\. MILES consistently matches or outperforms prior methods while achieving superior accuracy–efficiency tradeoffs\. Extensive experiments demonstrate its effectiveness, robustness, and transferability\.

## Scaling Point\-in\-Time Language Models: Economic Evaluation of Embeddings

**Authors:** Bryan Kelly; Semyon Malamud; Johannes Schwab; Teng A Xu

**ID:** 139251\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139251

[Paper](<https://openreview.net/forum?id=c7yKlceZYq>) | [PDF](<https://openreview.net/pdf?id=c7yKlceZYq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139251>)

Large language models trained on unrestricted internet corpora inevitably embed information from the future, introducing lookahead bias that compromises the validity of backtests and causal inference in finance and the social sciences\. Point\-in\-time language models—trained exclusively on text available up to each calendar date—eliminate this leakage by construction, but existing efforts typically produce models that lag substantially behind their unconstrained counterparts\. We show that this performance gap can be narrowed through scale\. Training decoder\-only transformers with up to 4 billion parameters on 1 trillion chronologically filtered tokens from FineWeb, we construct a sequence of yearly model checkpoints spanning 2013–2024\. Across a range of common\-sense reasoning and language understanding benchmarks, our models approach the performance of leading open\-weight models of comparable size \(such as Gemma\-3\-4B and LLaMA\-7B\) trained on temporally unrestricted data, although a performance gap remains on several tasks\. Finally, in a strict out\-of\-sample economic evaluation task, portfolios built from point\-in\-time embeddings achieve robust positive Sharpe ratios and perform close to full\-sample counterparts that violate temporal validity, indicating that chronologically consistent language models can extract economically meaningful signals without relying on look\-ahead bias\. We release the complete pipeline—including dataset construction, training infrastructure, and evaluation code—to enable reproducible point\-in\-time language modeling and to support research applications that require strict temporal validity\. Code is available publicly on GitHub \(https://github\.com/DjoFE2021/Point\-In\-Time\-LLM\) and model checkpoints as well as training datasets can be accessed on Hugging Face \(https://huggingface\.co/datasets/Diamegs\)\.

## Hearing the Unspoken: Simulator\-Induced Asymmetric\-View Policy Optimization for Proactive Task\-Oriented Dialogue

**Authors:** Hongbin Zhang; Ning Gao; Yuqin Dai; Ruiyuan Wu; Jinpeng Wang; Rena Gao; Bingdong Tan; Shuzheng Gao; Chaozheng Wang

**ID:** 153222\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153222

[Paper](<https://openreview.net/forum?id=MsVDpPS4yS>) | [PDF](<https://openreview.net/pdf?id=MsVDpPS4yS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153222>)

Proactive task\-oriented dialogue \(TOD\), such as outbound sales, demands a persuasive agent that actively probes the user's concerns and steers the conversation toward acceptance within a bounded number of turns\. Yet post\-trained LLMs are inherently conservative, and reward\-shaping RL \(e\.g\., GRPO\) struggles since it only re\-weights what an already passive policy samples\. We show that conditioning on the user's latent concerns unlocks proactive capability that no amount of sampling can undermine, establishing these concerns as a pivotal training\-time signal\. To operationalize this finding, we build the \\textbf\{Cognitive User Simulator\}, which models each user as a stratified persona comprising observable external traits and hidden internal concerns\. The simulator produces faithful and diverse interactions, while emitting per\-turn state dynamics that track persuasion progress\. We then introduce \\textbf\{Simulator\-Induced Asymmetric\-View Policy Optimization\}, which converts the modeled concerns and the simulation state transition into complementary training objectives: \(1\) \\emph\{Asymmetric On\-Policy Self\-Distillation\} that transfers concern\-aware behavior from a privileged view of the same policy into its deployable, conversation\-only view; and \(2\) \\emph\{State\-Transition Policy Refinement\} where the final decision provides trajectory\-level advantage while synchronous state transitions refine turn\-level credit direction\. Across two real\-world food\-delivery benchmarks \(\\emph\{merchant\} and \\emph\{courier\} outbound recruitment\), our method matches or surpasses leading proprietary LLMs, outperforms strong RL baselines, and generalizes across various LLM\-based user simulators\.

## Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory

**Authors:** Jingwei Sun; Jianing Zhu; Jiangchao Yao; Tongliang Liu; Bo Han

**ID:** 150576\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150576

[Paper](<https://openreview.net/forum?id=h9Je8c91Qi>) | [PDF](<https://openreview.net/pdf?id=h9Je8c91Qi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150576>)

To enable reliable long\-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history\. Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning\. Nevertheless, such fact\-centric designs inevitably discard fine\-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts\. Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles\. To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments anchored by source identifiers for storage fidelity, extracted atomic facts for efficient memory retrieval, synthesized profiles that aggregate dispersed facts into holistic semantic understanding for deep reasoning\. We further adopt TextGrad\-based prompt optimization, which iteratively refines extraction and profiling prompts via response quality feedback, achieving lifelong evolution without any parameter updating\. Extensive experiments on LoCoMo and PerLTQA across multiple LLM backbones demonstrate that TriMem consistently outperforms strong memory baselines\.

## MemArena: An Ego\-Centric Benchmark for On\-Device Agentic Personal Memory Assistants at Scale

**Authors:** Jiadong Zhang; Xiaosong Ma

**ID:** 139685\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139685

[Paper](<https://openreview.net/forum?id=Ae9Cmj7ofy>) | [PDF](<https://openreview.net/pdf?id=Ae9Cmj7ofy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139685>)

Edge\-deployed personal memory assistants must handle private interpersonal conversations on\-device with open\-weight models\. Yet, existing memory benchmarks often under\-test the combination of activity\-dense interaction, ego\-centric perspective, and coherent multi\-session worlds\. MemArena fills these gaps with a single\-world conversational benchmark built with its MASim agent simulator, for $50$ agents over $15$ days \($10\.3$M dialog\-text tokens, $24\.1$K text\-only ego\-observed tokens/agent/day\)\. With the interaction history, it co\-generates ground truth over six recall, reasoning, and trustworthiness evaluation dimensions\. We evaluate five open\-weight readers with Vanilla context, BM25\-RAG, Oracle retrieval, Memobase, and MemSearch as memory backends\. Three results stand out: \(1\) Memory\-backend choice matters more for content accuracy: At Qwen3\-0\.6B, Memobase $\\to$ MemSearch gains $\+32\.5/\+19\.2$ pp, exceeding MemSearch reader scaling \($\+10\.6/\+6\.8$ pp\)\. \(2\) Permission\-aware access fails universally: with Oracle leaking heavily and other backends too timid to disclose\. \(3\) Search latency bites only at very small reader: on a Spark GB10 edge node, memory\-search adds a moderate and fixed $87$/$7$/$48$ ms \(BM25\-RAG/Memobase/MemSearch\) that composes a small part of TTFT for most reader\-backend combinations\. We release code, the MASim simulator, and the MemArena\-L benchmark at https://anonymous\.4open\.science/r/MemArena\-NeurIPS2026\-anon\-3E9D

## Sandboxed Coding Agents are Competitive Omni\-modal Task Solvers

**Authors:** Dongping Chen; Xuanao Huang; Zhihan Hu; Qingyuan Shi; Dianqi Li; Tianyi Zhou

**ID:** 148209\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148209

[Paper](<https://openreview.net/forum?id=zYMvOwt5bN>) | [PDF](<https://openreview.net/pdf?id=zYMvOwt5bN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148209>)

As multimodal LLMs increasingly emphasize video and audio, a common assumption is that solving such tasks calls for native omnimodal models\. We show that this is not always necessary: coding agents equipped with only text\+vision and a sandboxed tool\-using interface can perform competitively with, and in several settings outperform, SOTA native omnimodal models and predefined multimodal agent scaffolds across multiple audio\-video benchmarks\. Our trajectory analysis suggests that their advantage comes from coding agents writing code and orchestrating tools to retrieve relevant content from transcripts, frames, and other non\-textual modality signals from raw inputs\. This effectively converts omnimodal tasks into evidence retrieval and information processing problems, avoiding the inefficiency of ingesting entire videos or audio streams into context\. To characterize remaining limitations, we propose a failure taxonomy and a process\-level analysis of tool\-use traces, and find that simple skill injection, including human\-written skills and self\-distilled skills from execution logs, can substantially improve performance over the no\-skill baseline\. To examine whether such capability can be elicited in open\-source models, we further introduce Code\-X, a complete training recipe with the OmniCoding trajectory dataset and verifiable reward, providing an exploratory baseline on Qwen\-3\.5\-9B and Qwen\-3\.6\-27B\. Finally, given the maturity of many\-modality understanding, we argue that the more meaningful frontier lies in many\-modality processing, and introduce TerminalBench\-O, the first process\-level benchmark designed for coding agents on real\-world omnimodal processing tasks\. Together, our findings open new directions for omnimodal content processing and evaluation\.

## DUET: Unified Dual\-Space Emotion Control for Diffusion and Flow\-Matching Driven Text\-to\-Speech

**Authors:** Xu Zhang; Longbing Cao; zhangkai wu

**ID:** 153975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H6xBJ7xXPy>) | [PDF](<https://openreview.net/pdf?id=H6xBJ7xXPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153975>)

Diffusion and flow\-matching based text\-to\-speech \(TTS\) models excel in naturalness but often lack explicit emotion control, as emotional signals remain entangled with speaker identity\. We discover that emotion embedding emerges as a linearly decodable direction of frozen hidden states, nearly orthogonal to the direction embedding speaker identity\. This inspires a plug\-and\-play framework DUET for emotion control over pretrained diffusion and flow\-matching based TTS models\. During generation, DUET unifies dual\-space control to achieve fine\-grained emotion intervention in a single per\-step update: hidden space steering shifts generation along the target emotion direction, while mel\-space guidance refines spectral details through gradients backpropagated from a differentiable vocoder\. We validate DUET on five architecturally diverse pretrained TTS backbones across three datasets, where it outperforms 10 supervised state\-of\-the\-art emotional TTS baselines across paradigms and achieves the highest human\-rated emotion appropriateness\. To further showcase its qualitative behavior, we deploy DUET on an Ameca humanoid robot, where it produces richly expressive emotional speech on the humanoid, demonstrating the strong potential for plug\-and\-play affective interaction for embodied agents\. The demonstration is available at: https://anonymous\.4open\.science/w/duet\-demo\-fresh\-D8E0

## Constraint Retrieval Is Not Constraint Enforcement in Large Language Models

**Authors:** Yongkang Yang; Xiankun Lin; Lixin Liu; Ziyan Liu; Xilin Xia; Zhiwei Zhuang; Zhezheng Hao; Wence Ji

**ID:** 155108 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8LYdKabYW6>) | [PDF](<https://openreview.net/pdf?id=8LYdKabYW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155108>)

Prompt\-level instructions are the main way users give language models preferences, safety boundaries, and content rules\. But a model can remember a constraint and still violate it when generating text\. This points to a gap between two abilities that are often treated as one: retrieving a constraint from context, and enforcing it during token selection\. Across five model families \(0\.5B\-\-32B parameters\), we find a clear behavioral split: constraints that admit an alternative generation plan are largely followed, while token\-level prohibitions fail whenever the prohibited continuation is locally dominant\. Mechanistic analyses show that retrieval heads still attend to the constraint at the violation step, but the resulting signal either paradoxically enhances the prohibited token's logit or suppresses it too weakly to change the argmax\. Decoding\-time interventions can eliminate surface\-form violations, but semantic compliance still requires higher\-level verification\. These results establish that constraint retrieval and constraint enforcement are separable capabilities, and that reliable token\-level compliance requires explicit veto mechanisms beyond prompting\.

## Long\-Horizon Agency Belongs in the Harness, Not the Context Window Only

**Authors:** Yi Han; YUANYUAN XU; jusheng zhang; Wenhao Wang

**ID:** 139997\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139997

[Paper](<https://openreview.net/forum?id=xSWlOTsbou>) | [PDF](<https://openreview.net/pdf?id=xSWlOTsbou>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139997>)

Long\-horizon agency requires an AI system to preserve task state across hours or days of work, many tool calls, and repeated context resets\. A common response is to scale a single resource: the model’s context window, together with inference\-time reasoning\. We argue that this response conflates long horizon with long context\. Durable long\-horizon state should not live only in the prompt; it should be externalized into the harness, the non\-model infrastructure that manages tools, files, plans, checkpoints, sub\-agents, permissions, and recovery\. Publicly documented long\-running agent systems already rely on such structures, including progress files, plan files, git history, rollback checkpoints, scratchpads, sub\-agent decomposition, and browser\-state checkpoints\. We support this position with three lines of argument\. First, memory\-hierarchy history shows that pressure to scale one working resource repeatedly gave way to externally managed hierarchical state\. Second, we identify five structural mismatches between long\-context scaling and long\-horizon agency: degraded effective context, lossy compaction, a single trust region, no transactional semantics, and no working\-set decomposition\. Third, we map long\-horizon requirements to what context scaling provides and what harness\-managed state must supply\. We conclude by proposing eight harness state\-management patterns and arguing that harness state should become a first\-class research object for long\-horizon agency\.

## How Fine\-Tuning Objectives Shape Layer\-Wise Information in LLM Hallucination Detection

**Authors:** Kaiyang Wan; Forrest Bao; Amin Ahmad; Yuxia Wang

**ID:** 152063\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152063

[Paper](<https://openreview.net/forum?id=Vlr7fHQiNH>) | [PDF](<https://openreview.net/pdf?id=Vlr7fHQiNH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152063>)

Under matched conditions, classifier\-head fine\-tuning \(\\textsc\{cls\}\) paradigm consistently outperforms the LLM\-as\-Judge sequence\-to\-sequence \(\\textsc\{s2s\}\) on binary hallucination detection\. We trace this gap to the representations induced by the two objectives\. Static analysis shows that \\textsc\{cls\} learns a task\-specific discriminative direction, pushing hidden states into a clear two\-cluster geometry with stronger class separation and linearly decodable label information\. By contrast, \\textsc\{s2s\} relies on the pretrained language\-modeling head to make decisions\. This minimizes the pressure to reorganize representations, leaving the hidden states much closer to the pretrained backbone\. Our analysis also reveals that the \\textsc\{cls\} signal saturates before the final layer, after which upper layers form a plateau of statistically interchangeable and largely redundant representations\. However, endpoint redundancy alone does not show whether these layers are dispensable during training\. Further training\-dynamics analysis reveals 1\) a lower pretrained substrate, 2\) a narrow upper\-middle \\textbf\{InfoWindow\} where task information emerges, and 3\) a later\-synchronizing upper plateau that mirrors this signal\. This mechanism motivates us to remove layers above the InfoWindow\. By truncating roughly 31\\% of the network, we obtain early\-exit models that match or exceed full\-model performance on Qwen3\-4B and 8B\. The same depth\-fractional prescription transfers to Llama\-3\.2\-3B and Mistral\-7B\-v0\.3\. We hope this helps guide efficient task\-specific LLM design\.

## Dialect ASR based on Multi\-View Pseudo\-Parallel Augmentation and Noise\-Robust Contrastive Learning

**Authors:** Jianing Zhou; Ziheng Zeng; Hongyu Gong; Suma Bhat

**ID:** 155164\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155164

[Paper](<https://openreview.net/forum?id=7oIszAz46V>) | [PDF](<https://openreview.net/pdf?id=7oIszAz46V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155164>)

Recent advancements in Automatic Speech Recognition \(ASR\) have significantly improved performance for high\-resource languages, yet ASR systems still struggle with low\-resource languages and dialects due to the scarcity of annotated training data\. To address this challenge, we propose a novel framework that enhances the utilization of limited data through a two\-pronged approach: \(1\) a novel data augmentation technique based on a multi\-view pseudo\-parallel strategy, and \(2\) a robust multi\-level contrastive learning framework capable of jointly leveraging semantic and dialect\-specific attributes to improve model effectiveness under noisy conditions\. Our approach effectively generalizes across dialectal variations when dialect data are non\-parallel, allowing acquisition of shared linguistic structures and dialectal distinctions\. Furthermore, our method could be simply transferred to scenarios where dialect data are parallel\. We validate our method by adapting the Whisper\-large model for Swiss German, Chinese and Arabic dialect ASR tasks, demonstrating substantial performance gains\. Specifically, our framework achieves up to a 48\.59% reduction in WER and 23\.16% reduction in CER under non\-parallel conditions, outperforming state\-of\-the\-art baselines\. These results highlight the robustness and adaptability of our approach for low\-resource dialectal ASR\. The data and codes will be public available upon acceptance\.

## Semantic Motion Anchors: Bridging Motion and Meaning in Co\-Speech Gestures

**Authors:** Varsha Suresh; Mohammad Mahdi Abootorabi; Mohamed Salman; M\. Hamza Mughal; Christian Theobalt; Ashwin Ram; Jürgen Steimle; Vera Demberg

**ID:** 154665\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154665

[Paper](<https://openreview.net/forum?id=BwJGCsV7Vl>) | [PDF](<https://openreview.net/pdf?id=BwJGCsV7Vl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154665>)

Learning a shared representation between spoken text and gesture is central to co\-speech gesture retrieval, synthesis, and understanding, but remains challenging for semantically meaningful gestures whose communicative intent is not captured by motion alone\. Direct contrastive alignment between transcripts and continuous motion embeddings often overemphasizes low\-level kinematics and misses the symbolic content of semantic gestures\. We propose \\emph\{semantic motion anchors\}, natural\-language abstractions of gesture motion capturing physical form and communicative intent\. Our method discretizes 3D gestures into body\-hand motion primitives, verbalizes them into structured descriptions, and grounds them in the transcript to provide auxiliary contrastive supervision\. On BEAT2, our method improves text\-to\-gesture R@1 by 8\.2\\% over a direct text\-motion baseline and outperforms prior retrieval approaches on text to gesture and gesture to text retrieval directions\. Beyond aggregate retrieval metrics, semantic motion anchor supervision helps retrieve gestures that are semantically meaningful for the spoken query, rather than defaulting to generic motion patterns\. A downstream retrieval\-augmented gesture generation study showed that users significantly preferred gestures retrieved by our approach over a retrieval\-augmented generation baseline, demonstrating that semantically grounded retrieval translates to gestures that better convey communicative intent in downstream generation\.

## Controllable User Simulation

**Authors:** Guy Tennenholtz; Ofer Meshi; Amir Globerson; Uri Shalit; Jihwan Jeong; Craig Boutilier

**ID:** 148816\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148816

[Paper](<https://openreview.net/forum?id=uus8MMsekx>) | [PDF](<https://openreview.net/pdf?id=uus8MMsekx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148816>)

Using offline datasets to evaluate conversational agents often fails to cover rare scenarios or to support testing new policies\. This has motivated the use of \\emph\{controllable user simulators\} for targeted, counterfactual evaluation, typically implemented by prompting or fine\-tuning large language models\. In this work, we formalize controllable simulation as a causal inference problem\. By bridging natural language evaluation with off\-policy evaluation methodology, we show that the standard practice of training simulators via supervised fine\-tuning on post\-hoc trajectory labels yields a structurally biased model\. Specifically, these labels are inextricably coupled to the data\-generating behavior policy, injecting a \\emph\{look\-ahead bias\} that breaks causal consistency\. Furthermore, we prove that under policy shift this failure causes the variance of evaluation metrics to explode geometrically, a phenomenon we term \\emph\{controllability collapse\}\. To restore causal consistency, we establish theoretical conditions for accurate simulation and propose practical training mitigations: \\textit\{a priori\} controls, step\-wise dynamic controls, and direct policy\-conditioned learning\. Empirical evaluation confirms that while standard global controls distort conversational distributions and collapse behavioral diversity, our causally grounded simulators eliminate look\-ahead bias, preserve natural variance, and exhibit robust zero\-shot generalization to unseen agent behaviors\.

## Asymmetric Phase Coding Audio Watermarking

**Authors:** Guang Yang; Fengchen Liu; Amir Ghasemian; Zhong Wang; Ninareh Mehrabi; Homa Hosseinmardi

**ID:** 149813\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149813

[Paper](<https://openreview.net/forum?id=nAf6IJ9PSz>) | [PDF](<https://openreview.net/pdf?id=nAf6IJ9PSz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149813>)

The proliferation of deepfake audio challenges voice\-based authentication systems; passive forensic detectors are sensitive to evolving generative models and to real\-world channel distortions\. We propose Asymmetric Phase Coding \(APC\), a training\-free cryptographic signing layer for audio, designed as a compact and auditable provenance primitive that can stand alone or be stacked with learned watermarks\. APC combines Ed25519 digital signatures \(EdDSA, FIPS 186\-5; 64\-byte signatures\) with Reed–Solomon error correction, pseudo\-random STFT phase\-bin selection, and a redundant quantization\-index\-modulation \(QIM\) code on log\-magnitude differences of adjacent bin pairs, yielding a compact, non\-repudiable, blind\-extractable watermark\. We evaluate APC on 1,000 LibriSpeech test\-clean clips \(10 s each, 44\.1 kHz\) under eight attack configurations – identity, 10% end\-cropping, 20% end\-cropping, 8 kHz low\-pass, 16 kHz round\-trip resampling, FLAC re\-encoding, MP3 at 128 kbps, and OGG\-Vorbis at 128 kbps – and achieve cryptographic verification rates between 97\.5% and 98\.3% on every condition at mean PESQ=3\.02 and tens\-of\-milliseconds CPU latency\. We explicitly compare APC against recent neural baselines \(AudioSeal, WavMark, SilentCipher\), detail the threat model \(forgery resistance vs\. erasure\), characterize the dataset, define all metrics, quantify an adaptive white\-box erasure attack, and release code, keys, and metadata for reproducibility\.

## Reconstructing the Vocal Tract with Differentiable Acoustic Simulation

**Authors:** Eric Chen; Jin Woo Lee; Vincent Sitzmann

**ID:** 151084\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151084

[Paper](<https://openreview.net/forum?id=d61YXzFcB9>) | [PDF](<https://openreview.net/pdf?id=d61YXzFcB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151084>)

The human vocal tract, the cavity consisting of one's throat, mouth, lips opening, etc\., filters one's voice to create the sounds we know as speech\. In this paper, we present a differentiable and GPU parallelizable acoustic simulator that synthesizes speech by propagating sound along an acoustic tube representation of the vocal tract, and via its gradients, solves the inverse problem: reconstructing the geometry of their vocal tract solely from the sound it produces\. Although learning the inverse mapping between geometry and sound is notoriously non\-convex, we discover that gradient descent succeeds with three technical contributions: \(1\) we design a frequency domain formulation of the vocal tract's fluid dynamics that is 70x more GPU parallelizable than finite differences in time, \(2\) we integrate a differentiable model for turbulence to synthesize consonants, and \(3\) similar to prior work in implicit neural representations \(INRs\) and neural radiance fields \(NeRFs\), we find that parameterizing the geometry with a neural network accelerates convergence and escapes local minima that trap discrete representations\.   Because the simulator is differentiable, it is readily integrated with other deep learning pipelines to enable novel speech and medical imaging applications\. Our model can be used for instance, in singing instruction or language learning, where a visualization of one's vocal tract can help people understand how their vocal tract maps to different speech sounds\. To enable these tasks, \(1\) we demonstrate self\-supervised autoencoding of vocal tract shapes across 11 languages, and \(2\) we couple our simulator with a generative model of MRI images to reconstruct one's moving vocal tract from only their speech, no paired data required\.

## Reconsidering Positional Supervision in Masked Diffusion Language Model Training

**Authors:** Mengyu Ye; Keito Kudo; Ryosuke Takahashi; Jun Suzuki

**ID:** 152472\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152472

[Paper](<https://openreview.net/forum?id=SoXwBAJ8w9>) | [PDF](<https://openreview.net/pdf?id=SoXwBAJ8w9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152472>)

Masked diffusion language models \(MDLMs\) generate text by unmasking tokens in parallel and have recently emerged as alternatives to autoregressive language models\.  They can be viewed as parallel decoders trained with a position\-wise cross\-entropy \(CE\) loss, the same setup as non\-autoregressive translation \(NAT\)\.  In NAT, CE\-trained parallel decoders have been argued to be sensitive to small positional shifts, since CE penalizes them harshly\. We ask whether CE\-trained MDLMs are similarly sensitive to such shifts under iterative decoding\. To probe this, we apply a controlled intervention that introduces them during decoding\. On LLaDA\-8B\-Instruct with Arena\-Hard, displacing as little as 1\\% of generated tokens by one position substantially reduces win rates against the unintervened model, showing that MDLMs are sensitive to such small shifts under iterative parallel decoding\.  Motivated by this, we adapt connectionist temporal classification \(CTC\), an alignment\-flexible objective known to mitigate it there, to MDLM supervised fine\-tuning\.  By relaxing the strict position\-wise match that CE imposes, CTC gives the loss room to absorb small positional shifts; concretely, we modified CTC objective to use a special \\ token that absorbs positional uncertainty between target tokens and output positions, and a updated collapse map that preserves target surface forms\. Across four open\-ended generation benchmarks, the resulting model consistently improves over both the original model and a matched cross\-entropy\-trained baseline, with statistically significant gains on all four\. These results identify training\-side alignment flexibility as a useful design dimension for MDLM SFT, complementary to the inference\-time approaches explored in prior work\.

## Efficient Brain\-to\-Speech Decoding with Fixed\-Delay Spiking Neural Networks

**Authors:** Aleksandra Wisniewska; Seo\-Hyun Lee; Seong\-Whan Lee

**ID:** 151470 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aMneDSPCzZ>) | [PDF](<https://openreview.net/pdf?id=aMneDSPCzZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151470>)

_Abstract unavailable from the accessible public sources._

## Continuous Audio Thinking for Large Audio Language Models

**Authors:** Gyojin Han; DongJae Lee; Changho Choi; Jongsuk Kim; Junmo Kim

**ID:** 148651\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148651

[Paper](<https://openreview.net/forum?id=wA25uq7UK6>) | [PDF](<https://openreview.net/pdf?id=wA25uq7UK6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148651>)

_Abstract unavailable from the accessible public sources._

## SitCom: Scaling Egocentric Multi\-Party Spoken Dialogue for Situated Communication Assistance

**Authors:** Heeseung Yun; Sehun Lee; Sang Hoon Woo; Yoonji Nam; Sung\-Feng Huang; Chao\-Han H Yang; Gunhee Kim

**ID:** 155992\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155992

[Paper](<https://openreview.net/forum?id=1KuO44r5uN>) | [PDF](<https://openreview.net/pdf?id=1KuO44r5uN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155992>)

Multi\-party spoken communication pervades daily life, yet even attentive participants routinely lose track of who said what, miss a turn, or struggle to recall something said minutes earlier\. As always\-on wearables become commonplace, an assistant that listens alongside the user could ease this everyday friction\. We introduce \\textit\{Situated Communication Assistance\}: on\-demand support for users immersed in ongoing multi\-party conversations, grounded in the same egocentric acoustic scenes they perceive\. We argue this capability rests on three abilities: producing a Rich Situated Transcription \(RST\) of \\textit\{who\} said \\textit\{what\}, \\textit\{when\}, and \\textit\{where\}; comprehending the conversation holistically; and answering user queries while the conversation is unfolding\. To address the persistent data deficit in this regime, we build \\textbf\{SitCom\}, a multi\-party spoken dialogue corpus more than an order of magnitude larger than the largest prior multi\-party corpus, pairing 15\.8k hours of synthesized data with 144 hours of real recordings standardized under a unified RST schema\. The synthesis pipeline generates group\-structured scripts with persona\-grounded speech and behaviors, and renders them in 3D scenes through a directional simulator with head\-and\-torso radiation\. Using this corpus, we curate \\textbf\{SitCom\-Bench\}, a fully human\-validated question answering benchmark of 4\.3k items spanning seven comprehension and four in\-the\-moment query subtypes\. Experiments show that combining synthetic and real data is necessary to close the sim\-to\-real gap, and that in\-the\-moment querying remains hard even for frontier models, pointing to it as an open challenge distinct from post\-hoc comprehension\.

## Distilling Sequential Computation in Transformer Language Models

**Authors:** Zixuan Lan; Jessica Yang; Yanhong Li; Karen Livescu; Jiawei Zhou

**ID:** 150342\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150342

[Paper](<https://openreview.net/forum?id=iqGrRkvjJU>) | [PDF](<https://openreview.net/pdf?id=iqGrRkvjJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150342>)

Transformer language models process sequences token by token in an autoregressive manner, making growing contexts increasingly expensive\. Yet many adjacent token spans are highly predictable or frequently occur as stable units, suggesting that their representations may be compressible\. We introduce a method for distilling sequential computation by replacing spans of input tokens with collapsed representations, computed on the fly by a lightweight merge module\. This module generates a single surrogate embedding from a sequence of static token embeddings that captures the functional role of the multiple tokens, allowing pretrained models to operate on compressed inputs without architectural changes or re\-training\. We apply this approach during inference to compress both prompts and intermediate decoding steps, using a rollback mechanism to substitute stored multi\-token KV cache entries with their single\-step surrogates\. Experiments across diverse models show that the merge module can be used to reduce effective sequence length by up to 40\\% with minimal accuracy degradation across language\-modeling evaluations and downstream tasks, including question answering, summarization, commonsense reasoning, and long\-form mathematical reasoning\. Additional lightweight adaptation of the merge module further improves the accuracy\-compression trade\-off in selected settings\. These results demonstrate that sequential token computation in Transformers can be effectively approximated through condensed surrogate representations that preserve the original behavior without model updating\.

## UniClawBench: A Universal Benchmark for Proactive Agents on Real\-World Tasks

**Authors:** Zhekai Chen; CHENGQI DUAN; Kaiyue Sun; Bohao Li; Yuqing Wang; Manyuan Zhang; Xihui Liu

**ID:** 139060 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nVoCk7Bf1E>) | [PDF](<https://openreview.net/pdf?id=nVoCk7Bf1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139060>)

_Abstract unavailable from the accessible public sources._

## Constraint Retrieval Is Not Constraint Enforcement in Large Language Models

**Authors:** Yongkang Yang; Xiankun Lin; Lixin Liu; Ziyan Liu; Xilin Xia; Zhiwei Zhuang; Zhezheng Hao; Wence Ji

**ID:** 155108\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155108

[Paper](<https://openreview.net/forum?id=8LYdKabYW6>) | [PDF](<https://openreview.net/pdf?id=8LYdKabYW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155108>)

Prompt\-level instructions are the main way users give language models preferences, safety boundaries, and content rules\. But a model can remember a constraint and still violate it when generating text\. This points to a gap between two abilities that are often treated as one: retrieving a constraint from context, and enforcing it during token selection\. Across five model families \(0\.5B\-\-32B parameters\), we find a clear behavioral split: constraints that admit an alternative generation plan are largely followed, while token\-level prohibitions fail whenever the prohibited continuation is locally dominant\. Mechanistic analyses show that retrieval heads still attend to the constraint at the violation step, but the resulting signal either paradoxically enhances the prohibited token's logit or suppresses it too weakly to change the argmax\. Decoding\-time interventions can eliminate surface\-form violations, but semantic compliance still requires higher\-level verification\. These results establish that constraint retrieval and constraint enforcement are separable capabilities, and that reliable token\-level compliance requires explicit veto mechanisms beyond prompting\.

## Hi\-Q: Hierarchical Evidence\-guided Query Refinement for Multi\-Hop Question Answering

**Authors:** Jueun Kim; Sungho Park; WOOK SHIN HAN

**ID:** 155067 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8ikJufFS3i>) | [PDF](<https://openreview.net/pdf?id=8ikJufFS3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155067>)

A central bottleneck in multi\-hop Question Answering \(QA\) is that the granularity at which a question is expressed often differs from the granularity at which corpus evidence is retrievable\. Existing methods address this mismatch either by imposing fixed graph structures over the corpus or by iteratively reformulating the query, but these strategies do not explicitly decide when a query unit is already supported by evidence and when it should be refined\. We formulate this bottleneck as retrievable granularity discovery and introduce Hi\-Q, an evidence\-conditioned framework for hierarchical query refinement\. At each query node, a resolution operator tests whether retrieved evidence supports the current query unit; resolved nodes terminate, while unresolved nodes are expanded by a dependency\-preserving binary operator and checked by a semantic coverage verifier\. Hi\-Q therefore grows a query tree whose topology is determined by corpus support signals rather than by a fixed decomposition template or a pre\-built graph\. Across three multi\-hop QA benchmarks, Hi\-Q achieves 57\.9 EM and 69\.3 F1 on average, outperforming PropRAG, a graph\-based RAG baseline, by 5\.6 EM / 3\.9 F1 and IRCoT, an iterative retrieval baseline, by 13\.7 EM / 15\.8 F1\. Under full\-corpus retrieval, Hi\-Q maintains its gains with 53\.4 EM and 65\.2 F1 on average, improving over IRCoT by 16\.3 EM / 19\.4 F1 without corpus\-wide graph construction\.

## Global PIQA: Evaluating Commonsense Reasoning Across 100\+ Languages and Cultures

**Authors:** Tyler Chang; Catherine Arnett; Abdelrahman Sadallah; Abdelrahman Eldesokey; Abeer Kashar; Daud Abolade; Abosede G Olanihun; Adam Labaran M; Adhikarimayum Meerajita Sharma; Aditi Gupta; Adril P Merin; Adwoa A Bremang; Afitab Iyigun; Afonso Simplício; Ahmed Essouaied; Aicha Chorana; Akhil Eppa; Akintunde Oladipo; Akriti Kuri; Akshay Ramesh; Aleksei Dorkin; Alfred M Kondoro; Alham Aji; Ali E Çetintaş; Allan Hanbury; Alp Niksarli; Alvaro Arroyo; Amin Bajand; Amol Khanna; Ana Chkhaidze; Ana C Condez; Anamaria Roberta Hartl; Andiswa Mkhonto; Andrew Hoblitzell; Angelos Poulis; Anirban Majumder; Anjali Chaudhary; Anna Vacalopoulou; Annika Simonsen; Anton Kovalev; Anupam Nayak; Ashvanth\.S; Ayodeji Lana; Ayu Purwarianti; Bashar Alhafni; C\. Benedict C\. Busole; Bernard Ghanem; Bharti Nathani; Biljana Stojanovska Đurić; Ogundipe B Funmilola; Bolaotan Agbonile; Bruce Torres Fischer; Burak Tutar; Burcu Çınar; Cade Kane; Can Udomcharoenchaikit; Chadi Helwe; Cecilia Liu; Chiamaka G Nwokolo; Christopher Homan; Clément Sampebgo; Cristina España\-Bonet; Cynthia Amol; Daeyeop Lee; Dan Saattrup Smart; Dana Arad; Daniil Dzenhaliou; Dasol Choi; David Liu; David Semedo; David Anugraha; OLAOYE D Oluwaseun; Deborah Popoola; Deividas Mataciunas; Dennis Asamoah Owusu; Dhyuthy Krishna Kumar; Diogo Tavares; Diogo Glória\-Silva; Divyanshu Goyal; DongGeon Lee; Estefany Kelly Buchanan; Ebele N Anajemba; Ngozi G Egonu; Elias Herranen; Eman Nisar; Emile Anand; Emuobonuvie M Ajiboye; Eryawan P Yulianrifat; Esther Adenuga; Ewa Rudnicka; Faith O Itiola; Fareeha Fayyaz Sheikh; Fathima Thekkekara; Fatima Haouari; Faustin NSENGIYUMVA; Fenal A Ilasariya; Filbert A Tjiaranata; Firas Laakom; Francesca Grasso; Francesco Periti; Francesco Orabona; Gbenga K Solomon; Genta Winata; Nghia G Ngo; Gloria Udhedhe\-oze; Gonçalo Vinagre; Gopi N Challagolla; Gorka Urbizu\-Garmendia; Gouthami Vadithya; Guijin Son; Gyan S Mohapatra; Hafeez Ullah; Hafsteinn Einarsson; Hai Hu; Hamidreza Saffari; Hamza Zaidi; Haopeng Zhang; Harethah Abu Shairah; Hele\-Andra Kuulmets; Hitesh Patel; Houda Bouamor; Hwanjo Yu; Iben N Debess; İbrahim Ethem Deveci; Ikhlasul A Hanif; Ikhyun Cho; Inês Vieira; Inês Calvo; Ismail O Daud; Yusuf I Abayomi; Itay Itzhak; Ivan Zhelyazkov; Ivan Belashkin; Ivan Spada; Jacob Brinton; Jafar Isbarov; Jaka Čibej; Jan Kocon; Jan Cuhel; Jauza A Krito; Jebish Purbey; Jennifer Za; Jennifer Mickel; Jenny Kunz; Jessica Ratovondranto; Jeyarajalingam Varsha; Jihae Jeong; Jimena T Dávalos; Jinu Lee; Joao Magalhaes; John S Yi; Jongin Kim; Joseph Chataignon; Joseph Marvin Imperial; Jubeerathan Thevakumar; Judith Land; Iuliia Alekseenko; Jiang Junchen; Jungwhan Kim; Kairit Sirts; Kamesh R; Kanda Patrick Tshinu; Kätriin Kukk; Kaustubh Ponkshe; Kavsar Huseynova; Ke He; Kenneth Enevoldsen; Kent J Alvarez; Kerem Zaman; Khalil Mrini; Kian Kyars; Komal Gour; Krishnakumar Lainitha; Krister Kruusmaa; Kunal Mukherjee; Kusum Chouhan; Laura Castro; Laura M Porrino\-Moscoso; Lenny S Nzambi; Leshem Choshen; Lilja Øvrelid; Lisa Alazraki; Lovina Ehimen\-Ugbede; Luheerathan Thevakumar; Luxshan Thavarasa; Mamadou K KEITA; Mansi Jangid; Marco De Santis; Marcos Garcia; Marek Suppa; Mariam D&amp;amp;\#x27;Ciofalo; Marii Ojastu; Marium Atta; Maryam Sikander; Maximos Skandalis; Mehak Soomro; Mehmet İlteriş Bozkurt; Melaku Bayu; Menan Velayuthan; Michael Leventhal; Michał Marcińczuk; Mina Almasi; Mirna Potočnjak; Mithil Bangera; Mohammadamin Shafiei; MOHIBA ANSARI; Mridul Sharma; Mrityunjaya Indoria; Mughees U Rehman; Muhammad Ravi Shulthan Habibi; Murat B Kınay; Nada Galant; Naina S Rathore; Narada Maugin; Nathalie H Norman; Nicholas Kluge Corrêa; Nikola Ljubešić; Nirmal Thomas; Nisansa de Silva; Nisheeth Joshi; Nitish Ponkshe; Nizar Habash; Nneoma C Udeze; Noel Thomas; Noémi Ligeti\-Nagy; Odunayo Ogundepo; Odunayo K Buliaminu; God&amp;amp;\#x27;spraise Okechukwu; Olanrewaju Samuel; Olga Snissarenko; Onyinye A Chiemezie; Orkun Kınay; osman tursun; Pablo Rodríguez; Pablo Gamallo; Pedro Valente; Peter Rupnik; Philip O\. EKIUGBO; Prakhar Agarwal; Prokopis Prokopidis; Quadri Yahya; Rachele Mignone; Raghav Singhal; Rahul Raja; Ram Mohan Rao Kadiyala; Raphaël Merx; Rasmus Larsen; Ratnavel Rajalakshmi; Rishav Ghosh; Romina Oji; Rui P Guerra; Rushikesh Zawar; Sa&amp;amp;\#x27;ad N Bashir; Saeed Alzaabi; Sahil Sandeep; Sai Sandeep Kantareddy; Saleha Muzammil; Salsabila Z Pranida; Sam Buchanan; Samuel Rutunda; Sander Land; Sarah Sulollari; Sardar Ali; Kengatharaiyer Sarveswaran; Saulius Tautvaisas; Sayambhu Sen; Sayantani Banerjee; Sebastien Diarra; Sewoong Lee; Shaan Shah; Shankar Venkitachalam; Sharifa Djurabaeva; Sharon Ibejih; Shivanya S Dutta; Siddhant Gupta; Silvia P Suárez; Sina Ahmadi; Sivasuthan Sukumar; Siyuan Song; Sokratis Sofianopoulos; Sona E Simon; Sonja Benčina; Sophie Gvasalia; Sphurti K More; Spyridon Konstantinos Dragazis; Stefan Milosavljević; Stephan Kaufhold; AlRashed; Surangika Ranathunga; Taiga Someya; Taja Kuzman Pungeršek; Tal Haklay; Tasi&amp;amp;\#x27;u Jibril; Tatsuya Aoyama; Tea Abashidze; Terenz Jomar Dela Cruz; Terra Blevins; Themistoklis Nikas; Theresa D Idoko; Tilek Chubakov; Tina Munda; Tobiloba Moses Owoeye; Tommaso Gargiani; Uni Johannesen; Vallerie A Putra; Vanya BK; Varvara Arzt; Vasily Konovalov; Vasudevan Nedumpozhimana; Viktória Ondrejová; Viktoryia Horbik; Vuk Dinić; Walelign Sewunetie; Winston Wu; Xiaojing Zhao; Yacouba Diarra; Yaniv Nikankin; Yash Mathur; Yash Bagla; Yeshil Bangera; Yixi Chen; Yiyuan Li; Yolanda Xavier; Yonatan Belinkov; Zaid Alyafeai; Zhengyang Shan; Zhi Rui Tam; Zilu Tang; Zuzana Nadova; Baber Abbasi; Stella Biderman; David Stap; Duygu Ataman; Fabian D Schmidt; Hila Gonen; Jiayi Wang; David Adelani

**ID:** 139393 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TGSeFxFoPi>) | [PDF](<https://openreview.net/pdf?id=TGSeFxFoPi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139393>)

_Abstract unavailable from the accessible public sources._

## Audio\-Visual Flamingo: Open Audio\-Visual Intelligence for Long and Complex Videos

**Authors:** Sreyan Ghosh; Arushi Goel; Kaousheik Jayakumar; Lasha Koroshinadze; Nishit Anand; Siddharth Gururani; Hanrong Ye; Pritam Biswas; Yuanhang Su; Ehsan Hosseini\-Asl; Sang\-gil Lee; Zhifeng Kong; Jaehyeon Kim; Sungwon Kim; S Sakshi; Ramani Duraiswami; Dinesh Manocha; Andrew Tao; Mohammad Shoeybi; Bryan Catanzaro; Ming\-Yu Liu; Wei Ping

**ID:** 153983 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H4Lfwx7aXK>) | [PDF](<https://openreview.net/pdf?id=H4Lfwx7aXK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153983>)

_Abstract unavailable from the accessible public sources._

## Mutable Transcripts: Mitigating Context Pollution through Editable Conversation State

**Authors:** Dan Barry; Andrew Hines

**ID:** 153229 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MpRxjdY3Md>) | [PDF](<https://openreview.net/pdf?id=MpRxjdY3Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153229>)

_Abstract unavailable from the accessible public sources._

## DialectLLM: A Dialect\-Aware Dialog\[ue\] Generation Framework Beyond Standard American English

**Authors:** Jio Oh; Paul Vicinanza; Thomas Butler; Steven Whang; Dezhi Hong; Amani Namboori

**ID:** 153135 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NcciyroKQl>) | [PDF](<https://openreview.net/pdf?id=NcciyroKQl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153135>)

_Abstract unavailable from the accessible public sources._

## Is the Importance Ratio Necessary for Stable Reinforcement Learning in LLMs?

**Authors:** Shuibai Zhang; Junhyuck Kim; Gyeongman Kim; Jaewoong Cho

**ID:** 152454 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T0HJLu9Gie>) | [PDF](<https://openreview.net/pdf?id=T0HJLu9Gie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152454>)

_Abstract unavailable from the accessible public sources._

## NarrativeBench: Benchmarking Multi\-trait Automated Scoring and Feedback Efficacy of Large Language Models for Chinese Narrative Essays

**Authors:** Jin Wu

**ID:** 138898 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y7yalKOe0u>) | [PDF](<https://openreview.net/pdf?id=y7yalKOe0u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138898>)

_Abstract unavailable from the accessible public sources._

## Your Benchmark Is an Empirical Measure Over Difficulty

**Authors:** Yifan Sun; Naicheng Yu; Jiawen Gong; Jingyan Shen; Huan Zhang

**ID:** 139196 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fCQ7KtG95S>) | [PDF](<https://openreview.net/pdf?id=fCQ7KtG95S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139196>)

A benchmark is not merely a collection of test questions; it naturally induces an empirical measure over difficulty\. In this work, we develop this measure\-based view of benchmark evaluation\. This perspective allows us to identify and formalize two central failure modes: \\emph\{measure mismatch\}, where the benchmark difficulty distribution differs from the intended difficulty distribution, and \\emph\{coverage gaps\}, where uncovered regions along the difficulty axis prevent benchmarks from detecting meaningful localized training progress\. We propose two diagnostic metrics that capture these two failure modes and provide rigorous theoretical guarantees\. Empirically, we analyze \\textbf\{25\} popular benchmarks spanning \\textbf\{7\} domains using carefully estimated item difficulties\. Our results show that many benchmarks implicitly overweight certain difficulty regions, so their leaderboard conclusions should be interpreted with caution; others leave substantial portions of the difficulty axis uncovered, limiting their ability to monitor model improvement process\. Finally, we turn diagnosis into action by introducing \\textsc\{BenchFill\}, a simple difficulty\-targeted item rewriting algorithm that effectively reduces local coverage gaps\.

## RealityTest: How People Probe AI Identity and Whether Models Disclose It

**Authors:** Anna Gausen; Sarenne Wallbridge; Bessie O&amp;amp;\#x27;Dell; Christopher Summerfield; Hannah Rose Kirk

**ID:** 139210 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eUlBhLa5hL>) | [PDF](<https://openreview.net/pdf?id=eUlBhLa5hL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139210>)

AI systems are increasingly deployed in conversational settings where users may be uncertain whether they are speaking with a human or an AI\. Despite mounting regulatory attention to this known safety risk, existing evaluations of AI disclosure are typically English\-only, based on machine\-generated questions, and restricted to text\. We present RealityTest to comprehensively test whether AI systems disclose their identity when asked\. The benchmark is the first large\-scale multimodal and multilingual evaluation, grounded in human data on how people actually encounter and question AI identity in the real\-world\. Alongside the benchmark, we release the underlying dataset of 3,152 identity\-probing queries collected from $\\textasciitilde$750 participants across 49 countries and five languages, in text and speech scenarios\. We find that only 31\\% of people ask about identity directly, and that the questions people ask are far more diverse than machine\-generated queries\. We test 17 text and 6 speech models, and find substantial variation in disclosure behaviour\. However, a single suppression instruction reduces disclosure rates to below 30\\%, even in the best\-performing models\. Validating our investment in diverse, human\-grounded evaluation data, we find that how the question is phrased and the context of the conversation matter more for disclosure than which model is being tested\. Safety evaluations built on narrow or synthetic query sets risk mischaracterising how models behave in realistic deployment settings\.

## TRACE: Tourism Recommendation with Accountable Citation Evidence

**Authors:** Zixu Zhao; SIJIN WANG; Yu Hou; YUANYUAN XU; Yufan Sheng; Xike Xie; Wenjie Zhang; Won\-Yong Shin; Xin Cao

**ID:** 139280 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZmCqSnVZ8k>) | [PDF](<https://openreview.net/pdf?id=ZmCqSnVZ8k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139280>)

Tourism is a high\-stakes setting for conversational recommender systems \(CRS\): a plausible\-sounding suggestion can waste real money and trip time once a traveler acts on it\. Existing CRS benchmarks primarily evaluate systems with a single Recall@$k$ score over entity mentions, and tourism\-specific resources add spatial or knowledge\-graph context, yet none of them couple multi\-turn recommendation with verbatim review\-span evidence and rejection recovery\. This leaves an evaluation gap for tourism recommendation that is simultaneously \*trustworthy\*, \*verifiable\*, and \*adaptive\*: recommend the right point of interest \(POI\) for multi\-aspect preferences \(such as cuisine, price, atmosphere, walking distance\), justify each suggestion with verifiable evidence from prior visitors so the traveler can act without trial and error, and recover when the first recommendation is rejected mid\-dialogue\. We introduce \*\*TRACE\*\*, where each item is \*a multi\-turn tourism recommendation dialogue with review\-span citations and explicit rejection turns\*: 10,000 dialogues over 2,400 Yelp POIs and 34,208 reviews across eight U\.S\. cities, paired with 14 retrieval, planning, and LLM baselines, along with 25 metrics organized under \*Accuracy\*, \*Grounding\*, and \*Recovery\*\. Across these baselines, TRACE reveals the \*\*Three\-Competency Gap\*\*: LLM Zero\-Shot leads in closed\-set Recall@1 and rejection recovery but cites less densely than retrievers; non\-LLM retrievers achieve surface\-verbatim grounding but with low accuracy; Multi\-Review Synthesis fails on Recovery\. The Grounding Score agrees with human citation precision \(Spearman $\\rho = \+0\.80$, $p &lt; 10^\{\-20\}$\), and paired $t$\-tests reproduce the per\-baseline ranking \($p &lt; 0\.01$ on the dominant contrasts\)\. TRACE reframes accountable tourism recommendation as a joint target \(right POI, verifiable evidence, adaptive repair\) rather than a single\-axis leaderboard\.

## WorldSpeech: A Multilingual Speech Corpus from Around the World

**Authors:** Antonis Asonitis; Luca Lanzendörfer; Frédéric Berdoz; Roger Wattenhofer

**ID:** 139336\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139336

[Paper](<https://openreview.net/forum?id=WBzZjghqhE>) | [PDF](<https://openreview.net/pdf?id=WBzZjghqhE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139336>)

Automatic speech recognition \(ASR\) performs well for high\-resource languages with abundant paired audio\-transcript data, but its accuracy degrades sharply for most languages due to limited publicly available aligned data\. To this end, we introduce WorldSpeech, a 24kHz multilingual speech corpus comprising 65k hours of aligned audio\-transcript data across 76 languages, collected from diverse public sources including parliamentary proceedings, international broadcasts, and public\-domain audiobooks\. For 37 languages, WorldSpeech provides more than 200 hours of aligned speech, with 28 exceeding 500 hours and 24 surpassing 1k hours\. Fine\-tuning existing ASR models on WorldSpeech results in an average relative Word\-Error\-Rate reduction of 63\.5% across 11 typologically diverse languages\.

## NorSA: Accelerating LLM Decoding via Normalized Sparse Activation

**Authors:** Tianteng Gu; Bo Xiao; Ke Zeng; Shuai Shi; Wangyou Zhang; Chenda Li; Yanmin Qian

**ID:** 154390\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154390

[Paper](<https://openreview.net/forum?id=DvzLG9N5Dx>) | [PDF](<https://openreview.net/pdf?id=DvzLG9N5Dx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154390>)

Sparse activation accelerates Large Language Model \(LLM\) decoding by removing redundant computations and memory access, but existing methods often assume hidden\-state dimensions are independent and identically distributed \(i\.i\.d\.\)\. We replace this i\.i\.d\. perspective with a covariance\-aware view by analyzing contextual dependencies across tokens and inter\-dimensional correlations within hidden states\. We introduce Normalized Sparse Activation \(NorSA\), a training\-free framework that combines dynamic thresholding with decorrelating rotation\. Across the LLaMA, Mistral, and Qwen families, NorSA consistently improves perplexity and downstream accuracy over prior training\-free baselines, especially in high\-sparsity regimes\. On LLaMA3\-8B at 50\\% sparsity, it stays within 0\.44 perplexity points of the dense model while achieving a 1\.32$\\times$ end\-to\-end decoding speedup\.

## MILES: Modular Instruction Memory with Learnable Selection for Self\-Improving LLM Reasoning

**Authors:** Ruilin Tong; Dong Gong

**ID:** 155027\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155027

[Paper](<https://openreview.net/forum?id=94TqZuHU8A>) | [PDF](<https://openreview.net/pdf?id=94TqZuHU8A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155027>)

Large language models \(LLMs\) increasingly improve their reasoning at test time via additional computation, yet most procedures treat each problem in isolation\. When problems arrive sequentially, accumulating reusable experience across them can further improve performance\. Existing memory\-based methods either store whole\-solution templates that generalize poorly to novel problems or use heuristic step\-level selection that is not optimized for final\-answer correctness\. Learning selection policies requires large\-scale training data and fixed action spaces\. We propose MILES \(Modular Instruction Memory with LEarnable Selection for self\-improving LLM reasoning\), a framework that dynamically expands step\-wise memory and applies correctness\-optimized memory composition under realistic test\-time constraints\. MILES maintains modular memory units consisting of asymmetric pairs of sub\-goal embeddings and sub\-instructions, each associated with a learnable selection head\. This memory structure enables a coarse\-to\-fine retrieval mechanism: The coarse level enables memory expansion and collects supervision for training selection heads from confident samples, while the fine stage applies learned selection heads to rerank coarse\-level candidates and guide reasoning for uncertain samples\. MILES consistently matches or outperforms prior methods while achieving superior accuracy–efficiency tradeoffs\. Extensive experiments demonstrate its effectiveness, robustness, and transferability\.

## Scaling Point\-in\-Time Language Models: Economic Evaluation of Embeddings

**Authors:** Bryan Kelly; Semyon Malamud; Johannes Schwab; Teng A Xu

**ID:** 139251\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139251

[Paper](<https://openreview.net/forum?id=c7yKlceZYq>) | [PDF](<https://openreview.net/pdf?id=c7yKlceZYq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139251>)

Large language models trained on unrestricted internet corpora inevitably embed information from the future, introducing lookahead bias that compromises the validity of backtests and causal inference in finance and the social sciences\. Point\-in\-time language models—trained exclusively on text available up to each calendar date—eliminate this leakage by construction, but existing efforts typically produce models that lag substantially behind their unconstrained counterparts\. We show that this performance gap can be narrowed through scale\. Training decoder\-only transformers with up to 4 billion parameters on 1 trillion chronologically filtered tokens from FineWeb, we construct a sequence of yearly model checkpoints spanning 2013–2024\. Across a range of common\-sense reasoning and language understanding benchmarks, our models approach the performance of leading open\-weight models of comparable size \(such as Gemma\-3\-4B and LLaMA\-7B\) trained on temporally unrestricted data, although a performance gap remains on several tasks\. Finally, in a strict out\-of\-sample economic evaluation task, portfolios built from point\-in\-time embeddings achieve robust positive Sharpe ratios and perform close to full\-sample counterparts that violate temporal validity, indicating that chronologically consistent language models can extract economically meaningful signals without relying on look\-ahead bias\. We release the complete pipeline—including dataset construction, training infrastructure, and evaluation code—to enable reproducible point\-in\-time language modeling and to support research applications that require strict temporal validity\. Code is available publicly on GitHub \(https://github\.com/DjoFE2021/Point\-In\-Time\-LLM\) and model checkpoints as well as training datasets can be accessed on Hugging Face \(https://huggingface\.co/datasets/Diamegs\)\.

## Hearing the Unspoken: Simulator\-Induced Asymmetric\-View Policy Optimization for Proactive Task\-Oriented Dialogue

**Authors:** Hongbin Zhang; Ning Gao; Yuqin Dai; Ruiyuan Wu; Jinpeng Wang; Rena Gao; Bingdong Tan; Shuzheng Gao; Chaozheng Wang

**ID:** 153222\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153222

[Paper](<https://openreview.net/forum?id=MsVDpPS4yS>) | [PDF](<https://openreview.net/pdf?id=MsVDpPS4yS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153222>)

Proactive task\-oriented dialogue \(TOD\), such as outbound sales, demands a persuasive agent that actively probes the user's concerns and steers the conversation toward acceptance within a bounded number of turns\. Yet post\-trained LLMs are inherently conservative, and reward\-shaping RL \(e\.g\., GRPO\) struggles since it only re\-weights what an already passive policy samples\. We show that conditioning on the user's latent concerns unlocks proactive capability that no amount of sampling can undermine, establishing these concerns as a pivotal training\-time signal\. To operationalize this finding, we build the \\textbf\{Cognitive User Simulator\}, which models each user as a stratified persona comprising observable external traits and hidden internal concerns\. The simulator produces faithful and diverse interactions, while emitting per\-turn state dynamics that track persuasion progress\. We then introduce \\textbf\{Simulator\-Induced Asymmetric\-View Policy Optimization\}, which converts the modeled concerns and the simulation state transition into complementary training objectives: \(1\) \\emph\{Asymmetric On\-Policy Self\-Distillation\} that transfers concern\-aware behavior from a privileged view of the same policy into its deployable, conversation\-only view; and \(2\) \\emph\{State\-Transition Policy Refinement\} where the final decision provides trajectory\-level advantage while synchronous state transitions refine turn\-level credit direction\. Across two real\-world food\-delivery benchmarks \(\\emph\{merchant\} and \\emph\{courier\} outbound recruitment\), our method matches or surpasses leading proprietary LLMs, outperforms strong RL baselines, and generalizes across various LLM\-based user simulators\.

## Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory

**Authors:** Jingwei Sun; Jianing Zhu; Jiangchao Yao; Tongliang Liu; Bo Han

**ID:** 150576\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150576

[Paper](<https://openreview.net/forum?id=h9Je8c91Qi>) | [PDF](<https://openreview.net/pdf?id=h9Je8c91Qi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150576>)

To enable reliable long\-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history\. Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning\. Nevertheless, such fact\-centric designs inevitably discard fine\-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts\. Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles\. To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments anchored by source identifiers for storage fidelity, extracted atomic facts for efficient memory retrieval, synthesized profiles that aggregate dispersed facts into holistic semantic understanding for deep reasoning\. We further adopt TextGrad\-based prompt optimization, which iteratively refines extraction and profiling prompts via response quality feedback, achieving lifelong evolution without any parameter updating\. Extensive experiments on LoCoMo and PerLTQA across multiple LLM backbones demonstrate that TriMem consistently outperforms strong memory baselines\.

## MemArena: An Ego\-Centric Benchmark for On\-Device Agentic Personal Memory Assistants at Scale

**Authors:** Jiadong Zhang; Xiaosong Ma

**ID:** 139685\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139685

[Paper](<https://openreview.net/forum?id=Ae9Cmj7ofy>) | [PDF](<https://openreview.net/pdf?id=Ae9Cmj7ofy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139685>)

Edge\-deployed personal memory assistants must handle private interpersonal conversations on\-device with open\-weight models\. Yet, existing memory benchmarks often under\-test the combination of activity\-dense interaction, ego\-centric perspective, and coherent multi\-session worlds\. MemArena fills these gaps with a single\-world conversational benchmark built with its MASim agent simulator, for $50$ agents over $15$ days \($10\.3$M dialog\-text tokens, $24\.1$K text\-only ego\-observed tokens/agent/day\)\. With the interaction history, it co\-generates ground truth over six recall, reasoning, and trustworthiness evaluation dimensions\. We evaluate five open\-weight readers with Vanilla context, BM25\-RAG, Oracle retrieval, Memobase, and MemSearch as memory backends\. Three results stand out: \(1\) Memory\-backend choice matters more for content accuracy: At Qwen3\-0\.6B, Memobase $\\to$ MemSearch gains $\+32\.5/\+19\.2$ pp, exceeding MemSearch reader scaling \($\+10\.6/\+6\.8$ pp\)\. \(2\) Permission\-aware access fails universally: with Oracle leaking heavily and other backends too timid to disclose\. \(3\) Search latency bites only at very small reader: on a Spark GB10 edge node, memory\-search adds a moderate and fixed $87$/$7$/$48$ ms \(BM25\-RAG/Memobase/MemSearch\) that composes a small part of TTFT for most reader\-backend combinations\. We release code, the MASim simulator, and the MemArena\-L benchmark at https://anonymous\.4open\.science/r/MemArena\-NeurIPS2026\-anon\-3E9D

## Sandboxed Coding Agents are Competitive Omni\-modal Task Solvers

**Authors:** Dongping Chen; Xuanao Huang; Zhihan Hu; Qingyuan Shi; Dianqi Li; Tianyi Zhou

**ID:** 148209\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148209

[Paper](<https://openreview.net/forum?id=zYMvOwt5bN>) | [PDF](<https://openreview.net/pdf?id=zYMvOwt5bN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148209>)

As multimodal LLMs increasingly emphasize video and audio, a common assumption is that solving such tasks calls for native omnimodal models\. We show that this is not always necessary: coding agents equipped with only text\+vision and a sandboxed tool\-using interface can perform competitively with, and in several settings outperform, SOTA native omnimodal models and predefined multimodal agent scaffolds across multiple audio\-video benchmarks\. Our trajectory analysis suggests that their advantage comes from coding agents writing code and orchestrating tools to retrieve relevant content from transcripts, frames, and other non\-textual modality signals from raw inputs\. This effectively converts omnimodal tasks into evidence retrieval and information processing problems, avoiding the inefficiency of ingesting entire videos or audio streams into context\. To characterize remaining limitations, we propose a failure taxonomy and a process\-level analysis of tool\-use traces, and find that simple skill injection, including human\-written skills and self\-distilled skills from execution logs, can substantially improve performance over the no\-skill baseline\. To examine whether such capability can be elicited in open\-source models, we further introduce Code\-X, a complete training recipe with the OmniCoding trajectory dataset and verifiable reward, providing an exploratory baseline on Qwen\-3\.5\-9B and Qwen\-3\.6\-27B\. Finally, given the maturity of many\-modality understanding, we argue that the more meaningful frontier lies in many\-modality processing, and introduce TerminalBench\-O, the first process\-level benchmark designed for coding agents on real\-world omnimodal processing tasks\. Together, our findings open new directions for omnimodal content processing and evaluation\.

## DUET: Unified Dual\-Space Emotion Control for Diffusion and Flow\-Matching Driven Text\-to\-Speech

**Authors:** Xu Zhang; Longbing Cao; zhangkai wu

**ID:** 153975\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153975

[Paper](<https://openreview.net/forum?id=H6xBJ7xXPy>) | [PDF](<https://openreview.net/pdf?id=H6xBJ7xXPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153975>)

Diffusion and flow\-matching based text\-to\-speech \(TTS\) models excel in naturalness but often lack explicit emotion control, as emotional signals remain entangled with speaker identity\. We discover that emotion embedding emerges as a linearly decodable direction of frozen hidden states, nearly orthogonal to the direction embedding speaker identity\. This inspires a plug\-and\-play framework DUET for emotion control over pretrained diffusion and flow\-matching based TTS models\. During generation, DUET unifies dual\-space control to achieve fine\-grained emotion intervention in a single per\-step update: hidden space steering shifts generation along the target emotion direction, while mel\-space guidance refines spectral details through gradients backpropagated from a differentiable vocoder\. We validate DUET on five architecturally diverse pretrained TTS backbones across three datasets, where it outperforms 10 supervised state\-of\-the\-art emotional TTS baselines across paradigms and achieves the highest human\-rated emotion appropriateness\. To further showcase its qualitative behavior, we deploy DUET on an Ameca humanoid robot, where it produces richly expressive emotional speech on the humanoid, demonstrating the strong potential for plug\-and\-play affective interaction for embodied agents\. The demonstration is available at: https://anonymous\.4open\.science/w/duet\-demo\-fresh\-D8E0

## ASTOR: Multi\-Task Code Reinforcement Learning via Utility\-Driven Coordination

**Authors:** Yujia Chen; Yang Ye; Xiao Chu; Yuchi Ma; Cuiyun Gao

**ID:** 154519\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154519

[Paper](<https://openreview.net/forum?id=CzqAXCaI97>) | [PDF](<https://openreview.net/pdf?id=CzqAXCaI97>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154519>)

Reinforcement learning \(RL\) with verifiable rewards has proven effective at post\-training LLMs for coding, yet deploying separate task\-specific specialists incurs costs that scale with the number of tasks, motivating a unified multi\-task RL \(MTRL\) approach\. However, existing MTRL methods treat all coding tasks uniformly, relying on fixed data curricula under a shared optimization strategy, ultimately limiting the effectiveness of multi\-task training\. To address these limitations, we propose \\textbf\{\{\\tool\}\}, a multi\-t\\textbf\{AS\}k code reinforcement learning framework via u\\textbf\{T\}ility\-driven co\\textbf\{OR\}dination\. Centered on \\textit\{task utility\}, a signal capturing each task's learning potential and cross\-task synergy, \{\\tool\} comprises two coupled modules: \\textit\{1\) \\moduleone\} module hierarchically allocates training budget and prioritizes informative prompts, steering training toward the most valuable data; and \\textit\{2\) \\moduletwo\} module dynamically scales per\-task KL regularization, matching update constraints to each task's current training state\.  Experiments on two widely\-used LLMs across four representative coding tasks demonstrate that \{\\tool\} consistently improves a single model across all tasks, outperforming the best task\-specific specialist by 9\.0\\%\-\-9\.5\\% and surpassing the strongest MTRL baseline by 7\.5\\%\-\-12\.8\\%\.

## Enhancing Speech Large Language Models through Reinforced Behavior Alignment

**Authors:** Yansong Liu; Yuan Liu

**ID:** 154532\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154532

[Paper](<https://openreview.net/forum?id=CtJ6YRQRlm>) | [PDF](<https://openreview.net/pdf?id=CtJ6YRQRlm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154532>)

Speech large language models \(SpeechLMs\) can process spoken requests, yet still lag behind text\-prompted large language models \(LLMs\) on instruction following and reasoning\. We argue that this gap is not only an ASR or representation problem: the same semantic instruction can induce different response policies when spoken with different speakers, accents, noise conditions, prosody, or disfluencies\. We propose Verifiable Invariant Reinforced Behavior Alignment \(VIRBA\), a reinforcement\-learning framework for aligning SpeechLM behavior across acoustic realizations of the same semantic intent\. VIRBA builds multi\-view spoken instruction groups, scores sampled responses with semantic preference, rule\-verifiable correctness, cross\-acoustic invariance, and adaptive reasoning rewards, and optimizes the model with Cross\-Acoustic Group Relative Policy Optimization \(CA\-GRPO\)\. The resulting objective moves SpeechLM alignment beyond teacher imitation toward robust reasoning policies that remain stable across realistic spoken realizations\. Experiments with recent SpeechLM baselines, disfluency robustness, spoken QA, audio reasoning, and speech\-to\-text translation show the largest gains on reasoning\-heavy and acoustically perturbed spoken prompts\.

## Controllable User Simulation

**Authors:** Guy Tennenholtz; Ofer Meshi; Amir Globerson; Uri Shalit; Jihwan Jeong; Craig Boutilier

**ID:** 148816\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148816

[Paper](<https://openreview.net/forum?id=uus8MMsekx>) | [PDF](<https://openreview.net/pdf?id=uus8MMsekx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148816>)

Using offline datasets to evaluate conversational agents often fails to cover rare scenarios or to support testing new policies\. This has motivated the use of \\emph\{controllable user simulators\} for targeted, counterfactual evaluation, typically implemented by prompting or fine\-tuning large language models\. In this work, we formalize controllable simulation as a causal inference problem\. By bridging natural language evaluation with off\-policy evaluation methodology, we show that the standard practice of training simulators via supervised fine\-tuning on post\-hoc trajectory labels yields a structurally biased model\. Specifically, these labels are inextricably coupled to the data\-generating behavior policy, injecting a \\emph\{look\-ahead bias\} that breaks causal consistency\. Furthermore, we prove that under policy shift this failure causes the variance of evaluation metrics to explode geometrically, a phenomenon we term \\emph\{controllability collapse\}\. To restore causal consistency, we establish theoretical conditions for accurate simulation and propose practical training mitigations: \\textit\{a priori\} controls, step\-wise dynamic controls, and direct policy\-conditioned learning\. Empirical evaluation confirms that while standard global controls distort conversational distributions and collapse behavioral diversity, our causally grounded simulators eliminate look\-ahead bias, preserve natural variance, and exhibit robust zero\-shot generalization to unseen agent behaviors\.

## Asymmetric Phase Coding Audio Watermarking

**Authors:** Guang Yang; Fengchen Liu; Amir Ghasemian; Zhong Wang; Ninareh Mehrabi; Homa Hosseinmardi

**ID:** 149813\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149813

[Paper](<https://openreview.net/forum?id=nAf6IJ9PSz>) | [PDF](<https://openreview.net/pdf?id=nAf6IJ9PSz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149813>)

The proliferation of deepfake audio challenges voice\-based authentication systems; passive forensic detectors are sensitive to evolving generative models and to real\-world channel distortions\. We propose Asymmetric Phase Coding \(APC\), a training\-free cryptographic signing layer for audio, designed as a compact and auditable provenance primitive that can stand alone or be stacked with learned watermarks\. APC combines Ed25519 digital signatures \(EdDSA, FIPS 186\-5; 64\-byte signatures\) with Reed–Solomon error correction, pseudo\-random STFT phase\-bin selection, and a redundant quantization\-index\-modulation \(QIM\) code on log\-magnitude differences of adjacent bin pairs, yielding a compact, non\-repudiable, blind\-extractable watermark\. We evaluate APC on 1,000 LibriSpeech test\-clean clips \(10 s each, 44\.1 kHz\) under eight attack configurations – identity, 10% end\-cropping, 20% end\-cropping, 8 kHz low\-pass, 16 kHz round\-trip resampling, FLAC re\-encoding, MP3 at 128 kbps, and OGG\-Vorbis at 128 kbps – and achieve cryptographic verification rates between 97\.5% and 98\.3% on every condition at mean PESQ=3\.02 and tens\-of\-milliseconds CPU latency\. We explicitly compare APC against recent neural baselines \(AudioSeal, WavMark, SilentCipher\), detail the threat model \(forgery resistance vs\. erasure\), characterize the dataset, define all metrics, quantify an adaptive white\-box erasure attack, and release code, keys, and metadata for reproducibility\.

## Reconstructing the Vocal Tract with Differentiable Acoustic Simulation

**Authors:** Eric Chen; Jin Woo Lee; Vincent Sitzmann

**ID:** 151084\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151084

[Paper](<https://openreview.net/forum?id=d61YXzFcB9>) | [PDF](<https://openreview.net/pdf?id=d61YXzFcB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151084>)

The human vocal tract, the cavity consisting of one's throat, mouth, lips opening, etc\., filters one's voice to create the sounds we know as speech\. In this paper, we present a differentiable and GPU parallelizable acoustic simulator that synthesizes speech by propagating sound along an acoustic tube representation of the vocal tract, and via its gradients, solves the inverse problem: reconstructing the geometry of their vocal tract solely from the sound it produces\. Although learning the inverse mapping between geometry and sound is notoriously non\-convex, we discover that gradient descent succeeds with three technical contributions: \(1\) we design a frequency domain formulation of the vocal tract's fluid dynamics that is 70x more GPU parallelizable than finite differences in time, \(2\) we integrate a differentiable model for turbulence to synthesize consonants, and \(3\) similar to prior work in implicit neural representations \(INRs\) and neural radiance fields \(NeRFs\), we find that parameterizing the geometry with a neural network accelerates convergence and escapes local minima that trap discrete representations\.   Because the simulator is differentiable, it is readily integrated with other deep learning pipelines to enable novel speech and medical imaging applications\. Our model can be used for instance, in singing instruction or language learning, where a visualization of one's vocal tract can help people understand how their vocal tract maps to different speech sounds\. To enable these tasks, \(1\) we demonstrate self\-supervised autoencoding of vocal tract shapes across 11 languages, and \(2\) we couple our simulator with a generative model of MRI images to reconstruct one's moving vocal tract from only their speech, no paired data required\.

## Reconsidering Positional Supervision in Masked Diffusion Language Model Training

**Authors:** Mengyu Ye; Keito Kudo; Ryosuke Takahashi; Jun Suzuki

**ID:** 152472\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152472

[Paper](<https://openreview.net/forum?id=SoXwBAJ8w9>) | [PDF](<https://openreview.net/pdf?id=SoXwBAJ8w9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152472>)

Masked diffusion language models \(MDLMs\) generate text by unmasking tokens in parallel and have recently emerged as alternatives to autoregressive language models\.  They can be viewed as parallel decoders trained with a position\-wise cross\-entropy \(CE\) loss, the same setup as non\-autoregressive translation \(NAT\)\.  In NAT, CE\-trained parallel decoders have been argued to be sensitive to small positional shifts, since CE penalizes them harshly\. We ask whether CE\-trained MDLMs are similarly sensitive to such shifts under iterative decoding\. To probe this, we apply a controlled intervention that introduces them during decoding\. On LLaDA\-8B\-Instruct with Arena\-Hard, displacing as little as 1\\% of generated tokens by one position substantially reduces win rates against the unintervened model, showing that MDLMs are sensitive to such small shifts under iterative parallel decoding\.  Motivated by this, we adapt connectionist temporal classification \(CTC\), an alignment\-flexible objective known to mitigate it there, to MDLM supervised fine\-tuning\.  By relaxing the strict position\-wise match that CE imposes, CTC gives the loss room to absorb small positional shifts; concretely, we modified CTC objective to use a special \\ token that absorbs positional uncertainty between target tokens and output positions, and a updated collapse map that preserves target surface forms\. Across four open\-ended generation benchmarks, the resulting model consistently improves over both the original model and a matched cross\-entropy\-trained baseline, with statistically significant gains on all four\. These results identify training\-side alignment flexibility as a useful design dimension for MDLM SFT, complementary to the inference\-time approaches explored in prior work\.

## From History to State: Constant\-Context Skill Learning for LLM Agents

**Authors:** Haoyang Xie; Xinyuan Wang; Yancheng Wang; Puda Zhao; Feng Ju

**ID:** 154254\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154254

[Paper](<https://openreview.net/forum?id=F9AmFBisYk>) | [PDF](<https://openreview.net/pdf?id=F9AmFBisYk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154254>)

Large language model \(LLM\) agents are increasingly used to operate browsers, files, code and tools, making personal assistants a natural deployment target\. Yet personal agents face a privacy\-cost\-capability tension: cloud models execute multi\-step workflows well but expose sensitive intermediate context to external APIs, while local models preserve privacy but remain less reliable\. Both settings also pay repeatedly for long skill prompts and growing histories\. We propose constant\-context skill learning, a context\-to\-weights framework for recurring agent workflows: reusable procedures are learned in lightweight task\-family modules, while inference conditions only on the current observation and a compact state block\. A deterministic tracker renders this state block from task progress and supplies aligned subgoal rewards, so each module can be trained with step\-level SFT and refined through online RL\. Across ALFWorld, WebShop, and SciWorld, our agents achieve strong performance across Qwen3\-4B, Qwen3\-8B and Llama\-3\.1\-8B\. With Qwen3\-8B, SFT\+RL reaches 89\.6\\% unseen success on ALFWorld, 76\.8\\% success on WebShop, and 66\.4\\% unseen success on SciWorld\. They match or exceed strong published agent\-training results while reducing prompt tokens per turn by 2\-7$\\times$ relative to controlled ReAct prompting baselines, showing that procedural context can be moved from prompts into weights\.

## Efficient Brain\-to\-Speech Decoding with Fixed\-Delay Spiking Neural Networks

**Authors:** Aleksandra Wisniewska; Seo\-Hyun Lee; Seong\-Whan Lee

**ID:** 151470\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151470

[Paper](<https://openreview.net/forum?id=aMneDSPCzZ>) | [PDF](<https://openreview.net/pdf?id=aMneDSPCzZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151470>)

_Abstract unavailable from the accessible public sources._

## Mitigating Knowledge Conflicts in Retrieval\-Augmented Generation via Inference\-Time Representation Editing

**Authors:** Dahyun Jung; Jaehyung Seo; Heuiseok Lim

**ID:** 148202\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148202

[Paper](<https://openreview.net/forum?id=zbapcKkECb>) | [PDF](<https://openreview.net/pdf?id=zbapcKkECb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148202>)

Retrieval\-Augmented Generation \(RAG\) has been widely adopted to enable Large Language Models \(LLMs\) to ground their responses in external knowledge sources\. Nonetheless, recent studies show that conflicts between the retrieved external knowledge and the model’s parametric knowledge can lead to hallucinatory outputs, and this problem is exacerbated when the retrieved documents contain noise\. In this work, we propose Conflict\-Aware Representation Editing \(CARE\), an inference\-time representation editing method for improving LLM robustness under noisy knowledge conflict settings\. CARE learns a latent editing direction from intermediate representations associated with correct and incorrect generations, and uses this direction to mitigate conflict\-associated activation patterns during inference\. We evaluate CARE across Question Answering \(QA\) benchmarks and LLMs, showing improvements over retrieval\-based and conflict\-mitigation baselines, especially under noisy retrieval conditions\.

## Remember Your Trace: Memory\-Guided Long\-Horizon Agentic Framework for Consistent and Hierarchical Repository\-Level Code Documentation

**Authors:** Suyoung Bae; Jaehoon Lee; Changkyu Choi; YunSeok Choi; Jee\-Hyong Lee

**ID:** 154827\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154827

[Paper](<https://openreview.net/forum?id=Ae5q87uyOE>) | [PDF](<https://openreview.net/pdf?id=Ae5q87uyOE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154827>)

_Abstract unavailable from the accessible public sources._

## Efficient Streaming Audio\-Visual Target Speaker Extraction for Real\-World Acoustic Scenes

**Authors:** Wendi Sang; Kai Li; Yifan Li; Jianqiang Huang; Xiaolin Hu

**ID:** 149515\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149515

[Paper](<https://openreview.net/forum?id=pYHqkfI3QP>) | [PDF](<https://openreview.net/pdf?id=pYHqkfI3QP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149515>)

_Abstract unavailable from the accessible public sources._

## Bayesian Test\-Time Inference of Task\-Aligned Similarity from Weak Interactive Feedback

**Authors:** Weida Liang; Kenji Kawaguchi

**ID:** 152715\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152715

[Paper](<https://openreview.net/forum?id=QtmggfhlQ9>) | [PDF](<https://openreview.net/pdf?id=QtmggfhlQ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152715>)

Large language model systems repeatedly make test\-time decisions by comparing similarity\. They retrieve exemplars, rerank candidates, and choose revisions\. But similarity is not unique: a candidate can be close lexically, semantically, structurally, or stylistically, while only one of these axes may matter for the current instance\. We propose BASIS\~\(Bayesian Axis Selection via Interactive Signals\), a training\-free Bayesian framework that treats weak feedback as evidence about this latent task\-aligned axis\. BASIS maintains a posterior over candidate targets and similarity axes\. It updates this posterior from scalar scores, pairwise preferences, or verifier outputs, and then chooses future probes by expected information gain\. In a finite noisy similarity model, we show that fixed\-axis and fixed\-mixture rules can remain suboptimal under axis shift\. Across concept recovery, reasoning exemplar selection, response refinement, and adversarial distractors, BASIS consistently outperforms stronger rerankers, static mixtures, and compute\-matched best\-of\-$N$ search under the same candidate pools and feedback budgets\. The average gains are moderate because all methods share the same backbone, candidate pools, and feedback signals\. Under axis shift, however, the gap widens substantially, showing that latent\-axis inference is not fully replaced by better scoring or more search alone\.

## Frontier Coding Agents Use Metaprogramming to Adapt to Unfamiliar Programming Languages

**Authors:** Aman Sharma; Sushrut Thorat; Paras Chopra

**ID:** 152963\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152963

[Paper](<https://openreview.net/forum?id=P4Ev2InDix>) | [PDF](<https://openreview.net/pdf?id=P4Ev2InDix>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152963>)

LLM\-based coding agents are usually evaluated in familiar software settings: mainstream languages, common libraries, and public repositories\. These benchmarks remain important, but they can hide how agents behave when the language itself is unfamiliar\. We evaluate six contemporary coding agents on four esoteric programming languages using a sequential setup with file editing, local execution, and hidden\-test grading\. Our protocol exposes capability differences between these agents that mainstream coding and agentic benchmarks such as SWE\-Bench Verified and Terminal\-Bench 2\.0 compress into much narrower bands\. We observe that the strongest agents, Claude Opus 4\.6 and GPT\-5\.4 xhigh, often avoid writing the target language directly\. On Brainfuck and Befunge\-98, they write Python programs that generate target\-language code and debug those generators locally\. Forbidding this metaprogramming strategy causes large performance drops\. Text guidance distilled from this strategy does not materially improve weaker agents\. In contrast, Opus\-derived Python helper code for building generators, with no solved benchmark programs or hidden\-test answers, sharply improves Sonnet 4\.6 and GPT\-5\.4 mini on the same problems, while Haiku 4\.5 remains low\. More interpreter calls and output tokens improve stronger agents but leave weaker agents near their original performance, indicating that these resources amplify useful strategies rather than create them\. Together, these results show that strong coding agents adapt to unfamiliar languages by using tools, feedback, and workspace state to build a working model of the target language\. Metaprogramming is the clearest case, but the broader gap is constructing and debugging a strategy that works under the target language's rules\.

## When Reasoning Meets Its Laws

**Authors:** Junyu Zhang; Yifan Sun; Tianang Leng; Jingyan Shen; Liu Ziyin; Paul Liang; Huan Zhang

**ID:** 155285\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155285

[Paper](<https://openreview.net/forum?id=6ha7HGdygP>) | [PDF](<https://openreview.net/pdf?id=6ha7HGdygP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155285>)

Despite the superior performance of Large Reasoning Models \(LRMs\), their reasoning behaviors are often counterintuitive, \*e\.g\.\*, excessive reasoning on simple questions or insufficient reasoning on complex ones, leading to suboptimal reasoning capabilities\. This paper presents the Laws of Reasoning \(LoRe\), a unified framework that formalizes intrinsic reasoning patterns in ideal LRMs\. We first propose \*compute law\* with the hypothesis that the reasoning compute should scale linearly with question complexity\. Beyond compute, we extend LoRe with a supplementary \*accuracy law\*, positing exponential decay of accuracy with increasing complexity\. Since the complexity is difficult to quantify in practice, we approximate these hypotheses via two tractable properties, \*monotonicity\* and \*compositionality\*\. We therefore introduce LoRe\-Bench, a benchmark that systematically measures these properties for large reasoning models\. Evaluation shows that most reasoning models exhibit reasonable monotonicity but lack compositionality\. In response, we develop an effective finetuning approach that enforces compute\-law compositionality\. Extensive empirical studies demonstrate that better compliance with compute laws yields consistently improved reasoning performance on multiple benchmarks, and uncovers synergistic gains across properties and laws\.

## Speech Tokenizers are Vulnerable:  Transferable Semantic Attack and Robust Tokenizer

**Authors:** Zhisheng Zhang; Yifan Mi; Yixuan Zhou; Haiyun Li; dongfu song; Shengbo Cai; Ziang Xu; Jie Hao; Zhiyong Wu

**ID:** 149645\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149645

[Paper](<https://openreview.net/forum?id=oVx8Urehhw>) | [PDF](<https://openreview.net/pdf?id=oVx8Urehhw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149645>)

_Abstract unavailable from the accessible public sources._

## WordEval: Evaluating Word\-Native Operation Fidelity in Document Editing

**Authors:** Jinyoung Park; Yupan Huang; Shimin Zhang; Jiayu Ding; Yilin Jia; Yuzhong Zhao; Tengchao Lv; Wenshan Wu; Shaohan Huang; Nan Yang; Xiangyang Zhou; Dongdong Zhang; Li Dong; Lei Cui; Sun Mao; Xun Wang; Tao Ge; Huitian Jiao; Si\-Qing Chen; Changick Kim; Furu Wei

**ID:** 139228\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139228

[Paper](<https://openreview.net/forum?id=dfw3UZyY85>) | [PDF](<https://openreview.net/pdf?id=dfw3UZyY85>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139228>)

_Abstract unavailable from the accessible public sources._

## Differentiable Bit\-Widths: Co\-optimizing Pruning and Quantization via SVD for Ultra\-Efficient LLM Compression

**Authors:** Hankyul Kang; Jongbin Ryu

**ID:** 148406\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148406

[Paper](<https://openreview.net/forum?id=y5tDLoawiV>) | [PDF](<https://openreview.net/pdf?id=y5tDLoawiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148406>)

SVD\-based pruning and quantization have recently emerged as a promising strategy for the ultra\-efficient compression of large language models\. In these methods, compression is performed in two stages: components are first truncated, and the remaining ones are subsequently quantized\. Although this decoupled pipeline benefits from both pruning and quantization, it requires separate optimization for each stage and fails to fully exploit their balance, which can lead to suboptimal performance under aggressive compression\. To address this limitation, we propose a new LLM compression method that co\-optimizes pruning and quantization in a unified framework\. Our key idea is a differentiable method for learning component\-wise bit\-widths, allowing less important components to be assigned 0\-bit precision and pruned away\. Notably, our method performs favorably against two\-stage baselines, even when subjected to extreme quantization settings \($1\.61$ bits\) designed for ultra\-efficiency\. The code will be publicly released upon acceptance\.

## Proactive Instance Navigation with Comparative Judgment for Ambiguous User Queries

**Authors:** Junhyuk Kwon; Seungjoon Lee; Hyejin Park; Kyle Min; Jungseul Ok

**ID:** 153423\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153423

[Paper](<https://openreview.net/forum?id=LR1XtBSs7q>) | [PDF](<https://openreview.net/pdf?id=LR1XtBSs7q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153423>)

Natural\-language instance navigation becomes challenging when the initial user request does not uniquely specify the target instance\.  A practical agent should reduce the user's burden by actively asking only the information needed to distinguish the intended target from similar distractors, rather than requiring a detailed description upfront\.  Existing approaches often fall short of this goal: they may stop at the first plausible candidate before sufficiently exploring alternatives, or, even after collecting multiple candidates, ask about the target's attributes derived from individual candidates rather than questions selected to distinguish candidates in the pool\. As a result, despite the dialogue, the agent may still fail to distinguish the target from distractors, leading to premature decisions and lengthy user responses\. We propose Proactive Instance Navigation with Comparative Judgment \(ProCompNav\), a two\-stage framework that first constructs a candidate pool and then identifies the target through comparative judgment\.  At each round, ProCompNav extracts an attribute\-value pair that splits the current pool, asks a binary yes/no question, and prunes all inconsistent candidates at once\. This reframes disambiguation from open\-ended target description to pool\-level discriminative questioning, where each question is chosen to narrow the candidate set\.  On CoIN\-Bench, ProCompNav improves Success Rate over interactive baselines with the same minimal input and non\-interactive baselines with detailed descriptions, while substantially reducing Response Length\.  ProCompNav also achieves state\-of\-the\-art Success Rate on TextNav, suggesting that comparative judgment is broadly useful for instance\-level navigation among similar distractors\.

## VisInteract: Towards Dynamic Interactive Text\-to\-Visualization under Imperfect Queries

**Authors:** Wenxin XU; Jinwei Lu; Hwanhee Kim; Chen J Zhang; Xiao\-Yong Wei; Haoyang LI; Yuanfeng SONG

**ID:** 148995 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=taklyDq3WJ>) | [PDF](<https://openreview.net/pdf?id=taklyDq3WJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148995>)

Real\-world visualization requests are routinely ambiguous, incomplete, or factually incorrect, yet existing Text\-to\-Visualization \(Text\-to\-Vis\) systems assume well\-specified inputs and produce charts in a single pass\. When queries are imperfect, a system must interact with the user to recover the true intent, but no benchmark or method supports this dynamic process\. We introduce VisInteract, a new paradigm that reframes Text\-to\-Vis as interaction\-driven intent recovery, and VisInteract\-Bench, to our knowledge, that is the first benchmark for dynamic interactive Text\-to\-Vis, featuring controlled imperfection injection, a leakage\-controlled User Agent for realistic multi\-turn feedback, and dual\-perspective \(code and chart\) automated evaluation\. On the algorithmic side, we propose Vis\-MCTS, a Monte Carlo Tree Search \(MCTS\) enhanced method, introducing improvements over classical MCTS, that Progressive Widening to tame the unbounded tool\-argument space in tree search, cross\-rollout information sharing so clarifications and critiques benefit the entire search tree, and Dimension\-Aware Reward Decomposition that routes scalar user feedback along data\-fidelity, visual\-design, and intent\-alignment dimensions to resolve credit assignment across heterogeneous actions\. Extensive Experiments across two LLM backbones show that Vis\-MCTS consistently outperforms all Text\-to\-Vis baselines, improving end\-to\-end task success by 13\.40\\%\-\-16\.27\\% over the strongest interactive baseline and by more than 5\\times over non\-interactive ones\.

## Selective Rollout: Mid\-Trajectory Termination for Multi\-Sample Agent RL

**Authors:** Zhiyuan Zhai; Xin Wang

**ID:** 151195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cFDtppAAdg>) | [PDF](<https://openreview.net/pdf?id=cFDtppAAdg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151195>)

Group\-relative RL training \(GRPO\) samples a small group of parallel rollouts for every training prompt and uses their within\-group reward spread to compute per\-trajectory advantages\. In agentic environments each rollout is a long multi\-turn dialogue with one LLM call per step, so this multi\-sample multiplier dominates the total training cost\. When every rollout of a prompt ends with the same reward, the group has zero reward variance and contributes no gradient, so the extra rollouts add no information; such groups are common in practice \(typically around 40% of all groups\), so the wasted\-compute fraction is substantial rather than marginal\. Existing methods filter such groups at the prompt level, either after their rollouts are paid for or before any rollout begins, but both decide without using information that becomes available during the rollout itself\. We instead ask whether the in\-group divergence between the partial trajectories at an intermediate step can already predict that the group will be zero\-variance: when the parallel rollouts have already converged on the same action prefix, the group is on track to produce a single reward, and we can stop early\. We propose a one\-parameter gate that stops a group when the mean pairwise prefix edit distance between its partial action sequences falls below a threshold\. On a 60\-iteration on\-policy GRPO run on ALFWorld with Qwen2\.5\-7B, averaged over four random seeds, the gated arm finishes 10\.7% faster in wall\-clock \(bootstrap 95% CI excludes 0\) and shifts held\-out success rate on 50 unseen tasks by \+2\.5 pp, with the held\-out gain tracing to a measurable reduction in zero\-advantage gradient\-batch dilution\.

## Correctable Fork Tokens: Verifier\-Anchored Selective Credit Assignment for Tool\-Integrated RLVR

**Authors:** Shuqi Yin

**ID:** 153790 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IeA9ZyY6JF>) | [PDF](<https://openreview.net/pdf?id=IeA9ZyY6JF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153790>)

In tool\-integrated reinforcement learning with verifiable rewards \(RLVR\), sequence\-level verifier signals are issued for trajectories whose outcomes are determined by a sparse subset of tokens—tool names, argument keys, and argument values\. Standard RLVR assigns the same advantage to every token in a rollout, diluting credit at precisely the positions that matter\. We propose \*\*Correctable Fork Tokens \(CFT\)\*\*, which decomposes selective credit assignment into two subproblems: \*where\* to update, and \*how much\* to update at those positions\. To this end, CFT introduces a training\-only answer\-conditioned branch sharing parameters with the student policy\. The key insight is that conditioning on the ground\-truth answer concentrates the model's distribution at decision\-fork positions, providing hindsight localization without additional parameter capacity or imitation targets\. Critically, this benefit requires accurate answer information: a larger\-capacity teacher without the answer fails to replicate these gains, confirming that privileged answer information—not teacher capacity—is the active ingredient\. CFT uses this entropy reduction \($IG\_t$\) to identify correctable fork positions, then rescales token\-level credit at those positions while preserving the verifier advantage as the sole signal for update direction\. On BFCL v3/v4, CFT improves multi\-turn accuracy by \*\*4\.2/6\.5\*\* pp and overall accuracy by \*\*3\.1/2\.2\*\* pp over GRPO; it further surpasses On\-policy distillation—which employs a larger Expert Model as teacher—by \*\*3\.6/6\.7\*\* pp on multi\-turn, confirming that answer\-conditioned fork localization rather than teacher capacity drives the improvement\. On Tau3, the average score improves by \*\*8\.3\*\* pp\. We additionally present a three\-level structured verifier for tool\-call settings; ablations confirm that finer\-grained verifier feedback and selective token credit are complementary\. Our reproducible implementation is available at \[https://anonymous\.4open\.science/r/CFT\]\(https://anonymous\.4open\.science/r/CFT\)\.

## SWE\-Protégé: Learning to Selectively Collaborate With an Expert Unlocks Small Language Models as Software Engineering Agents

**Authors:** Patrick Tser Jern Kon; Archana Pradeep; Ang Chen; Alex Ellis; Warren Hunt; Zijian Wang; John Yang; Samuel Thompson

**ID:** 155936 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1gT9qIbj9f>) | [PDF](<https://openreview.net/pdf?id=1gT9qIbj9f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155936>)

Small language models \(SLMs\) offer compelling advantages in cost, latency, and adaptability, but have so far lagged behind larger models on long\-horizon software engineering tasks such as SWE\-bench, where they suffer from pervasive action looping and low resolution rates\. We introduce SWE\-Protégé, a post\-training framework that reframes software repair as an expert–protégé collaboration problem\. In SWE\-Protégé, an SLM remains the sole decision\-maker while learning to selectively seek guidance from a strong expert model, recognize stalled states, and follow through on expert feedback\. Our approach combines supervised fine\-tuning on expert\-augmented trajectories with agentic reinforcement learning that explicitly discourages degenerative looping and unproductive expert collaboration\. We lightly post\-train Qwen2\.5\-Coder\-7B\-Instruct to achieve 42\.4% Pass@1 on SWE\-bench Verified, a \+25\.4% improvement over the prior SLM state of the art, while using expert assistance sparsely \(≈ 4 calls per task and 11% of total tokens\)\.

## UniClawBench: A Universal Benchmark for Proactive Agents on Real\-World Tasks

**Authors:** Zhekai Chen; CHENGQI DUAN; Kaiyue Sun; Bohao Li; Yuqing Wang; Manyuan Zhang; Xihui Liu

**ID:** 139060\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139060

[Paper](<https://openreview.net/forum?id=nVoCk7Bf1E>) | [PDF](<https://openreview.net/pdf?id=nVoCk7Bf1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139060>)

_Abstract unavailable from the accessible public sources._

## RealityTest: How People Probe AI Identity and Whether Models Disclose It

**Authors:** Anna Gausen; Sarenne Wallbridge; Bessie O&amp;amp;\#x27;Dell; Christopher Summerfield; Hannah Rose Kirk

**ID:** 139210\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139210

[Paper](<https://openreview.net/forum?id=eUlBhLa5hL>) | [PDF](<https://openreview.net/pdf?id=eUlBhLa5hL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139210>)

AI systems are increasingly deployed in conversational settings where users may be uncertain whether they are speaking with a human or an AI\. Despite mounting regulatory attention to this known safety risk, existing evaluations of AI disclosure are typically English\-only, based on machine\-generated questions, and restricted to text\. We present RealityTest to comprehensively test whether AI systems disclose their identity when asked\. The benchmark is the first large\-scale multimodal and multilingual evaluation, grounded in human data on how people actually encounter and question AI identity in the real\-world\. Alongside the benchmark, we release the underlying dataset of 3,152 identity\-probing queries collected from $\\textasciitilde$750 participants across 49 countries and five languages, in text and speech scenarios\. We find that only 31\\% of people ask about identity directly, and that the questions people ask are far more diverse than machine\-generated queries\. We test 17 text and 6 speech models, and find substantial variation in disclosure behaviour\. However, a single suppression instruction reduces disclosure rates to below 30\\%, even in the best\-performing models\. Validating our investment in diverse, human\-grounded evaluation data, we find that how the question is phrased and the context of the conversation matter more for disclosure than which model is being tested\. Safety evaluations built on narrow or synthetic query sets risk mischaracterising how models behave in realistic deployment settings\.

## TRACE: Tourism Recommendation with Accountable Citation Evidence

**Authors:** Zixu Zhao; SIJIN WANG; Yu Hou; YUANYUAN XU; Yufan Sheng; Xike Xie; Wenjie Zhang; Won\-Yong Shin; Xin Cao

**ID:** 139280\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139280

[Paper](<https://openreview.net/forum?id=ZmCqSnVZ8k>) | [PDF](<https://openreview.net/pdf?id=ZmCqSnVZ8k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139280>)

Tourism is a high\-stakes setting for conversational recommender systems \(CRS\): a plausible\-sounding suggestion can waste real money and trip time once a traveler acts on it\. Existing CRS benchmarks primarily evaluate systems with a single Recall@$k$ score over entity mentions, and tourism\-specific resources add spatial or knowledge\-graph context, yet none of them couple multi\-turn recommendation with verbatim review\-span evidence and rejection recovery\. This leaves an evaluation gap for tourism recommendation that is simultaneously \*trustworthy\*, \*verifiable\*, and \*adaptive\*: recommend the right point of interest \(POI\) for multi\-aspect preferences \(such as cuisine, price, atmosphere, walking distance\), justify each suggestion with verifiable evidence from prior visitors so the traveler can act without trial and error, and recover when the first recommendation is rejected mid\-dialogue\. We introduce \*\*TRACE\*\*, where each item is \*a multi\-turn tourism recommendation dialogue with review\-span citations and explicit rejection turns\*: 10,000 dialogues over 2,400 Yelp POIs and 34,208 reviews across eight U\.S\. cities, paired with 14 retrieval, planning, and LLM baselines, along with 25 metrics organized under \*Accuracy\*, \*Grounding\*, and \*Recovery\*\. Across these baselines, TRACE reveals the \*\*Three\-Competency Gap\*\*: LLM Zero\-Shot leads in closed\-set Recall@1 and rejection recovery but cites less densely than retrievers; non\-LLM retrievers achieve surface\-verbatim grounding but with low accuracy; Multi\-Review Synthesis fails on Recovery\. The Grounding Score agrees with human citation precision \(Spearman $\\rho = \+0\.80$, $p &lt; 10^\{\-20\}$\), and paired $t$\-tests reproduce the per\-baseline ranking \($p &lt; 0\.01$ on the dominant contrasts\)\. TRACE reframes accountable tourism recommendation as a joint target \(right POI, verifiable evidence, adaptive repair\) rather than a single\-axis leaderboard\.

## WorldSpeech: A Multilingual Speech Corpus from Around the World

**Authors:** Antonis Asonitis; Luca Lanzendörfer; Frédéric Berdoz; Roger Wattenhofer

**ID:** 139336\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139336

[Paper](<https://openreview.net/forum?id=WBzZjghqhE>) | [PDF](<https://openreview.net/pdf?id=WBzZjghqhE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139336>)

Automatic speech recognition \(ASR\) performs well for high\-resource languages with abundant paired audio\-transcript data, but its accuracy degrades sharply for most languages due to limited publicly available aligned data\. To this end, we introduce WorldSpeech, a 24kHz multilingual speech corpus comprising 65k hours of aligned audio\-transcript data across 76 languages, collected from diverse public sources including parliamentary proceedings, international broadcasts, and public\-domain audiobooks\. For 37 languages, WorldSpeech provides more than 200 hours of aligned speech, with 28 exceeding 500 hours and 24 surpassing 1k hours\. Fine\-tuning existing ASR models on WorldSpeech results in an average relative Word\-Error\-Rate reduction of 63\.5% across 11 typologically diverse languages\.

## NorSA: Accelerating LLM Decoding via Normalized Sparse Activation

**Authors:** Tianteng Gu; Bo Xiao; Ke Zeng; Shuai Shi; Wangyou Zhang; Chenda Li; Yanmin Qian

**ID:** 154390\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154390

[Paper](<https://openreview.net/forum?id=DvzLG9N5Dx>) | [PDF](<https://openreview.net/pdf?id=DvzLG9N5Dx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154390>)

Sparse activation accelerates Large Language Model \(LLM\) decoding by removing redundant computations and memory access, but existing methods often assume hidden\-state dimensions are independent and identically distributed \(i\.i\.d\.\)\. We replace this i\.i\.d\. perspective with a covariance\-aware view by analyzing contextual dependencies across tokens and inter\-dimensional correlations within hidden states\. We introduce Normalized Sparse Activation \(NorSA\), a training\-free framework that combines dynamic thresholding with decorrelating rotation\. Across the LLaMA, Mistral, and Qwen families, NorSA consistently improves perplexity and downstream accuracy over prior training\-free baselines, especially in high\-sparsity regimes\. On LLaMA3\-8B at 50\\% sparsity, it stays within 0\.44 perplexity points of the dense model while achieving a 1\.32$\\times$ end\-to\-end decoding speedup\.

## Accelerating Diffusion Language Models via Structured Suffix Modeling

**Authors:** Zifeng Cheng; Keda Li; Zhiwei Jiang; Cong Wang; Fei Shen; Qing Gu

**ID:** 152485\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152485

[Paper](<https://openreview.net/forum?id=SkQxO613nL>) | [PDF](<https://openreview.net/pdf?id=SkQxO613nL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152485>)

_Abstract unavailable from the accessible public sources._

## SAME: Stability\-Aware Embedding Extraction in Mixture\-of\-Experts Language Models

**Authors:** Shufan Yang; Zifeng Cheng; Zhiwei Jiang; Hao Wang; Miao Xue; Changhui Sun; Cong Wang; Ao Zhou; Qing Gu

**ID:** 152895\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152895

[Paper](<https://openreview.net/forum?id=PcLcfDARfL>) | [PDF](<https://openreview.net/pdf?id=PcLcfDARfL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152895>)

_Abstract unavailable from the accessible public sources._

## Mind the Gap: Dataset and Fine\-grained Evaluation for Inline Audio Descriptions

**Authors:** Subhashini Venugopalan; Yingwen Tan; Taylor Roper; Jimmy Tobin; Anton Kast; Alicia Martin; Sam Sepah; Amy Pavel

**ID:** 139386\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139386

[Paper](<https://openreview.net/forum?id=Ta6qlgEwjY>) | [PDF](<https://openreview.net/pdf?id=Ta6qlgEwjY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139386>)

_Abstract unavailable from the accessible public sources._

## SMASH: Probing Speech Recognition Robustness via Semantically Targeted Bit Flips

**Authors:** Zafaryab Haider; Md Hafizur Rahman; Aysegul Bumin; Prabuddha Chakraborty

**ID:** 150005\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150005

[Paper](<https://openreview.net/forum?id=lUIe5d85AP>) | [PDF](<https://openreview.net/pdf?id=lUIe5d85AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150005>)

Automatic speech recognition \(ASR\) systems are usually judged by aggregate transcript accuracy, but real failures often hinge on meaning: for example, a wrong dose, address, account number, or date can matter more than many harmless word errors\. We introduce SMASH, a framework for finding targeted semantic failures caused by sparse INT8 weight\-bit perturbations, a dominant model data type for ASR edge devices, in quantized sequence\-to\-sequence ASR models\. Given an audio input and a meaning\-critical span,SMASH searches for small weight changes that replace the intended meaning while keeping the transcript readable, plausible, and close to the original output\. Each accepted fault is a certificate that a specific semantic substitution is reachable under a bounded perturbation budget\. Empirical study focuses on numeric and scalar substitutions across three ASR backbones: Whisper\-small\.en \(WS\), Whisper\-large\-v3 \(WLv3\), and SeamlessM4T\-v2\-large \(S\-M4T\); and three corpora: an LLM\-assisted controlled corpus \(LACC\), MultiMed, and LibriSpeech\. On LACC at a 20\-bit budget \($B$\), SMASH\-hybrid accepts numeric substitutions on 24/45 WS targets, 19/44 WLv3 targets, and 5/34 S\-M4T targets; reachability is lower on real\-speech datasets\. In matched LACC budget sweeps tested up to $B=40$, WS reaches its ceiling already at $B=20$, while WLv3 and S\-M4T continue to gain accepted targeted substitutions through $B=40$\. Human validation supports the gate\-based labels: on a 105\-item shared validation set, independent human\-majority labels and a four\-judge large\- language\-model ensemble agree on the composite clean\_success label, with $\\kappa=1\.00$\. The faults are sparse: the pooled median is three INT8 bit flips, with medians of two flips on WS, eleven on WLv3, and twelve on S\-M4T\. Entity and negation pivots are evaluated as secondary evidence in the appendix\. SMASH shifts ASR robustness evaluation from "how much did the transcript change?'' to "which meanings can be changed, how plausibly, and with how few bit flips?''

## UniPrefill: Universal Long\-Context Prefill Acceleration via Block\-wise Dynamic Sparsification

**Authors:** Qihang Fan; Huaibo Huang; zhiyingwu; Bingning Wang; Ran He

**ID:** 152106\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152106

[Paper](<https://openreview.net/forum?id=VU9bHYAvdH>) | [PDF](<https://openreview.net/pdf?id=VU9bHYAvdH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152106>)

As large language models \(LLMs\) continue to advance rapidly, they are becoming increasingly capable while simultaneously demanding ever\-longer context lengths\. To improve the inference efficiency of long\-context processing, several novel low\-complexity hybrid architectures have recently been proposed, effectively alleviating the computational burden of long\-context inference\. However, existing research on long\-context prefill acceleration remains predominantly focused on sparse attention mechanisms, which achieve their maximum speedup only on full\-attention models\. When transferred to emerging architectures — such as linear/full attention hybrids or sliding window/full attention hybrids — these prefill acceleration approaches suffer significant performance degradation\. Furthermore, such methods are generally incompatible with continuous batching, making them difficult to integrate into modern inference engines such as vLLM\. To this end, we propose UniPrefill, a prefill acceleration framework applicable to virtually any model architecture, which directly accelerates the model's computation at the token level\. We further implement UniPrefill as a continuous batching operator and extend vLLM's scheduling strategy to natively support prefill\-decode co\-processing for UniPrefill, enabling its seamless integration into vLLM\. UniPrefill achieves up to 2\.1x speedup in Time\-To\-First\-Token \(TTFT\), with the acceleration becoming increasingly pronounced as the number of concurrent requests grows\.

## Membrane Sensitivity and Deployment Fragility of Learnable Time Constants in Spiking Neural Networks

**Authors:** CHIU\-CHANG CHENG; Ya\-Ning Chang; Chao\-Hung Wang

**ID:** 148593 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wa6O4eAtIZ>) | [PDF](<https://openreview.net/pdf?id=wa6O4eAtIZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148593>)

Spiking neural networks \(SNNs\) with learnable membrane time constants can improve temporal processing by adapting neuronal integration timescales, but they also turn the decay factor $\\beta$ into an optimized dynamical parameter that is fragile under hardware\-induced parameter mismatch\. We develop a perturbation\-based account of how time\-constant variation affects trained SNNs\. In controlled software simulations, this fragility is strongly task\-dependent: Spiking Heidelberg Digits \(SHD\) and Spiking Speech Commands \(SSC\) settings lose $7\\text\{\-\-\}20$ percentage points of accuracy under $20$% coefficient\-of\-variation \(CV\) perturbations in $\\beta$, whereas DVS\-Gesture and CIFAR\-10 lose less than $3$ pp\. We show that, under a surrogate\-linearized first\-order analysis, the failure mode is governed by the membrane sensitivity $\\Psi$\. This quantity admits a closed\-form online recursion requiring only one additional state per layer and no extra temporal storage\. The analysis identifies time\-averaged sensitivity energy as the controllable term in deployment fragility, leading to $\\textbf\{MARS\}$ \($\\textbf\{M\}$embrane\-$\\textbf\{A\}$ware $\\textbf\{R\}$obustness through $\\textbf\{S\}ensitivity$ Regularization\), a training objective derived from perturbation analysis rather than heuristic noise augmentation\. We prove a conservative worst\-case output\-perturbation bound and introduce a typical\-case diagnostic explaining why sensitivity remains predictive when worst\-case constants are vacuous\. At $20$% CV perturbation, MARS reduces the accuracy drop in the sensitive settings to at most $0\.5$ pp while preserving nominal accuracy, with minimal effect on DVS\-Gesture and CIFAR\-10\.

## SMASH: Probing Speech Recognition Robustness via Semantically Targeted Bit Flips

**Authors:** Zafaryab Haider; Md Hafizur Rahman; Aysegul Bumin; Prabuddha Chakraborty

**ID:** 150005\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150005

[Paper](<https://openreview.net/forum?id=lUIe5d85AP>) | [PDF](<https://openreview.net/pdf?id=lUIe5d85AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150005>)

Automatic speech recognition \(ASR\) systems are usually judged by aggregate transcript accuracy, but real failures often hinge on meaning: for example, a wrong dose, address, account number, or date can matter more than many harmless word errors\. We introduce SMASH, a framework for finding targeted semantic failures caused by sparse INT8 weight\-bit perturbations, a dominant model data type for ASR edge devices, in quantized sequence\-to\-sequence ASR models\. Given an audio input and a meaning\-critical span,SMASH searches for small weight changes that replace the intended meaning while keeping the transcript readable, plausible, and close to the original output\. Each accepted fault is a certificate that a specific semantic substitution is reachable under a bounded perturbation budget\. Empirical study focuses on numeric and scalar substitutions across three ASR backbones: Whisper\-small\.en \(WS\), Whisper\-large\-v3 \(WLv3\), and SeamlessM4T\-v2\-large \(S\-M4T\); and three corpora: an LLM\-assisted controlled corpus \(LACC\), MultiMed, and LibriSpeech\. On LACC at a 20\-bit budget \($B$\), SMASH\-hybrid accepts numeric substitutions on 24/45 WS targets, 19/44 WLv3 targets, and 5/34 S\-M4T targets; reachability is lower on real\-speech datasets\. In matched LACC budget sweeps tested up to $B=40$, WS reaches its ceiling already at $B=20$, while WLv3 and S\-M4T continue to gain accepted targeted substitutions through $B=40$\. Human validation supports the gate\-based labels: on a 105\-item shared validation set, independent human\-majority labels and a four\-judge large\- language\-model ensemble agree on the composite clean\_success label, with $\\kappa=1\.00$\. The faults are sparse: the pooled median is three INT8 bit flips, with medians of two flips on WS, eleven on WLv3, and twelve on S\-M4T\. Entity and negation pivots are evaluated as secondary evidence in the appendix\. SMASH shifts ASR robustness evaluation from "how much did the transcript change?'' to "which meanings can be changed, how plausibly, and with how few bit flips?''

## UniPrefill: Universal Long\-Context Prefill Acceleration via Block\-wise Dynamic Sparsification

**Authors:** Qihang Fan; Huaibo Huang; zhiyingwu; Bingning Wang; Ran He

**ID:** 152106\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152106

[Paper](<https://openreview.net/forum?id=VU9bHYAvdH>) | [PDF](<https://openreview.net/pdf?id=VU9bHYAvdH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152106>)

As large language models \(LLMs\) continue to advance rapidly, they are becoming increasingly capable while simultaneously demanding ever\-longer context lengths\. To improve the inference efficiency of long\-context processing, several novel low\-complexity hybrid architectures have recently been proposed, effectively alleviating the computational burden of long\-context inference\. However, existing research on long\-context prefill acceleration remains predominantly focused on sparse attention mechanisms, which achieve their maximum speedup only on full\-attention models\. When transferred to emerging architectures — such as linear/full attention hybrids or sliding window/full attention hybrids — these prefill acceleration approaches suffer significant performance degradation\. Furthermore, such methods are generally incompatible with continuous batching, making them difficult to integrate into modern inference engines such as vLLM\. To this end, we propose UniPrefill, a prefill acceleration framework applicable to virtually any model architecture, which directly accelerates the model's computation at the token level\. We further implement UniPrefill as a continuous batching operator and extend vLLM's scheduling strategy to natively support prefill\-decode co\-processing for UniPrefill, enabling its seamless integration into vLLM\. UniPrefill achieves up to 2\.1x speedup in Time\-To\-First\-Token \(TTFT\), with the acceleration becoming increasingly pronounced as the number of concurrent requests grows\.

## Membrane Sensitivity and Deployment Fragility of Learnable Time Constants in Spiking Neural Networks

**Authors:** CHIU\-CHANG CHENG; Ya\-Ning Chang; Chao\-Hung Wang

**ID:** 148593\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148593

[Paper](<https://openreview.net/forum?id=wa6O4eAtIZ>) | [PDF](<https://openreview.net/pdf?id=wa6O4eAtIZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148593>)

Spiking neural networks \(SNNs\) with learnable membrane time constants can improve temporal processing by adapting neuronal integration timescales, but they also turn the decay factor $\\beta$ into an optimized dynamical parameter that is fragile under hardware\-induced parameter mismatch\. We develop a perturbation\-based account of how time\-constant variation affects trained SNNs\. In controlled software simulations, this fragility is strongly task\-dependent: Spiking Heidelberg Digits \(SHD\) and Spiking Speech Commands \(SSC\) settings lose $7\\text\{\-\-\}20$ percentage points of accuracy under $20$% coefficient\-of\-variation \(CV\) perturbations in $\\beta$, whereas DVS\-Gesture and CIFAR\-10 lose less than $3$ pp\. We show that, under a surrogate\-linearized first\-order analysis, the failure mode is governed by the membrane sensitivity $\\Psi$\. This quantity admits a closed\-form online recursion requiring only one additional state per layer and no extra temporal storage\. The analysis identifies time\-averaged sensitivity energy as the controllable term in deployment fragility, leading to $\\textbf\{MARS\}$ \($\\textbf\{M\}$embrane\-$\\textbf\{A\}$ware $\\textbf\{R\}$obustness through $\\textbf\{S\}ensitivity$ Regularization\), a training objective derived from perturbation analysis rather than heuristic noise augmentation\. We prove a conservative worst\-case output\-perturbation bound and introduce a typical\-case diagnostic explaining why sensitivity remains predictive when worst\-case constants are vacuous\. At $20$% CV perturbation, MARS reduces the accuracy drop in the sensitive settings to at most $0\.5$ pp while preserving nominal accuracy, with minimal effect on DVS\-Gesture and CIFAR\-10\.

## ALTER: An Allen's Algebra\-Based Evaluation Framework for Temporal Reasoning of LLMs

**Authors:** Hongkai Zhou; Yanhui Li

**ID:** 139265\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139265

[Paper](<https://openreview.net/forum?id=ay0UXDsniW>) | [PDF](<https://openreview.net/pdf?id=ay0UXDsniW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139265>)

_Abstract unavailable from the accessible public sources._

## ForecastCompass: Guiding Agentic Forecasting with Adaptive Factor Memory

**Authors:** Yurui Chang; Yongkang Du; Yuanpu Cao; Jinghui Chen; Lu Lin

**ID:** 153936\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153936

[Paper](<https://openreview.net/forum?id=HSZMPfq6tX>) | [PDF](<https://openreview.net/pdf?id=HSZMPfq6tX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153936>)

_Abstract unavailable from the accessible public sources._

## Seeing Speech: Learning Visible Articulatory Dynamics for Speech\-Driven 3D Facial Animation

**Authors:** Hyung Kyu Kim; Byungchan Hwang; HAKGU KIM

**ID:** 148378\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148378

[Paper](<https://openreview.net/forum?id=yLMGoDkvCM>) | [PDF](<https://openreview.net/pdf?id=yLMGoDkvCM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148378>)

_Abstract unavailable from the accessible public sources._

## IRIS: Interpolative Rényi Iterative Self\-play for Large Language Model Fine\-Tuning

**Authors:** Wenjie Liao; Like Wu; Liangjie Zhao; Shihui Xu; Shigeru Fujimura

**ID:** 148291 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yx017YEEPx>) | [PDF](<https://openreview.net/pdf?id=yx017YEEPx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148291>)

_Abstract unavailable from the accessible public sources._

## When Guessing is Rewarded: Rethinking Language Model Evaluation with Distributional Uncertainty Scoring

**Authors:** Tom Burns

**ID:** 139854 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0R23YXfZQM>) | [PDF](<https://openreview.net/pdf?id=0R23YXfZQM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139854>)

Standard language model evaluation assigns scores to single predicted answers, rewarding high\-confidence responses regardless of how residual probability mass is distributed over alternative options\. This creates a systematic pressure toward overconfident guessing: under accuracy\-based schemes, a model maximises its expected score by always committing to an answer rather than abstaining, even when its uncertainty is high\. While penalty\-based approaches partially address this by raising the confidence threshold for strategic guessing, they still treat all sub\-threshold responses identically, ignoring a fundamental distinction in how models can express uncertainty \- for example between hedging toward incorrect answers versus hedging toward "I don't know" responses\. We introduce a novel evaluation metric to solve this problem of not considering a model's entire probability distribution over answer choices\. Our metric naturally distinguishes between harmful overconfidence in wrong answers and uncertainty expressed through abstention, providing scores in an interpretable default range\. Through theoretical analysis and illustrative examples, we demonstrate our metric offers a more nuanced and aligned evaluation paradigm that incentivises models to express genuine uncertainty rather than guessing\. We then adapt 12 existing evaluation benchmarks to our metric's variants and measure performance on six language models, showing that for half of the tested benchmarks scores are negative across all tested models, indicating significant tendencies towards hallucination\.

## Knowing You before You Speak: User State Modeling for LLM\-Based Personalized Dialogue

**Authors:** jiani luo; Xiaoyan Zhao; Yang Zhang; Shuyi Miao; Bingbing Xu; Stefan Konigorski; Tat\-Seng Chua

**ID:** 148610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wTlC6ZY4eu>) | [PDF](<https://openreview.net/pdf?id=wTlC6ZY4eu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148610>)

Personalized dialogue requires more than recalling explicit user histories: systems also need to infer hidden user states that evolve through interaction and shape appropriate response strategies\. Existing memory\- and profile\-based methods primarily reuse observable user information, offering limited support for modeling user\-state dynamics or selecting actions based on how they shape future user states\. We propose PUMA \(Prospective User\-state Modeling for Action selection\), a framework grounded in the Free Energy Principle \(FEP\) that formulates personalization as decision\-making under partial observability, centered on an explicit user state model that captures latent user states and their action\-conditioned dynamics\. At each turn, PUMA maintains a belief over the user's hidden state, refines the user state model for observation generation and action\-conditioned state transition, and selects dialogue actions by minimizing expected free energy—balancing epistemic and pragmatic objectives under a unified criterion\. This formulation shifts personalization from passive memory retrieval to model\-based decision\-making over user evolution\. We instantiate PUMA on healthcare\-oriented counseling and motivational interviewing benchmarks with latent state annotations for rigorous evaluation\.  Experiments show that PUMA improves long\-horizon dialogue outcomes while maintaining strong response quality, and a cross\-dataset study demonstrates more reliable user\-state estimation and next\-state prediction\.  Our code is available at: https://anonymous\.4open\.science/r/PUMA\-4DA7/\.

## What Sound Tells You About the Room

**Authors:** Yiduo Hao; Yiwei Tang; Jiayang Li; Zitong Lan; Haowen Lai; Romit Roy Choudhury; Mingmin Zhao

**ID:** 148227 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zR3vs29m90>) | [PDF](<https://openreview.net/pdf?id=zR3vs29m90>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148227>)

A room impulse response \(RIR\) encodes how sound reflects, scatters, and decays inside a room, and therefore what the room looks like and what it is made of\. We formalize this observation as Acoustic Inverse Rendering \(AIR\): recovering dense panoramic geometry and per\-band acoustic reflectance of a scene directly from its RIR\. The task is challenging as the RIR collapses all propagation paths into a single temporal signal, and the resulting inverse mapping is severely ambiguous\. AIR closes this gap by beamforming the RIR onto the equirectangular grid and conditioning a diffusion model on the resulting directional features, yielding a distribution over plausible scenes rather than a single point estimate\. The same spherical beamforming applies to FOA, binaural, or mono microphone setups\. On both simulated and real\-world datasets, AIR produces coherent room geometry and per\-band acoustic reflectance maps from acoustic input alone, significantly outperforming prior baselines on this inverse problem\.

