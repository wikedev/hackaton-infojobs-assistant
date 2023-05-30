/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '782px',
      xl: '890px',
    },
    maxWidth: {
      'wk-2xl': '960px',
      'wk-xl': '890px',
      'wk-lg': '782px',
      'wk-md': '768px',
      'wk-sm': '480px',
    },
    maxHeight: {
      'wk-2xl': '960px',
      'wk-xl': '630px',
      'wk-lg': '590px',
      'wk-md': '610px',
      'wk-sm': '492px',
    },
    colors: {
      white: "#FFFFFF",
      gray: "#999999",
      darkGray: "#333333",
      black: "#000000",
      success: "#00A550",
      alert: "#F1C40F",
      accentLight: "#FFD8CF",
      accent: "#FF6340",
      error: "#E93E40",
      primary: "#167DB7",
      primarySoft: "#5CA4CD",
      primaryLight: "#E8F2F8",
      background: "#F5F5F5",

    },
    fontFamily: {
      'sans': ['apple-system'],
    },


    extend: {},
  },
  plugins: [],
}