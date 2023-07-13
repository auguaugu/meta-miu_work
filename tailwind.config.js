/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
      },
    },
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          lg: "1280px",
        },
      },
      // screens: {
      //   // mobile: [
      //   //   { min: "375px", max: "560px" },
      //   //   {
      //   //     min: "0px",
      //   //     max: "374px",
      //   //   },
      //   // ],
      //   // fixed: { min: "561px", max: "1023px" },
      //   // xl: [{ min: "1024px", max: "1439px" }],
      //   // xxl: { min: "1440px" },
      //   sm: { min: "640px", max: "767px" },
      //   md: { min: "768px", max: "1023px" },
      //   lg: { min: "1024px", max: "1279px" },
      //   xl: { min: "1280px", max: "1280px" },
      // },
      fontFamily: {
        hellix: ["Hellix", "Inter", "sans-serif"],
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
