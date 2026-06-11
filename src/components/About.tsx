'use client';

import { motion } from 'framer-motion';
import { aboutContent, careerTimeline, skills, type Locale } from '@/lib/content';

type AboutProps = {
  locale: Locale;
};

const About = ({ locale }: AboutProps) => {
  const copy = aboutContent[locale];

  return (
    <section id="about" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto grid w-full max-w-[calc(100vw-2.5rem)] gap-10 xl:max-w-7xl md:grid-cols-[0.85fr_1.15fr] md:items-start"
      >
        <div className="min-w-0 md:sticky md:top-28">
          <p className="font-mono text-sm text-accent">
            About <span className="text-muted">/&gt;</span>
          </p>
          <h2 className="mt-3 text-balance text-[clamp(2.4rem,6vw,6rem)] font-black leading-none text-paper">
            {copy.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-soft">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="min-w-0 border border-line bg-panel/65 p-5 font-mono text-sm shadow-2xl backdrop-blur">
          <div className="mb-5 border-b border-line pb-4 text-muted">
            fredy.fajar.class.ts
          </div>
          <pre className="overflow-x-auto leading-7 text-soft">
            <code>
              <span className="code-token">class</span> FredyFajarAdiPutra {'{\n'}
              {'  '}
              <span className="code-key">constructor</span>() {'{\n'}
              {'    '}this.name = <span className="code-string">&apos;Fredy Fajar Adi Putra&apos;</span>;
              {'\n    '}this.alias = <span className="code-string">&apos;Isaachuu&apos;</span>;
              {'\n    '}this.email = <span className="code-string">&apos;fredyfajaradiputra08@gmail.com&apos;</span>;
              {'\n  }\n\n  '}
              <span className="code-key">currentlyWorkingWith</span>() {'{\n'}
              {'    '}
              <span className="code-token">return</span> [
              {skills.map((skill, index) => (
                <span key={skill}>
                  <span className="code-string">&apos;{skill}&apos;</span>
                  {index === skills.length - 1 ? '' : ', '}
                </span>
              ))}
              ];
              {'\n  }\n\n  '}
              <span className="code-key">mindset</span>() {'{\n'}
              {'    '}
              <span className="code-token">return</span>{' '}
              <span className="code-string">&apos;ship reliable systems, keep learning, document clearly&apos;</span>;
              {'\n  }\n}'}
            </code>
          </pre>

          <div className="mt-8 border-t border-line pt-5">
            <p className="mb-4 text-soft">{copy.skillsIntro}</p>
            <ul className="grid gap-2 md:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-soft">
                  <span className="text-accent-2">-&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Interactive Timeline */}
      <div className="mx-auto mt-32 max-w-[calc(100vw-2.5rem)] xl:max-w-7xl">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          className="mb-12 font-mono text-xl font-bold text-accent-2"
        >
          &gt; {locale === 'en' ? 'Journey & Milestones' : 'Perjalanan & Pencapaian'}
        </motion.h3>
        
        <div className="relative border-l border-line pl-6 md:pl-10 ml-2 md:ml-4">
          {careerTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-3 w-3 rounded-full bg-accent-2 shadow-[0_0_10px_rgba(var(--color-accent-2),0.8)]" />
              <div className="mb-1 inline-block rounded bg-panel/50 px-2 py-1 font-mono text-xs font-bold text-accent-2 backdrop-blur">
                {item.year}
              </div>
              <h4 className="mb-2 text-xl font-bold text-paper">{item.title[locale]}</h4>
              <p className="max-w-2xl text-soft leading-relaxed">{item.description[locale]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
