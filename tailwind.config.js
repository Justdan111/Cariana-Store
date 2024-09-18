/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,  
      padding: {
        DEFAULT: '16px',  
        sm: '24px',       
        lg: '32px',      
        xl: '48px',       
      },
    },
    screens: {
      sm: '300px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        accent: '#FF6363',  
        background: '#f9f9f9',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",  
        'footer-texture': "url('/images/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
