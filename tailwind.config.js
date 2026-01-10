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
        'embossed': '4px 4px 8px #040404, -4px -4px 8px #0c0c0c',
        'debossed': 'inset 4px 4px 8px #040404, inset -4px -4px 8px #0c0c0c',
        'embossed-sm': '2px 2px 4px #040404, -2px -2px 4px #0c0c0c',
        'debossed-sm': 'inset 2px 2px 4px #040404, inset -2px -2px 4px #0c0c0c',
        'embossed-hover': '6px 6px 12px #040404, -6px -6px 12px #101010',
        'hand-glow': '0 0 15px rgba(255, 255, 255, 0.2)',
        'hand-glow-active': '0 0 20px rgba(255, 255, 255, 0.4)',
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