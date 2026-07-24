import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#05070d',
          card: 'rgba(15, 23, 42, 0.65)',
          surface: '#0d1322',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(16, 185, 129, 0.3)',
        },
        brand: {
          emerald: '#10b981',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
        },
      },
      animation: {
        gradient: 'gradient-shift 8s ease infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-delayed': 'float 12s ease-in-out 6s infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow-emerald': '0 0 40px -10px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.25)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [],
};

export default config;
