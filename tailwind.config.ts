import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: { ...colors.red, DEFAULT: colors.red[500] },
      },
    },
  },
}
