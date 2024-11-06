import React from "react";
import type { Metadata } from "next";
import CairoFont from "@/presentation/common/fonts/constants";
import { SUPPORTED_LOCALES } from "@/domain/locale/constants";
import getSupportedLocaleResource from "@/domain/locale/getSupportedLocaleResource";
import LocaleProvider from "@/presentation/common/providers/localeProvider/view";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES as { locale: string };
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
  const supportedlocaleResource = await getSupportedLocaleResource(locale);
  const { title, description } = supportedlocaleResource;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${CairoFont.variable} antialiased`}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
