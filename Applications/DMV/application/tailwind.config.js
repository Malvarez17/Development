/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dmv: {
          blue: '#003A70',
          darkBlue: '#002855',
          lightBlue: '#0066B3',
          gold: '#FDB81E',
          darkGold: '#C98A00',
        },
        neutral: {
          lightGray: '#F5F5F5',
          mediumGray: '#D1D1D1',
          darkGray: '#666666',
          charcoal: '#333333',
        },
        status: {
          success: '#28A745',
          warning: '#FFC107',
          error: '#DC3545',
          info: '#17A2B8',
        },
        background: {
          page: '#F8F8F8',
          card: '#FFFFFF',
          hover: '#F0F0F0',
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
