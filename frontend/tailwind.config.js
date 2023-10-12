/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        "deftext":"var(--deftext)",
        "link":"var(--link)",
        "linkhov":"var(--linkhov)",
        "bgheadfoot":"var(--bgheadfoot)",
        "bgbody":"var(--bgbody)",
        "bgcard":"var(--bgcard)",
        "error-color":"var(--error-color)",
        "actionbutton":"var(--actionbutton)",
        "bgcardhead":"var(--bgcardhead)",
        "headerfooterlink":"var(--headerfooterlink)",
        "headerfooterlinkhov":"var(--headerfooterlinkhov)",
      },
      lineHeight: {
        "14":"3.5rem",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}