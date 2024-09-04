import ContactForm from "./partials/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div
      className="relative mt-20 min-h-screen bg-cover bg-center "
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvpnbsehd/image/upload/v1725425735/tree_n6tevw.png")',
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
