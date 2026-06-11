'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  projectsContent,
  type Locale,
  type Project,
} from '@/lib/content';
import { TechTag } from './TechTag';
import { getPortfolioProjects } from '@/lib/projectSource';

type ProjectsProps = {
  locale: Locale;
};

const getPrimaryHref = (project: Project) => `/project/${project.id}`;

const ProjectVisual = ({ project }: { project: Project }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 220,
    damping: 22,
  });
  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 170,
    damping: 24,
  });
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), {
    stiffness: 170,
    damping: 24,
  });

  return (
    <motion.div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative aspect-[16/10] overflow-hidden border border-line bg-ink shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
    >
      <motion.div
        style={{ x: imageX, y: imageY }}
        className="absolute -inset-6"
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 36vw, 90vw"
            className="object-cover opacity-80 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(circle_at_30%_20%,rgba(0,215,255,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(123,44,255,0.28),transparent_35%)] p-10">
            <div className="flex items-center justify-between font-mono text-xs text-accent-2">
              <span>{project.label.en}</span>
              {project.liveUrl && <FiExternalLink size={18} />}
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-muted">
                preview_pending()
              </p>
              <h4 className="max-w-sm text-3xl font-black leading-tight text-paper">
                {project.title}
              </h4>
            </div>
          </div>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-tr from-void via-transparent to-accent/20" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.28) 48%, transparent 55%)',
          x: imageX,
        }}
      />
    </motion.div>
  );
};

const ProjectLinks = ({ project, locale }: { project: Project; locale: Locale }) => {
  const copy = projectsContent[locale];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-accent/70 bg-accent/10 px-3 py-2 font-mono text-xs font-bold text-paper transition-all duration-300 hover:border-accent-2 hover:bg-accent-2/10"
        >
          <FiExternalLink />
          {copy.live}
        </a>
      )}
    </div>
  );
};

const MetaLine = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div>
    <dt className="font-mono text-xs uppercase text-accent-2">{label}</dt>
    <dd className="mt-1 text-sm text-soft">{value}</dd>
  </div>
);

const FeaturedProjectRow = ({
  project,
  index,
  locale,
  active,
  onActivate,
}: {
  project: Project;
  index: number;
  locale: Locale;
  active: boolean;
  onActivate: () => void;
}) => {
  const copy = projectsContent[locale];
  const number = String(index).padStart(2, '0');

  return (
    <motion.article
      whileHover={{ x: 14 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      data-cursor="active"
      className={`group border-t border-line py-8 transition-colors duration-300 last:border-b ${
        active ? 'border-accent/70' : ''
      }`}
    >
      <div className="grid gap-5 lg:grid-cols-[5rem_1fr_auto] lg:items-start">
        <div className="font-mono text-sm text-muted">
          {number}
          <span className="ml-2 text-accent">-&gt;</span>
        </div>

        <div>
          <Link
            href={getPrimaryHref(project)}
            className="inline-flex items-start gap-4 text-balance text-[clamp(2rem,5vw,5.6rem)] font-black leading-none text-paper transition-colors duration-300 group-hover:text-accent-2"
          >
            {project.title}
            <FiArrowUpRight className="mt-2 shrink-0 text-2xl text-accent md:text-4xl" />
          </Link>
          <p className="mt-5 max-w-3xl text-base leading-7 text-soft md:text-lg">
            {project.description[locale]}
          </p>

          <dl className="mt-6 grid gap-4 md:grid-cols-3">
            <MetaLine label={copy.role} value={project.role[locale]} />
            <MetaLine label={copy.scope} value={project.scope[locale]} />
            <MetaLine label={copy.status} value={project.status[locale]} />
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-muted">
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </ul>

          <div className="mt-6 lg:hidden">
            <ProjectVisual project={project} />
          </div>
        </div>

        <ProjectLinks project={project} locale={locale} />
      </div>
    </motion.article>
  );
};

const LabProject = ({
  project,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: Locale;
}) => {
  const copy = projectsContent[locale];

  return (
    <motion.article
      data-cursor="active"
      className="group border-t border-line py-6 transition-colors duration-300 hover:border-accent-2/70"
    >
      <div className="grid gap-4 md:grid-cols-[4rem_1fr_auto] md:items-start">
        <span className="font-mono text-sm text-muted">
          {String(index).padStart(2, '0')}
        </span>
        <div>
          <Link
            href={getPrimaryHref(project)}
            className="inline-flex items-center gap-3 text-2xl font-black text-paper transition-colors duration-300 group-hover:text-accent-2 md:text-3xl"
          >
            {project.title}
            <FiArrowUpRight className="text-accent" />
          </Link>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-soft">
            {project.description[locale]}
          </p>
          <dl className="mt-4 grid gap-3 text-sm md:grid-cols-3">
            <MetaLine label={copy.role} value={project.role[locale]} />
            <MetaLine label={copy.scope} value={project.scope[locale]} />
            <MetaLine label={copy.status} value={project.status[locale]} />
          </dl>
          <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </ul>
        </div>
        <ProjectLinks project={project} locale={locale} />
      </div>
    </motion.article>
  );
};

const Projects = ({ locale }: ProjectsProps) => {
  const copy = projectsContent[locale];
  const [portfolioProjects, setPortfolioProjects] = useState<Project[]>([]);
  const featuredProjects = portfolioProjects.filter(
    (project) => project.tier === 'featured'
  );
  const otherProjects = portfolioProjects.filter((project) => project.tier === 'other');
  const [activeProject, setActiveProject] = useState(0);
  const previewProject = featuredProjects[activeProject] ?? featuredProjects[0];

  useEffect(() => {
    let ignore = false;

    getPortfolioProjects().then((nextProjects) => {
      if (!ignore) {
        setPortfolioProjects(nextProjects);
        setActiveProject(0);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <section id="work" className="section-shell">
        <div className="pointer-events-none absolute right-0 top-24 hidden text-[18vw] font-black leading-none text-paper/[0.03] lg:block">
          WORK
        </div>

        <div className="mx-auto w-full max-w-[calc(100vw-2.5rem)] xl:max-w-7xl">
          <div className="mb-14 md:ml-[7rem]">
            <p className="font-mono text-sm text-accent">
              {copy.title} <span className="text-muted">/&gt;</span>
            </p>
            <h2 className="mt-3 max-w-4xl text-balance text-[clamp(2.2rem,5vw,5.5rem)] font-black leading-tight text-soft">
              {copy.featuredTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
              {copy.featuredIntro}
            </p>
          </div>

          <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,1fr)_31rem]">
            <div className="min-w-0">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectRow
                  key={project.title}
                  project={project}
                  index={index}
                  locale={locale}
                  active={activeProject === index}
                  onActivate={() => setActiveProject(index)}
                />
              ))}
            </div>

            <aside className="sticky top-28 hidden h-fit lg:block">
              <AnimatePresence mode="wait">
                {previewProject && (
                  <motion.div
                    key={previewProject.id}
                    initial={{ opacity: 0, y: 22, filter: 'blur(14px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -22, filter: 'blur(14px)' }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={getPrimaryHref(previewProject)}
                      className="group block"
                      aria-label={`Open ${previewProject.title}`}
                    >
                      <ProjectVisual project={previewProject} />
                    </Link>
                    <p className="mt-4 font-mono text-xs text-muted">
                      active_project ={' '}
                      <span className="text-accent-2">
                        {previewProject.title}
                      </span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </aside>
          </div>
        </div>
      </section>

      {otherProjects.length > 0 && (
      <section id="lab" className="section-shell">
        <div className="pointer-events-none absolute left-4 top-24 hidden text-[18vw] font-black leading-none text-paper/[0.03] lg:block">
          LAB
        </div>

        <div className="mx-auto w-full max-w-[calc(100vw-2.5rem)] xl:max-w-7xl">
          <div className="mb-12 md:ml-[7rem]">
            <p className="font-mono text-sm text-accent">
              {copy.otherTitle} <span className="text-muted">/&gt;</span>
            </p>
            <h2 className="mt-3 max-w-5xl text-balance text-[clamp(2rem,4.6vw,4.8rem)] font-black leading-tight text-soft">
              {copy.otherHeading}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
              {copy.otherIntro}
            </p>
          </div>

          <div>
            {otherProjects.map((project, index) => (
              <LabProject
                key={project.title}
                project={project}
                index={index}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default Projects;
