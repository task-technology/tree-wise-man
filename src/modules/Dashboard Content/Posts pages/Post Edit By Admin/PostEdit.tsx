import SectionTitle from "@components/Section Title/SectionTitle";
import PostForm from "./partials/Post Form/PostForm";

const PostEditByAdmin = () => {
  return (
    <div>
      <section className="relative py-10 z-10">
        <SectionTitle title="Service Edit" />
      </section>

      <div>
        <PostForm />
      </div>
    </div>
  );
};

export default PostEditByAdmin;
