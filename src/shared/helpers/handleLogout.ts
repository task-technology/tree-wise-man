import { authKey } from "@config/constants";
import { removeFromCookie } from "./local_storage";

export const handleLogout = (router: any) => {
  removeFromCookie(authKey);
  router.push("/");
};
