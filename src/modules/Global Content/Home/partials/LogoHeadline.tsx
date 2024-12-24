import Image from "next/image";
import Marquee from "react-fast-marquee";
import { fetchData } from "../Helpers/getHeadlineData";
import Link from "next/link";

const LogoHeadline = async () => {
  const data = await fetchData();

  return (
    <section className="px-5 md:px-0 py-12 md:py-16">
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
          {data?.data?.map((post: any, index: string) => (
            <Link
              href={`/services?searchTerm=${post?.post?.title}`}
              key={index}
              className="flex items-center gap-3 px-2 md:px-5"
            >
              <div className="pr-2 md:pr-3 md:w-[70px] w-[50px] h-[50px] relative md:h-[70px]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 180px"
                  priority
                  style={{ objectFit: "contain" }}
                  className="rounded-full bg-white border border-grayForBorder"
                  src={
                    post?.post.image ||
                    "https://res.cloudinary.com/dvpnbsehd/image/upload/v1727698743/demo_logo_qdotoc.jpg"
                  }
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-base md:text-xl font-bold">
                  {post?.post?.title}
                </h1>
                <p className="text-xs md:text-gray-600">{`${post?.post?.state} (${post?.post?.zipCode})`}</p>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LogoHeadline;
