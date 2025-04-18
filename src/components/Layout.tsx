import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Contact } from "./Contact";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-16 lg:px-40">
        <Header />

        {/* Main Content */}
        <main className="w-full mt-16 md:mt-20 pb-16 md:pb-24">{children}</main>

        {isHomePage && <Contact />}
        <Footer />
      </div>
    </div>
  );
};
