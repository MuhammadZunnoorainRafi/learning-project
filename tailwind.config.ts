import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ' sans-serif'],
        new: ['Dhurjati', 'sans-serif'],
      },
    },
  },
  daisyui: { themes: ['light'] },
  plugins: [require('daisyui')],
} satisfies Config;
