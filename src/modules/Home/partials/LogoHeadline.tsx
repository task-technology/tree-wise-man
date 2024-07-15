import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoHeadline = () => {
  const data = [
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "/logo.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
  ];

  return (
    <div className="py-16">
      <div>
        <div className="text-center pb-16 space-y-5">
          <h1 className="text-4xl font-bold  ">
            Most Popular{" "}
            <span className="ml-1.5 bg-red-700 px-4 py-1.5 uppercase rounded-tl-2xl rounded-br-2xl text-white">
              Companies
            </span>
          </h1>
          <p>
            We confidently recommend these popular companies that have
            successfully completed numerous operations.
          </p>
        </div>

        <Marquee className="px-5">
          {data?.map((company, index) => (
            <div key={index} className="flex items-center px-5">
              <div className="pr-3">
                <Image
                  width={60}
                  height={60}
                  className=" object-contain"
                  src={company.logo}
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{company?.title}</h1>
                <p className="text-gray-600">{company?.details}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoHeadline;
