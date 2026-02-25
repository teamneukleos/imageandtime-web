import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  
  // Protect admin dashboard routes
  if (pathname.startsWith("/admin/dashboard")) {
    if (!req.auth) {
      return NextResponse.redirect(new URL("/admin/sign-in", req.url));
    }
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};