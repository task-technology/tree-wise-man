import { Metadata } from "next";
import Providers from "../../redux/Providers";
import "../../../shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Tree Wise Man",
  description: "Always There for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Providers>
          <div className="flex-1 bg-websiteBgColor">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
