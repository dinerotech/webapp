import Locale from "@/domain/common/models/enums/locale";
import View from "@/presentation/home/main/view";

export async function generateStaticParams() {
  return Object.values(Locale).map((locale) => ({ locale }));
}

export default function Page() {
  return <View />;
}
