import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-input-bg via-white to-input-bg">
          {children}
        </div>
        <Toaster position="top-right" richColors closeButton expand={false} visibleToasts={3} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
      </body>
    </html>
  );
} 