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
      <section className="pt-20 md:pt-40 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20 md:mb-32">
          {/* Left column with heading */}
          <div className="md:col-span-7 flex flex-col justify-start">
            <h1 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-main-black text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Hi I&apos;m Juliana Amorim.
              <br />
              <span className="text-app-secondary">Web and Product Designer.</span>
            </h1>
          </div>

          {/* Right column with image */}
          <div className="md:col-span-5 flex justify-center md:justify-end items-center">
            <div className="w-[220px] h-[220px] overflow-hidden rounded-full border-4 border-[#f8f8f8] shadow-sm">
              <img
                className="w-full h-full object-cover object-center"
                alt="Profile photo"
                src={profilePhoto}
              />
            </div>
          </div>
        </div>

        {/* About section with cleaner layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20">
          {/* Left column for heading */}
          <div className="md:col-span-4">
            <h2 className="font-heading-2 text-main-black text-2xl md:text-3xl font-medium tracking-tight mb-0 md:sticky md:top-8">
              About Me
            </h2>
          </div>
          
          {/* Right column for content */}
          <div className="md:col-span-8">
            <div className="space-y-6 text-main-gray">
              <p className="font-body text-lg leading-relaxed">
                I'm Juliana Amorim, a Full-Stack Web Developer and UX/UI Designer dedicated to crafting intuitive and impactful digital experiences.
              </p>
              
              <div className="space-y-6 pl-0">
                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-medium text-main-black mb-2">Factoría F5</h3>
                  <p className="font-body text-base leading-relaxed">An inclusive digital school in Spain, offering intensive, high-impact training in mobile and web development, aiming to provide access to high-demand employment opportunities.</p>
                </div>
                
                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-medium text-main-black mb-2">Instituto Tramontana</h3>
                  <p className="font-body text-base leading-relaxed">A business school with a humanistic and multidisciplinary approach, focusing on elevating professionals who create products and services.</p>
                </div>
                
                <div className="border-l-2 border-app-secondary pl-6 py-1">
                  <h3 className="font-medium text-main-black mb-2">Nuclio Digital School</h3>
                  <p className="font-body text-base leading-relaxed">A leading digital training institution in Spain, offering Master's programs in areas like UX/UI Design and Full Stack Development, emphasizing practical, hands-on learning.</p>
                </div>
              </div>
              
              <p className="font-body text-base leading-relaxed pt-4">
                My technical toolkit includes HTML, CSS, JavaScript, React, and Node.js, complemented by design tools like Figma, Framer, Webflow, and the Adobe Creative Suite.
              </p>
              
              <p className="font-body text-base leading-relaxed">
                I approach each project with a blend of design thinking and agile methodologies, ensuring solutions that are both user-centric and scalable. I'm passionate about collaborating on projects that merge aesthetics with functionality.
              </p>
            </div>
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
