/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dkbg: "#123435",
        lgbg: "#121a1c",
        shtxt: "#7de46f",
      },
      boxShadow: {
        "3xl": "0 0 50px -8px #51db3e",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { color: "transparent" },
          "100%": { color: "#000000" },
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },

  plugins: [],
};
