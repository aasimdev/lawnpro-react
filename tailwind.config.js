/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan React files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Match MUI's font
      },
      colors: {
        'main-gray': '#E1E4EA', // Define a custom blue color
        'soft-400': "#99A0AE",
        'primary-base': '#75A428',
        'primary-alpha': '#A2DC3F1A',
        'green-200': '#D7EEA8',
        'gray-week': '#F5F7FA',
        'gray-600': '#525866',
        'orange-200': '#FFD5C0',
        'orange-600': '#E97135',
        'teal-200': '#C2F5EE',
        'teal-700': '#178C7D',
        'blue-200': '#C0D5FF',
        'blue-400': '#6895FF',
        'success-base': '#75A428',
        'success-dark': '#1B290A',
        'success-light': '#D7EEA8',
        'error-base' : '#FB3748',
        'error-dark': '#681219',
        'error-light': '#FFC0C5',
        'faded-dark': '#222530',
        'faded-light': '#E1E4EA',
        'information-base': '#335CFF',
        'information-light': '#EBF1FF',
      },
      maxWidth: {
        '135': '540px'
      },
      borderWidth: {
        'mini': '1px',   // Custom width of 18rem
      },
      padding: {
        'mid': '10px'
      },
      fontSize: {
        'tiny': '10px',
        'mini': '11px',
        '3xl-plus': '32px'
      },
      margin: {
        '18': '72px'
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '::-webkit-scrollbar': { width: '4px', height: "4px" },
        '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
        '::-webkit-scrollbar-thumb': {
          borderRadius: '999px',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        },
        '::-webkit-scrollbar-button': { display: 'none' },
      });
    },
    function ({ addComponents }) {
      addComponents({
        // Sidebar scrollbar styling
        '.sidebar::-webkit-scrollbar': {
          width: '8px',
        },
        '.sidebar::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '.sidebar::-webkit-scrollbar-thumb': {
          borderRadius: '999px',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
        '.sidebar::-webkit-scrollbar-button': {
          display: 'none',
        },
      });
    },
  ],
}

