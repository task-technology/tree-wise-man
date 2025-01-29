"use client";
import Input from "@components/Input";
import { useState } from "react";

import Button from "@components/Button";
import { handleFormSubmit } from "./helpers/handleFormSubmit";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import { useRouter } from "next/navigation";
import { getFromCookie } from "../../../../../../../shared/helpers/local_storage";
import { useCreatePostMutation } from "../../../../../../../redux/features/api/posts";
import { useCreateHeroAdsMutation } from "../../../../../../../redux/features/api/ads";

const PostForm = () => {
  const router = useRouter();
  const [bgImage, setBgImage] = useState<File | null>(null);
  const [sideImage, setSideImage] = useState<File | null>(null);
  const token = getFromCookie("accessToken");
  const [createAds, { isLoading: heroLoading }] = useCreateHeroAdsMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");

  return (
    <div className="relative min-h-screen ">
      <div className=" px-8 max-w-4xl mx-auto   rounded-lg">
        <form
          onSubmit={(e) =>
            handleFormSubmit({
              e,
              title,
              description,
              bgImage,
              createAds,
              sideImage,
              token,
              setLoading,
              router,
              link,
            })
          }
        >
          <div className="gap-6 mb-8">
            <Input
              labelName="Website Link"
              inputName="link"
              onChange={(e: any) => setLink(e.target.value)}
              className=""
            />
            <Input
              labelName="Title"
              inputName="title"
              required
              onChange={(e: any) => setTitle(e.target.value)}
              className=""
            />

            <div className="md:col-span-2 pb-2">
              <Input
                required
                // maxLength={150}
                labelName="Description"
                inputName="description"
                onChange={(e: any) => setDescription(e.target.value)}
                className="pt-2 pb-5 "
              />
            </div>

            <>
              <PhotoUpload
                label="Banner Image (Min size: 1920x1080.)"
                setFile={setBgImage}
                file={bgImage}
              />
              <PhotoUpload
                label="Side Logo"
                setFile={setSideImage}
                file={sideImage}
              />
            </>
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
