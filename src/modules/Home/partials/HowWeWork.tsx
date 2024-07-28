import React from "react";
import { how_we_work } from "../config/constants";

const HowWeWork = () => {
  const data = how_we_work;
  return (
    <section className=" max-w-6xl mx-auto p-2 my-20 space-y-16">
      <div className="w-full grid grid-cols-2 gap-5 px-2">
        <h2 className="text-4xl font-light">{data.title}</h2>
        <p className="text-lg">{data.description}</p>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {data.steps &&
          data.steps.map((step) => {
            return (
              <div key={step.id} className="p-4">
                <div className="flex items-center">
                  <span className="text-4xl p-4">{step.icon}</span>
                  <div className="ml-3">
                    <h5 className="text-lg font-semibold">{step.title}</h5>
                    <article>{step.description}</article>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HowWeWork;
