import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import { ContactIcons } from "../../components/Contact";

export const ProjectPage = (): JSX.Element => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="mt-12 md:mt-16">
      {/* Back Link */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-main-black hover:text-app-secondary transition-colors duration-200 mb-8 md:mb-12"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-dm-sans text-base">
          {t("projects.backToProjects")}
        </span>
      </Link>

      {/* Project Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="md:col-span-8">
          <h1 className="font-dm-sans text-3xl md:text-4xl text-main-black tracking-tight leading-tight mb-4">
            {t(`projects.items.${project.translationKey}.title`)}
          </h1>
          <p className="font-dm-sans text-base md:text-lg text-main-gray">
            {t(`projects.items.${project.translationKey}.fullDescription`)}
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-start">
          <h2 className="font-dm-sans text-base md:text-lg text-main-black mb-2">
            {t("projects.toolsUsed")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tools?.map((tool) => (
              <span
                key={tool}
                className="inline-block px-3 py-1 bg-[#f8f8f8] rounded-lg text-sm text-main-gray"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="space-y-8 mb-16 md:mb-24">
        <h2 className="font-dm-sans text-2xl md:text-3xl text-main-black tracking-tight leading-tight">
          {t("projects.projectGallery")}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {project.gallery?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${t(
                `projects.items.${project.translationKey}.title`
              )} - Image ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-[600px] mx-auto">
        <h2 className="font-dm-sans text-2xl md:text-3xl text-main-black tracking-tight leading-tight mb-4">
          {t("contact.cta.title")}
        </h2>
        <p className="font-dm-sans text-base md:text-lg text-main-gray mb-8">
          {t("contact.cta.description")}
        </p>
        <div className="flex justify-center">
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};
