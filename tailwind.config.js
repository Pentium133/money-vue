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
        red: "#C94736",
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
      spacing: {
        "1/2-gap-6": "calc(50% - 0.75rem)",
        "1/3-gap-6": "calc(33.333% - 0.75rem)", // Учитываем половину gap для 1/3 ширины
        "2/3-gap-6": "calc(66.666% - 0.75rem)", // Учитывае
      },
    },
  },
  plugins: [animate],
};
