import { authKey } from "@config/constants";
import { removeFromCookie } from "./local_storage";

export const handleLogout = (router: any) => {
  if (window.location.pathname !== "/dashboard") {
    window.location.reload();
  }
  removeFromCookie(authKey);
  router.push("/");
};
