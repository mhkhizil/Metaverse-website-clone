/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius:{
     "large":"32px",
  },
    extend: {
      fontFamily:{'mainf':['Montagu Slab', 'serif']},
      colors: {
        'pg': '#d2ff1c',
        'hbg':'#defa6b'
      },
      keyframes:{
        'open-menu' : {
          '0%' : {transform : 'scaleY(0)'},
          '80%' : {transform : 'scaleY(1.2)'},
          '100%' : {transform : 'scaleY(1)'},
        },
        animation : {
          'open-menu' : 'open-menu 0.5s ease-in-out forwards',
        }
      }
    },
  },
  plugins: [],
}

