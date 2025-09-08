// components/SocialLinks.tsx
import React from 'react';
// Impor ikon Instagram dan WhatsApp
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col fixed bottom-0 left-8 z-10 items-center">
      <ul className="flex flex-col items-center space-y-6">
        {/* Link Instagram */}
        <li>
          <a
            href="https://www.instagram.com/fredyyfajarr_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary-blue transition-all duration-300 hover:-translate-y-1 block"
          >
            <FiInstagram size={24} />
          </a>
        </li>
        {/* Link LinkedIn */}
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
        {/* Link WhatsApp */}
        <li>
          <a
            href="https://wa.me/6285155088581"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-primary-blue transition-all duration-300 hover:-translate-y-1 block"
          >
            <FaWhatsapp size={24} />
          </a>
        </li>
      </ul>
      <div className="h-24 w-px bg-slate mt-6"></div>
    </div>
  );
};

export default SocialLinks;
