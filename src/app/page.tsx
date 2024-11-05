"use client";
import "@/assets/css/globals.css";
import Locale, { DEFAULT_LOCALE } from "@/domain/common/models/enums/locale";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  React.useEffect(() => {
    const browserLocale = navigator.language.slice(0, 2) as Locale;
    const locale = Object.values(Locale).includes(browserLocale)
      ? browserLocale
      : DEFAULT_LOCALE;

    router.replace(`/${locale}`);
  }, [router]);

  return (
    <html>
      <body><div /></body>
    </html>
  );
}
