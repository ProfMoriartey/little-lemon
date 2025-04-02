/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#F4CE14',
        accent: '#EE9972',
        highlight: '#FBDABB',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        serif: ['Markazi Text', 'serif'],
      },
    },
  },
  plugins: [],
} 