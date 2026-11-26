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
  role: 'Data Science • Machine Learning • AI Engineering',
  headline: 'Building leakage-free ML models, multilingual speech AI, and privacy-first RAG systems.',
  summary:
    'B.Tech IT undergraduate (8.79 CGPA) specializing in Data Science, Machine Learning, and AI Engineering. Experienced in Python ML pipelines, NLP, FAISS, and RAG applications, with expertise in rigorous model evaluation and FastAPI deployment.',
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
  { label: 'ML Systems', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Philosophy', href: '#about' },
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
    detail: '0.47 Cosine Safety Threshold',
  },
  {
    value: '8.79',
    label: 'B.Tech IT CGPA',
    detail: 'STCET (MAKAUT) • 2024–2028',
  },
  {
    value: '6',
    label: 'ML & AI Systems',
    detail: 'FastAPI • FAISS • NLP • Eval',
  },
] as const;

export const engineeringPrinciples = [
  {
    title: 'Zero Data Leakage Validation',
    detail:
      'Enforce subject-grouped splits (5-fold GroupKFold) and strict train-only prototype fitting so offline accuracy reflects true unseen generalization.',
  },
  {
    title: 'Guardrail-First Inference',
    detail:
      'Wrap predictive and speech models behind deterministic boundaries — cosine rejection thresholds (0.47), allow-listed action registries, and Pydantic schemas.',
  },
  {
    title: 'Low-Latency FastAPI Serving',
    detail:
      'Decouple serialized models, temporal feature builders, and REST/streaming endpoints into clean, containerized Python microservices.',
  },
  {
    title: 'Multi-Metric NLP Evaluation',
    detail:
      'Measure generation and summarization fidelity beyond n-gram overlap using lexical (ROUGE) and learned neural metrics (BERTScore, BLEURT).',
  },
] as const;

export const capabilities = [
  {
    title: 'Predictive ML & Temporal Features',
    description:
      'Domain feature engineering on behavioral telemetry, Random Forest & Isolation Forest modeling, and GroupKFold subject-safe validation.',
    metric: '89.1% Holdout • 0.109 MAE',
    tag: 'scikit-learn / FastAPI',
  },
  {
    title: 'Speech & Multilingual NLP',
    description:
      'End-to-end ASR pipelines (SraVaani) paired with multilingual Sentence Transformer prototypes, cosine similarity gating, and intent allow-lists.',
    metric: '15 Intents • ≥ 0.47 Gate',
    tag: 'SraVaani / MiniLM',
  },
  {
    title: 'Privacy-First RAG Pipelines',
    description:
      'Local vector retrieval combining recursive document chunking, Hugging Face Sentence Transformers, FAISS indexing, and local Ollama Qwen2.5 inference.',
    metric: 'FAISS + Local Qwen2.5',
    tag: 'LangChain / Ollama',
  },
  {
    title: 'Model Evaluation & Deployment',
    description:
      'Benchmarking NLP coherence with ROUGE, BERTScore, and BLEURT, and deploying validated REST inference APIs with Docker and Render.',
    metric: 'ROUGE / BERTScore / BLEURT',
    tag: 'Docker / FastAPI / Render',
  },
] as const;

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Databases',
    subtitle: 'Core languages & relational querying',
    items: ['Python', 'C', 'SQL'],
  },
  {
    id: 'ml',
    title: 'Data Science & ML',
    subtitle: 'Modeling, telemetry & validation',
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
    subtitle: 'Retrieval, embeddings & summarization',
    items: [
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'Ollama (Qwen2.5)',
      'Text Summarization',
      'SraVaani ASR',
    ],
  },
  {
    id: 'backend',
    title: 'Backend, APIs & DevOps',
    subtitle: 'Inference serving & reproducibility',
    items: [
      'FastAPI',
      'REST APIs',
      'Model Inference Endpoints',
      'Pydantic',
      'Docker',
      'Git & GitHub',
      'Render',
      'Google Colab',
    ],
  },
  {
    id: 'guardrails',
    title: 'Evaluation & Guardrails',
    subtitle: 'Fidelity metrics & production safety',
    items: [
      'ROUGE',
      'BERTScore',
      'BLEURT',
      'Cosine Similarity Thresholding',
      'Allow-List Intent Guardrails',
    ],
  },
];

export type ProjectCategory =
  | 'All'
  | 'Machine Learning'
  | 'NLP & Speech AI'
  | 'RAG & GenAI';

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
  tier: 'cv-core' | 'applied-ml';
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
    title: 'Adaptive Cognitive Difficulty Prediction',
    subtitle: 'Behavioral Telemetry Random Forest + FastAPI Microservice',
    category: 'Machine Learning',
    tier: 'cv-core',
    year: '2026',
    context: 'Smart India Hackathon (SIH26003) • Team HexaCore',
    summary:
      'Trained a Random Forest classifier on multi-session user behavioral logs to dynamically personalize cognitive difficulty levels (1–5) in real time.',
    problem:
      'Static difficulty progressions degrade user engagement, while naive random train/test splits leak subject-specific behavioral signatures across folds.',
    highlights: [
      'Engineered 12 domain-specific temporal features across accuracy, response latency, hint usage, rolling performance trends, and consecutive success streaks.',
      'Achieved 89.1% patient-level holdout accuracy, 0.109 MAE, and 88.24% mean accuracy across 5-fold GroupKFold cross-validation, eliminating subject-level data leakage.',
      'Exposed real-time predictions with calibrated adaptive bands (decrease < 0.549, increase ≥ 0.632) via a low-latency Python FastAPI microservice.',
    ],
    metrics: [
      { label: 'Holdout Acc', value: '89.1%' },
      { label: '5-Fold Group CV', value: '88.24%' },
      { label: 'MAE', value: '0.109' },
      { label: 'Levels', value: '1 – 5' },
    ],
    architecture: [
      { stage: '01 Telemetry Ingest', tech: 'Pydantic Schemas', detail: '12 session & rolling features validated at POST /predict' },
      { stage: '02 Temporal Features', tech: 'Pandas / NumPy', detail: 'Rolling accuracy, latency trend & consecutive success streaks' },
      { stage: '03 Model Serving', tech: 'Random Forest v2.0', detail: 'GroupKFold-validated classifier with confidence estimation' },
      { stage: '04 Safe Clamping', tech: 'FastAPI Endpoint', detail: 'Clamps recommended level to [1, 5] within adaptive bands' },
    ],
    tags: ['Python', 'Random Forest', 'GroupKFold', 'scikit-learn', 'FastAPI', 'Pydantic'],
    githubHref: 'https://github.com/Soumya9679/adaptive-difficulty-predictor',
    visualType: 'difficulty',
    endpoint: 'POST /predict',
  },
  {
    id: 'voice-assistant',
    title: 'Multilingual Voice Intent Classification System',
    subtitle: 'SraVaani ASR + Sentence Transformer Prototypes + Safety Guardrails',
    category: 'NLP & Speech AI',
    tier: 'cv-core',
    year: '2026',
    context: 'Smart India Hackathon (SIH26003) • Team HexaCore',
    summary:
      'End-to-end multilingual voice-processing pipeline integrating SraVaani ASR with dense MiniLM embedding intent routing and deterministic action allow-listing.',
    problem:
      'Noisy multilingual speech transcripts can trigger unintended application actions if classifiers lack out-of-distribution rejection or execute raw predictions.',
    highlights: [
      'Architected an end-to-end pipeline integrating ARTPARK-IISc/SraVaani-1.0 ASR (CUDA + Gradio) with paraphrase-multilingual-MiniLM-L12-v2 dense prototype matching.',
      'Mapped noisy multilingual voice transcripts across 15 intents (325-sample dataset) with 96.23% test accuracy (95.92% val / 93.88% holdout split, 0.9556 Macro F1).',
      'Engineered a 0.47 cosine-similarity rejection threshold paired with a strict command allow-list to block out-of-scope or ambiguous voice triggers.',
    ],
    metrics: [
      { label: 'Test Accuracy', value: '96.23%' },
      { label: 'Val Macro F1', value: '0.9556' },
      { label: 'Safety Gate', value: '≥ 0.47' },
      { label: 'Intents', value: '15' },
    ],
    architecture: [
      { stage: '01 Speech ASR', tech: 'SraVaani-1.0 (CUDA)', detail: 'Multilingual audio transcription via Gradio GPU service' },
      { stage: '02 Intent Vector', tech: 'MiniLM-L12-v2 (CPU)', detail: 'Cosine similarity against train-only semantic prototypes' },
      { stage: '03 Rejection Gate', tech: 'Threshold < 0.47', detail: 'Ambiguous or OOD utterances rejected safely as UNKNOWN' },
      { stage: '04 Allow-List API', tech: 'FastAPI Registry', detail: 'Executes only 14 explicitly allow-listed safe actions' },
    ],
    tags: ['SraVaani ASR', 'Sentence Transformers', 'FastAPI', 'Cosine Guardrails', 'NLP'],
    githubHref: 'https://github.com/Soumya9679/voice-assistant',
    visualType: 'voice',
    endpoint: 'POST /voice/process',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot — Local Enterprise AI Assistant',
    subtitle: 'Privacy-First FAISS Retrieval + Local Ollama Qwen2.5 Inference',
    category: 'RAG & GenAI',
    tier: 'cv-core',
    year: '2026',
    context: 'Privacy-First Generative AI & Backend',
    summary:
      'Privacy-first RAG pipeline combining document chunking, dense FAISS vector indexing, and local Qwen2.5 LLM inference served over streaming FastAPI endpoints.',
    problem:
      'Enterprise document Q&A workflows require accurate multi-document retrieval without sending proprietary corpora to external cloud LLM APIs.',
    highlights: [
      'Built a zero-egress RAG pipeline combining recursive document chunking, dense vector indexing, and fully local LLM execution.',
      'Implemented semantic search using Hugging Face Sentence Transformers (all-MiniLM-L6-v2) and FAISS for fast context retrieval across multi-document corpora.',
      'Orchestrated local Qwen2.5 (1.5B) inference via Ollama and LangChain, serving streaming responses through RESTful FastAPI endpoints.',
    ],
    metrics: [
      { label: 'Local LLM', value: 'Qwen2.5' },
      { label: 'Vector Index', value: 'FAISS' },
      { label: 'Embeddings', value: 'MiniLM-L6' },
      { label: 'Cloud Egress', value: '0%' },
    ],
    architecture: [
      { stage: '01 Chunking', tech: 'Document Splitter', detail: 'Multi-document normalization and overlapping chunks' },
      { stage: '02 Dense Index', tech: 'FAISS + MiniLM-L6', detail: 'Local semantic vector store persisted on disk' },
      { stage: '03 Generation', tech: 'LangChain + Ollama', detail: 'Local Qwen2.5 inference grounded on retrieved context' },
      { stage: '04 Streaming API', tech: 'FastAPI + React', detail: 'RESTful streaming endpoints paired with chat workspace' },
    ],
    tags: ['LangChain', 'FAISS', 'Ollama', 'Qwen2.5', 'Sentence Transformers', 'FastAPI'],
    githubHref: 'https://github.com/Soumya9679/RAG-chatbot',
    liveHref: 'https://rag-chatbot-ivory-six.vercel.app',
    image: '/images/rag-chatbot.png',
    visualType: 'screenshot',
    endpoint: 'POST /chat',
  },
  {
    id: 'text-summarizer',
    title: 'Text Summarizer — NLP & Semantic Evaluation',
    subtitle: 'Extractive Summarization Benchmarked with ROUGE, BERTScore & BLEURT',
    category: 'NLP & Speech AI',
    tier: 'cv-core',
    year: '2026',
    context: 'Natural Language Processing & Evaluation',
    summary:
      'Extractive text summarization pipeline benchmarked on 1,000 CNN/DailyMail articles with custom tokenization and joint lexical + neural fidelity evaluation.',
    problem:
      'Lexical metrics alone fail to capture paraphrased meaning; trustworthy summarization requires pairing n-gram overlap with contextual neural evaluation.',
    highlights: [
      'Built custom sentence tokenization, abbreviation handling, pronoun/irregular-verb lemmatization, and Jaccard similarity sentence ranking in Python.',
      'Benchmarked the extractive pipeline across 1,000 CNN/DailyMail documents in a reproducible Google Colab evaluation harness.',
      'Evaluated summary fidelity and semantic coherence using lexical and neural metrics: ROUGE, DistilBERT BERTScore, and Google Research BLEURT-base-128.',
    ],
    metrics: [
      { label: 'Benchmark', value: '1,000 Docs' },
      { label: 'Dataset', value: 'CNN/DM' },
      { label: 'Lexical', value: 'ROUGE' },
      { label: 'Neural', value: 'BERT + BLEURT' },
    ],
    architecture: [
      { stage: '01 Preprocessing', tech: 'Custom NLP Parser', detail: 'Abbreviation-safe sentence split & lemmatization' },
      { stage: '02 Extraction', tech: 'Freq + Jaccard', detail: 'Salience scoring & cosine consistency checks' },
      { stage: '03 Lexical Eval', tech: 'ROUGE Scorer', detail: 'Surface n-gram precision/recall benchmarking' },
      { stage: '04 Neural Eval', tech: 'BERTScore + BLEURT', detail: 'Semantic fidelity evaluation across 1,000 samples' },
    ],
    tags: ['Python', 'NLP', 'ROUGE', 'BERTScore', 'BLEURT', 'CNN/DailyMail'],
    githubHref: 'https://github.com/Soumya9679/text_summarizer',
    visualType: 'summarizer',
  },
  {
    id: 'cortex-finance',
    title: 'Cortex Finance AI — Anomaly Detection & Financial RAG',
    subtitle: 'Isolation Forest Outlier Detection + FAISS Financial Q&A',
    category: 'RAG & GenAI',
    tier: 'applied-ml',
    year: '2026',
    context: 'SREY 2k26 CodeFlow 36h Hackathon Finalist • Team Coffee & Code',
    summary:
      'AI bank statement analyzer extracting semi-structured Indian PDF/CSV transactions, detecting spending anomalies via Isolation Forest, and serving RAG financial Q&A.',
    problem:
      'Unstructured bank statements obscure recurring payment leaks and anomalous transaction spikes that require automated statistical detection and semantic search.',
    highlights: [
      'Extracted and categorized semi-structured Indian bank statements (PDF/CSV) using pdfplumber and SQLite into automated financial health metrics.',
      'Implemented Scikit-Learn Isolation Forest anomaly detection to flag unusual spending spikes and recurring UPI/EMI/SIP commitments.',
      'Connected FAISS vector retrieval, LangChain, and Gemini API behind a FastAPI backend for natural-language ledger queries.',
    ],
    metrics: [
      { label: 'Anomaly Model', value: 'IsoForest' },
      { label: 'Vector Store', value: 'FAISS' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Hackathon', value: 'Finalist' },
    ],
    architecture: [
      { stage: '01 Ingestion', tech: 'pdfplumber + SQLite', detail: 'Extracts & normalizes Indian PDF/CSV transactions' },
      { stage: '02 ML Detection', tech: 'Isolation Forest', detail: 'Detects spending outliers & recurring commitments' },
      { stage: '03 RAG Index', tech: 'FAISS + LangChain', detail: 'Semantic retrieval over categorized ledger records' },
      { stage: '04 API & Viz', tech: 'FastAPI + Recharts', detail: 'Financial health scoring & conversational Q&A' },
    ],
    tags: ['scikit-learn', 'Isolation Forest', 'FAISS', 'LangChain', 'FastAPI', 'pdfplumber'],
    githubHref: 'https://github.com/Soumya9679/CODEFLOW2026-Neural-Nexus-Cortex-Finance',
    liveHref: 'https://codeflow-2026-neural-nexus-cortex-f.vercel.app',
    visualType: 'finance',
  },
  {
    id: 'placement-predictor',
    title: 'Placement Predictor — Scikit-Learn ML Service',
    subtitle: 'StandardScaler + LogisticRegression Pipeline on FastAPI',
    category: 'Machine Learning',
    tier: 'applied-ml',
    year: '2026',
    context: 'End-to-End Deployed ML Inference API',
    summary:
      'Full-stack Machine Learning prediction service wrapping a serialized Scikit-Learn pipeline (StandardScaler + LogisticRegression) with Pydantic validation and FastAPI.',
    problem:
      'Demonstrates clean production separation between model training artifacts, strict input schema validation, and live cloud inference serving.',
    highlights: [
      'Trained and serialized a reproducible Scikit-Learn pipeline combining StandardScaler feature normalization and LogisticRegression classification.',
      'Validated inference payloads with Pydantic schemas and served real-time predictions with session assessment logging via FastAPI.',
      'Containerized and deployed live to Render with auto-configured ports and CORS support.',
    ],
    metrics: [
      { label: 'Pipeline', value: 'Scaler + LR' },
      { label: 'Validation', value: 'Pydantic' },
      { label: 'Serving', value: 'FastAPI' },
      { label: 'Hosting', value: 'Render' },
    ],
    architecture: [
      { stage: '01 Training', tech: 'scikit-learn', detail: 'StandardScaler + LogisticRegression serialized to .pkl' },
      { stage: '02 Validation', tech: 'Pydantic Schema', detail: 'Strict CGPA & IQ bounds checking' },
      { stage: '03 Cloud API', tech: 'FastAPI + Render', detail: 'REST inference endpoint & assessment log UI' },
    ],
    tags: ['Python', 'scikit-learn', 'FastAPI', 'Pydantic', 'Render'],
    githubHref: 'https://github.com/Soumya9679/placement-predictor',
    liveHref: 'https://placement-predictor-77tq.onrender.com',
    visualType: 'placement',
    endpoint: 'POST /predict',
  },
];

export const leadershipItems = [
  {
    badge: 'SIH 2026 & 2025',
    title: 'Smart India Hackathon — Team Lead (HexaCore)',
    period: '2025 – 2026',
    description:
      'Led Team HexaCore for Smart India Hackathon (SIH) 2026 & 2025, architecting and delivering AI-powered cognitive gaming (Adaptive Difficulty Random Forest microservice) and multilingual voice modules (SraVaani ASR + MiniLM intent router).',
    tags: ['Team Leadership', 'Adaptive ML', 'Speech AI', 'FastAPI'],
  },
  {
    badge: 'GDGoC Finalist',
    title: 'GDG on Campus TechSprint 2025 — Team Lead (Coffee & Code)',
    period: '2025',
    description:
      'Led Team Coffee & Code to the final during GDGoC TechSprint 2025 at STCET and earned official certification for rapid AI and web prototyping.',
    tags: ['GDGoC STCET', 'Rapid AI Prototyping', 'Team Lead'],
  },
  {
    badge: 'SREY 2k26 Finalist',
    title: 'CodeFlow 36h Live Hackathon — Team Lead (Coffee & Code)',
    period: '2026',
    description:
      'Led Team Coffee & Code to the final of the 36-hour CodeFlow live hackathon during the SREY 2k26 tech fest, delivering Cortex Finance AI (Isolation Forest anomaly detection + FAISS RAG).',
    tags: ['36h Hackathon', 'Isolation Forest', 'FAISS RAG'],
  },
] as const;

export const educationItems = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Information Technology',
    institution: "St. Thomas' College of Engineering & Technology (MAKAUT), Kolkata, West Bengal",
    period: '2024 – 2028',
    score: 'CGPA: 8.79 / 10.0',
    highlights: [
      'Specializing in Data Science, Machine Learning, NLP, and AI Engineering',
      'Led engineering teams across Smart India Hackathon, GDGoC TechSprint, and SREY 2k26',
    ],
  },
  {
    degree: 'Higher Secondary Examination (Class XII)',
    institution: 'Kalagechia Jagadish Vidyapith, West Bengal',
    period: '2023',
    score: 'Aggregate: 80%',
    highlights: ['Mathematics, Computer/Science fundamentals'],
  },
] as const;

export const sandboxPresets = {
  difficulty: {
    endpoint: 'POST /predict',
    model: 'sih26003_adaptive_difficulty_v2.pkl',
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
        output: { next_difficulty: 4, confidence: 0.86, decision: 'INCREASE (≥ 0.632 threshold)' },
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
        output: { next_difficulty: 3, confidence: 0.91, decision: 'DECREASE (< 0.549 threshold)' },
      },
    ],
  },
  voice: {
    endpoint: 'POST /voice/process',
    model: 'SraVaani-1.0 + MiniLM-L12-v2',
    samples: [
      {
        id: 'memory',
        utterance: '"start the memory game"',
        language: 'English',
        intent: 'START_MEMORY_GAME',
        similarity: 0.9377,
        action: 'start_memory_game',
        allowed: true,
      },
      {
        id: 'score',
        utterance: '"मेरा स्कोर दिखाओ" (Show my score)',
        language: 'Hindi / Multilingual',
        intent: 'SHOW_SCORE',
        similarity: 0.8412,
        action: 'show_score',
        allowed: true,
      },
      {
        id: 'ood',
        utterance: '"transfer money to external account"',
        language: 'Out-of-Scope Test',
        intent: 'UNKNOWN',
        similarity: 0.214,
        action: null,
        allowed: false,
      },
    ],
  },
  rag: {
    endpoint: 'POST /chat',
    model: 'all-MiniLM-L6-v2 + FAISS + Qwen2.5',
    queries: [
      {
        id: 'policy',
        query: 'Summarize Q3 data retention constraints from local PDFs.',
        retrievedChunks: 4,
        topScore: 0.892,
        latencyMs: 340,
        response:
          'Retrieved 4 FAISS chunks (0% external egress). Policy §4.2 mandates 90-day local vector retention and on-prem Qwen2.5 inference.',
      },
      {
        id: 'finance',
        query: 'Flag recurring mandates and anomalies in March bank CSV.',
        retrievedChunks: 5,
        topScore: 0.864,
        latencyMs: 290,
        response:
          'Isolation Forest flagged 2 outlier UPI transfers (>3.2σ) and grouped 4 recurring monthly mandates across indexed statements.',
      },
    ],
  },
} as const;
