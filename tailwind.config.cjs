/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1550px",
      },
      colors: {
        primary: "#940106",
        primLight: "#DC1F26",
      },
    },
  },
  plugins: [],
};
