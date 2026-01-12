/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-black': '#080808',
        'sand-gray': '#121212',
        'sand-light': '#1a1a1a',
        'david-beige': '#ECE9E1',
        'david-orange': '#F08A24',
        'david-blue': '#0A192F',
      },
      boxShadow: {
        'embossed': '8px 8px 16px #030303, -8px -8px 16px #0d0d0d',
        'debossed': 'inset 8px 8px 16px #030303, inset -8px -8px 16px #0d0d0d',
        'embossed-sm': '4px 4px 8px #030303, -4px -4px 8px #0d0d0d',
        'debossed-sm': 'inset 4px 4px 8px #030303, inset -4px -4px 8px #0d0d0d',
        'embossed-hover': '12px 12px 24px #020202, -12px -12px 24px #121212',
        'hand-glow': '0 0 15px rgba(255, 255, 255, 0.1)',
        'hand-glow-active': '0 0 25px rgba(255, 255, 255, 0.3)',
      },
      textShadow: {
        'raised': '1px 1px 0px #000, -1px -1px 0px rgba(255,255,255,0.1), 2px 2px 4px rgba(0,0,0,0.8)',
        'raised-lg': '2px 2px 0px #000, -1px -1px 0px rgba(255,255,255,0.15), 4px 4px 8px rgba(0,0,0,0.9)',
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