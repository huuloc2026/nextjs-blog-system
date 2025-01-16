import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePath = ["/me"];
const authPath = ["/login", "/register"];

const total = [...privatePath,...authPath]

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;

  // Redirect to login if accessing private paths without a session
  if (privatePath.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to /me if trying to access auth paths while authenticated
  if (authPath.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/me","/login", "/register"],
};
