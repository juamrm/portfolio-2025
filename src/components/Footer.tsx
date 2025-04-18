import React from "react";
import RollingLink from "./RollingLink";

const footerLinks = [
  { name: "Linkedin", href: "#" },
  { name: "Github", href: "#" },
];

const Footer: React.FC = () => (
  <footer className="w-full bg-[#f3f3f3] py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-40 border-t border-gray-200">
    <div className="max-w-[1440px] mx-auto">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <p className="font-navigation font-[number:var(--navigation-font-weight)] text-app-secondary text-sm md:text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] whitespace-nowrap [font-style:var(--navigation-font-style)]">
          © Juliana Amorim ⏤ 2025
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-12 h-6">
          {footerLinks.map((link) => (
            <RollingLink
              key={link.name}
              href={link.href}
              className="font-navigation font-[number:var(--navigation-font-weight)] text-main-black text-sm md:text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] whitespace-nowrap [font-style:var(--navigation-font-style)] focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name} profile`}
            >
              {link.name}
            </RollingLink>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

