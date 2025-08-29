import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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

  return (
    <NextIntlClientProvider>
      <div dir={direction} className="min-h-screen bg-gradient-to-br from-input-bg via-white to-input-bg">
        {/* Header and Footer will be conditionally rendered by child layouts */}
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
