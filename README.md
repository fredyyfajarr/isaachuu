# Fredy Fajar Adi Putra Portfolio

Interactive bilingual portfolio for Fredy Fajar Adi Putra, a full-stack developer focused on Laravel, Node.js, database design, REST APIs, and product-ready web applications.

## Current Direction

The portfolio is intentionally curated. It shows only stronger projects that are useful for recruiter review:

- Sacket, a Laravel ticketing platform.
- Dibelajarin, a Laravel LMS with Filament admin tooling.
- DiBelajar.in, a MERN LMS with live Vercel demo.
- Frevan, a MERN e-commerce project with live Vercel demo.
- SwapSkill, a Laravel and Next.js skill-barter platform.
- BI-DOM, a Laravel and Next.js full-stack web application.

Smaller experiments, old academic archives, and simple projects are not shown in the main portfolio.

## Live Demo Policy

Laravel trial demo links are removed for now because expired links reduce recruiter trust. Only stable live demos are shown. Laravel projects remain visible through source code and can be reopened publicly later with a new hosting plan.

## Features

- English and Indonesian language switcher with saved preference.
- Code-style dark interface with custom cursor and motion transitions.
- Full-name hero section with profile photo.
- Custom `</>` favicon/logo.
- Curated project data with role, scope, stack, status, repository links, and optional live links.
- Firebase Firestore-ready project source with local fallback data.
- Firestore seed script for pushing curated projects to the `projects` collection.
- SEO metadata for recruiter-friendly previews.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Firebase / Firestore
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

Build for production:

```bash
npm run build
```

## Firebase Setup

The site works without Firebase because it falls back to `src/data/projects.json`.

To use Firestore, copy `.env.example` to `.env.local` and fill:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL=fredyfajar46@gmail.com
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
```

The `/admin` page uses Google Sign-In and Google reCAPTCHA before opening the admin dashboard. Create a reCAPTCHA v2 Checkbox site key for your portfolio domain, then put the public site key in `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.

Deploy the included `firestore.rules`, then seed the curated projects:

```bash
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\path\to\service-account.json"
npm run seed:projects
```

Do not commit Firebase service account files or secrets.

## Project Structure

```text
src/app
  layout.tsx      # Site metadata and root layout
  page.tsx        # Main page composition
  globals.css     # Tailwind theme tokens and global styles
  icon.svg        # Custom code favicon

src/components
  Hero.tsx
  About.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  Navbar.tsx
  CustomCursor.tsx
  SocialLinks.tsx

src/data
  projects.json   # Curated fallback and Firestore seed data

src/lib
  content.ts
  firebase.ts
  projectSource.ts
```

## Contact

- Email: fredyfajaradiputra08@gmail.com
- LinkedIn: https://www.linkedin.com/in/fredy-fajar-adi-putra-a51935368/
- GitHub: https://github.com/fredyyfajarr
