import React from "react";

const footerLinks = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/juamorim/", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98h.02c1.66 0 2.98-1.32 2.98-2.98C7.98 4.82 6.66 3.5 4.98 3.5zM2.4 21h5.16V9H2.4v12zM9.34 9h4.94v1.56h.07c.69-1.24 2.38-2.54 4.9-2.54 5.24 0 6.2 3.45 6.2 7.94V21h-5.16v-6.42c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21H9.34V9z" fill="#0077B5"/></svg>
  ) },
  { name: "Github", href: "https://github.com/juamrm", icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.27-.45-1.34.1-2.8 0 0 .84-.28 2.75 1.05A9.48 9.48 0 0112 6.83c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.46.2 2.53.1 2.8.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z" fill="#181717"/></svg>
  ) },
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
  <a
    key={link.name}
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit my ${link.name} profile`}
    className="mx-2 hover:scale-110 transition-transform"
  >
    {link.icon}
  </a>
))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

