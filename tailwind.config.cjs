/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
