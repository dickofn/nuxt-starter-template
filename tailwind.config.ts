import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default <Partial<Config>>{
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.red, DEFAULT: colors.red[500] },
      },
    },
  },
}
