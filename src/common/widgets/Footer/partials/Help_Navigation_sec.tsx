import { helpData } from "@config/constants";
import { singleMenuTypes } from "@config/types";
import Link from "next/link";

const Help_Navigation_sec = () => {
  return (
    <section className=" tracking-wider leading-relaxed">
      <h3 className="text-2xl font-[600] mb-4">Help </h3>
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
    </section>
  );
};

export default Help_Navigation_sec;
