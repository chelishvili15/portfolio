// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        darkBlue: 'rgba(29, 78, 216, 0.15)',
        darkBlue2: 'rgba(29, 78, 216, 0.8)',
        hoverBlue: 'rgba(148,163,184,0.1)'
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }