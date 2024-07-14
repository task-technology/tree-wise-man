//

import MyAccordion from "./partials/Accordion";
import Hero from "./partials/Hero";
import Search from "./partials/Search";
import Testimonial from "./partials/Testimonial";

const Home = () => {
  return (
    <div id="home" className="mt-20">
      <Hero />
      <Search />
      <MyAccordion/>
      <Testimonial/>
    </div>
  );
};

export default Home;
