"use client";

import { useState } from "react";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import { useUserCreateMutation } from "../../../../../../redux/features/api/users";
import InputWithValue from "@components/Input With Value";
import { useRouter } from "next/navigation";
import { getFromCookie } from "../../../../../../shared/helpers/local_storage";
import { useAdminCreateMutation } from "../../../../../../redux/features/api/admin";
import { authKey } from "@config/constants";

const AdminCreateForm = () => {
  const router = useRouter();
  const token = getFromCookie(authKey);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [createUser, { isLoading: userCreateLoading }] =
    useAdminCreateMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="rounded-lg max-w-3xl mx-auto">
      <form
        onSubmit={(e) =>
          handleFormSubmit(
            e,
            name,
            email,
            companyName,
            contactNo,
            file,
            designation,
            createUser,
            token,
            router,
            setLoading,
            password
          )
        }
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InputWithValue
            labelName="Name"
            inputName="name"
            required
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <InputWithValue
            inputType="email"
            labelName="Email"
            inputName="email"
            required
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <InputWithValue
            required
            labelName="Contact Number"
            inputName="contactNo"
            value={contactNo}
            onChange={(e: any) => setContactNo(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <InputWithValue
            labelName="Company Name"
            inputName="companyName"
            required
            value={companyName}
            onChange={(e: any) => setCompanyName(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <InputWithValue
            required
            labelName="Designation"
            inputName="designation"
            value={designation}
            onChange={(e: any) => setDesignation(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <InputWithValue
            required
            labelName="Password"
            inputName="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
        </div>
        <div className="mb-8">
          <PhotoUpload
            required
            label="Upload Profile Photo"
            setFile={setFile}
            file={file}
            inputClass="bg-transparent text-solidWhite border border-slateLightThird"
            imgDetailsClass="!text-solidWhite"
            inputLabelClass="!text-solidWhite"
          />
        </div>
        <div className="text-center w-1/3 mx-auto pt-5">
          <Button
            loading={loading || userCreateLoading}
            type="submit"
            primary
            className="w-full"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateForm;
