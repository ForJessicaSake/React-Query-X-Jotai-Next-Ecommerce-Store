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
        img: "50rem",
        collection: "45rem",
        collectionB: "47rem"
      },
      colors:{
        Blue: "#5c89a3",
        Text: "#b7acaa",
        Collections: "#1f1f1f",
      }
    },
  },
  plugins: [],
}