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

