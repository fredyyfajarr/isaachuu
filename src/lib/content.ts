export type Locale = 'en' | 'id';

type LocalizedText = Record<Locale, string>;

type LocalizedList = Record<Locale, string[]>;

export type ProjectTier = 'featured' | 'other';

export type RepoLink = {
  label: LocalizedText;
  url: string;
};

export type Project = {
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
};

export const navContent = {
  en: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  id: {
    about: 'Tentang',
    projects: 'Proyek',
    contact: 'Kontak',
  },
};

export const heroContent = {
  en: {
    intro: 'Hi, my name is',
    headline: 'I build reliable backends for real products.',
    body: 'Backend engineer focused on building secure APIs, clean database flows, and practical full-stack applications. I enjoy turning product ideas into systems that are maintainable, scalable, and ready for real users.',
    cta: 'Check out my projects!',
  },
  id: {
    intro: 'Halo, nama saya',
    headline: 'Saya membangun backend yang andal untuk produk nyata.',
    body: 'Backend engineer yang berfokus pada API yang aman, alur database yang rapi, dan aplikasi full-stack yang praktis. Saya senang mengubah ide produk menjadi sistem yang mudah dirawat, scalable, dan siap digunakan user.',
    cta: 'Lihat proyek saya!',
  },
};

export const aboutContent = {
  en: {
    title: 'About Me',
    paragraphs: [
      'Hello! My name is Fredy Fajar Adi Putra, a developer who is passionate about building reliable digital foundations. My journey into web development began with a deep dive into the server-side, where I honed my skills in designing database architecture and creating efficient REST APIs with the MERN stack for an e-commerce project.',
      'That strong backend foundation encouraged me to take on bigger challenges: building applications end-to-end. I then ventured into full-stack development using frameworks like Laravel, which allows me to not only architect the logic but also build functional interfaces for users.',
    ],
    skillsIntro: 'Here are a few technologies I have been working with recently:',
  },
  id: {
    title: 'Tentang Saya',
    paragraphs: [
      'Halo! Nama saya Fredy Fajar Adi Putra, seorang developer yang tertarik membangun fondasi digital yang andal. Perjalanan saya di web development dimulai dari sisi server, terutama saat merancang arsitektur database dan membuat REST API yang efisien untuk project e-commerce berbasis MERN stack.',
      'Fondasi backend itu mendorong saya mengambil tantangan yang lebih besar: membangun aplikasi dari awal sampai bisa digunakan. Saya kemudian mengembangkan kemampuan full-stack dengan framework seperti Laravel, sehingga saya bisa merancang logic, database, dan interface yang fungsional untuk user.',
    ],
    skillsIntro: 'Beberapa teknologi yang sering saya gunakan:',
  },
};

export const projectsContent = {
  en: {
    title: 'Some Things I have Built',
    featuredTitle: 'Featured Projects',
    featuredIntro:
      'A curated set of larger products where my backend and full-stack work is easiest to evaluate.',
    otherTitle: 'Other Projects',
    otherHeading: 'Repositories and code samples',
    otherIntro:
      'More public repositories, experiments, academic work, and code samples from my GitHub.',
    role: 'Role',
    scope: 'Scope',
    stack: 'Stack',
    status: 'Status',
    live: 'Live',
  },
  id: {
    title: 'Beberapa Project yang Saya Bangun',
    featuredTitle: 'Project Unggulan',
    featuredIntro:
      'Pilihan project yang paling kuat untuk menunjukkan kemampuan backend dan full-stack saya.',
    otherTitle: 'Project Lainnya',
    otherHeading: 'Repository dan contoh kode',
    otherIntro:
      'Repository publik lain, eksperimen, project akademik, dan contoh kode dari GitHub saya.',
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
    body: 'Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you.',
    cta: 'Say Hello',
  },
  id: {
    eyebrow: 'Selanjutnya?',
    title: 'Hubungi Saya',
    body: 'Walaupun saat ini saya belum aktif mencari kesempatan baru, inbox saya selalu terbuka. Jika ada pertanyaan, peluang kolaborasi, atau sekadar ingin menyapa, saya akan berusaha membalas sebaik mungkin.',
    cta: 'Kirim Email',
  },
};

export const footerContent = {
  en: 'Built by Isaachuu with Next.js and Tailwind CSS.',
  id: 'Dibuat oleh Isaachuu dengan Next.js dan Tailwind CSS.',
};

export const skills = [
  'Node.js (Express)',
  'PHP (Laravel)',
  'MongoDB',
  'MySQL',
  'React.js',
  'Next.js',
  'REST API',
  'Git & GitHub',
];

export const projects: Project[] = [
  {
    title: 'DiBelajar.in - Learning Management System (MERN Stack)',
    tier: 'featured',
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Full-stack MERN learning platform with a Node.js API, MongoDB data model, and React frontend for role-based learning experiences.',
      id: 'Platform LMS full-stack MERN dengan API Node.js, model data MongoDB, dan frontend React untuk pengalaman belajar berbasis role.',
    },
    features: {
      en: [
        'Node.js and Express API for authentication, courses, and progress',
        'MongoDB data modeling for LMS entities',
        'React frontend with role-based dashboards and protected routes',
        'Course, material, assignment, discussion, and notification flows',
      ],
      id: [
        'API Node.js dan Express untuk autentikasi, kursus, dan progress',
        'Pemodelan data MongoDB untuk kebutuhan LMS',
        'Frontend React dengan dashboard berbasis role dan protected routes',
        'Alur kursus, materi, tugas, diskusi, dan notifikasi',
      ],
    },
    role: {
      en: 'Backend Engineer / Full-Stack Collaborator',
      id: 'Backend Engineer / Kolaborator Full-Stack',
    },
    scope: {
      en: 'Auth, API, database, course flow, and frontend integration',
      id: 'Auth, API, database, alur kursus, dan integrasi frontend',
    },
    status: {
      en: 'Live demo + source code',
      id: 'Demo live + source code',
    },
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://di-belajar-in.vercel.app/',
    repoLinks: [
      {
        label: { en: 'Backend', id: 'Backend' },
        url: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Backend',
      },
      {
        label: { en: 'Frontend', id: 'Frontend' },
        url: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend',
      },
      {
        label: { en: 'Frontend v2', id: 'Frontend v2' },
        url: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend-2',
      },
    ],
    imageUrl: '/images/dibelajarin-mern-preview.png',
  },
  {
    title: 'Dibelajarin - Learning Management System (Laravel Full-Stack)',
    tier: 'featured',
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Designed and developed a Laravel-based LMS backend with Filament admin tooling, authentication, relational data design, and learning progress logic.',
      id: 'Merancang dan membangun backend LMS berbasis Laravel dengan admin panel Filament, autentikasi, desain database relasional, dan logic progress belajar.',
    },
    features: {
      en: [
        'Laravel Breeze authentication',
        'Filament admin panel for data management',
        'Relational database design for LMS features',
        'Custom learning progress and role-based flows',
      ],
      id: [
        'Autentikasi menggunakan Laravel Breeze',
        'Panel admin Filament untuk manajemen data',
        'Desain database relasional untuk fitur LMS',
        'Logic custom untuk progress belajar dan role user',
      ],
    },
    role: {
      en: 'Backend Engineer',
      id: 'Backend Engineer',
    },
    scope: {
      en: 'Laravel backend, Filament admin, auth, and LMS data model',
      id: 'Backend Laravel, admin Filament, auth, dan model data LMS',
    },
    status: {
      en: 'Live demo + source code',
      id: 'Demo live + source code',
    },
    tags: ['Laravel', 'PHP', 'Filament', 'Breeze', 'MySQL', 'Railway'],
    liveUrl: 'https://dibelajarin.up.railway.app/',
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/dibelajarin_2.0',
      },
    ],
    imageUrl: '/images/dibelajarin-preview.png',
  },
  {
    title: 'Sacket - Ticketing Website (Full-Stack)',
    tier: 'featured',
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Developed a full-stack ticketing platform covering event management, booking flow, role-based access, QR ticket validation, and payments.',
      id: 'Mengembangkan platform ticketing full-stack untuk manajemen event, alur booking, akses berbasis role, validasi tiket QR, dan pembayaran.',
    },
    features: {
      en: [
        'End-to-end Laravel development',
        'Event, ticket, promo, and order management',
        'Multi-step booking and payment flow',
        'Midtrans payment gateway integration',
      ],
      id: [
        'Pengembangan end-to-end menggunakan Laravel',
        'Manajemen event, tiket, promo, dan pesanan',
        'Alur booking dan pembayaran multi-step',
        'Integrasi payment gateway Midtrans',
      ],
    },
    role: {
      en: 'Full-Stack Developer',
      id: 'Full-Stack Developer',
    },
    scope: {
      en: 'Booking flow, admin panel, roles, QR tickets, and payment',
      id: 'Booking flow, admin panel, role, tiket QR, dan pembayaran',
    },
    status: {
      en: 'Live demo + source code',
      id: 'Demo live + source code',
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Midtrans API'],
    liveUrl: 'https://sacket-x0j8k.sevalla.app/',
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/sacket',
      },
    ],
    imageUrl: '/images/sacket-preview.png',
  },
  {
    title: 'Frevan - E-commerce Store (Full-Stack)',
    tier: 'featured',
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Full-stack e-commerce project with a secure Node.js backend and React storefront for product browsing, cart, and checkout flows.',
      id: 'Project e-commerce full-stack dengan backend Node.js yang aman dan storefront React untuk alur produk, keranjang, dan checkout.',
    },
    features: {
      en: [
        'Secure REST API with JWT authentication',
        'Cart and checkout business logic',
        'React storefront built with Vite and Redux Toolkit',
        'MongoDB data management for products and users',
      ],
      id: [
        'REST API aman dengan autentikasi JWT',
        'Logic bisnis untuk keranjang dan checkout',
        'Storefront React menggunakan Vite dan Redux Toolkit',
        'Manajemen data MongoDB untuk produk dan user',
      ],
    },
    role: {
      en: 'Backend-focused Full-Stack Developer',
      id: 'Full-Stack Developer fokus Backend',
    },
    scope: {
      en: 'REST API, product CRUD, cart, checkout, and React storefront',
      id: 'REST API, CRUD produk, cart, checkout, dan storefront React',
    },
    status: {
      en: 'Live demo + source code',
      id: 'Demo live + source code',
    },
    tags: ['Node.js', 'Express.js', 'React', 'Vite', 'MongoDB', 'JWT'],
    liveUrl: 'https://frevan.vercel.app/',
    repoLinks: [
      {
        label: { en: 'Backend', id: 'Backend' },
        url: 'https://github.com/fredyyfajarr/be-ecommerce-isaac',
      },
      {
        label: { en: 'Frontend', id: 'Frontend' },
        url: 'https://github.com/fredyyfajarr/mern-fe-ecommerce',
      },
    ],
    imageUrl: '/images/frevan-shop-preview.png',
  },
  {
    title: 'SwapSkill - Student Skill Barter Platform',
    tier: 'featured',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Full-stack skill-barter platform for students, combining a Laravel API with a Next.js frontend for discovery, offers, profiles, and reviews.',
      id: 'Platform barter skill full-stack untuk mahasiswa, menggabungkan API Laravel dan frontend Next.js untuk discovery, tawaran, profil, dan review.',
    },
    features: {
      en: [
        'Token authentication with Laravel Sanctum',
        'Skill board, barter offers, bookmarks, and reviews',
        'Next.js frontend with profile, settings, and notification UI',
        'Filament admin panel and pragmatic clean architecture',
      ],
      id: [
        'Autentikasi token menggunakan Laravel Sanctum',
        'Skill board, tawaran barter, bookmark, dan review',
        'Frontend Next.js dengan UI profil, settings, dan notifikasi',
        'Panel admin Filament dan clean architecture pragmatis',
      ],
    },
    role: {
      en: 'Full-Stack Developer',
      id: 'Full-Stack Developer',
    },
    scope: {
      en: 'Skill board, profile, offer, review, notification, and admin flows',
      id: 'Skill board, profil, tawaran, review, notifikasi, dan admin',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Laravel', 'Next.js', 'Sanctum', 'Filament', 'MySQL'],
    repoLinks: [
      {
        label: { en: 'Backend', id: 'Backend' },
        url: 'https://github.com/fredyyfajarr/swapskill-be',
      },
      {
        label: { en: 'Frontend', id: 'Frontend' },
        url: 'https://github.com/fredyyfajarr/swapskill-fe',
      },
    ],
  },
  {
    title: 'Random Skill Gen-ZRator',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Android Java app for daily quest gamification with XP, levels, streaks, achievements, custom challenges, local storage, and Firebase sync.',
      id: 'Aplikasi Android Java untuk gamifikasi daily quest dengan XP, level, streak, achievement, custom challenge, penyimpanan lokal, dan sinkronisasi Firebase.',
    },
    features: {
      en: [
        'Google Sign-In with Firebase Authentication',
        'Room database as the local source of truth',
        'Daily quest timer, XP, level, tier, and streak logic',
        'MVVM structure with ViewModel and LiveData',
      ],
      id: [
        'Google Sign-In dengan Firebase Authentication',
        'Room database sebagai sumber data lokal utama',
        'Timer daily quest, XP, level, tier, dan streak',
        'Struktur MVVM dengan ViewModel dan LiveData',
      ],
    },
    role: {
      en: 'Android Developer',
      id: 'Android Developer',
    },
    scope: {
      en: 'Daily quest, XP system, local database, and Firebase sync',
      id: 'Daily quest, sistem XP, database lokal, dan sync Firebase',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Android', 'Java', 'Firebase', 'Room', 'MVVM'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/RandomSkillGenZRator',
      },
    ],
  },
  {
    title: 'LMS Aachuu',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Collaborative learning web app concept for free education access, with Fredy contributing as backend engineer on the platform team.',
      id: 'Konsep web app pembelajaran gratis yang dikembangkan secara kolaboratif, dengan kontribusi Fredy sebagai backend engineer di dalam tim.',
    },
    features: {
      en: [
        'Learning platform concept for accessible education',
        'Backend responsibilities in a collaborative team',
        'Course-oriented web application structure',
        'Frontend and backend collaboration flow',
      ],
      id: [
        'Konsep platform belajar untuk akses pendidikan yang lebih mudah',
        'Tanggung jawab backend dalam tim kolaboratif',
        'Struktur aplikasi web berbasis kursus',
        'Alur kolaborasi frontend dan backend',
      ],
    },
    role: {
      en: 'Backend Engineer',
      id: 'Backend Engineer',
    },
    scope: {
      en: 'Learning platform concept and team backend contribution',
      id: 'Konsep platform belajar dan kontribusi backend dalam tim',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['LMS', 'Laravel', 'React', 'Backend'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/lms-aachuu',
      },
    ],
  },
  {
    title: 'Image Quantization App',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Streamlit image-processing app implementing non-uniform quantization with equal-frequency binning, histogram analysis, codebook output, and file-size comparison.',
      id: 'Aplikasi image processing berbasis Streamlit yang mengimplementasikan non-uniform quantization dengan equal-frequency binning, analisis histogram, codebook, dan perbandingan ukuran file.',
    },
    features: {
      en: [
        'Non-uniform image quantization algorithm',
        'Before-after comparison slider',
        'Histogram overlay and raw matrix output',
        'Compression statistics and anti-lag resizing',
      ],
      id: [
        'Algoritma non-uniform image quantization',
        'Slider perbandingan before-after',
        'Histogram overlay dan output matriks mentah',
        'Statistik kompresi dan resizing anti-lag',
      ],
    },
    role: {
      en: 'Python Developer / Team Contributor',
      id: 'Python Developer / Kontributor Tim',
    },
    scope: {
      en: 'Image quantization, histogram, compression stats, and Streamlit UI',
      id: 'Kuantisasi citra, histogram, statistik kompresi, dan UI Streamlit',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Python', 'Streamlit', 'Image Processing'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/tugas-kuantisasi-unpam-kel6',
      },
    ],
  },
  {
    title: 'Deteksi Penyakit',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Next.js project for a disease-detection application concept, structured as a web app and kept as an additional public portfolio sample.',
      id: 'Project Next.js untuk konsep aplikasi deteksi penyakit, disusun sebagai web app dan menjadi salah satu contoh project publik di portfolio.',
    },
    features: {
      en: [
        'Next.js web app structure',
        'Disease-detection product concept',
        'Reusable page and component foundation',
        'Frontend implementation practice',
      ],
      id: [
        'Struktur web app Next.js',
        'Konsep produk deteksi penyakit',
        'Fondasi page dan component reusable',
        'Latihan implementasi frontend',
      ],
    },
    role: {
      en: 'Frontend Developer',
      id: 'Frontend Developer',
    },
    scope: {
      en: 'Next.js app structure and disease-detection product concept',
      id: 'Struktur app Next.js dan konsep produk deteksi penyakit',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Next.js', 'React', 'Web App'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/deteksi-penyakit',
      },
    ],
  },
  {
    title: 'BI-DOM - Full-Stack Web App',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Full-stack BI-DOM project pairing a Laravel backend with a Next.js frontend as a public implementation sample.',
      id: 'Project BI-DOM full-stack yang memasangkan backend Laravel dan frontend Next.js sebagai contoh implementasi publik.',
    },
    features: {
      en: [
        'Laravel backend foundation',
        'Next.js frontend structure',
        'Database-oriented application flow',
        'Full-stack integration sample',
      ],
      id: [
        'Fondasi backend Laravel',
        'Struktur frontend Next.js',
        'Alur aplikasi berbasis database',
        'Contoh integrasi full-stack',
      ],
    },
    role: {
      en: 'Full-Stack Developer',
      id: 'Full-Stack Developer',
    },
    scope: {
      en: 'Laravel backend, Next.js frontend, and integration sample',
      id: 'Backend Laravel, frontend Next.js, dan contoh integrasi',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Laravel', 'Next.js', 'PHP', 'React', 'Full-Stack'],
    repoLinks: [
      {
        label: { en: 'Backend', id: 'Backend' },
        url: 'https://github.com/fredyyfajarr/bi-dom-backend',
      },
      {
        label: { en: 'Frontend', id: 'Frontend' },
        url: 'https://github.com/fredyyfajarr/bi-dom-frontend',
      },
    ],
  },
  {
    title: 'Gelora Library',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Laravel library-management project sample with document-oriented features, export tooling, and a data-driven application structure.',
      id: 'Contoh project manajemen perpustakaan berbasis Laravel dengan fitur dokumen, tooling export, dan struktur aplikasi berbasis data.',
    },
    features: {
      en: [
        'Laravel 12 application foundation',
        'Document and export package integration',
        'Database-driven library system concept',
        'Backend and dashboard implementation practice',
      ],
      id: [
        'Fondasi aplikasi Laravel 12',
        'Integrasi package dokumen dan export',
        'Konsep sistem perpustakaan berbasis database',
        'Latihan implementasi backend dan dashboard',
      ],
    },
    role: {
      en: 'Backend Developer',
      id: 'Backend Developer',
    },
    scope: {
      en: 'Laravel app foundation, document/export flow, and data model',
      id: 'Fondasi Laravel, alur dokumen/export, dan model data',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Laravel', 'PHP', 'Library System', 'Database'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/gelora-library',
      },
    ],
  },
  {
    title: 'ProjectUAS Waroeng DFFFP',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Academic desktop application project with local installation, database import, and admin/user account flows for a food-ordering use case.',
      id: 'Project aplikasi desktop akademik dengan instalasi lokal, import database, dan alur akun admin/user untuk use case pemesanan makanan.',
    },
    features: {
      en: [
        'Desktop application setup package',
        'MySQL database import flow',
        'Admin and user demo accounts',
        'Food-ordering academic project',
      ],
      id: [
        'Package instalasi aplikasi desktop',
        'Alur import database MySQL',
        'Akun demo admin dan user',
        'Project akademik pemesanan makanan',
      ],
    },
    role: {
      en: 'Desktop App Developer / Team Contributor',
      id: 'Desktop App Developer / Kontributor Tim',
    },
    scope: {
      en: 'Local installation, database import, and admin/user flow',
      id: 'Instalasi lokal, import database, dan alur admin/user',
    },
    status: {
      en: 'Source code',
      id: 'Source code',
    },
    tags: ['Desktop App', 'MySQL', 'Academic Project'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/projectUAS',
      },
    ],
  },
  {
    title: 'Isaac Cloth 2',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Public project archive for a clothing-store application, included as an additional code sample from earlier web development practice.',
      id: 'Arsip project publik untuk aplikasi toko pakaian, ditampilkan sebagai contoh tambahan dari latihan web development sebelumnya.',
    },
    features: {
      en: [
        'Clothing-store application concept',
        'Public code archive',
        'Storefront and product-flow practice',
        'Early portfolio project sample',
      ],
      id: [
        'Konsep aplikasi toko pakaian',
        'Arsip kode publik',
        'Latihan storefront dan alur produk',
        'Contoh project portfolio awal',
      ],
    },
    role: {
      en: 'Web Developer',
      id: 'Web Developer',
    },
    scope: {
      en: 'Clothing-store concept and early storefront practice',
      id: 'Konsep toko pakaian dan latihan storefront awal',
    },
    status: {
      en: 'Archived source code',
      id: 'Arsip source code',
    },
    tags: ['Storefront', 'Web App', 'Portfolio Archive'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/isaac_cloth_2',
      },
    ],
  },
  {
    title: 'Isaacpedia',
    tier: 'other',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Public repository for an Isaacpedia information app, kept as an additional portfolio sample for web application structure and content presentation.',
      id: 'Repository publik untuk aplikasi informasi Isaacpedia, ditampilkan sebagai contoh tambahan untuk struktur web app dan penyajian konten.',
    },
    features: {
      en: [
        'Information web app concept',
        'Public portfolio repository',
        'Content presentation practice',
        'Web application structure sample',
      ],
      id: [
        'Konsep web app informasi',
        'Repository portfolio publik',
        'Latihan penyajian konten',
        'Contoh struktur aplikasi web',
      ],
    },
    role: {
      en: 'Web Developer',
      id: 'Web Developer',
    },
    scope: {
      en: 'Information app structure and content presentation',
      id: 'Struktur aplikasi informasi dan penyajian konten',
    },
    status: {
      en: 'Archived source code',
      id: 'Arsip source code',
    },
    tags: ['Web App', 'Content App', 'Portfolio Archive'],
    repoLinks: [
      {
        label: { en: 'Repository', id: 'Repository' },
        url: 'https://github.com/fredyyfajarr/isaacpedia',
      },
    ],
  },
];
