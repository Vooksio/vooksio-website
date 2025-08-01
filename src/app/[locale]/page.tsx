import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/landingPage/Hero";
import { Services } from "@/components/landingPage/Services";
import { Values } from "@/components/landingPage/Values";
import { Audience } from "@/components/landingPage/Audience";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <>
      <Hero />
      <Services />
      <Values />
      <Audience />
    </>
  );
}
