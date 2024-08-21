//

import { isLoggedIn } from "../../../shared/auth/auth.service";
import MyAccordion from "./partials/Accordion";
import Hero from "./partials/Hero";
import HowWeWork from "./partials/HowWeWork";
import LogoHeadline from "./partials/LogoHeadline";
import Search from "./partials/Search";
import Testimonial from "./partials/Testimonial";

const Home = () => {
  return (
    <div id="home" className="mt-20">
      <Hero />
      <LogoHeadline />
      <Search />
      <HowWeWork />
      <MyAccordion />
      <Testimonial />
    </div>
  );
};

export default Home;
