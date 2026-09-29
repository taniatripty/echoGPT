/* eslint-disable @typescript-eslint/no-explicit-any */

import { auth } from "@/lib/authOptions";
import { NextResponse } from "next/server";

export default auth((request:any) => {
  const { pathname } = request.nextUrl;
  const isLoggedIn = !!request.auth;

  // Routes that require authentication
  const isProtectedRoute =
    pathname.startsWith("/chatDashboard") ||
    pathname.startsWith("/settings");

  // If user is not logged in and tries to access
  // a protected route → redirect to login
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);

    // After successful login, return the user
    // to the page they originally requested.
    loginUrl.searchParams.set(
      "callbackUrl",
      pathname,
    );

    return NextResponse.redirect(loginUrl);
  }

  // If user is already logged in and visits login/register
  // → send them to the dashboard.
  if (
    isLoggedIn &&
    (pathname === "/login" || pathname === "/register")
  ) {
    return NextResponse.redirect(
      new URL("/chatDashboard", request.url),
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico)$).*)",
  ],
};