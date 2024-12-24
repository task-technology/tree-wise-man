import Input from "@components/Input";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { PhotoUploadTypes } from "./config/type";
import { icons } from "@libs/Icons";

const PhotoUpload: React.FC<PhotoUploadTypes> = ({
  inputClass,
  imgDetailsClass,
  inputLabelClass,
  file,
  setFile,
  label = "Photo Upload",
  required = false,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [photoSuggestion, setPhotoSuggestion] = useState<string>("");

  useEffect(() => {
    const checkPhoto = async (selectedFile: File) => {
      const img = new window.Image();
      img.src = URL.createObjectURL(selectedFile);

      img.onload = () => {
        const { width, height } = img;

        if (width === height) {
          setPhotoSuggestion("This photo is perfect for a profile picture.");
        } else if (width > height) {
          setPhotoSuggestion("This photo is good for a background image.");
        } else {
          setPhotoSuggestion("This photo might be suitable for a portrait.");
        }
      };
    };

    if (file) {
      const selectedFile = file?.target?.files[0];

      if (selectedFile) {
        if (
          selectedFile.type === "image/png" ||
          selectedFile.type === "image/jpeg"
        ) {
          setErrorMsg("");
          const previewURL = URL.createObjectURL(selectedFile);
          setPreview(previewURL);

          checkPhoto(selectedFile); // Check photo dimensions
        } else {
          setErrorMsg("Please choose a JPG or PNG file.");
          setPhotoSuggestion("");
        }
      } else {
        setPreview(file);
      }
    }
  }, [file]);

  return (
    <div
      className={`${
        preview !== null && "border border-slateLightThird p-2"
      } relative`}
    >
      {preview === null && (
        <Input
          required={required}
          labelName={label}
          inputType="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e: any) => setFile(e)}
          className={`${inputClass} !py-[5px]`}
          labelClassName={inputLabelClass}
        />
      )}
      <div className="pb-5 flex items-center justify-between">
        {preview && (
          <label className={`${inputLabelClass} text-lg font-semibold`}>
            {label}
          </label>
        )}
        {photoSuggestion && (
          <p className={`${inputLabelClass} text-center italic`}>
            {photoSuggestion}
          </p>
        )}
        {preview && (
          <div>
            <button
              onClick={() => {
                setPreview(null);
                setFile(null);
                setPhotoSuggestion("");
              }}
              className={` text-3xl ${imgDetailsClass}`}
            >
              {icons.cross}
            </button>
          </div>
        )}
      </div>
      {preview && (
        <div className="relative w-full h-96 mb-4 mx-auto">
          <Image
            src={preview}
            alt="Selected file"
            fill
            sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 33vw"
            className="rounded object-contain"
          />
        </div>
      )}
      {preview && file?.target && (
        <p className={`${imgDetailsClass} text-center`}>
          Selected File: {file.target.files[0].name.slice(0, -4)}
        </p>
      )}
      {errorMsg && <p className="text-solidRed">{errorMsg}</p>}
    </div>
  );
};

export default PhotoUpload;
