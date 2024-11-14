import React from "react";
import type { Metadata } from "next";
import NotoKufiFont from "@/presentation/common/fonts/constants";
import { SUPPORTED_LOCALES } from "@/domain/locale/constants";
import getLocaleResource from "@/domain/locale/getLocaleResource";
import getSupportedLocale from "@/domain/locale/getSupportedLocale";
import LocaleProvider from "@/presentation/common/providers/localeProvider/view";
import "@/assets/css/globals.css";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES as { locale: string }[];
}

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico"
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const supportedLocale = getSupportedLocale(locale);
  const localeResource = await getLocaleResource(supportedLocale);
  const { title, description } = localeResource;

  return (
    <html
      className="scroll-smooth"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${NotoKufiFont.className} antialiased`}>
        <LocaleProvider locale={supportedLocale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
