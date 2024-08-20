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

  useEffect(() => {
    if (file) {
      const selectedFile = file.target.files[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        const previewURL = URL.createObjectURL(selectedFile);
        setPreview(previewURL);
        setErrorMsg("");
      } else {
        setErrorMsg("Please Choose a JPG or PNG file");
      }
    }
  }, [file]);

  return (
    <div
      className={` ${
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
      {preview && (
        <button
          onClick={() => setPreview(null)}
          className={`absolute right-2  text-3xl ${imgDetailsClass}`}
        >
          {icons.cross}
        </button>
      )}
      {preview && (
        <div className="relative w-48 h-48 mb-4 mx-auto">
          <Image
            src={preview}
            alt="Selected file"
            fill
            sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            33vw"
            className="rounded object-cover"
          />
        </div>
      )}

      {preview && (
        <p className={`${imgDetailsClass} text-center`}>
          Selected File: {file.target.files[0].name.slice(0, -4)}
        </p>
      )}
      {errorMsg && <p className="text-solidRed">{errorMsg}</p>}
    </div>
  );
};

export default PhotoUpload;
