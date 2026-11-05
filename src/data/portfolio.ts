// File penghubung untuk tampilan. Untuk mengubah isi, edit src/content/portfolio.ts.
import {
  profile as profileContent,
  pageContent,
  socialLinks,
  projects as projectContent,
  certificates as certificateContent,
} from "@/content/portfolio";
import type { Project } from "@/types/project";

export { pageContent, socialLinks };
export const profile = {
  ...profileContent,
  fullName: [profileContent.firstName, profileContent.lastName]
    .filter(Boolean)
    .join(" "),
};

export const projects: Project[] = projectContent
  .filter((project) => project.visible !== false)
  .map((project) => ({
    id: project.id,
    name: project.name,
    title: project.title || project.name,
    category: project.category,
    discipline:
      project.discipline ||
      (project.category === "design" ? "UI/UX Design" : "Development"),
    platform: project.platform || "",
    summary: project.summary,
    description: project.description || project.summary,
    context: project.context || "",
    focus: project.focus || [],
    cover: project.cover,
    preview: project.preview || project.cover,
    images: project.images || [],
    tags: project.tags || [],
    links: project.links,
  }));

export const certificates = certificateContent
  .filter((certificate) => certificate.visible !== false)
  .map((certificate) => ({
    ...certificate,
    href: certificate.href?.trim() || certificate.image?.trim() || "",
  }));
