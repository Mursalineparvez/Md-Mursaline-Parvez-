export type ProjectCategory = 'all' | 'ai-automation' | 'web-platforms' | 'ml-research';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectGalleryItem {
  src: string;
  caption: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  summary: string;
  highlights: string[];
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
  role: 'Software Engineer | AI & Automation Engineer | Machine Learning Enthusiast',
  location: 'Dhaka, Bangladesh',
  phone: '01567963471',
  email: 'mdmursalineparvez@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mursalineparvez/',
  github: 'https://github.com/Mursalineparvez',
  kaggle: 'https://www.kaggle.com/mdmursalineparvez',
  portrait: '/assets/mursaline-portrait-nobg.png',
  education: {
    degree: 'Bachelor of Science (B.Sc.) in Computer Science and Engineering',
    institution: 'Green University of Bangladesh',
    location: 'Dhaka, Bangladesh',
  },
  summary:
    'Computer Science and Engineering graduate from Green University of Bangladesh with approximately four years of experience in JavaScript development and practical experience in software engineering, AI-driven automation, and machine learning. Experienced in developing web applications, intelligent automation workflows, AI agents, and digital platforms using modern technologies.',
  researchSummary:
    'Worked on AI-powered automation solutions at Robo Tech Valley, including Stock Analysis Agent and Automated Resume Builder. Research interests include Bangla Natural Language Processing (NLP), grammatical error correction, machine learning, and cybersecurity. Actively involved in STEM education, programming mentorship, science olympiad organization, and technology-driven community initiatives through SPSB, BdJSO, and BdOSN.',
};

export const KEY_METRICS = [
  {
    value: '~4 Years',
    label: 'JavaScript & Web Engineering',
  },
  {
    value: '7',
    label: 'Shipped Apps, Agents & Platforms',
  },
  {
    value: '92%',
    label: 'Malicious URL ML Accuracy (10k URLs)',
  },
  {
    value: '2022–Present',
    label: 'National STEM & Olympiad Leadership',
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 'robo-tech-valley',
    role: 'Automation Expert',
    company: 'Robo Tech Valley',
    type: 'Project-Based Engagement',
    highlights: [
      'Developed and implemented AI-powered automation workflows using n8n.',
      'Integrated APIs and automated business processes to improve workflow efficiency.',
      'Contributed to the development of Stock Analysis Agent and Automated Resume Builder.',
      'Explored practical applications of AI agents and intelligent automation systems.',
      'Worked on project implementation and technical delivery.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zikr-plus',
    index: '01',
    title: 'Zikr+ — Digital Zikr & Amal PWA',
    subtitle: 'Progressive Web App · Product Development',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    summary:
      'An offline-ready Digital Zikr, Tasbeeh, and complete Daily Amal Progressive Web App ("Your Dhikr. Pure Peace") featuring individual counters, master circular progress, Quran reader, Adhan prayer times, Hisnul Muslim duas, and Muhasabah PDF exports.',
    highlights: [
      'Built a digital Tasbih counter with individual Zikr tallies, master circular progress total, haptic touch feedback, and offline local persistence.',
      'Implemented a complete Daily Amal & Salah (Muhasabah) tracker covering Fajr, Dhuhr, Jumu’ah, Asr, Maghrib, and Isha (Fardh, Sunnah, Nafl) with history timeline and PDF export.',
      'Integrated an Al-Quran reader with Arabic scripts (Amiri Quran, Noto Naskh Arabic, Scheherazade New), English and Bangla translations, and Tilawah tracking.',
      'Added Hadith & Sunnah collections, Hisnul Muslim morning/evening Adhkar, and 99 Names (Asmaul Husna) recitation tracking.',
      'Engineered location-based Adhan prayer schedules, Prayer Guide, Qibla direction, bilingual English/Bangla interface, and an integrated Zikr+ assistant.',
    ],
    stack: ['React', 'PWA', 'Adhan Engine', 'Bilingual UI (EN/BN)', 'Offline Persistence', 'PDF Export', 'Vercel'],
    links: [
      { label: 'Live PWA', url: 'https://zikr-mate.vercel.app/' },
      { label: 'AI Studio App', url: 'https://ai.studio/apps/c77b9532-6dfd-4adb-ae14-480a02ae6ca1' },
    ],
    featured: true,
    flagship: true,
    image: '/src/assets/images/zikrplus_tasbih_amal_1795497804487.jpg',
    imageAlt: 'Zikr+ Tasbih circular counter and Daily Amal Salah tracker screens',
    gallery: [
      {
        src: '/src/assets/images/zikrplus_tasbih_amal_1795497804487.jpg',
        caption: 'Tasbih Circular Counter & Daily Amal Salah Tracker',
        alt: 'Zikr+ digital Tasbih counter and Daily Amal prayer checklist UI',
      },
      {
        src: '/src/assets/images/zikrplus_quran_duas_1795497804989.jpg',
        caption: 'Al-Quran Reader, Hadith & 99 Names (Asmaul Husna)',
        alt: 'Zikr+ Al-Quran Arabic reader with English and Bengali translations alongside Hisnul Muslim Duas',
      },
      {
        src: '/src/assets/images/zikrplus_prayer_pwa_1795497804954.jpg',
        caption: 'Adhan Prayer Times, Qibla Compass, Chatbot & PDF Export',
        alt: 'Zikr+ Adhan prayer schedule, Qibla compass, Muhasabah timeline, and PDF export report',
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
    summary:
      'A Bangla grammar and spelling correction system powered by Natural Language Processing, transformer-based language models, and token classification.',
    highlights: [
      'Worked on a Bangla grammar and spelling correction system using Natural Language Processing.',
      'Explored transformer-based language models and token classification approaches.',
      'Focused on grammatical error detection and automated spelling correction.',
      'Worked with Bangla linguistic datasets and low-resource language processing techniques.',
    ],
    stack: ['Python', 'Bangla NLP', 'Transformers', 'Token Classification'],
    links: [
      { label: 'Live', url: 'https://byakaron.com/' },
      { label: 'Application', url: 'https://app.bntk.xyz/' },
      { label: 'Documentation', url: 'https://docs.bntk.xyz/' },
    ],
    featured: true,
    image: '/assets/aistudio/image_4c039e55.png',
    imageAlt: 'Byakaron Bangla grammar and spelling correction interface',
  },
  {
    id: 'stock-analysis-agent',
    index: '03',
    title: 'Stock Analysis Agent',
    subtitle: 'AI Agents · Workflow Automation',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    summary:
      'An intelligent stock analysis agent built at Robo Tech Valley combining AI-driven analytical workflows and multi-step process automation.',
    highlights: [
      'Contributed to the development of an intelligent stock analysis agent.',
      'Explored AI-driven workflows and automation for financial data analysis.',
      'Worked on integrating intelligent automation into analytical processes.',
    ],
    stack: ['n8n', 'AI Agents', 'API Integration', 'Workflow Automation'],
    links: [],
    featured: true,
    image: '/src/assets/images/project_automation_agents_1795496098809.jpg',
    imageAlt: 'Isometric AI workflow automation nodes and stock analytics pipeline',
  },
  {
    id: 'green-campus',
    index: '04',
    title: 'Green Campus — Green University of Bangladesh',
    subtitle: 'Full-Stack Development · Mobile Application',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    summary:
      'A unified digital university platform streamlining class routines, notices, pre-registration, virtual student ID cards, campus maps, and canteen queues.',
    highlights: [
      'Developed a digital university platform to improve student access to academic and campus services.',
      'Implemented class routines, notices, push notifications, pre-registration, campus maps, virtual student ID cards, and canteen queue functionality.',
      'Worked on Java-based Android development and web-based functionality.',
      'Focused on improving campus communication and student experience.',
    ],
    stack: ['Java', 'Android', 'Web Application', 'Vercel'],
    links: [{ label: 'Live', url: 'https://green-thunder.vercel.app/' }],
    featured: true,
    image: '/src/assets/images/project_campus_platform_1795496098575.jpg',
    imageAlt: 'Green Campus university schedule and virtual student ID platform on laptop and mobile',
  },
  {
    id: 'automated-resume-builder',
    index: '05',
    title: 'Automated Resume Builder',
    subtitle: 'AI Automation · Application Development',
    category: 'ai-automation',
    categoryLabel: 'AI & Automation',
    summary:
      'An AI-assisted document generation and workflow automation system streamlining structured resume creation.',
    highlights: [
      'Contributed to an automated resume-building solution at Robo Tech Valley.',
      'Explored AI-assisted document generation and workflow automation.',
      'Worked on streamlining resume creation through automation.',
    ],
    stack: ['n8n', 'AI Automation', 'REST APIs', 'Document Workflows'],
    links: [],
  },
  {
    id: 'spsb-executive-platform',
    index: '06',
    title: 'SPSB Executive Team Platform',
    subtitle: 'Web Development · Organizational Management',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    summary:
      'Centralized leadership, volunteer, and mentor directory for the Society for the Popularization of Science, Bangladesh, featuring a Golden Memories gallery.',
    highlights: [
      'Designed and developed a digital platform showcasing executive members, organizers, volunteers, and mentors.',
      'Implemented organizational profile sections and a Golden Memories gallery.',
      'Created a centralized digital presence for organizational information and team representation.',
      'Deployed the platform using Vercel.',
    ],
    stack: ['JavaScript', 'Next.js', 'Responsive UI', 'Vercel'],
    links: [{ label: 'Live', url: 'https://spsb-bdjso-executivepage.vercel.app/' }],
  },
  {
    id: 'rdcs-corporate-website',
    index: '07',
    title: 'RDCS — Corporate Website Development',
    subtitle: 'WordPress · Elementor · Web Development',
    category: 'web-platforms',
    categoryLabel: 'Web & Platforms',
    summary:
      'Corporate digital presence for Research & Development Consultancy for Society (RDCS) highlighting consultancy and academic training services.',
    highlights: [
      'Designed and developed the corporate website for Research & Development Consultancy for Society (RDCS).',
      'Created a professional digital presence for research, development consultancy, and academic training services.',
      'Implemented structured sections for organizational information, consultancy services, and contact information.',
      'Worked on website architecture, UI/UX design, content presentation, and deployment.',
    ],
    stack: ['WordPress', 'Elementor', 'UI/UX Architecture'],
    links: [{ label: 'Live', url: 'https://rdcsfirm.com/' }],
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
  {
    index: '02',
    title: 'Identifying Potential Malicious and Vulnerable Websites Using ML & Deep Learning',
    description:
      'Applying supervised machine learning and deep learning models to detect phishing, malicious, and structurally vulnerable web domains.',
    focusPoints: [
      'URL feature engineering and classification across 10,000+ URL datasets.',
      'Random Forest and Support Vector Machine (SVM) benchmarking (up to 92% accuracy).',
      'Deep learning extensions for web vulnerability detection.',
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
    role: 'Volunteer',
    organization: 'Society for the Popularization of Science, Bangladesh (SPSB)',
    period: '2022 – Present',
    highlights: [
      'Contributed to science popularization and educational initiatives.',
      'Worked across technical, HR, management, communications, and organizational activities.',
      'Participated in science outreach, volunteer coordination, judging, and event management.',
      'Contributed to developing digital platforms and organizational infrastructure.',
      'Supported science education and youth engagement initiatives.',
    ],
  },
  {
    id: 'bdosn',
    role: 'Volunteer & Program Contributor',
    organization: 'Bangladesh Open Source Network (BdOSN)',
    period: 'Community Contributor',
    highlights: [
      'Participated in STEM education, programming mentorship, and technology-focused initiatives.',
      'Contributed to Scratch programming, robotics, and youth technology education.',
      'Supported educational activities and student development initiatives.',
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
    id: 'languages',
    title: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java'],
  },
  {
    id: 'ai-ml',
    title: 'AI, ML & NLP',
    items: [
      'Machine Learning',
      'Natural Language Processing (NLP)',
      'AI Agents',
      'Multi-Agent Systems',
      'Classification',
      'Predictive Modeling',
    ],
  },
  {
    id: 'automation',
    title: 'Automation Engineering',
    items: [
      'n8n',
      'Workflow Automation',
      'AI-powered Automation',
      'API Integration',
      'Process Automation',
    ],
  },
  {
    id: 'web-dev',
    title: 'Web & Frameworks',
    items: [
      'Next.js',
      'Full-Stack Development',
      'Frontend Development',
      'Responsive Web Design',
      'REST APIs',
      'WordPress',
      'Elementor',
      'Vercel',
    ],
  },
  {
    id: 'libraries-tools',
    title: 'Libraries & Tools',
    items: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Git',
      'GitHub',
      'Kaggle',
      'VS Code',
      'Postman',
    ],
  },
  {
    id: 'research-leadership',
    title: 'Research & Leadership',
    items: [
      'Bangla NLP',
      'Grammatical Error Correction',
      'Spell Checking',
      'Cybersecurity',
      'Technical Leadership',
      'Project Management',
      'Mentorship',
    ],
  },
];
