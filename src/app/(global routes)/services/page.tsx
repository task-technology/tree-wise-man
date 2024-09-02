
import dynamic from 'next/dynamic';
const Services = dynamic(() => import("@modules/Global Content/Services"), {
  ssr: false,
});

const SearchByZip = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default SearchByZip;
