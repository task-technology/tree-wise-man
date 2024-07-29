"use client";
import React from "react";
import { home_data } from "../config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "@components/Section Title/SectionTitle";

const Testimonial = () => {
  const { testimonials } = home_data;
  return (
    <section className="my-20">
      <SectionTitle title="Testimonials" />

      <div className="max-w-7xl mx-auto mt-20 relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
        >
          {testimonials &&
            testimonials.map((data) => (
              <SwiperSlide key={data.id} className="px-5">
                <div className=" md:max-w-[500px]  mx-auto flex justify-center items-center min-h-[350px]">
                  <div className="bg-slateLight p-4 rounded-md relative pt-20 pb-8  shadow-lg">
                    <img
                      src={data.image}
                      className="h-24 w-24 rounded-full p-2 bg-solidWhite absolute top-[-3rem] left-1/2 transform -translate-x-1/2"
                      alt={data.name}
                    />
                    <article className="text-center mt-4 mb-2">
                      {data.description}
                    </article>
                    <div className="text-center mt-2">
                      <h5 className="text-primary font-semibold">
                        {data.name}
                      </h5>
                      <p className="text-sm text-gray">{data.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
