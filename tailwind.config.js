// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.red, DEFAULT: defaultTheme.colors.red[500] },
      },
    },
  },
}
