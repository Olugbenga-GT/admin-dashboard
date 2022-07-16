/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  fontFamily: {
    display: ['Open Sans' , 'sans-serif'],
    body: ['Open Sans' , 'sans-serif'],
  },
  theme: {
    extend: {
      fontSize: {
        14 : '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232a',
        'secondary-dark-bg': '#33373e',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0 , 0 , 0, 0.5)',
      },
      borderWidth: {
        1 : '1px'
      },
      borderColor:{
        color: 'rgba()0, 0, 0, .1'
      },
      width: {
        50: '50px',
        100: '100px',
        150: '150px',
        200: '200px',
        250: '250px',
        300: '300px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80 : '80px'
      },
      minHeight: {
        590 : '590px'
      },
      backgroundImage: {
        'hero-pattern' : "url('https://demos.wrappixel.com/premium-admin-templatyes/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')"
      }
    },
  },
  plugins: [],
}
