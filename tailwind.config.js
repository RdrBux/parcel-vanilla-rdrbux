/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamiliy: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        img: '0 5px 25px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
