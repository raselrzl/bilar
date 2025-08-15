/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust paths based on your project structure
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Comment out or remove any plugins temporarily to isolate the issue
    // require('@tailwindcss/oxide'), // Remove this line
  ],
}
