import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    fontFamily: {
      nanum: ['Nanum Myeongjo', 'sans-serif'],
      sans: ['Public Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
