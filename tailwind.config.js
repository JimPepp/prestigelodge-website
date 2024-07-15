/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'short': { 'raw': '(max-height: 600px)'},
        'xs': { 'raw': '(max-width: 374px)' },
        '2xl': { 'raw': '(min-width: 1570px)'},
        'hd': { 'raw': '(min-width: 1890px)'},
        '3xl' : { 'raw': '(min-width: 2000px)' },
        '4xl' : { 'raw': '(min-width: 3500px)' }
      },
      colors: {
        text: '#27201B',
        background: "#FDFDFC",
        accent: "#E5CF6E",
        secondary: "#795E4E",
      },
      spacing: {
        '128': '40rem',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.3rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      'logoM' : '6rem',
      'logoL' : '8rem',
      'logoXL' : '10rem'
    }
  },
  plugins: [],
};
