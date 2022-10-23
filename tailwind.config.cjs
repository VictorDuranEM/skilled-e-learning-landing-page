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
        "ligth-gradient": "linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "dark-gradient": "#linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
      },
    },
  },
  plugins: [],
}
