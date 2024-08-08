import { authKey } from "@config/constants";
import { removeFromCookie } from "../../../../shared/helpers/local_storage";

export const handleLogout = (router: any) => {
  removeFromCookie(authKey);
  router.push("/login");
};
