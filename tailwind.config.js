/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       vroom: {
  //         primary: '#fbb735',
  //         accent: "#110f0f",
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
