import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";
import { CookieValueTypes } from "cookies-next";

export const handleFormSubmit = async (
  e: React.FormEvent,
  name: string,
  companyName: string,
  contactNo: string,
  file: any,
  designation: string,
  editUser: any,
  token: CookieValueTypes,
  router?: any,
  setLoading?: (loading: boolean) => void,
  id?: any
) => {
  e.preventDefault();
  setLoading?.(true);

  let photoUploadResult: any = { success: false, url: "", message: "" };

  if (file?.target?.files[0]) {
    photoUploadResult = await uploadPhoto(file.target.files[0]);
  }

  if (photoUploadResult.success || !file?.target?.files[0]) {
    const fullData = {
      name,
      company: companyName || "",
      contactNo: contactNo || "",
      profileImage: photoUploadResult.url || "",
      designation,
    };

    console.log(fullData);
    const result = await editUser({ fullData, token, id });
    console.log(result);
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/user/user-list");
    }
  } else {
    showSwal({
      title: "Error",
      text: photoUploadResult.message,
      icon: "error",
    });
  }

  setLoading?.(false);
};
