import localFont from "next/font/local";

const CairoFont = localFont({
  src: "../../../assets/fonts/cairo.ttf",
  variable: "--font-cairo",
  weight: "100 900",
  style: "normal"
});

export default CairoFont;
