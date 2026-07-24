import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import AnimatedBackground from '@/components/effects/AnimatedBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#05070d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Soumyadip Maity | Data Scientist',
    template: '%s | Soumyadip Maity',
  },
  description:
    'Professional portfolio of Soumyadip Maity, a Data Scientist & Python Developer focused on data analytics, machine learning, and statistical modeling.',
  keywords: [
    'Soumyadip Maity',
    'Data Scientist',
    'Python Developer',
    'Machine Learning',
    'Data Analytics',
    'Pandas',
    'Scikit-Learn',
    'Portfolio',
  ],
  authors: [{ name: 'Soumyadip Maity' }],
  creator: 'Soumyadip Maity',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Soumyadip Maity | Data Scientist & ML Specialist',
    description:
      'A professional portfolio featuring data science projects, machine learning models, and analytical Python tools.',
    siteName: 'Soumyadip Maity Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soumyadip Maity | Data Scientist & ML Specialist',
    description:
      'Explore data science projects, machine learning models, and analytical tools by Soumyadip Maity.',
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
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden font-sans">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
