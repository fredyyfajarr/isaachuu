'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { TechMarquee } from '@/components/TechMarquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import type { Locale } from '@/lib/content';

const localeStorageKey = 'portfolio-locale';

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLocale = window.localStorage.getItem(localeStorageKey);

  if (savedLocale === 'en' || savedLocale === 'id') {
    return savedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en';
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [localeReady, setLocaleReady] = useState(false);

  useEffect(() => {
    setLocale(getInitialLocale());
    setLocaleReady(true);
  }, []);

  useEffect(() => {
    if (localeReady) {
      window.localStorage.setItem(localeStorageKey, locale);
    }
  }, [locale, localeReady]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="scroll-rail" aria-hidden="true" />
      <div className="scroll-label" aria-hidden="true">
        SCROLL
      </div>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero locale={locale} />
        <TechMarquee />
        <Projects locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
