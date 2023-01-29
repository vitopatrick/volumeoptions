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
        main: ["Quicksand", "sans-serif"],
      },
      colors: {
        bg: "#0f172a",
        card: "#1f2937",
        bgBoard: "#0b0e11",
      },
    },
  },
  plugins: [],
};
