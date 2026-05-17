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

const getPrimaryHref = (project: Project) =>
  project.liveUrl ?? project.repoLinks[0].url;

const ProjectMedia = ({
  project,
  href,
  compact = false,
}: {
  project: Project;
  href: string;
  compact?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${project.title}`}
    className="block"
  >
    <div
      className={`relative overflow-hidden rounded-md bg-navy-light shadow-lg border border-slate/10 group ${
        compact ? 'aspect-[16/10]' : 'aspect-video'
      }`}
    >
      {project.imageUrl ? (
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
      ) : (
        <div className="absolute inset-0 p-5 flex flex-col justify-between bg-[radial-gradient(circle_at_top_right,rgba(87,203,255,0.18),transparent_38%)]">
          <div className="flex items-center justify-between font-mono text-xs text-primary-blue">
            <span>{project.label.en}</span>
            <FiGithub size={18} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-light-slate mb-3">
              {project.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-primary-blue/30 px-2 py-1 font-mono text-xs text-slate"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
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
    className={`flex flex-wrap items-center gap-4 ${
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
        className="inline-flex items-center gap-2 text-slate hover:text-primary-blue transition-colors duration-300 font-mono text-sm"
      >
        <FiExternalLink size={20} />
        <span>{projectsContent[locale].live}</span>
      </a>
    )}
  </div>
);

const ProjectMeta = ({
  project,
  locale,
  alignRight = false,
}: {
  project: Project;
  locale: Locale;
  alignRight?: boolean;
}) => {
  const copy = projectsContent[locale];

  const items = [
    { label: copy.role, value: project.role[locale] },
    { label: copy.scope, value: project.scope[locale] },
    { label: copy.status, value: project.status[locale] },
  ];

  return (
    <dl
      className={`grid grid-cols-1 gap-3 text-sm ${
        alignRight ? 'md:text-right' : 'md:text-left'
      }`}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-mono text-primary-blue mb-1">{item.label}</dt>
          <dd className="text-slate">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
};

const StackTags = ({
  project,
  alignRight = false,
}: {
  project: Project;
  alignRight?: boolean;
}) => (
  <ul
    className={`flex flex-wrap gap-3 font-mono text-sm ${
      alignRight ? 'md:justify-end' : 'md:justify-start'
    }`}
  >
    {project.tags.map((tag) => (
      <li key={tag} className="text-slate">
        {tag}
      </li>
    ))}
  </ul>
);

const FeaturedProjectCard = ({
  project,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: Locale;
}) => {
  const alignRight = index % 2 === 0;
  const primaryHref = getPrimaryHref(project);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className={alignRight ? 'md:order-1' : 'md:order-2'}>
        <ProjectMedia project={project} href={primaryHref} />
      </div>

      <div
        className={`text-left ${
          alignRight ? 'md:order-2 md:text-right' : 'md:order-1 md:text-left'
        }`}
      >
        <p className="font-mono text-primary-blue mb-2">
          {project.label[locale]}
        </p>
        <h3 className="text-3xl font-bold text-light-slate mb-4 hover:text-primary-purple transition-colors duration-300">
          <a href={primaryHref} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <div className="bg-navy-light p-6 rounded-md shadow-md mb-4">
          <p className="text-slate mb-5">{project.description[locale]}</p>
          <ProjectMeta
            project={project}
            locale={locale}
            alignRight={alignRight}
          />
          <ul className="list-disc list-inside mt-5 text-slate/80">
            {project.features[locale].map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <StackTags project={project} alignRight={alignRight} />
        </div>
        <ProjectLinks
          project={project}
          locale={locale}
          alignRight={alignRight}
        />
      </div>
    </article>
  );
};

const OtherProjectCard = ({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) => {
  const primaryHref = getPrimaryHref(project);
  const copy = projectsContent[locale];

  return (
    <article className="bg-navy-light rounded-md border border-slate/10 shadow-md overflow-hidden hover:border-primary-blue/40 transition-colors duration-300">
      <ProjectMedia project={project} href={primaryHref} compact />
      <div className="p-5">
        <p className="font-mono text-primary-blue text-sm mb-2">
          {project.label[locale]}
        </p>
        <h3 className="text-xl font-bold text-light-slate mb-3 hover:text-primary-purple transition-colors duration-300">
          <a href={primaryHref} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="text-slate text-sm mb-4">{project.description[locale]}</p>

        <dl className="space-y-3 text-sm mb-4">
          <div>
            <dt className="font-mono text-primary-blue mb-1">{copy.role}</dt>
            <dd className="text-slate">{project.role[locale]}</dd>
          </div>
          <div>
            <dt className="font-mono text-primary-blue mb-1">{copy.scope}</dt>
            <dd className="text-slate">{project.scope[locale]}</dd>
          </div>
          <div>
            <dt className="font-mono text-primary-blue mb-1">{copy.status}</dt>
            <dd className="text-slate">{project.status[locale]}</dd>
          </div>
        </dl>

        <div className="mb-4">
          <StackTags project={project} />
        </div>
        <ProjectLinks project={project} locale={locale} />
      </div>
    </article>
  );
};

const Projects = ({ locale }: ProjectsProps) => {
  const copy = projectsContent[locale];
  const featuredProjects = projects.filter(
    (project) => project.tier === 'featured'
  );
  const otherProjects = projects.filter((project) => project.tier === 'other');

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary-blue font-mono mr-2">02.</span>
        {copy.title}
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>

      <div className="mb-12">
        <p className="font-mono text-primary-blue mb-2">{copy.featuredTitle}</p>
        <p className="text-slate max-w-2xl">{copy.featuredIntro}</p>
      </div>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.title}
            project={project}
            index={index}
            locale={locale}
          />
        ))}
      </div>

      <div className="mt-24 mb-8">
        <p className="font-mono text-primary-blue mb-2">{copy.otherTitle}</p>
        <h3 className="text-3xl font-bold text-light-slate mb-3">
          {copy.otherHeading}
        </h3>
        <p className="text-slate max-w-2xl">{copy.otherIntro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {otherProjects.map((project) => (
          <OtherProjectCard
            key={project.title}
            project={project}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
