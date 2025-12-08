import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isUnlocked = req.cookies.get("unlocked")?.value === "true";
  const isLockPage = req.nextUrl.pathname.startsWith("/lock");

  // Als niet unlocked → forceer lockscreen
  if (!isUnlocked && !isLockPage) {
    return NextResponse.redirect(new URL("/lock", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};