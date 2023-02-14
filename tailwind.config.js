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
        header: "22rem",
        nav: "28rem",
        collection: "45rem",
        collectionB: "47rem",
      },
      colors:{
        Brown: "#b08e49",
        Header: "#6a6d80",
        btn: "#292929",
        Text: "#dcdcdc",
        Collection: "#dec9a0",
      },
      fontFamily: {
        font: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}