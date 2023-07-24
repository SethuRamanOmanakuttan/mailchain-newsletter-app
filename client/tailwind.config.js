/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,png}"],
  theme: {
    borderWidth: {
      default: "1px",
      3: "3px",
      4: "4px",
    },
    colors: {
      batman: "#3d3d3d",
      white: "#ffffff",
      beige: "#fcf5f5",
      green: "#008744",
      red: "#d62d20",
      gray: "	#36393e",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        bebas: ["Bebas Neue", "display"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
