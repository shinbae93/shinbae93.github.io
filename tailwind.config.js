/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#1a1a1a',
        'text-muted': '#666666',
        btn: '#2F334D',
        'btn-text': '#fff',
        background: '#ffffff',
        'section-alt': '#f5f5f3',
        'card-bg': '#ffffff',
        'card-border': '#e5e5e5',
        'tag-bg': '#f0f0f0',
        'tag-text': '#444',
        'footer-text': '#888',
        'nav-bg': '#ffffff',
      },
      boxShadow: {
        button: '0 4px 4px #00000040',
        card: '0 2px 16px 0 rgba(0,0,0,0.06)',
      },
      fontFamily: {
        'rubik-sans': ['Rubik', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
    fontFamily: {
      'rubik-sans': ['Rubik', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}
