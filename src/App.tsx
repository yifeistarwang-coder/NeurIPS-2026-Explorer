import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUpRight, Bookmark, BookOpen, Check, ChevronDown, ChevronRight, ChevronsLeft, ChevronsRight, CircleHelp, Copy, ExternalLink, FileJson, FileText, Filter, Github, Globe2, Layers3, LoaderCircle, Menu, Search, Share2, SlidersHorizontal, X } from 'lucide-react';

type Language = 'zh' | 'en';
type Paper = {
  id: string; title: string; authors: string[]; abstract: string; abstractSource: string;
  topic: string; category: string; topicSource: 'official' | 'inferred'; officialTopic: string | null;
  keywords: string[]; paperUrl: string; pdfUrl: string; posterUrl: string; decision: string; thumbnailUrl: string | null;
  sourceEventId: string; duplicateOf: string | null; pdfSource: string; pdfVerified: boolean;
};
type Topic = { id: string; name: string; nameZh: string; count: number };
type Category = Topic & { topics: Topic[] };
type Manifest = {
  updatedAt: string; expectedCount: number; totalPapers: number; abstractsAvailable: number;
  abstractsMissing: number; pdfLinksAvailable: number; officialTopicCount: number; inferredTopicCount: number; sourceUrls: string[];
  uniqueOfficialEventIds: number; repeatedPosterRows: number; uniqueEventsWithAbstracts: number; uniqueEventsMissingAbstracts: number;
};
type Dataset = { papers: Paper[]; categories: Category[]; manifest: Manifest };
type UrlState = { q: string; category: string; topic: string; saved: boolean; paper: string; abstract: boolean; duplicates: boolean; classification: string; sort: string; page: number };
const REPOSITORY = 'https://github.com/yifeistarwang-coder/NeurIPS-2026-Explorer';
const PAGE_SIZE = 30;
const STORAGE_KEY = 'neurips-2026-bookmarks';
const number = (n: number) => new Intl.NumberFormat('en-US').format(n);
const hasAbstract = (paper: Paper) => Boolean(paper.abstract?.trim());
const safeUrl = (url: string | undefined) => {
  try { const parsed = new URL(url || ''); return ['https:', 'http:'].includes(parsed.protocol) ? parsed.href : undefined; } catch { return undefined; }
};
function readUrl(): UrlState {
  const p = new URLSearchParams(window.location.search);
  return { q: p.get('q') || '', category: p.get('category') || '', topic: p.get('topic') || '', saved: p.get('saved') === '1', paper: p.get('paper') || '', abstract: p.get('abstract') === '1', duplicates: p.get('duplicates') === '1', classification: p.get('classification') || '', sort: p.get('sort') || 'default', page: Math.max(1, Number(p.get('page')) || 1) };
}
function getBookmarks(): Set<string> {
  try { const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return new Set(Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []); } catch { return new Set(); }
}
function bibtex(paper: Paper) {
  const clean = (value: string) => value.replace(/[{}]/g, '').replace(/\\/g, '\\textbackslash{}');
  const key = `neurips2026_${paper.id.replace(/[^a-zA-Z0-9]/g, '')}`;
  return `@inproceedings{${key},\n  title = {${clean(paper.title)}},\n  author = {${paper.authors.map(clean).join(' and ')}},\n  booktitle = {Advances in Neural Information Processing Systems},\n  year = {2026},\n  url = {${clean(paper.paperUrl || paper.posterUrl || REPOSITORY)}}\n}`;
}
function download(data: string, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([data], { type }));
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function csvCell(value: unknown) {
  let text = Array.isArray(value) ? value.join('; ') : String(value ?? '');
  if (/^[\s]*[=+\-@]/.test(text) || /^[\t\r\n]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}
function IconButton({ label, children, onClick, active, className = '' }: { label: string; children: ReactNode; onClick: () => void; active?: boolean; className?: string }) {
  return <button type="button" className={`icon-button ${active ? 'active' : ''} ${className}`} title={label} aria-label={label} aria-pressed={active} onClick={onClick}>{children}</button>;
}
function Modal({ title, onClose, children, wide = false }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const items = ref.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, [tabindex="0"]');
        if (!items?.length) return;
        const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || document.activeElement === ref.current)) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', keydown); previous?.focus(); };
  }, [onClose]);
  return <div className="modal-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className={`modal ${wide ? 'wide' : ''}`} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref}><div className="modal-heading"><span>{title}</span><IconButton label="Close / 关闭" onClick={onClose}><X size={20} /></IconButton></div>{children}</div></div>;
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => { try { return localStorage.getItem('neurips-language') === 'en' ? 'en' : 'zh'; } catch { return 'zh'; } });
  const t = (zh: string, en: string) => lang === 'zh' ? zh : en;
  const [state, setState] = useState<UrlState>(readUrl);
  const [query, setQuery] = useState(state.q);
  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [bookmarks, setBookmarks] = useState(getBookmarks);
  const [storageWarning, setStorageWarning] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [methodology, setMethodology] = useState(false);
  const [toast, setToast] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(() => new Set(state.category ? [state.category] : []));
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(() => window.matchMedia('(min-width: 801px)').matches);
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());
  const resultsRef = useRef<HTMLDivElement>(null);
  const update = useCallback((patch: Partial<UrlState>, replace = false) => {
    setState(previous => {
      const next = { ...previous, ...patch };
      const p = new URLSearchParams();
      if (next.q) p.set('q', next.q);
      if (next.category) p.set('category', next.category);
      if (next.topic) p.set('topic', next.topic);
      if (next.saved) p.set('saved', '1');
      if (next.paper) p.set('paper', next.paper);
      if (next.abstract) p.set('abstract', '1');
      if (next.duplicates) p.set('duplicates', '1');
      if (next.classification) p.set('classification', next.classification);
      if (next.sort !== 'default') p.set('sort', next.sort);
      if (next.page > 1) p.set('page', String(next.page));
      const url = `${window.location.pathname}${p.size ? `?${p.toString()}` : ''}${window.location.hash}`;
      if (url !== `${window.location.pathname}${window.location.search}${window.location.hash}`) window.history[replace ? 'replaceState' : 'pushState'](null, '', url);
      return next;
    });
  }, []);
  useEffect(() => {
    const handler = () => { const next = readUrl(); setState(next); setQuery(next.q); };
    window.addEventListener('popstate', handler); return () => window.removeEventListener('popstate', handler);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => { if (query !== state.q) update({ q: query, page: 1 }); }, 280);
    return () => window.clearTimeout(timer);
  }, [query, state.q, update]);
  useEffect(() => { document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; try { localStorage.setItem('neurips-language', lang); } catch { /* Preference is optional. */ } }, [lang]);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError('');
    const load = async () => {
      try {
        const base = import.meta.env.BASE_URL;
        const [papers, topics, manifest] = await Promise.all(['papers.json', 'topics.json', 'manifest.json'].map(async name => {
          const response = await fetch(`${base}data/${name}`, { signal: controller.signal });
          if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
          return response.json();
        }));
        if (!Array.isArray(papers.papers) || !Array.isArray(topics.categories) || typeof manifest.totalPapers !== 'number') throw new Error('Invalid dataset format');
        if (!controller.signal.aborted) { setDataset({ papers: papers.papers, categories: topics.categories, manifest }); setLoading(false); }
      } catch (reason) { if (!controller.signal.aborted) { setError(reason instanceof Error ? reason.message : String(reason)); setLoading(false); } }
    };
    void load(); return () => controller.abort();
  }, [attempt]);
  useEffect(() => { if (!toast) return; const timer = window.setTimeout(() => setToast(''), 3200); return () => window.clearTimeout(timer); }, [toast]);
  useEffect(() => {
    const listener = (event: StorageEvent) => { if (event.key === STORAGE_KEY) setBookmarks(getBookmarks()); };
    window.addEventListener('storage', listener); return () => window.removeEventListener('storage', listener);
  }, []);
  const toggleBookmark = (id: string) => {
    setBookmarks(previous => {
      const next = new Set(previous); if (next.has(id)) next.delete(id); else next.add(id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); setStorageWarning(false); } catch { setStorageWarning(true); }
      return next;
    });
  };
  const copy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); setToast(t('已复制到剪贴板', 'Copied to clipboard')); }
    catch { setToast(t('无法访问剪贴板，请检查浏览器权限', 'Clipboard unavailable. Check browser permissions.')); }
  };
  const share = (paper: Paper) => {
    const url = new URL(window.location.href); url.searchParams.set('paper', paper.id); void copy(url.href);
  };
  const closePaper = useCallback(() => update({ paper: '' }), [update]);
  const closeMethodology = useCallback(() => setMethodology(false), []);
  const closeDrawer = useCallback(() => setDrawer(false), []);
  const nameOf = (item: { name: string; nameZh: string }) => lang === 'zh' ? item.nameZh || item.name : item.name;
  const categories = useMemo(() => {
    if (!dataset) return [];
    if (state.duplicates) return dataset.categories;
    const counts = new Map<string, number>();
    for (const paper of dataset.papers) {
      if (paper.duplicateOf) continue;
      const key = `${paper.category}\0${paper.topic}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    return dataset.categories.map(category => {
      const topics = category.topics.map(topic => ({ ...topic, count: counts.get(`${category.name}\0${topic.name}`) || 0 })).filter(topic => topic.count > 0);
      return { ...category, topics, count: topics.reduce((sum, topic) => sum + topic.count, 0) };
    }).filter(category => category.count > 0);
  }, [dataset, state.duplicates]);
  const topicNames = useMemo(() => new Map(categories.flatMap(c => c.topics.map(topic => [`${c.name}\0${topic.name}`, topic] as const))), [categories]);
  const categoryNames = useMemo(() => new Map(categories.map(c => [c.name, c] as const)), [categories]);
  const topicLabel = (name: string, category = state.category) => { const topic = topicNames.get(`${category}\0${name}`); return topic ? nameOf(topic) : name; };
  const categoryLabel = (name: string) => { const category = categoryNames.get(name); return category ? nameOf(category) : name; };
  const searchIndex = useMemo(() => dataset?.papers.map(paper => ({ paper, text: [paper.title, ...paper.authors, paper.abstract, paper.topic, paper.category, ...(paper.keywords || [])].join(' ').toLocaleLowerCase() })) || [], [dataset]);
  const filtered = useMemo(() => {
    const terms = state.q.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    const result = searchIndex.filter(({ paper, text }) => (state.duplicates || !paper.duplicateOf) && (!state.category || paper.category === state.category) && (!state.topic || paper.topic === state.topic) && (!state.saved || bookmarks.has(paper.id)) && (!state.abstract || hasAbstract(paper)) && (!state.classification || paper.topicSource === state.classification) && terms.every(term => text.includes(term))).map(({ paper }) => paper);
    if (state.sort === 'title') result.sort((a, b) => a.title.localeCompare(b.title));
    if (state.sort === 'author') result.sort((a, b) => (a.authors[0] || '').localeCompare(b.authors[0] || ''));
    if (state.sort === 'topic') result.sort((a, b) => a.topic.localeCompare(b.topic) || a.title.localeCompare(b.title));
    if (state.sort === 'abstract') result.sort((a, b) => Number(hasAbstract(b)) - Number(hasAbstract(a)));
    return result;
  }, [searchIndex, state.q, state.category, state.topic, state.saved, state.abstract, state.duplicates, state.classification, state.sort, bookmarks]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, Math.floor(state.page)));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const selectedPaper = useMemo(() => dataset?.papers.find(paper => paper.id === state.paper), [dataset, state.paper]);
  const manifest = dataset?.manifest;
  const indexedCount = manifest ? (state.duplicates ? manifest.totalPapers : manifest.uniqueOfficialEventIds) : 0;
  const abstractCount = manifest ? (state.duplicates ? manifest.abstractsAvailable : manifest.uniqueEventsWithAbstracts) : 0;
  const coverage = indexedCount ? Math.round(abstractCount / indexedCount * 100) : 0;
  const date = manifest?.updatedAt ? new Date(manifest.updatedAt) : null;
  const dateLabel = date && !Number.isNaN(date.getTime()) ? date.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-GB', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }) : t('未提供', 'Not provided');
  const chooseCategory = (category: string, topic = '') => { update({ category, topic, page: 1 }); if (category) setExpandedCategories(previous => new Set([...previous, category])); setDrawer(false); };
  const clearFilters = () => { setQuery(''); update({ q: '', category: '', topic: '', saved: false, abstract: false, classification: '', page: 1 }); };
  const changePage = (next: number) => { update({ page: next }); resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const exportResults = (format: 'json' | 'csv') => {
    if (format === 'json') download(JSON.stringify({ exportedAt: new Date().toISOString(), source: REPOSITORY, count: filtered.length, papers: filtered }, null, 2), 'neurips-2026-papers.json', 'application/json;charset=utf-8');
    else {
      const keys: (keyof Paper)[] = ['id', 'sourceEventId', 'duplicateOf', 'title', 'authors', 'abstract', 'abstractSource', 'category', 'topic', 'topicSource', 'officialTopic', 'keywords', 'paperUrl', 'pdfUrl', 'pdfSource', 'pdfVerified', 'posterUrl', 'decision'];
      download('\ufeff' + [keys.map(csvCell).join(','), ...filtered.map(paper => keys.map(key => csvCell(paper[key])).join(','))].join('\r\n'), 'neurips-2026-papers.csv', 'text/csv;charset=utf-8');
    }
    setToast(t(`已导出 ${number(filtered.length)} 篇论文`, `Exported ${number(filtered.length)} papers`));
  };
  const paperActions = (paper: Paper, withText = false) => <div className={`paper-actions ${withText ? 'with-text' : ''}`}>
    {safeUrl(paper.paperUrl || paper.posterUrl) && <a href={safeUrl(paper.paperUrl || paper.posterUrl)} target="_blank" rel="noreferrer" title={t('论文原始来源 / OpenReview', 'Original paper source / OpenReview')}><ArrowUpRight size={15} /><span>{t('来源', 'Source')}</span></a>}
    {safeUrl(paper.pdfUrl) && <a href={safeUrl(paper.pdfUrl)} target="_blank" rel="noreferrer" title={paper.pdfSource === 'derived-openreview' ? t('OpenReview PDF 地址（推导链接，未验证可访问性）', 'Derived OpenReview PDF URL; availability unverified') : t('打开 PDF（未验证可访问性）', 'Open PDF; availability unverified')}><FileText size={15} /><span>PDF</span></a>}
    {withText && safeUrl(paper.posterUrl) && <a href={safeUrl(paper.posterUrl)} target="_blank" rel="noreferrer"><ExternalLink size={15} /><span>{t('海报', 'Poster')}</span></a>}
    <IconButton label={t('复制 BibTeX', 'Copy BibTeX')} onClick={() => void copy(bibtex(paper))}><Copy size={16} /></IconButton>
    <IconButton label={t('复制论文分享链接', 'Copy paper link')} onClick={() => share(paper)}><Share2 size={16} /></IconButton>
    <IconButton label={bookmarks.has(paper.id) ? t('取消收藏', 'Remove bookmark') : t('收藏论文', 'Bookmark paper')} active={bookmarks.has(paper.id)} onClick={() => toggleBookmark(paper.id)}><Bookmark size={17} fill={bookmarks.has(paper.id) ? 'currentColor' : 'none'} /></IconButton>
  </div>;
  const navigation = <>
    <div className="sidebar-label">{t('研究目录', 'RESEARCH INDEX')}<Layers3 size={14} /></div>
    <button className={`nav-entry all ${!state.category && !state.saved ? 'selected' : ''}`} onClick={() => { update({ category: '', topic: '', saved: false, page: 1 }); setDrawer(false); }}><span><BookOpen size={17} />{t('全部论文', 'All papers')}</span><span className="count">{manifest ? number(indexedCount) : '—'}</span></button>
    <button className={`nav-entry ${state.saved ? 'selected' : ''}`} onClick={() => { update({ saved: !state.saved, page: 1 }); setDrawer(false); }}><span><Bookmark size={17} />{t('我的收藏', 'Bookmarks')}</span><span className="count">{number(bookmarks.size)}</span></button>
    <div className="sidebar-rule" />
    <div className="sidebar-label">{t('研究领域', 'RESEARCH AREAS')}<span>{categories.length || '—'}</span></div>
    <nav aria-label={t('研究领域与主题', 'Research categories and topics')} className="topic-nav">
      {categories.map(category => {
        const expanded = expandedCategories.has(category.name);
        return <div key={category.id || category.name} className="category-group"><div className={`category-line ${state.category === category.name && !state.topic ? 'selected' : ''}`}><button className="category-select" onClick={() => chooseCategory(category.name)}><span>{nameOf(category)}</span><span className="count">{number(category.count)}</span></button><button className="expand-category" aria-label={t(`展开 ${nameOf(category)}`, `Expand ${nameOf(category)}`)} aria-expanded={expanded} onClick={() => setExpandedCategories(previous => { const next = new Set(previous); if (next.has(category.name)) next.delete(category.name); else next.add(category.name); return next; })}>{expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</button></div>{expanded && <div className="subtopics">{category.topics.map(topic => <button key={topic.id || topic.name} className={state.category === category.name && state.topic === topic.name ? 'selected' : ''} onClick={() => chooseCategory(category.name, topic.name)}><span>{nameOf(topic)}</span><span className="count">{number(topic.count)}</span></button>)}</div>}</div>;
      })}
    </nav>
    <div className="sidebar-bottom"><div className="source-mark"><span className="status-dot" />{t('公开研究数据', 'Public research data')}</div><button onClick={() => { setDrawer(false); setMethodology(true); }}><CircleHelp size={15} />{t('数据来源与分类方法', 'Sources & methodology')}</button><a href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={15} />GitHub<ArrowUpRight size={13} /></a></div>
  </>;

  return <div className="app-shell">
    <a className="skip-link" href="#main">{t('跳至论文列表', 'Skip to papers')}</a>
    <header className="topbar"><div className="topbar-brand"><IconButton label={t('打开研究目录', 'Open research index')} className="mobile-menu" onClick={() => setDrawer(true)}><Menu size={21} /></IconButton><a href={import.meta.env.BASE_URL} aria-label="NeurIPS 2026"><span className="brand-symbol">N<span /></span><span className="brand-title">NeurIPS <strong>2026</strong></span></a><span className="topbar-divider" /><span className="product-label">{t('研究论文探索', 'Research Explorer')}</span></div><div className="topbar-actions"><button className="language-button" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} title={t('Switch to English', '切换为中文')}><Globe2 size={16} /><span>{lang === 'zh' ? 'EN' : '中文'}</span></button><a className="github-button" href={REPOSITORY} target="_blank" rel="noreferrer" title={t('GitHub 数据与源码', 'GitHub data & source')} aria-label="GitHub"><Github size={20} /></a></div></header>
    <aside className="sidebar">{navigation}</aside>
    <main id="main" className="main-content">
      <section className="page-heading"><div><div className="eyebrow"><span className="status-dot" />{t('会议论文索引', 'CONFERENCE PAPER INDEX')}</div><h1>NeurIPS 2026</h1><p>{t('神经信息处理系统大会', 'Conference on Neural Information Processing Systems')}<span className="heading-separator">/</span>{t('论文与研究主题', 'Papers & research topics')}</p></div><button className="quiet-button source-button" onClick={() => setMethodology(true)}><CircleHelp size={16} />{t('关于数据', 'About the data')}<ArrowUpRight size={14} /></button></section>
      {loading ? <div className="loading-state" role="status"><LoaderCircle className="spin" size={24} /><h2>{t('正在加载论文索引', 'Loading paper index')}</h2><p>{t('正在获取公开论文、研究主题与数据快照。', 'Fetching papers, research topics, and the data snapshot.')}</p></div> : error ? <div className="error-state" role="alert"><h2>{t('论文数据加载失败', 'Could not load paper data')}</h2><p>{t('请检查网络连接，或稍后重试。', 'Check your connection and try again.')}</p><code>{error}</code><button className="primary-button" onClick={() => setAttempt(n => n + 1)}>{t('重新加载', 'Retry')}</button></div> : <>
        <section className="stats-band" aria-label={t('数据概况', 'Dataset overview')}><div className="stat"><span>{t(state.duplicates ? '源记录数' : '去重条目 · 官方 ID', state.duplicates ? 'Source records' : 'Distinct official IDs')}</span><strong>{number(indexedCount)}<small>{t('条', 'entries')}</small></strong></div><div className="stat"><span>{t('公开摘要', 'Available abstracts')}</span><strong>{number(abstractCount)}<small className="coverage">{coverage}%</small></strong></div><div className="stat"><span>{t('研究主题', 'Research topics')}</span><strong>{number(categories.reduce((sum, category) => sum + category.topics.length, 0))}<small>{t('个主题', 'topics')}</small></strong></div><div className="stat updated"><span>{t('数据更新 · UTC', 'Updated · UTC')}</span><strong>{dateLabel}</strong><span className="snapshot-label">{t('公开来源快照', 'Public-source snapshot')}</span></div></section>
        {manifest && manifest.repeatedPosterRows > 0 && <div className="data-notice">{t(`官网快照含 ${number(manifest.totalPapers)} 条源记录、${number(manifest.uniqueOfficialEventIds)} 个不同官方 ID，重复记录 ${number(manifest.repeatedPosterRows)} 条。默认去重浏览；摘要仅保留已取得的公开原文，PDF 链接未逐个验证。`, `The source snapshot contains ${number(manifest.totalPapers)} records and ${number(manifest.uniqueOfficialEventIds)} distinct official IDs (${number(manifest.repeatedPosterRows)} repeats). Browsing is deduplicated by default. Abstracts are original public text; PDF links are not individually verified.`)}</div>}
        {manifest && manifest.expectedCount > manifest.totalPapers && <div className="data-notice">{t(`当前快照收录 ${number(manifest.totalPapers)} / ${number(manifest.expectedCount)} 篇预期论文；以公开可用数据为准。`, `This snapshot includes ${number(manifest.totalPapers)} of ${number(manifest.expectedCount)} expected papers; availability follows public sources.`)}</div>}
        <section className="distribution"><button className="section-toggle" onClick={() => setChartOpen(!chartOpen)} aria-expanded={chartOpen}><span><span className="section-index">01</span>{t('研究领域分布', 'Research area distribution')}<small>{t(state.duplicates ? '全部源记录' : '官方 ID 去重', state.duplicates ? 'ALL SOURCE RECORDS' : 'DISTINCT OFFICIAL IDs')}</small></span>{chartOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</button>{chartOpen && <div className="distribution-grid">{[...categories].sort((a, b) => b.count - a.count).map((category, index) => <button key={category.name} className={`distribution-item ${state.category === category.name ? 'chosen' : ''}`} onClick={() => chooseCategory(category.name)} title={`${nameOf(category)} · ${number(category.count)}`}><span className="distribution-name"><span className="chart-index">{String(index + 1).padStart(2, '0')}</span><span>{nameOf(category)}</span><strong>{number(category.count)}</strong></span><span className="bar-track"><span className={index % 4 === 3 ? 'coral-bar' : ''} style={{ width: `${Math.max(1, category.count / Math.max(...categories.map(c => c.count), 1) * 100)}%` }} /></span></button>)}</div>}</section>
        <section className="research-results" ref={resultsRef} aria-label={t('论文浏览', 'Paper browser')}>
          <div className="results-heading"><h2><span className="section-index">02</span>{state.saved ? t('我的收藏', 'Your bookmarks') : state.topic ? topicLabel(state.topic) : state.category ? categoryLabel(state.category) : t('全部论文', 'All papers')}</h2><div className="export-controls"><span>{t('导出结果', 'Export results')}</span><button className="quiet-button" onClick={() => exportResults('csv')} disabled={!filtered.length} title={t('下载当前筛选结果为 CSV', 'Download filtered results as CSV')}><ArrowDownToLine size={15} />CSV</button><button className="quiet-button" onClick={() => exportResults('json')} disabled={!filtered.length} title={t('下载当前筛选结果为 JSON', 'Download filtered results as JSON')}><FileJson size={15} />JSON</button></div></div>
          <div className="search-toolbar"><div className="search-field"><Search size={19} /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={t('搜索标题、作者、摘要、关键词…', 'Search titles, authors, abstracts, keywords…')} aria-label={t('搜索论文全文', 'Search paper text')} />{query && <IconButton label={t('清空搜索', 'Clear search')} onClick={() => { setQuery(''); update({ q: '', page: 1 }); }}><X size={16} /></IconButton>}</div><button className={`filter-button ${filtersOpen || state.abstract || state.classification ? 'active' : ''}`} onClick={() => setFiltersOpen(!filtersOpen)} aria-expanded={filtersOpen}><SlidersHorizontal size={17} /><span>{t('筛选', 'Filters')}</span>{(state.abstract || state.classification) && <span className="filter-dot" />}</button><label className="sort-control"><span className="sr-only">{t('排序', 'Sort by')}</span><select value={state.sort} onChange={event => update({ sort: event.target.value, page: 1 })}><option value="default">{t('默认顺序', 'Default order')}</option><option value="title">{t('标题 A–Z', 'Title A–Z')}</option><option value="author">{t('第一作者 A–Z', 'First author A–Z')}</option><option value="topic">{t('研究主题', 'Research topic')}</option><option value="abstract">{t('有摘要优先', 'Abstracts first')}</option></select><ChevronDown size={14} /></label></div>
          {filtersOpen && <div className="filter-panel"><label className="checkbox-label"><input type="checkbox" checked={state.abstract} onChange={event => update({ abstract: event.target.checked, page: 1 })} />{t('仅显示有公开摘要的论文', 'Only papers with public abstracts')}</label><label className="checkbox-label"><input type="checkbox" checked={state.duplicates} onChange={event => update({ duplicates: event.target.checked, page: 1 })} />{t('包含重复源记录', 'Include repeated source records')}</label><label className="classification-label">{t('分类依据', 'Classification')}<select value={state.classification} onChange={event => update({ classification: event.target.value, page: 1 })}><option value="">{t('全部分类', 'All classifications')}</option><option value="official">{t('官方分类', 'Official')}</option><option value="inferred">{t('推断分类', 'Inferred')}</option></select></label></div>}
          <div className="result-summary"><p aria-live="polite"><strong>{number(filtered.length)}</strong> {t('条论文记录', 'paper records')}{filtered.length > 0 && <span> · {number((page - 1) * PAGE_SIZE + 1)}–{number(Math.min(page * PAGE_SIZE, filtered.length))}</span>}</p><div className="active-filters">{state.category && <button onClick={() => update({ category: '', topic: '', page: 1 })}>{categoryLabel(state.category)}<X size={12} /></button>}{state.topic && <button onClick={() => update({ topic: '', page: 1 })}>{topicLabel(state.topic)}<X size={12} /></button>}{state.saved && <button onClick={() => update({ saved: false, page: 1 })}>{t('已收藏', 'Saved')}<X size={12} /></button>}{(state.q || state.category || state.topic || state.saved || state.abstract || state.classification) && <button className="clear-all" onClick={clearFilters}>{t('重置筛选', 'Reset filters')}</button>}</div></div>
          {storageWarning && <p className="data-notice" role="status">{t('浏览器阻止了本地存储，本次收藏仅在当前页面有效。', 'Local storage is blocked. Bookmarks will last only for this session.')}</p>}
          {filtered.length === 0 ? <div className="empty-state"><Search size={27} /><h3>{state.saved ? t('当前没有匹配的收藏', 'No matching bookmarks') : t('没有匹配的论文', 'No matching papers')}</h3><p>{t('当前筛选条件下暂无结果。', 'No papers match the current filters.')}</p><button className="quiet-button" onClick={clearFilters}><Filter size={15} />{t('重置筛选', 'Reset filters')}</button></div> : <div className="paper-list">{visible.map((paper, index) => {
            const expanded = expandedAbstracts.has(paper.id);
            return <article className="paper-row" key={paper.id}><div className="paper-number">{String((page - 1) * PAGE_SIZE + index + 1).padStart(3, '0')}</div><div className="paper-body"><div className="paper-meta"><button className="topic-badge" onClick={() => chooseCategory(paper.category, paper.topic)} title={paper.topic}>{topicLabel(paper.topic, paper.category)}</button><span className={`classification ${paper.topicSource === 'inferred' ? 'inferred' : ''}`} title={paper.topicSource === 'official' ? t('来自原始公开来源的官方分类', 'Classification supplied by the original source') : t('根据论文文本推断，非官方会议分类', 'Inferred from paper text; not an official conference classification')}>{paper.topicSource === 'official' ? t('官方分类', 'Official') : t('推断分类', 'Inferred')}</span>{paper.duplicateOf && <span className="missing-marker">{t(`重复记录 · ${paper.sourceEventId}`, `Repeated record · ${paper.sourceEventId}`)}</span>}{!hasAbstract(paper) && <span className="missing-marker">{t('摘要未公开', 'No public abstract')}</span>}</div><h3><button onClick={() => update({ paper: paper.id })}>{paper.title}</button></h3><p className="authors" title={paper.authors.join(', ')}>{paper.authors.join(', ') || t('作者信息暂缺', 'Author information unavailable')}</p><div className="abstract-preview">{hasAbstract(paper) ? <><p className={expanded ? 'abstract-text expanded' : 'abstract-text'} lang="en">{paper.abstract}</p><button className="abstract-toggle" aria-expanded={expanded} onClick={() => setExpandedAbstracts(previous => { const next = new Set(previous); if (next.has(paper.id)) next.delete(paper.id); else next.add(paper.id); return next; })}>{expanded ? t('收起摘要', 'Less') : t('完整摘要', 'Full abstract')}<ChevronDown size={13} className={expanded ? 'rotated' : ''} /></button></> : <p className="missing-abstract">{t('摘要暂未公开', 'Abstract not publicly available')}</p>}</div><div className="paper-row-footer"><span className="category-caption">{categoryLabel(paper.category)}</span>{paperActions(paper)}</div></div></article>;
          })}</div>}
          {filtered.length > 0 && <nav className="pagination" aria-label={t('论文分页', 'Paper pagination')}><span>{t(`每页 ${PAGE_SIZE} 篇`, `${PAGE_SIZE} per page`)}</span><div><IconButton label={t('第一页', 'First page')} className={page === 1 ? 'unavailable' : ''} onClick={() => { if (page > 1) changePage(1); }}><ChevronsLeft size={17} /></IconButton><button className="page-step" disabled={page === 1} onClick={() => changePage(page - 1)} aria-label={t('上一页', 'Previous page')}><ArrowLeft size={16} /></button>{Array.from(new Set([1, ...Array.from({ length: 5 }, (_, i) => page + i - 2).filter(n => n > 0 && n <= totalPages), totalPages])).sort((a, b) => a - b).map((n, i, values) => <span className="page-number-group" key={n}>{i > 0 && n - values[i - 1] > 1 && <span className="page-ellipsis">…</span>}<button className={`page-number ${n === page ? 'current' : ''}`} onClick={() => changePage(n)} aria-label={t(`第 ${n} 页`, `Page ${n}`)} aria-current={n === page ? 'page' : undefined}>{n}</button></span>)}<button className="page-step" disabled={page === totalPages} onClick={() => changePage(page + 1)} aria-label={t('下一页', 'Next page')}><ArrowRight size={16} /></button><IconButton label={t('最后一页', 'Last page')} className={page === totalPages ? 'unavailable' : ''} onClick={() => { if (page < totalPages) changePage(totalPages); }}><ChevronsRight size={17} /></IconButton></div><span>{t(`共 ${number(totalPages)} 页`, `${number(totalPages)} pages`)}</span></nav>}
        </section>
      </>}
      <footer className="footer"><div><strong>NeurIPS 2026</strong><span>{t('独立研究索引 · 非会议官方网站', 'Independent research index · Not the official conference website')}</span></div><div><button onClick={() => setMethodology(true)}>{t('来源与方法', 'Sources & methodology')}</button><a href="https://neurips.cc/Conferences/2026" target="_blank" rel="noreferrer">{t('会议官网', 'Conference site')}<ArrowUpRight size={12} /></a><a href={REPOSITORY} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={12} /></a></div></footer>
    </main>
    {drawer && <Modal title={t('研究目录', 'Research index')} onClose={closeDrawer}><div className="drawer-navigation">{navigation}</div></Modal>}
    {methodology && <Modal title={t('数据来源与分类方法', 'Sources & methodology')} onClose={closeMethodology}><div className="methodology-content"><div className="modal-kicker">NeurIPS 2026 / {t('数据说明', 'DATA NOTES')}</div><h2>{t('公开来源，可追溯分类', 'Public sources. Traceable classifications.')}</h2><p>{t('本项目是独立论文索引，与 NeurIPS 官方无隶属关系。论文标题、作者、摘要和链接来自公开来源；摘要保留原文，不使用生成文本补全缺失内容。', 'This is an independent index, unaffiliated with NeurIPS. Titles, authors, abstracts, and links come from public sources. Abstracts are preserved in their original form; missing abstracts are not filled with generated text.')}</p><h3>{t('重复记录与 PDF', 'Repeated records & PDFs')}</h3><p>{t('原始数据完整保留官网源记录；同一官方 ID 的重复记录带有 duplicateOf 标记，默认浏览仅显示首次出现的条目。不同官方 ID 可能仍对应同一论文，去重 ID 数不等同于经过人工核实的独立论文数。PDF 链接由官方 OpenReview 论文 ID 推导，未逐个下载或验证；本网站不托管论文 PDF。', 'The complete export retains source records. Repeated official IDs carry a duplicateOf field and are hidden by default. Different official IDs may still refer to the same paper; distinct IDs are not a manually verified count of unique research papers. OpenReview PDF URLs are derived from official paper IDs, not individually downloaded or verified. This site does not host PDFs.')}</p><h3>{t('分类口径', 'Classification')}</h3><p>{t('“官方分类”指原始来源提供的研究主题；“推断分类”根据可用标题、摘要或关键词映射至研究目录，不代表会议官方分类。中文主题名称仅用于索引展示，原始主题保留英文名称。', '“Official” indicates a research topic supplied by the original source. “Inferred” indicates a mapping from available titles, abstracts, or keywords into the research taxonomy, not an official conference classification. Chinese topic names are display translations; original topic names remain in English.')}</p>{manifest && <dl className="methodology-stats"><div><dt>{t('快照更新时间（UTC）', 'Snapshot updated (UTC)')}</dt><dd>{dateLabel}</dd></div><div><dt>{t('源记录数 / 预期源记录', 'Source records / expected records')}</dt><dd>{number(manifest.totalPapers)} / {typeof manifest.expectedCount === 'number' ? number(manifest.expectedCount) : '—'}</dd></div><div><dt>{t('不同官方 ID / 重复源记录', 'Distinct official IDs / repeats')}</dt><dd>{number(manifest.uniqueOfficialEventIds)} / {number(manifest.repeatedPosterRows)}</dd></div><div><dt>{t('去重后公开摘要 / 暂缺', 'Distinct IDs: public / missing abstracts')}</dt><dd>{number(manifest.uniqueEventsWithAbstracts)} / {number(manifest.uniqueEventsMissingAbstracts)}</dd></div><div><dt>{t('源记录公开摘要 / 暂缺', 'Source records: public / missing abstracts')}</dt><dd>{number(manifest.abstractsAvailable)} / {number(manifest.abstractsMissing)}</dd></div><div><dt>{t('官方 / 推断分类', 'Official / inferred topics')}</dt><dd>{number(manifest.officialTopicCount)} / {number(manifest.inferredTopicCount)}</dd></div><div><dt>{t('PDF 地址（未验证）', 'PDF URLs (unverified)')}</dt><dd>{number(manifest.pdfLinksAvailable)}</dd></div></dl>}<p>{t('数据统计对应当前快照，公开信息可能随后更新。来源内容与链接的可用性由原站决定；未公开摘要不代表论文没有摘要。', 'Counts describe this snapshot; public information may change. Source content and link availability are controlled by the original sites. An unavailable abstract does not mean a paper has no abstract.')}</p><h3>{t('全量快照下载', 'Complete snapshot downloads')}</h3><ul className="source-links"><li><a href={`${import.meta.env.BASE_URL}data/papers.json`} download>JSON · {number(manifest?.totalPapers || 0)} {t('条源记录', 'source records')}<ArrowDownToLine size={14} /></a></li><li><a href={`${import.meta.env.BASE_URL}data/papers.csv`} download>CSV<ArrowDownToLine size={14} /></a></li><li><a href={`${REPOSITORY}/tree/main/public/data/topics`} target="_blank" rel="noreferrer">{t('按主题整理的完整摘要 · Markdown', 'Topic-organized full abstracts · Markdown')}<ArrowUpRight size={14} /></a></li><li><a href={`${import.meta.env.BASE_URL}data/manifest.json`} download>{t('数据清单、校验值与来源', 'Manifest, checksums & provenance')}<ArrowDownToLine size={14} /></a></li></ul><h3>{t('原始来源', 'Original sources')}</h3><ul className="source-links">{[...new Set([...(manifest?.sourceUrls || []), 'https://neurips.cc/Conferences/2026', REPOSITORY])].filter(url => safeUrl(url)).map(url => <li key={url}><a href={safeUrl(url)} target="_blank" rel="noreferrer">{url}<ArrowUpRight size={14} /></a></li>)}</ul><p className="methodology-footnote">{t('导出文件包含当前筛选结果。CSV 对可能被表格软件识别为公式的单元格添加前导单引号；JSON 保留原始文本。', 'Exports contain the current filtered results. CSV prefixes potentially executable spreadsheet formulas with an apostrophe; JSON retains original text.')}</p></div></Modal>}
    {state.paper && !loading && dataset && <Modal title={t('论文详情', 'Paper details')} onClose={closePaper} wide>{selectedPaper ? <div className="paper-detail"><div className="paper-meta"><button className="topic-badge" onClick={() => { chooseCategory(selectedPaper.category, selectedPaper.topic); closePaper(); }}>{topicLabel(selectedPaper.topic, selectedPaper.category)}</button><span className={`classification ${selectedPaper.topicSource === 'inferred' ? 'inferred' : ''}`}>{selectedPaper.topicSource === 'official' ? t('官方分类', 'Official') : t('推断分类', 'Inferred')}</span></div><h2>{selectedPaper.title}</h2><p className="detail-authors">{selectedPaper.authors.join(', ') || t('作者信息暂缺', 'Author information unavailable')}</p>{paperActions(selectedPaper, true)}<div className="detail-divider" /><h3>{t('原文摘要', 'Original abstract')}</h3><p className="detail-abstract" lang="en">{hasAbstract(selectedPaper) ? selectedPaper.abstract : t('摘要暂未公开', 'Abstract not publicly available')}</p>{hasAbstract(selectedPaper) && selectedPaper.abstractSource && <div className="abstract-source">{t('摘要来源', 'Abstract source')}:{' '}{safeUrl(selectedPaper.abstractSource) ? <a href={safeUrl(selectedPaper.abstractSource)} target="_blank" rel="noreferrer">{selectedPaper.abstractSource}<ArrowUpRight size={12} /></a> : selectedPaper.abstractSource}</div>}{selectedPaper.keywords?.length > 0 && <div className="keyword-list">{selectedPaper.keywords.map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}</div>}<dl className="paper-detail-meta"><div><dt>{t('研究领域', 'Research area')}</dt><dd>{categoryLabel(selectedPaper.category)}</dd></div><div><dt>{t('原始主题', 'Original topic')}</dt><dd>{selectedPaper.officialTopic || t('未提供；当前为推断分类', 'Not supplied; current classification is inferred')}</dd></div>{selectedPaper.decision && <div><dt>{t('接收类型', 'Decision')}</dt><dd>{selectedPaper.decision}</dd></div>}<div><dt>{t('论文 ID', 'Paper ID')}</dt><dd>{selectedPaper.id}</dd></div></dl><a className="detail-github" href={REPOSITORY} target="_blank" rel="noreferrer"><Github size={15} />{t('项目数据与源码', 'Project data & source')}<ArrowUpRight size={13} /></a></div> : <div className="empty-state"><h3>{t('未找到该论文', 'Paper not found')}</h3><p>{t('当前数据快照中不存在此论文 ID。', 'This paper ID is not present in the current snapshot.')}</p><button className="quiet-button" onClick={closePaper}>{t('返回论文列表', 'Return to papers')}</button></div>}</Modal>}
    <div className={`toast ${toast ? 'visible' : ''}`} role="status" aria-live="polite">{toast && <><Check size={16} />{toast}</>}</div>
  </div>;
}
