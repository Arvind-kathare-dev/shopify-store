/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
       fontFamily: {
    inter: ["var(--font-inter)", "sans-serif"],
  },
      colors: {
        primary: {
          DEFAULT: "#46396A",
          light: "#968CB1",
          dark: "#534676",
        },

        secondary: {
          DEFAULT: "#8E6CEF",
          light: "rgba(160, 140, 217, 0.25)",
          100: "#7962BC",
        },
        yellow: {
          light: "#FFF2E9",
        },
        customGray:{
          100: "#B5B3B3",
          200:"#898989",
        },

        background: {
          DEFAULT: "#F5F3F9",
          subtle: "#F5F3F9",
          card: "#EBE8F4",
          faq: "#F7F5FA",
        },

        accent: "#63C194",

        neutral: {
          DEFAULT: "#858585",
          muted: "#9B92B5",
        },
      },
      boxShadow: {
        softPurple: "0 10px 30px rgba(160, 140, 217, 0.05)",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(94.55deg, #8E6CEF 3.47%, #46396A 124.66%)",

        "primary-card-gradient":
          "linear-gradient(180deg, #8F7DC2 0%, #7259BA 100%)",

        "gradient-gray":
          "linear-gradient(110.08deg, #9075DD 0.94%, #E6E6E6 55.23%, #A08CD9 96.67%)",

        "gradient-soft":
          "linear-gradient(110.08deg, #9075DD 0.94%, #E4DBFF 55.23%, #A08CD9 96.67%)",

        "gradient-card":
          "linear-gradient(276.47deg, rgba(80, 58, 140, 0.66) 0%, rgba(80, 58, 140, 0.4) 33.55%, rgba(70, 57, 106, 0.8) 100%)",

           "gradient-card2":
          "linear-gradient(180deg, #EBE8F4 0%, #F5F3F9 100%)",
      },

     

    },
  },
  plugins: [],
};
