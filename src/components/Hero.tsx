'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownRight } from 'react-icons/fi';
import { heroContent, type Locale } from '@/lib/content';

type HeroProps = {
  locale: Locale;
};

const Hero = ({ locale }: HeroProps) => {
  const copy = heroContent[locale];
  const [wordIndex, setWordIndex] = useState(0);
  const activeWord = copy.rotatingWords[wordIndex % copy.rotatingWords.length];

  useEffect(() => {
    setWordIndex(0);
  }, [locale]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => current + 1);
    }, 1900);

    return () => window.clearInterval(interval);
  }, []);

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
            <br />
            <span className="text-soft">Adi Putra</span>
          </h1>
          <h2 className="mt-6 max-w-3xl text-balance font-mono text-[clamp(1.75rem,4.8vw,4.8rem)] font-black leading-tight text-soft">
            {copy.headline}{' '}
            <span className="relative inline-grid min-w-[10ch] overflow-hidden align-bottom text-paper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${locale}-${activeWord}`}
                  initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: '-110%', opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="col-start-1 row-start-1 text-accent-2"
                >
                  {activeWord}
                </motion.span>
              </AnimatePresence>
            </span>
            <span
              className="ml-2 inline-block h-8 w-3 translate-y-1 bg-accent-2 md:h-14"
              style={{ animation: 'caret 1.1s steps(1) infinite' }}
            />
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
          whileHover={{
            rotateX: 3,
            rotateY: -4,
            y: -8,
          }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          style={{ transformPerspective: 900 }}
          className="relative min-w-0"
          data-cursor="active"
        >
          <div className="absolute -inset-4 hidden border border-accent/20 md:block" />
          <div className="relative overflow-hidden border border-line bg-panel/70 font-mono text-sm shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/3] border-b border-line bg-ink">
              <Image
                src="/images/fredy-profile.png"
                alt="Fredy Fajar Adi Putra"
                fill
                priority
                sizes="(min-width: 768px) 42vw, 90vw"
                className="object-cover object-[50%_28%] grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-accent-2">profile.image()</p>
                <p className="mt-1 text-2xl font-black text-paper">
                  Fredy Fajar Adi Putra
                </p>
              </div>
            </div>
            <div className="p-5">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
