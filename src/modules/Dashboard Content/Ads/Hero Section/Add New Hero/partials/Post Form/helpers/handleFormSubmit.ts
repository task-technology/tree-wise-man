import { uploadPhoto } from "@components/Photo Upload/helpers/handlePhotoUpload";
import swal from "sweetalert";
import { showSwal } from "../../../../../../../../shared/helpers/SwalShower";
import React from "react";
import { CookieValueTypes } from "cookies-next";

export const handleFormSubmit = async ({
  e,
  title,
  description,
  bgImage,
  createAds,
  sideImage,
  token,
  setLoading,
  router,
  link,
}: {
  e?: any;
  title: string;
  description: string;
  bgImage: File | any;
  createAds: any;
  sideImage: File | any;
  token: CookieValueTypes;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  router: any;
  link: string;
}) => {
  e.preventDefault();
  setLoading(true);

  try {
    let logoUploadResult: any, photoUploadResult: any;
    if (bgImage) {
      logoUploadResult = await uploadPhoto(
        bgImage.target.files[0],
        "Ads Background"
      );
    }

    if (sideImage) {
      photoUploadResult = await uploadPhoto(
        sideImage.target.files[0],
        "Ads Logo"
      );
    }

    const fullData: any = {
      title: title || "",
      discription: description || "",
      banner: logoUploadResult?.url || "",
      image: photoUploadResult?.url || "",
      link: link || "",
    };

    const result = await createAds({ fullData, token });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      router?.push("/dashboard/ads/hero-ads-list");
    }
  } catch (error) {
    swal("Error", "Something went wrong. Please try again.", "error");
  } finally {
    setLoading(false);
  }
};
