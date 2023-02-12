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
        Brown: "#b08e49",
        Header: "#f5f5f5",
        btn: "#292929",
        Collection: "#dec9a0",
      }
    },
  },
  plugins: [],
}