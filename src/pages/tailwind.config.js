/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
        mint: '#00008B',
        sky: '#b3e5fc',
      },
    },
  },
  plugins: [],
}
