/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A6B',
          50: '#E8EDF6',
          100: '#C5D2E8',
          200: '#8EA6CF',
          300: '#5779B6',
          400: '#2E549F',
          500: '#1B3A6B',
          600: '#152E54',
          700: '#0F213D',
          800: '#091526',
          900: '#04090F',
        },
        sky: {
          DEFAULT: '#4A9FD4',
          50: '#EBF5FB',
          100: '#C9E4F4',
          200: '#93C9E9',
          300: '#5DAFDE',
          400: '#4A9FD4',
          500: '#2E89C3',
          600: '#236EA0',
          700: '#19537A',
          800: '#0F3853',
          900: '#071D2B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
