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
        },
        testProp: {
            transform: 'translateY(-30vh)',
        },
        floatToTopLeft: {
          from: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.5)',
          },
          to: {
            top: '3%',
            left: '2%',
            transform: 'translate(0%, 0%) scale(1)',
          },
        },
      },
      animation: {
        'move-down': 'moveDown 3s ease-in-out forwards',
        'float-to-top-left': 'floatToTopLeft 2s ease-in-out forwards',
        'test-prop': 'testProp 3s ease-in-out forwards'
      }
    },
  },
}

