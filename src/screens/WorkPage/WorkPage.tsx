import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { projects } from "../../data/projects";
import { ContactIcons } from "../../components/Contact";

export const WorkPage = (): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-32 md:mt-40">
      {/* Introduction Section */}
      <div className="max-w-[800px] mb-16 md:mb-20">
        <h1 className="font-dm-sans text-4xl md:text-5xl text-main-black tracking-tight leading-tight mb-6">
          {t("projects.title")}
        </h1>
        <p className="font-dm-sans text-lg text-main-gray">
          {t("projects.introduction")}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 mb-16 md:mb-20">
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="group relative p-12 rounded-2xl transition-all duration-300 hover:bg-[#111] cursor-pointer border border-gray-100 hover:border-transparent bg-[#f8f8f8]">
              {/* Project Number */}
              <div className="w-16 h-16 rounded-full bg-app-secondary/10 flex items-center justify-center mb-8">
                <span className="text-app-secondary text-2xl font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Project Content */}
              <h3 className="font-dm-sans text-3xl text-main-black group-hover:text-white mb-4 transition-colors duration-300">
                {t(`projects.items.${project.translationKey}.title`)}
              </h3>
              <p className="font-dm-sans text-lg text-main-gray group-hover:text-gray-300 transition-colors duration-300 max-w-2xl">
                {t(`projects.items.${project.translationKey}.description`)}
              </p>

              {/* Hover Arrow */}
              <div className="absolute right-12 bottom-12 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg
                  width="32"
                  height="32"
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
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="font-dm-sans text-2xl md:text-3xl text-main-black tracking-tight leading-tight mb-4">
          {t("contact.cta.title")}
        </h2>
        <p className="font-dm-sans text-lg text-main-gray mb-8">
          {t("contact.cta.description")}
        </p>
        <div className="flex justify-center">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
