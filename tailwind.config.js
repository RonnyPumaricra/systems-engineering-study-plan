/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin') // eslint-disable-line
const colors = require('tailwindcss/colors') // eslint-disable-line

export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      amber: colors.amber,
      sky: colors.sky,
      green: colors.green,
      stone: colors.stone,
    },
    fontFamily: {
      serif: ["Raleway", "serif"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      animation: {
        "fade-to-left": "fade-to-left 750ms ease-out forwards"
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animate-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
  safelist: [
    {
      pattern: /(bg|border)-(amber|sky|green-stone)-(50|100|200|300|400|500|600|700|800|900|950)/,
      varians: ["hover"]
    }
  ]
}

