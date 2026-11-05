export type Project = {
  id: string;
  title: string;
  name: string;
  category: "design" | "development";
  discipline: string;
  platform: string;
  summary: string;
  description: string;
  context: string;
  focus: { title: string; description: string }[];
  cover: string;
  preview: string;
  images: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};
