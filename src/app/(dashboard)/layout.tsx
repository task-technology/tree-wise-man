import Sidebar from "@widgets/Sidebar/Sidebar";
import "../../shared/styles/globals.css";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default layout;
