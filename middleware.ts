import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""

  if (hostname.includes("brandx.temitoperuthjacob.com") || hostname.includes("brandx.localhost")) {
    // Allow access to branding page on brandx subdomain
    if (request.nextUrl.pathname === "/") {
      return NextResponse.rewrite(new URL("/branding", request.url))
    }
  } else {
    // Block access to branding page on main domain
    if (request.nextUrl.pathname === "/branding") {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
