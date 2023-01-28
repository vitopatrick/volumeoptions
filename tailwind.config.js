/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Jost", "sans-serif"],
      sec: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      bg: "#0f172a",
      card: "#1f2937",
      text_main: "#f9fafb",
      text_min: "#e5e7eb",
      gray_bg: "#d4d4d4",
      danger: "#dc2626",
      success: "#16a34a",
      danger_light: "#fecaca",
      success_light: "#99f6e4",
    },
    extend: {},
  },
  plugins: [],
};
