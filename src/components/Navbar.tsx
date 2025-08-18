// components/Navbar.tsx
import React from 'react';
import Link from 'next/link'; // 1. Impor komponen Link

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-dark-blue/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 2. Ganti <a> dengan <Link> untuk link internal */}
        <Link
          href="/"
          className="text-2xl font-bold font-mono text-primary-blue hover:text-primary-purple transition-colors duration-300"
        >
          Isaachuu
        </Link>
        <ul className="hidden md:flex items-center space-x-8 font-mono">
          {/* Untuk anchor links, <a> masih bisa digunakan */}
          <li>
            <a
              href="#about"
              className="hover:text-primary-blue transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-primary-blue transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary-blue transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            {/* Untuk link eksternal atau file, <a> tetap digunakan */}
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-blue text-primary-blue px-4 py-2 rounded hover:bg-primary-blue/10 transition-colors duration-300"
            >
              Resume
            </a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
