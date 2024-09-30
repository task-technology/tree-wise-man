"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
//
import styles from "./css/Header.module.css";
import Mobile_navbar from "./partials/Mobile nav";
import { icons } from "@libs/Icons";
import UserProfile from "./partials/user profile/UserProfile";
import { isLoggedIn, isUserAdmin } from "../../../shared/auth/auth.service";
import UserProfileAdmin from "./partials/user profile admin/UserProfileAdmin";
import Link from "next/link";
import logo from "../../../images/The_Tree_Wise_Logo.png";
import Button from "@components/Button";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isAdminLog: any = isUserAdmin();
    setIsAdmin(isAdminLog);
    const isLog: any = isLoggedIn();
    setIsLogged(isLog);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`shadow-lg w-full z-[999999] ${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <div className="container px-2 h-16 lg:h-20 mx-auto flex items-center justify-between w-full py-2 ">
        <div className="px-4">
          {/* Logo  */}
          <abbr title="Tree Wise Men USA Home">
            <Link href="/">
              <Image
                className="h-auto w-14 md:w-16 "
                src={logo}
                height={70}
                width={70}
                alt="Logo"
                priority
              />
            </Link>
          </abbr>
        </div>
        <ul className="hidden lg:flex items-center  gap-11">
          <Mobile_navbar toggleMenu={toggleMenu} />
          {isLogged ? (
            isAdmin ? (
              <UserProfileAdmin />
            ) : (
              <UserProfile />
            )
          ) : (
            <Link href="/login">
              <Button secondary className="!text-solidBlack !rounded-full">
                List Your Tree Service
              </Button>
            </Link>
          )}
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
            <div className="flex justify-between mx-11 mt-5 mb-24 text-3xl text-black">
              {isLogged ? (
                isAdmin ? (
                  <UserProfileAdmin />
                ) : (
                  <UserProfile />
                )
              ) : (
                <Link href="/login">
                  <Button secondary className="!text-solidBlack !rounded-full">
                    List Your Tree Service
                  </Button>
                </Link>
              )}
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
