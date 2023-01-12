/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.html',
    './**/templates/**/*.html',
    // '../../**/*.py'
  ],
  theme: {
    extend: {
      colors: {
        "a-primary":"var(--a-primary)",
        "a-hover":"var(--a-hover)",
        "secondary-bg":"var(--secondary-bg)",
        "primary-bg":"var(--primary-bg)",
      },
      lineHeight: {
        "14":"3.5rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
