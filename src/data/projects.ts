import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "web-design",
    translationKey: "webDesign",
    tools: ["Figma", "Adobe XD", "HTML", "CSS", "JavaScript"],
    gallery: ["/projects/web-design/1.jpg", "/projects/web-design/2.jpg"],
  },
  {
    id: "web-development",
    translationKey: "webDevelopment",
    tools: ["React", "TypeScript", "Node.js", "MongoDB"],
    gallery: [
      "/projects/web-development/1.jpg",
      "/projects/web-development/2.jpg",
    ],
  },
  {
    id: "ui-ux-design",
    translationKey: "uiUxDesign",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    gallery: ["/projects/ui-ux/1.jpg", "/projects/ui-ux/2.jpg"],
  },
];
