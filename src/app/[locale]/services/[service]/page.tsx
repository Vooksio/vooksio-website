import { ServicePage } from "@/components/services/ServicePage";
import { routing } from "@/i18n/routing";
import { generateServiceMetadata, generateServiceViewport } from "@/lib/metadata-configs";
import { servicesData } from "@/lib/services-data";
import React from "react";

interface PageParams {
  params: Promise<{
    service: string;
    locale: "ar" | "en";
  }>;
}
const availableServices = Object.keys(servicesData);

export function generateStaticParams() {
  const locales = routing.locales.map((locale) => ({ locale }));
  const services = availableServices.map((service) => ({ service }));
  return locales.flatMap(({ locale }) => services.map(({ service }) => ({ locale, service })));
}

export const generateMetadata = generateServiceMetadata;
export const generateViewport = generateServiceViewport;

export default async function Page({ params }: PageParams) {
  const { service, locale } = await params;

  return <ServicePage currentService={service} language={locale} />;
}
