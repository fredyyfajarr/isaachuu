// components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Definisikan data proyek Anda di sini
const projectData = [
  // #####################################################################
  // ## PROYEK LMS (NODE.JS) BARU DITAMBAHKAN DI SINI ##
  // #####################################################################
  {
    title: 'DiBelajar.in - Learning Management System (MERN Stack) as Backend',
    description:
      'Mengembangkan sistem backend dan mengelola database untuk platform E-Learning "DiBelajar.in" menggunakan Node.js dan Express.js, serta mengintegrasikannya dengan frontend React. Bertanggung jawab atas API otentikasi, manajemen kursus, dan pelacakan progres belajar.',
    features: [
      'Backend Node.js & Express.js untuk API',
      'Database MongoDB untuk penyimpanan data',
      'Sistem otentikasi pengguna dengan JWT',
      'Manajemen kursus dan pelacakan progres siswa',
      'Frontend React.js yang terintegrasi', // Menunjukkan koneksi ke frontend
    ],
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://di-belajar-in.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Backend', // Link ke backend
    // Anda bisa tambahkan link ke frontend repo di sini juga atau di deskripsi jika mau
    // secondaryRepoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend',
    imageUrl: '/images/dibelajarin-mern-preview.png',
  },
  // #####################################################################
  {
    title: 'Dibelajarin - Learning Management System (Laravel Backend)',
    description:
      'Merancang dan membangun keseluruhan sistem backend untuk platform E-Learning (LMS) "Dibelajarin" menggunakan framework Laravel. Fokus utama pada pembangunan panel admin yang komprehensif dengan Filament dan sistem otentikasi dengan Breeze.',
    features: [
      'Implementasi sistem otentikasi pengguna (Laravel Breeze)',
      'Panel admin full-featured untuk manajemen data (Filament)',
      'Desain database relasional untuk fitur LMS',
      'Logika custom untuk pelacakan progres belajar',
    ],
    tags: ['Laravel', 'PHP', 'Filament', 'Breeze', 'MySQL', 'Railway'],
    liveUrl: 'https://dibelajarin.up.railway.app/',
    repoUrl: 'https://github.com/fredyyfajarr/dibelajarin_2.0',
    imageUrl: '/images/dibelajarin-preview.png',
  },
  {
    title: 'Sacket - Ticketing Website (Full-Stack)',
    description:
      'Mengembangkan aplikasi pemesanan tiket secara full-stack, mulai dari desain database dan REST API di sisi backend hingga membangun antarmuka pengguna yang responsif di sisi frontend menggunakan framework Laravel.',
    features: [
      'Pengembangan end-to-end (backend & frontend)',
      'Sistem otentikasi dan manajemen event',
      'Proses booking tiket multi-langkah',
      'Integrasi payment gateway Midtrans',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Midtrans API'],
    liveUrl: 'https://sacket-x0j8k.sevalla.app/',
    repoUrl: 'https://github.com/fredyyfajarr/sacket',
    imageUrl: '/images/sacket-preview.png',
  },
  {
    title: 'Frevan - E-commerce Store (Backend)',
    description:
      'Bertanggung jawab atas seluruh pengembangan sisi backend untuk platform e-commerce fungsional. Fokus pada pembuatan REST API yang aman dan efisien untuk menangani semua logika bisnis, mulai dari manajemen produk hingga proses checkout.',
    features: [
      'REST API yang aman dengan otentikasi JWT',
      'Logika bisnis untuk keranjang belanja & alur checkout',
      'API untuk operasi CRUD pada produk dari dashboard admin',
      'Manajemen database produk dan pengguna',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://frevan.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/be-ecommerce-isaac',
    imageUrl: '/images/frevan-shop-preview.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary-blue font-mono mr-2">01.</span>
        Some Things I’ve Built
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>

      <div className="space-y-20">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div
              className={`relative group ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              }`}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1280}
                  height={720}
                  className="rounded-md shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-primary-blue/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div
              className={`text-left ${
                index % 2 === 0
                  ? 'md:order-2 md:text-right'
                  : 'md:order-1 md:text-left'
              }`}
            >
              <p className="font-mono text-primary-blue mb-2">
                Featured Project
              </p>
              <h3 className="text-3xl font-bold text-light-slate mb-4 hover:text-primary-purple">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <div className="bg-navy-light p-6 rounded-md shadow-md mb-4">
                <p className="text-slate">{project.description}</p>
                <ul className="list-disc list-inside mt-2 text-slate/80">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <ul
                className={`flex flex-wrap gap-3 font-mono text-sm mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                {project.tags.map((tag, i) => (
                  <li key={i} className="text-slate">
                    {tag}
                  </li>
                ))}
              </ul>

              <div
                className={`flex items-center gap-4 ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-primary-blue transition-colors duration-300"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-primary-blue transition-colors duration-300"
                >
                  <FiExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
