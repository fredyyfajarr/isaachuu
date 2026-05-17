export type Locale = 'en' | 'id';

type LocalizedText = Record<Locale, string>;

type LocalizedList = Record<Locale, string[]>;

export type Project = {
  title: string;
  label: LocalizedText;
  description: LocalizedText;
  features: LocalizedList;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
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
  },
  id: {
    title: 'Beberapa Project yang Saya Bangun',
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
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Built and maintained the backend system for an e-learning platform with Node.js, Express.js, MongoDB, and a React frontend integration.',
      id: 'Membangun dan mengelola backend untuk platform e-learning menggunakan Node.js, Express.js, MongoDB, serta integrasi frontend React.',
    },
    features: {
      en: [
        'REST API for authentication, course data, and learning progress',
        'MongoDB data modeling for LMS entities',
        'JWT-based authentication and role-aware access flow',
        'Frontend integration with React.js',
      ],
      id: [
        'REST API untuk autentikasi, data kursus, dan progress belajar',
        'Pemodelan data MongoDB untuk kebutuhan LMS',
        'Autentikasi JWT dan alur akses berbasis role',
        'Integrasi frontend dengan React.js',
      ],
    },
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://di-belajar-in.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Backend',
    imageUrl: '/images/dibelajarin-mern-preview.png',
  },
  {
    title: 'Dibelajarin - Learning Management System (Laravel Backend)',
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
    tags: ['Laravel', 'PHP', 'Filament', 'Breeze', 'MySQL', 'Railway'],
    liveUrl: 'https://dibelajarin.up.railway.app/',
    repoUrl: 'https://github.com/fredyyfajarr/dibelajarin_2.0',
    imageUrl: '/images/dibelajarin-preview.png',
  },
  {
    title: 'Sacket - Ticketing Website (Full-Stack)',
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
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Midtrans API'],
    liveUrl: 'https://sacket-x0j8k.sevalla.app/',
    repoUrl: 'https://github.com/fredyyfajarr/sacket',
    imageUrl: '/images/sacket-preview.png',
  },
  {
    title: 'Frevan - E-commerce Store (Backend)',
    label: {
      en: 'Featured Project',
      id: 'Project Unggulan',
    },
    description: {
      en: 'Built the backend foundation for an e-commerce platform, focusing on secure APIs, product operations, cart logic, and checkout flow.',
      id: 'Membangun fondasi backend untuk platform e-commerce dengan fokus pada API yang aman, manajemen produk, logic keranjang, dan alur checkout.',
    },
    features: {
      en: [
        'Secure REST API with JWT authentication',
        'Cart and checkout business logic',
        'CRUD APIs for products and admin operations',
        'MongoDB data management for products and users',
      ],
      id: [
        'REST API aman dengan autentikasi JWT',
        'Logic bisnis untuk keranjang dan checkout',
        'API CRUD untuk produk dan operasi admin',
        'Manajemen data MongoDB untuk produk dan user',
      ],
    },
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://frevan.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/be-ecommerce-isaac',
    imageUrl: '/images/frevan-shop-preview.png',
  },
  {
    title: 'Frevan - E-commerce Store (Frontend)',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'React and Vite frontend for an e-commerce store, connected to product, cart, authentication, and checkout flows from the backend API.',
      id: 'Frontend React dan Vite untuk toko e-commerce yang terhubung dengan alur produk, keranjang, autentikasi, dan checkout dari backend API.',
    },
    features: {
      en: [
        'React storefront built with Vite',
        'State management with Redux Toolkit',
        'Product browsing, cart, and checkout UI',
        'API communication with Axios',
      ],
      id: [
        'Storefront React menggunakan Vite',
        'State management dengan Redux Toolkit',
        'UI untuk produk, keranjang, dan checkout',
        'Komunikasi API menggunakan Axios',
      ],
    },
    tags: ['React', 'Vite', 'Redux Toolkit', 'Axios', 'Tailwind CSS'],
    repoUrl: 'https://github.com/fredyyfajarr/mern-fe-ecommerce',
  },
  {
    title: 'SwapSkill Backend',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Laravel API for a student skill-barter app with authentication, profiles, skill offers, bookmarks, reviews, notifications, statistics, and admin tooling.',
      id: 'API Laravel untuk aplikasi barter skill mahasiswa dengan autentikasi, profil, tawaran skill, bookmark, review, notifikasi, statistik, dan panel admin.',
    },
    features: {
      en: [
        'Token authentication with Laravel Sanctum',
        'Skill board, barter offers, bookmarks, and reviews',
        'Personal statistics and notification flow',
        'Filament admin panel and pragmatic clean architecture',
      ],
      id: [
        'Autentikasi token menggunakan Laravel Sanctum',
        'Skill board, tawaran barter, bookmark, dan review',
        'Statistik personal dan alur notifikasi',
        'Panel admin Filament dan clean architecture pragmatis',
      ],
    },
    tags: ['Laravel', 'Sanctum', 'Filament', 'MySQL'],
    repoUrl: 'https://github.com/fredyyfajarr/swapskill-be',
  },
  {
    title: 'SwapSkill Frontend',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Next.js frontend for SwapSkill with authentication, skill board, profile pages, bookmarks, reviews, notifications, and Laravel API integration.',
      id: 'Frontend Next.js untuk SwapSkill dengan autentikasi, skill board, halaman profil, bookmark, review, notifikasi, dan integrasi API Laravel.',
    },
    features: {
      en: [
        'Next.js App Router and TypeScript',
        'Skill search, filters, bookmarks, and recommendations',
        'Profile, public profile, settings, and notification UI',
        'Feature-based frontend structure',
      ],
      id: [
        'Next.js App Router dan TypeScript',
        'Search skill, filter, bookmark, dan rekomendasi',
        'UI profil, profil publik, settings, dan notifikasi',
        'Struktur frontend berbasis feature',
      ],
    },
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/fredyyfajarr/swapskill-fe',
  },
  {
    title: 'Random Skill Gen-ZRator',
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
    tags: ['Android', 'Java', 'Firebase', 'Room', 'MVVM'],
    repoUrl: 'https://github.com/fredyyfajarr/RandomSkillGenZRator',
  },
  {
    title: 'DiBelajar.in Node.js Frontend',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'React and Vite frontend for the DiBelajar.in LMS with role-based dashboards, course flows, forms, notifications, and backend API integration.',
      id: 'Frontend React dan Vite untuk LMS DiBelajar.in dengan dashboard berbasis role, alur kursus, form, notifikasi, dan integrasi backend API.',
    },
    features: {
      en: [
        'Role-based dashboards for admin, instructor, and student',
        'React Query data fetching and Zustand state management',
        'Protected routes and course interaction flows',
        'Interactive forms and notification UI',
      ],
      id: [
        'Dashboard berbasis role untuk admin, instruktur, dan siswa',
        'Data fetching React Query dan state management Zustand',
        'Protected routes dan alur interaksi kursus',
        'Form interaktif dan UI notifikasi',
      ],
    },
    tags: ['React', 'Vite', 'Zustand', 'React Query'],
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend',
  },
  {
    title: 'DiBelajar.in Node.js Frontend 2',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Second frontend iteration for the DiBelajar.in Node.js LMS, focused on responsive UI, protected routes, role-based pages, and interactive course management.',
      id: 'Iterasi kedua frontend LMS DiBelajar.in Node.js yang berfokus pada UI responsif, protected routes, halaman berbasis role, dan manajemen kursus interaktif.',
    },
    features: {
      en: [
        'Responsive React interface with Vite',
        'Role-based navigation and dashboard behavior',
        'Course, material, user, and category flows',
        'Framer Motion interactions',
      ],
      id: [
        'Interface React responsif dengan Vite',
        'Navigasi dan dashboard berbasis role',
        'Alur kursus, materi, user, dan kategori',
        'Interaksi menggunakan Framer Motion',
      ],
    },
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend-2',
  },
  {
    title: 'LMS Aachuu',
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
    tags: ['LMS', 'Laravel', 'React', 'Backend'],
    repoUrl: 'https://github.com/fredyyfajarr/lms-aachuu',
  },
  {
    title: 'Image Quantization App',
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
    tags: ['Python', 'Streamlit', 'Image Processing'],
    repoUrl: 'https://github.com/fredyyfajarr/tugas-kuantisasi-unpam-kel6',
  },
  {
    title: 'Deteksi Penyakit',
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
    tags: ['Next.js', 'React', 'Web App'],
    repoUrl: 'https://github.com/fredyyfajarr/deteksi-penyakit',
  },
  {
    title: 'BI-DOM Backend',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Laravel backend repository for the BI-DOM project, built as a public code sample for backend structure, data flow, and implementation practice.',
      id: 'Repository backend Laravel untuk project BI-DOM sebagai contoh publik untuk struktur backend, alur data, dan latihan implementasi.',
    },
    features: {
      en: [
        'Laravel backend foundation',
        'PHP 8 application structure',
        'Database-oriented application flow',
        'Backend implementation sample',
      ],
      id: [
        'Fondasi backend Laravel',
        'Struktur aplikasi PHP 8',
        'Alur aplikasi berbasis database',
        'Contoh implementasi backend',
      ],
    },
    tags: ['Laravel', 'PHP', 'Backend'],
    repoUrl: 'https://github.com/fredyyfajarr/bi-dom-backend',
  },
  {
    title: 'BI-DOM Frontend',
    label: {
      en: 'GitHub Project',
      id: 'Project GitHub',
    },
    description: {
      en: 'Next.js frontend repository for BI-DOM, paired with the backend implementation as a full-stack project sample.',
      id: 'Repository frontend Next.js untuk BI-DOM yang dipasangkan dengan backend sebagai contoh project full-stack.',
    },
    features: {
      en: [
        'Next.js frontend structure',
        'Frontend pair for BI-DOM backend',
        'Reusable UI foundation',
        'Full-stack integration sample',
      ],
      id: [
        'Struktur frontend Next.js',
        'Pasangan frontend untuk backend BI-DOM',
        'Fondasi UI reusable',
        'Contoh integrasi full-stack',
      ],
    },
    tags: ['Next.js', 'React', 'Frontend'],
    repoUrl: 'https://github.com/fredyyfajarr/bi-dom-frontend',
  },
  {
    title: 'Gelora Library',
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
    tags: ['Laravel', 'PHP', 'Library System', 'Database'],
    repoUrl: 'https://github.com/fredyyfajarr/gelora-library',
  },
  {
    title: 'ProjectUAS Waroeng DFFFP',
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
    tags: ['Desktop App', 'MySQL', 'Academic Project'],
    repoUrl: 'https://github.com/fredyyfajarr/projectUAS',
  },
  {
    title: 'Isaac Cloth 2',
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
    tags: ['Storefront', 'Web App', 'Portfolio Archive'],
    repoUrl: 'https://github.com/fredyyfajarr/isaac_cloth_2',
  },
  {
    title: 'Isaacpedia',
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
    tags: ['Web App', 'Content App', 'Portfolio Archive'],
    repoUrl: 'https://github.com/fredyyfajarr/isaacpedia',
  },
];
