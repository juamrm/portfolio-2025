import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-8 md:px-16 lg:px-40">
        <Header />

        {/* Main Content */}
        <main className="w-full mt-24 md:mt-32 pb-[220px] md:pb-[240px]">
          {children}
        </main>

        {/* Contact Section */}
        <section id="contact" className="w-full mb-12 md:mb-20">
          <div className="max-w-[800px] mx-auto text-center">
            <Link
              to="/contact"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm"
              aria-label="Contact page"
            >
              <h2 className="font-heading-1 text-3xl md:text-5xl text-main-black tracking-tight leading-tight mb-4 hover:text-app-secondary transition-colors">
                Let's work together
              </h2>
              <span className="block text-lg md:text-xl text-app-secondary font-medium underline underline-offset-4 hover:text-main-black transition-colors">
                Get in touch
              </span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
