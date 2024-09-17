import React from "react";
import { how_we_work } from "../config/constants";
import Image from "next/image";

const HowWeWork = () => {
  const data = how_we_work;
  return (
    <section className="max-w-6xl mx-auto p-4 my-8 md:my-20 space-y-12 md:space-y-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 px-2">
        <h2 className="text-base md:text-xl font-light">{data.title}</h2>
        <p className="text-xs md:text-sm">{data.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.steps &&
          data.steps.map((step) =>
            step?.id === 8 ? (
              <div key={step?.id}>
                <Image
                  className={"hidden md:block h-60 w-48 mx-auto  rounded-md"}
                  src={step?.logo || ""}
                  alt="logo"
                  width={208} // 52 * 4
                  height={240} // 60 * 4
                />
              </div>
            ) : (
              <div key={step?.id}>
                <div className="p-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl sm:text-4xl p-2">
                      {step.icon}
                    </span>
                    <div>
                      <h5 className="text-base sm:text-lg font-semibold">
                        {step.title}
                      </h5>
                      <article className="text-sm sm:text-base">
                        {step.description}
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default HowWeWork;
