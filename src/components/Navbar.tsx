// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { navContent, type Locale } from '@/lib/content';

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

const languages: Locale[] = ['en', 'id'];

const Navbar = ({ locale, onLocaleChange }: NavbarProps) => {
  const copy = navContent[locale];

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-dark-blue/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold font-mono text-primary-blue hover:text-primary-purple transition-colors duration-300"
        >
          Isaachuu
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex items-center space-x-8 font-mono">
            <li>
              <a
                href="#about"
                className="hover:text-primary-blue transition-colors duration-300"
              >
                {copy.about}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary-blue transition-colors duration-300"
              >
                {copy.projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary-blue transition-colors duration-300"
              >
                {copy.contact}
              </a>
            </li>
          </ul>

          <div className="flex items-center rounded border border-primary-blue/50 font-mono text-sm overflow-hidden">
            {languages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => onLocaleChange(language)}
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
