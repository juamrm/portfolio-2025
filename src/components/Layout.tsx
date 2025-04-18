import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import LangDropdown from "./LangDropdown";
import RollingLink from "./RollingLink";
import HamburgerMenu from "./HamburgerMenu";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const navigationItems = [
    { name: i18n.t("navbar.about"), href: "/" },
    { name: i18n.t("navbar.projects"), href: "/work" },
    { name: i18n.t("navbar.contact"), href: "/contact" },
  ];

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] w-full max-w-[1440px] relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-40">
        {/* Navigation */}
        <header className="w-full pt-6 md:pt-8 md:sticky md:top-0 md:bg-[#f3f3f3] md:z-50">
          {/* Mobile sticky header */}
          <div className="fixed top-0 left-0 right-0 bg-[#f3f3f3] z-40 py-4 px-4 sm:px-8 md:hidden">
            <div className="flex justify-between items-center max-w-[1440px] mx-auto">
              <Link to="/" aria-label="Home page">
                <img
                  className="w-[67px] h-[23px]"
                  alt="Site logo"
                  src="/site-logo.svg"
                />
              </Link>
              <div className="flex items-center">
                <HamburgerMenu
                  navigationItems={navigationItems}
                  langDropdown={<LangDropdown i18n={i18n} />}
                  i18n={i18n}
                />
              </div>
            </div>
          </div>

          {/* Desktop header */}
          <div className="flex flex-row items-center w-full gap-6 md:gap-0 hidden md:flex mb-12">
            <Link to="/" aria-label="Home page">
              <img
                className="w-[67px] h-[23px]"
                alt="Site logo"
                src="/site-logo.svg"
              />
            </Link>
            {/* Desktop Nav */}
            <div className="flex-1 flex justify-center hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row items-center gap-6 md:gap-8">
                  {navigationItems.map((item) => {
                    const handleClick = (e: React.MouseEvent) => {
                      e.preventDefault();
                      navigate(item.href);
                    };

                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <div onClick={handleClick} className="cursor-pointer">
                            <RollingLink
                              to={item.href}
                              className={`font-navigation font-[number:var(--navigation-font-weight)] text-main-black text-sm md:text-base tracking-[var(--navigation-letter-spacing)] px-5 py-2 group ${
                                location.pathname === item.href
                                  ? "text-app-secondary"
                                  : "text-main-black"
                              }`}
                            >
                              {item.name}
                            </RollingLink>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {/* Hamburger removed from here - now in sticky header */}
            <div className="flex items-center ml-auto hidden md:flex">
              <LangDropdown i18n={i18n} />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full mt-8 md:mt-16 pb-[220px] md:pb-[240px]">
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
