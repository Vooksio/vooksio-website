import { ServicePage } from "@/components/services/ServicePage";
import React from "react";

interface PageParams {
  params: Promise<{
    service: string;
    locale: "ar" | "en";
  }>;
}

export default async function Page({ params }: PageParams) {
  const { service, locale } = await params;

  return <ServicePage currentService={service} language={locale} />;
}
