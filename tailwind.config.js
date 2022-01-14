const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
        serif: ['"Times New Roman"', 'ui-serif', 'Georgia', 'Cambria', 'Times', 'serif']
      },
      grayscale: {
        95: '95%',
      },
      width: {
        100: "25rem",
      },
      height: {
        34: "8.5rem",
        50: "12.5rem",
      },
      minHeight: {
        140: "35rem",
        148: "37rem",
      },
      maxHeight: {
        100: "25rem",
        120: "30rem",
      }
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      black: "#201F1F",
      sand: "#F9F4EC",
      orange: "#EE5626",
      purple: "#35109F",
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
