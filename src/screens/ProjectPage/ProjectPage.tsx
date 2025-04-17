import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { Separator } from "../../components/ui/separator";

export const ProjectPage = (): JSX.Element => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    navigate("/work");
    return null;
  }

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h1 className="font-heading-1 text-4xl md:text-[length:var(--heading-1-font-size)] text-main-black tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)]">
              {project.title}
            </h1>
            <span className="font-body text-main-gray">{project.year}</span>
          </div>
          <p className="font-heading-2 text-xl md:text-[length:var(--heading-2-font-size)] text-main-gray tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] max-w-[800px]">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* Main Image */}
      <section>
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[16/9] object-cover rounded-lg"
        />
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="font-heading-2 text-2xl text-main-black mb-6">
          Tools Used
        </h2>
        <div className="flex flex-wrap gap-4">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-white rounded-full text-main-gray font-body"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="font-heading-2 text-2xl text-main-black mb-8">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} detail ${index + 1}`}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Next Project */}
      <section className="mt-8">
        <Separator className="w-full h-0.5 mb-8" />
        <button
          onClick={() => navigate("/work")}
          className="flex items-center gap-4 group"
        >
          <span className="font-heading-2 text-xl text-main-black group-hover:text-app-secondary transition-colors">
            Back to Projects
          </span>
          <img
            className="w-6 h-[21px] rotate-180 group-hover:translate-x-[-4px] transition-transform"
            alt="Arrow"
            src="/-.svg"
          />
        </button>
      </section>
    </div>
  );
};
