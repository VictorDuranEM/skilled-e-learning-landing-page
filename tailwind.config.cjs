/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#666CA3",
        "dark": "#13183F",
        "gray": "#83869A",
        "dark-pink": "#F74780",
        "pink": "#FFA7C3",
        "orange": "#FF6F48",
        "purple": "#4851FF",
        "light-purple": "#F02AA6",
      },
      gridTemplateColumns: {
        'courses': 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      },
      backgroundImage: {
        'purple-light': "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%);"
      }
    },
  },
  plugins: [],
}
