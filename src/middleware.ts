// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Run the intl middleware first
  const response = intlMiddleware(request);

  // Better route detection
  const isServicePage = pathname.includes("/services/") && pathname.split("/").filter(Boolean).length >= 3;
  const isHomePage =
    pathname === "/" || pathname.match(/^\/[a-z]{2}$/) || pathname.match(/^\/[a-z]{2}\/$/) || pathname === "";
  // Create response
  const modifiedResponse = response || NextResponse.next();
  // Set headers that force server-side re-evaluation
  modifiedResponse.headers.set("x-is-service-page", isServicePage.toString());
  modifiedResponse.headers.set("x-is-home-page", isHomePage.toString());
  modifiedResponse.headers.set("x-current-path", pathname);

  // Force Next.js to treat this as a fresh request
  modifiedResponse.headers.set("x-middleware-cache", "no-cache");
  modifiedResponse.headers.set("Vary", "x-pathname");

  return modifiedResponse;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
