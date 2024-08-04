import Image from "next/image";
import React from "react";
import { logo } from "@config/constants";

const Brand = () => {
  return <Image src={logo} width={140} height={140} alt="The Tree Wise Men" />;
};

export default Brand;
