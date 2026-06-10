import curatedProjects from '@/data/projects.json';

export type Locale = 'en' | 'id';

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type ProjectTier = 'featured' | 'other';

export type RepoLink = {
  label: LocalizedText;
  url: string;
  isPublic?: boolean;
};

export type Project = {
  id: string;
  order: number;
  published: boolean;
  title: string;
  tier: ProjectTier;
  label: LocalizedText;
  description: LocalizedText;
  features: LocalizedList;
  role: LocalizedText;
  scope: LocalizedText;
  status: LocalizedText;
  tags: string[];
  liveUrl?: string;
  repoLinks: RepoLink[];
  imageUrl?: string;
  galleryUrls?: string[];
};

export const navContent = {
  en: {
    start: 'Start',
    work: 'Work',
    lab: 'Lab',
    about: 'About',
    contact: 'Contact',
  },
  id: {
    start: 'Mulai',
    work: 'Karya',
    lab: 'Lab',
    about: 'Tentang',
    contact: 'Kontak',
  },
};

export const heroContent = {
  en: {
    intro: 'Hi, my name is',
    headline: 'i design APIs and build',
    rotatingWords: ['systems', 'websites', 'LMS platforms', 'ticketing flows', 'admin dashboards'],
    body: 'Full-stack developer focused on Laravel, Node.js, database design, and practical product systems. I build APIs, admin flows, and user-facing applications that are maintainable enough to be evaluated beyond a classroom demo.',
    cta: 'View selected work',
  },
  id: {
    intro: 'Halo, nama saya',
    headline: 'saya merancang API dan membangun',
    rotatingWords: ['sistem', 'website', 'platform LMS', 'alur ticketing', 'admin dashboard'],
    body: 'Full-stack developer yang fokus pada Laravel, Node.js, desain database, dan sistem produk yang praktis. Saya membangun API, admin flow, dan aplikasi user-facing yang cukup rapi untuk dinilai lebih dari sekadar demo kelas.',
    cta: 'Lihat karya terpilih',
  },
};

export const aboutContent = {
  en: {
    title: 'About Me',
    paragraphs: [
      'Hello! My name is Fredy Fajar Adi Putra, a developer who is focused on building reliable digital products from the backend outward.',
      'Most of my strongest work is Laravel and full-stack application development: database modeling, authentication, admin dashboards, business flows, and API integration. I keep this portfolio curated so recruiters see the projects that best represent my current engineering level.',
    ],
    skillsIntro: 'Technologies I currently use most often:',
  },
  id: {
    title: 'Tentang Saya',
    paragraphs: [
      'Halo! Nama saya Fredy Fajar Adi Putra, developer yang fokus membangun produk digital yang rapi dari sisi backend sampai aplikasi bisa digunakan.',
      'Project terkuat saya banyak berada di Laravel dan full-stack development: desain database, autentikasi, admin dashboard, business flow, dan integrasi API. Portfolio ini sengaja saya kurasi supaya recruiter melihat project yang paling mewakili level engineering saya sekarang.',
    ],
    skillsIntro: 'Teknologi yang paling sering saya gunakan sekarang:',
  },
};

export const projectsContent = {
  en: {
    title: 'Work',
    featuredTitle: 'Selected projects worth reviewing...',
    featuredIntro:
      'Only stronger full-stack and backend projects are shown here. Smaller experiments and archived academic work are intentionally hidden from the main portfolio.',
    otherTitle: 'Data Source',
    otherHeading: 'This portfolio can read projects from Firebase Firestore.',
    otherIntro:
      'For now, local curated data is used as a fallback until Firebase environment variables and database rules are configured.',
    role: 'Role',
    scope: 'Scope',
    stack: 'Stack',
    status: 'Status',
    live: 'Live',
  },
  id: {
    title: 'Karya',
    featuredTitle: 'Project terpilih yang layak direview...',
    featuredIntro:
      'Yang ditampilkan hanya project full-stack dan backend yang paling kuat. Eksperimen kecil dan arsip akademik sengaja tidak dimasukkan ke portfolio utama.',
    otherTitle: 'Sumber Data',
    otherHeading: 'Portfolio ini bisa membaca project dari Firebase Firestore.',
    otherIntro:
      'Untuk sekarang, data curated lokal dipakai sebagai fallback sampai environment variable dan rules Firebase dikonfigurasi.',
    role: 'Role',
    scope: 'Scope',
    stack: 'Stack',
    status: 'Status',
    live: 'Live',
  },
};

export const contactContent = {
  en: {
    eyebrow: 'What is Next?',
    title: 'Get In Touch',
    body: 'My inbox is open for internships, junior developer roles, project discussions, or technical feedback on my work.',
    cta: 'Say Hello',
  },
  id: {
    eyebrow: 'Selanjutnya?',
    title: 'Hubungi Saya',
    body: 'Inbox saya terbuka untuk internship, posisi junior developer, diskusi project, atau feedback teknis untuk karya saya.',
    cta: 'Kirim Email',
  },
};

export const footerContent = {
  en: 'Built by Fredy Fajar Adi Putra with Next.js, Tailwind CSS, and Firebase-ready data.',
  id: 'Dibuat oleh Fredy Fajar Adi Putra dengan Next.js, Tailwind CSS, dan data yang siap Firebase.',
};

export const skills = [
  'PHP (Laravel)',
  'Node.js (Express)',
  'MySQL',
  'MongoDB',
  'Next.js',
  'React.js',
  'REST API',
  'Git & GitHub',
];

export const projects = curatedProjects as Project[];
