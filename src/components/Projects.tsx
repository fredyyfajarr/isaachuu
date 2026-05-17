// components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type FeaturedProject = {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  repoUrl?: string;
  imageUrl: string;
};

type GitHubProject = {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: 'DiBelajar.in - Learning Management System (MERN Stack)',
    description:
      'Built and maintained the backend system for an e-learning platform with Node.js, Express.js, MongoDB, and a React frontend integration.',
    features: [
      'REST API for authentication, course data, and learning progress',
      'MongoDB data modeling for LMS entities',
      'JWT-based authentication and role-aware access flow',
      'Frontend integration with React.js',
    ],
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'JWT', 'Vercel'],
    liveUrl: 'https://di-belajar-in.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Backend',
    imageUrl: '/images/dibelajarin-mern-preview.png',
  },
  {
    title: 'Dibelajarin - Learning Management System (Laravel Backend)',
    description:
      'Designed and developed a Laravel-based LMS backend with Filament admin tooling, authentication, relational data design, and learning progress logic.',
    features: [
      'Laravel Breeze authentication',
      'Filament admin panel for data management',
      'Relational database design for LMS features',
      'Custom learning progress and role-based flows',
    ],
    tags: ['Laravel', 'PHP', 'Filament', 'Breeze', 'MySQL', 'Railway'],
    liveUrl: 'https://dibelajarin.up.railway.app/',
    repoUrl: 'https://github.com/fredyyfajarr/dibelajarin_2.0',
    imageUrl: '/images/dibelajarin-preview.png',
  },
  {
    title: 'Sacket - Ticketing Website (Full-Stack)',
    description:
      'Developed a full-stack ticketing platform covering event management, booking flow, role-based access, QR ticket validation, and payments.',
    features: [
      'End-to-end Laravel development',
      'Event, ticket, promo, and order management',
      'Multi-step booking and payment flow',
      'Midtrans payment gateway integration',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Midtrans API'],
    liveUrl: 'https://sacket-x0j8k.sevalla.app/',
    repoUrl: 'https://github.com/fredyyfajarr/sacket',
    imageUrl: '/images/sacket-preview.png',
  },
  {
    title: 'Frevan - E-commerce Store (Backend)',
    description:
      'Built the backend foundation for an e-commerce platform, focusing on secure APIs, product operations, cart logic, and checkout flow.',
    features: [
      'Secure REST API with JWT authentication',
      'Cart and checkout business logic',
      'CRUD APIs for products and admin operations',
      'MongoDB data management for products and users',
    ],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://frevan.vercel.app/',
    repoUrl: 'https://github.com/fredyyfajarr/be-ecommerce-isaac',
    imageUrl: '/images/frevan-shop-preview.png',
  },
];

const githubProjects: GitHubProject[] = [
  {
    title: 'SwapSkill Backend',
    description:
      'Laravel API for a student skill-barter app with Sanctum authentication, profiles, offers, bookmarks, reviews, notifications, statistics, and Filament admin tools.',
    tags: ['Laravel', 'Sanctum', 'Filament', 'MySQL'],
    repoUrl: 'https://github.com/fredyyfajarr/swapskill-be',
  },
  {
    title: 'SwapSkill Frontend',
    description:
      'Next.js frontend for the SwapSkill platform with auth, skill board, profile pages, bookmarks, reviews, notifications, and API integration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/fredyyfajarr/swapskill-fe',
  },
  {
    title: 'Random Skill Gen-ZRator',
    description:
      'Android Java app for daily quest gamification with XP, levels, streaks, achievements, custom challenges, Room persistence, and Firebase sync.',
    tags: ['Android', 'Java', 'Firebase', 'Room', 'MVVM'],
    repoUrl: 'https://github.com/fredyyfajarr/RandomSkillGenZRator',
  },
  {
    title: 'DiBelajar.in Node.js Frontend',
    description:
      'React and Vite frontend for the DiBelajar.in LMS with role-based dashboards, course flows, forms, notifications, and backend API integration.',
    tags: ['React', 'Vite', 'Zustand', 'React Query'],
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend',
  },
  {
    title: 'DiBelajar.in Node.js Frontend 2',
    description:
      'Second frontend iteration for the DiBelajar.in Node.js LMS, focused on responsive UI, protected routes, and interactive course management.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    repoUrl: 'https://github.com/fredyyfajarr/DiBelajar.in-NodeJs-Frontend-2',
  },
  {
    title: 'LMS Aachuu',
    description:
      'Collaborative learning web app concept for free education access, with Fredy contributing as backend engineer on the platform team.',
    tags: ['LMS', 'Laravel', 'React', 'Backend'],
    repoUrl: 'https://github.com/fredyyfajarr/lms-aachuu',
  },
  {
    title: 'Image Quantization App',
    description:
      'Streamlit image-processing app implementing non-uniform quantization with equal-frequency binning, histogram analysis, codebook output, and file-size comparison.',
    tags: ['Python', 'Streamlit', 'Image Processing'],
    repoUrl: 'https://github.com/fredyyfajarr/tugas-kuantisasi-unpam-kel6',
  },
  {
    title: 'Deteksi Penyakit',
    description:
      'Next.js project for a disease-detection application concept, structured as a web app and kept as an additional public portfolio sample.',
    tags: ['Next.js', 'React', 'Web App'],
    repoUrl: 'https://github.com/fredyyfajarr/deteksi-penyakit',
  },
  {
    title: 'BI-DOM Backend',
    description:
      'Laravel backend repository for the BI-DOM project, kept as a public code sample for backend structure and implementation practice.',
    tags: ['Laravel', 'PHP', 'Backend'],
    repoUrl: 'https://github.com/fredyyfajarr/bi-dom-backend',
  },
  {
    title: 'BI-DOM Frontend',
    description:
      'Next.js frontend repository for the BI-DOM project, paired with the backend implementation as a full-stack project sample.',
    tags: ['Next.js', 'React', 'Frontend'],
    repoUrl: 'https://github.com/fredyyfajarr/bi-dom-frontend',
  },
  {
    title: 'Gelora Library',
    description:
      'Public library-management project sample showing application structure and implementation practice for a data-driven system.',
    tags: ['Library System', 'Web App', 'Database'],
    repoUrl: 'https://github.com/fredyyfajarr/gelora-library',
  },
  {
    title: 'ProjectUAS Waroeng DFFFP',
    description:
      'Academic desktop application project with local setup, database import, and admin/user account flows for a food-ordering use case.',
    tags: ['Desktop App', 'MySQL', 'Academic Project'],
    repoUrl: 'https://github.com/fredyyfajarr/projectUAS',
  },
];

const ProjectLinks = ({
  liveUrl,
  repoUrl,
  alignRight = false,
}: {
  liveUrl?: string;
  repoUrl?: string;
  alignRight?: boolean;
}) => (
  <div
    className={`flex items-center gap-4 ${
      alignRight ? 'md:justify-end' : 'md:justify-start'
    }`}
  >
    {repoUrl && (
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open GitHub repository"
        className="text-slate hover:text-primary-blue transition-colors duration-300"
      >
        <FiGithub size={24} />
      </a>
    )}
    {liveUrl && (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open live project"
        className="text-slate hover:text-primary-blue transition-colors duration-300"
      >
        <FiExternalLink size={24} />
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-primary-blue font-mono mr-2">02.</span>
        Some Things I&apos;ve Built
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => {
          const alignRight = index % 2 === 0;

          return (
            <div
              key={project.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div
                className={`relative group ${
                  alignRight ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
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
                  alignRight
                    ? 'md:order-2 md:text-right'
                    : 'md:order-1 md:text-left'
                }`}
              >
                <p className="font-mono text-primary-blue mb-2">
                  Featured Project
                </p>
                <h3 className="text-3xl font-bold text-light-slate mb-4 hover:text-primary-purple transition-colors duration-300">
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
                    {project.features.map((feature) => (
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
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                  alignRight={alignRight}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-24">
        <div className="mb-8">
          <p className="font-mono text-primary-blue mb-2">More GitHub Work</p>
          <h3 className="text-3xl font-bold text-light-slate">
            Additional projects and code samples
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {githubProjects.map((project) => (
            <article
              key={project.title}
              className="bg-navy-light p-6 rounded-md shadow-md border border-slate/10 hover:border-primary-blue/40 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h4 className="text-xl font-bold text-light-slate">
                  {project.title}
                </h4>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} repository`}
                  className="text-slate hover:text-primary-blue transition-colors duration-300 shrink-0"
                >
                  <FiGithub size={22} />
                </a>
              </div>
              <p className="text-slate mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-3 font-mono text-sm">
                {project.tags.map((tag) => (
                  <li key={tag} className="text-slate/80">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
