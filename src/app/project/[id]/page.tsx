'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
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
import { CodeWindow } from '@/components/CodeWindow';

const GalleryCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

  // Parse strings "url|caption" to objects
  const parsedImages = useMemo(
    () =>
      images.map((item) => {
        const [url, ...captionParts] = item.split('|');
        return {
          url: url.trim(),
          caption: captionParts.join('|').trim() || '',
        };
      }),
    [images]
  );

  // Preload ALL images on mount
  useEffect(() => {
    parsedImages.forEach((imgObj, i) => {
      const img = new window.Image();
      img.src = imgObj.url;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(i));
      };
    });
  }, [parsedImages]);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentIndex, isTransitioning]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo((currentIndex - 1 + parsedImages.length) % parsedImages.length);
      if (e.key === 'ArrowRight') goTo((currentIndex + 1) % parsedImages.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, goTo, parsedImages.length]);

  if (parsedImages.length === 0) return null;

  const next = () => goTo((currentIndex + 1) % parsedImages.length);
  const prev = () => goTo((currentIndex - 1 + parsedImages.length) % parsedImages.length);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-void/80 shadow-[0_24px_80px_rgba(0,0,0,0.38)] group">
      {/* Render ALL images stacked, only current one is visible */}
      {parsedImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity: i === currentIndex ? 1 : 0,
            zIndex: i === currentIndex ? 10 : 1,
            pointerEvents: i === currentIndex ? 'auto' : 'none',
          }}
        >
          <Image
            src={img.url}
            alt={img.caption || `Gallery image ${i + 1}`}
            fill
            className="object-contain"
            priority={true}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {img.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 via-void/50 to-transparent p-6 pt-20 text-center">
              <p className="font-mono text-sm font-medium text-paper md:text-base">{img.caption}</p>
            </div>
          )}
        </div>
      ))}

      {/* Loading indicator */}
      {!loadedImages.has(currentIndex) && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-void/50">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-2 border-t-transparent" />
        </div>
      )}

      {parsedImages.length > 1 && (
        <>
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 border border-line bg-panel/70 p-3 text-paper backdrop-blur transition-all duration-200 hover:border-accent-2 hover:text-accent-2 hover:scale-110 disabled:opacity-50 opacity-0 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 border border-line bg-panel/70 p-3 text-paper backdrop-blur transition-all duration-200 hover:border-accent-2 hover:text-accent-2 hover:scale-110 disabled:opacity-50 opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Counter + dots */}
          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
            <span className="font-mono text-xs text-paper/80 bg-void/50 px-2 py-0.5 rounded backdrop-blur">
              {currentIndex + 1}/{parsedImages.length}
            </span>
            <div className="flex gap-2 bg-void/50 px-2 py-1.5 rounded backdrop-blur">
              {parsedImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? 'w-8 bg-accent-2'
                      : 'w-2 bg-paper/40 hover:bg-paper/80'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
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

    // Use galleryUrls if available; fall back to imageUrl only
    const allImages = project.galleryUrls && project.galleryUrls.length > 0
      ? [...new Set(project.galleryUrls)]
      : project.imageUrl
        ? [project.imageUrl]
        : [];

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
            <div className="space-y-16">
              {project.caseStudy ? (
                <div className="space-y-12">
                  <section>
                    <h2 className="mb-4 font-mono text-lg font-bold text-accent-2">
                      &gt; The Challenge
                    </h2>
                    <p className="leading-8 text-soft whitespace-pre-wrap">{project.caseStudy.challenge[locale]}</p>
                  </section>
                  <section>
                    <h2 className="mb-4 font-mono text-lg font-bold text-accent-2">
                      &gt; The Approach
                    </h2>
                    <p className="leading-8 text-soft whitespace-pre-wrap">{project.caseStudy.approach[locale]}</p>
                  </section>
                  <section>
                    <h2 className="mb-4 font-mono text-lg font-bold text-accent-2">
                      &gt; The Impact
                    </h2>
                    <p className="leading-8 text-soft whitespace-pre-wrap">{project.caseStudy.impact[locale]}</p>
                  </section>
                </div>
              ) : (
                <section>
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
                </section>
              )}

              {project.architecture && project.architecture.length > 0 && (
                <section>
                  <h2 className="mb-8 font-mono text-lg font-bold text-accent-2">
                    &gt; System Architecture
                  </h2>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.architecture.map((node, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="flex h-16 items-center justify-center rounded border border-accent-2/30 bg-accent-2/10 px-6 font-mono text-sm font-bold text-paper shadow-[0_0_15px_rgba(var(--color-accent-2),0.1)]">
                          {node}
                        </div>
                        {i < (project.architecture?.length ?? 0) - 1 && (
                          <div className="h-0.5 w-8 bg-line" />
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.codeSnippet && (
                <section>
                  <h2 className="mb-4 font-mono text-lg font-bold text-accent-2">
                    &gt; Code Highlight
                  </h2>
                  <CodeWindow
                    title={project.codeSnippet.title}
                    language={project.codeSnippet.language}
                    code={project.codeSnippet.code}
                  />
                </section>
              )}
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
