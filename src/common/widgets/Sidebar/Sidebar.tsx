import Button from "@components/Button";
import CustomRoute from "./partials/Custom Sidebar Route/CustomRoute";
import { icons } from "@libs/Icons";

const Sidebar = () => {
  return (
    <aside className="relative h-full bg-darkSlate w-72 text-center pt-8 px-0 pb-10">
      <div>
        <h1 className="text-solidWhite font-bold text-2xl mb-5 ">
          The Tree Wise Men
        </h1>
        <hr className="text-solidWhite" />
      </div>
      <div className="flex flex-col justify-between">
        {/* Product */}
        <section>
          <CustomRoute />
        </section>

        {/* logout  */}
        <section className="pl-5 text-2xl absolute bottom-10">
          <div className="pt-3 flex items-center gap-3 !text-solidWhite">
            <span>{icons?.logout}</span>
            <Button link className="!text-xl ">
              Logout
            </Button>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
