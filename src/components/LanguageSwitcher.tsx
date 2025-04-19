import React from "react";
import { i18n } from "i18next";

interface LanguageSwitcherProps {
  i18n: i18n;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ i18n }) => {
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt-BR", label: "PT" },
  ];

  const handleLanguageChange = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem("i18nextLng", lng);
      document.documentElement.lang = lng;
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <nav className="flex items-center" aria-label="Language switcher">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          {index > 0 && (
            <span className="px-2 text-gray-400 select-none">/</span>
          )}
          <button
            onClick={() => handleLanguageChange(lang.code)}
            className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-app-secondary ${
              i18n.language === lang.code ? "text-[#FF4D00]" : "text-gray-600"
            }`}
            aria-label={`Change language to ${lang.label}`}
            aria-current={i18n.language === lang.code ? "true" : "false"}
          >
            {lang.label}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default LanguageSwitcher;
