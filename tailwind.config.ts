import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: "#4D28B8",
        white: "#FFFFFF",
        gradient1: "#7041EE",
        gradient2: "#8D41EE",
        gradient3: "#D641EE",
        textSemiTransparent: "#A6ADEF",
        textSemiWhite: "#E9E9FF",
        textWhite: "#EFEAFE",
        btnGradient1: "#5563D9",
        btnGradient2: "#5736C4",
        backBtnGradient1: "#5563D91A",
        backBtnGradient2: "#5736C41A",
        elipse1: "#7041EE",
        circleGrad1: "#3101ED33",
        circleGrad2: "#3B267B33",
      },
      boxShadow: {
        smallCircle:
          "inset 0px 20px 20px 0px rgba(255, 255, 255, 0.08), inset 0px -20px 20px 0px rgba(164, 179, 255, 0.1)",
      },
      backgroundImage: {
        bgStart: "url('/public/bgimage.jpg')",
        bgIntro: "url('/public/introbg.jpg')",
        fullColorBtn: "linear-gradient(218.06deg, #7041EE -5.89%, #8D41EE 51.01%, #D641EE 101.92%)",
        bgGrad:
          "linear-gradient(168.96deg, #5A12B5 -3.14%, #00000000 31.53%, #00000000 69.66%, #4111FF 107.8%)",
        circleGrad:
          " linear-gradient(268.5deg, rgba(49, 1, 237, 0.06) -0.06%, rgba(59, 38, 123, 0.06) 97.65%)",
        radGrad:
          "radial-gradient(284.32% 169.61% at 27.12% -21.74%,rgba(82, 182, 255, 0.6) 0%, rgba(143, 65, 238, 0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
