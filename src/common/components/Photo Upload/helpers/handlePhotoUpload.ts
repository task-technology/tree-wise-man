export const uploadPhoto = async (
  file: any
): Promise<
  | { url: string; message: string; success: true }
  | { message: string; success: false }
> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return {
      url: data.secure_url,
      message: "Image Uploaded Successfully!",
      success: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
};
