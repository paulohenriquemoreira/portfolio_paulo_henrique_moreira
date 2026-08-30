/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#ff5a00",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        ink: {
          950: "#050505",
          900: "#080808",
          850: "#0d0d0d",
          800: "#111111",
          750: "#141414",
          700: "#181818"
        }
      },
      boxShadow: {
        glow: "0 0 36px rgba(255, 90, 0, 0.20)",
        "glow-strong": "0 0 60px rgba(255, 90, 0, 0.30)"
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(255,90,0,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,90,0,.035) 1px, transparent 1px)"
      },
      backgroundSize: {
        "tech-grid": "30px 30px"
      },
      keyframes: {
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        blink: "blink .85s steps(1) infinite",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
