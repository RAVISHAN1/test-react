module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // poppins: "Poppins",
        inter: "Inter",
      },
      colors: {
        // "dark-purple": "#081A51",
        // "light-white": "#F96D35",
        "theme-primary": "#F96D35",
        "theme-primary-dark": "#E05F2F",

        "theme-secondary": "#717174",
        "theme-secondary-dark": "#5F5F61",
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
};