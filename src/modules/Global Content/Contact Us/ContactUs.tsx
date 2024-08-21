import ContactForm from "./partials/ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div
      className="relative mt-20 min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227682/immo-wegmann-edLp78lkLEU-unsplash_p52jps.jpg")',
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
