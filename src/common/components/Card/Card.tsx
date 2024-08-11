import { cx } from "@config/constants";
import Link from "next/link";
import { FC } from "react";
import { CardProps } from "./config/type";

const Card: FC<CardProps> = ({
  className = "",
  href,
  children,
  handleSubmit,
}) => {
  const CLASSES = "w-full min-h-[10rem] rounded-lg px-4 mx-auto";
  return (
    <div className={cx(CLASSES, className)} onClick={handleSubmit}>
      {href ? (
        <Link href={`${href}`}>
          {children || (
            <div className=" min-h-[10rem] flex justify-center items-center text-xl text-white">
              <p>This is Card</p>
            </div>
          )}
        </Link>
      ) : (
        <div className="cursor-pointer" onClick={handleSubmit}>
          {children || (
            <div className=" min-h-[10rem] flex justify-center items-center text-xl text-white">
              <p>This is Card</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
