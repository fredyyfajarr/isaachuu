// components/Footer.tsx
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/fredyyfajarr' },
    {
      icon: <FiLinkedin />,
      url: 'https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/',
    },
    // { icon: <FiTwitter />, url: 'https://twitter.com/your-username' },
  ];

  return (
    <footer className="container mx-auto px-6 py-8">
      <div className="flex flex-col items-center justify-center">
        {/* Social Icons for Mobile */}
        <div className="flex md:hidden space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary-blue transition-colors duration-300 text-2xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="font-mono text-slate text-sm">
          Built by Isaachuu with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
