import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Mohamed Ayad - Full-Stack Web Developer',
  description: 'Full-Stack Web Developer specializing in React, Next.js, WordPress, and Laravel. Building high-performance, responsive web applications.',
  keywords: ['Web Developer', 'Full-Stack Developer', 'React', 'Next.js', 'WordPress', 'Laravel', 'Front-End Developer'],
  authors: [{ name: 'Mohamed Ayad' }],
  openGraph: {
    title: 'Mohamed Ayad - Full-Stack Web Developer',
    description: 'Full-Stack Web Developer specializing in React, Next.js, WordPress, and Laravel.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
