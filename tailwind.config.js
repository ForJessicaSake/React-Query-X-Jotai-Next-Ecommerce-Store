/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        header: "32rem",
        headermd: "13rem"
      },
      height:{
        nav: "35rem",
        img: "70rem"
      },
      width:{
        img: "50rem"
      },
      colors:{
        Blue: "#5c89a3"
      }
    },
  },
  plugins: [],
}