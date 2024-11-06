enum Locale {
  EN = "en",
  AR = "ar"
}

export const DEFAULT_LOCALE = Locale.EN;
export const SUPPORTED_LOCALES = Object.values(Locale).map((locale) => ({
  locale
}));

export default Locale;
