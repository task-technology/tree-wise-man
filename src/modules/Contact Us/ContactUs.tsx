import ContactForm from "./partials/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div
      className="relative mt-20 min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1680701514995-46b1749b30ea?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <main className="relative container mx-auto px-4 py-8">
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactUs;
