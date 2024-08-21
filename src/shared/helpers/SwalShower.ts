import swal from "sweetalert";

export const showSwal = (result: any) => {
  console.log("result", result);
  if (result?.data?.success) {
    swal("Success", result.data.message, "success");
    return true;
  } else {
    const errorStatus = result?.error?.status;
    const errorMessage =
      result?.error?.data?.message || "Unknown error occurred";

    if (errorStatus === 403 || errorStatus === 401) {
      // removeUserInfo(authKey);
      swal({
        title: "Error",
        text: errorMessage,
        icon: "error",
      }).then(() => {
        // window.location.href = "/login";
      });
    } else {
      swal("Error", errorMessage, "error");
      return false;
    }
  }
};
