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
        'sm2':'860px',
        'lg':'900px',
        'md'
      },
      colors: {
        'q-blue' : '#00bfff'
      }
    },
  },
  plugins: [],
}

