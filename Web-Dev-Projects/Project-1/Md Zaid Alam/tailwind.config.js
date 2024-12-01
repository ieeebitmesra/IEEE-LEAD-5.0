/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customText: '#fffff0', // Text color
        customBg: '#afa18f',   // Background color
        customBgSel: '#72695d',   // Background color
        customText2: '#34302a', // Text color
      },
    },
  },
  plugins: [],
}
