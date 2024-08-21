import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";
import { CookieValueTypes } from "cookies-next";
import swal from "sweetalert"
export const handleFormSubmit = async (
  e: React.FormEvent,
  name: any,
  email: any,
  companyName: any,
  contactNo: any,
  file: any,
  designation: any,
  createUser: any,
  token: CookieValueTypes,
  router?: any,
  setLoading?: any,
  password?: string
) => {
  e.preventDefault();
  setLoading(true);
  const photoUploadResult = await uploadPhoto(file.target.files[0]);

  if (photoUploadResult.success) {
    const fullData = {
      name,
      email,
      company: companyName || "",
      contactNo: contactNo || "",
      profileImage: photoUploadResult.url,
      designation,
      password,
    };
    const result = await createUser({ fullData, token });
    console.log(result);
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/user/user-list");
    }
  } else {
    swal("Error", photoUploadResult.message, "error");
  }

  setLoading(false);
};
