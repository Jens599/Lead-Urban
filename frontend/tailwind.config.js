/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-purple": "#191D88",
        "primary-blue": "#1450A3",
        "primary-light-blue": "#337CCF",
        "accent-orange": "#FFC436",
      },
      dropShadow: {
        accent:
          "drop-shadow(0 10px 8px rgb(255 196 54 / 0.04)) drop-shadow(0 4px 3px rgb(255 196 54 / 0.1))",
      },
      textShadow: {
        DEFAULT: "0 2px 4px #000",
        sm: "0 2px 2px #000",
        lg: "0 4px 10px #000",
        accent:
          "0px 0px 2px rgba(255, 196, 54, 0.98),0px 0px 4px rgba(255, 196, 54, 0.85),0px 0px 5px rgba(255, 196, 54, 0.5),0px 0px 6px rgba(255, 196, 54, 0.15),0px 0px 7px rgba(255, 196, 54, 0.02)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
