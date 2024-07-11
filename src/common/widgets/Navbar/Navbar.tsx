import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={`${
          location.pathname === "/"
            ? "text-blue-light"
            : isScrolled
            ? "text-gray-900"
            : "text-solid-white"
        } block px-3 py-2 rounded-md  font-medium  hover:text-blue-light`}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact-us"
        className={`${
          location.pathname === "/contact-ud"
            ? "text-blue-light"
            : isScrolled
            ? "text-gray-900"
            : "text-solid-white"
        } block px-3 py-2 rounded-md  font-medium  hover:text-blue-light`}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/about-us"
        className={`${
          location.pathname === "/about-us"
            ? "text-blue-light"
            : isScrolled
            ? "text-gray-900"
            : "text-solid-white"
        } block px-3 py-2 rounded-md  font-medium  hover:text-blue-light`}
      >
        About Us
      </NavLink>
    </>
  );

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14 md:h-20" : "h-16 md:h-24"
          }`}
        >
          <div className="flex justify-center items-center">
            <div className="shrink-0 flex items-center">
              <img
                className="h-10 w-10 md:h-16 md:w-16"
                src="/logo.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="hidden md:flex md:ml-10 md:space-x-8">{navLinks}</div>
          <div className="hidden md:flex items-center">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} `}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-sm">
          {navLinks}
        </div>
        <div className="px-3 pb-5 md:pb-0">
          <button className="bg-blue-500 text-solid-white px-2 py-1 rounded-md text-sm font-medium">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
