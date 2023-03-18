const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './astro.config.mjs'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"iA Writer Quattro"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'hsl(54 100% 93%)',
      text: 'hsl(256 20% 30%)',
      primary: '#fffbda',
      secondary: '#e4daff',
      accent: '#ffdaf5',
    },
  },
  plugins: [],
};
