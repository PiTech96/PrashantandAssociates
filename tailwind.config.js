/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // light to dark
        blue: {
          DEFAULT: "#0A0739", // You can replace this with your preferred default blue color
          b50: "#E5F1FB",
          b25: "#D2E8F6",
          b1: "#BFDFF1",
          b2: "#9BCAE5",
          b3: "#77B2D9",
          b4: "#548ACD",
          b5: "#3063C1",
          b6: "#1F4D9B",
          b7: "#153C7A",
          b8: "#0E2D5B",
          b9: "#081F3D",
          b10: "#040F1F",
        },
        gray: {
          DEFAULT: "#1b1b1b", //600
          g50: "#F9FAFB",
          g25: "#FCFCFD",
          g1: "#F2F4F7",
          g2: "#f8f8f8",
          g3: "#EAECF0",
          g4: "#D0D5DD",
          g5: "#98A2B3",
          g6: "#667085",
          g7: "#475467",
          g8: "#344054",
          g9: "#1D2939",
          g10: "#101828",
          g11: "#1C2448",
          g12: "#636363",
          g13: "#1b1b1b",
        },
        primary: {
          DEFAULT: "#EB1C24", //600
          p25: "#ff0047", //500
          p50: "#f87171",
          p60: "#f8cccc",
          p1: "#ff80a7",
          p2: "#ff547a",
          p3: "#ff1a4d",
          p4: "#ff0047",
          p5: "#ff0037",
          p6: "#ff0027",
          p7: "#ff0018",
          p8: "#ff000c",
          p9: "#ff0005",
        },
        utils: {
          DEFAULT: "#22092C",
          u1: "#22092C",
          u2: "#22092ce6",
          u3: "#31497D",
        },
        error: {
          e25: "#FFFBFA",
          e50: "#FEF3F2",
          e1: "#FEE4E2",
          e2: "#FECDCA",
          e3: "#FDA29B",
          e4: "#F97066",
          e5: "#F04438",
          e6: "#D92D20",
          e7: "#B42318",
          e8: "#912018",
          e9: "#7A271A",
        },
        warning: {
          w25: "#FFFCF5",
          w50: "#FFFAEB",
          w1: "#FEF0C7",
          w2: "#FEF0C7",
          w3: "#FEC84B",
          w4: "#FDB022",
          w5: "#F79009",
          w6: "#DC6803",
          w7: "#B54708",
          w8: "#93370D",
          w9: "#7A2E0E",
        },
        success: {
          s25: "#F6FEF9",
          s50: "#ECFDF3",
          s1: "#ECFDF3",
          s2: "#A6F4C5",
          s3: "#6CE9A6",
          s4: "#32D583",
          s5: "#12B76A",
          s6: "#039855",
          s7: "#027A48",
          s8: "#05603A",
          s9: "#054F31",
        },
        black: "#00000",
        white: "#FFFFFF",
      },
      dropShadow: {
        xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
        md: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
      },
    },
  },
  plugins: [],
};
