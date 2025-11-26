"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { Button } from "../ui/button";

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
    <Button
      onClick={toggleLanguage}
      className="hover:text-[#007BFF] transition-colors hover:border-[#007BFF]"
      title={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      variant="outline"
      rounded="full"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === "en" ? "عربي" : "EN"}</span>
    </Button>
  );
}
