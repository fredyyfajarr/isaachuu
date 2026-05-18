'use client';

import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { heroContent, type Locale } from '@/lib/content';

type HeroProps = {
  locale: Locale;
};

const Hero = ({ locale }: HeroProps) => {
  const copy = heroContent[locale];

  return (
    <section
      id="start"
      className="section-shell flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-[calc(100vw-2.5rem)] gap-12 xl:max-w-7xl md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative z-10 min-w-0"
        >
          <p className="mb-5 font-mono text-sm text-accent-2">
            <span className="text-accent">{'//'}</span> {copy.intro}
          </p>
          <h1 className="text-balance font-mono text-[clamp(3.4rem,9vw,7.8rem)] font-black leading-[0.9] text-paper">
            Fredy
            <br />
            Fajar
          </h1>
          <h2 className="mt-6 max-w-3xl text-balance font-mono text-[clamp(1.75rem,4.8vw,4.8rem)] font-black leading-tight text-soft">
            {copy.headline}
            <span className="ml-2 inline-block h-8 w-3 translate-y-1 bg-accent-2 md:h-14" style={{ animation: 'caret 1.1s steps(1) infinite' }} />
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-soft">
            {copy.body}
          </p>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-3 border border-accent bg-accent/10 px-6 py-4 font-mono text-sm font-bold text-paper transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:bg-accent-2/10"
          >
            {copy.cta}
            <FiArrowDownRight />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative min-w-0"
          data-cursor="active"
        >
          <div className="absolute -inset-4 hidden border border-accent/20 md:block" />
          <div className="relative border border-line bg-panel/70 p-5 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="mb-5 flex items-center gap-2 border-b border-line pb-4 text-xs text-muted">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3">isaac.profile.ts</span>
            </div>
            <pre className="overflow-x-auto leading-7 text-soft">
              <code>
                <span className="code-token">class</span> FredyFajar {'{\n'}
                {'  '}
                <span className="code-key">role</span>() {'{\n'}
                {'    '}
                <span className="code-token">return</span>{' '}
                <span className="code-string">&apos;Full-Stack Developer&apos;</span>;
                {'\n  }\n\n  '}
                <span className="code-key">focus</span>() {'{\n'}
                {'    '}
                <span className="code-token">return</span> [
                <span className="code-string">&apos;Laravel&apos;</span>,{' '}
                <span className="code-string">&apos;Node.js&apos;</span>,{' '}
                <span className="code-string">&apos;Next.js&apos;</span>];
                {'\n  }\n\n  '}
                <span className="code-key">builds</span>() {'{\n'}
                {'    '}
                <span className="code-token">return</span>{' '}
                <span className="code-string">&apos;APIs, LMS, ticketing, ecommerce&apos;</span>;
                {'\n  }\n}'}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
