/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        mint: {
          DEFAULT: '#a1ffcb',
          soft: '#e8fff2',
          deep: '#12804a',
        },
        ink: {
          DEFAULT: '#232323',
          muted: '#686868',
        },
      },
    },
  },
  plugins: [],
}
