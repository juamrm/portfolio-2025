import { useTranslation } from "react-i18next";
import profilePic from "../assets/profilepic.jpg";

export const Hero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-[50vh] flex items-center justify-center pt-16 pb-4 md:py-6 mt-8 md:mt-0"
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
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border border-[#f8f8f8] shadow-xl rounded-3xl">
            <img
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Profile photo"
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
