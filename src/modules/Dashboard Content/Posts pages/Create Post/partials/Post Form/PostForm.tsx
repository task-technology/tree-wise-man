"use client";
import Input from "@components/Input";
import { states } from "./config/constant";
import { useState, useRef } from "react";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import PublicIcon from "@libs/custom icons/PublicIcon";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";
import { RootState } from "../../../../../../redux/store";
import { useSelector } from "react-redux";
import { useCreatePostMutation } from "../../../../../../redux/features/api/posts";
import { getFromLocalStorage } from "../../../../../../shared/helpers/local_storage";

const PostForm = () => {
  const token = getFromLocalStorage("accessToken");
  const [createService, { isLoading: serviceLoading }] =
    useCreatePostMutation();
  const [selectState, setSelectState] = useState<any>(null);
  const [isPublic, setIsPublic] = useState<string>("public");
  const { photoURL } = useSelector((state: RootState) => state.photoUpload);

  // Refs for input fields
  const companyNameRef = useRef<HTMLInputElement>(null);
  const companyWebsiteRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const aboutCompanyRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative min-h-screen ">
      <div className=" px-8 max-w-4xl mx-auto   rounded-lg">
        <form
          onSubmit={(e) =>
            handleFormSubmit(
              e,
              companyNameRef,
              companyWebsiteRef,
              zipCodeRef,
              selectState,
              aboutCompanyRef,
              isPublic,
              photoURL,
              createService,
              token
            )
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Input
              labelName="Company Name"
              inputName="title"
              required
              ref={companyNameRef}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Company Website Link"
              inputName="urlLink"
              required
              ref={companyWebsiteRef}
              className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            <Input
              labelName="Zip Code"
              inputName="zipCode"
              required
              ref={zipCodeRef}
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
                labelName="About Your Company"
                inputName="content"
                ref={aboutCompanyRef}
                className="bg-gray-50 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="md:col-span-2 flex justify-around mt-7">
              <div className="flex items-center gap-3">
                <Input
                  className="w-8 h-5 !p-0"
                  inputType="radio"
                  inputName="visibility"
                  value="public"
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
                  value="private"
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
              <PhotoUpload />
            </div>
          </div>
          <div className="text-center w-1/3 mx-auto">
            <Button
              loading={serviceLoading}
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
