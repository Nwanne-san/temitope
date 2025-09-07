import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname =
    request.nextUrl.hostname || request.headers.get("host") || "";

  const pathname = request.nextUrl.pathname;
  const isNextInternal =
    pathname.startsWith("/_next/") || pathname === "/favicon.ico";
  const isStaticAsset = /\.[^/]+$/.test(pathname); // allow files like .png, .jpg, .svg, .css, .js, etc.

  if (
    hostname.includes("brandx.temitoperuthjacob.com") ||
    hostname.includes("brandx.localhost")
  ) {
    // Allow internal assets and public static files on subdomain
    if (isNextInternal || isStaticAsset) {
      return NextResponse.next();
    }

    // Force all non-asset routes on subdomain to resolve to /branding
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/branding", request.url));
    }
    if (pathname === "/branding" || pathname.startsWith("/branding/")) {
      return NextResponse.next();
    }

    return NextResponse.rewrite(new URL("/branding", request.url));
  } else {
    // Block access to branding page on main domain
    if (pathname === "/branding" || pathname.startsWith("/branding/")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
