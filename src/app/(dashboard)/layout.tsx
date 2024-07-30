import Sidebar from "@widgets/Sidebar/Sidebar";
import "../../shared/styles/globals.css";
import Providers from "../../redux/Providers";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <div className="flex">
            <div className="min-h-screen">
              <Sidebar />
            </div>
            <div className="flex-1 bg-websiteBgColor">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default layout;
