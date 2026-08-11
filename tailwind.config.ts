import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--bg-main)',
        'bg-alt': 'var(--bg-alt)',
        'border': "var(--border-subtle)",
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'brand-cta': {
          DEFAULT: 'var(--brand-cta)',
          hover: 'var(--brand-cta-hover)',
          glow: 'var(--brand-cta-glow)',
          ring: "var(--brand-cta)",
          border: "var(--surface-card-border)",
        },
        'surface-card': 'var(--surface-card)',
        'surface-card-border': 'var(--surface-card-border)',
        'surface-hover': 'var(--surface-hover)',
        'accent-subtle': 'var(--accent-subtle)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'var(--font-arabic)', 'sans-serif'],
        sans: ['var(--font-sans)', 'var(--font-arabic)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Cairo', 'Tajawal', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glow': '0 0 25px -5px var(--brand-cta-glow)',
        'glow-lg': '0 0 50px -10px var(--brand-cta-glow)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'card-light': '0 8px 30px rgba(97, 6, 5, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
