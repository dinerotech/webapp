import LocaleResourcePto from "@/domain/common/models/localeResource";
import getSupportedLocale from "./getSupportedLocale";

const resources: { [key: string]: () => Promise<LocaleResourcePto> } = {
  en: () => import("@/assets/locales/en.json").then((module) => module.default),
  ar: () => import("@/assets/locales/ar.json").then((module) => module.default)
};

export default async function getSupportedLocaleResource(
  locale: string
): Promise<LocaleResourcePto> {
  return await resources[getSupportedLocale(locale)]();
}
