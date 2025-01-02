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
        "pacific-blue": "#00AFB5",
        "watermelon": "#FF4242",
        "pale-grey":"#FFFFFF99"
      },
      fontSize: {
        "custom-sm": "15px",
        "custom-3xl": "40px",
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
        "out-side": "url('../public/assets/images/outside-inp-bg.webp')",
        "smartest": "url('../public/assets/images/smartest-bg.webp')",
        "smartest-sm": "url('../public/assets/images/tab-one-sm-img.webp')",
        "smartest-two": "url('../public/assets/images/smartest-bg-2.webp')",
        "smartest-two-sm": "url('../public/assets/images/tab-two-sm-img.webp')",
        "project-radar": "url('../public/assets/images/project-rader-img.webp')",
        "project-radar-sm": "url('../public/assets/images/tab-three-sm-img.webp')",
        "actual-result": "url('../public/assets/images/result-slider-bg.webp')",
        "multi-chanel": "url('../public/assets/images/multi-chanel-bg.webp')",
        "lead-gen": "url('../public/assets/images/lead-gen-bg.webp')",
        "ecommerce": "url('../public/assets/images/ecommerce-bg.webp')",
        "learn-from":"url('../public/assets/images/learn-from.webp')",
        "ready-to":"url('../public/assets/images/ready-goals.webp')",
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