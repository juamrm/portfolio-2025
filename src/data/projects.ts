export interface Project {
  id: string;
  translationKey: string;
  image: string;
  year: string;
  tools: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "creature-design",
    translationKey: "creatureDesign",
    image: "/creature-design.png",
    year: "2024",
    tools: ["ZBrush", "Maya", "Mari", "Arnold Renderer"],
    gallery: [
      "/creature-design/detail-1.png",
      "/creature-design/detail-2.png",
      "/creature-design/detail-3.png",
    ],
  },
  {
    id: "character-design",
    translationKey: "characterDesign",
    image: "/character-design.png",
    year: "2024",
    tools: ["ZBrush", "Maya", "Mari", "Blender"],
    gallery: [
      "/character-design/detail-1.png",
      "/character-design/detail-2.png",
      "/character-design/detail-3.png",
    ],
  },
  {
    id: "environment-design",
    translationKey: "environmentDesign",
    image: "/environment-design.png",
    year: "2024",
    tools: ["Maya", "ZBrush", "Mari", "Arnold Renderer"],
    gallery: [
      "/environment-design/detail-1.png",
      "/environment-design/detail-2.png",
      "/environment-design/detail-3.png",
    ],
  },
];
