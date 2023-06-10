
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sanpro: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-color': '#cd1818',
        'secondary-color': '#c9c9c9',
        'footer-color': '#222222',
        'facebook-color': '#3B5998',
        'instagram-color': '#C32AA3',
        'youtube-color': '#FF0000',
        'taktak-color': '#000000',
      }
    },
  },
  plugins: [],
}