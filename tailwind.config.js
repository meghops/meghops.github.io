const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./services/*.html", "./products/*.html"],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral,
        primary: '#B61D1B',
        low: '#17B978',
        medium: '#0AA1DD',
        high: '#FEB139',
        critical: '#F55353',
        gray: colors.slate,
        seashell: '#F4F3F4',
        mortal: '#515455',
        dark: '#07090D',      
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
