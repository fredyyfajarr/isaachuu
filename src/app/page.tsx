// app/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Locale } from '@/lib/content';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main className="mx-auto max-w-4xl px-6">
        <Hero locale={locale} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <About locale={locale} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <Projects locale={locale} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <Contact locale={locale} />
        </motion.div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
