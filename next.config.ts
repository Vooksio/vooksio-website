import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // 9. FIXED: Remove X-Powered-By header
  poweredByHeader: false,

  // Enable internationalization
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000,
    domains: ["vooksio.com"], // Add your domain
  },

  // Enable compression
  compress: true,

  // 11. FIXED: Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Rewrites for better SEO URLs
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
