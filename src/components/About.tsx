// components/About.tsx
import React from 'react';
import { aboutContent, skills, type Locale } from '@/lib/content';

type AboutProps = {
  locale: Locale;
};

const About = ({ locale }: AboutProps) => {
  const copy = aboutContent[locale];

  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-primary-blue font-mono mr-2">01.</span>
        {copy.title}
        <span className="flex-grow ml-4 h-px bg-slate/30"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-3 text-slate">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
          <p>{copy.skillsIntro}</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center">
                <span className="text-primary-blue mr-2">{'>'}</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
