"use client";
import SectionTitle from "@components/Section Title/SectionTitle";
import PostForm from "./partials/Post Form/PostForm";
import { getUserInfo } from "../../../../shared/auth/auth.service";

const CreatePost = () => {
  console.log("Hello", getUserInfo());
  return (
    <div>
      <section className="relative py-10 z-10">
        <SectionTitle title="Service Form" />
      </section>

      <div>
        <PostForm />
      </div>
    </div>
  );
};

export default CreatePost;
