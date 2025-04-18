import React from "react";

interface LangDropdownProps {
  i18n: any;
}

const LangDropdown: React.FC<LangDropdownProps> = ({ i18n }) => {
  const [open, setOpen] = React.useState(false);
  const languages = [
    { code: "en", flag: "🇺🇸" },
    { code: "es", flag: "🇪🇸" },
    { code: "pt-BR", flag: "🇧🇷" },
  ];
  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative ml-2">
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full text-2xl border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-label="Change language"
        type="button"
      >
        {current.flag}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 transition-colors ${i18n.language === lang.code ? "font-bold" : ""}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="sr-only">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangDropdown;
