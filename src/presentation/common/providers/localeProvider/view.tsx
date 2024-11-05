import "server-only";

import Locale from "@/domain/common/models/enums/locale";
import ClientView from "@/presentation/common/providers/localeProvider/client/view";
import getLocaleResource from "@/shared/utils/getSupportedLocaleResource";

interface ViewProps {
  locale: string;
  children: React.ReactNode;
}

export default async function View({ locale, children }: ViewProps) {
  const supportedLocale =
    Object.values(Locale).find((value) => value == locale) || Locale.EN;
  return (
    <ClientView
      locale={locale as Locale}
      resource={await getLocaleResource(supportedLocale)}
    >
      {children}
    </ClientView>
  );
}
