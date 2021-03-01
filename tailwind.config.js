const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          lightest: "hsl(88, 24%, 92%)",
          lighter: "hsl(88, 32%, 86%)",
          light: "hsl(88, 40%, 54%)",
          DEFAULT: "hsl(88, 44%, 40%)",
          dark: "hsl(88, 46%, 36%)",
          darker: "hsl(88, 52%, 32%)",
          darkest: "hsl(88, 72%, 20%)",
        },
        green: colors.lime,
      },
      fontSize: {
        "2xs": ".625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
