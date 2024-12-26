/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'BodyBackImg': "url(./images/bg-tablet-pattern.svg)",
      'ReviewFooterMobileImg': "url(./images/bg-simplify-section-mobile.svg)",
      'ReviewFooterDesktopImg': "url(./images/bg-simplify-section-desktop.svg)",
    },
    extend: {
      screens: {
        sm: '375px',
        md: '580px',
        lg: '768px',
        xl: '967px',
        xxl: '1440px',
      },
      colors: {
        'Bright-Red': 'hsl(12, 88%, 59%)',
        'Dark-Blue': 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
        'Very-Pale-Red': ' hsl(13, 100%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        BeVetnamPro: ["Be Vietnam Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
}

