/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D187D', 
        secondary: '#A29EB5',
        accent: '#565366',
        background: '#F8F8F8',
        text: '#242323',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      

    },
  },
  plugins: [],
}

