"use client";
import Input from "@components/Input";
import { useEffect, useState } from "react";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import PublicIcon from "@libs/custom icons/PublicIcon";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import {
  useGetSinglePostQuery,
  usePostEditByAdminMutation,
} from "../../../../../../redux/features/api/posts";
import { useParams, useRouter } from "next/navigation";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";
import { getFromCookie } from "../../../../../../shared/helpers/local_storage";

const PostForm = () => {
  const token = getFromCookie("accessToken");
  const { id } = useParams();
  const { data: singleData, isLoading: singleDataLoading } =
    useGetSinglePostQuery({ id, token });
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [createService, { isLoading: serviceLoading }] =
    usePostEditByAdminMutation();
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

  useEffect(() => {
    if (singleData) {
      setFile(singleData?.data?.image);
      setProfileImage(singleData?.data?.profileImage);
      setCompanyName(singleData?.data?.title);
      setCompanyWebsite(singleData?.data?.urlLink);
      setSelectState({
        state: singleData?.data?.state,
        zipCode: singleData?.data?.zipCode,
      });
      setAboutCompany(singleData?.data?.content);
      setIsPublic(singleData?.data?.published ? "public" : "private");
      setFBLink(singleData?.data?.facebookLink);
      setInsLink(singleData?.data?.instagramLink);
      setTwtrLink(singleData?.data?.twitterLink);

      setOwnerName(singleData?.data?.ownerName);
      setOwnerDesignation(singleData?.data?.ownerDesignation);
      setContactNo(singleData?.data?.contactNo);
    } else {
      setCompanyName("");
      setCompanyWebsite("");
      setSelectState(null);
      setAboutCompany("");
      setIsPublic("public");
      setFBLink("");
      setInsLink("");
      setTwtrLink("");
    }
  }, [singleData]);
  console.log("hello world", selectState);
  if (singleDataLoading) {
    return <LoadingSpinner fullHight />;
  }
  return (
    <div className="relative min-h-screen ">
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
              id,
              ownerName,
              ownerDesignation,
              contactNo,
              profileImage
            )
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {singleData?.data?.ownerName && (
              <>
                <Input
                  labelName="Owner Name"
                  inputName="ownerName"
                  required
                  onChange={(e: any) => setOwnerName(e.target.value)}
                  defaultValue={singleData?.data?.ownerName}
                  className=""
                />
                <Input
                  labelName="Designation"
                  inputName="designation"
                  required
                  onChange={(e: any) => setOwnerDesignation(e.target.value)}
                  defaultValue={singleData?.data?.ownerDesignation}
                  className=""
                />
                <Input
                  labelName="Contact Number"
                  inputName="contactNo"
                  required
                  onChange={(e: any) => setContactNo(e.target.value)}
                  defaultValue={singleData?.data?.contactNo}
                  className=""
                />
              </>
            )}
            <Input
              labelName="Company Name"
              inputName="title"
              required
              defaultValue={singleData?.data?.title}
              onChange={(e: any) => setCompanyName(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Company Website Link"
              inputName="urlLink"
              defaultValue={singleData?.data?.urlLink}
              onChange={(e: any) => setCompanyWebsite(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Facebook Link"
              inputName="fbLink"
              defaultValue={singleData?.data?.facebookLink}
              onChange={(e: any) => setFBLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Twitter Link"
              inputName="twtrLink"
              defaultValue={singleData?.data?.twitterLink}
              onChange={(e: any) => setTwtrLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Instagram Link"
              inputName="instagramLink"
              defaultValue={singleData?.data?.instagramLink}
              onChange={(e: any) => setInsLink(e.target.value)}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />

            <SearchFilterInput
              required
              defaultValue={selectState?.zipCode}
              labelName="Zip Code"
              setData={setSelectState}
              data={selectState}
              isMulti={false}
            />

            <div className="md:col-span-2">
              <Input
                labelName="About Your Company"
                inputName="content"
                defaultValue={singleData?.data?.content}
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
            {singleData?.data?.profileImage ||
            singleData?.data?.profileImage === "" ? (
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
