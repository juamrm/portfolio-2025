import { useTranslation } from "react-i18next";

export const About = (): JSX.Element => {
  const { t } = useTranslation();

  const educationItems = [
    { key: "factoria" },
    { key: "tramontana" },
    { key: "nuclio" },
  ];

  const tools = [
    {
      category: "productivity",
      items: ["OFFICE", "GOOGLE SUITE", "NOTION"],
    },
    {
      category: "design",
      items: ["FIGMA", "WEBFLOW", "FRAMER", "ADOBE SUITE"],
    },
    {
      category: "projectManagement",
      items: ["MIRO", "JIRA", "ASANA"],
    },
    {
      category: "development",
      items: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "REACT",
        "VUE",
        "TAILWINDCSS",
        "SASS",
        "DOCKER",
        "VITE",
        "NETLIFY",
        "GSAP",
        "GIT",
        "GITHUB",
        "NPM",
      ],
    },
    {
      category: "other",
      items: ["CMS", "CHATGPT", "RELUME"],
    },
  ];

  return (
    <section className="space-y-16 mb-12">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left column for heading */}
        <div className="md:col-span-4">
          <h2 className="font-dm-sans text-base md:text-lg text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
            {t("about.title")}
          </h2>
        </div>

        {/* Right column for content */}
        <div className="md:col-span-8">
          <div className="space-y-6">
            <p className="font-dm-sans text-sm md:text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
              {t("about.introduction")}
            </p>

            <div className="space-y-6 pl-0">
              {educationItems.map((item) => (
                <div
                  key={item.key}
                  className="border-l-2 border-app-secondary pl-6 py-1"
                >
                  <h3 className="font-dm-sans text-base md:text-lg text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-2">
                    {t(`about.education.${item.key}.title`)}
                  </h3>
                  <p className="font-dm-sans text-sm md:text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                    {t(`about.education.${item.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-4">
          <h2 className="font-dm-sans text-base md:text-lg text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
            Stack
          </h2>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((category) => (
              <div
                key={category.category}
                className={
                  category.category === "development" ? "col-span-2" : ""
                }
              >
                <h3 className="font-dm-sans text-xs uppercase tracking-wider text-main-black mb-3 opacity-80">
                  {t(`about.categories.${category.category}`)}
                </h3>
                <div className="space-y-1.5">
                  {category.items.map((tool) => (
                    <div
                      key={tool}
                      className="inline-block mr-2 mb-2 px-3 py-1 rounded-full bg-[#FAFAFA] text-xs text-main-gray transition-colors duration-300 hover:bg-app-secondary/5 border border-gray-100"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
