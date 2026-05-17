// components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  projects,
  projectsContent,
  type Locale,
  type Project,
} from '@/lib/content';

type ProjectsProps = {
  locale: Locale;
};

const ProjectMedia = ({
  project,
  href,
}: {
  project: Project;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${project.title}`}
    className="block"
  >
    <div className="relative aspect-video overflow-hidden rounded-md bg-navy-light shadow-lg border border-slate/10 group">
      {project.imageUrl && (
        <>
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-primary-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
    </div>
  </a>
);

const ProjectLinks = ({
  project,
  locale,
  alignRight = false,
}: {
  project: Project;
  locale: Locale;
  alignRight?: boolean;
}) => (
  <div
    className={`flex items-center gap-4 ${
      alignRight ? 'md:justify-end' : 'md:justify-start'
    }`}
  >
    {project.repoLinks.map((repo) => (
      <a
        key={repo.url}
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} ${repo.label[locale]} repository`}
        className="inline-flex items-center gap-2 text-slate hover:text-primary-blue transition-colors duration-300 font-mono text-sm"
      >
        <FiGithub size={20} />
        <span>{repo.label[locale]}</span>
      </a>
    ))}
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live project`}
        className="text-slate hover:text-primary-blue transition-colors duration-300"
      >
        <FiExternalLink size={24} />
      </a>
    )}
  </div>
);

const Projects = ({ locale }: ProjectsProps) => {
  const copy = projectsContent[locale];

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary-blue font-mono mr-2">02.</span>
        {copy.title}
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => {
          const alignRight = index % 2 === 0;
          const primaryHref = project.liveUrl ?? project.repoLinks[0].url;

          return (
            <div
              key={project.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`relative ${
                  alignRight ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <ProjectMedia project={project} href={primaryHref} />
              </div>

              <div
                className={`text-left ${
                  alignRight
                    ? 'md:order-2 md:text-right'
                    : 'md:order-1 md:text-left'
                }`}
              >
                <p className="font-mono text-primary-blue mb-2">
                  {project.label[locale]}
                </p>
                <h3 className="text-3xl font-bold text-light-slate mb-4 hover:text-primary-purple transition-colors duration-300">
                  <a
                    href={primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>

                <div className="bg-navy-light p-6 rounded-md shadow-md mb-4">
                  <p className="text-slate">{project.description[locale]}</p>
                  <ul className="list-disc list-inside mt-2 text-slate/80">
                    {project.features[locale].map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm mb-4 ${
                    alignRight ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-slate">
                      {tag}
                    </li>
                  ))}
                </ul>

                <ProjectLinks
                  project={project}
                  locale={locale}
                  alignRight={alignRight}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
