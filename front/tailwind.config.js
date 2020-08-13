const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.teal,
        secondary: colors.blue,
      },
      container: {
        center: true,
        padding: {
          default: '0.5rem',
          sm: '1rem',
          lg: '8rem',
          xl: '12rem',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
