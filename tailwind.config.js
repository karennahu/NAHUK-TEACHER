/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        sand: '#F5EFE6',
        gold: '#C9A96E',
        'gold-dark': '#A0814A',
        ink: '#2D2D2D',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        'serif-display': ['DM Serif Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
