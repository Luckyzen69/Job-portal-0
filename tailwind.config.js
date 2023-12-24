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
        lightpurple:"#FF6F91",
        blue:"#2693c4",
        pink:"#fa2e87",
        lightpink:" #FBEAEB"
      },
      backgroundImage: {

        "luffy": "url('../src/assets/luffy.png')",
        "faq": "url('../src/assets/faq.jpg')",
        "recuitment":"url('../src/assets/recuitment.jpg')",
        "part-time": "url('../src/assets/part-time.jpg')",
        "full-time": "url('../src/assets/full-time.jpg')",
        "job": "url('../src/assets/job.jpg')",
      },
     
    },
  },
  plugins: [],
}

