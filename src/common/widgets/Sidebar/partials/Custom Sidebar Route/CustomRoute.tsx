"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { icons } from "../../../../../shared/libs/Icons";
import { sidebarData } from "../../config/constaints";
import Link from "next/link";

const routeStyle = "pt-3 flex items-center gap-2";

const CustomRoute = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {sidebarData?.map((data, index) => {
        const isExpanded = expandedIndex === index;
        return (
          <div
            key={index}
            className={`pl-[30px] py-5 ${
              isExpanded ? "bg-gray-700" : ""
            } font-semibold text-white`}
          >
            <button
              className="flex gap-3 items-center text-xl"
              onClick={() => handleToggle(index)}
            >
              {icons[data?.icon]}
              {isExpanded ? (
                <>
                  {data?.label} <IoIosArrowUp className="text-base" />
                </>
              ) : (
                <>
                  {data?.label} <IoIosArrowDown className="text-base" />
                </>
              )}
            </button>
            <div
              className={`transition-all duration-500 ease-linear overflow-hidden ${
                isExpanded ? "max-h-40" : "max-h-0"
              }`}
            >
              <section className="pl-5">
                {data.sub_label?.map((subItem, subIndex) => (
                  <Link href={subItem.link} key={subIndex}>
                    <div className={routeStyle}>
                      <span>{icons.RightArrow}</span>
                      <span>{subItem.label}</span>
                    </div>
                  </Link>
                ))}
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CustomRoute;
