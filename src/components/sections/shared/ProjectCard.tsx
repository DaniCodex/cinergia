import Image from "next/image";
import { Badge, Icon } from "@/components/ui";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const CardInner = (
    <>
      <div className="relative h-48 w-full overflow-hidden bg-slate-200">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.isPlaceholder && (
          <Badge tone="warning" className="absolute right-3 top-3">
            Ejemplo
          </Badge>
        )}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <Badge tone="blue" className="mb-3 w-fit">
          {project.area}
        </Badge>
        <h3 className="font-display text-lg font-bold text-brand-dark">{project.title}</h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-500">{project.summary}</p>
        {project.href && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue">
            Ver más <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </>
  );

  const baseClasses =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} hover:-translate-y-1 hover:shadow-md`}
      >
        {CardInner}
      </a>
    );
  }

  return <article className={baseClasses}>{CardInner}</article>;
}
