import Locale from "@/domain/common/models/enums/locale";

export default function getSupportedLocale(locale: string): Locale {
  return Object.values(Locale).find((value) => value == locale) || Locale.EN;
}
