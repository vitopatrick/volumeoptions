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
        bg: "#111827",
        card: "#1f2937",
        bgBoard: "#0b0e11",
        button: "#f59e0b",
      },
    },
  },
  plugins: [],
};
