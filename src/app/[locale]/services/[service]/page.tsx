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

// Generate all possible static paths at build time for optimal SSG performance
export function generateStaticParams() {
  const locales = routing.locales.map((locale) => ({ locale }));
  const services = availableServices.map((service) => ({ service }));

  // Generate all combinations of locales and services
  const staticParams = locales.flatMap(({ locale }) => services.map(({ service }) => ({ locale, service })));

  // Log for build-time verification (will be removed in production)
  console.log(
    `[SSG] Generating ${staticParams.length} static service pages:`,
    staticParams.map((p) => `${p.locale}/${p.service}`).join(", ")
  );

  return staticParams;
}

// Force static generation for all service pages
export const dynamic = "force-static";
export const revalidate = false; // Disable revalidation for maximum performance

// Pre-render all service pages at build time
export const generateMetadata = generateServiceMetadata;
export const generateViewport = generateServiceViewport;

export default async function Page({ params }: PageParams) {
  const { service, locale } = await params;

  // Validate service exists at build time
  if (!availableServices.includes(service)) {
    throw new Error(`Service "${service}" not found in available services: ${availableServices.join(", ")}`);
  }

  // Validate locale exists at build time
  if (!routing.locales.includes(locale)) {
    throw new Error(`Locale "${locale}" not found in available locales: ${routing.locales.join(", ")}`);
  }

  return <ServicePage currentService={service} language={locale} />;
}
