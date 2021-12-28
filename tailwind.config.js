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
      boxShadow: {
        blue: "0 4px 16px 0 rgba(190, 201, 242)",
        insetLeft: "inset 23px 0px 25px -20px rgba(0,0,0,0.65)",
        insetRight: "inset -23px 0px 25px -20px rgba(0,0,0,0.65)",
      },
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
        serif: ['"Times New Roman"', 'ui-serif', 'Georgia', 'Cambria', 'Times', 'serif']
      },
      width: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        90: "22.5rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
      },
      height: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        46: "11.5rem",
        50: "12.5rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        100: "25rem",
        120: "30rem",
        140: "35rem",
        152: "38rem",
        160: "40rem",
        200: "50rem",
      },
      minHeight: {
        140: "35rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
      }
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      black: "#201F1F",
      sand: "#F9F4EC",
      darksand: "#CEBDA2",
      orange: "#EE5626",
      purple: "#35109F",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
