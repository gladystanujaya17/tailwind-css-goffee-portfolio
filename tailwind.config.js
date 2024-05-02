/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#33302C',
        primary: '#FF8800',
        secondary: {
          200: '#FFA552',
          500: '#B34E00'
        }
      },
      fontFamily: {
        body: ['Noto Sans'],
      },
      backgroundImage: {
        'hero-pattern': "url(/bg-1.jpg)"
      }
    },
  },
  plugins: [],
}
