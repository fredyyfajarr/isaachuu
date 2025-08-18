// components/SocialLinks.tsx
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const SocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col fixed bottom-0 left-8 z-10 items-center">
      <ul className="flex flex-col items-center space-y-6">
        <li>
          <a
            href="https://github.com/fredyyfajarr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary-blue transition-all duration-300 hover:-translate-y-1 block"
          >
            <FiGithub size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary-blue transition-all duration-300 hover:-translate-y-1 block"
          >
            <FiLinkedin size={24} />
          </a>
        </li>
      </ul>
      <div className="h-24 w-px bg-slate mt-6"></div>
    </div>
  );
};

export default SocialLinks;
