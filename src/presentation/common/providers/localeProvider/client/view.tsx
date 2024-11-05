"use client";

import LocaleResourcePto from "@/domain/common/models/localeResource";
import Locale from "@/domain/common/models/enums/locale";
import React from "react";
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
