export function getBaseUrl() {
  if (typeof window === "undefined") {
    if (process.env.VERCEL_URL && process.env.NODE_ENV === "production") {
      return process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://vooksio.com";
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
  }

  if (window.location.hostname === "vooksio.com") {
    return "https://vooksio.com";
  }
  if (window.location.hostname === "vooksio-website.vercel.app") {
    return "https://vooksio-website.vercel.app";
  }

  return window.location.origin;
}

export const config = {
  baseUrl: getBaseUrl(),
  isDev: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL,
  isStaging: process.env.NODE_ENV === "production" && !process.env.VERCEL_PROJECT_PRODUCTION_URL,
};
