/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',],
  theme: {
    extend: {
      colors: {
        primary: '#FF7F11',   // Orange (Primary)
        secondary: '#1D3557', // Dark Blue (Secondary)
        accent: '#457B9D',    // Sky Blue (Accent)
        neutral: {
          light: '#F1FAEE',   // Light Gray (Neutral Background)
          dark: '#333333',    // Dark Gray (Text)
        },
      },
    },
  },
  plugins: [],
}