/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
