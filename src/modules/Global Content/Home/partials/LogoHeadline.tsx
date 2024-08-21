import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoHeadline = () => {
  const data = [
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
    {
      logo: "https://res.cloudinary.com/dvpnbsehd/image/upload/v1724224184/vokvxqgzmfoxeng6xsf9.png", // Replace with the actual path to your logo image
      title: "The Tree Wise Men",
      details: "Hello, world!",
    },
  ];

  return (
    <section className="py-8 md:py-16">
      <div>
        {/* Header Section */}
        <div className="text-center pb-8 md:pb-16 space-y-4 md:space-y-5">
          <h1 className="text-2xl md:text-4xl font-bold">
            Most Popular
            <span className="ml-1.5 bg-solidRed px-2 md:px-4 py-1 uppercase rounded-tl-lg md:rounded-tl-2xl rounded-br-lg md:rounded-br-2xl text-solidWhite">
              Companies
            </span>
          </h1>
          <p className="text-sm md:text-base">
            We confidently recommend these popular companies that have
            successfully completed numerous operations.
          </p>
        </div>

        {/* Marquee Section */}
        <Marquee className="px-2 md:px-5">
          {data?.map((company, index) => (
            <div key={index} className="flex items-center px-2 md:px-5">
              <div className="pr-2 md:pr-3">
                <Image
                  width={40}
                  height={40}
                  className="object-contain"
                  src={company.logo}
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl font-bold">
                  {company?.title}
                </h1>
                <p className="text-xs md:text-gray-600">{company?.details}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoHeadline;
