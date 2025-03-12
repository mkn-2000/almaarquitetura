/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#A6684D',
        cream: '#F5E6DA',
        copper: '#B87B5E',
      },
      backgroundColor: {
        primary: '#A6684D',
        secondary: '#F5E6DA',
      },
      textColor: {
        primary: '#A6684D',
        secondary: '#B87B5E',
      }
    },
  },
  plugins: [],
};