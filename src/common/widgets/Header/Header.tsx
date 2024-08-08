"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
//
import styles from "./css/Header.module.css";
import Mobile_navbar from "./partials/Mobile nav";
import { icons } from "@libs/Icons";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-[999999] ${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container px-2 h-16 lg:h-20 mx-auto flex items-center justify-between w-full py-4 ">
        <div className="px-4">
          {/* Logo  */}
          <Image
            src="/Tree Wise Men logo.png"
            height={50}
            width={50}
            alt="Logo"
            className=""
          />
        </div>
        <ul className="hidden lg:flex items-center  gap-11">
          <Mobile_navbar toggleMenu={toggleMenu} />
        </ul>

        <div className="lg:hidden flex items-center text-3xl px-4 text-black relative">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {!toggleMenu ? (
              <span>{icons.MenuOpen}</span>
            ) : (
              <span>{icons.MenuClose}</span>
            )}
          </button>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed top-0 z-40 w-full glass_effect overflow-hidden  lg:hidden gap-12  origin-top duration-1000 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="relative">
          <div>
            <div className="flex justify-end mx-11 my-11 text-3xl text-black">
              <button onClick={() => setToggleMenu(false)}>
                <span>{icons.MenuClose}</span>
              </button>
            </div>
            <div className="p-8 z-41">
              {/* Mobile nav  */}
              <ul className="flex flex-col gap-8 font-bold tracking-wider text-xl  ">
                <Mobile_navbar toggleMenu={toggleMenu} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
