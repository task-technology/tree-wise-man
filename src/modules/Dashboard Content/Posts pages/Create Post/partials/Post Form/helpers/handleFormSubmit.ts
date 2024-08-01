import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";

export const handleFormSubmit = async (
  e: React.FormEvent,
  companyName: any,
  zipCode: any,
  companyWebsite: any,
  selectState: any,
  aboutCompany: any,
  isPublic: any,
  file: any,
  createService: any,
  token: string | null,
  setLoading: any,
  router?: any,
  fbLink?: string,
  insLink?: string,
  twtrLink?: string
) => {
  e.preventDefault();
  setLoading(true);
  const photoUploadResult = await uploadPhoto(file.target.files[0]);
  console.log(photoUploadResult);
  if (photoUploadResult.success) {
    const fullData = {
      title: companyName || "",
      urlLink: companyWebsite || "",
      zipCode: zipCode || "",
      state: selectState?.state,
      content: aboutCompany || "",
      published: isPublic === "public" ? true : false,
      image: photoUploadResult.url,

      facebookLink: fbLink,
      instagramLink: insLink,
      twitterLink: twtrLink,
    };

    console.log(fullData);
    const result = await createService({ fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/post/posts-list");
    }
  } else {
    swal("Error", photoUploadResult.message, "error");
  }
  setLoading(false);
};
