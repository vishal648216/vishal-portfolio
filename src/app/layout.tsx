import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/layout/SmoothScroll';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vishalkhanapara.com'),
  title: {
    default: 'Vishal Khanapara | Full Stack & MERN Developer',
    template: '%s | Vishal Khanapara',
  },
  description: 'Portfolio of Vishal Khanapara - Full Stack Developer specializing in React, Next.js, Node.js, PHP, Laravel, and MERN stack applications. Explore projects and contact for web development services.',
  keywords: [
    'Vishal Khanapara',
    'Full Stack Developer',
    'Web Developer Portfolio',
    'MERN Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'PHP Laravel Developer',
    'B2B Marketplace Developer',
    'Freelance Web Engineer',
    'Mobile & Web Application Developer',
  ],
  authors: [{ name: 'Vishal Khanapara', url: 'https://vishalkhanapara.com' }],
  creator: 'Vishal Khanapara',
  publisher: 'Vishal Khanapara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vishal Khanapara | Full Stack & MERN Developer',
    description: 'Explore web applications, B2B platforms, and full stack projects developed by Vishal Khanapara.',
    url: 'https://vishalkhanapara.com',
    siteName: 'Vishal Khanapara Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Vishal Khanapara - Full Stack Developer Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishal Khanapara | Full Stack Developer',
    description: 'Portfolio of Vishal Khanapara - Full Stack & MERN Developer.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vishalkhanapara.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vishal Khanapara',
  url: 'https://vishalkhanapara.com',
  image: 'https://vishalkhanapara.com/logo.png',
  jobTitle: 'Full Stack Developer',
  description: 'Full Stack & MERN Developer specializing in building responsive web applications, REST APIs, and modern digital platforms.',
  sameAs: [
    'https://wa.me/918141594182',
  ],
  knowsAbout: [
    'Full Stack Development',
    'React.js',
    'Next.js',
    'Node.js',
    'PHP',
    'Laravel',
    'MySQL',
    'MongoDB',
    'API Integration',
    'Web Architecture',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={plusJakarta.variable}
        style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
