import swal from "sweetalert";
import { removeFromCookie } from "./local_storage";
import { authKey } from "@config/constants";

export const showSwal = (result: any) => {
  if (result?.data?.success) {
    swal("Success", result.data.message, "success");
    return true;
  } else {
    const errorStatus = result?.error?.status;
    const errorMessage =
      result?.error?.data?.message || "Unknown error occurred";
    console.log(errorMessage);
    if (errorStatus === 403 || errorStatus === 401) {
      // removeUserInfo(authKey);
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
      }).then(() => {
        if (errorMessage === "No subscription found") {
          window.location.href = "/dashboard/payment/first-payment";
        } else {
          removeFromCookie(authKey);
          window.location.href = "/login";
        }
      });
    } else {
      swal("Error", errorMessage, "error");
      return false;
    }
  }
};
