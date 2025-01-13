/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#222',
        btn: '#0987f2',
        background: '#fff',
        'btn-text': '#fff',
        'project-card-bg': '#ffffff00',
        'form-text': '#555',
        'footer-text': '#888',
      },
      boxShadow: {
        button: '0 4px 4px #00000040',
      },
    },
    fontFamily: {
      'rubik-sans': ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}
