"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 text-[#1E2A38] hover:text-[#007BFF] transition-colors border border-[#E5E7EB] rounded-lg hover:border-[#007BFF]"
      title={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
