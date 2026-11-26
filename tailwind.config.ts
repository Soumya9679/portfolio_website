import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-space)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#05070b',
          900: '#090d14',
          850: '#0d131d',
          800: '#121a27',
        },
        signal: {
          emerald: '#10b981',
          mint: '#34d399',
          cyan: '#22d3ee',
          amber: '#f59e0b',
        },
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255, 255, 255, 0.05) inset, 0 20px 50px -12px rgba(0, 0, 0, 0.6)',
        'glow-emerald': '0 0 40px -12px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 0 40px -12px rgba(34, 211, 238, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
