import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layouts/Header";
import { Hero } from "@/components/landingPage/Hero";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

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

  return (
    <html lang={locale} className={`${inter.variable} ${cairo.variable}`}>
      <body>
        <NextIntlClientProvider>
          <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA]">
            <Header params={params} />
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
