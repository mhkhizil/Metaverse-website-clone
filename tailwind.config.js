/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'bmd': '810px',
      // => @media (min-width: 810px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    },
    extend: {
      borderRadius:{
        "large":"32px",
     },
      fontFamily:{
                  'mainf':['Montagu Slab', 'serif'],
                    'custom': ['Akira','san-serif'],
                    'akiraBold': ['Akira Bold','san-serif'],
                    'light': ['Light','san-serif'],
                    'regular': ['Regular','san-serif'],
                    'bold': ['Bold','san-serif'],
                    'semiBold': ['SemiBold','san-serif'],
                    'heavy': ['Heavy','san-serif'],
                    'input': ['IBM Plex Sans','san-serif']
                  
                  },
      colors: {
        'pg': '#d2ff1c',
        'hbg':'#defa6b',
        'blackistgrey':'#1f1e1e',
        'blogText':'#353535',
        'blogdetailheafer2':'#230B34'
      },
      keyframes:{
        'open-menu' : {
          '0%' : {transform : 'scaleY(0)'},
          '80%' : {transform : 'scaleY(1.2)'},
          '100%' : {transform : 'scaleY(1)'},
        },
        animation : {
          'open-menu' : 'open-menu 0.5s ease-in-out forwards',
        },
        colors:{
          'success' : 'var(--color-success)',
          'icon-color' : 'var(--icon-color)'
        },
      }
    },
  },
  plugins: [],
}

