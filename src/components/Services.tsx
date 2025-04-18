import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "01",
    translationKey: "webDesign",
  },
  {
    id: "02",
    translationKey: "uiUxDesign",
  },
  {
    id: "03",
    translationKey: "webDevelopment",
  },
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      {/* Section Header */}
      <div className="mb-16 md:mb-20">
        <h2 className="font-heading-2 text-main-black text-2xl md:text-3xl font-medium tracking-tight">
          {t("services.title")}
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative p-8 rounded-2xl transition-all duration-300 hover:bg-[#111] cursor-pointer border border-gray-100 hover:border-transparent"
          >
            {/* Service Number */}
            <div className="w-12 h-12 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6">
              <span className="font-heading-2 text-app-secondary text-sm font-medium">
                {service.id}
              </span>
            </div>

            {/* Service Content */}
            <h3 className="font-heading-2 text-2xl text-main-black group-hover:text-white mb-4 transition-colors duration-300">
              {t(`services.items.${service.translationKey}.title`)}
            </h3>
            <p className="font-body text-main-gray group-hover:text-gray-300 transition-colors duration-300">
              {t(`services.items.${service.translationKey}.description`)}
            </p>

            {/* Hover Arrow */}
            <div className="absolute right-8 bottom-8 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-app-secondary"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
