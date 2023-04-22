import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어 실행 체크중");
  if (request.nextUrl.pathname.startsWith("/items/1004")) {
    console.log("미들웨어 리다이렉팅");

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정 페이지에서만 필요하면 특정 경로에서만 실행되게 하기
export const config = {
  matcher: ["/items/:path*"],
};
