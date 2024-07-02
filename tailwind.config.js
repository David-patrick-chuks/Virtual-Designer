/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        EpilogueBlack: ['EpilogueBlack', "sans-serif"],
        EpilogueBold: ['EpilogueBold', "sans-serif"],
        EpilogueRegular: ['EpilogueRegular', "sans-serif"],
        EpilogueMedium: ['EpilogueMedium', "sans-serif"],
      }
    },
  },
  plugins: [],
}

