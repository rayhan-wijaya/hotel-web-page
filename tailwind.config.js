/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "whatsapp-500": "#32d951",
        "whatsapp-600": "#1c9732",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}

