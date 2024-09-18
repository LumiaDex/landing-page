/** @type {import('tailwindcss').Config} */
const tailwindcssAnimate = require('tailwindcss-animated');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
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
        'black-01': 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px'
      },
      backgroundImage: {
        'gradient-light': 'radial-gradient(63.86% 63.86% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'gradient-violet-light': 'radial-gradient(63.86% 63.86% at 50% 50%, rgba(119, 97, 203, 0) 0%, rgba(119, 97, 203, 0.4) 100%)',
        'gradient-violet': 'radial-gradient(63.95% 63.95% at 50% -5.23%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 68.19%), radial-gradient(100% 100% at 50% 100%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0) 68.19%), linear-gradient(360deg, #6F54E1 0%, #886AF9 100%)',
        'gradient-violet-2': 'radial-gradient(63.86% 63.86% at 50% 50%, rgba(119, 97, 203, 0) 0%, rgba(119, 97, 203, 0.1) 100%);',
      },
      maxWidth: {
        container: '1440px',
      },
      colors: {
        primary: '#886AF9',
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gaming-gradient': {
          background: 'linear-gradient(90deg, #FFFFFF 0%, #BFC7FD 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

