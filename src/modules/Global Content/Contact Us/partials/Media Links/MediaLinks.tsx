import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://facebook.com"
        className="mx-2 text-secondary hover:text-gray-800"
      >
        <FaFacebook size={32} />
      </a>
      <a
        href="https://twitter.com"
        className="mx-2 text-secondary hover:text-gray-800"
      >
        <FaTwitter size={32} />
      </a>
      <a
        href="https://instagram.com"
        className="mx-2 text-secondary hover:text-gray-800"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
