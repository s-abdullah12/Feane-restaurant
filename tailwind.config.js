/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'feane-bg': '#0a0a0a',
        'feane-light': '#141414',
        'feane-lighter': '#1f1f1f',
        'feane-accent': '#f5f5f5',
        'feane-accent-hover': '#e5e5e5',
        'feane-border': '#27272a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
