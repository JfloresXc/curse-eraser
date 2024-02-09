const colors = require("tailwindcss/colors");
const fontsize = require("tailwindcss/defaultTheme").fontSize;
import svelte from "@astrojs/svelte";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#0866FF", //rgb(20 184 166)
      secondary: {
        100: "#65676B",
        200: "#E4EBE6",
        300: "#CCD0D5",
      },
      dark: "#050505",
    },
    fontSize: {
      regular: "15px",
      ...fontsize,
    },
  },
  darkMode: "class",
};
