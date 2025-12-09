import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isUnlocked = req.cookies.get("unlocked")?.value === "true";
  const progress = Number(req.cookies.get("puzzleProgress")?.value || 0);

  const url = req.nextUrl.pathname;

  const isLockPage = url.startsWith("/lock");
  const isPuzzle = url.startsWith("/puzzle");

  // Als niet unlocked → forceer lockscreen
  if (!isUnlocked && !isLockPage) {
    return NextResponse.redirect(new URL("/lock", req.url));
  }

  // Puzzelbeveiliging
  if (isPuzzle) {
    const match = url.match(/\/puzzle\/(\d+)/);
    const id = match ? Number(match[1]) : null;

    if (id && id > progress + 1) {
      // nog niet vrijgespeeld
      return NextResponse.redirect(new URL(`/puzzle/${progress + 1}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};