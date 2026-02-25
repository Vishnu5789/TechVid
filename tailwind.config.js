/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B4D73',
          50: '#E6F1F7',
          100: '#CCE3EF',
          200: '#99C7DF',
          300: '#66ABCF',
          400: '#338FBF',
          500: '#0B4D73',
          600: '#093E5C',
          700: '#072E45',
          800: '#051F2E',
          900: '#020F17',
        },
        secondary: {
          DEFAULT: '#2196F3',
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1',
        },
        accent: {
          DEFAULT: '#1E90FF',
          50: '#E8F4FF',
          100: '#D1E9FF',
          200: '#A3D3FF',
          300: '#75BDFF',
          400: '#47A7FF',
          500: '#1E90FF',
          600: '#0073E6',
          700: '#0056B3',
          800: '#003A80',
          900: '#001D4D',
        },
        success: '#10B981',
        dark: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        light: '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.1)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 25px rgba(0,0,0,0.15)',
        'xl': '0 20px 40px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
