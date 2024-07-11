import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="h-[5000px]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
