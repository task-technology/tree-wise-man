"use client";
import Input from "@components/Input";
import { useState } from "react";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import PublicIcon from "@libs/custom icons/PublicIcon";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import { useCreatePostMutation } from "../../../../../../redux/features/api/posts";
import { useRouter } from "next/navigation";
import { getFromCookie } from "../../../../../../shared/helpers/local_storage";

const PostForm = () => {
  const router = useRouter();
  const [isCustom, setIsCustom] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const token = getFromCookie("accessToken");
  const [createService, { isLoading: serviceLoading }] =
    useCreatePostMutation();
  const [selectState, setSelectState] = useState<any>(null);
  const [isPublic, setIsPublic] = useState<string>("public");
  const [loading, setLoading] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("");
  const [companyWebsite, setCompanyWebsite] = useState<string>("");
  const [aboutCompany, setAboutCompany] = useState<string>("");
  const [fbLink, setFBLink] = useState<string | "">("");
  const [insLink, setInsLink] = useState<string | "">("");
  const [twtrLink, setTwtrLink] = useState<string | "">("");
  const [ownerName, setOwnerName] = useState<string | "">("");
  const [ownerDesignation, setOwnerDesignation] = useState<string | "">("");
  const [contactNo, setContactNo] = useState<string | "">("");
  const [profileImage, setProfileImage] = useState<File | null>(null);

  return (
    <div className="relative min-h-screen ">
      <div className="flex gap-2 max-w-4xl mx-auto px-8 pb-5">
        <Input
          inputType="checkbox"
          checked={isCustom}
          onChange={() => setIsCustom(!isCustom)}
        />
        <label className="text-gray-800 font-medium ">
          Add owner information manually
        </label>
      </div>

      <div className=" px-8 max-w-4xl mx-auto   rounded-lg">
        <form
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              companyName,
              companyWebsite,
              selectState,
              aboutCompany,
              isPublic,
              file,
              createService,
              token,
              setLoading,
              router,
              fbLink,
              insLink,
              twtrLink,
              ownerName,
              ownerDesignation,
              contactNo,
              profileImage,
              isCustom
            )
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {isCustom && (
              <>
                <Input
                  labelName="Owner Name"
                  inputName="ownerName"
                  required
                  onChange={(e: any) => setOwnerName(e.target.value)}
                  className=""
                />
                <Input
                  labelName="Designation"
                  inputName="designation"
                  required
                  onChange={(e: any) => setOwnerDesignation(e.target.value)}
                  className=""
                />
                <Input
                  labelName="Contact Number"
                  inputName="contactNo"
                  required
                  onChange={(e: any) => setContactNo(e.target.value)}
                  className=""
                />
              </>
            )}

            <Input
              labelName="Company Name"
              inputName="title"
              required
              onChange={(e: any) => setCompanyName(e.target.value)}
              className=""
            />
            <Input
              labelName="Company Website Link"
              inputName="urlLink"
              onChange={(e: any) => setCompanyWebsite(e.target.value)}
              className=""
            />
            <Input
              labelName="Facebook Link"
              inputName="fbLink"
              onChange={(e: any) => setFBLink(e.target.value)}
              className=""
            />
            <Input
              labelName="Twitter Link"
              inputName="twtrLink"
              onChange={(e: any) => setTwtrLink(e.target.value)}
              className=""
            />
            <Input
              labelName="Instagram Link"
              inputName="instagramLink"
              onChange={(e: any) => setInsLink(e.target.value)}
              className=""
            />

            <SearchFilterInput
              required
              labelName="Zip Code"
              setData={setSelectState}
              data={selectState}
              isMulti={false}
            />

            <div className="md:col-span-2">
              <Input
                maxLength={150}
                labelName="About Your Company (Maximum 150 characters allowed.)"
                inputName="content"
                onChange={(e: any) => setAboutCompany(e.target.value)}
                className="pt-2 pb-5 "
              />
            </div>
            <div className=" md:col-span-2 flex flex-col gap-5 md:flex-row justify-around mt-7">
              <div className="flex  items-center gap-3">
                <Input
                  className="w-8 h-5 !p-0"
                  inputType="radio"
                  inputName="visibility"
                  checked={isPublic === "public"}
                  onChange={() => setIsPublic("public")}
                />
                <div className="flex items-center gap-1">
                  <PublicIcon />
                  <div>
                    <b className="text-lg">Public</b>
                    <p className="text-gray">
                      Anyone can see your company details
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  className="w-8 h-5 !p-0"
                  inputType="radio"
                  inputName="visibility"
                  checked={isPublic === "private"}
                  onChange={() => setIsPublic("private")}
                />
                <div className="flex items-center gap-1">
                  <PrivateIcon />
                  <div>
                    <b className="text-lg">Private</b>
                    <p className="text-gray">
                      Anyone cannot see your company details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isCustom ? (
              <>
                <PhotoUpload
                  label="Upload Logo"
                  setFile={setFile}
                  file={file}
                />
                <PhotoUpload
                  label="Owner Photo"
                  setFile={setProfileImage}
                  file={profileImage}
                />
              </>
            ) : (
              <div className="md:col-span-2 ">
                <PhotoUpload
                  label="Upload Logo"
                  setFile={setFile}
                  file={file}
                />
              </div>
            )}
          </div>
          <div className="text-center w-1/3 mx-auto">
            <Button
              loading={loading || serviceLoading}
              type="submit"
              primary
              className="w-full"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
