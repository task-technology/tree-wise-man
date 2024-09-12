import SectionTitle from "@components/Section Title/SectionTitle";
import { aboutCompanyData } from "../config/constants";

const AboutCompany = () => {
  return (
    <div className="text-center py-5 md:pt-20 px-8 md:px-20">
      <h2 className="text-center uppercase text-xl md:text-3xl font-bold py-2">
        {aboutCompanyData?.title}
      </h2>
      <p className="pt-5">{aboutCompanyData?.about}</p>
    </div>
  );
};

export default AboutCompany;
