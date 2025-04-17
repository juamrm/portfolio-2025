import React from "react";
import { Separator } from "../../components/ui/separator";
import profilePhoto from "../../assets/Foto Juliana.jpeg";

export const PortfolioAboutPage = (): JSX.Element => {
  // Skills and software data
  const softwareSkills = [
    {
      title: "My stack",
      skills: [
        "Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger",
        "Adobe CC, Figma, Ableton",
      ],
    },
    {
      title: "Main Skills",
      skills: [
        "Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          {/* Left column with heading */}
          <div className="md:col-span-6 flex flex-col justify-start">
            <h1 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-main-black text-4xl md:text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
              Hi I&apos;m Juliana Amorim.
              <br />
              Web and Product Designer.
            </h1>
          </div>

          {/* Right column with image */}
          <div className="md:col-span-6 flex items-center">
            <div className="w-[280px] h-[160px] overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover object-center"
                alt="Profile photo"
                src={profilePhoto}
              />
            </div>
          </div>
        </div>

        {/* About text in right column */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-start-7 md:col-span-6">
            <p className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-main-gray text-xl md:text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              My work is mainly focused on third-dimension modeling, texturing
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production.
              <br />
              <br />
              Now I&apos;m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16 md:mt-[136px]">
        <div className="grid grid-cols-1 md:grid-cols-[124px_auto] gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12">
          {softwareSkills.map((category) => (
            <React.Fragment key={category.title}>
              <h3 className="[font-family:'Inter',Helvetica] font-medium text-main-black text-lg tracking-[-0.54px] leading-[21.9px] underline whitespace-nowrap">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, index) => (
                  <p
                    key={index}
                    className="font-body font-[number:var(--body-font-weight)] text-main-black text-base md:text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 md:mt-[134px]">
        <Separator className="w-full h-0.5" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 mt-8 md:mt-20">
          <div className="flex items-center">
            <p className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-main-black text-xl md:text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              I am thrilled to answer to your next project
            </p>
            <img className="w-6 h-[21px] ml-4" alt="Arrow" src="/-.svg" />
          </div>

          <p className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-main-black text-xl md:text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] break-all md:whitespace-nowrap [font-style:var(--heading-2-font-style)]">
            juamorim@me.com
          </p>
        </div>
      </section>
    </>
  );
};
