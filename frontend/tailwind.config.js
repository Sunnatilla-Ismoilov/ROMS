/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        splashscreen: "#142328",
        "splashscreen-button": "#000000",
      },
    },
  },
  plugins: [
    // ...
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
};
