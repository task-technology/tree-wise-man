import Sidebar from "@widgets/Sidebar/Sidebar";
import "../../shared/styles/globals.css";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;
