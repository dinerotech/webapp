"use client";

import React from "react";
import LocaleResourcePto from "@/domain/locale/localeResource";
import Locale from "@/domain/locale/constants";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";

interface ViewProps {
  resource: LocaleResourcePto;
  children: React.ReactNode;
  locale: Locale;
}

export default function View({ locale, resource, children }: ViewProps) {
  return (
    <LocaleContext.Provider value={{ locale: locale, resource: resource }}>
      {children}
    </LocaleContext.Provider>
  );
}
