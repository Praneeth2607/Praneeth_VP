import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
          fontFamily: {
    sans: ["var(--font-inter)"],
    heading: ["var(--font-space)"]
    },
      colors: {
        background: "#0B0E14",
        surface: "#151A24",
        glow: "#6DFFB3",
        electric: "#5EA2FF",
        muted: "#8E97A8"
      }
    }
  },
  plugins: []
}

export default config
