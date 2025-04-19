import { useTranslation } from "react-i18next";

export const Services = (): JSX.Element => {
  const { t } = useTranslation();

  const serviceItems = [
    { key: "webDesign", number: "1" },
    { key: "uiUxDesign", number: "2" },
    { key: "webDevelopment", number: "3" },
  ];

  return (
    <section id="services" className="w-full mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left column for heading */}
        <div className="md:col-span-4">
          <h2 className="font-dm-sans text-xl md:text-[length:var(--heading-2-font-size)] text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
            {t("services.title")}
          </h2>
        </div>

        {/* Right column for services grid */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-8">
            {serviceItems.map((service) => (
              <div
                key={service.key}
                className="group relative p-8 rounded-2xl transition-all duration-300 bg-[#f8f8f8] border border-gray-100"
              >
                {/* Service Number */}
                <div className="w-12 h-12 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6">
                  <span className="text-app-secondary text-xl font-bold">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-dm-sans text-lg md:text-2xl text-main-black mb-4">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="font-dm-sans text-sm md:text-base text-main-gray">
                  {t(`services.items.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
