import "server-only";

import Locale from "@/domain/locale/constants";
import ClientView from "@/presentation/common/providers/localeProvider/client/view";
import getLocaleResource from "@/domain/locale/getLocaleResource";

interface ViewProps {
  locale: Locale;
  children: React.ReactNode;
}

export default async function View({ locale, children }: ViewProps) {
  return (
    <ClientView locale={locale} resource={await getLocaleResource(locale)}>
      {children}
    </ClientView>
  );
}
