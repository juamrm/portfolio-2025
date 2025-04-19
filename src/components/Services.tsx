import { useTranslation } from "react-i18next";

export const Services = (): JSX.Element => {
  const { t } = useTranslation();

  const skillItems = [
    {
      key: "webDesign",
      number: "1",
      skills: ["Figma", "Photoshop", "Illustrator"],
    },
    {
      key: "uiUxDesign",
      number: "2",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing"],
    },
    {
      key: "webDevelopment",
      number: "3",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
  ];

  const languages = [
    { language: "Portuguese", level: "Native", percentage: "100%" },
    { language: "Spanish", level: "Fluent", percentage: "95%" },
    { language: "English", level: "Fluent", percentage: "90%" },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Left column for heading and languages */}
            <div className="md:col-span-4">
              <h2 className="font-dm-sans text-xl md:text-[length:var(--heading-2-font-size)] text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-8">
                {t("services.title")}
              </h2>

              {/* Languages Section */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-dm-sans text-lg text-main-black mb-4">
                  Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.language} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-dm-sans text-sm text-main-black">
                          {lang.language}
                        </span>
                        <span className="text-sm text-app-secondary font-medium">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-app-secondary/20 rounded-full transition-all duration-500 ease-out"
                          style={{ width: lang.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column for services */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-8">
                {skillItems.map((service) => (
                  <div
                    key={service.key}
                    className="group relative p-8 rounded-2xl transition-all duration-300 bg-white hover:shadow-lg border border-gray-100 hover:border-app-secondary/20"
                  >
                    {/* Service Number */}
                    <div className="w-12 h-12 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6 group-hover:bg-app-secondary/20 transition-colors duration-300">
                      <span className="text-app-secondary text-xl font-bold">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="font-dm-sans text-lg md:text-2xl text-main-black mb-4 group-hover:text-app-secondary transition-colors duration-300">
                      {t(`services.items.${service.key}.title`)}
                    </h3>
                    <p className="font-dm-sans text-sm md:text-base text-main-gray mb-6">
                      {t(`services.items.${service.key}.description`)}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-[#FAFAFA] group-hover:bg-app-secondary/5 text-sm text-main-gray transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
