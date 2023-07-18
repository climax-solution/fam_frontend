/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        175: "3.45"
      },
      colors: {
        'navbar-color': 'rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
}

