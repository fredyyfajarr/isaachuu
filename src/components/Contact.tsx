'use client';

import { motion } from 'framer-motion';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { contactContent, type Locale } from '@/lib/content';

type ContactProps = {
  locale: Locale;
};

const Contact = ({ locale }: ContactProps) => {
  const copy = contactContent[locale];

  return (
    <section id="contact" className="section-shell flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto w-full max-w-[calc(100vw-2.5rem)] xl:max-w-7xl"
      >
        <p className="font-mono text-sm text-accent">
          Contact <span className="text-muted">/&gt;</span>
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <h2 className="text-balance text-[clamp(3rem,8vw,8rem)] font-black leading-none text-paper">
              {copy.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-soft">
              {copy.body}
            </p>
          </div>

          <div className="border border-line bg-panel/60 p-6 font-mono">
            <p className="text-sm text-muted">{copy.eyebrow}</p>
            <a
              href="mailto:fredyfajaradiputra08@gmail.com"
              className="mt-6 inline-flex w-full items-center justify-between border border-accent bg-accent/10 px-5 py-4 font-bold text-paper transition-all duration-300 hover:-translate-y-1 hover:border-accent-2 hover:bg-accent-2/10"
            >
              <span className="inline-flex items-center gap-3">
                <FiMail />
                {copy.cta}
              </span>
              <FiArrowUpRight />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
