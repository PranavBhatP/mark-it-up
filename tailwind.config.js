/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      animation: {
        'background': 'background 8s ease infinite',
      },
    },
  },
  plugins: [],
}

