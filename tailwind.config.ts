import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ark: {
          blue: {
            DEFAULT: '#0F4C81',
            dark: '#0A3A61',
            light: '#1565A6',
            pale: '#E3F2FD',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            dark: '#0891B2',
            light: '#22D3EE',
            pale: '#CFFAFE',
          },
          orange: {
            DEFAULT: '#F97316',
            dark: '#EA580C',
            light: '#FB923C',
            pale: '#FFEDD5',
          },
          purple: {
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
            light: '#A78BFA',
            pale: '#EDE9FE',
          },
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#94A3B8',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          dark: '#0F172A',
        },
        border: {
          light: '#E2E8F0',
          medium: '#CBD5E1',
          dark: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

