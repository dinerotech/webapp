import type { Metadata } from "next";
import "@/assets/css/globals.css";
import LocaleProvider from "@/presentation/common/providers/localeProvider/view";
import enMetadata from "@/assets/locales/en.json";
import arMetadata from "@/assets/locales/ar.json";
import localFont from "next/font/local";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico"
  }
};

const localizedMetadata: { [locale: string]: { [key: string]: string } } = {
  en: enMetadata,
  ar: arMetadata
};

const cairoFont = localFont({
  src: "../../assets/fonts/cairo.ttf",
  variable: "--font-cairo",
  weight: "100 900",
  style: "normal"
});

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const { title, description } =
    localizedMetadata[locale] || localizedMetadata.en;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${cairoFont.variable} antialiased`}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
