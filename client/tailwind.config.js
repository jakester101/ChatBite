/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '50vh': '50vh',
      '40vh': '40vh',
      '30vh': '30vh'
    },
    minWidth: {
      '50vh': '50vh',
      '70vh': '70vh'
    },
    maxWidth: {
      '50vh': '50vh',
      '20vh': '20vh'
    },
    maxHeight: {
      '40vh': '40vh',
    },
    extend: {},
  },
  plugins: [],
}