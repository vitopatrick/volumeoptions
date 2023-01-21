/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Jost", "sans-serif"],
        sec: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        bg: "#00142a",
        paper: "#06254b",
        green: "#2dbd96",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
