export type SocialKind = 'email' | 'github' | 'linkedin' | 'leetcode';

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  cgpa: string;
  degree: string;
  institution: string;
  resumeHref: string;
  githubHref: string;
  linkedinHref: string;
  leetcodeHref: string;
}

export const profile: Profile = {
  name: 'Soumyadip Maity',
  shortName: 'SM',
  role: 'AI/ML Engineer & Data Scientist',
  headline: 'Engineering production ML pipelines, multilingual speech AI, and privacy-first RAG systems.',
  summary:
    'B.Tech IT undergraduate (8.79 CGPA) specializing in Data Science, Machine Learning, and AI Engineering. I build leakage-free predictive models, guardrail-enforced NLP systems, and low-latency FastAPI microservices.',
  location: 'Kolkata, West Bengal, India',
  email: 'maitysoumyadip108@gmail.com',
  phone: '+91 7797923011',
  cgpa: '8.79 / 10.0',
  degree: 'B.Tech in Information Technology',
  institution: "St. Thomas' College of Engineering & Technology (MAKAUT)",
  resumeHref: '/Soumyadip_Maity_CV.pdf',
  githubHref: 'https://github.com/Soumya9679',
  linkedinHref: 'https://linkedin.com/in/soumyadip-maity-996686353',
  leetcodeHref: 'https://leetcode.com/u/Soumya9679/',
};

export const navItems = [
  { label: 'Overview', href: '#home' },
  { label: 'Systems', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Experience', href: '#leadership' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    username: profile.email,
    kind: 'email' as SocialKind,
  },
  {
    label: 'GitHub',
    href: profile.githubHref,
    username: '@Soumya9679',
    kind: 'github' as SocialKind,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedinHref,
    username: 'soumyadip-maity-996686353',
    kind: 'linkedin' as SocialKind,
  },
  {
    label: 'LeetCode',
    href: profile.leetcodeHref,
    username: '@Soumya9679',
    kind: 'leetcode' as SocialKind,
  },
] as const;

export const heroMetrics = [
  {
    value: '89.1%',
    label: 'Holdout Accuracy',
    detail: '5-fold GroupKFold (88.24% CV)',
  },
  {
    value: '96.23%',
    label: 'Voice Intent Acc',
    detail: '0.47 Cosine Safety Gate',
  },
  {
    value: '8.79',
    label: 'B.Tech IT CGPA',
    detail: 'STCET (MAKAUT) • 2024–2028',
  },
  {
    value: '3× Lead',
    label: 'Hackathon Finalist',
    detail: 'SIH 25/26 • GDGoC • SREY 2k26',
  },
] as const;

export const engineeringPrinciples = [
  {
    title: 'Zero Data Leakage Validation',
    detail:
      'Enforce subject-grouped splits (5-fold GroupKFold) and strict train-only prototype fitting so offline accuracy reflects true unseen generalization.',
  },
  {
    title: 'Guardrail-First AI Inference',
    detail:
      'Every generative or speech model sits behind deterministic boundaries — cosine rejection thresholds (0.47), allow-listed action registries, and Pydantic contracts.',
  },
  {
    title: 'Low-Latency FastAPI Serving',
    detail:
      'Decouple model weights, feature builders, and REST/streaming endpoints into clean, containerized Python microservices ready for full-stack integration.',
  },
  {
    title: 'Multi-Dimensional Evaluation',
    detail:
      'Benchmark NLP outputs beyond surface overlap using lexical (ROUGE) and neural semantic metrics (BERTScore, BLEURT) in reproducible notebooks.',
  },
] as const;

export const capabilities = [
  {
    title: 'Predictive ML & Temporal Modeling',
    description:
      'Domain feature engineering over behavioral telemetry, Random Forest & Isolation Forest modeling, and GroupKFold subject-safe cross-validation.',
    metric: '89.1% Holdout • 0.109 MAE',
    tag: 'scikit-learn / FastAPI',
  },
  {
    title: 'Speech & Multilingual NLP',
    description:
      'End-to-end ASR pipelines (SraVaani) paired with multilingual Sentence Transformer prototypes, cosine similarity gating, and strict intent allow-lists.',
    metric: '15 Intents • 0.47 Gate',
    tag: 'SraVaani / MiniLM',
  },
  {
    title: 'Privacy-First RAG & Agents',
    description:
      'Local & serverless RAG pipelines combining semantic chunking, FAISS/Pinecone vector indexing, LangChain LCEL, and Ollama Qwen2.5 or Gemini inference.',
    metric: 'Streaming FAISS + LLM',
    tag: 'LangChain / Ollama',
  },
  {
    title: 'Evaluation & Production APIs',
    description:
      'Rigorous model fidelity evaluation with ROUGE, BERTScore, and BLEURT, shipped via typed FastAPI microservices, Docker, and Next.js frontends.',
    metric: 'ROUGE / BERTScore / BLEURT',
    tag: 'Docker / Next.js / Render',
  },
] as const;

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: 'emerald' | 'cyan' | 'amber';
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Databases',
    subtitle: 'Core systems & query languages',
    accent: 'emerald',
    items: ['Python', 'C', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'ml',
    title: 'Data Science & ML',
    subtitle: 'Modeling, telemetry & validation',
    accent: 'cyan',
    items: [
      'NumPy',
      'Pandas',
      'scikit-learn',
      'Feature Engineering',
      'Exploratory Data Analysis (EDA)',
      'Random Forest',
      'GroupKFold',
      'Isolation Forest',
    ],
  },
  {
    id: 'genai',
    title: 'NLP & Generative AI',
    subtitle: 'Embeddings, retrieval & LLMs',
    accent: 'emerald',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
      'FAISS',
      'Pinecone',
      'Sentence Transformers',
      'Ollama (Qwen2.5)',
      'Text Summarization',
      'SraVaani ASR',
    ],
  },
  {
    id: 'backend',
    title: 'Backend, APIs & DevOps',
    subtitle: 'Microservices & full-stack shipping',
    accent: 'cyan',
    items: [
      'FastAPI',
      'REST APIs',
      'Pydantic',
      'Model Inference Endpoints',
      'Next.js 15 / 16',
      'React 19',
      'Docker',
      'Git & GitHub',
      'Render & Vercel',
      'Google Colab',
    ],
  },
  {
    id: 'guardrails',
    title: 'Evaluation & Guardrails',
    subtitle: 'Fidelity metrics & safety gates',
    accent: 'amber',
    items: [
      'ROUGE',
      'BERTScore',
      'BLEURT',
      'Cosine Similarity Thresholding',
      'Allow-List Intent Guardrails',
      'Subject-Leakage Prevention',
    ],
  },
];

export type ProjectCategory =
  | 'All'
  | 'ML & FastAPI'
  | 'NLP & Speech AI'
  | 'RAG & GenAI'
  | 'Full-Stack AI';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectArchitectureNode {
  stage: string;
  tech: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  tier: 'flagship' | 'product';
  year: string;
  context: string;
  summary: string;
  problem: string;
  highlights: string[];
  metrics: ProjectMetric[];
  architecture: ProjectArchitectureNode[];
  tags: string[];
  githubHref: string;
  liveHref?: string;
  image?: string;
  visualType: 'difficulty' | 'voice' | 'rag' | 'summarizer' | 'finance' | 'placement' | 'screenshot';
  endpoint?: string;
}

export const projects: Project[] = [
  {
    id: 'adaptive-difficulty',
    title: 'Adaptive Cognitive Difficulty Predictor',
    subtitle: 'Real-Time Behavioral ML Microservice (v2.0)',
    category: 'ML & FastAPI',
    tier: 'flagship',
    year: '2026',
    context: 'Smart India Hackathon (SIH26003) • Team HexaCore',
    summary:
      'Random Forest inference microservice that dynamically calibrates cognitive game difficulty (levels 1–5) in real time from multi-session player behavioral telemetry.',
    problem:
      'Static difficulty curves frustrate impaired users or bore high performers, while naive random splits leak subject-specific patterns across train and test folds.',
    highlights: [
      'Engineered 12 temporal behavioral features spanning accuracy, response latency, hint usage, rolling performance trends, and consecutive success streaks.',
      'Achieved 89.1% patient-level holdout accuracy, 0.109 MAE, and 88.24% mean accuracy across 5-fold GroupKFold cross-validation, eliminating subject-level data leakage.',
      'Exposed predictions with calibrated adaptive thresholds (decrease < 0.549, increase ≥ 0.632) via a low-latency FastAPI endpoint clamped safely to [1, 5].',
    ],
    metrics: [
      { label: 'Holdout Acc', value: '89.1%' },
      { label: '5-Fold Group CV', value: '88.24%' },
      { label: 'MAE', value: '0.109' },
      { label: 'Target Scale', value: '1 – 5' },
    ],
    architecture: [
      { stage: '01 Telemetry Ingest', tech: 'Pydantic Schemas', detail: '12 session & rolling features validated on POST /predict' },
      { stage: '02 Temporal Features', tech: 'Pandas / NumPy', detail: 'Recent accuracy, latency trends & consecutive streaks' },
      { stage: '03 Inference Engine', tech: 'Random Forest v2.0', detail: 'GroupKFold-validated model with confidence scoring' },
      { stage: '04 Safe Output', tech: 'FastAPI Microservice', detail: 'Difficulty clamped [1, 5] + adaptive band thresholds' },
    ],
    tags: ['Python', 'Random Forest', 'GroupKFold', 'scikit-learn', 'FastAPI', 'Pydantic'],
    githubHref: 'https://github.com/Soumya9679/adaptive-difficulty-predictor',
    visualType: 'difficulty',
    endpoint: 'POST /predict',
  },
  {
    id: 'voice-assistant',
    title: 'Multilingual Voice Intent Classification',
    subtitle: 'ASR + Dense Embedding Routing + Allow-List Guardrails',
    category: 'NLP & Speech AI',
    tier: 'flagship',
    year: '2026',
    context: 'Smart India Hackathon (SIH26003) • Team HexaCore',
    summary:
      'End-to-end multilingual speech-to-intent-to-action pipeline combining SraVaani ASR with MiniLM semantic prototype routing and deterministic action allow-listing.',
    problem:
      'Noisy multilingual voice transcripts frequently trigger unintended UI actions when classifiers lack out-of-distribution rejection or execute raw model predictions.',
    highlights: [
      'Integrated ARTPARK-IISc/SraVaani-1.0 ASR (CUDA + Gradio) with CPU-efficient paraphrase-multilingual-MiniLM-L12-v2 semantic prototype matching.',
      'Mapped noisy multilingual utterances across 15 intents (325-sample dataset) achieving 96.23% test accuracy (95.92% val / 93.88% holdout split, 0.9556 Macro F1).',
      'Engineered a 0.47 cosine-similarity rejection threshold paired with an allow-listed action registry so out-of-scope triggers safely resolve to UNKNOWN.',
    ],
    metrics: [
      { label: 'Test Accuracy', value: '96.23%' },
      { label: 'Val Macro F1', value: '0.9556' },
      { label: 'Safety Gate', value: '≥ 0.47' },
      { label: 'Intents', value: '15' },
    ],
    architecture: [
      { stage: '01 Speech-to-Text', tech: 'SraVaani-1.0 (CUDA)', detail: 'Multilingual audio transcription via Gradio GPU space' },
      { stage: '02 Dense Embeddings', tech: 'MiniLM-L12-v2 (CPU)', detail: 'Semantic cosine matching against train-only prototypes' },
      { stage: '03 Safety Threshold', tech: 'Cosine Gate (< 0.47)', detail: 'Ambiguous or OOD utterances rejected as UNKNOWN' },
      { stage: '04 Action Registry', tech: 'FastAPI Allow-List', detail: 'Deterministic mapping to 14 safe UI actions' },
    ],
    tags: ['SraVaani ASR', 'Sentence Transformers', 'FastAPI', 'Gradio', 'Cosine Guardrails', 'NLP'],
    githubHref: 'https://github.com/Soumya9679/voice-assistant',
    visualType: 'voice',
    endpoint: 'POST /voice/process',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot — Local Enterprise Assistant',
    subtitle: 'Privacy-First FAISS Vector Search + Local Qwen2.5 LLM',
    category: 'RAG & GenAI',
    tier: 'flagship',
    year: '2026',
    context: 'Privacy-First Enterprise AI Workspace',
    summary:
      'Locally-hosted Retrieval-Augmented Generation workspace pairing FAISS semantic indexing with Ollama (Qwen2.5) inference behind a streaming FastAPI + React 19 UI.',
    problem:
      'Enterprise teams need semantic Q&A over internal documents without leaking sensitive corpora to third-party cloud LLM APIs.',
    highlights: [
      'Built an end-to-end private RAG pipeline combining recursive document chunking, dense vector embeddings, and zero-external-egress local inference.',
      'Implemented sub-second semantic retrieval across multi-document corpora using Hugging Face Sentence Transformers (all-MiniLM-L6-v2) and FAISS.',
      'Orchestrated local Qwen2.5 (1.5B) via Ollama and LangChain, serving streaming responses to a glassmorphic React 19 + Vite workspace.',
    ],
    metrics: [
      { label: 'Local LLM', value: 'Qwen2.5' },
      { label: 'Vector Store', value: 'FAISS' },
      { label: 'Embeddings', value: 'MiniLM-L6' },
      { label: 'Data Egress', value: '0%' },
    ],
    architecture: [
      { stage: '01 Ingestion', tech: 'Document Chunker', detail: 'Multi-document splitting & metadata normalization' },
      { stage: '02 Vector Index', tech: 'FAISS + MiniLM-L6-v2', detail: 'Local dense vector store persisted on disk' },
      { stage: '03 Orchestration', tech: 'LangChain + Ollama', detail: 'Local Qwen2.5 inference with retrieved context' },
      { stage: '04 Client UI', tech: 'FastAPI + React 19', detail: 'Streaming workspace with model parameter controls' },
    ],
    tags: ['LangChain', 'FAISS', 'Ollama', 'Qwen2.5', 'FastAPI', 'React 19'],
    githubHref: 'https://github.com/Soumya9679/RAG-chatbot',
    liveHref: 'https://rag-chatbot-ivory-six.vercel.app',
    image: '/images/rag-chatbot.png',
    visualType: 'screenshot',
    endpoint: 'POST /chat',
  },
  {
    id: 'text-summarizer',
    title: 'Text Summarizer — NLP & Semantic Eval',
    subtitle: 'Extractive Pipeline + Multi-Metric Evaluation Harness',
    category: 'NLP & Speech AI',
    tier: 'flagship',
    year: '2026',
    context: 'NLP Research & Evaluation Benchmark',
    summary:
      'Custom extractive text summarization pipeline benchmarked on 1,000 CNN/DailyMail articles and evaluated across lexical and neural semantic fidelity metrics.',
    problem:
      'Lexical n-gram overlap metrics like ROUGE miss paraphrased factual fidelity; evaluating summary quality requires combining lexical and learned neural judges.',
    highlights: [
      'Built custom sentence tokenization, abbreviation handling, irregular-verb/pronoun lemmatization, and Jaccard similarity scoring from scratch in Python.',
      'Benchmarked the extractive pipeline across 1,000 CNN/DailyMail news articles in a reproducible Google Colab evaluation harness.',
      'Measured summary fidelity and semantic coherence jointly using ROUGE, DistilBERT-backed BERTScore, and Google Research BLEURT-base-128.',
    ],
    metrics: [
      { label: 'Corpus', value: '1,000 Docs' },
      { label: 'Dataset', value: 'CNN/DM' },
      { label: 'Lexical', value: 'ROUGE' },
      { label: 'Neural', value: 'BERT + BLEURT' },
    ],
    architecture: [
      { stage: '01 Tokenizer', tech: 'Custom NLP Parser', detail: 'Abbreviation-aware sentence split & lemmatization' },
      { stage: '02 Scorer', tech: 'Word Freq + Jaccard', detail: 'Graph/overlap sentence salience ranking' },
      { stage: '03 Lexical Eval', tech: 'ROUGE Scorer', detail: 'N-gram recall and overlap benchmarking' },
      { stage: '04 Neural Eval', tech: 'BERTScore + BLEURT', detail: 'Contextual semantic fidelity across 1,000 samples' },
    ],
    tags: ['Python', 'NLP', 'ROUGE', 'BERTScore', 'BLEURT', 'Transformers'],
    githubHref: 'https://github.com/Soumya9679/text_summarizer',
    visualType: 'summarizer',
  },
  {
    id: 'cortex-finance',
    title: 'Cortex Finance AI',
    subtitle: 'Bank Statement Intelligence, Anomaly Detection & RAG Advisor',
    category: 'RAG & GenAI',
    tier: 'product',
    year: '2026',
    context: 'SREY 2k26 CodeFlow 36h Hackathon Finalist • Team Coffee & Code',
    summary:
      'AI-powered Indian bank statement analyzer extracting semi-structured PDF/CSV transactions, detecting anomalies via Isolation Forest, and answering spending queries via RAG.',
    problem:
      'Raw bank statements lack structured categorization, making recurring EMI/subscription leaks and unusual transaction spikes hard to spot quickly.',
    highlights: [
      'Parsed semi-structured Indian bank statements (PDF/CSV) using pdfplumber into categorized SQLite ledgers with automated Financial Health Scoring.',
      'Detected unusual spending spikes and recurring UPI/SIP obligations using Scikit-Learn Isolation Forest anomaly models.',
      'Paired Recharts visual analytics with a FAISS + Gemini RAG financial assistant behind a FastAPI backend.',
    ],
    metrics: [
      { label: 'Built In', value: '36 Hours' },
      { label: 'Anomaly', value: 'Isolation Forest' },
      { label: 'RAG Store', value: 'FAISS + Gemini' },
      { label: 'Result', value: 'Finalist' },
    ],
    architecture: [
      { stage: '01 PDF/CSV Parse', tech: 'pdfplumber + SQLite', detail: 'Extracts & normalizes Indian bank statement ledgers' },
      { stage: '02 Anomaly Engine', tech: 'Isolation Forest', detail: 'Flags unusual spikes & recurring EMI/UPI patterns' },
      { stage: '03 RAG Index', tech: 'FAISS + LangChain', detail: 'Semantic retrieval over personal transaction chunks' },
      { stage: '04 Analytics UI', tech: 'React + Recharts', detail: 'Health score cards & natural-language Q&A' },
    ],
    tags: ['FastAPI', 'Isolation Forest', 'FAISS', 'LangChain', 'Gemini API', 'React'],
    githubHref: 'https://github.com/Soumya9679/CODEFLOW2026-Neural-Nexus-Cortex-Finance',
    liveHref: 'https://codeflow-2026-neural-nexus-cortex-f.vercel.app',
    visualType: 'finance',
  },
  {
    id: 'growth-os',
    title: 'GrowthOS — AI Productivity & RAG Coach',
    subtitle: 'Serverless Pinecone RAG Coach + SM-2 Retention + DSA Sync',
    category: 'Full-Stack AI',
    tier: 'product',
    year: '2026',
    context: 'Full-Stack AI Productivity System',
    summary:
      'Personal operating system combining a serverless LangChain + Pinecone RAG coach, SuperMemo-2 spaced repetition, and live LeetCode/Codeforces/GFG progress sync.',
    problem:
      'Developers juggle fragmented note apps, coding trackers, and planners without contextual AI feedback grounded in their own study logs.',
    highlights: [
      'Engineered an AI Growth Coach using LangChain LCEL, Pinecone managed inference (llama-text-embed-v2, 384-dim), and Gemini 2.5 Flash via OpenRouter.',
      'Synced Next.js Server Actions to background Python indexing endpoints (/api/index, /api/delete) for real-time vector updates on journal edits.',
      'Integrated live competitive programming trackers (LeetCode, Codeforces, GeeksforGeeks) awarding dynamic +25 XP per solved problem.',
    ],
    metrics: [
      { label: 'Embeddings', value: '384-dim' },
      { label: 'Vector DB', value: 'Pinecone' },
      { label: 'Retention', value: 'SM-2 Algo' },
      { label: 'Sync', value: 'LC / CF / GFG' },
    ],
    architecture: [
      { stage: '01 Server Actions', tech: 'Next.js App Router', detail: 'Triggers background /api/index & /api/delete sync' },
      { stage: '02 Vector Store', tech: 'Pinecone (384-dim)', detail: 'Multi-tenant userId-filtered llama-text-embed-v2' },
      { stage: '03 RAG Coach', tech: 'LangChain LCEL', detail: 'Gemini 2.5 Flash coaching over personal logs' },
      { stage: '04 Gamification', tech: 'SM-2 + CP Sync', detail: 'Spaced repetition & +25 XP per solved problem' },
    ],
    tags: ['Next.js', 'LangChain LCEL', 'Pinecone', 'Gemini 2.5', 'SM-2', 'TypeScript'],
    githubHref: 'https://github.com/Soumya9679/GrowthOS',
    liveHref: 'https://growth-os-livid.vercel.app',
    image: '/images/growth-os.png',
    visualType: 'screenshot',
  },
  {
    id: 'pulsepy',
    title: 'PulsePy — Interactive Python Platform',
    subtitle: 'In-Browser Pyodide Runtime + Monaco IDE + Gemini Mentor',
    category: 'Full-Stack AI',
    tier: 'product',
    year: '2026',
    context: 'Production EdTech Platform (pulsepy.tech)',
    summary:
      'Full-stack Python learning platform with an in-browser Pyodide execution engine, Monaco IDE, Gemini AI mentor hints, real-time coding duels, and 15-level XP progression.',
    problem:
      'Running untrusted student Python code on backend servers creates security and latency bottlenecks during interactive practice.',
    highlights: [
      'Executed Python challenges client-side via WebAssembly Pyodide inside a mobile-responsive Monaco Editor with zero server-side code execution risk.',
      'Built 20 graded challenges, real-time coding duels, a 15-level progression system, and 30 achievements backed by Firebase Admin & Upstash Redis rate limiting.',
      'Integrated Zod-validated API routes, OAuth 2.0 (Google/GitHub), JWT httpOnly cookies, and Sentry observability across client, server, and edge.',
    ],
    metrics: [
      { label: 'Runtime', value: 'Pyodide WASM' },
      { label: 'AI Mentor', value: 'Gemini API' },
      { label: 'Rate Limit', value: 'Upstash Redis' },
      { label: 'Observability', value: 'Sentry' },
    ],
    architecture: [
      { stage: '01 Client IDE', tech: 'Monaco + Pyodide', detail: 'Zero-latency in-browser Python test execution' },
      { stage: '02 AI Hints', tech: 'Google Gemini API', detail: 'Context-aware mentoring without spoiling solutions' },
      { stage: '03 Auth & Guard', tech: 'OAuth + Zod + Redis', detail: 'Strict schema validation & distributed rate limiting' },
      { stage: '04 Persistence', tech: 'Firestore + Zustand', detail: 'Real-time duels, leaderboards & GitHub-style heatmap' },
    ],
    tags: ['Next.js 15', 'TypeScript', 'Pyodide', 'Monaco', 'Gemini API', 'Upstash Redis'],
    githubHref: 'https://github.com/Soumya9679/coding_learning_platform',
    liveHref: 'https://pulsepy.tech',
    image: '/images/pulsepy.png',
    visualType: 'screenshot',
  },
  {
    id: 'placement-predictor',
    title: 'Placement Predictor ML Service',
    subtitle: 'Scikit-Learn Pipeline + Pydantic Validation + Render Deploy',
    category: 'ML & FastAPI',
    tier: 'product',
    year: '2026',
    context: 'End-to-End Deployed ML Web App',
    summary:
      'Production-ready Scikit-Learn classification service (StandardScaler + LogisticRegression) behind a Pydantic-validated FastAPI backend and monochrome dashboard.',
    problem:
      'Demonstrates clean separation of model training serialization, strict request validation, and static frontend serving in a single deployable container.',
    highlights: [
      'Trained and serialized a reproducible Scikit-Learn pipeline combining StandardScaler preprocessing and LogisticRegression.',
      'Enforced input bounds and schema guarantees with Pydantic data validators and exposed real-time inference over FastAPI.',
      'Deployed live on Render with assessment session logging and CORS-ready REST endpoints.',
    ],
    metrics: [
      { label: 'Pipeline', value: 'Scaler + LR' },
      { label: 'Validation', value: 'Pydantic' },
      { label: 'API', value: 'FastAPI' },
      { label: 'Hosting', value: 'Render' },
    ],
    architecture: [
      { stage: '01 Training', tech: 'scikit-learn Pipeline', detail: 'StandardScaler + LogisticRegression serialized to .pkl' },
      { stage: '02 Validation', tech: 'Pydantic Model', detail: 'Strict CGPA & IQ schema enforcement' },
      { stage: '03 Serving', tech: 'FastAPI + Procfile', detail: 'REST inference + static dashboard delivery' },
    ],
    tags: ['FastAPI', 'scikit-learn', 'Pydantic', 'Python', 'Render'],
    githubHref: 'https://github.com/Soumya9679/placement-predictor',
    liveHref: 'https://placement-predictor-77tq.onrender.com',
    visualType: 'placement',
    endpoint: 'POST /predict',
  },
  {
    id: 'eco-learn',
    title: 'EcoLearn — Sustainability Platform',
    subtitle: 'Gamified Environmental Learning & Impact Analytics',
    category: 'Full-Stack AI',
    tier: 'product',
    year: '2026',
    context: 'Gamified EdTech & Community Platform',
    summary:
      'Next.js 16 & Firebase sustainability education platform featuring interactive modules, proof-based eco challenges, community media posts, and tiered leaderboards.',
    problem:
      'Sustainability education often lacks measurable behavioral feedback loops to keep students engaged over time.',
    highlights: [
      'Built multi-tier leaderboards (school, state, country, global) and automated achievement badge unlocks on Cloud Firestore.',
      'Integrated Cloudinary media pipelines for real-world sustainability challenge proof submissions and community feeds.',
      'Shipped a role-gated Admin Dashboard for managing modules, quizzes, and platform engagement metrics.',
    ],
    metrics: [
      { label: 'Framework', value: 'Next.js 16' },
      { label: 'Database', value: 'Firestore' },
      { label: 'Media', value: 'Cloudinary' },
      { label: 'UI', value: 'React 19' },
    ],
    architecture: [
      { stage: '01 Frontend', tech: 'Next.js 16 + Motion', detail: 'Interactive modules, quizzes & search' },
      { stage: '02 Identity', tech: 'Firebase Auth', detail: 'Role-based user & admin governance' },
      { stage: '03 Data & Media', tech: 'Firestore + Cloudinary', detail: 'Proof uploads, badges & multi-tier leaderboards' },
    ],
    tags: ['Next.js 16', 'React 19', 'Firebase', 'Cloudinary', 'Framer Motion'],
    githubHref: 'https://github.com/Soumya9679/eco-learn',
    liveHref: 'https://eco-learn-lac.vercel.app',
    image: '/images/Ecolearn.png',
    visualType: 'screenshot',
  },
];

export const engineeringArchive = [
  {
    name: 'FlowForge',
    description: 'FastAPI workflow automation engine with Pydantic schemas for trigger-based workflow creation and state management.',
    stack: ['Python', 'FastAPI', 'Pydantic'],
    href: 'https://github.com/Soumya9679/FlowForge',
  },
  {
    name: 'lan-video-server',
    description: 'Local network media streaming server paired with a React 19 + Vite + Tailwind v4 TypeScript frontend.',
    stack: ['TypeScript', 'React 19', 'Vite'],
    href: 'https://github.com/Soumya9679/lan-video-server',
  },
  {
    name: 'fast_api_project',
    description: 'Modular FastAPI backend service featuring structured data loaders, helper layers, and REST API endpoints.',
    stack: ['Python', 'FastAPI', 'REST'],
    href: 'https://github.com/Soumya9679/fast_api_project',
  },
  {
    name: 'neetcode-submissions',
    description: 'Algorithmic problem-solving archive in Python covering trees, graphs, dynamic programming, and sliding windows.',
    stack: ['Python', 'DSA', 'Algorithms'],
    href: 'https://github.com/Soumya9679/neetcode-submissions',
  },
] as const;

export const leadershipItems = [
  {
    badge: 'SIH 2026 & 2025',
    title: 'Smart India Hackathon — Team Lead (HexaCore)',
    period: '2025 – 2026',
    description:
      'Led Team HexaCore across SIH 2025 & 2026, architecting and delivering AI-powered cognitive gaming (Random Forest Adaptive Difficulty microservice) and multilingual speech-to-action modules (SraVaani ASR + MiniLM Intent Router).',
    tags: ['Team Leadership', 'Adaptive ML', 'Speech AI', 'FastAPI'],
  },
  {
    badge: 'SREY 2k26 Finalist',
    title: 'CodeFlow 36h Hackathon — Team Lead (Coffee & Code)',
    period: '2026',
    description:
      'Led Team Coffee & Code to the final of the 36-hour live CodeFlow hackathon during SREY 2k26, shipping Cortex Finance AI with PDF/CSV bank statement extraction, Isolation Forest anomaly detection, and FAISS + Gemini RAG.',
    tags: ['36h Sprint', 'Cortex Finance AI', 'Isolation Forest', 'FAISS RAG'],
  },
  {
    badge: 'GDGoC Finalist',
    title: 'GDGoC TechSprint 2025 at STCET — Team Lead (Coffee & Code)',
    period: '2025',
    description:
      'Led Team Coffee & Code to the finals at Google Developer Group on Campus TechSprint 2025 at STCET, earning official certification for rapid AI and full-stack web prototyping.',
    tags: ['GDG on Campus', 'Rapid Prototyping', 'Full-Stack AI'],
  },
] as const;

export const educationItems = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Information Technology',
    institution: "St. Thomas' College of Engineering & Technology (MAKAUT), Kolkata, West Bengal",
    period: '2024 – 2028',
    score: 'CGPA: 8.79 / 10.0',
    highlights: [
      'Focus on Data Science, Machine Learning, NLP, and Full-Stack AI Systems',
      'Led multiple national and campus hackathon teams (SIH, GDGoC, SREY)',
    ],
  },
  {
    degree: 'Higher Secondary Examination (Class XII)',
    institution: 'Kalagechia Jagadish Vidyapith, West Bengal',
    period: '2023',
    score: 'Aggregate: 80%',
    highlights: ['Science & Mathematics foundation'],
  },
] as const;

export const sandboxPresets = {
  difficulty: {
    endpoint: 'POST /predict',
    model: 'sih26003_adaptive_difficulty_v2.pkl (Random Forest)',
    scenarios: [
      {
        id: 'flow',
        label: 'High Flow Streak',
        input: {
          current_difficulty: 3,
          accuracy: 0.92,
          response_time: 1.8,
          hints_used: 0,
          recent_accuracy: 0.89,
          accuracy_trend: 0.14,
          consecutive_successes: 5,
        },
        output: { next_difficulty: 4, confidence: 0.86, decision: 'INCREASE (≥ 0.632 band)' },
      },
      {
        id: 'steady',
        label: 'Balanced Zone',
        input: {
          current_difficulty: 3,
          accuracy: 0.61,
          response_time: 3.4,
          hints_used: 1,
          recent_accuracy: 0.60,
          accuracy_trend: 0.01,
          consecutive_successes: 1,
        },
        output: { next_difficulty: 3, confidence: 0.79, decision: 'HOLD (0.549 – 0.632 band)' },
      },
      {
        id: 'fatigue',
        label: 'Cognitive Fatigue',
        input: {
          current_difficulty: 4,
          accuracy: 0.42,
          response_time: 6.7,
          hints_used: 3,
          recent_accuracy: 0.48,
          accuracy_trend: -0.19,
          consecutive_successes: 0,
        },
        output: { next_difficulty: 3, confidence: 0.91, decision: 'DECREASE (< 0.549 band)' },
      },
    ],
  },
  voice: {
    endpoint: 'POST /voice/process',
    model: 'SraVaani-1.0 ASR + MiniLM-L12-v2 (0.47 Threshold)',
    samples: [
      {
        id: 'memory',
        utterance: '"start the memory game"',
        language: 'EN',
        intent: 'START_MEMORY_GAME',
        similarity: 0.9377,
        action: 'start_memory_game',
        allowed: true,
      },
      {
        id: 'score',
        utterance: '"मेरा स्कोर दिखाओ" (Show my score)',
        language: 'HI / Multilingual',
        intent: 'SHOW_SCORE',
        similarity: 0.8412,
        action: 'show_score',
        allowed: true,
      },
      {
        id: 'ood',
        utterance: '"transfer money to unknown account"',
        language: 'OOD Guardrail Test',
        intent: 'UNKNOWN',
        similarity: 0.214,
        action: null,
        allowed: false,
      },
    ],
  },
  rag: {
    endpoint: 'POST /chat',
    model: 'all-MiniLM-L6-v2 + FAISS + Ollama (qwen2.5:1.5b)',
    queries: [
      {
        id: 'policy',
        query: 'Summarize Q3 data retention constraints from local PDFs.',
        retrievedChunks: 4,
        topScore: 0.892,
        latencyMs: 340,
        response:
          'Retrieved 4 chunks via FAISS (0% external egress). Policy §4.2 mandates 90-day local vector retention and on-prem Qwen2.5 inference.',
      },
      {
        id: 'finance',
        query: 'Flag recurring subscriptions and anomalies in March ledger.',
        retrievedChunks: 5,
        topScore: 0.864,
        latencyMs: 290,
        response:
          'Isolation Forest flagged 2 outlier UPI transfers (>3.2σ) and grouped 4 recurring monthly mandates across indexed PDF statements.',
      },
    ],
  },
} as const;
