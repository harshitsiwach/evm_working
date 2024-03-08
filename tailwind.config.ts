import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/*/.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        circularPath: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
      animation: {
        'circular-path': 'circularPath 5s linear infinite',
        shimmer: "shimmer 2s linear infinite",
        scroll: 'scroll 5s linear infinite',
      },
      
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily : {
        warfame : ["Press Start 2P", "system-ui"],
        secondary : [ "Plus Jakarta Sans", "sans-serif"]

      }
    },
    
  },
  plugins: [  ],
};
export default config;
