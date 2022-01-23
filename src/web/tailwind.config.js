module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./index.html",
      "./src/atomic/**/*.jsx",
      "./src/svg/*.svg",
      "./src/hooks/*.js",
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
