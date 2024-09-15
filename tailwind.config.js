/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:['NeueMachina'],
        primaryBold:['NeueMachina-Bold'],
        primaryLight:['NeueMachina-Light']
      },
      animation:{
        "loop-scroll":"loop-scroll 15s linear infinite",
      },
      keyframes:{
        "loop-scroll":{
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
      cursor: {
        'mac_default': 'url(./src/assets/images/default.png) , default',
        'mac_pointer': 'url(./src/assets/images/handpointing.png), pointer',
        'mac_text': 'url(./src/assets/images/textcursor.png), text'
      }
    },
  },
  plugins: [],
}

