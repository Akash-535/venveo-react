/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean": "#097980",
        "lemon-lime": "#D2F038",
        "Platinum": "#E8E8E8"
      },
      fontSize: {
        "custom-sm": "15px",
        "custom-9xl": "120px"
      },
      lineHeight: {
        "custom-xs": "100%",
      },
      backgroundSize: {
        "custom": "100% 869px"
      }
    },
  },
  plugins: [],
}