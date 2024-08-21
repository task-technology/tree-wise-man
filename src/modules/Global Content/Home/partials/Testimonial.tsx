"use client";
import React from "react";
import { home_data } from "../config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "@components/Section Title/SectionTitle";
import Image from "next/image";

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
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktops
          }}
        >
          {testimonials &&
            testimonials.map((data) => (
              <SwiperSlide key={data.id} className="px-5">
                <div className="max-w-xs md:max-w-sm mx-auto text-xs md:text-base flex flex-col items-center min-h-[350px] p-4 bg-slateLight rounded-md shadow-lg">
                  <div className="relative h-24 w-24 bg-solidWhite rounded-full overflow-hidden mb-4">
                    <Image
                      src={data.image}
                      alt={data.name}
                      fill
                      sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           24vw"
                      className="absolute inset-0 object-cover"
                    />
                  </div>

                  <article className="text-center mb-2">
                    {data.description}
                  </article>
                  <div className="text-center">
                    <h5 className="text-primary font-semibold">{data.name}</h5>
                    <p className="text-sm text-gray">{data.designation}</p>
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
