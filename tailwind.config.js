module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Cabin Condensed',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blue: '#64A8C8',
      dark: '#455760',
      yellow: '#FAF8D4',
      red: '#F25F5C',
      offwhite: '#FFFFFC',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      blue: '#64A8C8',
      dark: '#455760',
      yellow: '#FAF8D4',
      red: '#F25F5C',
      offwhite: '#FFFFFC',
      darker: '#29373E',
      turtle: '#9BBD51',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
