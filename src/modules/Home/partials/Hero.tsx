"use client";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
//
import styles from "../style/hero.module.css";
import { home_data } from "../config/constants";
import { cx } from "@config/constants";
const Hero = () => {
  // destructure
  const { slides } = home_data;

  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
    });

    const handleSlideChange = () => {
      AOS.refreshHard();
    };

    setTimeout(() => {
      handleSlideChange();
    }, 3000);
  }, []);

  return (
    <>
      <div className="relative h-screen">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          {slides?.map((data, index) => (
            <SwiperSlide
              key={index}
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${data?.image}")` }}
            >
              <div className="absolute inset-0 bg-black/80 opacity-80 "></div>
              <div className="relative z-10 min-h-screen">
                <div className="flex items-center min-h-screen w-full">
                  <div
                    className={cx(
                      "w-1/2 mx-auto rounded-3xl",
                      styles.perspective
                    )}
                  >
                    <img
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      className="h-60 w-52 mx-auto rounded-md"
                      src={data?.logo}
                      alt="logo"
                    />
                  </div>
                  <div className="w-1/2">
                    <div
                      className="space-y-5 "
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      data-aos-delay="500"
                    >
                      <h1 className="text-5xl text-white font-semibold">
                        {data?.headline}
                      </h1>
                      <h1 className="text-2xl text-white font-semibold">
                        {data?.title}
                      </h1>
                    </div>
                    <button
                      data-aos-duration="800"
                      data-aos-easing="linear"
                      data-aos="zoom-in"
                      data-aos-delay="2500"
                      className="py-1 text-white px-3 bg-blue-light rounded-full mt-5 font-semibold border-2"
                    >
                      {data?.btnValue}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;

// h-80 w-52 mx-auto rounded-md

{
  /* <Button
                        href={hero.button.link}
                        className={`${styles.button_animate}  !rounded-lg bg-secondary lg:before:rounded-lg lg:before:outline-offset-2 lg:before:outline-2 lg:before:w-full lg:before:left-0 lg:before:top-0 lg:before:h-full`}
                      >
                        {hero.button.text}
                      </Button> */
}
