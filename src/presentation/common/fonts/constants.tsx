import localFont from "next/font/local";

const NotoKufiFont = localFont({
  src: "../../../assets/fonts/noto_kufi.ttf",
  variable: "--font-cairo",
  weight: "100 900",
  style: "normal"
});

export default NotoKufiFont;
