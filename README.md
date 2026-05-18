# Fredy Fajar Adi Putra Portfolio

Interactive bilingual portfolio for Fredy Fajar Adi Putra, a full-stack developer focused on REST APIs, database design, Laravel, Node.js, Next.js, and practical product systems.

## Overview

This portfolio uses a code-driven visual direction inspired by experimental developer portfolios: dark interface, terminal-like copy, custom cursor, animated transitions, and recruiter-friendly project scanning.

## Featured Work

- DiBelajar.in LMS, a MERN learning platform with authentication, course management, progress tracking, and integrated React frontend.
- Dibelajarin LMS, a Laravel and Filament learning platform with role-based dashboards and relational database design.
- Sacket, a Laravel ticketing platform with booking flow, event management, Midtrans payment integration, and admin tooling.
- Frevan, an e-commerce backend focused on secure REST APIs, JWT authentication, product management, cart flow, and checkout logic.
- Additional public GitHub projects, including combined full-stack entries for SwapSkill, DiBelajar.in, Frevan, and BI-DOM, plus Random Skill Gen-ZRator, Gelora Library, ProjectUAS, Isaac Cloth, and Isaacpedia.

## Features

- English and Indonesian language switcher with saved preference.
- `Start />`, `Work />`, `Lab />`, `About />`, and `Contact />` flow.
- Interactive Work section with numbered featured projects and live preview panel.
- Lab section for smaller repositories, experiments, academic work, and archives.
- Role, scope, stack, and status metadata for every project.
- Combined full-stack project entries with separate repository links for backend and frontend code.
- Branded media placeholders for repositories that do not have screenshots.
- Custom cursor, hover states, scroll rail, and Framer Motion transitions.
- Mobile navigation.
- SEO metadata for recruiter-friendly previews.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

Build for production:

```bash
npm run build
```

## Project Structure

```text
src/app
  layout.tsx      # Site metadata and root layout
  page.tsx        # Main page composition
  globals.css     # Tailwind theme tokens and global styles

src/components
  Hero.tsx
  About.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  Navbar.tsx
  SocialLinks.tsx

src/lib
  content.ts       # Bilingual copy and portfolio project data
```

## Contact

- Email: fredyfajaradiputra08@gmail.com
- LinkedIn: https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/
- Instagram: https://www.instagram.com/fredyyfajarr_/
