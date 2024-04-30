// tailwind.config.js

import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '90vw': '90vw',
      },
    },
  },
  plugins: [],
});
