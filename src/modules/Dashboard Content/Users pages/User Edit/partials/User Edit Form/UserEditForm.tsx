"use client";

import { useEffect, useState } from "react";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import {
  useGetSingleUserQuery,
  useUserEditMutation,
} from "../../../../../../redux/features/api/users";
import { useParams, useRouter } from "next/navigation";
import Input from "@components/Input";
import { getFromCookie } from "../../../../../../shared/helpers/local_storage";

const UserEditForm = () => {
  const { id } = useParams();

  const router = useRouter();
  const token = getFromCookie("accessToken");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { data: singleUser } = useGetSingleUserQuery({ token, id });
  const [editUser, { isLoading: userCreateLoading }] = useUserEditMutation();
  console.log("data", singleUser);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    if (singleUser) {
      setName(singleUser?.data?.name);
      setCompanyName(singleUser?.data?.company);
      setContactNo(singleUser?.data?.contactNo);
      setDesignation(singleUser?.data?.designation);
    } else {
      setName("");
      setCompanyName("");
      setContactNo("");
      setDesignation("");
    }
  }, [singleUser]);

  return (
    <div className="rounded-lg max-w-3xl mx-auto">
      <form
        onSubmit={(e) =>
          handleFormSubmit(
            e,
            name,
            companyName,
            contactNo,
            file,
            designation,
            editUser,
            token,
            router,
            setLoading,
            id
          )
        }
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Input
            labelName="Name"
            inputName="name"
            required
            defaultValue={singleUser?.data?.name}
            onChange={(e: any) => setName(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />

          <Input
            labelName="Contact Number"
            inputName="contactNo"
            defaultValue={singleUser?.data?.contactNo}
            onChange={(e: any) => setContactNo(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Company Name"
            inputName="companyName"
            required
            defaultValue={singleUser?.data?.company}
            onChange={(e: any) => setCompanyName(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
          <Input
            labelName="Designation"
            inputName="designation"
            defaultValue={singleUser?.data?.designation}
            onChange={(e: any) => setDesignation(e.target.value)}
            className="border-slateLightThird bg-transparent text-solidWhite"
            labelClassName="text-solidWhite"
          />
        </div>
        <div className="mb-8">
          <PhotoUpload
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

export default UserEditForm;
