//
import Hero from "./partials/Hero";
import LogoHeadline from "./partials/LogoHeadline";
import Search from "./partials/Search";

const Home = () => {
  return (
    <div id="home" className="mt-20">
      <Hero />
      <LogoHeadline />
      <Search />
    </div>
  );
};

export default Home;
