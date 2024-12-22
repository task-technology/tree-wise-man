"use client";
import Input from "@components/Input";
import { useState } from "react";

import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import { useRouter } from "next/navigation";
import { getFromCookie } from "../../../../../../../shared/helpers/local_storage";
import { useCreatePostMutation } from "../../../../../../../redux/features/api/posts";
import {
  useCreateHeadlineAdsMutation,
  useCreateHeroAdsMutation,
} from "../../../../../../../redux/features/api/ads";

const PostForm = () => {
  const router = useRouter();
  const [logo, setLogo] = useState<File | null>(null);

  const token = getFromCookie("accessToken");
  const [createAds, { isLoading: heroLoading }] =
    useCreateHeadlineAdsMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="relative min-h-screen ">
      <div className=" px-8 max-w-4xl mx-auto   rounded-lg">
        <form
          onSubmit={(e) =>
            handleFormSubmit({
              e,
              title,
              description,
              logo,
              createAds,
              token,
              setLoading,
              router,
            })
          }
        >
          <div className="gap-6 mb-8">
            <Input
              labelName="Company Name"
              inputName="title"
              required
              onChange={(e: any) => setTitle(e.target.value)}
              className=""
            />

            <div className="md:col-span-2">
              <Input
                labelName="About"
                inputName="content"
                onChange={(e: any) => setDescription(e.target.value)}
              />
            </div>

            <PhotoUpload label="Logo" setFile={setLogo} file={logo} />
          </div>
          <div className="text-center w-1/3 mx-auto">
            <Button
              loading={loading || heroLoading}
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
