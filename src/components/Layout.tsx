import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-16 lg:px-40">
        <Header />

        {/* Main Content */}
        <main className="w-full mt-24 md:mt-32 pb-[120px] md:pb-[160px]">
          {children}
        </main>

        {/* Contact Section */}
        <section id="contact" className="w-full mb-12 md:mb-20">
          <div className="max-w-[800px] mx-auto text-center">
            <Link
              to="/contact"
              className="group inline-block focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm"
              aria-label="Contact page"
            >
              <h2 className="font-heading-1 text-3xl md:text-5xl text-main-black tracking-tight leading-tight mb-4 group-hover:text-app-secondary transition-colors duration-300">
                Let's work together
              </h2>
              <div className="relative inline-block">
                <span className="block text-lg md:text-xl text-app-secondary font-medium transition-transform duration-300 group-hover:-translate-y-1">
                  Get in touch
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-app-secondary transform origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-0"></span>
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-main-black transform origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
