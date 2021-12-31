module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueperso: "#074B7C",
        blueperso2: "#47799D",
        yellowperso: "#FEC520",
      },
      zIndex: {
        999: "-1",
      },
      transitionDelay: {
        3000: "3000ms",
      },
      width: {
        90: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
