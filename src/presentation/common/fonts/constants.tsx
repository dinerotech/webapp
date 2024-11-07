import localFont from "next/font/local";

const CairoFont = localFont({
  src: "../../../assets/fonts/cairo.ttf",
  variable: "--font-cairo",
  weight: "200 300 400 500 600 700 800 900 1000",
  style: "normal"
});

export default CairoFont;
