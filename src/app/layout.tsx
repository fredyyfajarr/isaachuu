import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SocialLinks from '@/components/SocialLinks';

const siteUrl = 'https://github.com/fredyyfajarr/isaachuu';
const siteTitle = 'Fredy Fajar Adi Putra | Full-Stack Developer';
const siteDescription =
  'Interactive bilingual portfolio of Fredy Fajar Adi Putra, a full-stack developer focused on REST APIs, database design, Laravel, Node.js, Next.js, and product-ready web applications.';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Fredy Fajar Adi Putra',
  },
  description: siteDescription,
  keywords: [
    'Fredy Fajar Adi Putra',
    'Isaachuu',
    'Full-Stack Developer',
    'Backend Engineer',
    'Laravel Developer',
    'Node.js Developer',
    'REST API',
    'MongoDB',
    'MySQL',
    'Next.js',
  ],
  authors: [{ name: 'Fredy Fajar Adi Putra' }],
  creator: 'Fredy Fajar Adi Putra',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Isaachuu Portfolio',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SocialLinks />
      </body>
    </html>
  );
}
