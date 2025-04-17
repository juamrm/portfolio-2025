import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export const WorkPage = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading-2 text-xl md:text-2xl text-main-black mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-main-gray">{project.description}</p>
                </div>
                <span className="font-body text-main-gray">{project.year}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};