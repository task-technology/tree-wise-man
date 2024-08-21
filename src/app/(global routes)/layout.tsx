import type { Metadata } from "next";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

import "../../shared/styles/globals.css";
import Providers from "../../redux/Providers";

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
      <body className="no-scrollbar max-w-[2400px] mx-auto">
        <Providers>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
