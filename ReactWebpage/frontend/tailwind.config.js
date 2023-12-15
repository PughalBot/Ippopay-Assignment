/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // other paths where your React components are located
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lol' : ['Anton', 'sans-serif'],
      'rs' : ['Rubik Iso', 'cursive'],
      'bo' : ['Bungee Outline', 'cursive'],
      'jb' : ['JetBrains Mono', 'monospace'],
      'bs' : ['Big Shoulders Display', 'cursive'],
      'hj' : ['Handjet', 'cursive'],
      'js' : ['Josefin Sans', 'sans-serif'],
      'na' : ['Nabla', 'cursive'],
      'sg' : ['Space Grotesk', 'sans-serif'],
      'lo' : ['Lilita One', 'cursive'],
      'pp' : ['Poppins', 'sans-serif'],
      'te' : ['Teko', 'sans-serif'],
    },
  },
  plugins: [],
}

