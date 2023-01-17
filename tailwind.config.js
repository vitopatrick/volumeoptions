/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Jost", "sans-serif"],
        sec: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#00142a",
        paper: "#06254b",
        green: "#2dbd96",
      },
    },
  },
  plugins: [],
};
