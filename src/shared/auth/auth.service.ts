import { authKey } from "@config/constants";
import {
  getFromCookie,
  removeFromCookie,
  setToCookie,
} from "../helpers/local_storage";
import { decodedToken } from "./helpers/jwt";

export const getUserInfo = () => {
  const authToken = getFromCookie(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
    // return { role: "admin" };
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromCookie(authKey);
  return !!authToken;
};

export const removeUserInfo = () => {
  removeFromCookie(authKey);
};

export const setAuthToken = (token: string) => {
  setToCookie(authKey, token);
};

export const isUserAdmin = () => {
  const authToken = getFromCookie(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return decodedData?.role === "admin";
  } else {
    return false;
  }
};
