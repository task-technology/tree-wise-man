import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import { showSwal } from "../../../../../../../shared/helpers/SwalShower";
import swal from "sweetalert";

export const handleFormSubmit = async (
  e: React.FormEvent,
  companyName: any,
  companyWebsite: any,
  zipCode: any,
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
  twtrLink?: string
) => {
  e.preventDefault();
  setLoading(true);
  if (file) {
    const photoUploadResult = await uploadPhoto(file.target.files[0]);
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

      const result = await createService({ fullData, token });
      const isSwalTrue = showSwal(result);
      if (isSwalTrue) {
        router?.push("/dashboard/post/posts-list");
      }
    } else {
      swal("Error", photoUploadResult.message, "error");
    }
  } else {
    const fullData = {
      title: companyName || "",
      urlLink: companyWebsite || "",
      zipCode: zipCode || "",
      state: selectState?.state,
      content: aboutCompany || "",
      published: isPublic === "public" ? true : false,
      image: "",

      facebookLink: fbLink,
      instagramLink: insLink,
      twitterLink: twtrLink,
    };

    const result = await createService({ fullData, token });

    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/post/posts-list");
    }
  }
  setLoading(false);
};
