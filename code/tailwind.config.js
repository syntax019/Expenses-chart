/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    colors: {
      red: "hsl(10, 79%, 65%)",
      white: "#ffff",
      cream: "hsl(27, 66%, 92%)",
      darkBrown: "hsl(25, 47%, 15%)",
      mediumBrown: "hsl(28, 10%, 53%)",
    },
    fontFamily: {
      myFont: "DM Sans",
    },
    extend: {},
  },
  plugins: [],
};
