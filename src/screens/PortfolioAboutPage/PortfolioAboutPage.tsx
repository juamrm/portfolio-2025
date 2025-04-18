import { useTranslation } from "react-i18next";
import profileSVG from "../../assets/Foto Juliana 1.svg";
import { Services } from "../../components/Services";

export const PortfolioAboutPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-2 md:pt-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32 items-center">
          {/* Left column with heading */}
          <div className="md:col-span-6 flex flex-col justify-center h-full">
            <h1 className="font-heading-1 text-4xl md:text-[length:var(--heading-1-font-size)] text-main-black tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)]">
              {t("hero.greeting")}
            </h1>
            <p className="mt-4 font-body text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
              {t("hero.description")}
            </p>
          </div>

          {/* Right column with image */}
          <div className="md:col-span-6 flex justify-center items-center h-full">
            <div className="w-[220px] h-[220px] overflow-hidden rounded-full border-4 border-[#f8f8f8] shadow-sm">
              <img
                className="w-full h-full object-cover object-center"
                alt="Profile photo"
                src={profileSVG}
              />
            </div>
          </div>
        </div>

        {/* About section with cleaner layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20">
          {/* Left column for heading */}
          <div className="md:col-span-4">
            <h2 className="font-heading-2 text-2xl md:text-[length:var(--heading-2-font-size)] text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)]">
              {t("about.title")}
            </h2>
          </div>

          {/* Right column for content */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="font-body text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                {t("about.introduction")}
              </p>

              <div className="space-y-6 pl-0">
                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-heading-2 text-xl md:text-2xl text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-2">
                    {t("about.education.factoria.title")}
                  </h3>
                  <p className="font-body text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                    {t("about.education.factoria.description")}
                  </p>
                </div>

                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-heading-2 text-xl md:text-2xl text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-2">
                    {t("about.education.tramontana.title")}
                  </h3>
                  <p className="font-body text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                    {t("about.education.tramontana.description")}
                  </p>
                </div>

                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-heading-2 text-xl md:text-2xl text-main-black tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] mb-2">
                    {t("about.education.nuclio.title")}
                  </h3>
                  <p className="font-body text-[length:var(--body-font-size)] text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
                    {t("about.education.nuclio.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <Services />
      </section>
    </>
  );
};
