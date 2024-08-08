import { authKey, menuData } from "@config/constants";
import { navDataTypes, singleMenuTypes } from "@config/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { icons } from "@libs/Icons";
import Button from "@components/Button";
import { getFromCookie } from "../../../../../shared/helpers/local_storage";
import { isLoggedIn } from "../../../../../shared/auth/auth.service";
const Mobile_navbar = ({ toggleMenu }: { toggleMenu: boolean }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
    const isLog: any = isLoggedIn();
    setIsLogged(isLog);
  }, [pathname]);

  return (
    <>
      {menuData.map((menuItem: navDataTypes, index: number) => (
        <li key={index} className="group relative">
          <Link href={menuItem.to || ""}>
            <span
              className={`cursor-pointer flex items-center gap-2 font-[600] lg:text-[20px]  px-2 ${
                activeLink === menuItem.to
                  ? `text-solidBlack/80  ${
                      toggleMenu ? "border-l-4" : "border-b-2"
                    } border-gray-600`
                  : "text-solidBlack/80 hover:text-grayForBorder"
              }`}
            >
              {menuItem.label}
              <span className="text-[10px]">
                {menuItem.subItems.length > 0 && icons.DownArrow}
              </span>
            </span>
          </Link>

          {menuItem.subItems && (
            <ul className=" bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 absolute z-10 left-0 w-[200px] text-base rounded-sm shadow mt-3 flex flex-col">
              {menuItem.subItems.map(
                (subItem: singleMenuTypes, subIndex: number) => (
                  <li
                    key={subIndex}
                    className="cursor-pointer hover:text-white hover:bg-primary px-3 py-[6px] transition-all duration-200"
                  >
                    <Link
                      href={subItem.to || ""}
                      className="block text-gray-800 hover:bg-gray-200"
                      scroll={false}
                    >
                      <span className="">{subItem.label}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Mobile_navbar;
