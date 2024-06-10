/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'655px',
        'md':'865px',
        'lg':'900px',
        'xl':'1200px'
      },
      colors: {
        'q-blue' : '#00bfff'
      }
    },
  },
  plugins: [],
}

