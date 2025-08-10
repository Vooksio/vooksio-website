import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { RefreshLink } from "../ui-actions/RefreshLink";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SubPageHeader = () => {
  const language = useLocale();
  const t = useTranslations("services");
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-input-background/95 to-white/95 backdrop-blur-sm border-b border-[#007BFF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <RefreshLink href={`/${language}`}>
              <Image
                src="/Vooksio-Logo.png"
                alt="Vooksio Logo"
                width={140}
                height={50}
                priority
                className="h-[50px] object-cover"
              />
            </RefreshLink>
          </div>
          <RefreshLink variant="outline" className="text-card-forground" href={`/${language}`}>
            {t("backToHome")}
            <ArrowLeft
              className={cn("h-4 w-4", {
                "rotate-180": language === "en",
              })}
            />
          </RefreshLink>
        </div>
      </div>
    </header>
  );
};

export default SubPageHeader;
