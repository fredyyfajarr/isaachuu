const fs = require('fs');
const path = './src/data/projects.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// ============================
// New projects to add
// ============================

const newProjects = [
  {
    id: 'virtual-photobooth',
    order: 7,
    published: true,
    title: 'Freedayz Studio - Virtual Photobooth',
    tier: 'featured',
    label: { en: 'Featured Full-Stack Project', id: 'Project Full-Stack Unggulan' },
    description: {
      en: 'Interactive web-based photobooth with in-browser background removal (ML), GIF generation, cloud storage, email delivery, QR sharing, and full PWA support.',
      id: 'Photobooth interaktif berbasis web dengan penghapusan background via ML, pembuatan GIF, cloud storage, pengiriman email, berbagi QR, dan dukungan PWA penuh.'
    },
    features: {
      en: ['Client-side ML background removal', 'GIF encoding & media processing', 'Supabase cloud storage', 'Email delivery via Resend API', 'QR code sharing', 'Full PWA support'],
      id: ['Penghapusan background via ML di browser', 'Encoding GIF & pemrosesan media', 'Cloud storage Supabase', 'Pengiriman email via Resend API', 'Berbagi via QR code', 'Dukungan PWA penuh']
    },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'Frontend, ML integration, media processing, cloud storage, email', id: 'Frontend, integrasi ML, pemrosesan media, cloud storage, email' },
    status: { en: 'Live demo available', id: 'Demo live tersedia' },
    tags: ['Nuxt.js', 'Vue.js', 'Supabase', 'PWA', 'WebRTC', 'Machine Learning'],
    liveUrl: 'https://virtual-photobooth-freedayz.vercel.app/',
    repoLinks: [],
    imageUrl: '/projects/photobooth-home.png',
    galleryUrls: []
  },
  {
    id: 'unpamcare',
    order: 8,
    published: true,
    title: 'UnpamCare - AI Student Portal',
    tier: 'featured',
    label: { en: 'Featured AI Project', id: 'Project AI Unggulan' },
    description: {
      en: 'AI-powered student services portal with LLM chatbot (Groq), web push notifications, custom JWT authentication, and Prisma-managed database.',
      id: 'Portal layanan mahasiswa berbasis AI dengan chatbot LLM (Groq), push notification, autentikasi JWT custom, dan database Prisma.'
    },
    features: {
      en: ['AI chatbot with Groq LLM', 'Custom JWT authentication', 'Web push notifications', 'Prisma ORM + PostgreSQL', 'Server Actions'],
      id: ['Chatbot AI dengan Groq LLM', 'Autentikasi JWT custom', 'Web push notifications', 'Prisma ORM + PostgreSQL', 'Server Actions']
    },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'AI integration, auth, push notifications, database', id: 'Integrasi AI, autentikasi, push notification, database' },
    status: { en: 'Live demo available', id: 'Demo live tersedia' },
    tags: ['Next.js', 'React', 'Prisma', 'Groq AI', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://unpamcare.vercel.app/',
    repoLinks: [],
    imageUrl: '/projects/unpamcare-home.png',
    galleryUrls: ['/projects/unpamcare-login.png']
  },
  {
    id: 'cvku',
    order: 9,
    published: true,
    title: 'CvKu - AI Resume Builder',
    tier: 'featured',
    label: { en: 'Featured AI Project', id: 'Project AI Unggulan' },
    description: {
      en: 'Modern AI-assisted resume builder with real-time preview, ATS-friendly templates, and high-quality PDF export via React-PDF.',
      id: 'Pembuat CV modern berbasis AI dengan preview real-time, template ATS-friendly, dan ekspor PDF berkualitas tinggi via React-PDF.'
    },
    features: {
      en: ['AI-powered content generation', 'Real-time CV preview', 'ATS-friendly PDF export', 'Supabase Auth + PostgreSQL', 'Prisma ORM'],
      id: ['Pembuatan konten berbasis AI', 'Preview CV real-time', 'Ekspor PDF ATS-friendly', 'Supabase Auth + PostgreSQL', 'Prisma ORM']
    },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'AI integration, PDF rendering, auth, database', id: 'Integrasi AI, rendering PDF, autentikasi, database' },
    status: { en: 'Live demo available', id: 'Demo live tersedia' },
    tags: ['Next.js', 'React', 'Prisma', 'Supabase', 'TypeScript', 'React-PDF'],
    liveUrl: 'https://cvku.vercel.app/',
    repoLinks: [],
    imageUrl: '/projects/cvku-home.png',
    galleryUrls: ['/projects/cvku.png', '/projects/cvku_auth.png']
  },
  {
    id: 'spk-all-in-one',
    order: 10,
    published: true,
    title: 'SPK All-in-One - Decision Support System',
    tier: 'featured',
    label: { en: 'Featured Project', id: 'Project Unggulan' },
    description: {
      en: 'Decision Support System implementing the MOORA algorithm with interactive drag-and-drop, data visualization, and PDF/Excel export.',
      id: 'Sistem Pendukung Keputusan mengimplementasikan algoritma MOORA dengan drag-and-drop interaktif, visualisasi data, dan ekspor PDF/Excel.'
    },
    features: {
      en: ['MOORA algorithm implementation', 'Interactive drag-and-drop UI', 'Charts & data visualization', 'PDF and Excel export', 'Zustand state management'],
      id: ['Implementasi algoritma MOORA', 'UI drag-and-drop interaktif', 'Grafik & visualisasi data', 'Ekspor PDF dan Excel', 'State management Zustand']
    },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'Algorithm, UI, data visualization, export', id: 'Algoritma, UI, visualisasi data, ekspor' },
    status: { en: 'Live demo available', id: 'Demo live tersedia' },
    tags: ['Next.js', 'React', 'TypeScript', 'Recharts', 'Zustand', 'Tailwind'],
    liveUrl: 'https://spk-all-in-one.vercel.app/',
    repoLinks: [],
    imageUrl: '/projects/spk-aio-home.png',
    galleryUrls: []
  },
  {
    id: 'warung-mama-fina',
    order: 11,
    published: true,
    title: 'Warung Mama Fina - Digital Menu & Order',
    tier: 'other',
    label: { en: 'Full-Stack Project', id: 'Project Full-Stack' },
    description: {
      en: 'Digital menu and ordering system for a local food stall with MongoDB backend, debounced search, and Turbopack.',
      id: 'Sistem menu digital dan pemesanan untuk warung lokal dengan backend MongoDB, pencarian debounce, dan Turbopack.'
    },
    features: {
      en: ['Full CRUD menu management', 'MongoDB + Mongoose', 'Debounced search', 'Server-rendered with Turbopack'],
      id: ['Manajemen menu CRUD penuh', 'MongoDB + Mongoose', 'Pencarian debounce', 'Server-rendered dengan Turbopack']
    },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'Menu CRUD, order flow, database', id: 'CRUD menu, alur pesanan, database' },
    status: { en: 'Source code available', id: 'Source code tersedia' },
    tags: ['Next.js', 'React', 'MongoDB', 'Mongoose', 'TypeScript', 'Tailwind'],
    repoLinks: [],
    imageUrl: ''
  }
];

// Add new projects (skip if already exists)
for (const proj of newProjects) {
  if (!data.find(p => p.id === proj.id)) {
    data.push(proj);
    console.log(`Added: ${proj.id}`);
  } else {
    // Update existing
    const idx = data.findIndex(p => p.id === proj.id);
    data[idx] = { ...data[idx], ...proj };
    console.log(`Updated: ${proj.id}`);
  }
}

// Update imageUrl for existing projects that now have live screenshots
const imageUpdates = {
  'dibelajarin-mern': '/projects/dibelajarin-home.png',
  'frevan': '/projects/frevan-home.png',
};

for (const [id, imageUrl] of Object.entries(imageUpdates)) {
  const proj = data.find(p => p.id === id);
  if (proj) {
    proj.imageUrl = imageUrl;
    // Add gallery URLs
    if (id === 'dibelajarin-mern') {
      proj.galleryUrls = ['/projects/dibelajarin-courses.png'];
    }
    if (id === 'frevan') {
      proj.galleryUrls = ['/projects/frevan-products.png'];
    }
    console.log(`Updated imageUrl for: ${id}`);
  }
}

fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
console.log(`\nTotal projects: ${data.length}`);
console.log('Done!');
