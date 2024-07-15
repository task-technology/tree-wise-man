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
    <section className="px-28 py-10">
      <div className="flex justify-between gap-10">
        <div className="w-1/2 " data-aos="fade-right" data-aos-duration="1000">
          <span className="text-orange font-semibold">Lorem ipsum dolor !</span>
          <h2 className="text-5xl font-bold">
            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit
            non mi commodo tincidunt. non mi commodo tincidunt.
          </h2>
        </div>
        <div className="w-2/4" data-aos="fade-left" data-aos-duration="1000">
          <div className="relative   h-0 pb-[45%]">
            <Image
              src="https://images.unsplash.com/photo-1629111981417-8c21a3e4e558?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tree Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10 mt-20">
        <div
          className="w-1/2"
          data-aos="fade-up-right"
          data-aos-duration="1200"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat cum
          officia velit nobis, consectetur quasi atque commodi aliquid hic quia
          earum error blanditiis iste doloremque obcaecati quo! Accusamus
          necessitatibus accusantium quos, ducimus est laboriosam minus natus
          magnam, temporibus deserunt laborum et distinctio quisquam quaerat
          aspernatur nulla repellendus esse. Ipsam, magnam!
        </div>
        <div className="w-1/2">
          <div
            className="grid grid-cols-2 gap-5 "
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-4 bg-slate-100 p-4 rounded-lg"
              >
                <span className="text-2xl font-extrabold">{item.count}</span>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
