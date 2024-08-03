// import icons
import {
  FaCaretDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaRegHeart,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  FiBriefcase,
  FiCreditCard,
  FiDollarSign,
  FiFileText,
  FiUsers,
} from "react-icons/fi";

import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { FaXTwitter, FaRegCompass } from "react-icons/fa6";
import { RiArrowUpSFill, RiBarChart2Line } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiPieChart } from "react-icons/fi";

// export
export const icons: any = {
  usersForDashboard: FiUsers,
  fileTextForDashboard: FiFileText,
  dollarSignForDashboard: FiDollarSign,
  creditCardForDashboard: FiCreditCard,
  briefCaseForDashboard: FiBriefcase,
  DownArrow: <FaCaretDown />,
  MenuOpen: <MdMenu />,
  MenuClose: <IoMdClose />,
  facebook: <FaFacebookF />,
  Instagram: <FaInstagram />,
  LinkedinIn: <FaLinkedinIn />,
  Twitter: <FaXTwitter />,
  search: <FaLocationArrow />,
  upperArrow: <RiArrowUpSFill />,
  grid: <BsFillGridFill />,
  setting: <CiSettings />,
  compass: <FaRegCompass />,
  barChart: <RiBarChart2Line />,
  pieChart: <FiPieChart />,
  heart: <FaRegHeart />,
  cross: <RxCross2 />,
};
