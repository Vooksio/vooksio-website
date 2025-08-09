// lib/layout-utils.ts
import { headers } from "next/headers";

export async function getLayoutConfig() {
  const headersList = await headers();

  const currentPath = headersList.get("x-current-path") || "";
  const referer = headersList.get("referer") || "";

  // Multiple checks for better reliability
  const pathIsService = currentPath.includes("/services/") && currentPath.split("/").filter(Boolean).length >= 3;
  const refererIsService = referer.includes("/services/");

  // Check if we're coming from a service page to home page
  const comingFromService = refererIsService && !pathIsService;

  const isHomePage =
    currentPath === "/" ||
    currentPath.match(/^\/[a-z]{2}$/) ||
    currentPath.match(/^\/[a-z]{2}\/$/) ||
    currentPath === "";

  // If coming from service to home, force show header/footer
  const showHeaderFooter = comingFromService || (!pathIsService && isHomePage) || !pathIsService;

  console.log("Layout Helper:", {
    currentPath,
    referer: referer.slice(-50), // Only log last 50 chars for brevity
    pathIsService,
    refererIsService,
    comingFromService,
    isHomePage,
    showHeaderFooter,
  });

  return {
    currentPath,
    isServicePage: pathIsService,
    isHomePage,
    showHeader: showHeaderFooter,
    showFooter: showHeaderFooter,
    comingFromService,
  };
}
