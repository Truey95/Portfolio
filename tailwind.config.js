/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-black': '#1a1a1a',
        'sand-gray': '#121212',
        'sand-light': '#1a1a1a',
        'sand-base': '#1a1a1a',
        'david-beige': '#ECE9E1',
        'david-orange': '#F08A24',
        'david-blue': '#0A192F',
      },
      boxShadow: {
        'embossed': '12px 12px 32px #0d0d0d, -8px -8px 24px rgba(255, 255, 255, 0.05)',
        'debossed': 'inset 12px 12px 24px #0d0d0d, inset -8px -8px 24px rgba(255, 255, 255, 0.05)',
        'embossed-sm': '6px 6px 16px #0d0d0d, -4px -4px 12px rgba(255, 255, 255, 0.05)',
        'debossed-sm': 'inset 6px 6px 12px #0d0d0d, inset -4px -4px 12px rgba(255, 255, 255, 0.05)',
        'embossed-lg': '20px 20px 48px #0d0d0d, -12px -12px 36px rgba(255, 255, 255, 0.05)',
        'hand-glow': '0 0 15px rgba(255, 255, 255, 0.1)',
        'hand-glow-active': '0 0 25px rgba(255, 255, 255, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3.5rem',
      },
      textShadow: {
        'raised': '1px 1px 0px #000, -1px -1px 0px rgba(255,255,255,0.05), 2px 2px 4px rgba(0,0,0,0.8)',
        'raised-lg': '2px 2px 0px #000, -1px -1px 0px rgba(255,255,255,0.1), 4px 4px 8px rgba(0,0,0,0.9)',
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