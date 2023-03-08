/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/*.html',
    './content/templates/**/*.html',
    './content/*.py',
    './portfolio/*.py',
  ],
  theme: {
    extend: {
      colors: {
        "text-primary":"var(--text-primary)",
        "a-primary":"var(--a-primary)",
        "a-hover":"var(--a-hover)",
        "secondary-bg":"var(--secondary-bg)",
        "primary-bg":"var(--primary-bg)",
        "error-color":"var(--error-color)",
      },
      lineHeight: {
        "14":"3.5rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
