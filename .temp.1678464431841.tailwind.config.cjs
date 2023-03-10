/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "8xl": "1550px",
      },
      colors: {
        primary: "#940106",
        primLight: "#DC1F26",
        green: "#D4F0D4",
      },
    },
  },
  plugins: [requre("@tailwindcss/typography")],
};
