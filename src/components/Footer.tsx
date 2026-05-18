import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { footerContent, type Locale } from '@/lib/content';

type FooterProps = {
  locale: Locale;
};

const socialLinks = [
  { label: 'GitHub', icon: <FiGithub />, url: 'https://github.com/fredyyfajarr' },
  {
    label: 'LinkedIn',
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/',
  },
  {
    label: 'Instagram',
    icon: <FiInstagram />,
    url: 'https://www.instagram.com/fredyyfajarr_/',
  },
  { label: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/6285155088581' },
];

const Footer = ({ locale }: FooterProps) => {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>{footerContent[locale]}</p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center gap-2 text-soft transition-colors duration-300 hover:text-accent-2"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
