import type { Project } from "./project";

// Only these five fields are required when adding a project.
export type ProjectContent = Pick<
  Project,
  "id" | "name" | "category" | "summary" | "cover"
> &
  Partial<Omit<Project, "id" | "name" | "category" | "summary" | "cover">> & {
    visible?: boolean;
  };

export type CertificateContent = {
  title: string;
  issuer: string;
  href?: string;
  image?: string;
  visible?: boolean;
};

export type EditorialHeading = {
  firstLine: string;
  secondLine?: string;
  accent: string;
};
