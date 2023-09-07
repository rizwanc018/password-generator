/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: 'rgba(48, 226, 12, 0.747)'
      }
    },
  },
  plugins: [],
}

