import React, { useState, useRef, useEffect } from "react";
import RollingLink from "./RollingLink";
import { useLocation, useNavigate } from "react-router-dom";

interface HamburgerMenuProps {
  navigationItems: { name: string; href: string }[];
  langDropdown?: React.ReactNode;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  navigationItems,
  langDropdown,
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
        className="focus:outline-none p-2"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="block w-7 h-7 relative">
          <span
            className={`absolute left-0 top-2 w-7 h-0.5 bg-main-black rounded transition-transform duration-300 ${
              open ? "rotate-45 top-3" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 w-7 h-0.5 bg-main-black rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-6 w-7 h-0.5 bg-main-black rounded transition-transform duration-300 ${
              open ? "-rotate-45 top-3" : ""
            }`}
          />
        </span>
      </button>
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-opacity duration-300"
        >
          <button
            aria-label="Close menu"
            className="absolute top-6 right-6 text-3xl text-main-black focus:outline-none"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
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
                  style={{ paddingLeft: 56, paddingRight: 64 }}
                >
                  {item.name}
                </RollingLink>
              </div>
            );
          })}
          {langDropdown && (
            <div className="mt-8 flex flex-row justify-center items-center w-full gap-4">
              {langDropdown}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
