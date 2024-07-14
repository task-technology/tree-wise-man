import React from "react";
import { home_data } from "../config/constants";

const Testimonial = () => {
  const { testimonials } = home_data;
  return (
    <div className="my-20">
      <div className="flex justify-center items-center">
        <h2 className=" text-center uppercase text-3xl font-bold py-2 border-b-2 border-primary w-60">
          Testimonials
        </h2>
      </div>
      <div className="grid grid-cols-3 max-w-5xl mx-auto gap-5">
        {testimonials &&
          testimonials.map((data) => {
            return (
              <div key={data.id} className="max-w-[300px] mt-20">
                <div className=" bg-slate-50 p-2 rounded-md relative pt-16 pb-4 min-h-[250px]">
                  <img
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-24 w-24 rounded-full p-2 bg-white  absolute top-[-3rem] inset-x-1/3"
                    alt={data.name}
                  />

                  <p>{data.description}</p>
                  <div className="text-end">
                    <h3 className="text-primary font-semibold mr-2">
                      {data.name}
                    </h3>
                    <p className="text-sm">{data.designation}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Testimonial;
