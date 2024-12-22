import SectionTitle from "@components/Section Title/SectionTitle";
import PostForm from "./partials/Post Form/PostForm";

const AddNewHero = () => {
  return (
    <div>
      <section className="relative py-10 z-10">
        <SectionTitle title="Add New Hero's Ads" />
      </section>

      <div>
        <PostForm />
      </div>
    </div>
  );
};

export default AddNewHero;
