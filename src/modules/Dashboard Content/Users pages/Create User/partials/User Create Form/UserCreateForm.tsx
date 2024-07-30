"use client";
import Input from "@components/Input";
import { useState, useRef } from "react";
import PublicIcon from "@libs/custom icons/PublicIcon";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import Button from "@components/Button";
import PhotoUpload from "@modules/Dashboard Content/Posts pages/Create Post/partials/Photo Upload/PhotoUpload";
import { handleFormSubmit } from "./helpers/handleFormSubmit";

const UserCreateForm = () => {
  const [file, setFile] = useState<File | null>(null);

  // Refs for input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const contactNoRef = useRef<HTMLInputElement>(null);
  const designationRef = useRef<HTMLInputElement>(null);

  return (
    <div>
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
      >
        <div className="grid grid-cols-3 gap-5">
          <Input labelName="Name" inputName="name" required ref={nameRef} />
          <Input labelName="Email" inputName="email" required ref={emailRef} />

          <Input
            labelName="Contact Number"
            inputName="contactNo"
            ref={contactNoRef}
          />
          <Input
            labelName="Company Name"
            inputName="companyName"
            required
            ref={companyNameRef}
          />

          <Input
            labelName="Designation"
            inputName="designation"
            ref={designationRef}
          />

          <PhotoUpload file={file} setFile={setFile} />
        </div>
        <div className="mt-10 w-1/3 mx-auto">
          <Button type="submit" primary className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserCreateForm;
