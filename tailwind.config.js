/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    '@tailwindcss/typography'
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif JapaneseYen", "serif"],
        rubik: ["Rubik Glitch, system-ui"],
        dotgothic: ["DotGothic16, sans-serif"],
      },
      keyframes: {
        moveDown: {
          '0%': { 
            opacity: '1', 
            transform: 'translateY(0%) scale(.9)'
            },
          '20%': { 
            opacity: '1', 
            transform: 'translateY(0%) scale(1)'
            },
          '50%': { 
            opacity: '1', 
            transform: 'translateY(0%) scale(1)'
            },
          '100%': { 
            opacity: '0', 
            transform: 'translateY(30vh) scale(.8)' 
          },
        }
      },
      animation: {
        'move-down': 'moveDown 3s ease-in-out forwards',
      }
    },
  },
}

