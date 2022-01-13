module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'desktop-dark': "url(/src/assets/images/bg-desktop-dark.jpg)",
        'desktop-light': "url(/src/assets/images/bg-desktop-light.jpg)",
        'mobile-dark': "url(/src/assets/images/bg-mobile-dark.jpg)",
        'mobile-light': "url(/src/assets/images/bg-mobile-light.jpg)",
        'icon-check': "url(/src/assets/images/icon-check.svg)",
        'icon-cross': "url(/src/assets/images/icon-cross.svg)",
        'icon-moon': "url(/src/assets/images/icon-moon.svg)",
        'icon-sun': "url(/src/assets/images/icon-sun.svg)",
      },
      colors: {
        'bright-blue':'hsl(220, 98%, 61%)',
        'purple': 'hsl(280, 87%, 65%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        'dark-bg': 'hsl(235, 21%, 11%)',
        'dark-bg-secondary': 'hsl(235, 24%, 19%)',
        'dark-text': 'hsl(234, 39%, 85%)',
        'dark-text-secondary': 'hsl(234, 11%, 52%)',
        'dark-border': 'hsl(233, 14%, 35%)'
      }
    },
  },
  plugins: [],
}
