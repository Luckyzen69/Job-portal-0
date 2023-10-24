/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#338573",
        light:"#eef6f3",
        third:"#616161",
        title_2:"#f7f7fb",
        green:"#21f608",
        purple:"#f608ad",
        yellow: "#f6cf08",
        orange:"#ff9100",
      },
      backgroundImage: {
        "ussop": "url('../src/assets/usopp.png')",
        "luffy": "url('../src/assets/luffy.png')",
        "zoro": "url('../src/assets/zoro.png')",
        "wano": "url('../src/assets/wano.png')",
      },
     
    },
  },
  plugins: [],
}

