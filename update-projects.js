const fs = require('fs');
const path = './src/data/projects.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Update sacket
const sacket = data.find(p => p.id === 'sacket');
if (sacket) sacket.imageUrl = '/projects/sacket.png';

// Update bi-dom
const biDom = data.find(p => p.id === 'bi-dom');
if (biDom) biDom.imageUrl = '/projects/bi-dom.png';

// Append CvKu if not exists
if (!data.find(p => p.id === 'cvku')) {
  data.push({
    id: 'cvku',
    order: 7,
    published: true,
    title: 'CvKu - Resume Builder',
    tier: 'featured',
    label: { en: 'Featured Project', id: 'Project Unggulan' },
    description: { en: 'A modern resume builder mobile app.', id: 'Aplikasi mobile pembuat CV yang modern.' },
    features: { en: ['Mobile UI', 'Auth', 'Export to PDF'], id: ['Mobile UI', 'Autentikasi', 'Ekspor ke PDF'] },
    role: { en: 'Mobile Developer', id: 'Mobile Developer' },
    scope: { en: 'Frontend & Design', id: 'Frontend & Desain' },
    status: { en: 'Completed', id: 'Selesai' },
    tags: ['Flutter', 'Dart', 'Firebase'],
    repoLinks: [],
    imageUrl: '/projects/cvku.png',
    galleryUrls: ['/projects/cvku_auth.png']
  });
}

// Append SPK Moora if not exists
if (!data.find(p => p.id === 'spk-moora')) {
  data.push({
    id: 'spk-moora',
    order: 8,
    published: true,
    title: 'SPK Moora - DSS Dashboard',
    tier: 'featured',
    label: { en: 'Featured Project', id: 'Project Unggulan' },
    description: { en: 'Decision Support System using the MOORA method with an analytics dashboard.', id: 'Sistem Pendukung Keputusan menggunakan metode MOORA dengan dashboard analitik.' },
    features: { en: ['Data Analytics', 'MOORA Algorithm', 'Interactive Charts'], id: ['Data Analytics', 'Algoritma MOORA', 'Grafik Interaktif'] },
    role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' },
    scope: { en: 'Full-Stack Development', id: 'Pengembangan Full-Stack' },
    status: { en: 'Completed', id: 'Selesai' },
    tags: ['Next.js', 'React', 'Tailwind', 'Chart.js'],
    repoLinks: [],
    imageUrl: '/projects/spk-moora.png'
  });
}

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated projects.json');

