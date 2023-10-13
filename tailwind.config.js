/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#338573",
        light:"#eef6f3",
        third:"#616161",
        title_2:"#f7f7fb"
      },
      backgroundImage: {
        'mebg': "url('../src/assets/starmall.png')",
        'onepiece': "url('../src/assets/onepiece.png')",
      },
    },
  },
  plugins: [],
}

