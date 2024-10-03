import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#2C425E",
        white: "#FFF",
        gray2: "#F7F7F7",
        gray3: "#E8E8E8",
        gray4: "#CCCCCC",
        gray5: "#B8B8B8",
        gray6: "#A3A3A3",
        gray7: "#8F8F8F",
        gray8: "#7A7A7A",
        gray9: "#666666",
        gray10: "#525252",
        gray11: "#3D3D3D",
        gray12: "#292929",
        gray13: "#1F1F1F",
        gray14: "#0F0F0F",
        black: "#000",
        blue1: "#4478FC",
        blueDark1: "#2A4980",
        blueLight1: "#5575AA"
      },
    },
  },
  plugins: [],
};
export default config;
