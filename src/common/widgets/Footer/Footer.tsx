import React from "react";
import styles from "./css/footer.module.css";

import Brand from "@components/Brand";
import Navigation_sec from "./partials/Navigation_sec";
import Help_Navigation_sec from "./partials/Help_Navigation_sec";
import News_letter_sec from "./partials/News_letter_sec";
import { icons } from "@libs/Icons";
import { layout_data } from "@config/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className={`w-full min-h-[50vh] background_image   pt-11 ${styles.background_image}`}
    >
      <div className="container py-11 mx-auto  px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="max-w-[300px] mx-auto px-4 lg:mx-0">
            <Brand />
            <p className="font-[500] text-md font-primary text-white mt-4">
              {layout_data.footer.subtitle}
            </p>
            <div className="flex space-x-6 mt-4">
              <Link href={layout_data.footer.social_links.facebook}>
                <p className=" border-2 border-white text-white p-2 rounded-full text-xl hover:bg-secondary hover:translate-y-1 duration-300">
                  {icons.facebook}
                </p>
              </Link>
              <Link href={layout_data.footer.social_links.Instagram}>
                <p className=" border-2 border-white text-white p-2 rounded-full text-xl hover:bg-secondary hover:translate-y-1 duration-300">
                  {icons.Instagram}
                </p>
              </Link>
              <Link href={layout_data.footer.social_links.LinkedinIn}>
                <p className=" border-2 border-white text-white p-2 rounded-full text-xl hover:bg-secondary hover:translate-y-1 duration-300">
                  {icons.LinkedinIn}
                </p>
              </Link>
              <Link href={layout_data.footer.social_links.Twitter}>
                <p className=" border-2 border-white text-white p-2 rounded-full text-xl hover:bg-secondary hover:translate-y-1 duration-300">
                  {icons.Twitter}
                </p>
              </Link>
            </div>
          </div>
          <div className="pt-11 lg:w-9/12 grid grid-cols-1 gap-9 lg:gap-5 lg:grid-cols-3 text-white px-4">
            <Navigation_sec />
            <Help_Navigation_sec />
            <News_letter_sec />
          </div>
        </div>
      </div>
      <div className="py-6 flex justify-center items-center text-white text-lg">
        <p className="text-center">
          © <span>{layout_data.footer.copywrite}</span> |{" "}
          <span> All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
