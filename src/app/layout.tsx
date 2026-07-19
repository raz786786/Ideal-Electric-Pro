import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import FloatingCallButton from '@/components/shared/FloatingCallButton/FloatingCallButton';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import SchemaMarkup from '@/components/shared/SchemaMarkup/SchemaMarkup';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://idealelectricpros.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.seo.defaultDescription,
    url: '/',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-home.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.seo.defaultDescription,
    images: ['/images/hero/hero-home.jpg'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg-dark)', color: 'var(--color-text-secondary)', margin: 0 }}>
        <SchemaMarkup />
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
        <FloatingCallButton />
        <BackToTop />
      </body>
    </html>
  );
}
