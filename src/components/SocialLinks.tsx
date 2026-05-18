import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <FiGithub size={18} />, label: 'GitHub', url: 'https://github.com/fredyyfajarr' },
    {
      icon: <FiLinkedin size={18} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/',
    },
    {
      icon: <FiInstagram size={18} />,
      label: 'Instagram',
      url: 'https://www.instagram.com/fredyyfajarr_/',
    },
    { icon: <FaWhatsapp size={18} />, label: 'WhatsApp', url: 'https://wa.me/6285155088581' },
  ];

  return (
    <aside className="fixed bottom-0 right-8 z-30 hidden flex-col items-center gap-5 md:flex">
      {socialLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-muted transition-all duration-300 hover:-translate-y-1 hover:text-accent-2"
        >
          {link.icon}
        </a>
      ))}
      <div className="h-24 w-px bg-line" />
    </aside>
  );
};

export default SocialLinks;
