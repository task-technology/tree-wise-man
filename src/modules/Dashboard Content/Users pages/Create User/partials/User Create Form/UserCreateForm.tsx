"use client";
import Input from "@components/Input";
import { useState, useRef } from "react";

import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

const UserCreateForm = () => {
  const [file, setFile] = useState<File | null>(null);

  // Refs for input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const contactNoRef = useRef<HTMLInputElement>(null);
  const designationRef = useRef<HTMLInputElement>(null);

  return (
    <div className=" rounded-lg max-w-3xl mx-auto">
      <form
        onSubmit={(e) =>
          handleFormSubmit(
            e,
            nameRef,
            emailRef,
            companyNameRef,
            contactNoRef,
            file,
            designationRef
          )
        }
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Input
            labelName="Name"
            inputName="name"
            required
            ref={nameRef}
            className=" border-slateLightThird bg-transparent text-solidWhite "
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Email"
            inputName="email"
            required
            ref={emailRef}
            className=" border-slateLightThird bg-transparent text-solidWhite "
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Contact Number"
            inputName="contactNo"
            ref={contactNoRef}
            className=" border-slateLightThird bg-transparent text-solidWhite "
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Company Name"
            inputName="companyName"
            required
            ref={companyNameRef}
            className=" border-slateLightThird bg-transparent text-solidWhite "
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Designation"
            inputName="designation"
            ref={designationRef}
            className=" border-slateLightThird bg-transparent text-solidWhite "
            labelClassName="text-solidWhite"
          />
        </div>
        <div className="mb-8">
          <PhotoUpload
            file={file}
            setFile={setFile}
            inputClass="bg-transparent text-solidWhite border border-slateLightThird"
            imgDetailsClass="!text-solidWhite"
            inputLabelClass="!text-solidWhite"
          />
        </div>
        <div className="text-center w-1/3 mx-auto pt-5">
          <Button type="submit" primary className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserCreateForm;
