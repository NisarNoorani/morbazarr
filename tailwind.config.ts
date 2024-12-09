import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
<<<<<<< HEAD
          "100": "#605EA1",
          DEFAULT: "#605EA1",
=======
          "100": "#81BFDA",
          DEFAULT: "#81BFDA",
>>>>>>> b0a706bf94f8b379d1c966deface8725009ad27a
        },
        secondary: "#FADA7A",
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      animation: {
        parallax: "parallax 50s linear infinite",
        moto: "moto 12s linear infinite",
        voiture: "voiture 3s ease-in-out infinite",
      },
      keyframes: {
        parallax: {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "-10000px 0px" },
        },
        moto: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(30px) rotate(-10deg)" },
          "50%": { transform: "translateY(0) rotate(10deg)" },
          "75%": { transform: "translateY(30px) rotate(0deg)" },
        },
        voiture: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
