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
import slideBg1 from "@public/slide bg 1.jpg";

const Hero = () => {
  // destructure
  const { slides } = home_data;

  const swiperRef = useRef<any>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    // Check if it's a mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Setting a breakpoint for mobile
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      <header className="relative h-60 md:h-screen ">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // Remove navigation for mobile
          navigation={!isMobile}
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
                <div className="flex items-center  md:min-h-screen w-full relative overflow-hidden px-2 md:px-0">
                  {data.id % 2 === 0 ? (
                    <>
                      {/* <div
                        className={cx(
                          "absolute bottom-[-41rem] right-[-40rem] ",
                          styles.animationEven
                        )}
                        key={animationKey}
                      ></div> */}
                      <section className="w-3/5  h-60 md:h-screen flex items-center justify-center">
                        <div className="z-50 pl-0 md:pl-20">
                          <div
                            key={`${animationKey}-${data.id}`}
                            className={cx(
                              "space-y-1 md:space-y-5",
                              styles.uptoDown
                            )}
                          >
                            <h1 className="text-[10px] md:text-3xl text-solidWhite font-semibold">
                              {data?.headline}
                            </h1>
                            <h3 className="text-[6px] md:text-lg text-solidWhite font-semibold">
                              {data?.title}
                            </h3>
                          </div>
                        </div>
                      </section>
                      <div
                        className={cx(
                          "w-2/5 mx-auto rounded-3xl",
                          styles.perspectiveEven
                        )}
                      >
                        <Image
                          key={animationKey}
                          className={cx(
                            "h-32 w-28  md:h-72 md:w-60 mx-auto rounded-md",
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
                      {/* <div
                        className={cx(
                          "w-[60rem] h-[60rem] rounded-full absolute left-[-20rem] bottom-[-20rem] ",
                          styles.animationOdd
                        )}
                        key={animationKey}
                      ></div> */}
                      <div
                        className={cx(
                          "w-2/5 mx-auto rounded-3xl",
                          styles.perspective
                        )}
                      >
                        <Image
                          key={animationKey}
                          className={cx(
                            "h-32 w-28  md:h-72 md:w-60 mx-auto rounded-md",
                            styles.uptoDown
                          )}
                          src={data?.logo}
                          alt="logo"
                          width={208} // 52 * 4 (tailwind unit conversion)
                          height={240} // 60 * 4 (tailwind unit conversion)
                        />
                      </div>
                      <section className="w-3/5  h-60 md:h-screen flex items-center">
                        <div className="z-50 pr-0 md:pr-20">
                          <div
                            key={`${animationKey}-${data.id}`}
                            className={cx(
                              "space-y-1 md:space-y-5",
                              styles.uptoDown
                            )}
                          >
                            <h1 className="text-[10px] md:text-3xl text-solidWhite font-semibold">
                              {data?.headline}
                            </h1>
                            <h3 className="text-[6px] md:text-lg text-solidWhite font-semibold">
                              {data?.title}
                            </h3>
                          </div>
                        </div>
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
