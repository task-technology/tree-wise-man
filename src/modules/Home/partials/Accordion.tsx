import React from "react";
import { home_data } from "../config/constants";
import Image from "next/image";

const MyAccordion = () => {
  const { frequently_asked_questions } = home_data;
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 w-11/12 mx-auto py-10">
      <div className="w-full lg:w-2/4">
        <div className="relative w-full  h-0 pb-[75%]">
          <Image
            src="https://images.unsplash.com/photo-1514116799412-5876d319c242?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tree Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="space-y-4 w-full lg:w-2/3">
        {frequently_asked_questions.map((data) => (
          <div key={data.id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              {data.question}
            </div>
            <div className="collapse-content">
              <p>{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccordion;
