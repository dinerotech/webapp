"use client";

import LocaleResourcePto from "@/domain/common/models/localeResource";
import React from "react";
import EnResource from "@/assets/locales/en.json";
import Locale from "@/domain/common/models/enums/locale";

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
