/** @type {import('tailwindcss').Config} */
const animate = require("tailwindcss-animate");

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#F8F4F0",
          500: "#98908B",
        },
        green: "#277C78",
      },
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [animate],
};
