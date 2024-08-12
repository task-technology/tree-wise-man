import { NextRequest, NextResponse } from "next/server";
import { decodedToken } from "./shared/auth/helpers/jwt";

export function middleware(request: NextRequest) {
  const { cookies } = request;
  const authToken = cookies.get("accessToken")?.value;
  const user: any = authToken ? decodedToken(authToken) : null;
  // const user: any = { role: "admin" };
  const isLogged = !!authToken;
  console.log("user", user);

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
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
