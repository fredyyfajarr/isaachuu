// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto px-6 min-h-screen flex flex-col justify-center pt-24"
    >
      <div className="max-w-3xl">
        <p className="text-primary-blue font-mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-light-slate mb-4">
          Fredy Fajar Adi Putra
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-8">
          I build reliable backends for real products.
        </h2>
        <p className="max-w-xl text-slate mb-8">
          Backend engineer focused on building secure APIs, clean database
          flows, and practical full-stack applications. I enjoy turning product
          ideas into systems that are maintainable, scalable, and ready for
          real users.
        </p>
        <a
          href="#projects"
          className="inline-block bg-transparent border border-primary-blue text-primary-blue font-mono py-3 px-6 rounded hover:bg-primary-blue/10 transition-colors duration-300 text-lg"
        >
          Check out my projects!
        </a>
      </div>
    </section>
  );
};

export default Hero;
