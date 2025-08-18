// components/About.tsx
import React from 'react';

const About = () => {
  const skills = [
    'Node.js (Express)',
    'PHP (Laravel)',
    'MongoDB',
    'MySQL',
    'React.js',
    'Next.js',
    'REST API',
    'Git & GitHub',
  ];

  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-primary-blue font-mono mr-2">02.</span>
        About Me
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 text-slate">
          <p className="mb-4">
            Hello! My name is Fredy Fajar Adi Putra, a developer who is
            passionate about building reliable digital foundations. My journey
            into web development began with a deep dive into the server-side,
            where I honed my skills in designing database architecture and
            creating efficient REST APIs with the MERN stack for an e-commerce
            project.
          </p>
          <p className="mb-4">
            That strong backend foundation encouraged me to take on bigger
            challenges: building applications end-to-end. I then ventured into
            full-stack development using frameworks like Laravel, which allows
            me to not only architect the logic but also build functional
            interfaces for users.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary-blue mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* Kolom untuk foto bisa ditambahkan di sini jika mau */}
        {/* <div className="md:col-span-2"> ... your photo ... </div> */}
      </div>
    </section>
  );
};

export default About;
