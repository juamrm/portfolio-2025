import { useTranslation } from "react-i18next";
import profileSVG from "../assets/Foto Juliana 1.svg";

export const Hero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center py-8 md:py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Left column with heading */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <h1 className="font-dm-sans text-[2.5rem] md:text-[3.5rem] text-main-black tracking-[var(--heading-1-letter-spacing)] leading-[1.2]">
            {t("hero.greeting")}
          </h1>
          <p className="mt-4 font-dm-sans text-lg md:text-base text-main-gray tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)]">
            {t("hero.description")}
          </p>
        </div>

        {/* Right column with image */}
        <div className="md:col-span-6 flex justify-center items-center">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-full border-4 border-[#f8f8f8] shadow-lg">
            <img
              className="w-full h-full object-cover object-center"
              alt="Profile photo"
              src={profileSVG}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
