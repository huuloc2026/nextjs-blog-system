import next from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePath = ["/me"];
const authPath = ["/login", "/register"];
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  if (
    privatePath.some((path) => {
      pathname.startsWith(path) && !sessionToken;
    })
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    authPath.some((path) => {
      pathname.startsWith(path) && sessionToken;
    })
  ) {
    return NextResponse.redirect(new URL("/me", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [...privatePath,...authPath],
};
