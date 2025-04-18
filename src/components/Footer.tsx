import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const footerLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/juamorim/",
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

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCopyrightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const heroSection = document.querySelector("#hero");
      heroSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const heroSection = document.querySelector("#hero");
        heroSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="w-full py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-40 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Copyright */}
          <a
            href="/"
            onClick={handleCopyrightClick}
            className="font-heading-2 text-main-black text-base tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] hover:text-app-secondary transition-colors duration-200"
          >
            © Juliana Amorim ⏤ 2025
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
