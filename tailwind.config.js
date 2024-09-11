/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "cal_bg" : "#22252D",
        "cal_secondary_bg" : "#292D36",
        "cal_tertiary_bg" : "#262933",
        "cal_green" : "#26FED7",
        "cal_red" : "#EB6666",
      }
    },
  },
  plugins: [],
}

