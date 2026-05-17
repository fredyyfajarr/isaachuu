// components/Contact.tsx
import React from 'react';
import { contactContent, type Locale } from '@/lib/content';

type ContactProps = {
  locale: Locale;
};

const Contact = ({ locale }: ContactProps) => {
  const copy = contactContent[locale];

  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-20 text-center flex flex-col items-center"
    >
      <h2 className="text-xl font-mono text-primary-blue mb-4">
        03. {copy.eyebrow}
      </h2>
      <h3 className="text-5xl font-bold text-light-slate mb-4">
        {copy.title}
      </h3>
      <p className="max-w-xl text-slate mb-8">{copy.body}</p>
      <a
        href="mailto:fredyfajaradiputra08@gmail.com"
        className="inline-block bg-transparent border border-primary-blue text-primary-blue font-mono py-3 px-6 rounded hover:bg-primary-blue/10 transition-colors duration-300 text-lg"
      >
        {copy.cta}
      </a>
    </section>
  );
};

export default Contact;
