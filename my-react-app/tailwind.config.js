/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/React files in the src folder
  ],
  theme: {
    extend: {}, // You can customize your theme here
  },
  plugins: [],
};
