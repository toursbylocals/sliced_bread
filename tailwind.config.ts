import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#B29769',
          200: '#96876E',
          300: '#635235',
          400: '#302410',
        },
        secondary: {
          100: '#FFFFFF',
          200: '#CCCCCC',
          300: '#878787',
        },
        background: '#E1D3AD',
        highlight: '#E3E441',
      },
    },
  },
  plugins: [],
};
export default config;
