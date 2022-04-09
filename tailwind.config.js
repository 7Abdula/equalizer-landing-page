module.exports = {
  mode: 'jit',
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: "'IBM Plex Sans', sans-serif;",
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwindcss-rtl'),
  ],
}
