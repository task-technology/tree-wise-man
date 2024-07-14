import { cx } from "@config/constants";
import { CardProps } from "@config/types";
import Link from "next/link";
import { FC } from "react";

const Card: FC<CardProps> = ({ className = "", href, children }) => {
  const CLASSES =
    "w-full min-h-[10rem] rounded-lg glass_backround px-4 mx-auto";
  return (
    <div className={cx(CLASSES, className)}>
      <Link href={`${href}`}>
        {children || (
          <div className=" min-h-[10rem] flex justify-center items-center text-xl text-white">
            <p>This is Card</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
