// components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// 1. Definisikan data proyek Anda di sini
const projectData = [
  {
    title: 'Sacket - Ticketing Website',
    description:
      'Sebuah platform pemesanan tiket konser yang dibangun untuk menyediakan alur pemesanan yang cepat dan aman bagi pengguna. Proyek ini menangani semua proses mulai dari pemilihan event hingga integrasi pembayaran.',
    features: [
      'Sistem otentikasi pengguna (Login & Register)',
      'Katalog event dengan fitur pencarian dan filter',
      'Proses booking tiket multi-langkah',
      'Integrasi Midtrans sebagai payment gateway',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Midtrans API'],
    liveUrl: 'https://sacket-x0j8k.sevalla.app/',
    repoUrl: 'https://github.com/fredyyfajarr/ticketing-project', // Ganti dengan URL repo Anda
    imageUrl: '/images/sacket-preview.png', // Pastikan gambar ada di public/images
  },
  {
    title: 'Frevan - E-commerce Store',
    description:
      'Website e-commerce fungsional yang dibuat dengan MERN stack. Pengguna dapat menelusuri produk, menambahkannya ke keranjang, dan melakukan checkout. Dilengkapi juga dengan dashboard admin untuk manajemen produk.',
    features: [
      'Manajemen state global dengan Redux Toolkit',
      'Keranjang belanja dan alur checkout fungsional',
      'REST API yang aman dengan otentikasi JWT',
      'Dashboard admin untuk operasi CRUD pada produk',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    liveUrl: 'https://frevan.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/mern-fe-ecommerce', // Ganti dengan URL repo Anda
    imageUrl: '/images/frevan-shop-preview.png', // Pastikan gambar ada di public/images
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
            {/* Kolom Gambar */}
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

            {/* Kolom Deskripsi */}
            <div
              className={`text-left md:text-right ${
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
