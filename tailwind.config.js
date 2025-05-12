/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan all components for class usage
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom primary color (dark blue)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: modern font
      },
    },
  },
  plugins: [],
};
