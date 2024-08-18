import Container from "@components/Container/Container";
import SectionTitle from "@components/Section Title/SectionTitle";
import AdminCreateForm from "./partials/Admin Create Form/AdminCreateForm";

const CreateAdmin = () => {
  return (
    <Container
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <section className="relative py-10 z-10">
        <SectionTitle className="text-solidWhite" title="Admin Create Form" />
      </section>

      <div className="relative rounded-lg max-w-5xl mx-auto w-full  bg-opacity-90 z-10">
        <AdminCreateForm />
      </div>
    </Container>
  );
};

export default CreateAdmin;
