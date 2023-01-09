/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  trailingComma: "all",
  singleQuote: false,
  plugins: [
    require("prettier-plugin-astro"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
