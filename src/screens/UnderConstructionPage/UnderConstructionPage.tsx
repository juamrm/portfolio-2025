import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const UnderConstructionPage = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const returnPath = location.state?.returnPath || "/";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Work in Progress Icon */}
      <div className="w-16 h-16 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-app-secondary"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="m12 2 2 2-2 2-2-2 2-2Z" />
          <path d="m20 12 2-2-2-2-2 2 2 2Z" />
          <path d="m2 12 2 2 2-2-2-2-2 2Z" />
          <path d="m12 22-2-2 2-2 2 2-2 2Z" />
        </svg>
      </div>

      {/* Content */}
      <h1 className="font-dm-sans text-3xl md:text-4xl text-main-black mb-4">
        {t("underConstruction.title")}
      </h1>
      <p className="font-dm-sans text-main-gray max-w-[500px] mb-8">
        {t("underConstruction.description")}
      </p>

      {/* Back Button */}
      <Link
        to={returnPath}
        className="inline-flex items-center gap-2 text-app-secondary hover:text-app-secondary/80 transition-colors duration-200"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform rotate-180"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-dm-sans">
          {t("underConstruction.backButton")}
        </span>
      </Link>
    </div>
  );
};
