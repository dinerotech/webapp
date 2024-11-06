import "server-only";

import Locale from "@/domain/locale/constants";
import ClientView from "@/presentation/common/providers/localeProvider/client/view";
import getSupportedLocaleResource from "@/domain/locale/getSupportedLocaleResource";

interface ViewProps {
  locale: Locale;
  children: React.ReactNode;
}

export default async function View({ locale, children }: ViewProps) {
  const supportedLocale =
    Object.values(Locale).find((value) => value == locale) || Locale.EN;
  return (
    <ClientView
      locale={locale as Locale}
      resource={await getSupportedLocaleResource(supportedLocale)}
    >
      {children}
    </ClientView>
  );
}
