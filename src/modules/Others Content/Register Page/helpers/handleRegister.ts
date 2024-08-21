import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../shared/helpers/SwalShower";
import swal from "sweetalert"

export const handleRegister = async (
  e: React.FormEvent,
  name: any,
  email: any,
  company: any,
  contactNo: any,
  file: any,
  designation: any,
  createUser: any,
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
      company,
      contactNo: contactNo || "",
      profileImage: photoUploadResult.url,
      designation,
      password,
    };
    console.log(fullData);
    const result = await createUser({ fullData });
    console.log(result);
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/first-payment");
    }
  } else {
    swal("Error", photoUploadResult.message, "error");
  }
  setLoading(false);
};

