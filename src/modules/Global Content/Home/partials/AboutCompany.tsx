import SectionTitle from "@components/Section Title/SectionTitle";
import { aboutCompanyData } from "../config/constants";

const AboutCompany = () => {
  return (
    <div className="text-center py-5 md:pt-20 px-8 md:px-20">
      <SectionTitle title={aboutCompanyData?.title} />
      <p className="pt-5">{aboutCompanyData?.about}</p>
    </div>
  );
};

export default AboutCompany;
