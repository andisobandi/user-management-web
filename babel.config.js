module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"],
  env: {
    production: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "usage",
            corejs: {
              version: 3,
              proposals: true,
            },
            debug: true,
          },
        ],
      ],
      plugins: ["@babel/plugin-transform-react-constant-elements"],
    },
    development: {
      presets: [["@babel/preset-env"]],
    },
  },
};
