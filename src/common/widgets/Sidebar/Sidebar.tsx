"use client";
import { useState } from "react";
import Button from "@components/Button";
import CustomRoute from "./partials/Custom Sidebar Route/CustomRoute";
import { icons } from "@libs/Icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Drawer Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 text-solidWhite bg-darkSlate rounded-full "
      >
        {isOpen ? (
          <span className="text-xl">✕</span> // Better close icon
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-darkSlate text-center z-40 pt-8 px-4 pb-10 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 w-full z-40" : "-translate-x-full"
        } lg:translate-x-0 lg:w-72 lg:relative lg:flex lg:flex-col lg:pt-8 lg:px-0 lg:pb-10`}
      >
        <div>
          <h1 className="text-solidWhite font-bold text-2xl mb-5 ">
            The Tree Wise Men
          </h1>
          <hr className="text-solidWhite mb-4" />
        </div>
        <div className="flex flex-col justify-between h-full">
          {/* Product */}
          <section className="mb-4">
            <CustomRoute />
          </section>

          {/* Logout */}
          <section className="pl-5 text-2xl">
            <div className="pt-3 flex items-center gap-3 !text-solidWhite">
              <span>{icons?.logout}</span>
              <Button link className="!text-xl">
                Logout
              </Button>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
