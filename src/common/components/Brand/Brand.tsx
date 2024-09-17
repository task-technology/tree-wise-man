import Image from "next/image";
import React from "react";
import { logo } from "@config/constants";

const Brand = () => {
  return (
    <div className="w-44 md:w-52 h-auto">
      <Image
        src={logo}
        width={140}
        height={140}
        alt="The Tree Wise Men"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Brand;
