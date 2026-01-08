/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-black': '#0a0a0a',
        'sand-gray': '#1a1a1a',
        'sand-light': '#2a2a2a',
      },
      boxShadow: {
        'embossed': '6px 6px 12px #050505, -6px -6px 12px #0f0f0f',
        'debossed': 'inset 6px 6px 12px #050505, inset -6px -6px 12px #0f0f0f',
        'embossed-sm': '3px 3px 6px #050505, -3px -3px 6px #0f0f0f',
        'debossed-sm': 'inset 3px 3px 6px #050505, inset -3px -3px 6px #0f0f0f',
        'embossed-hover': '8px 8px 16px #050505, -8px -8px 16px #121212',
      },
      fontFamily: {
        'luxury': ['Cinzel', 'serif'],
        'premium': ['Montserrat', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}