import React, { useState, useRef, useEffect } from "react";
import RollingLink from "./RollingLink";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageFlags from "./LanguageFlags";
import { i18n } from "i18next";

// Add the styles to your global CSS file or use a CSS-in-JS solution
const menuStyles = `
  .clip-path-circle-zero {
    clip-path: circle(0% at calc(100% - 32px) 32px);
  }
  .clip-path-circle-full {
    clip-path: circle(150% at calc(100% - 32px) 32px);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = menuStyles;
document.head.appendChild(styleSheet);

const footerLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/julianaamrm/",
    icon: (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"
        />
      </svg>
    ),
  },
  {
    name: "Github",
    href: "https://github.com/juamrm",
    icon: (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.27-.45-1.34.1-2.8 0 0 .84-.28 2.75 1.05A9.48 9.48 0 0112 6.83c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.46.2 2.53.1 2.8.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"
        />
      </svg>
    ),
  },
];

interface HamburgerMenuProps {
  navigationItems: { name: string; href: string }[];
  langDropdown?: React.ReactNode;
  i18n?: i18n;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  navigationItems,
  langDropdown,
  i18n,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);

    if (href.startsWith("/#")) {
      // If we're already on the homepage, just scroll to the section
      if (location.pathname === "/") {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="md:hidden relative z-50">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="focus:outline-none focus:ring-2 focus:ring-app-secondary p-2 rounded-md"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span className="block w-6 h-6 relative">
            <span className="absolute top-1.5 block h-0.5 w-6 bg-main-black" />
            <span className="absolute top-3 block h-0.5 w-6 bg-main-black" />
            <span className="absolute top-4.5 block h-0.5 w-6 bg-main-black" />
          </span>
        )}
      </button>
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 bg-gray-50 z-50 transition-[clip-path] duration-500 ease-in-out ${
          open
            ? "clip-path-circle-full pointer-events-auto"
            : "clip-path-circle-zero pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform translate-x-0 translate-y-0"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-12">
            <nav className="space-y-8">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="cursor-pointer text-center overflow-visible"
                  onClick={(e) => handleNavigation(e, item.href)}
                  style={{
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    opacity: open ? 1 : 0,
                    transition: `transform 0.4s ease ${
                      index * 0.1
                    }s, opacity 0.4s ease ${index * 0.1}s`,
                  }}
                >
                  <RollingLink
                    to={item.href}
                    className="text-[18px] font-navigation text-main-black block whitespace-nowrap px-4"
                    style={{ paddingLeft: 0, paddingRight: 0 }}
                  >
                    {item.name}
                  </RollingLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Footer Section */}
          <div className="flex flex-col items-center pb-8">
            {/* Social Links */}
            <div className="flex flex-row items-center justify-center space-x-8 mb-16">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${link.name} profile`}
                  className="text-main-black hover:text-app-secondary transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Language Flags */}
            <div className="flex justify-center">
              {i18n ? <LanguageFlags i18n={i18n} /> : langDropdown}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
