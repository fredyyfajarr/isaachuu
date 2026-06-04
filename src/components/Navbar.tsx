'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { navContent, type Locale } from '@/lib/content';

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const languages: Locale[] = ['en', 'id'];

const Navbar = ({ locale, onLocaleChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const copy = navContent[locale];
  const links = [
    { href: '#start', label: copy.start },
    { href: '#work', label: copy.work },
    { href: '#about', label: copy.about },
    { href: '#contact', label: copy.contact },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-void/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="#start"
          className="font-mono text-2xl font-black tracking-normal text-paper transition-colors duration-300 hover:text-accent-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-accent">{'<'}</span>
          ISAAC
          <span className="text-accent-2">{'/>'}</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <ul className="hidden items-center gap-7 font-mono text-sm font-bold text-soft md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group transition-colors duration-300 hover:text-paper"
                >
                  <span>{link.label}</span>
                  <span className="ml-1 text-muted transition-colors duration-300 group-hover:text-accent">
                    /&gt;
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center border border-line bg-panel/70 font-mono text-xs font-bold">
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => {
                  onLocaleChange(language);
                  setIsOpen(false);
                }}
                className={`px-3 py-2 transition-colors duration-300 ${
                  locale === language
                    ? 'bg-paper text-void'
                    : 'text-soft hover:bg-white/5 hover:text-paper'
                }`}
                aria-pressed={locale === language}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="text-paper transition-colors duration-300 hover:text-accent-2 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-5 mb-5 border border-line bg-panel/95 p-4 shadow-2xl md:hidden">
          <ul className="grid gap-2 font-mono text-lg font-bold">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-2 py-3 text-soft transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                  <span className="text-accent">/&gt;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
