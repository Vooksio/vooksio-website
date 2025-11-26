import { headers } from "next/headers";

export async function getLayoutConfig() {
  const headersList = await headers();

  const currentPath = headersList.get("x-current-path") || "";
  const referer = headersList.get("referer") || "";

  const pathIsService = currentPath.includes("/services/") && currentPath.split("/").filter(Boolean).length >= 3;
  const refererIsService = referer.includes("/services/");

  const comingFromService = refererIsService && !pathIsService;

  const isHomePage =
    currentPath === "/" ||
    currentPath.match(/^\/[a-z]{2}$/) ||
    currentPath.match(/^\/[a-z]{2}\/$/) ||
    currentPath === "";

  const showHeaderFooter = comingFromService || (!pathIsService && isHomePage) || !pathIsService;

  return {
    currentPath,
    isServicePage: pathIsService,
    isHomePage,
    showHeader: showHeaderFooter,
    showFooter: showHeaderFooter,
    comingFromService,
  };
}
