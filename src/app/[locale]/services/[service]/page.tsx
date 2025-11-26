/**
 * Service Page - Optimized for Static Site Generation (SSG)
 *
 * This page is fully pre-rendered at build time for maximum performance:
 * - All service pages are generated statically during build
 * - No server-side rendering at request time
 * - Instant page loads with zero JavaScript for content
 * - SEO optimized with pre-generated metadata
 * - Supports both Arabic and English locales
 *
 * Performance Benefits:
 * - Faster page loads (no server processing)
 * - Better SEO (pre-rendered content)
 * - Reduced server costs (static files)
 * - Better Core Web Vitals scores
 */

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
