"use client";
import Input from "@components/Input";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import { states } from "./config/constant";
import { useState } from "react";
import TextArea from "@components/TextArea/TextArea";
import PrivateIcon from "@libs/custom icons/PrivateIcon";
import PublicIcon from "@libs/custom icons/PublicIcon";

const PostForm = () => {
  const [selectState, setSelectState] = useState();

  return (
    <div>
      <form>
        <div className="grid grid-cols-3 gap-5">
          <Input labelName="Company Name" inputName="title" required />
          <Input
            labelName="Company Website Link"
            inputName="urlLink"
            required
          />
          <Input labelName="Zip Code" inputName="zipCode" required />
          <SearchFilterInput
            required
            options={states}
            labelName="Partner Name"
            filterName="partner_id"
            setData={setSelectState}
            data={selectState}
            isMulti={false}
          />
          <div className="col-span-2">
            <TextArea label="About Your Company" name="content" />
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div>
                <Input
                  className="w-6 h-5 !p-0"
                  inputType="radio"
                  inputName="public"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <PublicIcon />

                  <div>
                    <h4>Public</h4>
                    <p>Anyone can see your company details</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Input
                  className="w-6 h-5 !p-0"
                  inputType="radio"
                  inputName="public"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <PrivateIcon />
                  <div>
                    <h4>Private</h4>
                    <p>Anyone can not see your company details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
