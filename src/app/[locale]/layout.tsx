import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { getLayoutConfig } from "@/lib/layout-utils";
import { generateHomeMetadata, generateHomeViewport } from "@/lib/metadata-configs";

export const generateViewport = generateHomeViewport;
export const generateMetadata = generateHomeMetadata;
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isRTL = locale === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  // Get layout configuration using our helper
  const layoutConfig = await getLayoutConfig();
  return (
    <NextIntlClientProvider>
      <div dir={direction} className="min-h-screen bg-gradient-to-br from-input-bg via-white to-input-bg">
        {layoutConfig.isHomePage && <Header />}
        <main className={layoutConfig.isHomePage ? "min-h-screen" : ""}>{children}</main>
        {layoutConfig.isHomePage && <Footer />}
      </div>
    </NextIntlClientProvider>
  );
}
