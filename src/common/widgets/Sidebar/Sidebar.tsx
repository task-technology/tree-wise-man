"use client";
import { useState } from "react";
import Button from "@components/Button";
import CustomRoute from "./partials/Custom Sidebar Route/CustomRoute";
import { icons } from "@libs/Icons";
import { handleLogout } from "../../../shared/helpers/handleLogout";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Drawer Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 z-50 lg:hidden p-2   "
      >
        {isOpen ? (
          <span className="text-3xl text-solidWhite ">{icons.MenuClose}</span>
        ) : (
          <span className="text-3xl text-solidBlack">{icons.MenuOpen}</span>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-darkSlate text-center pt-14 px-4 pb-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0 w-full z-40" : "-translate-x-full"
        } lg:translate-x-0 lg:w-72 lg:relative lg:flex lg:flex-col lg:pt-8 lg:px-0 lg:pb-10`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div>
            <Link href="/">
              <h1 className="text-solidWhite font-bold text-2xl mb-5 ">
                The Tree Wise Men
              </h1>
            </Link>
            <hr className="text-solidWhite mb-4" />
          </div>
          <div className="flex-grow">
            {/* Product */}
            <section className="mb-4">
              <CustomRoute />
            </section>
          </div>
          <div>
            {/* Logout */}
            <section className="pl-5 text-2xl">
              <div className="pt-3 flex items-center gap-3 !text-solidWhite">
                <span>{icons?.logout}</span>
                <Button
                  onClick={() => handleLogout(router)}
                  link
                  className="!text-xl"
                >
                  Logout
                </Button>
              </div>
            </section>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
