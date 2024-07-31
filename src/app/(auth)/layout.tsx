import Providers from "../../redux/Providers";
import "../../shared/styles/globals.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <div className="flex-1 bg-websiteBgColor">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default layout;
