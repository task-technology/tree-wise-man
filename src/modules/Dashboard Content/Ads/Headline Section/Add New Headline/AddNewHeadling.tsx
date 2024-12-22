import SectionTitle from "@components/Section Title/SectionTitle";
import PostForm from "./partials/Post Form/PostForm";

const AddNewHeadline = () => {
  return (
    <div>
      <section className="relative py-10 z-10">
        <SectionTitle title="Add New Headline Ads" />
      </section>

      <div>
        <PostForm />
      </div>
    </div>
  );
};

export default AddNewHeadline;
