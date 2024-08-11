import { ReactNode } from "react";

export type CardProps = {
  className?: string;
  href?: string;
  children?: ReactNode;
  handleSubmit?: () => void;
};
