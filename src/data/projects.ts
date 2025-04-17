export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  fullDescription: string;
  tools: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "creature-design",
    title: "Creature Design",
    description: "Organic Modeling, Texturing",
    image: "/creature-design.png",
    year: "2024",
    fullDescription: "A series of creature designs exploring organic forms and textures. Each creature is carefully crafted to balance both aesthetic appeal and anatomical plausibility, pushing the boundaries between reality and imagination.",
    tools: ["ZBrush", "Maya", "Mari", "Arnold Renderer"],
    gallery: [
      "/creature-design/detail-1.png",
      "/creature-design/detail-2.png",
      "/creature-design/detail-3.png",
    ],
  },
  {
    id: "character-design",
    title: "Character Design",
    description: "Organic Modeling, Texturing",
    image: "/character-design.png",
    year: "2024",
    fullDescription: "Character design project focusing on creating unique personalities through detailed modeling and texturing. Each character tells its own story through carefully crafted features and expressions.",
    tools: ["ZBrush", "Maya", "Mari", "Blender"],
    gallery: [
      "/character-design/detail-1.png",
      "/character-design/detail-2.png",
      "/character-design/detail-3.png",
    ],
  },
  {
    id: "environment-design",
    title: "Environment Design",
    description: "Organic Modeling, Texturing",
    image: "/environment-design.png",
    year: "2024",
    fullDescription: "Environmental design project showcasing the creation of immersive spaces. Each environment is designed to tell a story through atmospheric lighting and detailed texturing.",
    tools: ["Maya", "ZBrush", "Mari", "Arnold Renderer"],
    gallery: [
      "/environment-design/detail-1.png",
      "/environment-design/detail-2.png",
      "/environment-design/detail-3.png",
    ],
  },
];