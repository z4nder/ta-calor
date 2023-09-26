const defaultTheme = require("tailwindcss/defaultTheme");

const brand = {
  sunglow: {
    50: "#fefae8",
    100: "#fff4c2",
    200: "#ffe689",
    300: "#ffcc33",
    400: "#fdb912",
    500: "#ec9f06",
    600: "#cc7902",
    700: "#a35405",
    800: "#86420d",
    900: "#723611",
    950: "#431a05",
  },
  sundark: {
    50: "#fff7ed",
    100: "#ffecd4",
    200: "#ffd6a8",
    300: "#ffb871",
    400: "#ff8f38",
    500: "#fd6e12",
    600: "#ee5308",
    700: "#d14009",
    800: "#9d310f",
    900: "#7e2a10",
    950: "#441206",
  },
};
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        ...brand,
      },
    },
  },
  fontFamily: {
    sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    cursive: ["cursive"],
  },
  plugins: [],
};
