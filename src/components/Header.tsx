import React, { useState, useEffect } from "react";
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

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: i18n.t("navbar.about"), href: "/" },
    { name: i18n.t("navbar.projects"), href: "/work" },
    { name: i18n.t("navbar.contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 before:content-[''] before:absolute before:inset-0 before:-z-10 ${
        isScrolled
          ? "before:bg-[var(--app-background)]/95 before:backdrop-blur-sm"
          : "before:bg-transparent"
      }`}
    >
      {/* Mobile sticky header */}
      <div className="md:hidden py-4">
        <div className="px-4 sm:px-8">
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
      </div>

      {/* Desktop header */}
      <div className="hidden md:block pt-6 pb-8">
        <div className="px-16 lg:px-40">
          <div className="flex flex-row items-center justify-between w-full max-w-[1440px] mx-auto">
            <Link to="/" aria-label="Home page" className="flex items-center">
              <img
                className="w-[67px] h-[23px]"
                alt="Site logo"
                src="/site-logo.svg"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="flex items-center justify-center flex-1">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-row items-center gap-8">
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
                              className={`font-heading-2 text-base tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] ${
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

            {/* Language Dropdown */}
            <div className="flex items-center">
              <LangDropdown i18n={i18n} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
