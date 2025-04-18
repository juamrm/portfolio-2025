import React from 'react';
import { i18n } from 'i18next';

interface LanguageFlagsProps {
  i18n: i18n;
}

const LanguageFlags: React.FC<LanguageFlagsProps> = ({ i18n }) => {
  const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Spanish' },
    { code: 'pt', flag: '🇧🇷', name: 'Portuguese' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`text-xl focus:outline-none focus:ring-2 focus:ring-app-secondary p-1 rounded-full transition-all hover:scale-110 ${
            i18n.language !== lang.code ? 'opacity-40' : ''
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
