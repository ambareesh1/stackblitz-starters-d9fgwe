/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], // Scans all HTML and TypeScript files in the src directory],
  theme: {
    extend: { 
      fontFamily: {
      changa: ['Changa One', 'sans-serif'],
    },
      colors: {
        primary: '#00ACC1', // Custom color for navbar
      },
    },
  },
  plugins: [],
}
