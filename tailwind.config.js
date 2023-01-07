/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#fff',
        secondary:{
          100:'#000',
          200:'#002'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}