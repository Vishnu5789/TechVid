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
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#D7E5FD',
          200: '#AFCBFB',
          300: '#87B1F9',
          400: '#5F97F7',
          500: '#3B82F6',
          600: '#0B5ED7',
          700: '#0847A0',
          800: '#063069',
          900: '#031932',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F5F0FE',
          100: '#EBE1FD',
          200: '#D7C3FB',
          300: '#C3A5F9',
          400: '#AF87F7',
          500: '#8B5CF6',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#3B0764',
        },
        accent: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
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
