/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fasgreen: '#005751',
      },
    },
    fontFamily: {
      neue: ['NeueHaasGroteskDisp'],
    },
  },
  plugins: [],
}
