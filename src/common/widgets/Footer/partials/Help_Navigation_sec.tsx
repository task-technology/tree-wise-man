import { helpData } from "@config/constants";
import { singleMenuTypes } from "@config/types";
import Link from "next/link";

const Help_Navigation_sec = () => {
  return (
    <div className=" tracking-wider leading-relaxed">
      <h4 className="text-2xl font-[600] mb-4">Help </h4>
      <ul>
        {helpData.map((data: singleMenuTypes, i) => {
          return (
            <li key={i} className=" hover:underline cursor-pointer">
              {" "}
              <Link href={data.to || ""}>{data.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Help_Navigation_sec;
