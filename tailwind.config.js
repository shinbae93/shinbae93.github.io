/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(210, 69%, 61%)',
        secondary: 'hsl(210, 8%, 45%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'secondary-fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.5 },
        },
        block: {
          '0%': {
            width: '0%',
            left: 0,
          },
          '50%': {
            width: '100%',
            left: 0,
          },
          '100%': {
            width: 0,
            left: '100%',
          },
        },
        'pop-in': {
          '0%': {
            width: '0px',
            height: '0px',
            background: 'hsl(210, 69%, 61%)',
            border: '0px solid #ddd',
            opacity: 0,
          },
          '50%': {
            width: '10px',
            height: '10px',
            background: 'hsl(210, 69%, 61%)',
            opacity: 1,
            bottom: '45px',
          },
          '65%': {
            width: '7px',
            height: '7px',
            bottom: '0px',
            width: '15px',
          },
          '80%': {
            width: '10px',
            height: '10px',
            bottom: '20px',
          },
          '100%': {
            width: '7px',
            height: '7px',
            background: 'hsl(210, 69%, 61%)',
            border: '0px solid #222',
            bottom: '13px',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s forwards',
        'secondary-fade-in': 'secondary-fade-in 2s forwards',
        block: 'block 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards',
        'pop-in': 'pop-in 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;',
      },
    },
  },
  plugins: [],
}
