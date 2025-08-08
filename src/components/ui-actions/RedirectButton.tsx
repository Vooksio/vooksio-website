// components/RedirectButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function RedirectButton({ redirectTo, title }: { redirectTo: string; title?: string }) {
  const router = useRouter();
  const t = useTranslations("services");
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full mt-4 border-dark-navy/20 text-dark-navy hover:bg-dark-navy hover:text-white"
      onClick={() => router.push(redirectTo)}
    >
      {title ? title : t("learnMore")}
    </Button>
  );
}
