/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        general: ['general', 'sans-serif'],
        'circular-web':  ['circular-web', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD'
        },
        black: {
          300: '#25283B'
        },
      }
    },
  },
  plugins: [],
}