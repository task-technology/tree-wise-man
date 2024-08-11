"use client";

import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { icons } from "../../../../../shared/libs/Icons";
import { sidebarData } from "../../config/constaints";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUserInfo } from "../../../../../shared/auth/auth.service";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";

const routeStyle = "pt-3 flex items-center gap-2";
const singleRouteStyle =
  "py-5 flex items-center pl-5 gap-2 text-xl text-solidWhite mb-1";

const CustomRoute = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
  const router = usePathname();

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isActiveRoute = (link: string) => {
    return router === link;
  };

  if (!user) return <LoadingSpinner fullHight />;

  return (
    <div>
      {sidebarData?.map((data, index) => {
        if (data.access === "admin" && user?.role !== "admin") {
          return null;
        }

        const isExpanded = expandedIndex === index;
        const hasActiveSubRoute = data.sub_label?.some((subItem) =>
          isActiveRoute(subItem.link)
        );

        return data.sub_label ? (
          <div
            key={index}
            className={`pl-5 py-5 ${
              isExpanded || hasActiveSubRoute
                ? "bg-lightBlue rounded-lg mb-1"
                : ""
            } font-semibold text-solidWhite transition-all duration-500 ease-linear`}
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
                isExpanded || hasActiveSubRoute ? "max-h-40" : "max-h-0"
              }`}
            >
              <section className="pl-5">
                {data.sub_label
                  .filter(
                    (subItem) =>
                      subItem.access === "anyone" || user?.role === "admin"
                  )
                  .map((subItem, subIndex) => (
                    <Link href={subItem.link} key={subIndex}>
                      <div
                        className={`${routeStyle} ${
                          isActiveRoute(subItem.link) ? " underline" : ""
                        }`}
                      >
                        <span>{icons.rightArrow}</span>
                        <span>{subItem.label}</span>
                      </div>
                    </Link>
                  ))}
              </section>
            </div>
          </div>
        ) : (
          <section key={index}>
            <Link href={data.link}>
              <div
                className={`${singleRouteStyle} ${
                  isActiveRoute(data.link) ? "bg-lightBlue rounded-md" : ""
                }`}
              >
                <span>{icons[data?.icon]}</span>
                <span>{data.label}</span>
              </div>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default CustomRoute;
