/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#21A179",
        whitegrad: "#F7FAF8",
        gardensgreen: "#E6FAF3",
        gardensform: "#FAFAFA",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        tenor: ["Tenor Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
