import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SocialLinks from '@/components/SocialLinks';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Isaachuu | Backend Engineer',
  description:
    'Portofolio pribadi milik Fredy Fajar Adi Putra, seorang backend engineer yang berfokus pada pembuatan pengalaman digital yang luar biasa.',
  openGraph: {
    title: 'Isaachuu | Backend Engineer',
    description: 'Jelajahi proyek-proyek dan skill yang saya miliki.',
    url: 'https://your-domain.com', // Ganti dengan domain Anda nanti
    siteName: 'IsaachuuSite',
    images: [
      {
        url: '/og-image.png', // Buat gambar preview berukuran 1200x630px
        width: 1200,
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
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
