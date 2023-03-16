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
        main: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        bg: "#18181b",
        card: "#27272a",
        bgBoard: "#0b0e11",
      },
    },
  },
  plugins: [],
};
