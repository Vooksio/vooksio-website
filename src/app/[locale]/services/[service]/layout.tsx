import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { servicesData } from "@/lib/services-data";

const availableServices = Object.keys(servicesData);

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Validate service
  if (!availableServices.includes(service)) {
    notFound();
  }

  return <>{children}</>;
}
