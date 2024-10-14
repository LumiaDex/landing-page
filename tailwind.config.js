/** @type {import('tailwindcss').Config} */
const tailwindcssAnimate = require('tailwindcss-animated');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
    },
    screens: {
      xs: "428px",
      sm: "640px",
      md: "790px",
      lg: "1300px",
      xl: "1450px",
      "2xl": "1736px",
      "3xl": "1920px",
    },
    extend: {
      boxShadow: {
      },
      backgroundImage: {

      },
      maxWidth: {
        container: '1440px',
      },
      colors: {
        primary: '#03D181',
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities }) {
      const newUtilities = {

      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

