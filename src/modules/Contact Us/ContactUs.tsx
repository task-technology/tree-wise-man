import ContactForm from "./partials/ContactForm/ContactForm";
import SocialMediaLinks from "./partials/Media Links/MediaLinks";

const ContactUs = () => {
  return (
    <div className=" mt-20">
      <main className="container mx-auto px-4 py-8">
        <ContactForm />
        <SocialMediaLinks />
      </main>
    </div>
  );
};

export default ContactUs;
