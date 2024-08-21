"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutSection: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
    { count: "542", details: "lorem ipsum dolor sit amet" },
    { count: "+42", details: "lorem ipsum dolor sit amet" },
    { count: "542K", details: "lorem ipsum dolor sit amet" },
    { count: "532", details: "lorem ipsum dolor sit amet" },
  ];
  return (
    <main className="px-4 py-6 md:px-10 md:py-8 lg:px-28 lg:py-10 overflow-hidden">
      <section className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="text-orange-500 font-semibold text-lg md:text-xl">
            Lorem ipsum dolor !
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit
            non mi commodo tincidunt. non mi commodo tincidunt.
          </h1>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="relative h-0 pb-[45%]">
            <Image
              src="https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227680/dan-edwards-SId-lmFXSDU-unsplash_aqa6r8.jpg"
              alt="Tree Photo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw" // Adjust sizes as needed
              style={{ objectFit: "cover" }} // Use style instead of objectFit prop
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mt-10 lg:mt-20">
        <article
          className="w-full lg:w-1/2 text-base md:text-lg lg:text-xl"
          data-aos="fade-up-right"
          data-aos-duration="1200"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat cum
          officia velit nobis, consectetur quasi atque commodi aliquid hic quia
          earum error blanditiis iste doloremque obcaecati quo! Accusamus
          necessitatibus accusantium quos, ducimus est laboriosam minus natus
          magnam, temporibus deserunt laborum et distinctio quisquam quaerat
          aspernatur nulla repellendus esse. Ipsam, magnam!
        </article>
        <div className="w-full lg:w-1/2">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 bg-slate-100 p-4 rounded-lg"
              >
                <span className="text-xl md:text-2xl font-extrabold">
                  {item.count}
                </span>
                <p className="text-sm md:text-base">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
