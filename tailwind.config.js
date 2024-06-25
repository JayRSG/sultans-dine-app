/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sp-white": "rgb(var(--background-rgb), 1)",
        "sd-red": "rgb(var(--sd-red), 1)",
        "sd-white": "rgb(var(--sd-white), 1)",
        "sd-menu-t-active-white": "rgb(var(--sd-menu-t-active-white), 1)",
        "sd-menu-t-inactive-gray": "rgb(var(--sd-menu-t-inactive-gray), 1)",
        "sd-bt-text-white": "rgb(var(--sd-bt-text-white), 1)",
        "sd-bt-text-gray": "rgb(var(--sd-bt-text-gray), 1)",
        "sd-yellow": "rgb(var(--sd-yellow), 1)",
        "sd-progress-yellow": "rgb(var(--sd-progress-yellow), 1)",
        "sd-search-text-gray": "rgb(var(--sd-search-text-gray), 1)",
        "sd-t-black": "rgb(var(--sd-t-black), 1)",
      },
      width: {
        mobile: "390px",
        "box-width": "334px",
        "item-width": "354px",
        4.5: "18px",
      },
      borderRadius: {
        15: "15px",
      },

      boxShadow: {
        header: "0px 10px 15px 2px rgba(0, 0, 0, 0.25)",
        delivery: "0px 5px 10px 2px rgba(0, 0, 0, 0.25)",
        offers: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
        "option-outline": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        popular: "0px 5px 15px 2px rgba(0, 0, 0, 0.25)",
        order_summary: "5px 5px 15px 5px rgba(32, 25, 37, 0.25)",
        button: "5px 5px 15px 5px rgba(0, 0, 0, 0.25)",
      },

      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [],
};
