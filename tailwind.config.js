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
        "Platinum": "#E8E8E8",
        "pacific-blue": "#00AFB5"
      },
      fontSize: {
        "custom-sm": "15px",
        "custom-7xl": "80px",
        "custom-9xl": "120px"
      },
      lineHeight: {
        "custom-xxs": "87%",
        "custom-xs": "100%",
        "custom-xl": "133%",
        "custom-3xl": "166%"
      },
      backgroundSize: {
        "custom": "100% 869px"
      },
      backgroundImage: {
        'amber-book': "url('../public/assets/images/amberbook-bg.webp')",
        "farns-worth": "url('../public/assets/images/farnsworth-bg.webp')",
        "us-lbm": "url('../public/assets/images/us-lbm-bg.webp')",
      },
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        maisonLight: ["maisonLight", "sans-serif"],
        maisonRegular: ["maisonRegular", "sans-serif"],
        maisonMedium: ["maisonMedium", "sans-serif"],
        maisonBold: ["maisonBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}