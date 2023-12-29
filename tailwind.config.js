/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "gray": "#888a8b",
      "white": "#fff" ,
      "blue": "#3c68c9",
      "orange": "#e9ae37",
      "green": "#27deba",
      "dark-green": "#425b62",
      "green": "#27deba",
      "violet": "#bd40bb",
      'deg1': {
        DEFAULT: '#fdfdfd',
        dark: '#1b1d1d',
      },
      'deg2':{
        DEFAULT: '#dedede',
        dark: '#292c28',
      },
      'deg3':{
        DEFAULT: '#ccc',
        dark: '#3b3c3a',
      },
      
    },
    plugins: [],
  },
  darkMode:'class'
}

// module.exports = {
//   theme: {
//     colors: {
//       "gray": "#888a8b",
//       "white": "#fff" ,
//       "blue": "#3c68c9",
//       "orange": "#e9ae37",
//       "green": "#27deba",
//       "dark-green": "#425b62",
//       "green": "#27deba",
//       "violet": "#bd40bb",
//       'main': {
//         DEFAULT: '#fdfdfd',
//         dark: '#1b1d1d',
//       },
//       'secondary':{
//         DEFAULT: '#888a8b',
//         dark: '#242424',
//       },
      
//     },
//   },
// }