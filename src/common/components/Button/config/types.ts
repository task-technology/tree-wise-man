import { ButtonHTMLAttributes, ReactNode } from "react";

// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  status?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  icon?: string;
  primary?: boolean;
  ghost?: boolean;
  btn_outline?: boolean;
  mini?: boolean;
  danger?: boolean;
  small?: boolean;
  link?: boolean;
  transparent?: boolean;
  animationLength?: number;
};
