import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { getLayoutConfig } from "@/lib/layout-utils";
import { Toaster } from "sonner";
import { generateHomeMetadata, generateHomeViewport } from "@/lib/metadata-configs";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });
export const generateViewport = generateHomeViewport;
export const generateMetadata = generateHomeMetadata;
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
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
    <html lang={locale} className={`${inter.variable} ${cairo.variable}`}>
      <body dir={direction}>
        <NextIntlClientProvider>
          <div className="min-h-screen bg-gradient-to-br from-input-bg via-white to-input-bg">
            {layoutConfig.isHomePage && <Header />}
            <main className={layoutConfig.isHomePage ? "min-h-screen" : ""}>{children}</main>
            {layoutConfig.isHomePage && <Footer />}
          </div>
        </NextIntlClientProvider>
        <Toaster position="top-right" richColors closeButton expand={false} visibleToasts={3} />
      </body>
    </html>
  );
}
