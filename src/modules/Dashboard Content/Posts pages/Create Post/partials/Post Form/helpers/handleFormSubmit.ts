import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";
import swal from "sweetalert";

export const handleFormSubmit = async (
  e: React.FormEvent,
  companyName: any,
  companyWebsite: any,
  selectState: any,
  aboutCompany: any,
  isPublic: any,
  file: any,
  createService: any,
  token: any,
  setLoading: any,
  router?: any,
  fbLink?: string,
  insLink?: string,
  twtrLink?: string,
  ownerName?: string,
  ownerDesignation?: string,
  contactNo?: string,
  profileImage?: any,
  isCustom?: boolean
) => {
  e.preventDefault();
  setLoading(true);

  try {
    let logoUploadResult: any, photoUploadResult: any;
    if (file) {
      logoUploadResult = await uploadPhoto(
        file.target.files[0],
        "Company Logo"
      );
    }

    if (isCustom && profileImage) {
      photoUploadResult = await uploadPhoto(
        profileImage.target.files[0],
        "Owner Photo"
      );
    }

    const fullData: any = {
      title: companyName || "",
      urlLink: companyWebsite || "",
      zipCode: selectState?.zip_code || "",
      state: selectState?.ste_name,
      content: aboutCompany || "",
      published: isPublic === "public" ? true : false,
      image: logoUploadResult?.url || "",
      facebookLink: fbLink,
      instagramLink: insLink,
      twitterLink: twtrLink,
    };

    if (isCustom) {
      fullData.ownerName = ownerName || "";
      fullData.ownerDesignation = ownerDesignation || "";
      fullData.contactNo = contactNo || "";
      fullData.profileImage = photoUploadResult?.url || "";
    }

    const result = await createService({ fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/post/posts-list");
    }
  } catch (error) {
    swal("Error", "Something went wrong. Please try again.", "error");
  } finally {
    setLoading(false);
  }
};
