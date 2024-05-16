const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx, mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html", "./node_modules/primereact/**/*.{js,ts,jsx,tsx}", 
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
