/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      primary:'hsl(217, 54%, 11%)',
      white:'hsl(0, 0%, 100%)',
      line:'hsl(215, 32%, 27%)',
      soft:'hsl(215, 51%, 70%)',
      cyan:'hsl(178, 100%, 50%)',
      card:'hsl(216, 50%, 16%)',
      trans:'hsl(0 0% 0%);'
    }
  },
  plugins: [],
}
