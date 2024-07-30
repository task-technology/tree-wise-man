import SectionTitle from "@components/Section Title/SectionTitle";
import UserCreateForm from "./partials/User Create Form/UserCreateForm";

const CreateUser = () => {
  return (
    <div>
      <section className="py-10">
        <SectionTitle title="User Create Form" />
      </section>
      <div>
        <UserCreateForm />
      </div>
    </div>
  );
};

export default CreateUser;
