/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: 'hsl(230, 35%, 7%)',
        primaryLightBlue: 'hsl(231, 77%, 90%)',
      },
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

