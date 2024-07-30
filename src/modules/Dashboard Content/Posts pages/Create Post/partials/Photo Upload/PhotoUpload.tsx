"use client";
import Input from "@components/Input";
import Image from "next/image";
import React, { useState } from "react";
import { PhotoUploadTypes } from "./config/type";

const PhotoUpload: React.FC<PhotoUploadTypes> = ({ file, setFile }) => {
  const [preview, setPreview] = useState<string | null>(null);

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
      } else {
        alert("Only PNG and JPG files are allowed");
      }
    }
  };
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
        />
      )}
      {preview && (
        <div className="relative w-48 h-48 mb-4 mx-auto">
          <Image
            src={preview}
            alt="Selected file"
            fill
            className="rounded object-cover"
          />
        </div>
      )}
      {file && (
        <p className="text-gray text-center">Selected file: {file.name}</p>
      )}
    </div>
  );
};

export default PhotoUpload;
