// components/Footer.tsx
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { footerContent, type Locale } from '@/lib/content';

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/fredyyfajarr' },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/',
    },
  ];

  return (
    <footer className="container mx-auto px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex md:hidden space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary-blue transition-colors duration-300 text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="font-mono text-slate text-sm text-center">
          {footerContent[locale]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
