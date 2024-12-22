import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import swal from "sweetalert";
import { showSwal } from "../../../../../../../../shared/helpers/SwalShower";
import React from "react";
import { CookieValueTypes } from "cookies-next";

export const handleFormSubmit = async ({
  e,
  title,
  description,
  logo,
  createAds,

  token,
  setLoading,
  router,
}: {
  e?: any;
  title: string;
  description: string;
  logo: File | any;
  createAds: any;
  token: CookieValueTypes;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: any;
}) => {
  e.preventDefault();
  setLoading(true);

  try {
    let logoUploadResult: any, photoUploadResult: any;
    if (logo) {
      logoUploadResult = await uploadPhoto(logo.target.files[0]);
    }

    const fullData: any = {
      title: title || "",
      description: description || "",
      logo: logoUploadResult?.url || "",
    };

    const result = await createAds({ fullData, token });
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
