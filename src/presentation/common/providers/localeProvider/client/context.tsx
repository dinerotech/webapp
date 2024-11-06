"use client";

import LocaleResourcePto from "@/domain/locale/localeResource";
import React from "react";
import EnResource from "@/assets/locales/en.json";
import Locale from "@/domain/locale/constants";

export interface LocaleContextProps {
  locale: Locale;
  resource: LocaleResourcePto;
}

export const defaultLocaleContext: LocaleContextProps = {
  locale: Locale.EN,
  resource: EnResource
};

const LocaleContext =
  React.createContext<LocaleContextProps>(defaultLocaleContext);

export default LocaleContext;
