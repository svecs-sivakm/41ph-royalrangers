/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.3rem',
      xl: '1.8rem',
      '2xl': '2.5rem',
      '3xl': '4rem',
      '4xl': '5rem',
      '5xl': '6rem',
      '6xl': '7rem'
    },
    extend: {
      colors: {
        neutral: {
          850: '#1e1e1e'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif']
      },
      tracking: {
        normal: '0',
        wide: '0.5',
        wider: '1rem',
        widest: '1.5rem'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
