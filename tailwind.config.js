/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        header: "25rem",
        headersm: "9rem",        
        headermd: "20rem",
      },
      height:{
        nav: "35rem",
        img: "50rem"
      },
      width:{
        img: "50rem"
      },
      colors:{
        Blue: "#5c89a3",
        Text: "#b7acaa",
      }
    },
  },
  plugins: [],
}