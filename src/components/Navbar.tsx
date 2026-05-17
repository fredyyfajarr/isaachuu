// components/Navbar.tsx
import React, { useState } from 'react';
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
    { href: '#about', label: copy.about },
    { href: '#projects', label: copy.projects },
    { href: '#contact', label: copy.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-dark-blue/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center gap-4 relative">
        <Link
          href="/"
          className="text-2xl font-bold font-mono text-primary-blue hover:text-primary-purple transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Isaachuu
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex items-center space-x-8 font-mono">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary-blue transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center rounded border border-primary-blue/50 font-mono text-sm overflow-hidden">
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
                    ? 'bg-primary-blue text-dark-blue'
                    : 'text-primary-blue hover:bg-primary-blue/10'
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
            className="md:hidden text-primary-blue hover:text-primary-purple transition-colors duration-300"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-6 right-6 top-full mt-3 rounded-md border border-slate/10 bg-navy-light shadow-lg md:hidden">
            <ul className="flex flex-col font-mono">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-4 text-slate hover:text-primary-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
