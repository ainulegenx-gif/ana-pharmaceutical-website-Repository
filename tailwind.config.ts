import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0A1F44', 800: '#10295A', 700: '#17356F' },
        royal: { 600: '#1D4ED8', 500: '#2F62E6', 100: '#E3ECFF' },
        accent: { teal: '#0EA5A4' },
      },
    },
  },
  plugins: [],
};
export default config;
