import Input from "@components/Input";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { uploadPhoto } from "../../../redux/features/slices/photoUploadSlice";
import { PhotoUploadTypes } from "./config/type";

const PhotoUpload: React.FC<PhotoUploadTypes> = ({
  inputClass,
  imgDetailsClass,
  inputLabelClass,
}) => {
  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch type
  const { successMessage, uploading, photoURL, error } = useSelector(
    (state: RootState) => state.photoUpload
  );
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        setFile(selectedFile);

        // Create a preview URL for the selected image
        const previewURL = URL.createObjectURL(selectedFile);
        setPreview(previewURL);

        // Dispatch the uploadPhoto action
        dispatch(uploadPhoto(selectedFile));
      } else {
        alert("Only PNG and JPG files are allowed");
      }
    }
  };

  // const handleDelete = () => {
  //   if (photoURL) {
  //     const publicId = photoURL.split("/").pop()?.split(".")[0] ?? "";
  //     dispatch(deletePhoto(publicId));
  //     setFile(null);
  //     setPreview(null);
  //   }
  // };

  return (
    <div
      className={` ${preview !== null && "border border-slateLightThird p-2"}`}
    >
      {preview === null && (
        <Input
          labelName="Upload Logo"
          inputType="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
          className={`${inputClass} !py-[5px]`}
          labelClassName={inputLabelClass}
        />
      )}
      {preview && (
        <div className="relative w-48 h-48 mb-4 mx-auto">
          <Image
            src={photoURL || preview}
            alt="Selected file"
            fill
            className="rounded object-cover"
          />
          {/* <button
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
          >
            X
          </button> */}
        </div>
      )}
      {file && (
        <p className={`${imgDetailsClass} text-center`}>
          Selected File: {file.name.slice(0, -4)}
        </p>
      )}
      {uploading && <p className={`${imgDetailsClass}`}>Uploading...</p>}
      {successMessage && (
        <div className="text-successMsg">{successMessage}</div>
      )}
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default PhotoUpload;
