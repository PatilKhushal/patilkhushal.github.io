/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        bodyBg : "#311E10"
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
      },
    },
    screens: {
      'TV': {'max': '2560px'},
      
      'large-desktop': {'max': '1600px'},

      'mid-desktop': {'max': '1200px'},

      'small-desktop': {'max': '1024px'},

      'tablet': {'max': '768px'},

      'small-tablet': {'max': '640px'},
      
      'large-mobile': {'max': '450px'},
      
      'mid-mobile': {'max': '375px'},

      'small-mobile': {'max': '325px'},
    },
    fontFamily : {
      highlight : 'Playfair',
      content : 'Merriweather',
      content2 : 'Poppins',
      cursive : "Agbalumo"
    }
  },
  plugins: [],
}

