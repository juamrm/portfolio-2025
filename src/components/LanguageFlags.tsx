import React from "react";
import { i18n } from "i18next";

interface LanguageFlagsProps {
  i18n: i18n;
}

const LanguageFlags: React.FC<LanguageFlagsProps> = ({ i18n }) => {
  const languages = [
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Spanish" },
    { code: "pt-BR", flag: "🇧🇷", name: "Portuguese" },
  ];

  const handleLanguageChange = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      // Force a re-render of the app by updating localStorage
      localStorage.setItem("i18nextLng", lng);
      // Reload translations
      document.documentElement.lang = lng;
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`text-xl transition-all hover:scale-110 ${
            i18n.language !== lang.code ? "opacity-40" : ""
          }`}
          aria-label={`Change language to ${lang.name}`}
          title={lang.name}
        >
          <span role="img" aria-label={lang.name}>
            {lang.flag}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageFlags;
