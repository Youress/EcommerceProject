/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "twocol": "55fr 45fr",
      },
      spacing: {
        '38-percent-minus-44': 'calc(38% - 44px)',
      },
      boxShadow : {
        'shadow-1' : '0 5px 10px #00000026'
      },
      transitionProperty: {
        'height': 'height',
    },}
  },
  plugins: [],
};
