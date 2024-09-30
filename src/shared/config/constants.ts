import classNames from "classnames";
import { navDataTypes, singleMenuTypes } from "./types";
import brandLogo from "../../../public/The_Tree_Wise_Logo.png";

// whenever wee need to change default className value we will use this
export const cx = classNames;
export const authKey = "accessToken";

export const emptyData = "No Data";
// brand image
export const logo = brandLogo;

// menu items
export const menuData: Array<navDataTypes> = [
  {
    to: "/",
    label: "Home",
    subItems: [],
  },
  {
    to: "/services",
    label: "Services",
    subItems: [],
  },
  {
    to: "/about",
    label: "About Us",
    subItems: [],
  },
  {
    to: "/contact",
    label: "Contact",
    subItems: [],
  },
];
export const helpData: Array<singleMenuTypes> = [
  {
    to: "/",
    label: "About Us",
  },
  {
    to: "/",
    label: "Terms & Conditions",
  },
  {
    to: "/ ",
    label: "Privacy Policy ",
  },
];

export const layout_data = {
  navbar: {
    button: {
      text: "Login",
      link: "/login",
    },
  },
  footer: {
    subtitle:
      "Clarity gives you the blocks and components you need to create a truly professional",
    copyWrite: "Tree Wise Men USA",
    social_links: {
      facebook: "/",
      Instagram: "/",
      LinkedinIn: "/",
      Twitter: "/",
    },
  },
};
