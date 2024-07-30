"use client";
import Input from "@components/Input";
import { states } from "./config/constant";
import { useState, useRef } from "react";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import PublicIcon from "@libs/custom icons/PublicIcon";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import PhotoUpload from "../Photo Upload/PhotoUpload";
import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";

const PostForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectState, setSelectState] = useState<any>(null);
  const [isPublic, setIsPublic] = useState<string>("public");

  // Refs for input fields
  const companyNameRef = useRef<HTMLInputElement>(null);
  const companyWebsiteRef = useRef<HTMLInputElement>(null);
  const zipCodeRef = useRef<HTMLInputElement>(null);
  const aboutCompanyRef = useRef<HTMLInputElement>(null);

  return (
    <div>
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
            file
          )
        }
      >
        <div className="grid grid-cols-3 gap-5">
          <Input
            labelName="Company Name"
            inputName="title"
            required
            ref={companyNameRef}
          />
          <Input
            labelName="Company Website Link"
            inputName="urlLink"
            required
            ref={companyWebsiteRef}
          />
          <Input
            labelName="Zip Code"
            inputName="zipCode"
            required
            ref={zipCodeRef}
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
          <div className="col-span-2">
            <Input
              labelName="About Your Company"
              inputName="content"
              ref={aboutCompanyRef}
            />
          </div>
          <div className="flex flex-col justify-center space-y-5 mt-7 border border-slateLightThird p-2">
            <div className="flex items-center gap-3">
              <div>
                <Input
                  className="w-7 h-4 !p-0"
                  inputType="radio"
                  inputName="visibility"
                  value="public"
                  checked={isPublic === "public"}
                  onChange={() => setIsPublic("public")}
                />
              </div>
              <div>
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
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Input
                  className="w-7 h-4 !p-0"
                  inputType="radio"
                  inputName="visibility"
                  value="private"
                  checked={isPublic === "private"}
                  onChange={() => setIsPublic("private")}
                />
              </div>
              <div>
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
          </div>
          <div className="col-span-2 mt-7">
            <PhotoUpload file={file} setFile={setFile} />
          </div>
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

export default PostForm;
