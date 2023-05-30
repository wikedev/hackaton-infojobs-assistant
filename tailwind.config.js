/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      success: "#00A550",
      alert: "#F1C40F",
      accent: "#FF6340",
      error: "#E93E40",
      primary: "#167DB7",
      primarySoft: "#5CA4CD",
      primaryLight: "#E8F2F8",
      background: "#F5F5F5",
    },
    extend: {},
  },
  plugins: [],
}