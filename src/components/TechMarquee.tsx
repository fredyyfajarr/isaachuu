'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiVuedotjs,
  SiDocker,
  SiPostgresql,
  SiFigma,
  SiGit,
} from 'react-icons/si';

const techs = [
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Laravel', icon: <SiLaravel /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Vue.js', icon: <SiVuedotjs /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Figma', icon: <SiFigma /> },
];

// Duplicate multiple times to ensure seamless infinite scroll on wide screens
const duplicatedTechs = [...techs, ...techs, ...techs];

export const TechMarquee = () => {
  return (
    <section className="relative flex w-full overflow-hidden border-y border-line bg-void/50 py-8">
      {/* Left and right gradient masks for smooth fade in/out */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-void to-transparent md:w-48"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-void to-transparent md:w-48"></div>

      <motion.div
        className="flex min-w-max items-center gap-16 px-8 md:gap-24"
        animate={{ x: ['0%', '-33.333333%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 font-mono text-xl font-bold text-muted transition-colors hover:text-accent-2 md:text-2xl"
          >
            <span className="text-4xl md:text-5xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
