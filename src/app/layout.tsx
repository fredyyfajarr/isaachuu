import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SocialLinks from '@/components/SocialLinks';

const siteUrl = 'https://github.com/fredyyfajarr/isaachuu';
const siteTitle = 'Fredy Fajar Adi Putra | Backend Engineer';
const siteDescription =
  'Bilingual portfolio of Fredy Fajar Adi Putra, a backend engineer focused on REST APIs, database design, Laravel, Node.js, and full-stack web applications.';

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
