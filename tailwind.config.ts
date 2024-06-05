import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-up-right' : 'scale-up-right 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
      },
      keyframes: {
        'scale-up-right': {
          '0%' :{
            transform: 'scale(0.5)',
            transformOrigin: '100% 50%'
          },
          '100%' : {
            transform: 'scale(1)',
            transformOrigin: '100% 50%'
                  
          },
        },},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        karla: ['var(--font-karla)']
      },
    },
  },
  plugins: [],
};
export default config;
