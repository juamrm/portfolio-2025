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
    <div className="mt-20 md:mt-24">
      {/* Introduction Section */}
      <div className="max-w-[800px] mb-8 md:mb-12">
        <h1 className="font-dm-sans text-2xl md:text-3xl text-main-black tracking-tight leading-tight mb-3">
          {t("projects.title")}
        </h1>
        <p className="font-dm-sans text-base text-main-gray">
          {t("projects.introduction")}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className="group relative p-8 rounded-2xl transition-all duration-300 hover:bg-[#111] cursor-pointer border border-gray-100 hover:border-transparent bg-[#f8f8f8]">
              {/* Project Status Icon */}
              <div className="w-12 h-12 rounded-full bg-app-secondary/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-app-secondary"
                >
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                  <path d="M8 13h8" />
                </svg>
              </div>

              {/* Project Content */}
              <h3 className="font-dm-sans text-2xl text-main-black group-hover:text-white mb-4 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="font-dm-sans text-main-gray group-hover:text-gray-300 transition-colors duration-300">
                {project.description}
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
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="font-dm-sans text-xl md:text-2xl text-main-black tracking-tight leading-tight mb-3">
          {t("contact.cta.title")}
        </h2>
        <p className="font-dm-sans text-base text-main-gray mb-6">
          {t("contact.cta.description")}
        </p>
        <div className="flex justify-center">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
