import { authKey } from "@config/constants";
import { getFromLocalStorage } from "../helpers/local_storage";
import { decodedToken } from "./helpers/jwt";

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);

    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return true;
  } else {
    return false;
  }
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  // return await axiosInstance({
  //   url: `${getBaseUrl()}/auth/refresh-token`,
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   withCredentials: true,
  // });
};

export const isUserAdmin = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    if (decodedData?.role === "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return "";
  }
};
