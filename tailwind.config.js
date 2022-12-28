/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/navbar.html',
    './templates/*.html',
    // '../templates/**/*.html',
    './**/templates/**/*.html',
    // '../../**/*.py'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
