/** @type {import('tailwindcss').Config} */
//w content dajemy pathy - gdzie ma patrzec na pliki gdzie sa klassy csswoe-  w strukturze pages moze byc dowolna ilosc folderow i podfolderow i we wszystkich tych plikach z ts albo tsx sa klasy cssowe
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
