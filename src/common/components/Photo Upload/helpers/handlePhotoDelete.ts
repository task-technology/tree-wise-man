import CryptoJS from "crypto-js";
import { getPublicIdFromUrl } from "./handleGetPublicId";

export const deletePhoto = async (
  imageUrl: string
): Promise<{ message: string; success: boolean }> => {
  try {
    const publicId: any = getPublicIdFromUrl(imageUrl);

    const timestamp = Math.floor(Date.now() / 1000);
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`;

    // Create the signature using SHA-1 with crypto-js
    const signature = CryptoJS.SHA1(stringToSign).toString();

    const formData = new FormData();
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
    formData.append("timestamp", timestamp.toString());

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete image");
    }

    const data = await response.json();

    if (data.result !== "ok") {
      throw new Error("Failed to delete image");
    }

    return {
      message: "Image Deleted Successfully!",
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
};
