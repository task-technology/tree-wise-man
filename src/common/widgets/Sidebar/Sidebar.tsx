import Button from "@components/Button";
import CustomRoute from "./partials/Custom Sidebar Route/CustomRoute";
import { icons } from "@libs/Icons";

const Sidebar = () => {
  return (
    <aside className="menu min-h-screen bg-slate-700 text-solidBlack relative  w-72 text-center pt-8 ">
      <div>
        <h1 className="text-solidBlack font-bold text-3xl mb-5">
          EG Warehouse
        </h1>
      </div>
      {/* Product */}
      <div>
        <CustomRoute />
      </div>

      {/* logout  */}
      <section className="pl-[30px] text-2xl absolute bottom-5">
        <div className="pt-3 flex items-center gap-3">
          <span>{icons?.logout}</span>
          <Button link className="!text-xl !text-solid-white">
            Logout
          </Button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
