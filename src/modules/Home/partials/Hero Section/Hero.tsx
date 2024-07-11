import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
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

  const slides = [
    {
      id: 1,
      logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Welcome to Our Website",
      title: "Discover Amazing Products",
      btnValue: "Shop Now",
      btnLink: "/shop",
      image:
        "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      logo: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Explore Our Collection",
      title: "Find What You Love",
      btnValue: "Explore",
      btnLink: "/explore",
      image:
        "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      logo: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      headline: "Contact Us Today",
      title: "We Are Here to Help",
      btnValue: "Contact Us",
      btnLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
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
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 min-h-screen">
              <div className="flex items-center min-h-screen w-full">
                <div className="w-1/2 mx-auto perspective">
                  <img
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="h-80 w-52 mx-auto rounded-md"
                    src={data?.logo}
                    alt="logo"
                  />
                </div>
                <div className="w-1/2">
                  <div
                    className="space-y-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                  >
                    <h1 className="text-5xl text-solid-white">
                      {data?.headline}
                    </h1>
                    <h1 className="text-2xl text-solid-white">{data?.title}</h1>
                  </div>
                  <button
                    data-aos-duration="800"
                    data-aos-easing="linear"
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    className="py-1 text-solid-white px-3 bg-blue-light rounded-full mt-5"
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
  );
};

export default Hero;
