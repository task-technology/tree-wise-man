"use client";
import { FC, useEffect, useState } from "react";
import { ButtonProps } from "./config/types";
import { cx } from "@config/constants";
//

const Button: FC<ButtonProps> = ({
  className = "",
  translate = "",
  sizeClass = "px-[20px] py-[7.5px]",
  fontSize = "text-base",
  disabled = false,
  children,
  mini,
  type,
  loading,
  secondary,
  status,
  primary,
  ghost,
  btn_outline,
  danger,
  small,
  link,
  transparent,
  animationLength = 1,
  onClick = () => {},
}) => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (loading) {
      let currentPercentage = 0;
      const interval = setInterval(() => {
        currentPercentage += 1;
        setPercentage(currentPercentage);
        if (currentPercentage >= 100) {
          clearInterval(interval);
        }
      }, animationLength * 25);

      return () => clearInterval(interval);
    } else {
      setPercentage(0); // Reset percentage when loading is false
    }
  }, [loading, animationLength]);

  const CLASSES = `
        relative text-white h-auto bg-primary inline-flex items-center justify-center rounded-[4px] transition-all font-medium hover:bg-primary-dark duration-300	hover:bg-shadeOfLightBlue
        ${disabled && "!bg-primary/50 hover:!bg-disable cursor-not-allowed"} 
        ${loading && "cursor-not-allowed !bg-disable hover:!bg-disable"}
        ${mini && "!py-1 !px-2 !text-sm !h-7"}
        ${fontSize} 
        ${sizeClass} 
        ${translate}
        ${className} 
    `;

  const SECONDARY_CLASS = `bg-transparent outline outline-[1.7px] text-primary outline-primary hover:!text-white hover:bg-primary`;
  const STATUS_CLASS = `bg-transparent border-slateLightThird !text-solidBlack border rounded-full text-sm  !py-1`;
  const btn_primary =
    "px-5   bg-blue-light !text-solid-white border-0 text-lg rounded-md font-normal rounded-[4px]";
  const btn_ghost =
    " px-5 hover:!bg-primary  !bg-[#D9D9D9] !text-solid-black border-0 text-lg rounded-md font-normal";

  const btn_outline_style =
    "bg-transparent !text-black hover:!text-gray-400 outline rounded-full !py-0 !px-3";

  const btn_danger = "px-5 rounded-md rounded-[4px] text-lg bg-shadeOfRed";
  const smallStyle =
    "!px-3 !py-1 rounded-md text-xs bg-shadeOfLightBlue hover:bg-sideBarBtnColor hover:text-solid-white text-solid-black";

  const linkStyle = `!text-link-color !px-0 !py-0 hover:!text-blue-light hover:underline !bg-transparent`;
  const transparentStyle = `!px-0 !py-0 !bg-transparent`;

  const _renderLoading = () => {
    return (
      <div className="flex items-center">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        {animationLength && <span className="pr-1">{percentage}%</span>}
      </div>
    );
  };

  return (
    <button
      disabled={disabled || loading}
      className={cx(
        CLASSES,
        secondary && SECONDARY_CLASS,
        status && STATUS_CLASS,
        primary && btn_primary,
        ghost && btn_ghost,
        btn_outline && btn_outline_style,
        danger && btn_danger,
        small && smallStyle,
        link && linkStyle,
        transparent && transparentStyle
      )}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default Button;
