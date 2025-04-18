import React, { useState, useRef, useEffect } from "react";
import RollingLink from "./RollingLink";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageFlags from "./LanguageFlags";
import { i18n } from "i18next";

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
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="absolute top-full right-0 mt-2 bg-[#f3f3f3] border border-gray-200 rounded-lg py-6 px-8 w-64 z-50 animate-slideIn"
          style={{
            transform: "translateY(0)",
            opacity: 1,
            transition: "transform 0.3s ease, opacity 0.3s ease",
          }}
        >
          <div className="flex flex-col gap-5">
            {navigationItems.map((item) => {
              const handleClick = (e: React.MouseEvent) => {
                e.preventDefault(); // Prevent default link behavior
                setOpen(false); // Close menu

                // Navigate programmatically after a short delay
                setTimeout(() => {
                  navigate(item.href);
                }, 100);
              };

              return (
                <div
                  key={item.name}
                  className="cursor-pointer"
                  onClick={handleClick}
                >
                  <RollingLink
                    to={item.href}
                    className="text-base font-navigation text-main-black"
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                  >
                    {item.name}
                  </RollingLink>
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-row items-center justify-center">
            {i18n ? <LanguageFlags i18n={i18n} /> : langDropdown}
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
