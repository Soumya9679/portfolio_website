export const profile = {
  name: 'Soumyadip Maity',
  role: 'Data Scientist & ML Enthusiast',
  focus: 'Harnessing data analysis, statistical modeling, machine learning, and Python to uncover actionable insights and build intelligent models.',
  location: 'India',
  email: 'maitysoumya108@gmail.com',
  resumeHref: '/Soumyadip_Maity_CV.pdf',
  githubHref: 'https://github.com/Soumya9679',
  linkedinHref: 'https://linkedin.com/in/soumyadip-maity-996686353',
  leetcodeHref: 'https://leetcode.com/u/Soumya9679/',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    username: profile.email,
    kind: 'email',
  },
  {
    label: 'GitHub',
    href: profile.githubHref,
    username: '@Soumya9679',
    kind: 'github',
  },
  {
    label: 'LinkedIn',
    href: profile.linkedinHref,
    username: 'Soumyadip Maity',
    kind: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: profile.leetcodeHref,
    username: '@Soumya9679',
    kind: 'leetcode',
  },
] as const;

export const heroStats = [
  { value: 'Python', label: 'Primary Language' },
  { value: 'ML & EDA', label: 'Core Expertise' },
  { value: '5+', label: 'Projects Completed' },
];

export const principles = [
  'Data-driven insights grounded in statistical rigor & exploratory analysis.',
  'Clean, modular Python code structured for reproducible machine learning.',
  'Clear, impactful data visualizations that translate complex analytics simply.',
  'Continuous exploration of Machine Learning algorithms, Deep Learning & AI.',
];

export const capabilities = [
  {
    title: 'Machine Learning & Modeling',
    description:
      'Predictive modeling, classification, regression, and model evaluation using Scikit-Learn, PyTorch, and Python.',
    accent: 'teal',
  },
  {
    title: 'Data Analytics & EDA',
    description:
      'Exploratory data analysis, data wrangling, cleansing, and feature engineering with Pandas, NumPy, and SQL.',
    accent: 'blue',
  },
  {
    title: 'Data Visualization & Insights',
    description:
      'Creating intuitive charts, visual stories, and interactive dashboards using Matplotlib, Seaborn, and Plotly.',
    accent: 'gold',
  },
  {
    title: 'Python & Algorithmic Logic',
    description:
      'Efficient Python scripting, data structure implementations, and algorithm problem-solving for data workflows.',
    accent: 'ink',
  },
];

export const techGroups = [
  {
    title: 'Data Science & ML',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'PyTorch', 'Jupyter Notebooks'],
  },
  {
    title: 'Analytics & Viz',
    items: ['Matplotlib', 'Seaborn', 'Plotly', 'SQL', 'EDA', 'Statistical Modeling'],
  },
  {
    title: 'Tools & Programming',
    items: ['Python (Primary)', 'C', 'Java', 'Git & GitHub', 'Streamlit', 'Data Cleaning'],
  },
];

export const projects = [
  {
    title: 'GrowthOS',
    category: 'Productivity & AI OS',
    description:
      'A premium personal growth operating system combining AI morning briefs, spaced repetition memory flashcards (SuperMemo-2), DSA problem progress tracking across LeetCode/Codeforces, and an embedded RAG AI advisor.',
    image: '/images/growth-os.png',
    tags: ['Next.js', 'AI & RAG', 'Spaced Repetition', 'DSA Tracker', 'Tailwind CSS'],
    href: 'https://growth-os-livid.vercel.app/',
    action: 'View live',
    highlight: 'Features AI-powered daily briefs, SM-2 memory retention, multi-platform DSA tracking, and semantic RAG search.',
  },
  {
    title: 'Soumya AI — RAG Engine',
    category: 'Generative AI & RAG',
    description:
      'An intelligent Retrieval-Augmented Generation (RAG) platform allowing users to index and query PDFs, spreadsheets, and markdown docs with factual citations using configurable LLMs (Llama 3, Mistral, Claude).',
    image: '/images/rag-chatbot.png',
    tags: ['Python', 'RAG & Vector DB', 'Llama 3 / Mistral', 'React', 'Tailwind CSS'],
    href: 'https://rag-chatbot-ivory-six.vercel.app/',
    action: 'View live',
    highlight: 'Combines vector embedding search, multi-model selection (Llama 3, Mistral, Claude), document indexing, and source citations.',
  },
  {
    title: 'PulsePy',
    category: 'Python & Learning',
    description:
      'An interactive Python learning platform with gamified coding challenges and algorithm practice designed for data logic development.',
    image: '/images/pulsepy.png',
    tags: ['Python', 'Algorithms', 'Interactive Logic'],
    href: 'https://pulsepy.tech',
    action: 'View live',
    highlight: 'Designed to make Python programming, logic practice, and algorithmic thinking structured.',
  },
  {
    title: 'Ecolearn',
    category: 'Analytics & Education',
    description:
      'A data-informed sustainability learning platform that leverages interactive quizzes and visual analytics modules to communicate environmental impact.',
    image: '/images/Ecolearn.png',
    tags: ['Python', 'Data Analytics', 'Visualization'],
    href: 'https://sih-team-mindoras.netlify.app/',
    action: 'View live',
    highlight: 'Combines data storytelling, interactive quizzes, and accessible visual exploration.',
  },
  {
    title: 'Time Capsule Notes',
    category: 'Data Logging & Logic',
    description:
      'A structured note-taking & temporal data logging system designed for scheduling future releases and managing timestamped records.',
    image: '/images/time-capsule-notes.png',
    tags: ['Data Logic', 'Temporal Storage', 'JavaScript'],
    href: 'https://time-capsule-notes.netlify.app/',
    action: 'View live',
    highlight: 'Explores time-series indexing, storage persistence, and predictable state transitions.',
  },
  {
    title: 'Tic Tac Toe',
    category: 'Algorithmic State Machine',
    description:
      'A game logic implementation demonstrating state machine handling, optimal minimax turn evaluation, and game feedback.',
    image: '/images/tic-tac-toe.png',
    tags: ['Algorithms', 'State Machines', 'Logic'],
    href: 'https://tic-tac-toe-soumya-project.netlify.app/',
    action: 'Play game',
    highlight: 'Focused on algorithmic decision trees, state validation, and clean logic.',
  },
  {
    title: 'Coinzy Game',
    category: 'Simulation & Metrics',
    description:
      'A fast coin-collecting simulation game exploring real-time loops, collision physics, and event metric collection.',
    image: '/images/pc-game.png',
    tags: ['Simulation', 'Game Loop', 'Desktop'],
    href: 'https://drive.google.com/file/d/1dKZ8j5R4rEuogB-7J6IQ5I7UnuVja2mD/view?usp=drivesdk',
    action: 'Download',
    highlight: 'Explores real-time event loops, frame state tracking, and metric calculation.',
  },
];
