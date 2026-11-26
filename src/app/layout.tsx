import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05070b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Soumyadip Maity — AI/ML Engineer & Data Scientist',
    template: '%s | Soumyadip Maity',
  },
  description:
    'Portfolio of Soumyadip Maity — B.Tech IT undergraduate (8.79 CGPA) engineering production ML microservices, multilingual speech-to-intent pipelines, privacy-first RAG systems, and full-stack AI applications.',
  keywords: [
    'Soumyadip Maity',
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Scientist',
    'FastAPI',
    'RAG',
    'LangChain',
    'FAISS',
    'NLP',
    'Speech AI',
    'Python',
    'Portfolio',
  ],
  authors: [{ name: 'Soumyadip Maity' }],
  creator: 'Soumyadip Maity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Soumyadip Maity — AI/ML Engineer & Data Scientist',
    description:
      'Production ML pipelines, multilingual Speech AI, local RAG systems, and hackathon-winning full-stack engineering.',
    siteName: 'Soumyadip Maity Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyadip Maity — AI/ML Engineer & Data Scientist',
    description:
      'Production ML pipelines, multilingual Speech AI, local RAG systems, and hackathon-winning full-stack engineering.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
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
