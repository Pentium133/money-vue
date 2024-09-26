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
        cyan: "#82C9D7",
        navy: "#626070",
        yellow: "#F2CDAC",
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
      flexBasis: {
        "5/12": "calc(42% - 12px)",
        "7/12": "calc(58% - 12px)",
      },
    },
  },
  plugins: [animate],
};
