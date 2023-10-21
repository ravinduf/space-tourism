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
      },
      backgroundImage: {
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
      }
    },
  },
  plugins: [],
}

