"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Image from "next/image";
const Hero = () => {
  // destructure
  const { slides } = home_data;

  const swiperRef = useRef<any>(null);
  const [animationKey, setAnimationKey] = useState(0);

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
      setAnimationKey((prev) => prev + 1); // Reset animation key
    };

    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, []);

  return (
    <>
      <header className="relative h-screen">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          {slides?.map((data) => (
            <SwiperSlide
              key={data.id}
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${data?.image}")` }}
            >
              <div className="absolute inset-0 bg-solidBlack/40 opacity-100 "></div>
              <main className="relative z-10 min-h-screen">
                <div className="flex items-center min-h-screen w-full relative overflow-hidden">
                  {data.id % 2 === 0 ? (
                    <>
                      <div
                        className={cx(
                          "absolute bottom-[-41rem] right-[-40rem]",
                          styles.animationEven
                        )}
                        key={animationKey}
                      ></div>
                      <div className="w-1/2 flex justify-end">
                        <section>
                          <div
                            key={`${animationKey}-${data.id}`}
                            className={cx("space-y-5", styles.uptoDown)}
                          >
                            <h1 className="text-5xl text-solidWhite font-semibold">
                              {data?.headline}
                            </h1>
                            <h3 className="text-2xl text-solidWhite font-semibold">
                              {data?.title}
                            </h3>
                          </div>
                          <button
                            key={animationKey}
                            className={cx(
                              "py-1 text-solidWhite px-3  rounded-full mt-5 font-semibold border-2",
                              styles.zoomIn
                            )}
                          >
                            {data?.btnValue}
                          </button>
                        </section>
                      </div>
                      <div
                        className={cx(
                          "w-1/2 mx-auto rounded-3xl",
                          styles.perspectiveEven
                        )}
                      >
                        <Image
                          key={animationKey}
                          className={cx(
                            "h-60 w-52 mx-auto rounded-md",
                            styles.uptoDown
                          )}
                          src={data?.logo}
                          alt="logo"
                          width={208} // 52 * 4
                          height={240} // 60 * 4
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={cx(
                          "w-[60rem] h-[60rem] rounded-full absolute left-[-20rem] bottom-[-20rem]",
                          styles.animationOdd
                        )}
                        key={animationKey}
                      ></div>
                      <div
                        className={cx(
                          "w-1/2 mx-auto rounded-3xl",
                          styles.perspective
                        )}
                      >
                        <Image
                          key={animationKey}
                          className={cx(
                            "h-60 w-52 mx-auto rounded-md",
                            styles.uptoDown
                          )}
                          src={data?.logo}
                          alt="logo"
                          width={208} // 52 * 4 (tailwind unit conversion)
                          height={240} // 60 * 4 (tailwind unit conversion)
                        />
                      </div>
                      <section className="w-1/2 ">
                        <div
                          key={`${animationKey}-${data.id}`}
                          className={cx("space-y-5", styles.uptoDown)}
                        >
                          <h1 className="text-5xl text-solidWhite font-semibold">
                            {data?.headline}
                          </h1>
                          <h3 className="text-2xl text-solidWhite font-semibold">
                            {data?.title}
                          </h3>
                        </div>
                        <button
                          key={animationKey}
                          className={cx(
                            "py-1 text-solidWhite px-3 bg-blue-light rounded-full mt-5 font-semibold border-2",
                            styles.zoomIn
                          )}
                        >
                          {data?.btnValue}
                        </button>
                      </section>
                    </>
                  )}
                </div>
              </main>
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </>
  );
};

export default Hero;
