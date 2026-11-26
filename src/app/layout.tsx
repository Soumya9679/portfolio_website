import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Newsreader } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import CommandPalette from '@/components/ui/CommandPalette';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#f8f7f4',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Soumyadip Maity — Data Science, ML & AI Engineering',
    template: '%s | Soumyadip Maity',
  },
  description:
    'Portfolio of Soumyadip Maity — B.Tech IT undergraduate (8.79 CGPA) specializing in Data Science, Machine Learning, NLP, FAISS/RAG pipelines, model evaluation, and FastAPI deployment.',
  keywords: [
    'Soumyadip Maity',
    'Data Science',
    'Machine Learning',
    'AI Engineering',
    'NLP',
    'RAG',
    'FAISS',
    'FastAPI',
    'Python',
    'Portfolio',
  ],
  authors: [{ name: 'Soumyadip Maity' }],
  creator: 'Soumyadip Maity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Soumyadip Maity — Data Science, ML & AI Engineering',
    description:
      'Python ML pipelines, multilingual Speech AI, local FAISS/RAG systems, and rigorous NLP model evaluation.',
    siteName: 'Soumyadip Maity Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyadip Maity — Data Science, ML & AI Engineering',
    description:
      'Python ML pipelines, multilingual Speech AI, local FAISS/RAG systems, and rigorous NLP model evaluation.',
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
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden font-sans">
        <AnimatedBackground />
        <Navbar />
        <CommandPalette />
        <main className="relative">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
