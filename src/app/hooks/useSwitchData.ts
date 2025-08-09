import { useLocale } from "next-intl";

export function useSwitchData() {
  const language = useLocale();

  const switchData = (ar: string, en: string) => {
    return language === "ar" ? ar : en;
  };

  return { switchData, language };
}
