// components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-20 text-center flex flex-col items-center"
    >
      <h2 className="text-xl font-mono text-primary-blue mb-4">
        03. What’s Next?
      </h2>
      <h3 className="text-5xl font-bold text-light-slate mb-4">Get In Touch</h3>
      <p className="max-w-xl text-slate mb-8">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        href="mailto:fredyfajaradiputra08@gmail.com"
        className="inline-block bg-transparent border border-primary-blue text-primary-blue font-mono py-3 px-6 rounded hover:bg-primary-blue/10 transition-colors duration-300 text-lg"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
