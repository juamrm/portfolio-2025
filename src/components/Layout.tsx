import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();

  const navigationItems = [
    { name: "About", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const footerLinks = [
    { name: "Linkedin", href: "#" },
    { name: "Github", href: "#" },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f3f3f3] flex flex-row justify-center w-full">
      <div className="bg-[#f3f3f3] w-full max-w-[1440px] relative min-h-screen px-4 sm:px-8 md:px-16 lg:px-40">
        {/* Navigation */}
        <header className="w-full pt-16 md:pt-[120px]">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0">
            <Link to="/" aria-label="Home page">
              <img
                className="w-[67px] h-[23px]"
                alt="Site logo"
                src="/site-logo.svg"
              />
            </Link>

            <NavigationMenu>
              <NavigationMenuList className="flex gap-4 md:gap-8">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={`nav-underline-animate font-navigation font-[number:var(--navigation-font-weight)] text-sm md:text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] [font-style:var(--navigation-font-style)] ${
                        location.pathname === item.href
                          ? "text-app-secondary"
                          : "text-main-black"
                      }`}
                    >
                      {item.href.startsWith('#') ? (
                        <a href={item.href} onClick={scrollToContact}>
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.href}>{item.name}</Link>
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full mt-12 md:mt-24 pb-64">{children}</main>

        {/* Contact Section */}
        <section id="contact" className="w-full mb-32">
          <div className="max-w-[800px] mx-auto text-center">
            <Link 
              to="/contact"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm"
              aria-label="Contact page"
            >
              <h2 className="font-heading-1 text-4xl md:text-[length:var(--heading-1-font-size)] text-main-black tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] mb-8 hover:text-app-secondary transition-colors">
                Let's work together
              </h2>
            </Link>
            <a 
              href="mailto:juamorim@me.com"
              className="inline-flex items-center gap-4 group focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm px-2"
              aria-label="Email me at juamorim@me.com"
            >
              <span className="font-heading-2 text-xl md:text-[length:var(--heading-2-font-size)] text-main-black group-hover:text-app-secondary transition-colors">
                juamorim@me.com
              </span>
              <img
                className="w-6 h-[21px] group-hover:translate-x-2 transition-transform"
                alt=""
                aria-hidden="true"
                src="/-.svg"
              />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full fixed bottom-0 left-0 right-0 bg-[#f3f3f3] py-4 md:py-[52px] px-4 sm:px-8 md:px-16 lg:px-40">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="font-navigation font-[number:var(--navigation-font-weight)] text-app-secondary text-sm md:text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] whitespace-nowrap [font-style:var(--navigation-font-style)]">
              Juliana Amorim ⏤ 2025
            </p>

            <div className="flex gap-4 md:gap-8">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-underline-animate font-navigation font-[number:var(--navigation-font-weight)] text-main-black text-sm md:text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] whitespace-nowrap [font-style:var(--navigation-font-style)] focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};