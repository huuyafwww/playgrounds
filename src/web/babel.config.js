module.exports = {
  plugins: [
    "babel-plugin-styled-components",
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        loose: true,
      },
    ],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-object-rest-spread"],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "2",
      },
    ],
    "@babel/preset-react",
  ],
};
