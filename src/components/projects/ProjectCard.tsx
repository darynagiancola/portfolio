import { Link } from 'react-router-dom'
import type { ProjectCardData } from '../../types/portfolio'

interface ProjectCardProps {
  project: ProjectCardData
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isPlaceholder = project.status === 'placeholder'

  return (
    <article
      className={`group rounded-panel border transition duration-300 ${
        isPlaceholder
          ? 'border-border/65 bg-surface/70 p-5 sm:p-6'
          : project.dominant
            ? 'border-accent/35 bg-surface p-6 shadow-card sm:p-8'
            : 'border-border bg-surface p-5 shadow-soft sm:p-6'
      }`}
      aria-label={project.title}
    >
      <div
        className={`relative overflow-hidden rounded-card border ${
          project.dominant ? 'mb-6 aspect-[16/9]' : 'mb-5 aspect-[16/10]'
        }`}
      >
        <img
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-bg/90 px-2.5 py-1 text-[0.68rem] tracking-[0.14em] text-muted uppercase">
          {project.thumbnail.label}
        </span>
      </div>

      <div className="space-y-3.5">
        <div className="space-y-2">
          <h3 className={`${project.dominant ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
          <p className="text-base text-text">{project.subtitle}</p>
          <p className="text-sm sm:text-base">{project.description}</p>
        </div>

        {isPlaceholder ? (
          <p className="text-xs tracking-[0.15em] text-muted uppercase">
            {project.tags.join(' · ')}
          </p>
        ) : (
          <ul className="flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-bg px-3 py-1 text-xs tracking-[0.08em] text-muted uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {isPlaceholder ? (
          <p className="text-sm text-muted">{project.ctaLabel}</p>
        ) : (
          <Link
            to={project.href}
            className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-2 text-sm tracking-[0.08em] text-bg uppercase transition hover:-translate-y-0.5 hover:brightness-95"
          >
            {project.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}
