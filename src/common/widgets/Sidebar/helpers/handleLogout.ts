import { authKey } from "@config/constants";
import { removeFromLocalStorage } from "../../../../shared/helpers/local_storage";

export const handleLogout = (router: any) => {
  removeFromLocalStorage(authKey);
  router.push("/login");
};
