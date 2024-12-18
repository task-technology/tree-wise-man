import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";
import { CookieValueTypes } from "cookies-next";
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
  token: CookieValueTypes,
  setLoading: any,
  router?: any,
  fbLink?: string,
  insLink?: string,
  twtrLink?: string,
  id?: any,
  ownerName?: string,
  ownerDesignation?: string,
  contactNo?: string,
  profileImage?: any
) => {
  e.preventDefault();
  setLoading(true);

  try {
    let logoUploadResult, profilePhotoUploadResult;

    const isFileInput = (input: any) => input?.target?.files?.length > 0;

    if (isFileInput(file)) {
      logoUploadResult = await uploadPhoto(file.target.files[0]);
      if (!logoUploadResult.success) {
        swal("Error", logoUploadResult.message, "error");
        setLoading(false);
        return;
      }
    } else if (typeof file === "string") {
      logoUploadResult = { url: file };
    } else {
      logoUploadResult = { url: "" };
    }

    // Upload profile image if provided
    if (isFileInput(profileImage)) {
      profilePhotoUploadResult = await uploadPhoto(
        profileImage.target.files[0]
      );
      if (!profilePhotoUploadResult.success) {
        swal("Error", profilePhotoUploadResult.message, "error");
        setLoading(false);
        return;
      }
    } else if (typeof profileImage === "string") {
      profilePhotoUploadResult = { url: profileImage };
    } else {
      profilePhotoUploadResult = { url: "" };
    }

    // Construct the data object
    const fullData: any = {
      title: companyName || "",
      urlLink: companyWebsite || "",
      zipCode: selectState?.zip_code || "",
      state: selectState?.ste_name || "",
      content: aboutCompany || "",
      published: isPublic === "public" ? true : false,
      image: logoUploadResult?.url || "",
      facebookLink: fbLink,
      instagramLink: insLink,
      twitterLink: twtrLink,
    };

    // Add owner-related fields if they exist
    if (ownerName) fullData.ownerName = ownerName;
    if (ownerDesignation) fullData.ownerDesignation = ownerDesignation;
    if (contactNo) fullData.contactNo = contactNo;
    if (profilePhotoUploadResult?.url)
      fullData.profileImage = profilePhotoUploadResult.url;

    // Call the createService function
    const result = await createService({ fullData, token, id });
    const isSwalTrue = showSwal(result);

    if (isSwalTrue) {
      router?.push("/dashboard/post/admin-posts-list");
    }
  } catch (error) {
    console.log(error);
    swal("Error", "Something went wrong. Please try again.", "error");
  } finally {
    setLoading(false);
  }
};
