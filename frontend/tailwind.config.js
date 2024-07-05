/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'left-blur': '-10px 0 15px -3px rgba(0, 0, 0, 0.1), -10px 0 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}