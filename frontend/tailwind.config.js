/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main': '#e4efe7',
      'text-color' : '#568A35',
      'bg': '#EFF4E7',
      'gray':'#808080',
      'white': '#FFFFFF',
      'gray-2':'#EEEEEE',
      'bg-2' : '#FAFAFA',
      'text-green': '#002E0A',
      'gray-3' : '#595959',
      'red': '#FF0000',
      'gray-4':'#F9FAFB',
      'green' : '#43762A',
      'yellow': '#f9f3d5',
      'green-2': '#DAF7A6',
    },
  },
  plugins: [],
}