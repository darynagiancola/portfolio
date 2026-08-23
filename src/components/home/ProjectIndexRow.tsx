import type { ProjectCardData } from '../../types/portfolio'

interface ProjectIndexRowProps {
  project: ProjectCardData
  index: number
}

export function ProjectIndexRow({ project, index }: ProjectIndexRowProps) {
  return (
    <li className="border-t border-border/55 py-5 first:border-t-0 first:pt-0 lg:py-6">
      <div className="grid gap-2 lg:grid-cols-12 lg:items-baseline lg:gap-8">
        <p className="meta-label-quiet lg:col-span-1">
          {String(index).padStart(2, '0')}
        </p>
        <h3 className="font-sans text-[1.22rem] leading-snug text-text lg:col-span-4 lg:text-[1.32rem]">
          {project.title}
        </h3>
        <p className="max-w-[34rem] text-[0.96rem] lg:col-span-5">{project.description}</p>
        <p className="meta-label-quiet lg:col-span-2 lg:text-right">{project.subtitle}</p>
      </div>
    </li>
  )
}
