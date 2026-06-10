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
  SiNuxtdotjs,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiVite,
  SiBootstrap,
  SiSass,
  SiFigma,
} from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  'next.js': <SiNextdotjs />,
  'nextjs': <SiNextdotjs />,
  'next': <SiNextdotjs />,
  'react': <SiReact />,
  'react.js': <SiReact />,
  'reactjs': <SiReact />,
  'tailwind': <SiTailwindcss />,
  'tailwindcss': <SiTailwindcss />,
  'typescript': <SiTypescript />,
  'ts': <SiTypescript />,
  'javascript': <SiJavascript />,
  'js': <SiJavascript />,
  'node.js': <SiNodedotjs />,
  'nodejs': <SiNodedotjs />,
  'node': <SiNodedotjs />,
  'laravel': <SiLaravel />,
  'php': <SiPhp />,
  'mysql': <SiMysql />,
  'firebase': <SiFirebase />,
  'mongodb': <SiMongodb />,
  'mongo': <SiMongodb />,
  'vue': <SiVuedotjs />,
  'vue.js': <SiVuedotjs />,
  'vuejs': <SiVuedotjs />,
  'nuxt': <SiNuxtdotjs />,
  'nuxt.js': <SiNuxtdotjs />,
  'nuxtjs': <SiNuxtdotjs />,
  'docker': <SiDocker />,
  'html': <SiHtml5 />,
  'css': <SiCss3 />,
  'python': <SiPython />,
  'django': <SiDjango />,
  'flask': <SiFlask />,
  'postgresql': <SiPostgresql />,
  'postgres': <SiPostgresql />,
  'vite': <SiVite />,
  'bootstrap': <SiBootstrap />,
  'sass': <SiSass />,
  'scss': <SiSass />,
  'figma': <SiFigma />,
};

export const TechTag = ({ tag }: { tag: string }) => {
  const normalized = tag.toLowerCase().trim();
  const Icon = iconMap[normalized];

  return (
    <li className="flex items-center gap-1.5 border border-line bg-void/50 px-2.5 py-1.5 transition-colors hover:border-accent-2/50 hover:text-paper">
      {Icon && <span className="text-accent">{Icon}</span>}
      <span>{tag}</span>
    </li>
  );
};
