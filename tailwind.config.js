/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "twocol": "55fr 45fr",
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '999px'},
        // => @media (max-width: 1023px) { ... }

        'xmd': {'max': '900px'},
        // => @media (max-width: 900px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '600px'},
        // => @media (max-width: 426px) { ... }
      },
      spacing: {
        '38-percent-minus-44': 'calc(38% - 44px)',
      },
      boxShadow : {
        'shadow-1' : '0 5px 10px #00000026'
      }
    },
  },
  plugins: [],
};
