/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1536px',
    },
    colors: {
      'primary': '#cd2122',
      'secondary': '#3e8856  ',
      'secondary-light':'#46db77 ',
      'white': '#FFFFFF',
      'black': '#00000',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'brown':'#2F2F2F'
    },
    fontSize: {
      'h1': '64px',    
      'h2': '40px',  
      'h3': '32px',  
      'h4': '24px',    
      'h5': '16px',  
      'h6': '14px',    
      'p':'14px',      
    },
    extend: {},
  },
  
  plugins: [],
}