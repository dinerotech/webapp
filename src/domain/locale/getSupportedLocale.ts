import Locale from "@/domain/locale/constants";

export default function getSupportedLocale(locale: string): Locale {
  return Object.values(Locale).find((value) => value == locale) || Locale.EN;
}
