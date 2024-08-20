"use client";
import Input from "@components/Input";
import { states } from "./config/constant";
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
  const [file, setFile] = useState<File | null>(null);
  const token = getFromCookie("accessToken");
  const [createService, { isLoading: serviceLoading }] =
    useCreatePostMutation();
  const [selectState, setSelectState] = useState<any>(null);
  const [isPublic, setIsPublic] = useState<string>("public");
  const [loading, setLoading] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("");
  const [companyWebsite, setCompanyWebsite] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [aboutCompany, setAboutCompany] = useState<string>("");
  const [fbLink, setFBLink] = useState<string | "">("");
  const [insLink, setInsLink] = useState<string | "">("");
  const [twtrLink, setTwtrLink] = useState<string | "">("");

  return (
    <div className="relative min-h-screen ">
      <div className=" px-8 max-w-4xl mx-auto   rounded-lg">
        <form
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              companyName,
              companyWebsite,
              zipCode,
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
              twtrLink
            )
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Input
              labelName="Company Name"
              inputName="title"
              required
              onChange={(e: any) => setCompanyName(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Company Website Link"
              inputName="urlLink"
              onChange={(e: any) => setCompanyWebsite(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Facebook Link"
              inputName="fbLink"
              onChange={(e: any) => setFBLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Twitter Link"
              inputName="twtrLink"
              onChange={(e: any) => setTwtrLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Instagram Link"
              inputName="instagramLink"
              onChange={(e: any) => setInsLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Zip Code"
              inputName="zipCode"
              required
              onChange={(e: any) => setZipCode(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />

            <SearchFilterInput
              required
              options={states}
              labelName="State Name"
              filterName="state"
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
                className="pt-2 pb-5 bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
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
            <div className="md:col-span-2 ">
              <PhotoUpload
                required
                label="Upload Logo"
                setFile={setFile}
                file={file}
              />
            </div>
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
