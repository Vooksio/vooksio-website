import { headers } from "next/headers";

// SSG-friendly layout configuration
export async function getLayoutConfig() {
  try {
    // Try to get headers (works in SSR/ISR)
    const headersList = await headers();
    const currentPath = headersList.get("x-current-path") || "";

    return getLayoutConfigFromPath(currentPath);
  } catch {
    // Fallback for SSG - return default configuration
    // This will be overridden by the specific layouts
    return {
      currentPath: "",
      isServicePage: false,
      isHomePage: true,
      showHeader: true,
      showFooter: true,
      comingFromService: false,
    };
  }
}

// Helper function to determine layout config from path
export function getLayoutConfigFromPath(path: string) {
  const pathIsService = path.includes("/services/") && path.split("/").filter(Boolean).length >= 3;

  const isHomePage = path === "/" || path.match(/^\/[a-z]{2}$/) || path.match(/^\/[a-z]{2}\/$/) || path === "";

  const showHeaderFooter = !pathIsService && isHomePage;

  return {
    currentPath: path,
    isServicePage: pathIsService,
    isHomePage,
    showHeader: showHeaderFooter,
    showFooter: showHeaderFooter,
    comingFromService: false,
  };
}
