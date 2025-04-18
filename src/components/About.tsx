import { useTranslation } from "react-i18next";

export const About = (): JSX.Element => {
  const { t } = useTranslation();

  const educationItems = [
    { key: "factoria" },
    { key: "tramontana" },
    { key: "nuclio" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20">
      {/* Left column for heading */}
      <div className="md:col-span-4">
        <h2 className="font-dm-sans text-2xl md:text-[length:var(--heading-2-font-size)] text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
          {t("about.title")}
        </h2>
      </div>

      {/* Right column for content */}
      <div className="md:col-span-8">
        <div className="space-y-6">
          <p className="font-dm-sans text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
            {t("about.introduction")}
          </p>

          <div className="space-y-6 pl-0">
            {educationItems.map((item) => (
              <div
                key={item.key}
                className="border-l-2 border-app-secondary pl-6 py-1"
              >
                <h3 className="font-dm-sans text-xl md:text-2xl text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-2">
                  {t(`about.education.${item.key}.title`)}
                </h3>
                <p className="font-dm-sans text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                  {t(`about.education.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
