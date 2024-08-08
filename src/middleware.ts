// middleware.js
import { NextRequest, NextResponse } from "next/server";
import { getUserInfo } from "./shared/auth/auth.service";

export function middleware(request: NextRequest) {
  const { cookies } = request;
  const authToken = cookies.get("accessToken");

  const isLogged = !!authToken;
  const user: any = authToken ? getUserInfo() : null;
  console.log(authToken);

  const url = request.nextUrl.clone();
  if (!isLogged) {
    if (url.pathname.startsWith("/dashboard")) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  if (isLogged && user?.role !== "admin") {
    const adminPaths = [
      "/dashboard/post/admin-posts-list",
      "/dashboard/payment/payments-list",
      "/dashboard/subscription/subscriptions-list",
      "/dashboard/user/create-user",
      "/dashboard/user/user-list",
    ];

    if (adminPaths.some((path) => url.pathname.startsWith(path))) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
