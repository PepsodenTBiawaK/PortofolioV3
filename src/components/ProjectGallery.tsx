"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight, Plus } from "./Icons";
import type { Project } from "@/types/project";

const ProjectModal = dynamic(() => import("./ProjectModal"));
const filters = [
  { value: "all", label: "Semua karya" },
  { value: "design", label: "UI/UX Design" },
  { value: "development", label: "Development" },
] as const;

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | Project["category"]>("all");
  const [active, setActive] = useState<Project | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  return (
    <>
      <div className="work-toolbar">
        <div className="work-filters" role="group" aria-label="Filter karya">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-controls="project-grid"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
              <span>
                {item.value === "all"
                  ? projects.length
                  : projects.filter(
                      (project) => project.category === item.value,
                    ).length}
              </span>
            </button>
          ))}
        </div>
        <span className="work-count" role="status" aria-live="polite">
          {String(visible.length).padStart(2, "0")} proyek terpilih
        </span>
      </div>
      <div className="project-grid" id="project-grid">
        {visible.map((project, index) => (
          <article
            className={`project-card ${index === 0 ? "project-featured" : ""}`}
            key={project.id}
          >
            <button
              type="button"
              className="project-open"
              aria-label={`Lihat proyek ${project.title}`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                setActive(project);
              }}
            >
              <div className={`project-media project-${project.id}`}>
                <Image
                  src={project.preview}
                  alt={`Pratinjau ${project.name}`}
                  width={1600}
                  height={900}
                  sizes={
                    index === 0
                      ? "(min-width: 900px) 750px, 92vw"
                      : "(min-width: 900px) 580px, 92vw"
                  }
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-media-action">
                  <Plus />
                  Lihat lebih dekat
                </span>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>
                    {String(projects.indexOf(project) + 1).padStart(2, "0")} /{" "}
                    {project.discipline}
                  </span>
                  <span className="project-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-info-bottom">
                  <span>{project.platform}</span>
                  <span>
                    Lihat proyek <ArrowUpRight />
                  </span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>
      {active && (
        <ProjectModal
          project={active}
          onClose={() => {
            setActive(null);
            requestAnimationFrame(() =>
              opener.current?.focus({ preventScroll: true }),
            );
          }}
        />
      )}
    </>
  );
}
