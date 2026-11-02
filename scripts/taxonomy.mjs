import { slug } from './data-utils.mjs';

// English names preserve the official taxonomy. Keyword rules are local, not official labels.
const definitions = [
  ['Applications', '应用', [
    ['Applications', '综合应用', []],
    ['Chemistry and Drug Discovery', '化学与药物发现', ['drug discovery', 'molecular', 'molecule', 'chemistry', 'protein', 'peptide', '药物', '分子']],
    ['Climate', '气候', ['climate', 'weather', 'precipitation', 'carbon emission', '气候']],
    ['Genetics, Cell Biology, etc', '遗传学与细胞生物学', ['genomic', 'genomics', 'single-cell', 'gene expression', 'rna', 'dna', '细胞']],
    ['Health', '医疗健康', ['medical', 'clinical', 'healthcare', 'diagnosis', 'patient', 'radiology', '医学']],
    ['Language, Speech and Dialog', '语言、语音与对话', ['speech', 'audio', 'acoustic', 'dialogue', '语音']],
    ['Neuroscience, Cognitive Science', '神经科学与认知科学', ['neuroscience', 'brain', 'cognitive', 'neural recording', 'eeg', '神经科学']],
    ['Physics', '物理学', ['physics', 'partial differential', 'pde', 'fluid', 'quantum', '物理']],
    ['Robotics', '机器人', ['robot', 'robotics', 'robotic', 'manipulation', 'locomotion', 'embodied', '机器人']],
    ['Time Series', '时间序列', ['time series', 'time-series', 'forecasting', 'temporal forecasting', '时间序列']],
    ['Everything Else', '其他应用', []],
  ]],
  ['Computer Vision', '计算机视觉', [
    ['3D Rendering & Reconstruction', '三维渲染与重建', ['3d', '3d reconstruction', 'surface reconstruction', 'scene reconstruction', 'novel view synthesis', 'rendering', 'gaussian splatting', 'nerf', 'point cloud', '三维']],
    ['Classification and Understanding', '图像分类与理解', ['image classification', 'object detection', 'visual recognition', 'image understanding']],
    ['Image and Video Generation', '图像与视频生成', ['image generation', 'video generation', 'text-to-image', 'text-to-video', 'image editing', 'video synthesis']],
    ['Segmentation', '图像分割', ['segmentation', 'segment anything', 'semantic segmentation', '分割']],
    ['Vision Models & Multimodal', '视觉模型与多模态', ['vision-language', 'vision language', 'multimodal', 'multi-modal', 'vlm', 'visual grounding', '多模态']],
    ['Everything Else', '其他视觉研究', ['computer vision', 'image', 'video', 'visual']],
  ]],
  ['Data-centric AI', '以数据为中心的人工智能', [
    ['Data-centric AI methods and tools', '数据方法与工具', ['data-centric', 'data curation', 'data quality', 'data selection', 'dataset distillation', 'synthetic data', 'data valuation', '数据质量']],
    ['Everything Else', '其他数据研究', ['dataset', 'data annotation']],
  ]],
  ['Deep Learning', '深度学习', [
    ['Algorithms', '算法', ['deep learning', 'neural network', 'neural architecture']],
    ['Attention Mechanisms', '注意力机制', ['attention mechanism', 'self-attention', 'linear attention', 'state space model', 'attention head']],
    ['Generative Models and Autoencoders', '生成模型与自编码器', ['diffusion', 'flow matching', 'generative model', 'autoencoder', 'score matching', '生成模型']],
    ['Graph Neural Networks', '图神经网络', ['graph neural', 'gnn', 'graph learning', 'graph representation', 'graph transformer', '图神经']],
    ['Robustness', '鲁棒性', ['adversarial', 'robustness', 'out-of-distribution', 'distribution shift', '鲁棒']],
    ['Theory', '深度学习理论', ['neural tangent', 'neural collapse', 'double descent', 'feature learning theory']],
    ['Everything Else', '其他深度学习', []],
  ]],
  ['General Machine Learning', '通用机器学习', [
    ['Causality', '因果学习', ['causal', 'causality', 'counterfactual', 'treatment effect', '因果']],
    ['Representation Learning', '表征学习', ['representation learning', 'contrastive learning', 'self-supervised', 'embedding', '表征']],
    ['Transfer, Multitask and Meta-learning', '迁移、多任务与元学习', ['meta-learning', 'transfer learning', 'multitask', 'multi-task', 'few-shot', 'domain adaptation', '迁移学习']],
    ['Everything Else', '其他机器学习', []],
  ]],
  ['Optimization', '优化', [
    ['Optimization', '综合优化', ['optimization']],
    ['Bayesian & Black-box Optimization', '贝叶斯与黑盒优化', ['bayesian optimization', 'black-box optimization', 'black box optimization']],
    ['Discrete Optimization', '离散优化', ['combinatorial optimization', 'discrete optimization', 'mixed-integer', 'integer programming']],
    ['Large Scale, Parallel and Distributed', '大规模、并行与分布式优化', ['distributed optimization', 'decentralized optimization', 'parallel optimization']],
    ['Neural Network Optimization', '神经网络优化', ['gradient descent', 'optimizer', 'loss landscape', 'training dynamics', 'sharpness']],
    ['Optimization and Learning under Uncertainty', '不确定性下的优化与学习', ['robust optimization', 'stochastic programming', 'risk-sensitive optimization']],
    ['Stochastic & Convex Optimization', '随机与凸优化', ['convex optimization', 'stochastic optimization', 'convergence rate', 'nonconvex', 'non-convex']],
    ['Everything Else', '其他优化', []],
  ]],
  ['Probabilistic Methods', '概率方法', [
    ['Probabilistic Methods', '综合概率方法', ['probabilistic']],
    ['Bayesian Models and Methods', '贝叶斯模型与方法', ['bayesian', 'posterior', 'variational inference']],
    ['Gaussian Processes', '高斯过程', ['gaussian process', 'gaussian processes']],
    ['Monte Carlo and Sampling Methods', '蒙特卡洛与采样', ['monte carlo', 'mcmc', 'langevin', 'sampling method', 'importance sampling']],
    ['Everything Else', '其他概率方法', []],
  ]],
  ['Reinforcement Learning', '强化学习', [
    ['Batch Offline', '离线强化学习', ['offline reinforcement', 'offline rl', 'batch reinforcement', 'offline policy']],
    ['Deep RL', '深度强化学习', ['reinforcement learning', 'policy gradient', 'reward model', 'rlhf', '强化学习']],
    ['Multi-agent', '多智能体', ['multi-agent', 'multiagent', 'multi agent', 'cooperative agent', '多智能体']],
    ['Everything Else', '其他强化学习', ['bandit', 'markov decision', 'regret minimization']],
  ]],
  ['Social Aspects', '社会影响与可信人工智能', [
    ['Social Aspects', '综合社会影响', ['ai governance', 'societal']],
    ['Accountability, Transparency and Interpretability', '问责、透明度与可解释性', ['interpretability', 'interpretable', 'explainability', 'mechanistic', 'sparse autoencoder', 'transparency', '可解释']],
    ['Fairness, Equity, Justice and Safety', '公平、公正与安全', ['fairness', 'fair representation', 'bias mitigation', 'ai safety', 'alignment', 'jailbreak', '公平']],
    ['Privacy-preserving Statistics and Machine Learning', '隐私保护统计与机器学习', ['privacy', 'private learning', 'differentially private', 'machine unlearning', '隐私']],
    ['Trustworthy Machine Learning', '可信机器学习', ['trustworthy', 'hallucination', 'calibration', 'conformal prediction', 'uncertainty quantification', '可信']],
    ['Everything Else', '其他社会影响', ['ethics', 'social impact', 'sustainability']],
  ]],
  ['Theory', '理论', [
    ['Domain Adaptation and Transfer Learning', '领域适应与迁移学习理论', ['domain adaptation theory', 'transfer learning theory']],
    ['Game Theory', '博弈论', ['game theory', 'nash equilibrium', 'mechanism design', '博弈']],
    ['Learning Theory', '学习理论', ['learning theory', 'generalization bound', 'sample complexity', 'pac-bayes', 'statistical learning', 'minimax', '学习理论']],
    ['Reinforcement Learning and Planning', '强化学习与规划理论', ['reinforcement learning theory', 'planning theory', 'bellman']],
    ['Everything Else', '其他理论', ['theoretical analysis', 'information theory', 'identifiability']],
  ]],
  ['Language Models & NLP', '语言模型与自然语言处理', [
    ['Large Language Models', '大语言模型', ['large language model', 'large language models', 'language model', 'language models', 'llm', 'llms', '大语言模型']],
    ['Reasoning and Agents', '推理与智能体', ['reasoning', 'chain-of-thought', 'chain of thought', 'language agent', 'web agent', 'agentic', 'code generation', 'tool use', '推理']],
    ['Natural Language Processing', '自然语言处理', ['natural language', 'machine translation', 'text classification', 'retrieval augmented', 'retrieval-augmented', 'nlp']],
  ]],
  ['ML Systems & Efficiency', '机器学习系统与效率', [
    ['Efficient Models and Inference', '高效模型与推理', ['quantization', 'post-training quantization', 'model quantization', 'pruning', 'model pruning', 'llm pruning', 'compression', 'efficient inference', 'speculative decoding', 'kv cache', 'kv sharing', 'cross-layer kv', '低比特', '量化']],
    ['Distributed and Federated Learning', '分布式与联邦学习', ['federated', 'distributed training', 'parallel training', 'communication-efficient', 'data parallelism', 'pipeline parallelism', '联邦']],
    ['Hardware and Infrastructure', '硬件与基础设施', ['gpu', 'cuda', 'kernel optimization', 'hardware', 'serving', 'accelerator']],
  ]],
];

export const TAXONOMY = definitions.map(([name, nameZh, topics]) => ({
  id: slug(name), name, nameZh,
  topics: topics.map(([topicName, topicZh, keywords]) => ({
    id: slug(`${name}-${topicName}`), name: topicName, nameZh: topicZh, keywords,
  })),
}));

const rules = TAXONOMY.flatMap((category) => category.topics.map((topic) => ({ category, topic })));
const normalize = (text) => String(text ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g, ' ');
const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const matchers = new Map(rules.flatMap(({ topic }) => topic.keywords).map((word) => [word, new RegExp(`(?:^|[^a-z0-9])${escapeRegex(normalize(word))}(?=$|[^a-z0-9])`, 'u')]));

function scoreRule(rule, title, abstract) {
  let score = 0;
  const matches = [];
  for (const keyword of rule.topic.keywords) {
    const matcher = matchers.get(keyword);
    const titleMatch = matcher.test(title);
    const abstractMatch = matcher.test(abstract);
    if (titleMatch || abstractMatch) {
      const specificity = keyword.includes(' ') || keyword.includes('-') ? 3 : 1;
      score += (titleMatch ? 5 : 0) * specificity + (abstractMatch ? 1 : 0) * specificity;
      matches.push(keyword);
    }
  }
  return { ...rule, score, matches };
}

export function classifyTopic({ title, abstract = '', officialTopic = null, keywords = [] }) {
  const cleanTitle = normalize(title);
  const cleanAbstract = normalize(abstract);
  let candidates = rules;
  let official = null;
  if (typeof officialTopic === 'string' && officialTopic.trim()) {
    const parts = officialTopic.split('->').map((part) => part.trim()).filter(Boolean);
    const categoryName = parts[0];
    const topicName = parts.at(-1);
    const category = TAXONOMY.find((item) => item.name === categoryName);
    const topic = category?.topics.find((item) => item.name === topicName);
    if (!category || !topic) throw new Error(`Unknown official topic: ${officialTopic}; update the bilingual taxonomy before publishing`);
    official = { category, topic };
    candidates = [official];
  }
  const ranked = candidates.map((rule) => scoreRule(rule, cleanTitle, cleanAbstract)).sort((a, b) => b.score - a.score);
  const winner = official ? ranked[0] : ranked[0].score > 0 ? ranked[0] : rules.find((rule) => rule.category.name === 'General Machine Learning' && rule.topic.name === 'Everything Else');
  return {
    category: winner.category.name,
    topic: winner.topic.name,
    topicSource: official ? 'official' : 'inferred',
    officialTopic: officialTopic?.trim() || null,
    keywords: [...new Set([...(Array.isArray(keywords) ? keywords.filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim()) : []), ...(winner.matches ?? [])])].slice(0, 12),
  };
}

export function buildTopics(papers) {
  const counts = new Map();
  for (const paper of papers) {
    const key = `${paper.category}\u0000${paper.topic}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return {
    categories: TAXONOMY.map((category) => {
      const topics = category.topics.map(({ keywords, ...topic }) => ({
        ...topic, count: counts.get(`${category.name}\u0000${topic.name}`) ?? 0,
      })).filter((topic) => topic.count > 0);
      return { id: category.id, name: category.name, nameZh: category.nameZh, count: topics.reduce((sum, topic) => sum + topic.count, 0), topics };
    }).filter((category) => category.count > 0),
  };
}
