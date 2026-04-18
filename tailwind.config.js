/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#46396A",
          light: "#968CB1",
          dark: "#534676",
        },

        secondary: "#8E6CEF",

        background: {
          DEFAULT: "#F5F3F9",
          subtle: "#F5F3F9",
        },

        accent: "#63C194",

        neutral: {
          DEFAULT: "#858585",
          muted: "#9B92B5",
        },
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(94.55deg, #8E6CEF 3.47%, #46396A 124.66%)",
      },
    },
  },
  plugins: [],
};