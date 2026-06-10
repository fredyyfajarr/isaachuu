'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { getPortfolioProjects } from '@/lib/projectSource';
import type { Project } from '@/lib/content';
import { TechTag } from '@/components/TechTag';

const GalleryCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const next = () => setCurrentIndex((c) => (c + 1) % images.length);
  const prev = () =>
    setCurrentIndex((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-void/80 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
      <Image
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        fill
        className="object-contain"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 border border-line bg-panel/70 p-3 text-paper backdrop-blur transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 border border-line bg-panel/70 p-3 text-paper backdrop-blur transition-colors hover:border-accent-2 hover:text-accent-2"
          >
            <FiChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 transition-all ${
                  currentIndex === i
                    ? 'w-8 bg-accent-2'
                    : 'w-2 bg-paper/40 hover:bg-paper/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function ProjectDetail() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Since we don't have global state for locale outside the homepage, 
  // we'll default to 'en' or read from localStorage for consistency
  const [locale, setLocale] = useState<'en' | 'id'>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = window.localStorage.getItem('portfolio-locale');
      if (savedLocale === 'en' || savedLocale === 'id') {
        setLocale(savedLocale);
      }
    }

    if (id) {
      getPortfolioProjects().then((projects) => {
        const found = projects.find((p) => p.id === id);
        setProject(found || null);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-void text-paper">
        <p className="font-mono text-sm text-muted">loading_project_data()...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-void text-paper">
        <h1 className="text-4xl font-black">Project Not Found</h1>
        <Link
          href="/#work"
          className="mt-6 inline-flex items-center gap-2 font-mono text-accent transition-colors hover:text-accent-2"
        >
          <FiArrowLeft /> Return to Portfolio
        </Link>
      </div>
    );
  }

  // Combine imageUrl and galleryUrls for the carousel
  const allImages = [
    ...(project.imageUrl ? [project.imageUrl] : []),
    ...(project.galleryUrls || []),
  ];

  return (
    <main className="min-h-screen bg-void pb-24 pt-10 text-paper">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <nav className="mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-soft transition-colors hover:text-accent-2"
          >
            <FiArrowLeft /> Back to Work
          </Link>
        </nav>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-12 border-b border-line pb-8">
            <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-soft md:text-xl">
              {project.description[locale]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent/70 bg-accent/10 px-5 py-3 font-mono text-sm font-bold text-paper transition-all duration-300 hover:border-accent-2 hover:bg-accent-2/10"
                >
                  <FiExternalLink size={18} />
                  Visit Live Demo
                </a>
              )}
            </div>
          </header>

          {allImages.length > 0 && (
            <div className="mb-16">
              <GalleryCarousel images={allImages} />
            </div>
          )}

          <div className="grid gap-12 md:grid-cols-[1fr_300px]">
            <div>
              <h2 className="mb-6 font-mono text-lg font-bold text-accent-2">
                &gt; Key Features
              </h2>
              <ul className="grid gap-4">
                {project.features[locale].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-soft">
                    <span className="mt-1 shrink-0 text-accent">■</span>
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="h-fit border border-line bg-panel/30 p-6 backdrop-blur">
              <dl className="grid gap-6">
                <div>
                  <dt className="font-mono text-xs uppercase text-accent-2">
                    Role
                  </dt>
                  <dd className="mt-1 font-medium text-paper">
                    {project.role[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase text-accent-2">
                    Scope
                  </dt>
                  <dd className="mt-1 font-medium text-paper">
                    {project.scope[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase text-accent-2">
                    Status
                  </dt>
                  <dd className="mt-1 font-medium text-paper">
                    {project.status[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase text-accent-2">
                    Tech Stack
                  </dt>
                  <dd className="mt-3">
                    <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                      {project.tags.map((tag) => (
                        <TechTag key={tag} tag={tag} />
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
