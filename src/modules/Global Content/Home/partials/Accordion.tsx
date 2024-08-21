import React from "react";
import { home_data } from "../config/constants";
import Image from "next/image";

const MyAccordion = () => {
  const { frequently_asked_questions } = home_data;
  return (
    <section className="my-8 md:my-20">
      <div className="flex justify-center items-center pb-6 md:pb-10">
        <h1 className="text-center uppercase text-2xl md:text-3xl font-bold py-2 border-b-2 border-primary w-auto md:w-32">
          FAQ
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-11/12 mx-auto py-8 md:py-10">
        <div className="w-full md:w-2/5">
          <div className="relative w-full h-0 pb-[75%]">
            <Image
              src="https://res.cloudinary.com/dvpnbsehd/image/upload/v1724228194/ahmed-sheraz-r8C_a4Thpi4-unsplash_gbiadm.jpg"
              alt="Tree Photo"
              fill
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-3/5 space-y-4">
          {frequently_asked_questions.map((data) => (
            <div key={data.id} className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <b className="collapse-title text-base md:text-lg">
                {data.question}
              </b>
              <div className="collapse-content">
                <p className="text-sm md:text-base">{data.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAccordion;
