import './globals.css';
import type { Metadata } from 'next';
import { Alexandria, Cairo, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
// import { ScrollArea } from '@/components/ui/scroll-area';
import ScrollToTop from '@/components/layout/scroll-top';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo',
  display: 'swap',
});
const alexandria = Alexandria({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-alexandria',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedayad.com'),
  title: 'Mohamed Ayad - Front-End & eCommerce Developer',
  description: 'Front-End & eCommerce Developer specializing in React, Next.js, custom Shopify/WordPress stores, and n8n workflow automation. Building high-performance web experiences.',
  keywords: ['Web Developer', 'Front-End Developer', 'eCommerce Developer', 'React', 'Next.js', 'WordPress', 'Shopify Liquid', 'n8n Automation', 'SaaS', 'CikoBot', 'Salla', 'Zid'],
  authors: [{ name: 'Mohamed Ayad' }],
  openGraph: {
    title: 'Mohamed Ayad - Front-End & eCommerce Developer',
    description: 'Front-End & eCommerce Developer specializing in React, Next.js, custom Shopify/WordPress stores, and n8n workflow automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${cairo.variable} ${alexandria.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>
          {children}
          {/* <ScrollArea /> */}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
