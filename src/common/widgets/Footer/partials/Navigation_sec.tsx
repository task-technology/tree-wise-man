import { menuData } from "@config/constants";
import { navDataTypes, singleMenuTypes } from "@config/types";
import Link from "next/link";

const Navigation_sec = () => {
  return (
    <div className=" tracking-wider leading-relaxed">
      <h4 className="text-2xl font-[600]  mb-4">Navigation</h4>
      <ul>
        {menuData.map((menu: navDataTypes, i) => {
          return (
            <li key={i} className=" hover:underline cursor-pointer">
              <Link href={menu.to || ""}>
                <span>{menu.label}</span>
              </Link>
              {menu.subItems && (
                <ul>
                  {menu.subItems.map((Items: singleMenuTypes, i) => (
                    <li key={i}>
                      <Link href={Items.to || ""} scroll={false}>
                        <span>{Items?.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation_sec;
