import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import type { Metadata } from "next";

import "../globals.css";
import { headers } from "next/headers";
import { getLayoutConfig } from "@/lib/layout-utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "Vooksio - Software Engineering & Technical Education",
    template: "%s | Vooksio",
  },
  description:
    "Build real apps that matter. Software engineering, technical education, and product consulting for startups and developers.",
  keywords: ["software engineering", "technical education", "product consulting", "MVP development"],
  authors: [{ name: "Vooksio Team" }],
  creator: "Vooksio",
  publisher: "Vooksio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vooksio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vooksio.com",
    title: "Vooksio - Software Engineering & Technical Education",
    description: "Build real apps that matter. Software engineering, technical education, and product consulting.",
    siteName: "Vooksio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vooksio - Build Real Apps That Matter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vooksio - Software Engineering & Technical Education",
    description: "Build real apps that matter.",
    creator: "@vooksio",
    images: ["/twitter-image.jpg"],
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
            {layoutConfig.showHeader && <Header />}
            <main className={!layoutConfig.showHeader && !layoutConfig.showFooter ? "min-h-screen" : ""}>
              {children}
            </main>
            {layoutConfig.showFooter && <Footer />}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
