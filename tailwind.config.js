module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        safe: "960px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("windicss/plugin/typography")],
};
