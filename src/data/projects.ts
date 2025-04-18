export interface Project {
  id: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "web-design",
    title: "Web Design",
    description: "Modern & Responsive Design",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Full-Stack Applications",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "User Interface & Experience",
  },
];
