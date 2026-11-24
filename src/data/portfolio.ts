export type ProjectCategory = 'all' | 'ai-automation' | 'web-platforms' | 'ml-research';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectGalleryItem {
  src: string;
  title: string;
  module: string;
  caption: string;
  alt: string;
}

export interface ProjectCoreModule {
  name: string;
  purpose: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  tagline?: string;
  summary: string;
  highlights: string[];
  coreModules?: ProjectCoreModule[];
  architectureNotes?: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  flagship?: boolean;
  image?: string;
  imageAlt?: string;
  gallery?: ProjectGalleryItem[];
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface ExtracurricularTrack {
  id: string;
  title: string;
  points: string[];
}

export const PROFILE = {
  name: 'Md. Mursaline Parvez',
  shortName: 'Mursaline Parvez',
  role: 'Web Developer | Full-Stack JavaScript (React & Node.js) | AI Automation Engineer',
  location: 'Tushardhara, Kadamtoly, Dhaka, Bangladesh',
  phone: '01567963471',
  email: 'mdmursalineparvez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mursalineparvez/',
  github: 'https://github.com/Mursalineparvez',
  kaggle: 'https://www.kaggle.com/mdmursalineparvez',
  portfolio: 'https://mursalineparvez.vercel.app/',
  portrait: '/assets/mursaline-portrait-nobg.png',
  education: {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science and Engineering',
    institution: 'Green University of Bangladesh',
    location: 'Narayanganj, Bangladesh',
  },
  summary:
    'Web Developer holding a B.Sc. in Computer Science & Engineering, specializing in modern JavaScript development. Experienced in building responsive websites and web applications with React, Next.js, Node.js, Tailwind CSS, and WordPress — backed by foundational MySQL, MongoDB, and n8n AI workflow skills. Ships clean, user-focused digital platforms alongside applied research in Bangla NLP and machine learning.',
  researchSummary:
    'In addition to core web engineering across Zikr+, Byakaron, Green Campus, SPSB, and RDCS, contributed to AI automation agents at Robo Tech Valley and research in Bangla Natural Language Processing (NLP). Actively involved in STEM education, programming mentorship, and national science olympiad leadership through SPSB, BdJSO, and BdOSN.',
};

export const KEY_METRICS = [
  {
    value: '~4 Years',
    label: 'JavaScript & Web Development',
  },
  {
    value: 'React · Node',
    label: 'Frontend, Backend & REST APIs',
  },
  {
    value: 'MySQL · Mongo',
    label: 'Foundational Database Skills',
  },
  {
    value: '7',
    label: 'Shipped Websites, Apps & Agents',
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 'robo-tech-valley',
    role: 'Automation Expert',
    company: 'Robo Tech Valley',
    type: '6 Months · Project-Based',
    highlights: [
      'Developed and implemented AI-powered automation workflows using n8n.',
      'Integrated APIs and automated business processes to improve workflow efficiency.',
      'Contributed to the development of Stock Analysis Agent and Automated Resume Builder.',
      'Worked on project implementation and technical delivery.',
    ],
  },
  {
    id: 'wecycle',
    role: 'Software Engineer',
    company: 'WeCycle',
    type: '2 Years',
    highlights: [
      'Contributed to software development and application implementation.',
      'Worked on technical solutions and application functionality.',
    ],
  },
  {
    id: 'bdosn-sisca',
    role: 'Program Officer — SISCA Project',
    company: 'Bangladesh Open Source Network (BdOSN)',
    type: '6 Months',
    highlights: [
      'Coordinated and delivered program operations under BdOSN’s SISCA project initiatives.',
      'Managed technical workshops, participant coordination, and community outreach workflows.',
      'Supported digital literacy, STEM initiatives, and project reporting.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zikr-plus',
    index: '01',
    title: 'Zikr+ — Islamic Companion & Daily Worship Platform',
    subtitle: 'Progressive Web App · Product Development',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    tagline: 'Remember. Reflect. Pray. Track. Grow.',
    summary:
      'A unified, distraction-free Islamic companion combining Zikir, Quran, Kitab Library, Hadith, Salat Times, Dua, and Aamal Tracking in one offline-first Progressive Web App and Android-ready experience.',
    coreModules: [
      { name: 'Zikir Engine', purpose: 'Independent multi-counter with Morning/Evening Adhkar & dynamic central total' },
      { name: 'Quran', purpose: '114 Surahs, 30 Juz filter, Uthmani RTL script, audio & 4-language translations' },
      { name: 'Kitab Library', purpose: 'Curated Islamic books across Aqeedah, Fiqh, Tafsir, Seerah & History' },
      { name: 'Hadith', purpose: '17 canonical books & 53,000+ Hadiths with Arabic, Bengali & grade verification' },
      { name: 'Salat Time', purpose: 'Live countdown, solar trajectory arc, prohibited times & Qibla compass' },
      { name: 'Dua', purpose: '218 chapters & 437 authentic Hisnul Muslim and Quranic supplications' },
      { name: 'Aamal Tracker', purpose: 'Daily Muhasabah, 5 Fardh + Sunnah/Nafl logs, streaks & PDF/CSV export' },
    ],
    highlights: [
      'Independent multi-counter Tasbeeh engine with custom targets, sound synthesis, tactile haptics, Focus Mode, and a dynamically aggregated Central Total Counter.',
      'Complete 114-Surah Quran reader with 30 Juz filtering, Uthmani Arabic RTL typography, audio recitations, bookmarks, and Bengali/English/Urdu/Hindi translations.',
      'Astronomical Salat Time dashboard featuring live next-prayer countdowns, real-time solar trajectory curve, prohibited prayer alerts, GPS auto-detection, and Qibla direction.',
      'Extensive knowledge modules including 17 Hadith books (53,000+ Hadiths), 437 Masnoon & Quranic Duas, 99 Names (Asmaul Husna), 24 Hours of the Prophet (SAW), 63-Year Siratun Nabi, Interactive Historical Map (136 events), 31 Battles, and Prophetic Lineage trees.',
      'Offline-first persistence using IndexedDB & LocalStorage with Firebase Firestore cloud sync, Day/Night themes, 5-language i18n, and Android TWA/APK readiness.',
    ],
    architectureNotes: [
      'Modular React 19 + TypeScript + Vite feature architecture with isolated state & unidirectional Zikir data flow.',
      'Local-first persistence (IndexedDB / LocalStorage) synced to Firebase Firestore & Auth with PDF/CSV export via jsPDF & html2pdf.',
      'Certified PWA (Service Worker cache, installable on iOS/Android/Desktop) and Android APK/AAB export workflow.',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Firebase', 'IndexedDB', 'jsPDF', 'PWA', 'Vercel'],
    links: [
      { label: 'Live PWA', url: 'https://zikr-mate.vercel.app/' },
      { label: 'AI Studio App', url: 'https://ai.studio/apps/c77b9532-6dfd-4adb-ae14-480a02ae6ca1' },
    ],
    featured: true,
    flagship: true,
    image: '/assets/aistudio/image_786f1365.png',
    imageAlt: 'Zikr+ Central Master Counter and independent Zikir cards interface',
    gallery: [
      {
        src: '/assets/aistudio/image_786f1365.png',
        title: 'Central Master Counter & Multi-Zikir Engine',
        module: 'Zikir',
        caption: 'Dynamic central total counter (15,051) aggregating independent Tasbeeh cards with targets & PDF export.',
        alt: 'Zikr+ Central Master Counter and Multi-Zikir Engine screen',
      },
      {
        src: '/assets/aistudio/image_fa0a3a91.png',
        title: 'Tasbeeh Focus Mode',
        module: 'Zikir',
        caption: 'Distraction-free single-zikir tap ring with cycle tracking, sound toggle, and screen lock.',
        alt: 'Zikr+ Tasbeeh Focus Mode screen',
      },
      {
        src: '/assets/aistudio/image_701dd109.png',
        title: 'Al-Quran Al-Kareem (114 Surahs)',
        module: 'Quran',
        caption: 'Complete 114 Surahs with 30 Juz filter, Mus’haf mode, Tafsir access, and Makki/Madani classification.',
        alt: 'Zikr+ Al-Quran Al-Kareem 114 Surahs screen',
      },
      {
        src: '/assets/aistudio/image_3fcbfe69.png',
        title: 'Salat Time & Solar Trajectory',
        module: 'Salat',
        caption: 'Live prayer countdown, astronomical sun trajectory arc, prohibited times, GPS location, and Qibla compass.',
        alt: 'Zikr+ Salat Time and Solar Trajectory screen',
      },
      {
        src: '/assets/aistudio/image_968a3449.png',
        title: 'Muhasabah & Daily Aamal Tracker',
        module: 'Aamal',
        caption: 'Daily 5 Fardh + Sunnah/Nafl prayer tracker, calendar history, progress analytics, and PDF/report export.',
        alt: 'Zikr+ Muhasabah Daily Aamal Tracker screen',
      },
      {
        src: '/assets/aistudio/image_4e0dd685.png',
        title: 'Islamic Knowledge & Features Hub',
        module: 'Hub',
        caption: 'Unified gateway to Duas, Hadith, Kitab Library, Sirat, History, 99 Names, Hajj/Umrah, and Saved Library.',
        alt: 'Zikr+ Islamic Features Hub screen',
      },
      {
        src: '/assets/aistudio/image_1d0ad8b8.png',
        title: 'Masnoon & Quranic Duas',
        module: 'Dua',
        caption: '218 chapters and 437 authentic Duas organized into 20 searchable thematic categories.',
        alt: 'Zikr+ Masnoon and Quranic Duas screen',
      },
      {
        src: '/assets/aistudio/image_9841face.png',
        title: 'Hadith Library (17 Books · 53,000+ Hadiths)',
        module: 'Hadith',
        caption: 'Sihah Sittah, Muwatta Malik, and classical collections in Arabic & Bengali with authenticity grading.',
        alt: 'Zikr+ Hadith Library screen',
      },
      {
        src: '/assets/aistudio/image_ad193c55.png',
        title: '24 Hours of the Prophet (SAW)',
        module: 'Sunnah',
        caption: 'Chronological 14-segment Sunnah routine clock balancing spiritual, family, and social life.',
        alt: 'Zikr+ 24 Hours of the Prophet Sunnah routine screen',
      },
      {
        src: '/assets/aistudio/image_4e4402aa.png',
        title: 'Siratun Nabi (SAW) — 63-Year Biography',
        module: 'Seerah',
        caption: 'Complete 63-chapter life journey of Prophet Muhammad (SAW) with timeline, map, and card views.',
        alt: 'Zikr+ Siratun Nabi 63-Year Biography screen',
      },
      {
        src: '/assets/aistudio/image_87179939.png',
        title: 'Historical Family Tree & Lineage',
        module: 'History',
        caption: 'Interactive genealogy charts with documented historical references from Tarikh al-Tabari.',
        alt: 'Zikr+ Historical Family Tree screen',
      },
      {
        src: '/assets/aistudio/image_162c6c88.png',
        title: 'Interactive Islamic History Map (570–2026 CE)',
        module: 'History',
        caption: 'Side-by-side Then vs Now map comparison and 136-event interactive historical timeline.',
        alt: 'Zikr+ Interactive Islamic History Map screen',
      },
      {
        src: '/assets/aistudio/image_5cd7b8ae.png',
        title: 'Battles of Islamic History',
        module: 'History',
        caption: '31 documented historical battles structured across 6 eras from the Prophetic period to modern history.',
        alt: 'Zikr+ Battles of Islamic History screen',
      },
      {
        src: '/assets/aistudio/image_419be5c8.png',
        title: 'Arab Tribes & Personalities Encyclopedia',
        module: 'History',
        caption: '40 historical Arab tribes directory with lineage mapping, charts, and biographical references.',
        alt: 'Zikr+ Arab Tribes Encyclopedia screen',
      },
      {
        src: '/assets/aistudio/image_bc468c26.png',
        title: 'Asmaul Husna — 99 Names of Allah',
        module: 'Zikir',
        caption: 'Audio pronunciation, Arabic calligraphy, meanings, virtues (Fazilat), and memorization tracking.',
        alt: 'Zikr+ Asmaul Husna 99 Names screen',
      },
      {
        src: '/assets/aistudio/image_4a6115ef.png',
        title: 'Dawat & Tabligh Study Guide',
        module: 'Kitab',
        caption: '14 structured chapters covering Usul, Six Qualities, and classical references with download support.',
        alt: 'Zikr+ Dawat and Tabligh study guide screen',
      },
      {
        src: '/assets/aistudio/image_ad4ddb3c.png',
        title: 'Prophetic Lineage & Ahl al-Bayt Tree',
        module: 'Seerah',
        caption: 'Interactive family tree of Prophet Muhammad (SAW) detailing Ummahat al-Mu’minin, children, and Ahl al-Bayt.',
        alt: 'Zikr+ Prophetic Lineage and Ahl al-Bayt tree screen',
      },
    ],
  },
  {
    id: 'bangla-toolkit-byakaron',
    index: '02',
    title: 'Bangla Toolkit — Byakaron',
    subtitle: 'Artificial Intelligence · NLP · Research',
    category: 'ml-research',
    categoryLabel: 'ML & Research',
    tagline: 'Real-Time Bangla Spelling & Grammar Intelligence',
    summary:
      'A Bangla grammar and spelling correction system powered by Natural Language Processing, transformer-based language models, phonetic transliteration, and token classification.',
    coreModules: [
      { name: 'Spell Checker', purpose: 'Real-time Bangla word error detection with phonetic & dictionary candidates' },
      { name: 'Grammar Mode', purpose: 'Contextual sentence-level grammatical error detection and correction' },
      { name: 'Confidence Scoring', purpose: 'Corpus-frequency ranking (54.2K+ usage) with percentage match rings' },
      { name: 'Bilingual Toolkit', purpose: 'Integrated web editor (app.bntk.xyz), platform portal & API docs' },
    ],
    highlights: [
      'Built a real-time Bangla spelling and grammar correction engine detecting phonetic typos, missing diacritics, and structural errors across full paragraphs.',
      'Explored transformer-based language models, token classification, and corpus-frequency confidence scoring for ranked candidate suggestions.',
      'Delivered an interactive dark/light web editor (app.bntk.xyz) with word-count diagnostics, rare-word flags, and click-to-replace correction popovers.',
      'Outperformed standard baseline checkers on complex multi-error Bengali sentences through phonetic + linguistic dataset training.',
    ],
    architectureNotes: [
      'Low-resource Bangla NLP pipeline combining phonetic transliteration matching, corpus usage frequency scoring, and transformer token classification.',
      'Split ecosystem across byakaron.com (platform showcase), app.bntk.xyz (interactive checker), and docs.bntk.xyz (developer documentation).',
    ],
    stack: ['Python', 'Bangla NLP', 'Transformers', 'Token Classification', 'Web App'],
    links: [
      { label: 'Live', url: 'https://byakaron.com/' },
      { label: 'Application', url: 'https://app.bntk.xyz/' },
      { label: 'Documentation', url: 'https://docs.bntk.xyz/' },
    ],
    featured: true,
    image: '/assets/aistudio/image_4c039e55.png',
    imageAlt: 'Byakaron Bangla grammar and spelling correction interface',
    gallery: [
      {
        src: '/assets/aistudio/image_4c039e55.png',
        title: 'Inline Bangla Correction Popover',
        module: 'Editor',
        caption: 'Clean inline spell-correction popover highlighting misspelled Bengali words with instant one-click replacement.',
        alt: 'Byakaron inline Bangla correction popover interface',
      },
      {
        src: '/assets/aistudio/image_58f1f505.png',
        title: 'Multi-Word Spell Checker (app.bntk.xyz)',
        module: 'Spell Checker',
        caption: 'Detects 6 spelling errors across a 13-word Bengali passage and surfaces ranked phonetic & dictionary suggestions.',
        alt: 'Byakaron multi-word spell checker in dark mode showing 6 detected errors',
      },
      {
        src: '/assets/aistudio/image_476d73c4.png',
        title: 'Full-Sentence Phonetic & Error Detection',
        module: 'NLP Engine',
        caption: 'Identifies 8 out of 8 phonetic and orthographic errors in real time with grouped candidate cards.',
        alt: 'Byakaron full-sentence error detection showing 8 flagged words and suggestions',
      },
      {
        src: '/assets/aistudio/image_6b286b19.png',
        title: 'Confidence-Scored Suggestion Modal',
        module: 'Scoring',
        caption: 'Detailed modal displaying corpus frequency counts (54.2K usage) and percentage confidence rings (90% match).',
        alt: 'Byakaron confidence-scored correction modal with percentage rings',
      },
      {
        src: '/assets/aistudio/image_287055b4.png',
        title: 'Accuracy Comparison vs Baseline',
        module: 'Benchmark',
        caption: 'Side-by-side comparison on challenging Bengali text demonstrating complete error coverage in app.bntk.xyz.',
        alt: 'Side-by-side comparison of Byakaron against a baseline Bangla spell checker',
      },
    ],
  },
  {
    id: 'stock-analysis-agent',
    index: '03',
    title: 'Stock Analysis Agent',
    subtitle: 'n8n · AI Agents · Telegram Bot',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    tagline: 'Autonomous Multi-Agent Stock & Chart Analysis via Telegram',
    summary:
      'An intelligent Telegram-powered stock analysis agent (MurparBot) built in n8n at Robo Tech Valley, orchestrating LLMs, conversational session memory, live Chart-IMG candlestick rendering, and OpenAI Vision chart interpretation.',
    coreModules: [
      { name: 'Telegram Interface', purpose: 'Webhook trigger & automated text/photo delivery via MurparBot' },
      { name: 'AI Agent & Memory', purpose: 'LangChain agent with Gemini / GPT-5 mini and 10-turn chat memory' },
      { name: 'Chart-IMG Sub-Flow', purpose: 'Sub-workflow HTTP pipeline rendering SMA 9, Volume & MACD charts' },
      { name: 'Vision Interpretation', purpose: 'OpenAI Analyze Image extracts technical insights from generated charts' },
    ],
    highlights: [
      'Designed a dual-workflow n8n architecture separating the conversational Telegram AI Agent from an on-demand Chart-IMG + OpenAI Vision technical analysis sub-workflow.',
      'Configured structured financial analysis SOP prompting with Google Gemini and OpenAI GPT-5 mini plus per-chat Simple Memory (10-message context window).',
      'Integrated Chart-IMG API requests to generate TradingView-style candlestick charts with SMA 9, Volume, and MACD indicators for tickers like AAPL and AMZN.',
      'Automated multimodal responses streaming both live chart graphics (sendPhoto) and synthesized commentary (sendMessage) back to Telegram.',
    ],
    architectureNotes: [
      'Event-driven Telegram Trigger routes incoming stock ticker messages to an n8n AI Agent tool-calling loop with custom Gat Chart sub-workflow execution.',
      'Sub-workflow chains Execute Workflow -> Edit Fields -> Chart-IMG HTTP POST -> OpenAI Analyze Image -> Telegram Send Photo -> structured response mapping.',
    ],
    stack: ['n8n', 'AI Agents', 'OpenAI GPT-5 mini & Vision', 'Google Gemini', 'Chart-IMG API', 'Telegram Bot API'],
    links: [],
    featured: true,
    image: '/assets/aistudio/Screenshot_2026-04-23_235417_48a3ee66.png',
    imageAlt: 'Stock Analysis Agent full n8n workflow and sub-workflow automation canvas',
    gallery: [
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235417_48a3ee66.png',
        title: 'Multi-Agent & Sub-Workflow Architecture',
        module: 'n8n Canvas',
        caption: 'End-to-end n8n pipeline connecting Telegram Trigger, AI Agent (LLM, Simple Memory, Gat Chart tool), Chart-IMG HTTP API, and OpenAI Vision image analysis.',
        alt: 'Stock Analysis Agent n8n full workflow canvas',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235517_b12716be.png',
        title: 'Telegram Webhook Trigger & Ticker Input',
        module: 'Trigger',
        caption: 'Captures incoming stock ticker messages (e.g., AAPL) from Telegram users along with chat and sender metadata.',
        alt: 'n8n Telegram Trigger node parameters and JSON output',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235559_90610bb1.png',
        title: 'AI Agent Prompting & Financial SOP',
        module: 'AI Agent',
        caption: 'Routes user queries via $json.message.text and enforces a structured financial analysis SOP to invoke GetChart and explain indicators clearly.',
        alt: 'n8n AI Agent system message SOP configuration',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235621_d9b8d89d.png',
        title: 'OpenAI GPT-5 mini Chat Model',
        module: 'LLM Engine',
        caption: 'Powers conversational market synthesis, technical concept explanations, and tool invocation with tracked token usage.',
        alt: 'n8n OpenAI Chat Model gpt-5-mini configuration and token usage output',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235701_7e16a9ae.png',
        title: 'Per-Session Simple Memory Context',
        module: 'Memory',
        caption: 'Maintains a 10-turn LangChain chat history keyed by Telegram chat ID for coherent multi-turn stock follow-ups.',
        alt: 'n8n Simple Memory node storing chat history per session ID',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235721_bcf8a51f.png',
        title: 'Gat Chart Sub-Workflow Tool Binding',
        module: 'Tool Call',
        caption: 'Connects the AI Agent to the dedicated charting sub-workflow with explicit markdown image URL formatting instructions.',
        alt: 'n8n Gat Chart tool node parameters and schema mapping',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235818_a63202d7.png',
        title: 'Sub-Workflow Execute Trigger',
        module: 'Sub-Flow',
        caption: 'Receives ticker parameters (e.g., query: AAPL) from the main AI Agent to trigger live technical chart generation.',
        alt: 'n8n Execute Workflow sub-workflow trigger input',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235850_558e3b0d.png',
        title: 'Chart-IMG Visual Delivery via Telegram',
        module: 'Send Photo',
        caption: 'Streams the rendered candlestick chart URL from HTTP Request1 directly back to the user chat as a Telegram photo message.',
        alt: 'n8n Telegram Send Photo node configuration',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235901_574decea.png',
        title: 'OpenAI Vision Chart Analysis Mapping',
        module: 'Vision AI',
        caption: 'Maps OpenAI Analyze Image vision insights into a structured response string returned to the primary AI Agent.',
        alt: 'n8n Edit Fields1 response mapping from OpenAI Analyze Image',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-23_235735_ca28d54d.png',
        title: 'Automated Telegram Text Response',
        module: 'Delivery',
        caption: 'Dispatches synthesized technical commentary and timeframe/indicator options from MurparBot back to the user.',
        alt: 'n8n Telegram Send Message node output from MurparBot',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_003240_5d93fb91.png',
        title: 'Live MurparBot Demo — AAPL Chart & Prompting',
        module: 'AAPL Demo',
        caption: 'Live Telegram session for AAPL displaying interactive analysis options alongside a weekly NASDAQ candlestick chart with Volume SMA 9 and MACD.',
        alt: 'Telegram MurparBot live response and AAPL candlestick chart with MACD',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_003300_b38ec6c1.png',
        title: 'Live MurparBot Demo — AMZN Multi-Ticker Flow',
        module: 'AMZN Demo',
        caption: 'Multi-ticker bot interaction offering timeframe selection, SMA/RSI/MACD technical summaries, fundamentals, and chart rendering.',
        alt: 'Telegram MurparBot live response for AMZN ticker with technical chart',
      },
    ],
  },
  {
    id: 'green-campus',
    index: '04',
    title: 'Green Campus — Green University of Bangladesh',
    subtitle: 'Next.js · Node.js · Prisma · PostgreSQL',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    tagline: 'Connecting Knowledge, People, and Innovation — Campus Super App',
    summary:
      'A unified full-stack campus super app built for Green University of Bangladesh (CSE IDP-II) integrating class schedules, pre-registration, cafeteria ordering, live bus GPS tracking, campus maps, community events, and emergency SOS alerts.',
    coreModules: [
      { name: 'Academics & Schedules', purpose: 'Academic calendar, class routines, assignments & course tracking' },
      { name: 'Cafeteria & Pre-Orders', purpose: 'Daily menu browsing, item availability, pre-ordering & live queue' },
      { name: 'Transport & Campus Map', purpose: 'Live bus GPS telemetry, stop sequences & interactive campus navigation' },
      { name: 'Community & Safety', purpose: 'Clubs, events RSVP, campus reports, messaging & SOS panic alerts' },
    ],
    highlights: [
      'Built a full-stack university platform with Next.js, Tailwind CSS, Shadcn/ui, Node.js, Supabase, Prisma ORM, and PostgreSQL.',
      'Architected an 18+ table relational PostgreSQL schema covering users, schedules, cafeteria orders, live bus telemetry, clubs, and SOS alerts.',
      'Shipped 12 interactive views including Auth, Academic Calendar, Today’s Menu & Pre-Order, Live Bus Tracking, Campus Map, Reports, and Emergency Response.',
      'Validated end-to-end workflows across authentication, portal/notice scraping, virtual campus card transactions, and community forums.',
    ],
    architectureNotes: [
      'Frontend powered by Next.js, Tailwind CSS, and Shadcn/ui for responsive cross-device workflows on Web, iOS, and Android viewports.',
      'Backend built on Node.js, Supabase, and Prisma ORM managing relational PostgreSQL entities and real-time transport/order telemetry.',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'Supabase', 'Vercel'],
    links: [
      { label: 'Live', url: 'https://green-thunder.vercel.app/' },
      { label: 'IDP-II Poster (PDF)', url: '/assets/aistudio/green-campus-idp2_fa1f4f49.pdf' },
    ],
    featured: true,
    image: '/assets/aistudio/image_524d7dc5.png',
    imageAlt: 'Green Campus brand banner — Connecting Knowledge, People, and Innovation',
    gallery: [
      {
        src: '/assets/aistudio/image_524d7dc5.png',
        title: 'Green Campus — Brand Identity & Vision',
        module: 'Brand',
        caption: 'Unified campus companion built at Green University of Bangladesh: Connecting Knowledge, People, and Innovation.',
        alt: 'Green Campus logo and slogan on grid background',
      },
      {
        src: '/assets/green-campus-implementation.png',
        title: 'Implemented Application Views (12 Modules)',
        module: 'UI Screens',
        caption: 'Auth, Academic Calendar, Today’s Menu & Pre-Order, My Orders, Live Bus Tracking, Class Schedule, All Events, Campus Map, Reports, and Emergency Response.',
        alt: 'Green Campus 12 implemented UI screens grid',
      },
      {
        src: '/assets/green-campus-backend-flow.png',
        title: 'Backend Module & Scraper Architecture',
        module: 'Backend Flow',
        caption: 'Six modular backend flows covering User Auth, Routine Viewer, Notice Scraper, Event/Portal Scraper, Core Features (Virtual Campus Card), and Community Forum.',
        alt: 'Green Campus six-module backend flowchart diagram',
      },
      {
        src: '/assets/aistudio/green-campus-db-erd_3e69e37a.png',
        title: 'PostgreSQL & Prisma Database Schema (ERD)',
        module: 'Database ERD',
        caption: 'Relational schema connecting users, classSchedules, assignments, clubs, events, menuItems, orders, busRoutes/busSchedule telemetry, reports, and panicAlerts.',
        alt: 'Green Campus full relational database ER diagram',
      },
      {
        src: '/assets/green-campus-poster.png',
        title: 'CSE IDP-II Research & System Poster',
        module: 'IDP-II Poster',
        caption: 'Complete Green University of Bangladesh CSE capstone documentation detailing Problem Domain, Requirements, SDLC Comparison, Test Cases, and Social Impact.',
        alt: 'Green Campus full IDP-II academic poster',
      },
    ],
  },
  {
    id: 'automated-resume-builder',
    index: '05',
    title: 'Automated Resume Builder',
    subtitle: 'n8n · Gemini AI · HTML-to-PDF · Gmail',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    tagline: 'End-to-End SaaS AI Resume Generator & PDF Delivery Pipeline',
    summary:
      'A SaaS resume builder workflow in n8n (developed at Robo Tech Valley) that ingests user form data and uploaded CV documents, extracts structured profiles via Gemini 2.5 Flash, generates ATS-friendly HTML resumes, converts them to PDF, and delivers them via Gmail.',
    coreModules: [
      { name: 'Form Intake', purpose: 'Web form collecting candidate details and uploaded Profile_Summary PDFs' },
      { name: 'Gemini Extraction', purpose: 'Gemini 2.5 Flash parses uploaded CV files into structured profile summaries' },
      { name: 'HTML Resume Agent', purpose: 'AI Agent with session memory generates responsive inline-CSS ATS HTML' },
      { name: 'PDF & Gmail Delivery', purpose: 'HTML-to-PDF conversion renders document.pdf and emails it automatically' },
    ],
    highlights: [
      'Built an end-to-end n8n SaaS workflow turning candidate form inputs and uploaded PDFs into ATS-ready resumes.',
      'Automated Gemini 2.5 Flash profile extraction, HTML template synthesis, PDF rendering, and Gmail OAuth2 delivery.',
      'Integrated per-email Simple Memory (10-turn context window) and strict inline-CSS HTML rules for clean wkhtmltopdf/Puppeteer rendering.',
      'Delivered polished multi-page PDF resumes featuring structured Summary, Experience, Education, Skills, and Projects sections.',
    ],
    architectureNotes: [
      'Form Trigger captures Full Name, Job Title, contact metadata, and binary PDF attachment before routing to Gemini Analyze Image.',
      'AI Agent synthesizes ATS-compliant HTML into Convert HTML to PDF (1056x816 viewport) and attaches document.pdf in Gmail Send Message.',
    ],
    stack: ['n8n', 'Google Gemini 2.5 Flash', 'AI Agents', 'HTML to PDF', 'Gmail OAuth2', 'LangChain Memory'],
    links: [],
    featured: true,
    image: '/assets/aistudio/Screenshot_2026-04-24_004113_33eb9475.png',
    imageAlt: 'Automated Resume Builder n8n workflow canvas from Form Trigger to Gmail PDF delivery',
    gallery: [
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004113_33eb9475.png',
        title: 'End-to-End SaaS Resume Workflow',
        module: 'n8n Canvas',
        caption: 'Orchestrates n8n Form Trigger, Gemini document analysis, AI Agent with Simple Memory, HTML-to-PDF conversion, and Gmail delivery.',
        alt: 'Automated Resume Builder n8n full workflow canvas',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004554_e477eeaf.png',
        title: 'SAAS Resume Builder Form Intake',
        module: 'Form Trigger',
        caption: 'Collects candidate fields (Full Name, Job Title, contact info) alongside uploaded Profile_Summary PDF files (259 kB).',
        alt: 'n8n Form Trigger parameters for SAAS Resume Builder',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004606_691fba27.png',
        title: 'Gemini 2.5 Flash Document Extraction',
        module: 'Extraction',
        caption: 'Analyzes uploaded binary CV/resume files and extracts structured contact details, skills, and career history.',
        alt: 'n8n Gemini Analyze an image node extracting resume details',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004618_109543f9.png',
        title: 'AI Agent Prompting & ATS Template SOP',
        module: 'AI Agent',
        caption: 'Combines form submissions with extracted profile data under a Professional Resume Template Generator system prompt.',
        alt: 'n8n AI Agent prompt mapping and system message configuration',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004629_870e9b41.png',
        title: 'Google Gemini Chat Model Generation',
        module: 'HTML Engine',
        caption: 'Enforces self-contained inline/style CSS rules and generates clean ATS-ready HTML markup (9,877 tokens processed).',
        alt: 'Google Gemini Chat Model generating HTML resume output',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004640_f95da5c9.png',
        title: 'Email-Keyed Simple Memory Context',
        module: 'Memory',
        caption: 'Maintains a 10-interaction LangChain history keyed by user Email for consistent multi-pass resume revisions.',
        alt: 'n8n Simple Memory storing chat history by candidate email',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004653_d1537238.png',
        title: 'HTML to PDF Rendering Pipeline',
        module: 'PDF Engine',
        caption: 'Converts generated HTML output into a crisp 138 kB downloadable document.pdf using a 1056x816 print viewport.',
        alt: 'n8n Convert HTML to PDF node output showing document.pdf',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_004703_33ea89c8.png',
        title: 'Automated Gmail OAuth2 Delivery',
        module: 'Gmail',
        caption: 'Emails a formatted HTML confirmation message with the finished document.pdf automatically attached to the user.',
        alt: 'n8n Gmail OAuth2 Send Message node with PDF attachment',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-04-24_005420_65dc911b.png',
        title: 'Generated 2-Page ATS PDF Resume Output',
        module: 'PDF Output',
        caption: 'Final rendered two-page resume with clean typography, Summary, Experience, Education, Skills tags, and Projects.',
        alt: 'Final generated two-page ATS-friendly PDF resume output',
      },
    ],
  },
  {
    id: 'spsb-executive-platform',
    index: '06',
    title: 'SPSB Executive Team Platform',
    subtitle: 'Next.js · Organizational Directory · Community',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    tagline: 'Executive, Volunteer & Mentor Directory with Golden Memories',
    summary:
      'Centralized leadership, volunteer, and mentor directory built for the Society for the Popularization of Science, Bangladesh (SPSB) and BdJSO operations, highlighting 10 core organizing secretaries, 48+ volunteers and mentors, and an interactive Golden Memories gallery.',
    coreModules: [
      { name: 'Organizing Secretary', purpose: 'Advisor and 10 Core Team member cards with roles and portraits' },
      { name: 'Volunteers & Mentors', purpose: 'Searchable-style 3-column directory featuring 48 active contributors' },
      { name: 'Golden Memories', purpose: 'Curated community photo strip preserving camps and outreach moments' },
      { name: 'Responsive Portal', purpose: 'Fast Vercel-hosted web experience celebrating SPSB team identity' },
    ],
    highlights: [
      'Designed and developed a centralized digital platform showcasing 10 Organizing Secretaries, advisors, and 48 volunteers and mentors.',
      'Built clean multi-column member cards with role badges, portrait photography, and subtle SPSB typography watermarks.',
      'Implemented the Our Golden Memory photo gallery capturing nationwide science outreach and Olympiad organizing moments.',
      'Deployed to production on Vercel for fast community sharing and organizational transparency.',
    ],
    architectureNotes: [
      'Structured component hierarchy separating executive Core Team leadership tiers from the 48-member Volunteers & Mentors grid.',
      'Optimized image card framing and responsive breakpoints in Next.js for mobile and desktop team browsing.',
    ],
    stack: ['JavaScript', 'Next.js', 'Responsive UI', 'Vercel'],
    links: [{ label: 'Live', url: 'https://spsb-bdjso-executivepage.vercel.app/' }],
    featured: true,
    image: '/assets/aistudio/image_cffa3e99.png',
    imageAlt: 'SPSB Executive Team Platform Organizing Secretary and Core Team directory cards',
    gallery: [
      {
        src: '/assets/aistudio/image_cffa3e99.png',
        title: 'Organizing Secretary & Core Team (10 Members)',
        module: 'Core Team',
        caption: 'Leadership grid spotlighting SPSB Advisors and Core Team Organizing Secretaries with clean portrait cards over a subtle SPSB backdrop.',
        alt: 'SPSB Organizing Secretary and Core Team member cards',
      },
      {
        src: '/assets/aistudio/image_617a3d5c.png',
        title: 'Volunteers & Mentors Directory (48 Contributors)',
        module: 'Volunteers',
        caption: 'Structured 3-column directory recognizing 48 active volunteers and mentors across SPSB science popularization programs.',
        alt: 'SPSB Volunteers and Mentors 48-member grid',
      },
      {
        src: '/assets/aistudio/image_3ac10ebb.png',
        title: 'Community Directory & Our Golden Memory',
        module: 'Memories',
        caption: 'Extended volunteer roster flowing into the Our Golden Memory showcase of science camps, workshops, and team milestones.',
        alt: 'SPSB volunteer directory and Golden Memory photo gallery',
      },
    ],
  },
  {
    id: 'rdcs-corporate-website',
    index: '07',
    title: 'RDCS — Corporate Website Development',
    subtitle: 'WordPress · Elementor · UI/UX Architecture',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    tagline: 'Research Consultancy, Academic Training & Team Portal',
    summary:
      'Complete corporate web platform built for Research & Development Consultancy for Society (RDCS) at rdcsfirm.com, presenting socio-economic research services, academic training courses, multi-tier advisory and staff directories, case studies, and client contact workflows.',
    coreModules: [
      { name: 'Corporate Identity & Hero', purpose: 'Teal-and-coral institutional landing experience with sticky navigation' },
      { name: 'Services & Flip Cards', purpose: 'Interactive consultancy, research training, and Kobo/ODK/SPSS service showcase' },
      { name: 'Leadership & Staff', purpose: 'Advisory Council, Executive Directors, Consultants, and Research Staff cards' },
      { name: 'Projects & Publications', purpose: 'Strategy portfolio grid, recent news updates, and Dhaka office footer' },
    ],
    highlights: [
      'Designed and built the complete corporate website for Research & Development Consultancy for Society (RDCS) on WordPress and Elementor.',
      'Crafted interactive service pillars, KPI stat cards (20+ projects, 100+ students, 25+ clients, 35+ awards), and multi-tier leadership profiles.',
      'Structured hover-reveal team cards across Advisory Council, Executive Directors, Panel of Consultants, and Administrative & Research Staff.',
      'Configured custom branding, Hostinger production deployment, SEO-ready page sections, and direct client consultation flows.',
    ],
    architectureNotes: [
      'Modular Elementor section system balancing visual brand consistency with easy non-technical content updates for publications and courses.',
      'Responsive multi-page layout uniting Home, About, Executives, Service, Contact, and Blogs under a cohesive design system.',
    ],
    stack: ['WordPress', 'Elementor', 'UI/UX Architecture', 'Hostinger'],
    links: [{ label: 'Live', url: 'https://rdcsfirm.com/' }],
    featured: true,
    image: '/assets/aistudio/image_57b15be3.png',
    imageAlt: 'RDCS Corporate Website homepage hero section on rdcsfirm.com',
    gallery: [
      {
        src: '/assets/aistudio/image_57b15be3.png',
        title: 'Homepage Hero & Institutional Identity',
        module: 'Hero',
        caption: 'Primary landing view of rdcsfirm.com introducing Research & Development Consultancy for Society with custom branding and top navigation.',
        alt: 'RDCS website homepage hero section',
      },
      {
        src: '/assets/aistudio/image_319295d0.png',
        title: 'Impact KPIs & Mission Statement',
        module: 'Metrics',
        caption: 'Who Are We section showcasing socio-economic research mission alongside key impact cards and environmental research visuals.',
        alt: 'RDCS impact metrics and mission statement section',
      },
      {
        src: '/assets/aistudio/image_1713e921.png',
        title: 'Our Uniqueness & Consultancy Pillars',
        module: 'Pillars',
        caption: 'Four-pillar capability layout detailing Advisory Board mentorship, Ethical Research, Practical Learning, and End-to-End Solutions.',
        alt: 'RDCS Uniqueness and four consultancy pillars section',
      },
      {
        src: '/assets/aistudio/image_c7341b7b.png',
        title: 'Interactive Service Showcase',
        module: 'Services',
        caption: 'Interactive 3D cards highlighting Development Consultancy, Professional Training Courses, and KoboToolbox/ODK/SPSS Data Collection.',
        alt: 'RDCS Services interactive showcase section',
      },
      {
        src: '/assets/aistudio/image_566f5f2a.png',
        title: 'RDCS Advisory Council Profiles',
        module: 'Advisory',
        caption: 'Multi-column leadership cards spotlighting Chief Academic Advisor (BUET), Policy Advisor, and Institutional Advisors.',
        alt: 'RDCS Advisory Council profile cards',
      },
      {
        src: '/assets/aistudio/image_71e5fc62.png',
        title: 'Executive Directors & Panel of Consultants',
        module: 'Consultants',
        caption: 'Executive leadership and interdisciplinary academic consultant roster with interactive portrait hover states.',
        alt: 'RDCS Executive Directors and Panel of Consultants directory',
      },
      {
        src: '/assets/aistudio/image_4e1ea788.png',
        title: 'Administrative & Research Staff Directory',
        module: 'Staff',
        caption: 'Research Associates, Program Coordinators, and Admin, HR & IT Officer team profiles across RDCS operations.',
        alt: 'RDCS Administrative and Research Staff directory',
      },
      {
        src: '/assets/aistudio/image_34adc558.png',
        title: 'Projects Grid, Recent News & Corporate Footer',
        module: 'Footer',
        caption: 'Featured strategy engagements, latest RDCS publication links, contact channels, and Lalbagh Dhaka office details.',
        alt: 'RDCS projects grid, recent news, and corporate footer',
      },
    ],
  },
];

export const RESEARCH_AREAS = [
  {
    index: '01',
    title: 'Bangla Natural Language Processing & Grammatical Error Correction',
    description:
      'Advancing automated linguistic tooling for low-resource Bengali text through transformer architectures and token-level classification.',
    focusPoints: [
      'Bangla grammatical error detection and correction.',
      'Automated spelling correction.',
      'Low-resource language processing.',
      'Transformer-based language models.',
      'Token classification and Bangla NLP.',
    ],
  },
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    id: 'bdjso',
    role: 'Team Lead',
    organization: 'Bangladesh Junior Science Olympiad (BdJSO)',
    period: '2025',
    highlights: [
      'Led and coordinated organizational activities for the Bangladesh Junior Science Olympiad.',
      'Contributed to technical operations, volunteer management, communication, and event coordination.',
      'Participated in question preparation and question selection.',
      'Supported national-level science education and student engagement initiatives.',
    ],
  },
  {
    id: 'spsb',
    role: 'Advisor & Lifetime Member',
    organization: 'Society for the Popularization of Science, Bangladesh (SPSB)',
    period: '2022 – Present',
    highlights: [
      'Serving as Advisor and Lifetime Member supporting national science popularization and educational strategy.',
      'Guided technical operations, HR, volunteer coordination, judging, and event management.',
      'Developed digital platforms and organizational infrastructure including the SPSB Executive Team Platform.',
      'Mentored teams and promoted science education and youth engagement initiatives.',
    ],
  },
  {
    id: 'bdosn',
    role: 'Mentor',
    organization: 'Bangladesh Open Source Network (BdOSN)',
    period: 'Community Mentorship',
    highlights: [
      'Mentored students in STEM education, Scratch programming, computational thinking, and robotics.',
      'Guided youth technology workshops, hands-on coding sessions, and practical problem-solving.',
      'Supported student skill development and educational outreach initiatives across BdOSN programs.',
    ],
  },
];

export const EXTRACURRICULARS: ExtracurricularTrack[] = [
  {
    id: 'stem-mentor',
    title: 'STEM & Programming Mentor',
    points: [
      'Mentored students in Scratch programming, computational thinking, and introductory technology education.',
      'Supported programming and science olympiad preparation activities.',
      'Contributed to educational workshops and student engagement.',
    ],
  },
  {
    id: 'competition-organizer',
    title: 'Science & Technology Competition Organizer',
    points: [
      'Participated in organizing science and technology competitions.',
      'Contributed to event planning, technical operations, question preparation, and volunteer coordination.',
      'Supported science and technology education initiatives for students.',
    ],
  },
  {
    id: 'org-dev',
    title: 'Technical & Organizational Development',
    points: [
      'Developed websites and digital platforms for educational and nonprofit organizations.',
      'Supported digital transformation and technology adoption in organizational activities.',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'web-frontend',
    title: 'Web & Frontend Development',
    items: [
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
      'WordPress',
      'Elementor',
      'PWA',
    ],
  },
  {
    id: 'backend-databases',
    title: 'Backend & Databases',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MySQL (Basic)',
      'MongoDB (Basic)',
      'Firebase',
      'IndexedDB',
      'Vercel',
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    id: 'automation',
    title: 'AI & Workflow Automation',
    items: [
      'n8n',
      'AI Agents',
      'Workflow Automation',
      'API Integration',
      'HTML-to-PDF Pipelines',
    ],
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & NLP',
    items: [
      'Machine Learning',
      'Bangla NLP',
      'Grammatical Error Correction',
      'Classification',
      'Scikit-learn',
      'Pandas',
      'NumPy',
    ],
  },
  {
    id: 'tools-leadership',
    title: 'Tools & Leadership',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Kaggle',
      'Technical Leadership',
      'Project Management',
      'Mentorship',
    ],
  },
];
