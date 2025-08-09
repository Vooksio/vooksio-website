
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { servicesData } from "@/lib/services-data";

// Get available services from the servicesData
const availableServices = Object.keys(servicesData);

type ServiceType = keyof typeof servicesData;

export function generateStaticParams() {
  const locales = routing.locales.map((locale) => ({ locale }));
  const services = availableServices.map((service) => ({ service }));

  // Generate all combinations of locale and service
  return locales.flatMap(({ locale }) => services.map(({ service }) => ({ locale, service })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;

  // Check if service exists
  if (!availableServices.includes(service as ServiceType)) {
    return {
      title: "Service Not Found | Vooksio",
      description: "The requested service was not found.",
    };
  }

  const serviceData = servicesData[service as ServiceType];
  const language = locale as "en" | "ar";
  const baseUrl = "https://vooksio.com";
  const serviceUrl = `${baseUrl}/${locale}/services/${service}`;

  // Extract keywords from service data (you might want to add this to your ServiceData interface)
  const keywords = [
    "vooksio",
    "software engineering",
    "technical education",
    "consulting",
    ...(serviceData.technologies || []),
  ];

  return {
    title: {
      default: `${serviceData.title[language]} | Vooksio`,
      template: "%s | Vooksio",
    },
    description: serviceData.description[language],
    keywords,
    authors: [{ name: "Vooksio Team" }],
    creator: "Vooksio",
    publisher: "Vooksio",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}/services/${service}`,
      languages: Object.fromEntries(routing.locales.map((loc) => [loc, `/${loc}/services/${service}`])),
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: serviceUrl,
      title: `${serviceData.title[language]} | Vooksio`,
      description: serviceData.description[language],
      siteName: "Vooksio",
      images: [
        {
          url: `/og-services-${service}.jpg`,
          width: 1200,
          height: 630,
          alt: `${serviceData.title[language]} - Vooksio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title[language]} | Vooksio`,
      description: serviceData.description[language],
      creator: "@vooksio",
      images: [`/twitter-services-${service}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

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
