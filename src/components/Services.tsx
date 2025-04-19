import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Services = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const serviceItems = [
    { key: "webDesign", number: "1" },
    { key: "uiUxDesign", number: "2" },
    { key: "webDevelopment", number: "3" },
  ];

  const handleServiceClick = (key: string) => {
    navigate("/under-construction", { state: { returnPath: "/#services" } });
  };

  return (
    <section id="services" className="w-full mb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left column for heading */}
        <div className="md:col-span-4">
          <h2 className="font-dm-sans text-2xl md:text-[length:var(--heading-2-font-size)] text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
            {t("services.title")}
          </h2>
        </div>

        {/* Right column for services grid */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-8">
            {serviceItems.map((service) => (
              <div
                key={service.key}
                onClick={() => handleServiceClick(service.key)}
                className="group relative p-8 rounded-2xl transition-all duration-300 hover:bg-[#111] cursor-pointer border border-gray-100 hover:border-transparent bg-[#f8f8f8]"
              >
                {/* Service Number */}
                <div className="w-12 h-12 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6">
                  <span className="text-app-secondary text-xl font-bold">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-dm-sans text-2xl text-main-black group-hover:text-white mb-4 transition-colors duration-300">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="font-dm-sans text-main-gray group-hover:text-gray-300 transition-colors duration-300">
                  {t(`services.items.${service.key}.description`)}
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
        </div>
      </div>
    </section>
  );
};
