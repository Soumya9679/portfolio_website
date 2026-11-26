import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        display: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        paper: {
          50: '#FAF9F6',
          100: '#F3F1EC',
          200: '#E6E3DC',
        },
        ink: {
          950: '#0C0E12',
          900: '#111318',
          700: '#334155',
          500: '#64748B',
        },
        cobalt: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
      },
      boxShadow: {
        editorial: '0 1px 2px rgba(17, 19, 24, 0.04), 0 12px 32px -12px rgba(17, 19, 24, 0.08)',
        'editorial-lg': '0 4px 12px rgba(17, 19, 24, 0.05), 0 24px 48px -16px rgba(17, 19, 24, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
